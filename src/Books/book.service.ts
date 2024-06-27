import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIBooks, TSBooks, booksTable} from "../drizzle/schema";

//get all books service
export const bookService = async (): Promise<TSBooks[] | null> => {
    return await db.query.booksTable.findMany()
}

//get single book service
export const singleBookService = async (id: number): Promise<TIBooks | undefined> => {
    return await db.query.booksTable.findFirst({
        where: eq(booksTable.id, id)
    })
}
//CREATE BOOK SERVICE
export const createBookService = async (book: TIBooks): Promise<TIBooks> => {
    await db.insert(booksTable).values(book)
    return book;
 }
 //UPDATE BOOK SERVICE
    export const updateBookService = async (id: number, book: TIBooks): Promise<TIBooks> => {
        await db.update(booksTable).set(book).where(eq(booksTable.id, id))
        return book;
    }
    //DELETE BOOK SERVICE
    export const deleteBookService = async (id: number) => {
        await db.delete(booksTable).where(eq(booksTable.id, id))
        return "Book deleted successfully!😑"
    }