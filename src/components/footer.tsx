import { Instagram, Facebook } from "lucide-react"

export default function Footer() {
    return (
        <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
            <div className="bg-[#D9BF75] py-6 mt-10 max-w-full">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                        <div className="mb-3 text-center md:mb-0 md:text-left">
                            <span className="font-bold uppercase tracking-widest text-[#404042]">Newsletter</span>
                            <p className="text-[#404042]">Subscribe to our newsletter</p>
                        </div>

                        <form className="flex w-full gap-2 md:max-w-md">
                            <input placeholder="Email" className="w-full flex-1 rounded border border-[#D9BF75  ] bg-[#E7E7E9] px-3 py-2 text-[#404042] placeholder-[#E7E7E9] outline-none ring-[#CFA62A] transition duration-100 focus:ring" />

                            <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-[#C9732A] outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-[#CFA62A] md:text-base">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="flex flex-col items-center border-t pt-6">
                    <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                        <a href="/about" className="text-[#3E3E40] transition duration-100 hover:text-[#C9732A] active:text-[#C9732A]">About</a>
                        <a href="/donate" className="text-[#3E3E40] transition duration-100 hover:text-[#C9732A] active:text-[#C9732A]">Donate</a>
                        <a href="/volunteer" className="text-[#3E3E40] transition duration-100 hover:text-[#C9732A] active:text-[#C9732A]">Volunteer</a>
                        <a href="/jobs" className="text-[#3E3E40] transition duration-100 hover:text-[#C9732A] active:text-[#C9732A]">Jobs</a>
                        <a href="/contact" className="text-[#3E3E40] transition duration-100 hover:text-[#C9732A] active:text-[#C9732A]">Contact</a>
                    </nav>

                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/theclosetofgreaterherndonarea/" target="_blank" className="text-gray-400 transition duration-100 hover:text-[#3E3E40] active:text-[#C9732A]">
                            <Instagram />
                        </a>

                        <a href="https://www.facebook.com/TheClosetofGreaterHerndonArea/" target="_blank" className="text-gray-400 transition duration-100 hover:text-[#3E3E40] active:text-[#C9732A]">
                            <Facebook />
                        </a>
                    </div>

                </div>

                <div className="py-8 text-center text-sm text-gray-400">© 2024 - The Closet. All rights reserved.</div>
            </footer>
        </div>
    )
}