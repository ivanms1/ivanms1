import { getClient } from "lib/client";

import {
  GetUserPostsQueryResult,
  GetUserPostsQueryVariables,
  GetUserPostsDocument,
  ArticleBySlugDocument,
  ArticleBySlugQueryResult,
  ArticleBySlugQueryVariables,
} from "src/generated/graphql";

export const getArticles = async () => {
  const client = getClient();

  const { data } = await client.query<
    GetUserPostsQueryResult["data"],
    GetUserPostsQueryVariables
  >({
    query: GetUserPostsDocument,
    variables: {
      page: 0,
    },
  });

  const { data: secondPageData } = await client.query<
    GetUserPostsQueryResult["data"],
    GetUserPostsQueryVariables
  >({
    query: GetUserPostsDocument,
    variables: {
      page: 1,
    },
  });

  return {
    user: {
      publication: {
        posts: [
          ...(data?.user?.publication?.posts ?? []),
          ...(secondPageData?.user?.publication?.posts ?? []),
        ],
      },
    },
  };
};

export async function fetchArticle(slug: string) {
  if (!slug) throw new Error("slug is required");
  const client = getClient();
  const { data } = await client.query<
    ArticleBySlugQueryResult["data"],
    ArticleBySlugQueryVariables
  >({
    query: ArticleBySlugDocument,
    variables: {
      slug,
    },
  });

  return data;
}
