import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Contributor = {
  __typename?: "Contributor";
  _id?: Maybe<Scalars["ID"]["output"]>;
  stamp?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
};

export type CreatePostOutput = MutationOutput & {
  __typename?: "CreatePostOutput";
  code: Scalars["Int"]["output"];
  message: Scalars["String"]["output"];
  post?: Maybe<PostDetailed>;
  success: Scalars["Boolean"]["output"];
};

export type CreateStoryInput = {
  contentMarkdown: Scalars["String"]["input"];
  coverImageURL?: InputMaybe<Scalars["String"]["input"]>;
  isPartOfPublication: PublicationDetails;
  isRepublished?: InputMaybe<IsRepublished>;
  publishAs?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  sourcedFromGithub?: InputMaybe<Scalars["Boolean"]["input"]>;
  subtitle?: InputMaybe<Scalars["String"]["input"]>;
  tags: Array<InputMaybe<TagsInput>>;
  title: Scalars["String"]["input"];
};

export type DeleteOutput = MutationOutput & {
  __typename?: "DeleteOutput";
  code: Scalars["Int"]["output"];
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export enum FeedType {
  Best = "BEST",
  Community = "COMMUNITY",
  Featured = "FEATURED",
  New = "NEW",
}

export type FollowUserOutput = MutationOutput & {
  __typename?: "FollowUserOutput";
  code: Scalars["Int"]["output"];
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type Links = {
  __typename?: "Links";
  github?: Maybe<Scalars["String"]["output"]>;
  hashnode?: Maybe<Scalars["String"]["output"]>;
  twitter?: Maybe<Scalars["String"]["output"]>;
  website?: Maybe<Scalars["String"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createPublicationStory: CreatePostOutput;
  createReply: CreateReplyOutput;
  createResponse: CreateResponseOutput;
  createStory: CreatePostOutput;
  deletePost: DeleteOutput;
  deleteReply: DeleteOutput;
  deleteResponse: DeleteOutput;
  followUser: FollowUserOutput;
  reactToReply: ReactToReplyOutput;
  reactToResponse: ReactToResponseOutput;
  reactToStory: ReactToPostOutput;
  updateReply: CreateReplyOutput;
  updateResponse: CreateResponseOutput;
  updateStory: CreatePostOutput;
};

export type MutationCreatePublicationStoryArgs = {
  hideFromHashnodeFeed?: InputMaybe<Scalars["Boolean"]["input"]>;
  input: CreateStoryInput;
  publicationId: Scalars["String"]["input"];
};

export type MutationCreateReplyArgs = {
  input: CreateReplyInput;
};

export type MutationCreateResponseArgs = {
  input: CreateResponseInput;
};

export type MutationCreateStoryArgs = {
  input: CreateStoryInput;
};

export type MutationDeletePostArgs = {
  id: Scalars["String"]["input"];
};

export type MutationDeleteReplyArgs = {
  postId: Scalars["String"]["input"];
  replyId: Scalars["String"]["input"];
  responseId: Scalars["String"]["input"];
};

export type MutationDeleteResponseArgs = {
  postId: Scalars["String"]["input"];
  responseId: Scalars["String"]["input"];
};

export type MutationFollowUserArgs = {
  userId: Scalars["String"]["input"];
};

export type MutationReactToReplyArgs = {
  input: ReactToReplyInput;
};

export type MutationReactToResponseArgs = {
  input: ReactToResponseInput;
};

export type MutationReactToStoryArgs = {
  input: ReactToPostInput;
};

export type MutationUpdateReplyArgs = {
  contentInMarkdown: Scalars["String"]["input"];
  postId: Scalars["String"]["input"];
  replyId: Scalars["String"]["input"];
  responseId: Scalars["String"]["input"];
};

export type MutationUpdateResponseArgs = {
  contentInMarkdown: Scalars["String"]["input"];
  postId?: InputMaybe<Scalars["String"]["input"]>;
  responseId: Scalars["String"]["input"];
};

export type MutationUpdateStoryArgs = {
  input: UpdateStoryInput;
  postId: Scalars["String"]["input"];
};

export type MutationOutput = {
  code: Scalars["Int"]["output"];
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type Poll = {
  __typename?: "Poll";
  pollClosingDate?: Maybe<Scalars["String"]["output"]>;
  pollOptions?: Maybe<Array<Maybe<PollOption>>>;
  pollRunningTime?: Maybe<Scalars["String"]["output"]>;
  totalVotes?: Maybe<Scalars["Int"]["output"]>;
};

export type PollOption = {
  __typename?: "PollOption";
  _id: Scalars["ID"]["output"];
  option: Scalars["String"]["output"];
  votes: Scalars["Int"]["output"];
};

export type PollOptionInput = {
  content: Scalars["String"]["input"];
};

export type Post = {
  __typename?: "Post";
  _id: Scalars["ID"]["output"];
  author?: Maybe<User>;
  bookmarkedIn?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  brief?: Maybe<Scalars["String"]["output"]>;
  contentMarkdown?: Maybe<Scalars["String"]["output"]>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
  coverImage: Scalars["String"]["output"];
  cuid?: Maybe<Scalars["String"]["output"]>;
  dateAdded?: Maybe<Scalars["String"]["output"]>;
  dateFeatured?: Maybe<Scalars["String"]["output"]>;
  dateUpdated?: Maybe<Scalars["String"]["output"]>;
  followersCount?: Maybe<Scalars["Int"]["output"]>;
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  numUniqueUsersWhoReacted?: Maybe<Scalars["Int"]["output"]>;
  partOfPublication?: Maybe<Scalars["Boolean"]["output"]>;
  poll?: Maybe<Poll>;
  popularity?: Maybe<Scalars["Float"]["output"]>;
  reactions?: Maybe<Array<Maybe<Reaction>>>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
  replyCount?: Maybe<Scalars["Int"]["output"]>;
  responseCount?: Maybe<Scalars["Int"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars["String"]["output"]>;
  totalReactions?: Maybe<Scalars["Int"]["output"]>;
  type: Scalars["String"]["output"];
};

export type PostDetailed = {
  __typename?: "PostDetailed";
  _id: Scalars["ID"]["output"];
  author?: Maybe<User>;
  bookmarkedIn?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  brief?: Maybe<Scalars["String"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  contentMarkdown?: Maybe<Scalars["String"]["output"]>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
  coverImage?: Maybe<Scalars["String"]["output"]>;
  cuid?: Maybe<Scalars["String"]["output"]>;
  dateAdded?: Maybe<Scalars["String"]["output"]>;
  dateUpdated?: Maybe<Scalars["String"]["output"]>;
  followersCount?: Maybe<Scalars["Int"]["output"]>;
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  isDelisted?: Maybe<Scalars["Boolean"]["output"]>;
  isFeatured?: Maybe<Scalars["Boolean"]["output"]>;
  isRepublished?: Maybe<Scalars["Boolean"]["output"]>;
  numCollapsed?: Maybe<Scalars["Int"]["output"]>;
  partOfPublication?: Maybe<Scalars["Boolean"]["output"]>;
  poll?: Maybe<Poll>;
  popularity?: Maybe<Scalars["Float"]["output"]>;
  publication?: Maybe<Publication>;
  reactions?: Maybe<Array<Maybe<ReactionsAndCount>>>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
  replyCount?: Maybe<Scalars["Int"]["output"]>;
  responseCount?: Maybe<Scalars["Int"]["output"]>;
  responses: Array<Response>;
  slug?: Maybe<Scalars["String"]["output"]>;
  sourcedFromGithub?: Maybe<Scalars["Boolean"]["output"]>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars["String"]["output"]>;
  totalReactions?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  untaggedFrom?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type PostDetailedResponsesArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Publication = {
  __typename?: "Publication";
  _id: Scalars["ID"]["output"];
  author?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  displayTitle?: Maybe<Scalars["String"]["output"]>;
  domain?: Maybe<Scalars["String"]["output"]>;
  embedCode?: Maybe<Scalars["String"]["output"]>;
  favicon?: Maybe<Scalars["String"]["output"]>;
  fbPixelID?: Maybe<Scalars["String"]["output"]>;
  gaTrackingID?: Maybe<Scalars["String"]["output"]>;
  headerColor?: Maybe<Scalars["String"]["output"]>;
  imprint?: Maybe<Scalars["String"]["output"]>;
  imprintMarkdown?: Maybe<Scalars["String"]["output"]>;
  isAMPEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  layout?: Maybe<Scalars["String"]["output"]>;
  links?: Maybe<Links>;
  logo?: Maybe<Scalars["String"]["output"]>;
  meta?: Maybe<Scalars["String"]["output"]>;
  metaHTML?: Maybe<Scalars["String"]["output"]>;
  metaTags?: Maybe<Scalars["String"]["output"]>;
  ogImage?: Maybe<Scalars["String"]["output"]>;
  posts?: Maybe<Array<Maybe<Post>>>;
  sitemapSubmitted?: Maybe<Scalars["Boolean"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  tweetedAboutBlog?: Maybe<Scalars["Boolean"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type PublicationPostsArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PublicationDetails = {
  publicationId: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  amas?: Maybe<Array<Maybe<Post>>>;
  post?: Maybe<PostDetailed>;
  storiesFeed?: Maybe<Array<Maybe<Post>>>;
  tagCategories?: Maybe<Array<Maybe<TagCategory>>>;
  user?: Maybe<User>;
};

export type QueryAmasArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryPostArgs = {
  hostname?: InputMaybe<Scalars["String"]["input"]>;
  slug: Scalars["String"]["input"];
};

export type QueryStoriesFeedArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  type: FeedType;
};

export type QueryUserArgs = {
  username: Scalars["String"]["input"];
};

export type ReactToPostInput = {
  postId: Scalars["String"]["input"];
  reaction: ReactionName;
};

export type ReactToPostOutput = MutationOutput & {
  __typename?: "ReactToPostOutput";
  code: Scalars["Int"]["output"];
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type ReactToReplyInput = {
  postId: Scalars["String"]["input"];
  reaction: ReactionName;
  replyId: Scalars["String"]["input"];
  responseId: Scalars["String"]["input"];
};

export type ReactToReplyOutput = MutationOutput & {
  __typename?: "ReactToReplyOutput";
  code: Scalars["Int"]["output"];
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type ReactToResponseInput = {
  postId: Scalars["String"]["input"];
  reaction: ReactionName;
  responseId: Scalars["String"]["input"];
};

export type ReactToResponseOutput = MutationOutput & {
  __typename?: "ReactToResponseOutput";
  code: Scalars["Int"]["output"];
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type Reaction = {
  __typename?: "Reaction";
  image: Scalars["String"]["output"];
  name: ReactionName;
};

export enum ReactionName {
  Beer = "BEER",
  Clap = "CLAP",
  HeartEyes = "HEART_EYES",
  Love = "LOVE",
  Party = "PARTY",
  Rocket = "ROCKET",
  TakeMyMoney = "TAKE_MY_MONEY",
  ThumbsUp = "THUMBS_UP",
  Trophy = "TROPHY",
  Unicorn = "UNICORN",
}

export type ReactionsAndCount = {
  __typename?: "ReactionsAndCount";
  count: Scalars["Int"]["output"];
  reaction: Reaction;
};

export type Reply = {
  __typename?: "Reply";
  _id: Scalars["ID"]["output"];
  author: User;
  content: Scalars["String"]["output"];
  contentMarkdown: Scalars["String"]["output"];
  dateAdded: Scalars["String"]["output"];
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  reactions?: Maybe<Array<Maybe<ReactionsAndCount>>>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
  stamp?: Maybe<Scalars["String"]["output"]>;
  totalReactions?: Maybe<Scalars["Int"]["output"]>;
};

export type Response = {
  __typename?: "Response";
  _id: Scalars["ID"]["output"];
  author?: Maybe<User>;
  bookmarkedIn?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  content?: Maybe<Scalars["String"]["output"]>;
  contentMarkdown?: Maybe<Scalars["String"]["output"]>;
  dateAdded?: Maybe<Scalars["String"]["output"]>;
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  isCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
  popularity?: Maybe<Scalars["Float"]["output"]>;
  post?: Maybe<Scalars["String"]["output"]>;
  reactions?: Maybe<Array<Maybe<ReactionsAndCount>>>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
  replies?: Maybe<Array<Maybe<Reply>>>;
  stamp?: Maybe<Scalars["String"]["output"]>;
  totalReactions?: Maybe<Scalars["Int"]["output"]>;
};

export type SocialMedia = {
  __typename?: "SocialMedia";
  facebook?: Maybe<Scalars["String"]["output"]>;
  github?: Maybe<Scalars["String"]["output"]>;
  google?: Maybe<Scalars["String"]["output"]>;
  linkedin?: Maybe<Scalars["String"]["output"]>;
  stackoverflow?: Maybe<Scalars["String"]["output"]>;
  twitter?: Maybe<Scalars["String"]["output"]>;
  website?: Maybe<Scalars["String"]["output"]>;
};

export type Tag = {
  __typename?: "Tag";
  _id: Scalars["ID"]["output"];
  contributors?: Maybe<TagContributors>;
  followersCount?: Maybe<Scalars["Int"]["output"]>;
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  isApproved?: Maybe<Scalars["Boolean"]["output"]>;
  leaderboard?: Maybe<TagLeaderBoard>;
  logo?: Maybe<Scalars["String"]["output"]>;
  managers?: Maybe<Array<Maybe<TagManager>>>;
  name?: Maybe<Scalars["String"]["output"]>;
  numPosts?: Maybe<Scalars["Int"]["output"]>;
  posts?: Maybe<Array<Maybe<Post>>>;
  slug?: Maybe<Scalars["String"]["output"]>;
  socialMedia?: Maybe<TagSocialMedia>;
  stats?: Maybe<TagStats>;
  tagline?: Maybe<Scalars["String"]["output"]>;
  wiki?: Maybe<Scalars["String"]["output"]>;
  wikiMarkdown?: Maybe<Scalars["String"]["output"]>;
};

export type TagPostsArgs = {
  filter: TagsPostFilter;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TagCategory = {
  __typename?: "TagCategory";
  _id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  priority?: Maybe<Scalars["Int"]["output"]>;
  slug: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type TagContributorLeaders = {
  __typename?: "TagContributorLeaders";
  allTimeTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
  monthlyTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
};

export type TagContributors = {
  __typename?: "TagContributors";
  leaders?: Maybe<TagContributorLeaders>;
  managers?: Maybe<Array<Maybe<TagManager>>>;
};

export type TagLeaderBoard = {
  __typename?: "TagLeaderBoard";
  allTimeTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
  monthlyTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
};

export type TagLeaderBoardMember = {
  __typename?: "TagLeaderBoardMember";
  appreciations?: Maybe<Scalars["Int"]["output"]>;
  upvotes?: Maybe<Scalars["Int"]["output"]>;
  user?: Maybe<User>;
};

export type TagManager = {
  __typename?: "TagManager";
  _id: Scalars["ID"]["output"];
  role: Scalars["String"]["output"];
  user?: Maybe<User>;
};

export type TagSocialMedia = {
  __typename?: "TagSocialMedia";
  github?: Maybe<Scalars["String"]["output"]>;
  officialWebsite?: Maybe<Scalars["String"]["output"]>;
  twitter?: Maybe<Scalars["String"]["output"]>;
};

export type TagStats = {
  __typename?: "TagStats";
  currentWeekFollowersCount?: Maybe<Scalars["Int"]["output"]>;
  currentWeekPostsCount?: Maybe<Scalars["Int"]["output"]>;
  lastWeekFollowersCount?: Maybe<Scalars["Int"]["output"]>;
  lastWeekPostsCount?: Maybe<Scalars["Int"]["output"]>;
};

export type TagsInput = {
  _id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export enum TagsPostFilter {
  Best = "BEST",
  Hot = "HOT",
  Recent = "RECENT",
}

export type UpdateStoryInput = {
  contentMarkdown: Scalars["String"]["input"];
  coverImageURL?: InputMaybe<Scalars["String"]["input"]>;
  isPartOfPublication: PublicationDetails;
  isRepublished?: InputMaybe<IsRepublished>;
  publishAs?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  sourcedFromGithub?: InputMaybe<Scalars["Boolean"]["input"]>;
  subtitle?: InputMaybe<Scalars["String"]["input"]>;
  tags: Array<InputMaybe<TagsInput>>;
  title: Scalars["String"]["input"];
};

export type User = {
  __typename?: "User";
  _id: Scalars["ID"]["output"];
  blogHandle?: Maybe<Scalars["String"]["output"]>;
  coverImage?: Maybe<Scalars["String"]["output"]>;
  dateJoined?: Maybe<Scalars["String"]["output"]>;
  followers?: Maybe<Array<Maybe<User>>>;
  isDeactivated?: Maybe<Scalars["Boolean"]["output"]>;
  isEvangelist?: Maybe<Scalars["Boolean"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  numFollowers?: Maybe<Scalars["Int"]["output"]>;
  numFollowing?: Maybe<Scalars["Int"]["output"]>;
  numPosts?: Maybe<Scalars["Int"]["output"]>;
  numReactions?: Maybe<Scalars["Int"]["output"]>;
  photo?: Maybe<Scalars["String"]["output"]>;
  publication?: Maybe<Publication>;
  publicationDomain?: Maybe<Scalars["String"]["output"]>;
  socialMedia?: Maybe<SocialMedia>;
  tagline?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type CreateReplyInput = {
  contentInMarkdown: Scalars["String"]["input"];
  postId: Scalars["String"]["input"];
  responseId: Scalars["String"]["input"];
};

export type CreateReplyOutput = MutationOutput & {
  __typename?: "createReplyOutput";
  code: Scalars["Int"]["output"];
  message: Scalars["String"]["output"];
  reply?: Maybe<Response>;
  success: Scalars["Boolean"]["output"];
};

export type CreateResponseInput = {
  contentInMarkdown: Scalars["String"]["input"];
  postId: Scalars["String"]["input"];
};

export type CreateResponseOutput = MutationOutput & {
  __typename?: "createResponseOutput";
  code: Scalars["Int"]["output"];
  message: Scalars["String"]["output"];
  response?: Maybe<Response>;
  success: Scalars["Boolean"]["output"];
};

export type IsRepublished = {
  originalArticleURL: Scalars["String"]["input"];
};

export type ArticleBySlugQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type ArticleBySlugQuery = {
  __typename?: "Query";
  post?: {
    __typename?: "PostDetailed";
    cuid?: string | null;
    title?: string | null;
    dateAdded?: string | null;
    slug?: string | null;
    brief?: string | null;
    contentMarkdown?: string | null;
  } | null;
};

export type GetUserPostsQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetUserPostsQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    numPosts?: number | null;
    name?: string | null;
    publication?: {
      __typename?: "Publication";
      title?: string | null;
      posts?: Array<{
        __typename?: "Post";
        cuid?: string | null;
        title?: string | null;
        dateAdded?: string | null;
        slug?: string | null;
        brief?: string | null;
        contentMarkdown?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export const ArticleBySlugDocument = gql`
  query ArticleBySlug($slug: String!) {
    post(slug: $slug, hostname: "") {
      cuid
      title
      dateAdded
      slug
      brief
      contentMarkdown
    }
  }
`;

/**
 * __useArticleBySlugQuery__
 *
 * To run a query within a React component, call `useArticleBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticleBySlugQuery(
  baseOptions: Apollo.QueryHookOptions<
    ArticleBySlugQuery,
    ArticleBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ArticleBySlugQuery, ArticleBySlugQueryVariables>(
    ArticleBySlugDocument,
    options
  );
}
export function useArticleBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ArticleBySlugQuery,
    ArticleBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ArticleBySlugQuery, ArticleBySlugQueryVariables>(
    ArticleBySlugDocument,
    options
  );
}
export type ArticleBySlugQueryHookResult = ReturnType<
  typeof useArticleBySlugQuery
>;
export type ArticleBySlugLazyQueryHookResult = ReturnType<
  typeof useArticleBySlugLazyQuery
>;
export type ArticleBySlugQueryResult = Apollo.QueryResult<
  ArticleBySlugQuery,
  ArticleBySlugQueryVariables
>;
export const GetUserPostsDocument = gql`
  query GetUserPosts($page: Int) {
    user(username: "ivanms1") {
      numPosts
      name
      publication {
        title
        posts(page: $page) {
          cuid
          title
          dateAdded
          slug
          brief
          contentMarkdown
        }
      }
    }
  }
`;

/**
 * __useGetUserPostsQuery__
 *
 * To run a query within a React component, call `useGetUserPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPostsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetUserPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserPostsQuery,
    GetUserPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(
    GetUserPostsDocument,
    options
  );
}
export function useGetUserPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserPostsQuery,
    GetUserPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(
    GetUserPostsDocument,
    options
  );
}
export type GetUserPostsQueryHookResult = ReturnType<
  typeof useGetUserPostsQuery
>;
export type GetUserPostsLazyQueryHookResult = ReturnType<
  typeof useGetUserPostsLazyQuery
>;
export type GetUserPostsQueryResult = Apollo.QueryResult<
  GetUserPostsQuery,
  GetUserPostsQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    MutationOutput: [
      "CreatePostOutput",
      "DeleteOutput",
      "FollowUserOutput",
      "ReactToPostOutput",
      "ReactToReplyOutput",
      "ReactToResponseOutput",
      "createReplyOutput",
      "createResponseOutput",
    ],
  },
};
export default result;
