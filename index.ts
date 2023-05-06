import { print } from "@ooneex/exception";
import { Server } from "@ooneex/http";
import { Kernel } from "@ooneex/kernel";

Deno.env.set("ROOT_DIR", new URL(".", import.meta.url).pathname);

try {
  await Kernel.boot();
} catch (e) {
  print(e);
  Deno.exit(1);
}

const server = Server.create();
await server.start();
