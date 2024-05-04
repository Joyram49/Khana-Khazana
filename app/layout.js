import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Khana-Khazana",
  description:
    "Khana Khazana was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table. Simply put, we’re here to bring you a sandwich experience you can feel good about.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={poppins.variable}>
      <body className='font-poppins'>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
