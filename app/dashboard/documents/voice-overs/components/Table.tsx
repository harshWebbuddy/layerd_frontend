import Image from "next/image";
import React from "react";
interface Props {
	columns: string[];
	data: Array<any>;
}
export default function Table({ columns, data }: Props) {
	return (
		<div className="w-full overflow-x-auto 2xl:overflow-clip">
			<table className="w-full">
				<thead className="border-b-[3px] border-white/10">
					<tr>
						{columns.slice(0, 6).map((column, index) => (
							<th
								key={index}
								className={`text-primary-yellow text-left p-4 min-w-[150px]  ${
									index === 0 && "pl-6 md:pl-10"
								}`}>
								<div className="flex gap-2 w-full whitespace-nowrap">
									{column}
									<div className="flex flex-col justify-end">
										<Image
											src="/main/fi_chevron-up.svg"
											alt="Search"
											width={15}
											height={15}
											className="min-w-[15px]"
										/>
										<Image
											src="/main/chevron-down.svg"
											alt="Search"
											width={15}
											height={15}
											className="-translate-y-2 min-w-[15px]"
										/>
									</div>
								</div>
							</th>
						))}
						<th className="min-w-[80px]">
							<div className="flex justify-center">
								<Image
									src="/main/music-tune.svg"
									alt="Search"
									width={25}
									height={25}
									className="min-w-[25px]"
								/>
							</div>
						</th>
						<th className="min-w-[80px]">
							<div className="flex justify-center">
								<Image
									src="/main/download-colored.svg"
									alt="Search"
									width={25}
									height={25}
									className="min-w-[25px]"
								/>
							</div>
						</th>
						{columns.slice(6).map((column, index) => (
							<th
								key={index}
								className={`text-primary-yellow text-left p-4 min-w-[150px]`}>
								<div className="flex gap-2 w-full">
									{column}
									<div className="flex flex-col justify-end">
										<Image
											src="/main/fi_chevron-up.svg"
											alt="Search"
											width={15}
											height={15}
											className="min-w-[15px]"
										/>
										<Image
											src="/main/chevron-down.svg"
											alt="Search"
											width={15}
											height={15}
											className="-translate-y-2 min-w-[15px]"
										/>
									</div>
								</div>
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
						<p>No Voice Over Results Found</p>
					</div>
				</section>
			)}
		</div>
	);
}
