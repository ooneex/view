import { Route } from "@ooneex/decorator";
import { Request, Response as HttpResponse } from "@ooneex/http";
import { HomepageView, IHomepageViewProps } from "@views";

export class HomepageController {
  @Route("homepage", "/")
  public index(
    _request: Request,
    response: HttpResponse,
  ): Response {
    return response.render<IHomepageViewProps>(HomepageView, {
      message: "Welcome!",
    });
  }
}
