import { Route } from "@hypervit/decorator";
import type { IRequest } from "@hypervit/http";
import { Response as HttpResponse } from "@hypervit/http";
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
