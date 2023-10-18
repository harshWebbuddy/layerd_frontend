import React from "react";
import SearchFilter from "../../team/members/components/SearchFilter";
import Pagination from "../../components/Pagination";
import Table from "./components/Table";
import ISelection from "./components/ISelection";
import Image from "next/image";

export default function page() {
	const columns = [
		"Document Name",
		"Category",
		"Created On",
		"Language",
		"Words Used",
		"Actions",
	];
	const data: Array<any> = [];

	return (
		<section className="px-3 sm:px-10 py-5 space-y-5">
			<h1 className="text-2xl font-semibold">Workbooks</h1>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-10 relative z-[1]">
				<h1 className="text-primary-yellow capitalize text-2xl font-bold">
					All My Workbooks
				</h1>
				<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[3px] w-full my-6" />
				<div className="flex gap-10 items-end">
					<ISelection />
					<div className="justify-end flex gap-3">
						<div className="w-full bg-gradient-to-br from-[#ffffff09] to-[#8f8f8f00] backdrop-blur-md rounded-lg p-3 cursor-pointer hover:bg-[#ffffff11] transition duration-300">
							<Image
								src="/main/create-folder.svg"
								alt="Create Folder"
								width={40}
								height={40}
							/>
						</div>
						<div className="w-full bg-gradient-to-br from-[#ffffff09] to-[#8f8f8f00] backdrop-blur-md rounded-lg p-3 cursor-pointer hover:bg-[#ffffff11] transition duration-300">
							<Image
                src="/main/set-top-stack.svg"
								alt="Create Folder"
								width={40}
								height={40}
                />
						</div>
						<div className="w-full bg-gradient-to-br from-[#ffffff09] to-[#8f8f8f00] backdrop-blur-md rounded-lg p-3 cursor-pointer">
							<Image
								src="/main/delete.svg"
								alt="Create Folder"
								width={40}
								height={40}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg relative z-0">
				<div className="px-10 py-8">
					<div className="flex justify-between items-center">
						<h1 className="text-primary-yellow capitalize text-2xl font-bold">
							All My Workbooks
						</h1>
						<SearchFilter />
					</div>
					<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[3px] w-full my-6" />
				</div>
				<Table columns={columns} data={data} />
				<div className="p-2
				 sm:p-10">
					<Pagination />
				</div>
			</div>
		</section>
	);
}
