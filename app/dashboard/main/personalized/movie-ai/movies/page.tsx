import NavigationButton from "@/app/dashboard/components/NavigationButton";
import Image from "next/image";
import React from "react";
import { movieData } from "./dummyData";

export default function page() {
	return (
		<div className="w-full">
			<div className="bg-black/90 fixed inset-0" />
			<div className="py-4 px-3 sm:px-8 space-y-10 absolute w-full">
				<NavigationButton
					styleClass="font-bold flex items-center justify-between gap-3 bg-[#373434] hover:bg-[#3d3d3d] p-3 w-[200px] rounded-lg"
					link="/dashboard/main/personalized/movie-ai/movies">
					<Image
						src="/arrow-left.svg"
						alt="Arrow Right"
						width={20}
						height={20}
					/>
					<span>Back to Search</span>
				</NavigationButton>
				<h1 className="text-lg">Search Results</h1>
				<div className="grid grid-cols-1 2xl:grid-cols-2 gap-3 sm:pr-12">
					{movieData.map((movie, index) => (
						<div
							className="bg-[url('/main/background-movie.png')] bg-no-repeat bg-center bg-cover ring-1 ring-neutral-800 ring-inset rounded-2xl p-5 flex gap-5 w-full relative"
							key={index}>
							<Image
								src={movie.image}
								alt="movie-image"
								width={200}
								height={10}
								className="!w-[200px] h-full rounded-md"
							/>
							<div className="space-y-4">
								<h1 className="text-3xl font-semibold">{movie.title}</h1>
								<p className="text-[#ABAEB7] leading-relaxed text-lg">
									{movie.description}
								</p>
								<p className="absolute top-0 right-0 m-5 text-lg text-primary-yellow">
									{movie.date}
								</p>
								<div>
									<p className="text-[#ABAEB7]">
										<span className="text-primary-yellow font-semibold">
											Starring:{" "}
										</span>
										{movie.cast.map((person, i) => (
											<span key={i}>
												{person}
												{movie.cast.indexOf(person) !== movie.cast.length - 1 &&
													","}{" "}
											</span>
										))}
									</p>
								</div>
								<button className="flex items-center justify-center gap-3 bg-[#3d3d3d] p-3 w-[120px] rounded-lg uppercase">
									TV - PG
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
