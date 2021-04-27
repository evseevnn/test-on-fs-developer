import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Books */
export type Book = {
  __typename?: 'Book';
  id: Scalars['ID'];
  title: Scalars['String'];
  author: Scalars['String'];
  country: Scalars['String'];
  language: Scalars['String'];
  year: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getBookById: Book;
  getBooks: Array<Book>;
};


export type QueryGetBookByIdArgs = {
  id: Scalars['String'];
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = (
  { __typename?: 'Query' }
  & { getBooks: Array<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'author'>
  )> }
);

export type GetBookByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetBookByIdQuery = (
  { __typename?: 'Query' }
  & { getBookById: (
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'author' | 'country' | 'language' | 'year'>
  ) }
);


export const GetBooksDocument = gql`
    query getBooks {
  getBooks {
    id
    title
    author
  }
}
    `;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;
export const GetBookByIdDocument = gql`
    query getBookById($id: String!) {
  getBookById(id: $id) {
    id
    title
    author
    country
    language
    year
  }
}
    `;

/**
 * __useGetBookByIdQuery__
 *
 * To run a query within a React component, call `useGetBookByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBookByIdQuery, GetBookByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookByIdQuery, GetBookByIdQueryVariables>(GetBookByIdDocument, options);
      }
export function useGetBookByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookByIdQuery, GetBookByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookByIdQuery, GetBookByIdQueryVariables>(GetBookByIdDocument, options);
        }
export type GetBookByIdQueryHookResult = ReturnType<typeof useGetBookByIdQuery>;
export type GetBookByIdLazyQueryHookResult = ReturnType<typeof useGetBookByIdLazyQuery>;
export type GetBookByIdQueryResult = Apollo.QueryResult<GetBookByIdQuery, GetBookByIdQueryVariables>;
export type BookKeySpecifier = ('id' | 'title' | 'author' | 'country' | 'language' | 'year' | BookKeySpecifier)[];
export type BookFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	year?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getBookById' | 'getBooks' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getBookById?: FieldPolicy<any> | FieldReadFunction<any>,
	getBooks?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Book?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookKeySpecifier | (() => undefined | BookKeySpecifier),
		fields?: BookFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};