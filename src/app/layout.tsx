import type { Metadata } from "next";
import { Chivo_Mono } from "next/font/google"; // Import the fonts
import "./globals.css";
import Sidebar from "./Components/Sidebar";
import MaterialsPage from "./MaterialsPage";

// Load Chivo Mono font
const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono", 
  subsets: ["latin"],         
  weight: "400",               
});

export const metadata: Metadata = {};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            :root {
              --font-chivo-mono: ${chivoMono.style.fontFamily};
            }
          `}
        </style>
      </head>
      <body className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col p-6">
          {/* Top Section with Search Bar & Button */}

          {/* Main Content Section */}
          <div className="flex flex-col space-y-6">
            <MaterialsPage />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
