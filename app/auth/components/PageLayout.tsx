"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<motion.main
			key={pathname}
			initial="initialState"
			animate="animateState"
			exit="exitState"
			transition={{
				duration: 1.5,
			}}
			variants={{
				initialState: {
					opacity: 0,
				},
				animateState: {
					opacity: 1,
				},
				exitState: {
					opacity: 0,
				},
			}}>
			<div className="bg-[url('/background-rectangle-c-auth.png')] bg-no-repeat bg-center bg-cover h-full min-h-screen w-full fixed inset-0 z-[-1]" />

			{children}
		</motion.main>
	);
}
