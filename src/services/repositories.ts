import { gql } from "@apollo/client";
import { getGithubClient } from "lib/client";

export interface Repository {
  __typename: string;
  id: string;
  name: string;
  url: string;
  stargazerCount: number;
  description: string;
  forkCount: number;
}

export const getPinnedRepositories = async (): Promise<Repository[]> => {
  const client = getGithubClient();

  const { data } = await client.query({
    query: gql`
      query {
        user(login: "ivanms1") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                url
                stargazerCount
                description
                forkCount
              }
            }
          }
        }
      }
    `,
  });

  return data?.user?.pinnedItems?.nodes ?? [];
};
