import { render } from "../render.tsx";
import { ShowButtonPropsType } from "./types.ts";

export const ShowButton = ({ message }: ShowButtonPropsType) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};

// Don't change it
render(ShowButton, "__a453d0a3-4cc7-4f0c-a107-9885f72a306a__");
