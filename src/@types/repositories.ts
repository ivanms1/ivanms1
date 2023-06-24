export interface Repository {
  __typename: string;
  id: string;
  name: string;
  url: string;
  stargazerCount: number;
  description: string;
  forkCount: number;
}
