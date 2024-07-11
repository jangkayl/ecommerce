import { cn } from "@/lib/utils";
import React from "react";

const ProductPrice = ({
	value,
	className,
}: {
	value: number;
	className?: string;
}) => {
	const stringValue = value.toString();
	const [intValue, floatValue] = stringValue.includes(".")
		? stringValue.split(".")
		: [stringValue, ""];
	return (
		<p className={cn("text-2xl", className)}>
			<span className="text-xs align-super">$</span>
			{intValue}
			<span className="text-xs align-sub">{floatValue}</span>
		</p>
	);
};

export default ProductPrice;
