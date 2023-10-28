"use client"
import { LinkItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  index : number;
  item : LinkItem
}

export default function CollapsableItem({ item , index} : Props) {
  const pathname = usePathname()
	return (
		<div className="relative" key={index}>
			<div className={`flex items-end `}>
				<Image
					src={`${
						pathname.includes(item.link)
							? index !== 0
								? "/main/active-bar.svg"
								: "/main/active-bar-init.svg"
							: index !== 0
							? "/main/inactive-bar.svg"
							: "/main/inactive-bar-init.svg"
					}`}
					style={{
						transform:
							index > 1
								? `translateY(-${10 + index * 8}px)`
								: index === 1
								? "translateY(-14px)"
								: "translateY(0)",
					}}
					alt="Icon"
					width={20}
					height={50}
					draggable={false}
				/>
				<div
					className="w-full"
					style={{
						transform:
							index > 1
								? `translateY(-${index * 8}px)`
								: index === 1
								? "translateY(-2px)"
								: "translateY(10px)",
					}}>
					<Link href={item.link} className="cursor-pointer w-full">
						<div className="w-full flex justify-between items-center pr-4">
							<p
								className={`whitespace-nowrap ${
									pathname.toLowerCase().includes(item.link.toLowerCase()) &&
									"text-primary-yellow"
								}`}>
								{item.title}
							</p>
							<div
								className={`${
									pathname.toLowerCase().includes(item.link.toLowerCase()) &&
									"bg-primary-yellow p-[1px] rounded-full grid place-content-center"
								}`}>
								<Image
									src={item.icon}
									alt="Icon"
									width={200}
									height={100}
									draggable={false}
									className="w-7"
								/>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
