import "./globals.css";
import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";
import ClientLayout from "./client-layout"; // client wrapper
import CustomCursor from "./component/CustomCursor";
import { Providers } from "./utils/provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata = {
  title: "Circum Centric - Digital & Eco-Friendly Solutions",
  description: "One-stop digital & eco-friendly solutions for brands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black transition-colors duration-300">
        <Analytics />
        <SpeedInsights />
        <ClientLayout>
          <Navbar />
          <CustomCursor />
          <Providers>
            <main className="min-h-screen">{children}</main>
          </Providers>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
