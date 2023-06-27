import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import VoteTicker from "./VoteTicker";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <VoteTicker />
      <Header />
      <main className="overflow-clip">{children}</main>
      <Footer />
    </div>
  );
}
