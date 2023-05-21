import { Route } from "@ooneex/decorator";
import { Request, Response as HttpResponse } from "@ooneex/http";
import { HomepageView, IHomepageViewProps } from "@views";

export class HomepageController {
  @Route("homepage", "/")
  public async index(
    _request: Request,
    response: HttpResponse,
  ): Promise<Response> {
    return await response.render<IHomepageViewProps>(HomepageView, {
      message: "Welcome",
    });
  }
}
