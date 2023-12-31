import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { ToastContainer } from "@/components/toastify/Toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "This is a blog site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container max-w-[100vh]  md:max-w-[1366px] min-h-screen md:mx-auto md:my-0 py-0 px-2 md:px-[60px] flex flex-col justify-between overflow-hidden">
              <Navbar />
              {children}
              <Footer />
              <ToastContainer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
