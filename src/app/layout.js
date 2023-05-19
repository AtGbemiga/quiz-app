"use client";
import { Provider } from "react-redux";
import { store } from "@/features/store/store";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

/*export const metadata = {
  title: "Quiz app",
  description: "Quiz app",
};*/

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
