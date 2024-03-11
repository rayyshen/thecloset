import Link from "next/link"

export default function Hero() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-4 md:py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 text-[#404041]">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The Closet of the Greater Herndon Area</h1>
                    <h1 className="max-w-2xl mb-4 text-xl font-bold tracking-tight leading-none md:text-2xl xl:text-2xl italic dark:text-white text-[#C9732A]">Impacting lives through our non-profit thrift shop!</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">A faith-based volunteer-driven organization impacting lives through its non-profit thrift shop</p>
                </div>
                <div className="flex md:mt-10 lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="/store.jpg" alt="Store Front" className="rounded-lg md:max-h-96"/>
                </div>
            </div>
        </section>
    )
}

