import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "Books" })
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  @Property()
  title: String;

  @Field()
  @Property()
  author: String;

  @Field()
  @Property()
  country: String;

  @Field()
  @Property()
  language: String;

  @Field()
  @Property()
  year: number;
}

export const BooksModel = getModelForClass(Book);
