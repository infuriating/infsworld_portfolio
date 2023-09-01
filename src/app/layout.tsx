import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "infs.world",
  description: "infuriating's portfolio site",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
