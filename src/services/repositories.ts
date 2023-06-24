import { gql } from "@apollo/client";
import { getGithubClient } from "lib/client";

import type { Repository } from "src/@types/repositories";

const PINNED_REPOSITORIES_QUERY = gql`
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
`;

export const getPinnedRepositories = async (): Promise<Repository[]> => {
  const client = getGithubClient();

  const { data } = await client.query({
    query: PINNED_REPOSITORIES_QUERY,
  });

  return data?.user?.pinnedItems?.nodes ?? [];
};
