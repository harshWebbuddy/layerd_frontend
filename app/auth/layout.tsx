import PageLayout from "./components/PageLayout";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<PageLayout>{children}</PageLayout>
		</main>
	);
}
