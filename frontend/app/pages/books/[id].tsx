import { useRouter } from 'next/router';
import React from 'react';
import BookDetails from '../../components/BookDetails';
import Layout from '../../layouts/Layout';
import Loader from '../../components/Loader';
import {
  GetBookByIdQueryResult,
  useGetBookByIdQuery,
} from '../../generated/graphql';

const BookPage = () => {
  const { query } = useRouter();

  const { loading, data, error }: GetBookByIdQueryResult = useGetBookByIdQuery({
    variables: { id: query.id?.toString() },
  });

  if (loading) return <Loader />;
  if (error) return <div>An error occurred</div>;
  if (!data) return <div>No data!</div>;

  const book = data.getBookById;

  return (
    <Layout title={`Details of book "${book.title}"`}>
      <BookDetails book={book} />
    </Layout>
  );
};

export default BookPage;
