import Image from "next/image";
import React from "react";
interface Props {
	columns: string[];
	data: Array<any>;
}
export default function Table({ columns, data }: Props) {
	return (
		<div className="w-full overflow-x-auto">
			<table className="w-full">
				<thead className="border-b-[3px] border-white/10">
					<tr>
						{columns.map((column, index) => (
							<th
								key={index}
								className={`text-primary-yellow text-left p-6 min-w-[250px] ${
									index === 0 && "pl-6 sm:pl-14"
								}`}>
								<div className="flex gap-2 w-full justify-between">
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
								</div>{" "}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.length !== 0 && (
						<tr>
							<h1>Data</h1>
						</tr>
					)}
				</tbody>
			</table>
			{!data.length && (
				<section className="h-[20vh] grid place-content-center">
					<div>
						<p>There are no saved documents yet</p>
					</div>
				</section>
			)}
		</div>
	);
}
