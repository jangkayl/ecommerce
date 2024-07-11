import { loadEnvConfig } from "@next/env";
import { cwd } from "process";
import * as schema from "./schema";
import { Client } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import sampleData from "@/lib/sampleData";

loadEnvConfig(cwd());

const main = async () => {
	try {
		const client = new Client({
			connectionString: process.env.POSTGRES_URL,
		});
		await client.connect();
		const db = drizzle(client);

		await db.delete(schema.accounts);
		await db.delete(schema.products);
		await db.delete(schema.users);

		const resUsers = await db
			.insert(schema.users)
			.values(sampleData.users)
			.returning();

		const resProducts = await db
			.insert(schema.products)
			.values(sampleData.products)
			.returning();
		console.log({ resProducts, resUsers });

		await client.end();
	} catch (error) {
		console.log(error);
		throw new Error("Failed to seed database");
	}
};

main();
