import React from "react";
import {
	affiliateData,
	cardData,
	paymentStructure,
	supportOptions,
} from "./constants";
import Card from "./components/Card";
import Image from "next/image";
import Reviews from "../about/components/Reviews";

export default function AffiliatePage() {
	return (
		<main>
			<div className="bg-[url('/background-image.png')] w-full h-[35vh] bg-center bg-no-repeat bg-cover">
				<div className="w-full h-full flex flex-col sm:justify-center sm:items-center gap-5 p-3">
					<h1 className="sm:text-center uppercase mt-4 text-3xl md:text-4xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text max-w-2xl">
						"Join the future of AI - Become a
						<span className="bg-gradient-to-b from-primary-red to-primary-yellow bg-clip-text text-transparent">
							WhopMe
						</span>
						affiliate today!"
					</h1>
					<p className="font-bold text-lg">
						"Leverage the power of AI to earn while you empower others with
						cutting-edge technology."
					</p>
					<p className="text-center max-w-3xl text-white/80">
						Welcome to the WhopMe.com Affiliate Program! We're excited to have
						you join our team and help us spread the word about our innovative
						AI tools. By joining our affiliate program, you can earn a
						commission for every sale that is made through your unique referral
						link.
					</p>
				</div>
			</div>
			<section className="max-w-[1400px] mx-auto mt-20 p-3 sm:p-4">
				<div>
					<div>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							draggable={false}
							className="w-[450px] h-[70px] absolute left-0 -translate-y-5"
						/>
						<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
							How It Works
						</h1>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
						{cardData.map((item, index) => (
							<Card item={item} key={index} />
						))}
					</div>
				</div>
				<div className="space-y-10 mt-20">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						draggable={false}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-5"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						Why Join Us?
					</h1>
					<div>
						<Image
							src="/background-image-whopme-demo.png"
							alt="whop-me-admin"
							width={1920}
							height={1080}
							draggable={false}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{affiliateData.map((item) => (
							<div className="space-y-4 hover:bg-zinc-700/20 bg-cover hover:shadow-2xl px-10 py-5 cursor-pointer rounded-2xl transition duration-300">
								<Image src={item.icon} alt="Icon" width={30} height={30} />
								<h1 className="text-2xl font-bold">{item.title}</h1>
								<p>{item.description}</p>
							</div>
						))}
					</div>
				</div>
				<div className="max-w-[1400px] mx-auto">
					<Image
						src="/slash.png"
						width={600}
						height={300}
						alt="Slashes"
						draggable={false}
						className="absolute left-0 w-[500px] h-[80px] translate-y-16 z-0"
					/>
					<div className="mt-10 md:mt-20 ring-2 p-5 pb-10 md:py-14 md:px-28 ring-gray-400/60 bg-neutral-700/20 rounded-3xl relative z-10">
						<div className="flex flex-col md:flex-row items-start justify-center gap-4">
							<div className="w-full space-y-6">
								<h1 className="relative z-20 uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600  max-w-3xl font-bold text-transparent text-left bg-clip-text">
									WhopMe Affiliate Program - Empowering You to Empower Others
								</h1>
								<p className="max-w-2xl text-sm text-white/80 leading-relaxed">
									At WhopMe, we believe in the power of AI to transform lives
									and businesses. By becoming an affiliate, you're not just
									earning - you're helping others discover the transformative
									power of AI. Join us today and start your journey to success
									with WhopMe.
								</p>
							</div>
							<div className="-mt-10">
								<Image
									src="/gifs/animated-hand.gif"
									alt="bot"
									width={600}
									height={600}
								/>
							</div>
						</div>
						<div className="flex flex-col md:flex-row-reverse justify-center items-center gap-10 -mt-16">
							<div className="w-full space-y-6">
								<h1 className="relative z-20 uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600  max-w-3xl font-bold text-transparent text-left bg-clip-text">
									Ready to Join the AI Revolution?
								</h1>
								<p className="max-w-2xl text-sm text-white/80 leading-relaxed">
									Sign up for the WhopMe Affiliate Program today and start
									earning. Welcome to the future of AI. Welcome to WhopMe.
								</p>
							</div>
							<div>
								<Image
									src="/gifs/animated-bot.gif"
									alt="bot"
									width={600}
									height={600}
								/>
							</div>
						</div>
					</div>
					<Image
						src="/slash.png"
						width={600}
						height={400}
						alt="Slashes"
						draggable={false}
						className="absolute right-0 w-[700px] h-[80px] -translate-y-64 object-cover z-0"
					/>
				</div>
				<div className="mt-20">
					<Image
						src="/slash.png"
						width={600}
						height={300}
						alt="Slashes"
						draggable={false}
						className="absolute left-0 w-[500px] h-[80px] -translate-y-8 z-0"
					/>
					<div className="w-full space-y-6">
						<h1 className="relative z-20 uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600  max-w-3xl font-bold text-transparent text-left bg-clip-text">
							Support
						</h1>
						<p className="text-sm text-white/80 leading-relaxed">
							At WhopMe.com, we believe in the power of collaboration and
							communication. Our dedicated support team is available 24/7 to
							assist our valued affiliates with any questions or concerns they
							may have. We understand the importance of timely and effective
							support, and we strive to provide the best possible service to our
							affiliates.
						</p>
						<p className="text-sm text-white/80 leading-relaxed">
							You can reach us through various channels for your convenience:
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-10">
					<Image
						src="/svgs/path.svg"
						width={1000}
						height={300}
						alt="Slashes"
						className="absolute h-[80px] hidden md:block z-0 translate-x-24 translate-y-2"
					/>
					{supportOptions.map((item, index) => (
						<div className="space-y-6 p-5 cursor-pointer relative z-10 ">
							<div className="bg-primary-yellow max-w-fit rounded-full p-[2px]">
								<div className="bg-black rounded-full p-[2px]">
									<div className="bg-primary-yellow p-2 rounded-full h-14 w-14 flex items-center justify-center">
										<span className="text-2xl font-bold text-black">
											0{index + 1}
										</span>
									</div>
								</div>
							</div>
							<h1 className="text-2xl font-bold">{item.title}</h1>
							<p className="text-sm text-white/70">{item.description}</p>
						</div>
					))}
				</div>
				<div className="mt-20">
					<Image
						src="/slash.png"
						width={600}
						height={300}
						alt="Slashes"
						draggable={false}
						className="absolute left-0 w-[400px] h-[80px] -translate-y-2"
					/>
					<div className="flex flex-col gap-3 sm:flex-row items-start relative z-10">
						<div className="w-full">
							<h1 className="uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 max-w-sm font-bold text-transparent text-left bg-clip-text">
								Testimonials
							</h1>
						</div>
						<div className="w-full mb-4">
							<p className="tracking-tight leading-tight text-white/80">
								We are proud of our affiliate community and the success they
								have achieved with WhopMe.com. Here are some of the testimonials
								from our affiliates who have found immense success with us:
							</p>
						</div>
					</div>
					<Reviews />
				</div>
				<div className="mt-20">
					<div>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							draggable={false}
							className="w-[1000px] h-[70px] absolute left-0 -translate-y-3"
						/>
						<h1 className="relative text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
							Payment Structure
						</h1>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							draggable={false}
							className="w-[1000px] h-[70px] absolute right-0 -translate-y-12"
						/>
					</div>
				</div>
				<div className="mt-20">
					<div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
						<div className="bg-gradient-to-br  from-[#222222] to-[#181818]/10 rounded-2xl">
							<h1 className="text-[#F9BA3F] uppercase bg-[#353535] p-3 text-center rounded-t-2xl">
								Level
							</h1>
							<div className="px-6">
								{paymentStructure.map((item, index) => (
									<div
										className={`px-3  py-6 h-[100px] md:h-[120px]  ${
											index !== paymentStructure.length - 1 &&
											"border-b border-[#646464]/30"
										}`}>
										<div>{item.level}</div>
									</div>
								))}
							</div>
						</div>
						<div className="bg-gradient-to-br  from-[#222222] to-[#181818]/10 rounded-2xl">
							<h1 className="text-[#F9BA3F] uppercase bg-[#353535] p-3 text-center rounded-t-2xl">
								Commision Rate
							</h1>
							<div className="px-6">
								{paymentStructure.map((item, index) => (
									<div
										className={`px-3 py-6 h-[100px] md:h-[120px] ${
											index !== paymentStructure.length - 1 &&
											"border-b border-[#646464]/30"
										}`}>
										<div>{item.commisionRate}</div>
									</div>
								))}
							</div>
						</div>
						<div className="bg-gradient-to-br from-[#222222] to-[#181818]/10 rounded-2xl">
							<h1 className="text-[#F9BA3F] uppercase bg-[#353535] p-3 text-center rounded-t-2xl">
								Description
							</h1>
							<div className="px-6">
								{paymentStructure.map((item, index) => (
									<div
										className={`px-3 py-2 h-[100px] md:h-[120px] ${
											index !== paymentStructure.length - 1 &&
											"border-b border-[#646464]/30"
										}`}>
										<div className="text-sm">{item.description}</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="mt-10 space-y-4">
						<h1>Additional bonuses for top-performing affiliates, such as:</h1>
						<ul className="translate-x-6 pr-6">
							<li className="list-disc leading-relaxed">
								<span className="text-primary-yellow font-semibold">
									Extra 2% commission
								</span>{" "}
								for the top affiliate of the month.
							</li>
							<li className="list-disc leading-relaxed">
								<span className="text-primary-yellow font-semibold">
									$500 bonus
								</span>{" "}
								for every{" "}
								<span className="text-primary-yellow font-semibold">
									$10,000
								</span>{" "}
								in sales.
							</li>
							<li className="list-disc leading-relaxed">
								Special rewards for the top 3 affiliates of the year, like a
								trip or high-value gift cards.
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-20 space-y-10">
					<Image
						src="/slash.png"
						width={600}
						height={300}
						alt="Slashes"
						draggable={false}
						className="absolute left-0 w-[400px] h-[80px] -translate-y-2"
					/>
					<div className="flex flex-col relative z-10">
						<div className="w-full">
							<h1 className="uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 max-w-sm font-bold text-transparent text-left bg-clip-text">
								Payment Details :
							</h1>
						</div>
						<p className="mt-4">
							At WhopMe.com, we value and appreciate the hard work of our
							affiliates. That's why we've put in place a clear, fair, and
							timely payment system that allows you to earn and access your
							commissions without any hassle.
						</p>
					</div>
					<div className="space-y-1">
						<h2 className="text-primary-yellow font-semibold">
							Payment Methods:
						</h2>
						<p className="text-white/70 text-sm leading-relaxed">
							We offer a variety of payment methods to suit your preferences and
							needs. Currently, we support payments through PayPal, Bank
							Transfer, and Check. If you have a preferred payment method that
							is not listed, please reach out to our support team and we'll do
							our best to accommodate your request.
						</p>
					</div>
					<div className="space-y-1">
						<h2 className="text-primary-yellow font-semibold">
							Minimum Payout Amount:
						</h2>
						<p className="text-white/70 text-sm leading-relaxed">
							To keep the payment process efficient, we've set a minimum payout
							amount of $100. This means that you need to earn at least $100 in
							commissions before a payment can be issued. If your earnings for a
							particular payment period do not reach this threshold, they will
							be rolled over to the next payment period until the minimum payout
							amount is met.
						</p>
					</div>
					<div className="space-y-6 ">
						<h2 className="text-primary-yellow font-semibold">
							Payment Schedule:
						</h2>
						<p className="text-white/70 text-sm leading-relaxed">
							We understand the importance of timely payments for our
							affiliates. Therefore, we operate on a monthly payment schedule.
							All commissions earned within a calendar month are paid out by the{" "}
							<span className="text-primary-yellow font-semibold">
								15th of the following month
							</span>
							. For example, if you earned commissions in January, you can
							expect to receive your payment by{" "}
							<span className="text-primary-yellow font-semibold">
								February 15th.
							</span>
						</p>
						<p className="text-white/70 text-sm leading-relaxed">
							Please note that payments may take a few days to process,
							depending on the payment method used. Rest assured, our dedicated
							team works tirelessly to ensure that all payments are sent out on
							time.
						</p>
						<p className="text-white/70 text-sm leading-relaxed">
							We believe in transparency and open communication. Therefore,
							you'll always have access to detailed reports of your earnings and
							payments in your affiliate dashboard. If you ever have any
							questions or concerns about your payments, our support team is
							always ready to assist.
						</p>
						<p className="text-white/70 text-sm leading-relaxed">
							Join us today and start earning with WhopMe.com, your one-stop
							platform for all things AI!
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
