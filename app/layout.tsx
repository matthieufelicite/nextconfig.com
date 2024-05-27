import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

	title: "nextconfig",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren) {

	return (

		<html className="h-full" lang="fr">

			<body className={inter.className + " h-full"}>

				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>

					{children}
				</ThemeProvider>
			</body>
		</html >
	);
}
