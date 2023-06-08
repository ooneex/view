import { print } from "@hypervit/exception";
import { Kernel } from "@hypervit/kernel";

try {
  Kernel.boot();
} catch (e) {
  print(e);
  Deno.exit(1);
}
