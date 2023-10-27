import React from "react";
import SearchFilter from "../../team/members/components/SearchFilter";
import Table from "./components/Table";
import { allDocuments } from "../constants/dummyData";
import Pagination from "../../components/Pagination";

export default function page() {
	const columns = [
		"Document Name",
		"Workbook",
		"Category",
		"Created On",
		"Language",
		"Words Used",
		"Actions",
	];

	return (
		<section className="px-3 lg:px-7 lg:pr-10 py-5 space-y-5">
			<h1 className="text-2xl font-semibold">All Voiceover Results</h1>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg ">
				<div className="px-5 sm:px-10 pt-5">
					<div className="flex flex-wrap gap-5 justify-between items-center">
						<h1 className="text-primary-yellow capitalize text-2xl font-bold">
							All Voiceover Results
						</h1>
						<SearchFilter />
					</div>
					<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[3px] w-full my-6" />
				</div>
				<Table columns={columns} data={allDocuments} />
				<div className="p-3 sm:p-10">
					<Pagination />
				</div>
			</div>
		</section>
	);
}
