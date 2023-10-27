import { ImageData } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
	columns: string[];
	data: Array<ImageData>;
}
export default function Table({ columns, data }: Props) {
	return (
		<div className="w-full px-10 mx-auto overflow-x-auto">
			<table className="w-full">
				<thead className="border-b-[3px] border-white/10">
					<tr>
						{columns.map((column, index) => (
							<th
								key={index}
								className={`text-primary-yellow text-left py-4 pr-4 min-w-[180px]`}>
								<div className={`flex gap-2 w-full justify-between ${index !== columns.length -1 && 'pr-10'}`}>
									{column}
									<div className="flex flex-col justify-end">
										<Image
											src="/main/fi_chevron-up.svg"
											alt="Search"
											width={15}
											height={15}
										/>
										<Image
											src="/main/chevron-down.svg"
											alt="Search"
											width={15}
											height={15}
											className="-translate-y-2"
										/>
									</div>
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((document, index) => (
						<tr
							key={index}
							className={`${
								index % 2 &&
								"bg-gradient-to-br from-[#ffffff09] to-[#8f8f8f0c] backdrop-blur-md w-full"
							}`}>
							<td className="py-4">
								<div>
									<div className="flex items-center gap-3">
										<Image
											src={document.image}
											alt="Image"
											height={100}
											width={100}
											className="w-16 h-16 rounded-lg object-cover"
										/>
										<div className="">
											<h1 className="text-lg font-semibold">{document.name}</h1>
											<p className="text-white/70">{document.subtitle}</p>
										</div>
									</div>
								</div>
							</td>
							<td>{document.resolution}</td>
							<td>{document.createdFrom}</td>
							<td>
								<div className="text-left">
									<h3 className="font-semibold">{document.createdAt.date}</h3>
									<h4 className="text-white/50">{document.createdAt.time}</h4>
								</div>
							</td>
							<td className="pt-10 flex justify-end  gap-6">
								<button>
									<Image
										src="/main/download.svg"
										alt="Image"
										height={20}
										width={20}
									/>
								</button>
								<button>
									<Image
										src="/main/delete.svg"
										alt="Image"
										height={20}
										width={20}
									/>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
