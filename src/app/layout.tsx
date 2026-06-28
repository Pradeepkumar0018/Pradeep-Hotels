import Aoscompo from "@/utils/aos";
import { ThemeProvider } from "next-themes";
import { DM_Sans } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import { AppContextProvider } from "../context-api/FoodContext";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import ScrollToTop from "./components/scroll-to-top";
import "./globals.css";
const dmsans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmsans.className}`}>
      <AppContextProvider>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Aoscompo>
            <Header />
            <NextTopLoader />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
