import { Body, Header } from "@ooneex/view";

export interface IHomepageViewProps {
  message: string;
}

export const HomepageView = ({ message }: IHomepageViewProps) => {
  return (
    <>
      <Header title="Homepage" />
      <Body>
        <h1>HomepageView</h1>
        <p>{message}</p>
      </Body>
    </>
  );
};
