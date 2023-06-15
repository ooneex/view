import { Island } from "@hypervit/island";
import { Body, Head, Page } from "@hypervit/view";
import { FontIconViewPropsType } from "./types.ts";

export const FontIconView = ({ message }: FontIconViewPropsType) => {
  return (
    <Page>
      <Head title="FontIcon" />
      <Body>
        <h1>FontIconView</h1>
        <Island name="ShowFontIcon/ShowFontIcon" />
      </Body>
    </Page>
  );
};
