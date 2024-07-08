import ProductLists from "@/components/shared/product/productList";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function Home() {
	const latestProducts = await getLatestProducts();
	return (
		<div className="space-y-8">
			<ProductLists
				title="Newest Arrival"
				data={latestProducts}
			/>
		</div>
	);
}
