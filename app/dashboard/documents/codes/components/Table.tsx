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
									index === 0 && "pl-8 sm:pl-14"
								}`}>
								{column}
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
				<section className="h-[50vh] grid place-content-center">
					<div>
						<p>There are no saved documents yet</p>
					</div>
				</section>
			)}
		</div>
	);
}
