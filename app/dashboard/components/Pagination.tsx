import clsx from "clsx";
import React from "react";

export default function Pagination() {
	const dummyMemberLength = 5;

	return (
		<div className="flex items-center justify-between">
			<p>Showing 1 to 5 of 100 entries</p>
			<div className="space-x-3 flex items-center">
				<span>Page</span>
				<button className="bg-[#4F4F4F] flex items-center justify-center h-12 w-12  rounded-lg pl-4">
					<input
						type="number"
						className="bg-transparent outline-none w-full"
						min={1}
					/>
				</button>
				<span>of 200</span>
			</div>
			<div className="flex items-center gap-1">
				<button className="bg-gray-600/10 py-2 px-3 rounded-md }text-white hover:bg-gray-600/50 transition">
					Previous
				</button>
				{Array(dummyMemberLength)
					.fill(null)
					.map((_, index) => (
						<div
							key={index}
							className={clsx(
								"py-2 px-4 bg-gray-600/10  rounded-md cursor-pointer hover:bg-gray-600/50 transition",
								!index && "!bg-primary-yellow"
							)}>
							{index + 1}
						</div>
					))}
				<button className="bg-gray-600/10 py-2 px-3 rounded-md }text-white hover:bg-gray-600/50 transition">
					Next
				</button>
			</div>
		</div>
	);
}
