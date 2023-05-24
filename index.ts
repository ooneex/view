import { config } from "@config/app";
import { Collection } from "@ooneex/collection";
import { NotFoundController, ServerErrorController } from "@ooneex/controller";
import { Directory } from "@ooneex/directory";
import { print } from "@ooneex/exception";
import { Server } from "@ooneex/http";
import { get, Keys, registerConstant } from "@ooneex/ioc";
import { Kernel } from "@ooneex/kernel";
import {
  IRoute,
  Router,
} from "https://deno.land/x/ooneex@0.0.12/Routing/mod.ts";

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
