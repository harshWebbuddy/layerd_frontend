import Image from "next/image";
import React from "react";
import { products } from "./constants/Products";

export default function Products() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 w-full mt-14">
			{products.map((item, index) => (
				<div key={index} className="w-full h-80 relative">
					<Image
						src={item.image}
						alt={item.title}
						fill
						className="w-full h-full object-cover rounded-xl shadow-xl"
					/>
					<div className="bg-gradient-to-b from-[#2d2e36] shadow-2xl to-[#1b1b1f] rounded-lg w-fit absolute sm:left-3 sm:-right-5 -bottom-6 p-4">
						<h1 className="text-lg">{item.title}</h1>
						<p className="text-sm leading-relaxed mt-2 text-gray-400">
							{item.desription}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
