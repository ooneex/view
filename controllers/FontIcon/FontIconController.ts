import { Route } from "@hypervit/decorator";
import type { IRequest } from "@hypervit/http";
import { Response as HttpResponse } from "@hypervit/http";
import { FontIconView, FontIconViewPropsType } from "@views/FontIcon/mod.ts";

export class FontIconController {
  @Route("font_icon", "/font-icon", { methods: ["GET"] })
  public async index(
    _request: IRequest,
    response: HttpResponse,
  ): Promise<Response> {
    return await response.render<FontIconViewPropsType>(FontIconView, {
      message: "Welcome",
    });
  }
}
