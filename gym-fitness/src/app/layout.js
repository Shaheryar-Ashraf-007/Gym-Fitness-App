import Navbar from "./components/navbar/page";
import "./globals.css";



export const metadata = {
  title: "Gym App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <div className="">
        {children}
        <Navbar/>

        </div>
        

      </body>
    </html>
  );
}
