"use client";

import NavigationButton from "@/app/dashboard/components/NavigationButton";
import { movieGenres } from "@/utils/constants/objects";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

export default function page() {
	const [selectedGroup, setselectedGroup] = useState("no preference");
	const showGroup = ["TV show", "movie", "no preference"];
	const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

	const handleGenreClick = (item: string) => {
		if (selectedGenres.includes(item)) {
			setSelectedGenres(selectedGenres.filter((genre) => genre !== item));
		} else {
			setSelectedGenres([...selectedGenres, item]);
		}
	};

	return (
		<section className="h-full">
			<div className="bg-black/90 fixed backdrop-blur-[6px] inset-0" />
			<div className="py-4 px-3 sm:px-8 space-y-10 absolute">
				<div>
					<div>
						<h1 className="text-lg">
							What kind of cinema are you searching for?
						</h1>
					</div>
					<div className="flex gap-3 mt-4">
						{showGroup.map((item, index) => (
							<button
								key={index}
								onClick={() => setselectedGroup(item)}
								className={clsx(
									"bg-[#49494980] py-2.5 px-4 capitalize rounded-md",
									selectedGroup.toLowerCase() === item.toLowerCase() &&
										"bg-gradient-to-br from-primary-red to-primary-yellow"
								)}>
								{item}
							</button>
						))}
					</div>
				</div>
				<div>
					<h1 className="text-lg">
						Select all categories that you want the show or movie to include.
					</h1>
					<div className="flex flex-wrap gap-2 mt-5">
						{movieGenres.map((item, index) => (
							<button
								onClick={() => handleGenreClick(item)}
								key={index}
								className={clsx(
									"bg-[#49494980] hover:bg-[#313131] py-2.5 px-4 capitalize rounded-md transition",
									selectedGenres.includes(item) &&
										"bg-gradient-to-br from-primary-red to-primary-yellow"
								)}>
								{item}
							</button>
						))}
					</div>
				</div>
				<div>
					<h1 className="text-lg">
						Write any other specifications here. Be as picky as you'd like.
					</h1>
					<div className="bg-[url('/main/background-image-textarea.png')] bg-no-repeat bg-center bg-cover rounded-xl overflow-hidden ring-1 ring-[#3d3d3f] ring-inset p-4 mt-5 focus-within:ring-2 transition duration-500">
						<textarea
							className="h-36 w-full resize-none outline-none bg-transparent"
							placeholder="Ex. Must have at least 2 seasons and be on Netflix or Hulu."></textarea>
					</div>
				</div>
				<div className="flex justify-center">
					<NavigationButton
						styleClass="font-bold flex items-center justify-between gap-3 bg-[#3d3d3d] hover:bg-[#3d3d3d] p-4 w-[250px] rounded-lg"
						link="/dashboard/main/personalized/movie-ai/movies">
						<span>Curate My List</span>
						<Image
							src="/arrow-right.svg"
							alt="Arrow Right"
							width={20}
							height={20}
						/>
					</NavigationButton>
				</div>
			</div>
		</section>
	);
}
