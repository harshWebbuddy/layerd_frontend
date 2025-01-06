  "use client";

  import Authenticated from "@/providers/Authenticated";
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
          <div className="overflow-y-auto h-screen z-20">
            <Sidebar />
          </div>
          <Authenticated>
            <div className="flex-1 w-full h-screen max-h-screen overflow-y-auto flex flex-col justify-start relative sm:pl-8">
              <Navigation />
              {children}
            </div>
          </Authenticated>
        </div>
      </main>
    );
  }
