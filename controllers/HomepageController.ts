import { Route } from "@ooneex/decorator";
import type { IRequest } from "@ooneex/http";
import { Response as HttpResponse } from "@ooneex/http";
import { HomepageView, IHomepageViewProps } from "@views";

export class HomepageController {
  @Route("homepage", "/")
  public async index(
    _request: IRequest,
    response: HttpResponse,
  ): Promise<Response> {
    return await response.render<IHomepageViewProps>(HomepageView, {
      message: "Welcome",
    });
  }
}
