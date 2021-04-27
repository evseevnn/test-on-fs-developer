import { Resolver, Arg, Query } from "type-graphql";
import { Book, BooksModel } from "../entities/books";

@Resolver()
export class BooksResolver {
  @Query(() => Book, { nullable: false })
  async getBookById(@Arg("id") id: string) {
    return await BooksModel.findById(id);
  }

  @Query(() => [Book])
  async getBooks() {
    return await BooksModel.find().limit(20);
  }
}
