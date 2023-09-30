"use client"
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			<motion.main
				key={pathname}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{
					duration: 1,
				}}
				variants={{
					initialState: {
						opacity: 0,
					},
					animateState: {
						opacity: 1,
					},
					exitState: {},
				}}>
				{children}
			</motion.main>
		</AnimatePresence>
	);
}
