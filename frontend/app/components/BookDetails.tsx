import React from 'react';
import { Table } from 'react-bootstrap';
import { Book } from '../generated/graphql';

type Props = {
  book: Book;
};

const BookDetails = ({ book }: Props) => {
  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        <tr>
          <th>Title</th>
          <td>{book.title}</td>
        </tr>
        <tr>
          <th>Author</th>
          <td>{book.author}</td>
        </tr>
        <tr>
          <th>Country</th>
          <td>{book.country}</td>
        </tr>
        <tr>
          <th>Language</th>
          <td>{book.language}</td>
        </tr>
        <tr>
          <th>year</th>
          <td>{book.year}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BookDetails;
