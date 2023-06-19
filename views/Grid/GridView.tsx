import { Island } from "@hypervit/island";
import { Body, Head, Page } from "@hypervit/view";

export const GridView = () => {
  return (
    <Page>
      <Head title="Grid" />
      <Body>
        <h1>GridView</h1>
        <Island name="ShowGrid/ShowGrid" />
      </Body>
    </Page>
  );
};
