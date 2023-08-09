import { Montserrat } from "next/font/google";

const mon = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Favorite Page",
  description: "Here you get to see your favorite stuffs",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-w-[480px] max-h-[828px]">
      <body className={mon.className}>{children}</body>
    </html>
  );
}
