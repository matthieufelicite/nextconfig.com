"use client"

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Hero() {

    const { theme, setTheme } = useTheme();

    return (

        <div className="relative isolate px-6 lg:px-8 h-[calc(100vh-85px)] flex items-center">

            <div className="mx-auto max-w-2xl flex items-center">

                <div className="text-center">

                    <h1 className="text-gradient text-4xl font-bold tracking-tight sm:text-6xl pb-1">

                        Everything you need to get started with Next.js
                    </h1>

                    <p className="mt-5 text-lg leading-8">

                        Explore comprehensive documentation and essential tools to launch, manage, and succeed in your projects with Next.js.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">

                        <Link href="/documentation/introduction" className={buttonVariants({ variant: 'default', size: 'lg' })}>Documentation</Link>

                        <Link href="https://github.com/matthieufelicite/nextconfig.com" target="_blank" className={buttonVariants({ variant: 'outline', size: 'lg' })}>

                            <Image src={theme === "dark" ? "/github-white.svg" : "/github.svg"} alt="github" width={20} height={20} className="mr-2" /> GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
