import { Island } from "@ooneex/island";
import { Body, Head } from "@ooneex/view";

export interface IHomepageViewProps {
  message: string;
}

export const HomepageView = ({ message }: IHomepageViewProps) => {
  return (
    <>
      <Head title="Homepage" />
      <Body>
        <h1>HomepageView</h1>
        <p>{message}</p>
        <Island name={"ShowUsers"} />
      </Body>
    </>
  );
};
