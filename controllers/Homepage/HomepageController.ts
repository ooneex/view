import { Route } from "@hypervit/decorator";
import type { IRequest } from "@hypervit/http";
import { Response as HttpResponse } from "@hypervit/http";
import { HomepageView, HomepageViewPropsType } from "@views/Homepage/mod.ts";

export class HomepageController {
  @Route("homepage", "/", { methods: ["GET"] })
  public async index(
    _request: IRequest,
    response: HttpResponse,
  ): Promise<Response> {
    return await response.render<HomepageViewPropsType>(HomepageView, {
      message: "Welcome",
    });
  }
}
