import React from "react";
import SearchFilter from "../../team/members/components/SearchFilter";
import Image from "next/image";
import Pagination from "../../components/Pagination";

export default function page() {
	const tabHeaders = [
		"Purchase Date",
		"Order ID",
		"Total Payment (USD)",
		"Commission Rate",
		"Earned Commission (USD)",
	];
	return (
		<section className="px-3 sm:px-10 py-5 space-y-5">
			<div>
				<h1 className="text-3xl font-semibold leading-relaxed capitalize">
					My referrals{" "}
				</h1>
				<p className="text-white/70 text-sm">
					Affiliate {">>"}{" "}
					<span className="text-primary-yellow capitalize">My referrals</span>
				</p>
			</div>
			<div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
				<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-7 space-y-4">
					<h1 className="text-white capitalize text-xl font-semibold">
						Total Referred Users
						<span className="text-[#B1B1B1]"> (All Time)</span>
					</h1>
					<p className="text-3xl font-bold">0</p>
				</div>
				<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-7 space-y-4">
					<h1 className="text-white capitalize text-xl font-semibold">
						Total Earned Commission
						<span className="text-[#B1B1B1]"> (All Time)</span>
					</h1>
					<p className="text-3xl font-bold">$0.00</p>
				</div>
			</div>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-10">
				<div className="flex justify-between items-center">
					<h1 className="text-primary-yellow capitalize text-xl font-semibold">
						Earned Commissions{" "}
						<span className="text-[#B1B1B1]"> (All Time)</span>
					</h1>
					<SearchFilter />
				</div>
				<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[3px] w-full my-4" />
				<div className="flex w-full justify-between border-b-[3px] border-white/10 pt-2 pb-6">
					{tabHeaders.map((tab, index) => (
						<div className="flex gap-2 cursor-pointer" key={index}>
							<p className="text-primary-yellow font-semibold text-lg capitalize">
								{tab}
							</p>
							<Image
								src="/main/chevron-down.svg"
								alt="Search"
								width={15}
								height={15}
							/>
						</div>
					))}
				</div>
				<div className="h-[40vh] grid place-content-center">
					<p>No Voice Over Results Found</p>
				</div>
				<Pagination />
			</div>
		</section>
	);
}
