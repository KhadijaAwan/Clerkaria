import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clerkaria",
  description: "It is a nextjs application which uses clerk for the authentication purpose and the protected routes.",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  keywords: ["authenticate", "clerk", "clerk in nextjs", "next authentication"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/logo.jpeg",
          },
          variables: {
            colorPrimary: "#FD761C",
          },
        }}
      >
        <body className={inter.className}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
