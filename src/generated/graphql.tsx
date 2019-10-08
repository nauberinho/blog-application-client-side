import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type CreatePost = {
   __typename?: 'CreatePost',
  post?: Maybe<PostObject>,
};

export type CreateUser = {
   __typename?: 'CreateUser',
  user?: Maybe<UserObject>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createPost?: Maybe<CreatePost>,
  createUser?: Maybe<CreateUser>,
};


export type MutationCreatePostArgs = {
  body: Scalars['String'],
  title: Scalars['String'],
  username: Scalars['String']
};


export type MutationCreateUserArgs = {
  username: Scalars['String']
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'],
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
};

export type PostObject = Node & {
   __typename?: 'PostObject',
  uuid: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  authorId?: Maybe<Scalars['Int']>,
  author?: Maybe<UserObject>,
  /** The ID of the object. */
  id: Scalars['ID'],
};

export type PostObjectConnection = {
   __typename?: 'PostObjectConnection',
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PostObjectEdge>>,
};

/** A Relay edge containing a `PostObject` and its cursor. */
export type PostObjectEdge = {
   __typename?: 'PostObjectEdge',
  /** The item at the end of the edge */
  node?: Maybe<PostObject>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  /** The ID of the object */
  node?: Maybe<Node>,
  allPosts?: Maybe<PostObjectConnection>,
  post?: Maybe<PostObject>,
  allUsers?: Maybe<UserObjectConnection>,
  user?: Maybe<UserObject>,
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};


export type QueryAllPostsArgs = {
  before?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPostArgs = {
  uuid?: Maybe<Scalars['String']>
};


export type QueryAllUsersArgs = {
  before?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  uuid?: Maybe<Scalars['String']>
};

export type UserObject = Node & {
   __typename?: 'UserObject',
  uuid: Scalars['ID'],
  username?: Maybe<Scalars['String']>,
  posts?: Maybe<PostObjectConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
};


export type UserObjectPostsArgs = {
  before?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserObjectConnection = {
   __typename?: 'UserObjectConnection',
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserObjectEdge>>,
};

/** A Relay edge containing a `UserObject` and its cursor. */
export type UserObjectEdge = {
   __typename?: 'UserObjectEdge',
  /** The item at the end of the edge */
  node?: Maybe<UserObject>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type PostQueryVariables = {
  uuid: Scalars['String']
};


export type PostQuery = (
  { __typename?: 'Query' }
  & { post: Maybe<(
    { __typename?: 'PostObject' }
    & Pick<PostObject, 'body' | 'id' | 'title'>
    & { author: Maybe<(
      { __typename?: 'UserObject' }
      & Pick<UserObject, 'username' | 'id'>
    )> }
  )> }
);

export type PostListQueryVariables = {};


export type PostListQuery = (
  { __typename?: 'Query' }
  & { allPosts: Maybe<(
    { __typename?: 'PostObjectConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PostObjectEdge' }
      & { node: Maybe<(
        { __typename?: 'PostObject' }
        & Pick<PostObject, 'body' | 'id' | 'title'>
        & { author: Maybe<(
          { __typename?: 'UserObject' }
          & Pick<UserObject, 'id' | 'username'>
        )> }
      )> }
    )>> }
  )> }
);

export type UserProfileQueryVariables = {
  uuid: Scalars['String']
};


export type UserProfileQuery = (
  { __typename?: 'Query' }
  & { user: Maybe<(
    { __typename?: 'UserObject' }
    & Pick<UserObject, 'username' | 'uuid'>
    & { posts: Maybe<(
      { __typename?: 'PostObjectConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'PostObjectEdge' }
        & { node: Maybe<(
          { __typename?: 'PostObject' }
          & Pick<PostObject, 'id' | 'body' | 'title'>
          & { author: Maybe<(
            { __typename?: 'UserObject' }
            & Pick<UserObject, 'id' | 'username'>
          )> }
        )> }
      )>> }
    )> }
  )> }
);

export type UserListQueryVariables = {};


export type UserListQuery = (
  { __typename?: 'Query' }
  & { allUsers: Maybe<(
    { __typename?: 'UserObjectConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UserObjectEdge' }
      & { node: Maybe<(
        { __typename?: 'UserObject' }
        & Pick<UserObject, 'username' | 'uuid'>
        & { posts: Maybe<(
          { __typename?: 'PostObjectConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'PostObjectEdge' }
            & { node: Maybe<(
              { __typename?: 'PostObject' }
              & Pick<PostObject, 'uuid' | 'body' | 'title'>
              & { author: Maybe<(
                { __typename?: 'UserObject' }
                & Pick<UserObject, 'uuid' | 'username'>
              )> }
            )> }
          )>> }
        )> }
      )> }
    )>> }
  )> }
);


export const PostDocument = gql`
    query Post($uuid: String!) {
  post(uuid: $uuid) {
    body
    id
    title
    author {
      username
      id
    }
  }
}
    `;
