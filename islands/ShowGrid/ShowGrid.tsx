import { Container } from "../../components/Container/Container.tsx";
import { Grid } from "../../components/Grid/Grid.tsx";
import { render } from "../render.tsx";

export const ShowGrid = () => {
  return (
    <Container spacing={"xs"}>
      <Grid size={"xs"} gap={"xs"}>
        <div className={"h-[150px]"}>01</div>
        <div className={"h-[150px]"}>01</div>
        <div className={"h-[150px]"}>01</div>
        <div className={"h-[150px]"}>01</div>
        <div className={"h-[150px]"}>01</div>
      </Grid>
    </Container>
  );
};

// Don't change it
render(ShowGrid, "__96e7010f-d922-4317-b932-e9c9555b5063__");
