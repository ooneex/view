type Props = {
  useData: <T>(key: string) => T;
};

export const ShowMessage = (props: Props) => {
  const { message } = props.useData<{ message: string }>("0");

  return <p>{message}</p>;
};
