"use client";
import "@/app/globals.css";
import '@/styles/header.css';
import '@/styles/header2.css';
import '@/styles/homepage.css';
import '@/styles/auth.css';
import '@/styles/sideBar.css';
import '@/styles/view.css';
import '@/styles/welcome.css';
import '@/styles/category.css';
import '@/styles/upcoming.css';
import '@/styles/footer.css';
import '@/styles/games.css';
import '@/styles/asideCategory.css';
import { Provider } from "react-redux";
import store from "@/store/store";
import MetaData from "../components/metaData";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <MetaData/>
        <Provider store={store}>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
