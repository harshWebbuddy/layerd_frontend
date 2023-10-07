import Modal from "@/components/Modal/PopupModal";
import { menuSections } from "@/utils/constants/objects";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
	onClose: () => void;
	isOpen: boolean;
}
export default function Popup({ onClose, isOpen }: IProps) {
	const router = useRouter();
	return (
		<Modal onClose={onClose} isOpen={isOpen}>
			<div className="min-h-screen w-full">
				<div className="relative m-5 md:m-14">
					<div className="flex justify-between w-full">
						<div className="flex gap-5 font-bold">
							<p className="text-primary-yellow uppercase ">Menu</p>
							<div className="flex gap-3 text-primary-yellow">
								<p>: :</p>
								<p>: :</p>
							</div>
						</div>
						<div
							className="flex items-center gap-5 absolute top-0 right-0 "
							onClick={onClose}>
							<span className="font-bold">Close</span>
							<button className="p-3 rounded-xl ring-1 ring-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="mt-10 flex w-full flex-wrap gap-y-14 gap-x-4 justify-between">
						{menuSections.map((section, index) => (
							<div key={index} className="w-full min-w-[200px] max-w-fit">
								<div className="gap-2 flex items-center">
									<h3 className="text-xl font-bold uppercase">
										{section.title}
									</h3>
									<div className="ring-1 ring-white w-7 h-7 grid place-content-center  rounded-full">
										{section.items.length}
									</div>
								</div>
								<ul className="list-none mt-6 flex flex-col gap-4  border-l border-dashed border-white h-fit px-10">
									{section.items.map((item, itemIndex) => (
										<li
											key={itemIndex}
											className="mt-1 flex items-center gap-2">
											<a href={item.link} className="hover:underline">
												<span dangerouslySetInnerHTML={{ __html: item.text }} />
											</a>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-4 h-4">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
												/>
											</svg>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="flex gap-4 mt-10">
						<button
							onClick={() => router.push("/auth/login")}
							className="mb-20 bg-transparent ring-1 ring-inset ring-gray-300 max-h-12 py-2 w-28 rounded-xl hover:bg-neutral-700/30 transition">
							Sign in
						</button>
						<button
							onClick={() => router.push("/auth/register")}
							className="mb-20 bg-gradient-to-r from-primary-red max-h-12 to-primary-yellow py-2 w-28 rounded-xl">
							Sign up
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
}
