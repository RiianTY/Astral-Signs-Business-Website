import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-6">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 mt-16">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Astral Signs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
