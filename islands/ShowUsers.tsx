import { render } from "solid-js/web";

const ShowUsers = () => {
  return (
    <>
      <p>show users island</p>
    </>
  );
};

const elements = document.querySelectorAll<HTMLDivElement>(
  `div[data-ooneex-island-id="e13bce10-43e2-4f8d-935f-2dabf4b43fac"]`,
);
elements.forEach((element) => {
  const data = element.dataset;
  render(() => <ShowUsers {...data} />, element);
});
