import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "AIConvert | Convert One Language to Another on Breeze",
  description: "AI based CodeLanguage Converter.Convert One Language to Another on Breeze",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="absolute inset-0 -z-10 h-[100vh] w-full bg-background bg-[linear-gradient(to_right,#8080800a_2px,transparent_2px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:40px_40px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-10 dark:opacity-25 blur-[100px]"></div></div>
        <div className="h-[200px] w-[200px] bg-emerald-100 absolute -z-10 blur-[80px] rounded-full" />
        <div className="h-[200px] w-[200px] bg-emerald-100 absolute -z-10 blur-[80px] rounded-full right-0 bottom-0" />
        <div className="h-[300px] w-[300px] bg-orange-100 absolute -z-10 blur-[100px] rounded-full left-[50%] top-[30%] -translate-x-1/2 -translate-y-1/2" />
        {children}
      </body>
    </html>
  );
}
