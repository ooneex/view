import { Route } from "@hypervit/decorator";
import type { IRequest } from "@hypervit/http";
import { Response as HttpResponse } from "@hypervit/http";
import { GridView } from "@views/Grid/mod.ts";

export class GridController {
  @Route("grid", "/grid", { methods: ["GET"] })
  public async index(
    _request: IRequest,
    response: HttpResponse,
  ): Promise<Response> {
    return await response.render(GridView);
  }
}
