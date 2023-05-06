import { response, ROUTE } from "@ooneex/decorator";
import { HttpResponse } from "@ooneex/http";

export class HomepageController {
  @ROUTE("homepage", "/")
  public index(
    @response response: HttpResponse,
  ): Response {
    return response.json({ message: "Welcome" });
  }
}
