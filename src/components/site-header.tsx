import { Info, HandHelping, Users, Store, Briefcase, PhoneCall } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { PropsWithChildren } from "react";
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function SiteHeader({ children }: PropsWithChildren) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center">
                <div className="mr-4 md:flex">
                    <a href="/" className="mr-6 flex items-center space-x-2">
                        <Image
                        src="/head.png"
                        height={0}
                        width={0}
                        alt="Logo"
                        sizes="70vw"
                        style={{ width: '100%', height: 'auto' }}
                        />

                    </a>
                    <nav className="flex items-center gap-6 text-sm"></nav>
                </div>
                <div className="margin-auto"></div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Info className="mr-2 h-4 w-4"/>
                                <span>Who We Are</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <HandHelping className="mr-2 h-4 w-4"/>
                                <span>How to Donate Goods</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Users className="mr-2 h-4 w-4"/>
                                <span>Volunteering</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Store className="mr-2 h-4 w-4"/>
                                <span>Treasures at the Closet</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Briefcase className="mr-2 h-4 w-4"/>
                                <span>Job Openings</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <PhoneCall className="mr-2 h-4 w-4"/>
                                <span>Contact</span>
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

        </header>
    );
}