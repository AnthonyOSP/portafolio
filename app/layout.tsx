import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./ui/sidebar/sidebar";
import Navbar from "./ui/navbar/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio ASP",
  description: "Generado con NextJS 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Sidebar />
          <div className="main-content lg:relative lg:w-max lg:m-auto xl:min-w-[75%] xl:w-9/12 xl:m-0">
            <Navbar />
            <div className="">{children}</div>
          </div>

        </main>

      </body>
    </html>
  );
}
