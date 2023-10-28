import Image from "next/image";
import React from "react";
import Input from "../../team/new/components/Input";
import Selection from "../../account/me/components/Selection";
import ISelection from "../work-books/components/ISelection";

export default function page() {
	return (
		<section className="px-3 sm:px-7 sm:pr-10 py-5 space-y-5">
			<h1 className="text-2xl font-semibold">All Documents</h1>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg ">
				<div className="px-4 sm:px-10 py-7">
					<div className="flex flex-wrap gap-4 justify-between items-center">
						<h1 className="text-primary-yellow capitalize text-2xl font-bold">
							Generated Text
						</h1>
						{/* <SearchFilter /> */}
						<div className="flex gap-3">
							<div className="w-full bg-gradient-to-br from-[#ffffff09] to-[#8f8f8f00] backdrop-blur-md rounded-lg p-3 cursor-pointer hover:bg-[#ffffff11]  grid place-content-center">
								<Image
									src="/main/word.svg"
									alt="Create Folder"
									width={20}
									height={20}
									className="min-w-[20px]"
								/>
							</div>
							<div className="w-full bg-gradient-to-br from-[#ffffff09] to-[#8f8f8f00] backdrop-blur-md rounded-lg p-3 cursor-pointer hover:bg-[#ffffff11]  grid place-content-center">
								<Image
									src="/main/pdf-file 1.svg"
									alt="Create Folder"
									width={20}
									height={20}
									className="min-w-[20px]"
								/>
							</div>
							<div className="w-full bg-gradient-to-br from-[#ffffff09] to-[#8f8f8f00] backdrop-blur-md rounded-lg p-3 cursor-pointer hover:bg-[#ffffff11]  grid place-content-center">
								<Image
									src="/main/copy 1.svg"
									alt="Create Folder"
									width={25}
									height={25}
									className="min-w-[25px]"
								/>
							</div>
							<div className="w-full bg-gradient-to-br from-[#ffffff09] to-[#8f8f8f00] backdrop-blur-md rounded-lg p-1.5 cursor-pointer hover:bg-[#ffffff11]  grid place-content-center">
								<Image
									src="/main/save 1.svg"
									alt="Create Folder"
									width={40}
									height={40}
									className="min-w-[40px]"
								/>
							</div>
						</div>
					</div>
					<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-6" />
					<div className="flex flex-col sm:flex-row gap-4">
						<Input
							id="document-name"
							label="New Document"
							placeholder="Document Name"
							type="text"
						/>
						<ISelection />
					</div>
					<div className="bg-gradient-to-br from-[#ffffff00] to-[#8f8f8f00]  backdrop-blur-sm p-4 md:p-6 mt-6">
						<div className="space-y-4">
							<p>
								Lorem ipsum dolor sit amet consectetur. Penatibus ut lobortis
								eget sit condimentum proin nunc. Cursus aenean amet proin
								integer morbi id nibh ornare suspendisse. Diam quis accumsan est
								elit eu. Erat rhoncus quisque nunc sed diam orci. Mattis a id
								quam massa ornare.
							</p>
							<ul className="list-decimal translate-x-4 pr-4 space-y-1">
								<li>Share your referral link with your friends to register </li>
								<li>For their subscription, you will receive a commissions </li>
								<li>
									Include your Bank Requisites or Paypal ID in My Gateway tab to
									receive your commissions{" "}
								</li>
								<li>Request payouts under My Payouts tab </li>
								<li>Checkout all your referrals under My Referrals tab</li>
							</ul>
						</div>
					</div>
					<div className="flex justify-end w-full mt-4">
						<button className="ring-1 ring-white rounded-md w-full max-w-[120px] py-3">
							Return
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
