import type { Metadata } from "next";
import "@/styles/global.scss";
import ReactQueryProvider from "./providers";
import { ContextProvider } from "./ContextProvider";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ContextProvider>{children}</ContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
