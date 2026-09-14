import "./globals.css";
import Footer from "@/components/layout/Footer";
import SiteLoader from "@/components/layout/SiteLoader";

export const metadata = {
  title: {
    default: "BBGL | One Vision. Many Enterprises. One Excellent Standard.",
    template: "%s | BBGL",
  },
  description:
    "Baki Business Group Limited is a growing Nigerian business group with interests across multiple sectors through its subsidiaries and future enterprises.",
  keywords: [
    "BBGL",
    "Baki Business Group Limited",
    "Baki Business Group",
    "Nigerian business group",
    "Baki Oil & Gas",
    "TLV Pharmaceuticals",
    "BBGL Beverage Company",
    "Car Batteries",
  ],
  authors: [{ name: "Baki Business Group Limited" }],
  creator: "Baki Business Group Limited",
  publisher: "Baki Business Group Limited",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <SiteLoader />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}