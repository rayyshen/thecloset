import Image from "next/image";
import SiteHeader from "@/components/site-header"
import Hero from "@/components/hero"
import Cards from "@/components/cards"

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <div className="bg-white py-2 md:py-10">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="hidden md:flex h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img src="/about.jpg" loading="lazy" alt="Picture of volunteer" className="h-full w-full object-cover object-center" />
              </div>
            </div>

            <div className="md:pt-8">
              <p className="text-center font-bold text-[#d3ba81] md:text-left">Who we are</p>

              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Our mission</h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                The Closet Of The Greater Herndon Area Incorporated is a nonprofit thrift shop in the heart of historic downtown Herndon, Virginia. Founded in 1974 by a handful of churches to assist low-income families by selling used clothing at nominal prices, The Closet’s mission has expanded to become a significant resource for the greater Herndon area.
                <br/>
                We continue to be a source of low-cost clothing and household necessities for families and individuals on a tight budget.  We also give away clothing at no cost to truly needy individuals.  Profits from The Closet go to support local community service organizations as well as post-secondary education scholarships for students from local high schools. Items we are unable to sell are donated to needy communities in the western part of the state.
                <br/>
                The Closet has become a favorite with a wide range of shoppers, from those needing essential clothing items and household goods at bargain prices, to collectors and antiques buffs who check The Closet’s shelves for unusual books, plates, and collectibles at a fraction of retail prices. On shopping days, eager shoppers often begin lining up outside before the store opens. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cards/>
    </main>
  );
}
