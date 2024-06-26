import { pgTable, serial, varchar, integer} from "drizzle-orm/pg-core";
// import { pgTable } from "drizzle-orm/pg-core/table.cjs";

export const booksTable = pgTable('books', {
    id: serial("id").primaryKey(),
    bookName: varchar("book_name"),
    authorName: varchar("author_name"),
    yearOfPublication: integer("year_of_publication")
})

export type TIBooks = typeof booksTable.$inferInsert;
export type TSBooks = typeof booksTable.$inferSelect;