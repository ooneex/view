import { ButtonPropsType } from "./types.ts";

export const Button = ({ message }: ButtonPropsType) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};
