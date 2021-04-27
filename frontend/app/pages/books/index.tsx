import React from 'react';
import BookListView from '../../components/BookListView';

import Layout from '../../layouts/Layout';
import Loader from '../../components/Loader';
import {
  Book,
  GetBooksQueryResult,
  useGetBooksQuery,
} from '../../generated/graphql';

const BooksPage = () => {
  const { loading, data, error }: GetBooksQueryResult = useGetBooksQuery();

  if (error) return <div>An error occurred</div>;
  if (!data) return <div>No data!</div>;

  const books: Partial<Book>[] = data.getBooks;

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Library Books list</h1>
      {loading ? <Loader /> : <BookListView books={books} />}
    </Layout>
  );
};

export default BooksPage;
