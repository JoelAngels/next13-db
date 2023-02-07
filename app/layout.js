import "./globals.css";
import { Montserrat } from "@next/font/google";
import { Poppins } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${montserrat.className} mx-32`}>
        <nav>
          <h1>LOGO</h1>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
            <li className="font-montserrat">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        {children} {/* About page, each individual page*/}
      </body>
    </html>
  );
}
