import { config } from "@config/app";
import { Collection } from "@hypervit/collection";
import { loadControllers } from "@hypervit/controller";
import { print } from "@hypervit/exception";
import { Server } from "@hypervit/http";
import { get, Keys, registerConstant } from "@hypervit/ioc";
import { compileIslands } from "@hypervit/island";
import { Kernel } from "@hypervit/kernel";
import { IRoute, Router } from "@hypervit/routing";

try {
  Kernel.boot({
    app: config,
    type: "view",
    rootDir: new URL(".", import.meta.url).pathname.replace(/\/+$/, ""),
  });

  const controllers = loadControllers(config.directories.controllers);

  for (const controller of controllers) {
    const name = controller.getName();
    const c = await import(`./${controller.getPath()}`);
    new c[name]();
  }

  const routes = get<Collection<string, IRoute>>(Keys.Routes);
  registerConstant(Keys.Router, new Router(routes));

  await compileIslands();
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
