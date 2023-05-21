import { getIsland, Island } from "@ooneex/island";
import { Body, Head } from "@ooneex/view";

export interface IHomepageViewProps {
  message: string;
}

const island = await getIsland("ShowMessage");

export const HomepageView = ({ message }: IHomepageViewProps) => {
  return (
    <>
      <Head title="Homepage" />
      <Body>
        <h1>HomepageView</h1>
        <Island config={island} data={{ key: 0, value: { message } }}>
          Loading...
        </Island>
      </Body>
    </>
  );
};
