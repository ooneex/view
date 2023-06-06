import { Message } from "../components/Message.tsx";
import { render } from "./render.tsx";

type PropsType = {
  message: string;
};

export const ShowMessage = ({ message }: PropsType) => {
  return <Message message={message} />;
};

// Don't change it
render(ShowMessage, "__5e8926c0-1311-4ef4-abf2-3ca7786b64ce__");
