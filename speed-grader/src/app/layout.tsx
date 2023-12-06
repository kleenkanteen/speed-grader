import "@/styles/globals.css";
import { ClerkProvider, SignedIn, SignIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{
      elements: {
        footer: "hidden",
      },
    }}>
    <html lang="en">
      <body className={`font-sans min-h-screen flex flex-col h-screen overflow-hidden ${inter.variable}`}>        
        <div className="min-h-screen flex flex-col">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
            </div>
            <div className="navbar-center">
              <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end">
              <SignedIn> <UserButton /> </SignedIn>
              <SignedOut>
                <Link className="btn" href="/sign-in" > Sign in </Link>
              </SignedOut>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
