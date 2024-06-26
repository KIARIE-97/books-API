CREATE TABLE IF NOT EXISTS "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"book_name" varchar,
	"author_name" varchar,
	"year_of_publication" integer
);
