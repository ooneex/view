import { print } from "@hypervit/exception";
import { Server } from "@hypervit/http";
import { Kernel } from "@hypervit/kernel";

try {
  const { controllers } = Kernel.boot();

  for (const controller of controllers) {
    const name = controller.getName();
    const c = await import(`./${controller.getPath()}`);
    new c[name]();
  }

  await Kernel.terminate();
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
