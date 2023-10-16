import PackageCard from "@/app/(site)/pricing/components/PackageCard";
import { packageData } from "@/app/(site)/pricing/constants";
import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<section className="w-4/5 mx-16">
			<h1 className="text-white text-3xl font-semibold">Subscription Plans</h1>
			<div className="mt-10">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
					{packageData.map((data, index) => (
						<PackageCard key={index} {...data} isPayment={true}/>
					))}
				</div>
				<p className="mt-10 opacity-80">
					Want access to enterprise features like more credits, unlimited
					LinkedIn, user permissions, and more? Email us at{" "}
					<Link href={"#"} className="text-primary-yellow">
						info@whopme.com
					</Link>
				</p>
			</div>
		</section>
	);
}
