import Image from "next/image";
import SiteHeader from "@/components/site-header"
import Hero from "@/components/hero"
import Cards from "@/components/cards"
import Statement from "@/components/mission-statement"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Statement/>
      <Cards/>
      <Footer/>
    </main>
  );
}
