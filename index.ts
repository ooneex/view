import { config } from "@config/app";
import { Collection } from "@hypervit/collection";
import {
  NotFoundController,
  ServerErrorController,
} from "@hypervit/controller";
import { Directory } from "@hypervit/directory";
import { print } from "@hypervit/exception";
import { Server } from "@hypervit/http";
import { get, Keys, registerConstant } from "@hypervit/ioc";
import { Kernel } from "@hypervit/kernel";
import { IRoute, Router } from "@hypervit/routing";

try {
  Kernel.boot({
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
