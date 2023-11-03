import NavigationButton from "@/app/dashboard/components/NavigationButton";
import Image from "next/image";
import React from "react";

export default function page() {
	return (
		<section className="p-3 h-full">
			<div className="h-full grid place-content-center mt-40 md:mt-0">
				<div className="flex flex-col justify-center items-center">
					<div className="max-w-6xl space-y-10 mb-60">
						<h1 className="text-2xl font-semibold text-center">AI Code Guru</h1>
						<div className="flex flex-col md:flex-row gap-3">
							<div className="bg-[url('/main/background-code.png')] bg-cover bg-center p-7 rounded-2xl ring-1 ring-neutral-700 ring-inset space-y-3">
								<div className="bg-[url('/main/code/background-code-rectangle.png')] bg-cover bg-center p-4 w-fit">
									<Image
										src="/main/code/code-explain.png"
										alt="code-explain"
										width={100}
										height={100}
										className="w-[50px] h-[50px] rounded-full"
									/>
								</div>
								<h1 className="text-xl font-semibold">Explain Code</h1>
								<p className="text-[#ABAEB7]">
									Lorem ipsum dolor sit amet consectetur. Semper faucibus
									vestibulum hac id viverra sit.
								</p>
								<NavigationButton
									link="/dashboard/main/ai-code/code-guru/code-explain"
									styleClass="bg-[#494949] flex justify-between w-full p-3 items-center rounded-md">
									<span className="font-semibold">View</span>
									<Image
										src="/arrow-right.svg"
										alt="code-explain"
										width={20}
										height={20}
										className="rounded-full"
									/>
								</NavigationButton>
							</div>
							<div className="bg-[url('/main/background-code.png')] bg-cover bg-center p-7 rounded-2xl ring-1 ring-neutral-700 ring-inset space-y-3">
								<div className="bg-[url('/main/code/background-code-rectangle.png')] bg-cover bg-center p-4 w-fit">
									<Image
										src="/main/code/code-refactor.png"
										alt="code-explain"
										width={100}
										height={100}
										className="w-[50px] h-[50px] rounded-full"
									/>
								</div>
								<h1 className="text-xl font-semibold">Code Refactor</h1>
								<p className="text-[#ABAEB7]">
									Lorem ipsum dolor sit amet consectetur. Semper faucibus
									vestibulum hac id viverra sit.
								</p>
								<NavigationButton
									link="/dashboard/main/ai-code/code-guru/code-refactor"
									styleClass="bg-[#494949] flex justify-between w-full p-3 items-center rounded-md">
									<span className="font-semibold">View</span>
									<Image
										src="/arrow-right.svg"
										alt="code-explain"
										width={20}
										height={20}
										className="rounded-full"
									/>
								</NavigationButton>
							</div>
							<div className="bg-[url('/main/background-code.png')] bg-cover bg-center p-7 rounded-2xl ring-1 ring-neutral-700 ring-inset space-y-3">
								<div className="bg-[url('/main/code/background-code-rectangle.png')] bg-cover bg-center p-4 w-fit">
									<Image
										src="/main/code/code-review.jpg"
										alt="code-explain"
										width={100}
										height={100}
										className="w-[50px] h-[50px] rounded-full"
									/>
								</div>
								<h1 className="text-xl font-semibold">Code Review</h1>
								<p className="text-[#ABAEB7]">
									Lorem ipsum dolor sit amet consectetur. Semper faucibus
									vestibulum hac id viverra sit.
								</p>
								<NavigationButton
									link="/dashboard/main/ai-code/code-guru/code-review"
									styleClass="bg-[#494949] flex justify-between w-full p-3 items-center rounded-md">
									<span className="font-semibold">View</span>
									<Image
										src="/arrow-right.svg"
										alt="code-review"
										width={20}
										height={20}
										className="rounded-full"
									/>
								</NavigationButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
