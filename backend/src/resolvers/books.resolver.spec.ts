import { gql } from 'apollo-server-express';
import { ApolloServerTestClient } from 'apollo-server-testing';
import { Book } from 'src/entities/books';
import beforeAllSetup, {
  InitializedInternalServices,
} from '../tests/beforeAllSetup';

describe('Books resolver', () => {
  let services: InitializedInternalServices;
  let apolloClient: ApolloServerTestClient;

  let availableIds: string[] = [];

  beforeAll(async () => {
    services = await beforeAllSetup();
    apolloClient = services.apolloClient;
  });

  afterAll(() => {
    services.apolloServer.stop();
    services.dbConnection.close();
    services.db.stop();
  });

  it('should return 3 books', async () => {
    const { data } = await apolloClient.query({
      query: gql`
        query getBooks {
          getBooks {
            id
            title
            author
          }
        }
      `,
    });

    const books: Book[] = data.getBooks;

    expect(books).toHaveLength(3);
  });

  it('every book from response should have base fields', async () => {
    const { data } = await apolloClient.query({
      query: gql`
        query getBooks {
          getBooks {
            id
            title
            author
          }
        }
      `,
    });

    const books: Book[] = data.getBooks;
    books.forEach((book) => {
      expect(book).toHaveProperty('id');
      expect(book).toHaveProperty('title');
      expect(book).toHaveProperty('author');

      // Save ids for next texts cases
      // That not so good but we need it
      // Not sure what I have a lot of time for solve it
      availableIds.push(book.id);
    });
  });

  it('should return book by id', async () => {
    console.log(availableIds);
    const { data } = await apolloClient.query({
      variables: {
        _id: availableIds[0],
      },
      query: gql`
        query getBookById {
          getBookById(id: $id) {
            id
            title
            author
            country
            language
            year
          }
        }
      `,
    });

    const book: Book[] = data.getBookById;
    expect(book).toHaveProperty('id');
    expect(book).toHaveProperty('title');
    expect(book).toHaveProperty('author');
    expect(book).toHaveProperty('country');
    expect(book).toHaveProperty('language');
    expect(book).toHaveProperty('year');
  });
});
