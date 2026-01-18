import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Sector 104 | Party Experiences Across Canada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}