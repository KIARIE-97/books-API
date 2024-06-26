import { Context } from "hono";
import { bookService, singleBookService, createBookService, updateBookService, deleteBookService } from "./book.service";

//get all books controller
export const listBooks = async (c: Context) => {
    const books = await bookService();
    if (books == null) {
        return c.text("no book found!😶‍🌫️", 404)
    } 
    return c.json(books, 200)
}

//get single book controller
export const getSingleBook = async (c: Context) => {
    const id = parseInt(c.req.param("id"))
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);
    const book = await singleBookService(id);
    if (book == undefined) {
        return c.text("no book found!😶‍🌫️", 404)
    }
    return c.json(book, 200)
}

//CREATE BOOK CONTROLLER
export const createBook = async (c: Context) => {
    try{
        const book = await c.req.json();
        const createdBook = await createBookService(book);
       if (!createdBook){
        return c.text("book not created!👽", 404)
       }
        return c.json({msg: createdBook}, 201);
    } catch (error: any){
        return c.json({error: error?.message}, 400)
    }
}
//UPDATE BOOK CONTROLLER
export const updateBook = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const user = await c.req.json();
    try{
    //search for book
    const foundBook = await singleBookService(id);
    if (foundBook == undefined) 
        return c.text("book not found!😬", 404);
    //get the data and update
    const res = await updateBookService(id, user);
    //return the updated book
    if (!res ) 
        return c.text("book not updated!😬", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}
//DELETE BOOK CONTROLLER
export const deleteBook = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{

   //search for the user
   const book = await singleBookService(id);
   if (book == undefined) 
       return c.text("book not found!👽", 404);
    //delete the user
    const res = await deleteBookService(id);
    if (!res) return c.text("book not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
}