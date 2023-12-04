import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import VoteTicker from "./VoteTicker";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <VoteTicker />
      <Header />
      <main className="overflow-clip pb-20">{children}</main>
      <Footer />
    </>
  );
}
