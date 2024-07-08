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

		await db.delete(schema.products);

		const resProducts = await db
			.insert(schema.products)
			.values(sampleData.products)
			.returning();
		console.log({ resProducts });

		await client.end();
	} catch (error) {
		console.log(error);
		throw new Error("Failed to seed database");
	}
};

main();
