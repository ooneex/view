import { Body, Head, Page } from "@hypervit/view";
import { HomepageViewPropsType } from "./types.ts";

export const HomepageView = ({ message }: HomepageViewPropsType) => {
  return (
    <Page>
      <Head title="Homepage" />
      <Body>
        <h1>HomepageView</h1>
        <p>{message}</p>
      </Body>
    </Page>
  );
};
