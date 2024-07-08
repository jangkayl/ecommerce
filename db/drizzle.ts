import { sql } from "@vercel/postgres";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle(sql, {
	schema,
});

export default db;
