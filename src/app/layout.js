import dynamic from "next/dynamic";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import ThemeProvider from "@/context/ThemeContext";

import { getServerSession } from "next-auth";
// import AuthProvider from "@/providers/AuthProvider";

// Sử dụng dynamic import cho các component không cần server-side rendering

import SessionProvider from "@/providers/SessionProvider";
import { ThemeContextProvider } from "@/context/ThemeContext";

const Sidebar = dynamic(() => import("@/components/sidebar/Sidebar"), {
  ssr: false,
});

const Cursor = dynamic(() => import("@/components/cursor/Cursor"), {
  ssr: false,
});

const ScrollUp = dynamic(() => import("@/components/scrollUp/ScrollUp"), {
  ssr: false,
});

const ScrollProgress = dynamic(
  () => import("@/components/scrollprogress/ScrollProgress"),
  {
    ssr: false,
  }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeContextProvider>
            {" "}
            {/* <ThemeProvider> */}{" "}
            <div className="container">
              <Cursor />
              <Navbar />
              <ScrollProgress />
              <Sidebar />
              <div className="wrapper"> {children} </div> <Footer />
              <ScrollUp />
            </div>{" "}
            {/* </ThemeProvider> */}{" "}
          </ThemeContextProvider>{" "}
        </SessionProvider>{" "}
      </body>{" "}
    </html>
  );
}
