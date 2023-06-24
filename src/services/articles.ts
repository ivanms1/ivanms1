import { DEV_TO_API } from "src/const";

import type { Article } from "src/@types/articles";

export const getArticles = async (): Promise<Article[]> => {
  const res = await fetch(DEV_TO_API);
  const json = await res.json();
  return json;
};
