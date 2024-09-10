import PageLayout from "./components/PageLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="auth-pages">
      <PageLayout>{children}</PageLayout>
    </main>
  );
}