export type PostComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostQuery, PostQueryVariables>, 'query'> & ({ variables: PostQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PostComponent = (props: PostComponentProps) => (
      <ApolloReactComponents.Query<PostQuery, PostQueryVariables> query={PostDocument} {...props} />
    );
    
export type PostProps<TChildProps = {}> = ApolloReactHoc.DataProps<PostQuery, PostQueryVariables> & TChildProps;
export function withPost<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PostQuery,
  PostQueryVariables,
  PostProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PostQuery, PostQueryVariables, PostProps<TChildProps>>(PostDocument, {
      alias: 'post',
      ...operationOptions
    });
};

    export function usePostQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostQuery, PostQueryVariables>) {
      return ApolloReactHooks.useQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
    }
      export function usePostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
      }
      
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostQueryResult = ApolloReactCommon.QueryResult<PostQuery, PostQueryVariables>;
export const PostListDocument = gql`
    query PostList {
  allPosts {
    edges {
      node {
        body
        id
        title
        author {
          id
          username
        }
      }
    }
  }
}
    `;
export type PostListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostListQuery, PostListQueryVariables>, 'query'>;

    export const PostListComponent = (props: PostListComponentProps) => (
      <ApolloReactComponents.Query<PostListQuery, PostListQueryVariables> query={PostListDocument} {...props} />
    );
    
export type PostListProps<TChildProps = {}> = ApolloReactHoc.DataProps<PostListQuery, PostListQueryVariables> & TChildProps;
export function withPostList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PostListQuery,
  PostListQueryVariables,
  PostListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PostListQuery, PostListQueryVariables, PostListProps<TChildProps>>(PostListDocument, {
      alias: 'postList',
      ...operationOptions
    });
};

    export function usePostListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostListQuery, PostListQueryVariables>) {
      return ApolloReactHooks.useQuery<PostListQuery, PostListQueryVariables>(PostListDocument, baseOptions);
    }
      export function usePostListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostListQuery, PostListQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PostListQuery, PostListQueryVariables>(PostListDocument, baseOptions);
      }
      
export type PostListQueryHookResult = ReturnType<typeof usePostListQuery>;
export type PostListQueryResult = ApolloReactCommon.QueryResult<PostListQuery, PostListQueryVariables>;
export const UserProfileDocument = gql`
    query UserProfile($uuid: String!) {
  user(uuid: $uuid) {
    username
    uuid
    posts {
      edges {
        node {
          id
          body
          title
          author {
            id
            username
          }
        }
      }
    }
  }
}
    `;
export type UserProfileComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserProfileQuery, UserProfileQueryVariables>, 'query'> & ({ variables: UserProfileQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserProfileComponent = (props: UserProfileComponentProps) => (
      <ApolloReactComponents.Query<UserProfileQuery, UserProfileQueryVariables> query={UserProfileDocument} {...props} />
    );
    
export type UserProfileProps<TChildProps = {}> = ApolloReactHoc.DataProps<UserProfileQuery, UserProfileQueryVariables> & TChildProps;
export function withUserProfile<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserProfileQuery,
  UserProfileQueryVariables,
  UserProfileProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, UserProfileQuery, UserProfileQueryVariables, UserProfileProps<TChildProps>>(UserProfileDocument, {
      alias: 'userProfile',
      ...operationOptions
    });
};

    export function useUserProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
      return ApolloReactHooks.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, baseOptions);
    }
      export function useUserProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, baseOptions);
      }
      
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileQueryResult = ApolloReactCommon.QueryResult<UserProfileQuery, UserProfileQueryVariables>;
export const UserListDocument = gql`
    query UserList {
  allUsers {
    edges {
      node {
        username
        uuid
        posts {
          edges {
            node {
              uuid
              body
              title
              author {
                uuid
                username
              }
            }
          }
        }
      }
    }
  }
}
    `;
export type UserListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserListQuery, UserListQueryVariables>, 'query'>;

    export const UserListComponent = (props: UserListComponentProps) => (
      <ApolloReactComponents.Query<UserListQuery, UserListQueryVariables> query={UserListDocument} {...props} />
    );
    
export type UserListProps<TChildProps = {}> = ApolloReactHoc.DataProps<UserListQuery, UserListQueryVariables> & TChildProps;
export function withUserList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserListQuery,
  UserListQueryVariables,
  UserListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, UserListQuery, UserListQueryVariables, UserListProps<TChildProps>>(UserListDocument, {
      alias: 'userList',
      ...operationOptions
    });
};

    export function useUserListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
      return ApolloReactHooks.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, baseOptions);
    }
      export function useUserListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, baseOptions);
      }
      
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListQueryResult = ApolloReactCommon.QueryResult<UserListQuery, UserListQueryVariables>;