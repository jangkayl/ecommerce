"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithCredentials } from "@/lib/actions/user.action";
import { signInDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

export const CredentialsSignInForm = () => {
	const [data, action] = useFormState(signInWithCredentials, {
		message: "",
		success: false,
	});

	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/";

	const SignInButton = () => {
		const { pending } = useFormStatus();
		return (
			<Button>{pending ? "Submitting..." : "Sign in with credentials"}</Button>
		);
	};

	return (
		<form action={action}>
			<input
				type="hidden"
				name="callbackUrl"
				value={callbackUrl}
			/>
			<div className="space-y-6">
				<div>
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						name="email"
						placeholder="m@example.com"
						required
						type="email"
						defaultValue={signInDefaultValues.email}
					/>
				</div>
				<div>
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						name="password"
						required
						type="password"
						defaultValue={signInDefaultValues.password}
					/>
				</div>
				<div>
					<SignInButton />
				</div>

				{data && !data.success && (
					<div className="text-center text-destructive">{data.message}</div>
				)}
				{!data && (
					<div className="text-center text-destructive">
						Unknown error happend.
						<Button onClick={() => window.location.reload()}>
							Please reload
						</Button>
					</div>
				)}

				<div className="text-sm text-center text-muted-foreground">
					Don&apos;t have an account?{" "}
					<Link
						href={`/sign-up?callbackUrl=${encodeURIComponent(callbackUrl)}`}>
						Sign Up
					</Link>
				</div>
			</div>
		</form>
	);
};
