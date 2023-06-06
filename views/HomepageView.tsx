import { Island } from "@hypervit/island";
import { Body, Head, Page } from "@hypervit/view";

export interface IHomepageViewProps {
  message: string;
}

export const HomepageView = ({ message }: IHomepageViewProps) => {
  return (
    <Page className={"bg-secondary text-primary"}>
      <Head title="Homepage" />
      <Body>
        <h1>HomepageView</h1>
        <Island name="ShowMessage" message={message}>
          Loading...
        </Island>
      </Body>
    </Page>
  );
};
