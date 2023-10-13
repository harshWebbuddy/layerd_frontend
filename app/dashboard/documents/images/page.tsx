import React from "react";
import SearchFilter from "../../team/members/components/SearchFilter";
import Pagination from "../../components/Pagination";
import { imageDocuments } from "../constants/dummyData";
import Table from "./components/Table";

export default function page() {
	const columns = [
		"Image",
		"Resolution",
		"Created From",
		"Created On",
		"Actions",
	];
	return (
		<section className="px-3 sm:px-10 py-5 space-y-5">
			<h1 className="text-2xl font-semibold">All Documents</h1>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg ">
				<div className="px-6 sm:px-14 py-5">
					<div className="flex flex-wrap gap-4 justify-between items-center">
						<h1 className="text-primary-yellow capitalize text-2xl font-bold">
							All My Documents
						</h1>
						<SearchFilter />
					</div>
					<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[3px] w-full my-6" />
				</div>
				<Table columns={columns} data={imageDocuments} />
				<div className="p-3 sm:p-10">
					<Pagination />
				</div>
			</div>
		</section>
	);
}
