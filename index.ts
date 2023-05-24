import { Collection } from "https://deno.land/x/ooneex@0.0.12/Collection/mod.ts";
import {
  NotFoundController,
  ServerErrorController,
} from "https://deno.land/x/ooneex@0.0.12/Controller/mod.ts";
import { Directory } from "https://deno.land/x/ooneex@0.0.12/Directory/mod.ts";
import { print } from "https://deno.land/x/ooneex@0.0.12/Exception/mod.ts";
import { Server } from "https://deno.land/x/ooneex@0.0.12/Http/mod.ts";
import {
  get,
  Keys,
  registerConstant,
} from "https://deno.land/x/ooneex@0.0.12/Ioc/mod.ts";
import { Kernel } from "https://deno.land/x/ooneex@0.0.12/Kernel/mod.ts";
import {
  IRoute,
  Router,
} from "https://deno.land/x/ooneex@0.0.12/Routing/mod.ts";
import { config } from "./config/app/mod.ts";

try {
  await Kernel.boot({
    app: config,
    type: "view",
    rootDir: new URL(".", import.meta.url).pathname.replace(/\/+$/, ""),
  });

  // Load default NotFoundController
  new NotFoundController();

  // Load default ServerErrorController
  new ServerErrorController();

  // Load all app controllers
  const controllerDir = config.directories.controllers;
  const directory = new Directory(controllerDir);
  const controllers = directory.files(/Controller\.ts$/, true);

  for (const controller of controllers) {
    const name = controller.getName();
    const c = await import(`./${controller.getPath()}`);
    new c[name]();
  }

  const routes = get<Collection<string, IRoute>>(Keys.Routes);
  registerConstant(Keys.Router, new Router(routes));
} catch (e) {
  print(e);
  Deno.exit(1);
}

try {
  const server = Server.create();
  await server.start();
} catch (e) {
  print(e);
}
