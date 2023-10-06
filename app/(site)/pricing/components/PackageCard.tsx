import Image from "next/image";
import clsx from "clsx";
import { Feature } from "@/types";
interface Props {
	name: string;
	price: number;
	features: Feature[];
	gradient: string;
	image: string;
	isPremium: boolean;
	accentColor: string;
	isCurrent: boolean;
	buttonTitle: string;
}
const PackageCard: React.FC<Props> = ({
	name,
	price,
	features,
	gradient,
	image,
	isPremium,
	accentColor,
	buttonTitle,
	isCurrent,
}) => {
	return (
		<div
			className={`p-1 bg-gradient-to-b ${gradient} relative rounded-2xl md:max-w-[430px] min-h-[560px] sm:min-h-max`}>
			{isPremium && (
				<div className="bg-[url('/rectangle.svg')] h-52 w-28 bg-no-repeat absolute top-1 right-1 rounded-xl">
					<p className="transform rotate-[35deg] translate-y-8 translate-x-12">
						Popular
					</p>
				</div>
			)}
			<div className="bg-gradient-to-b from-[#242424] to-black h-full p-5 sm:p-7 rounded-xl flex flex-col justify-between">
				<div>
					<div className="flex items-center gap-6 border-b border-[#454545] pb-6">
						<div className={`border ${accentColor} p-3 rounded-lg`}>
							<Image src={image} alt="Star" width={32} height={32} />
						</div>
						<div>
							<h1 className="text-[#FFFFFFCC] font-bold text-xl">{name}</h1>
							<p className="flex text-[32px] h-10 gap-1 font-extrabold text-red-500">
								<span className="self-start text-[12px] mt-2 font-semibold">
									$
								</span>
								{price}
								<span className="self-end text-[12px] font-medium text-[#FFFFFFCC]">
									/month
								</span>
							</p>
						</div>
					</div>
					<div className="p-6">
						<ul className={`space-y-2`}>
							{features.map((feature, index) => (
								<div>
									<div className="list-item">
										<li
											key={index}
											className="list-disc text-[#ffffffcc] font-[500] capitalize whitespace-wrap sm:whitespace-nowrap">
											{feature.title}
										</li>
									</div>
									<ul className="pl-6 space-y-1 mt-1">
										{feature.peer.map((item: string, index: number) => (
											<li
												key={index}
												className="list-disc text-sm text-white/60">
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</ul>
					</div>
				</div>
				<button
					disabled={isCurrent}
					className={clsx(
						"capitalize mt-6 font-semibold w-full py-3  rounded-xl hover:bg-primary-red/[0.05] transition duration-300  text-red-600",
						isCurrent && "opacity-80 cursor-not-allowed",
						isPremium
							? "bg-gradient-to-r from-primary-red to-primary-yellow !text-white"
							: "border border-red-600"
					)}>
					{isCurrent ? "Your current package" : <span>{buttonTitle}</span>}
				</button>
			</div>
		</div>
	);
};

export default PackageCard;
