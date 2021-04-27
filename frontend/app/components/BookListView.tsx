import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Book } from '../generated/graphql';
import BookCard from './BookCard';

type Props = {
  books: Partial<Book>[];
};

const BookListView = (props: Props) => (
  <Row>
    <Col>
      {props.books.map((book: Book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </Col>
  </Row>
);

export default BookListView;
