import Link from 'next/link';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Book } from '../generated/graphql';

type Props = {
  book: Book;
};

const BookCard = (props: Props) => (
  <Card className="book-card m-3 float-left">
    <Card.Body>
      <Card.Title className="text-truncate">{props.book.title}</Card.Title>
      <Card.Text>{props.book.author}</Card.Text>
      <Link href={`/books/${props.book.id}`}>
        <Button variant="primary">Show more</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default BookCard;
