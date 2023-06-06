type PropsType = {
  message: string;
};

export const Message = ({ message }: PropsType) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};
