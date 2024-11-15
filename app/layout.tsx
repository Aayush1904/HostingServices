'use client'
import { PrivyProvider } from '@privy-io/react-auth'
import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PrivyProvider
          appId="cm39mqx6301j3e3k0cdcqjjsz"
          config={{
            appearance: {
              theme: "dark",
              accentColor: "#676FFF",
              logo: "https://your-logo-url",
            },

            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
          }}
        >
          <Navbar />
          {children}
        </PrivyProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
