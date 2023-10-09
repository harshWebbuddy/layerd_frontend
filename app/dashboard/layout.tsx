import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="min-h-screen bg-[#212327] ">
			<div className="flex items-start">
				<Sidebar />
				<div className="flex-1 w-full h-screen flex flex-col justify-start relative">
					<Navigation />
					{children}
				</div>
			</div>
		</main>
	);
}
