import {  Hono } from "hono";
import { listBooks, getSingleBook, createBook, updateBook, deleteBook} from "./book.controller";
// import {zValidator} from "@hono/zod-validator";
// import { userSchema } from "../validators";
// import {adminRoleAuth, userRoleAuth, adminUserRoleAuth} from "../middlewares/bearAuth"

export const bookRouter = new Hono();

bookRouter.get("/books",listBooks)
bookRouter.get("/books/:id",getSingleBook)
bookRouter.post("/books",createBook)
bookRouter.put("/books/:id",updateBook)
bookRouter.delete("/books/:id",deleteBook)