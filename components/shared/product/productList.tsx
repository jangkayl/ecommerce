import React from "react";
import { ProductCard } from "./productCard";
import { Product } from "@/types";

const ProductLists = ({ title, data }: { title: string; data: Product[] }) => {
	return (
		<>
			<h2 className="h2-bold">{title}</h2>
			{data.length > 0 ? (
				<div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{data.map((product: Product) => (
							<ProductCard
								key={product.slug}
								product={product}
							/>
						))}
					</div>
				</div>
			) : (
				<div>
					<p>No product found</p>
				</div>
			)}
		</>
	);
};

export default ProductLists;
