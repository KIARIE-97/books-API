import "dotenv/config";
import {neon} from '@neondatabase/serverless'
import {drizzle } from "drizzle-orm/neon-http";
 import * as schema from "./schema";

 const databaseUrl = process.env.DATABASE_URL as string;

 export const  client = neon(databaseUrl);
const db = drizzle(client, { schema, logger: true });
export default db;
