import type { Metadata } from "next";
import { Providers } from "./Providers";
import '../styles/globals.css';
import '../styles/reset.css';

export const metadata: Metadata = {
  title: "Malibu lounge bar",
  description: "this is Malibu lounge bar",
  icons: {
    icon: "/malibu-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
          <Providers>
            {children}
            </Providers>
      </body>
    </html>
  );
}
