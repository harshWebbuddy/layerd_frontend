import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PrivacyPolicyPage() {
	return (
		<main>
			<div className="bg-[url('/background-image.png')] w-full h-[35vh] bg-center bg-no-repeat bg-cover">
				<div className="w-full h-full flex flex-col justify-center items-center gap-1">
					<p className="bg-gradient-to-r from-primary-yellow to-primary-red font-bold text-transparent bg-clip-text">
						Last updated: July 28, 2023
					</p>
					<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
						Privacy Policy
					</h1>
				</div>
			</div>
			<section className="max-w-[1300px] mx-auto mt-20 space-y-14 p-3 sm:p-4 leading-relaxed text-white/70">
				<div className="space-y-6">
					<p>
						At WhopMe, accessible from{" "}
						<Link href="https://www.whopme.com" className="underline">
							https://www.whopme.com
						</Link>
						, one of our main priorities is the privacy of our visitors. This
						Privacy Policy document contains types of information that is
						collected and recorded by WhopMe and how we use it.
					</p>
					<p>
						If you have additional questions or require more information about
						our Privacy Policy, do not hesitate to contact us.
					</p>
					<p>
						This Privacy Policy applies only to our online activities and is
						valid for visitors to our website with regards to the information
						that they shared and/or collect in WhopMe. This policy is not
						applicable to any information collected offline or via channels
						other than this website.
					</p>
				</div>
				<div className="space-y-6">
					<div>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
						/>
						<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
							Consent
						</h1>
						<p className="relative z-10 mt-6">
							By using our website, you hereby consent to our Privacy Policy and
							agree to its terms.
						</p>
					</div>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						Information we collect
					</h1>
					<p className="relative z-10 mt-6">
						The personal information that you are asked to provide, and the
						reasons why you are asked to provide it, will be made clear to you
						at the point we ask you to provide your personal information.
					</p>
					<p>
						If you contact us directly, we may receive additional information
						about you such as your name, email address, phone number, the
						contents of the message and/or attachments you may send us, and any
						other information you may choose to provide.
					</p>
					<p>
						When you register for an Account, we may ask for your contact
						information, including items such as name, company name, address,
						email address, and telephone number.
					</p>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						How we use your information
					</h1>
					<ul className="relative z-10 mt-6 space-y-1">
						<h1 className="font-bold text-white mb-6">
							We use the information we collect in various ways, including to:
						</h1>

						<li className="list-disc pr-7 translate-x-6">
							Provide, operate, and maintain our website
						</li>
						<li className="list-disc pr-7 translate-x-6">
							Improve, personalize, and expand our website
						</li>
						<li className="list-disc pr-7 translate-x-6">
							Understand and analyze how you use our website
						</li>
						<li className="list-disc pr-7 translate-x-6">
							Develop new products, services, features, and functionality
						</li>
						<li className="list-disc pr-7 translate-x-6">
							Develop new products, services, features, and functionality
						</li>
						<li className="list-disc pr-7 translate-x-6">
							Communicate with you, either directly or through one of our
							partners, including for customer service, to provide you with
							updates and other information relating to the website, and for
							marketing and promotional purposes
						</li>
						<li className="list-disc pr-7 translate-x-6">Send you emails </li>
						<li className="list-disc pr-7 translate-x-6">
							Find and prevent fraud
						</li>
					</ul>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						Log files
					</h1>
					<p className="relative z-10 mt-6">
						WhopMe follows a standard procedure of using log files. These files
						log visitors when they visit websites. All hosting companies do this
						and a part of hosting services' analytics. The information collected
						by log files include internet protocol (IP) addresses, browser type,
						Internet Service Provider (ISP), date and time stamp, referring/exit
						pages, and possibly the number of clicks. These are not linked to
						any information that is personally identifiable. The purpose of the
						information is for analyzing trends, administering the site,
						tracking users' movement on the website, and gathering demographic
						information.
					</p>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						Cookies and Web Beacons
					</h1>
					<p className="relative z-10 mt-6">
						Like any other website, WhopMe uses "cookies". These cookies are
						used to store information including visitors' preferences, and the
						pages on the website that the visitor accessed or visited. The
						information is used to optimize the users' experience by customizing
						our web page content based on visitors' browser type and/or other
						information.
					</p>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						Our Advertising Partners
					</h1>
					<p className="relative z-10 mt-6">
						Some of advertisers on our site may use cookies and web beacons. Our
						advertising partners are listed below. Each of our advertising
						partners has their own Privacy Policy for their policies on user
						data. For easier access, we hyperlinked to their Privacy Policies
						below.
					</p>
					<p>Google</p>
					<Link
						href="https://policies.google.com/technologies/ads"
						className="underline">
						https://policies.google.com/technologies/ads
					</Link>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						Advertising Partners Privacy Policies
					</h1>
					<p className="relative z-10 mt-6">
						You may consult this list to find the Privacy Policy for each of the
						advertising partners of WhopMe.
					</p>
					<p>
						Third-party ad servers or ad networks uses technologies like
						cookies, JavaScript, or Web Beacons that are used in their
						respective advertisements and links that appear on WhopMe, which are
						sent directly to users' browser. They automatically receive your IP
						address when this occurs. These technologies are used to measure the
						effectiveness of their advertising campaigns and/or to personalize
						the advertising content that you see on websites that you visit.
					</p>
					<p>
						Note that WhopMe has no access to or control over these cookies that
						are used by third-party advertisers.
					</p>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						Third Party Privacy Policies
					</h1>
					<p className="relative z-10 mt-6">
						WhopMe's Privacy Policy does not apply to other advertisers or
						websites. Thus, we are advising you to consult the respective
						Privacy Policies of these third-party ad servers for more detailed
						information. It may include their practices and instructions about
						how to opt-out of certain options.
					</p>
					<p>
						You can choose to disable cookies through your individual browser
						options. To know more detailed information about cookie management
						with specific web browsers, it can be found at the browsers'
						respective websites.
					</p>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						CCPA Privacy Rights (Do Not Sell My Personal Information)
					</h1>
					<ul className="relative z-10 mt-6 space-y-1">
						<h1 className="font-bold text-white mb-6">
							Under the CCPA, among other rights, California consumers have the
							right to:
						</h1>
						<li className="list-disc pr-7 translate-x-6">
							Request that a business that collects a consumer's personal data
							disclose the categories and specific pieces of personal data that
							a business has collected about consumers.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							The right to rectification – You have the right to request that we
							correct any information you believe is inaccurate. You also have
							the right to request that we complete the information you believe
							is incomplete.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							The right to erasure – You have the right to request that we erase
							your personal data, under certain conditions.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							The right to restrict processing – You have the right to request
							that we restrict the processing of your personal data, under
							certain conditions.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							The right to object to processing – You have the right to object
							to our processing of your personal data, under certain conditions.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							The right to data portability – You have the right to request that
							we transfer the data that we have collected to another
							organization, or directly to you, under certain conditions.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							If you make a request, we have one month to respond to you. If you
							would like to exercise any of these rights, please contact us.
						</li>
					</ul>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						GDPR Data Protection Rights
					</h1>
					<ul className="relative z-10 mt-6 space-y-1">
						<h1 className="font-bold text-white mb-6">
							We would like to make sure you are fully aware of all of your data
							protection rights. Every user is entitled to the following:
						</h1>
						<li className="list-disc pr-7 translate-x-6">
							The right to access – You have the right to request copies of your
							personal data. We may charge you a small fee for this service.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							The right to rectification – You have the right to request that we
							correct any information you believe is inaccurate. You also have
							the right to request that we complete the information you believe
							is incomplete.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							The right to erasure – You have the right to request that we erase
							your personal data, under certain conditions.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							The right to restrict processing – You have the right to request
							that we restrict the processing of your personal data, under
							certain conditions.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							The right to object to processing – You have the right to object
							to our processing of your personal data, under certain conditions.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							The right to data portability – You have the right to request that
							we transfer the data that we have collected to another
							organization, or directly to you, under certain conditions.
						</li>
						<li className="list-disc pr-7 translate-x-6">
							If you make a request, we have one month to respond to you. If you
							would like to exercise any of these rights, please contact us.
						</li>
					</ul>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						Children's Information
					</h1>
					<p className="relative z-10 mt-6">
						Another part of our priority is adding protection for children while
						using the internet. We encourage parents and guardians to observe,
						participate in, and/or monitor and guide their online activity.
					</p>
					<p>
						WhopMe does not knowingly collect any Personal Identifiable
						Information from children under the age of 13. If you think that
						your child provided this kind of information on our website, we
						strongly encourage you to contact us immediately and we will do our
						best efforts to promptly remove such information from our records.
					</p>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						Changes to This Privacy Policy
					</h1>
					<p className="relative z-10 mt-6">
						We may update our Privacy Policy from time to time. Thus, we advise
						you to review this page periodically for any changes. We will notify
						you of any changes by posting the new Privacy Policy on this page.
						These changes are effective immediately, after they are posted on
						this page.
					</p>
					<p>
						Our Privacy Policy was created with the help of the Privacy Policy
						Generator.
					</p>
				</div>
				<div className="space-y-6">
					<Image
						src="/slash.png"
						alt="Slashes"
						height={100}
						width={600}
						className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
					/>
					<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
						Contact Us
					</h1>
					<p className="relative z-10 mt-6">
						If you have any questions or suggestions about our Privacy Policy,
						do not hesitate to contact us.
					</p>
					<Link href={"legal@whopme.com"} className="underline">
						legal@whopme.com
					</Link>
				</div>
			</section>
		</main>
	);
}
