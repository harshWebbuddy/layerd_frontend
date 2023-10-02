import Image from "next/image";
import React from "react";
import { products } from "./constants/Products";

export default function Products() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 w-full mt-14">
			{products.map((item, index) => (
				<div key={index} className="w-full max-h-[500px] relative">
					<Image
						src={item.image}
						alt={item.title}
						height={600}
						width={500}
						className=" rounded-xl h-96 object-cover w-full shadow-xl"
					/>
					<div className="bg-gradient-to-b from-[#363636] z-10 transform -translate-y-1/2 translate-x-6 h-[220px] shadow-2xl to-[#1F1F1F] rounded-lg  p-4">
						<h1 className="text-xl font-semibold">{item.title}</h1>
						<p className="text-sm leading-relaxed mt-2 text-white/80">
							{item.desription}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
