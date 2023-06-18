import { Route } from "@hypervit/decorator";
import type { IRequest } from "@hypervit/http";
import { Response as HttpResponse } from "@hypervit/http";
import { TextView } from "@views/Text/mod.ts";

export class TextController {
  @Route("text", "/text", { methods: ["GET"] })
  public async index(
    _request: IRequest,
    response: HttpResponse,
  ): Promise<Response> {
    return await response.render(TextView);
  }
}
