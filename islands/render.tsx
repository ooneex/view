import { render as solidRender } from "solid-js/web";

declare global {
  interface Window {
    hypervit: {
      store: {
        islands: {
          data: Record<string, unknown>;
        };
      };
    };
  }
}

export const render = (Island: unknown, id: string) => {
  id = id.replace(/^__/, "").replace(/__$/, "");
  const elements = document.querySelectorAll<HTMLDivElement>(
    `div[data-hypervit-island-id="${id}"]`,
  );

  elements.forEach((element) => {
    const dataId = element.dataset.hypervitIslandDataId;

    const data = dataId
      ? window.hypervit.store.islands.data[dataId]
      : undefined;
    element.innerHTML = "";
    // @ts-ignore: trust me
    solidRender(() => <Island {...data} />, element);
  });
};
