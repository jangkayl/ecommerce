import * as z from "zod";

export const signInFormSchema = z.object({
	email: z.string().email().min(3, "Email must me at least 3 characters"),
	password: z.string().min(3, "Password must be at least 3 characters"),
});
