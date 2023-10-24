import Image from "next/image";
import React from "react";
import ClipBoard from "./components/ClipBoard";
import { referalLinks } from "./components/constants";
import Link from "next/link";
import Mail from "./components/Mail";
import { labels } from "@/utils/constants/objects";

export default function page() {
	return (
		<section className="px-2 sm:px-10 py-5 space-y-5 overflow-x-hidden">
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-3 py-7 sm:p-7 space-y-10">
				<div className="flex flex-col xl:flex-row items-start justify-between gap-10 xl:gap-28">
					<div className="w-full space-y-6 sm:space-y-4">
						<h1 className="text-2xl font-semibold">Affiliate Program</h1>
						<p className="text-[#ABAEB7] md:max-w-lg">
							Invite your friends, and when they subscribe, you can get a
							commission of their purchase(s).
						</p>
						<div className="space-y-1">
							<p>My Referral URL</p>
							<div className="bg-[#454545] flex items-center justify-between pl-2 pr-0.5 sm:pr-0 sm:pl-4 rounded-lg">
								<code className="whitespace-nowrap">
									https://whopme.com/?ref= DVEX8UDTAQHOODD
								</code>
								<ClipBoard textToCopy="https://whopme.com/?ref= DVEX8UDTAQHOODD" />
							</div>
						</div>
					</div>
					<div className="w-full grid  grid-cols-1 md:grid-cols-3 gap-4 xl:justify-end">
						{referalLinks.map((item, index) => (
							<Link
								href={item.link}
								key={index}
								className="bg-gradient-to-br from-[#d3d3d309] to-[#8f8f8f00] backdrop-blur-md rounded-lg p-10 space-y-4 flex flex-col items-center w-full h-full">
								<Image
									src={item.image}
									alt="Referral-image"
									width={55}
									height={55}
								/>
								<p className="font-semibold">{item.title}</p>
							</Link>
						))}
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="bg-gradient-to-br from-[#ffffff10] to-[#8f8f8f02] backdrop-blur-md rounded-lg p-6 space-y-4 flex items-center w-full justify-between">
						<div className="space-y-1">
							<h1>My Earned Commissions</h1>
							<p className="text-primary-yellow text-xl font-semibold">$0.00</p>
						</div>
						<Image src="/main/image.svg" alt="image" width={40} height={40} />
					</div>
					<div className="bg-gradient-to-br from-[#ffffff10] to-[#8f8f8f02] backdrop-blur-md rounded-lg p-6 space-y-4 flex items-center w-full justify-between">
						<div className="space-y-1">
							<h1>Referral Commission Rate</h1>
							<p className="text-primary-yellow text-xl font-semibold">10%</p>
						</div>
						<Image src="/main/image.svg" alt="image" width={40} height={40} />
					</div>
					<div className="bg-gradient-to-br from-[#ffffff10] to-[#8f8f8f02] backdrop-blur-md rounded-lg p-6 space-y-4 flex items-center w-full justify-between">
						<div className="space-y-1">
							<p className="text-primary-yellow text-xl font-semibold">
								Referral Policy
							</p>
							<h1>Every Successful Payment by Referred Person</h1>
						</div>
						<Image src="/main/image.svg" alt="image" width={40} height={40} />
					</div>
				</div>
				<div className="space-y-4">
					<h1 className="text-xl font-semibold">Referral Guidelines</h1>
					<ol className="list-decimal translate-x-6 space-y-1.5 pr-6">
						<li>Share your referral link with your friends to register </li>
						<li>For their subscription, you will receive a commissions </li>
						<li>
							Include your Bank Requisites or Paypal ID in My Gateway tab to
							receive your commissions
						</li>
						<li>Request payouts under My Payouts tab </li>
						<li>Checkout all your referrals under My Referrals tab</li>
					</ol>
				</div>
			</div>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-3 py-7 sm:p-7 space-y-10">
				<h1 className="text-2xl font-semibold">Affiliate Program</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="bg-gradient-to-br from-[#ffffff10] to-[#8f8f8f02] backdrop-blur-md rounded-lg p-6 space-y-4 flex flex-col items-center w-full">
						<Image
							src="/main/send-mail.svg"
							alt="image"
							width={60}
							height={60}
						/>
						<h1 className="text-2xl font-semibold">Send Invitation</h1>
						<p className="text-center">
							Send your referral link to your friends and tell them how cool is
							WhopMe!
						</p>
					</div>
					<div className="bg-gradient-to-br from-[#ffffff10] to-[#8f8f8f02] backdrop-blur-md rounded-lg p-6 space-y-4 flex flex-col items-center w-full">
						<Image
							src="/main/send-mail.svg"
							alt="image"
							width={60}
							height={60}
						/>
						<h1 className="text-2xl font-semibold">Registration</h1>
						<p className="text-center">
							Let them register using your referral link.
						</p>
					</div>
					<div className="bg-gradient-to-br from-[#ffffff10] to-[#8f8f8f02] backdrop-blur-md rounded-lg p-6 space-y-4 flex flex-col items-center w-full">
						<Image
							src="/main/commission.svg"
							alt="image"
							width={60}
							height={60}
						/>
						<h1 className="text-2xl font-semibold">Get Commissions</h1>
						<p className="text-center">
							Earn commission for all their subscription plan payments.
						</p>
					</div>
				</div>
				<div className="space-y-5">
					<h1 className="text-2xl font-semibold">My Referral URL</h1>
					<Mail />
				</div>
				<div className="space-y-5 p-1 sm:p-0">
					<h1 className="text-2xl font-semibold">Share the referral link</h1>

					<div className="space-y-3">
						<p>
							You can also share your referral link by copying and sending it or
							sharing it on your social media profiles.
						</p>
						<div className="flex flex-col md:flex-row gap-10 sm:items-center">
							<div className="w-full py-3 px-4 bg-transparent ring-1 ring-white/20 rounded-lg">
								https://whopme.com/?ref= DVEX8UDTAQHOODD
							</div>
							<div className="flex gap-3">
								{labels.map((label, index) => (
									<Link href={label.link} key={index}>
										<Image
											src={label.icon}
											alt="Social-media"
											height={50}
											width={50}
										/>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
