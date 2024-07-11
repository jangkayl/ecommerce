import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import ProductPrice from "./productPrice";

export const ProductCard = ({ product }: { product: Product }) => {
	return (
		<div>
			<Card className="w-full max-w-sm">
				<CardHeader className="p-0 items-center">
					<Link href={`/product/${product.slug}`}>
						<Image
							src={product.images![0]}
							className="aspect-square object-cover rounded"
							alt={product.name}
							width={300}
							height={300}
						/>
					</Link>
				</CardHeader>
				<CardContent className="p-4 grid gap-4">
					<div>
						<p className="text-xs">{product.brand}</p>
					</div>
					<div>
						<Link href={`/product/${product.slug}`}>
							<h2>{product.name}</h2>
						</Link>
					</div>
					<div className="flex-between gap-4">
						<p>{product.rating} stars</p>
						{product.stock > 0 ? (
							<ProductPrice value={Number(product.price)} />
						) : (
							<p className="text-destructive">Out of stock</p>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
