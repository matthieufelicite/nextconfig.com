"use client"

import { SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button, buttonVariants } from './ui/button';
import { Dialog, DialogPanel } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from "next-themes"
import { useState } from 'react';

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const { theme, setTheme } = useTheme();

    return (

        <header className="bg-background border-b">

            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

                <div className="flex items-center gap-x-12">

                    <Link href="/" className="-m-1.5 p-1.5">

                        <span className="sr-only">nextconfig</span>


                    </Link>
                </div>

                <div className="flex gap-6">

                    <Link href="https://github.com/matthieufelicite/nextconfig.com" target="_blank" className={buttonVariants({ variant: 'ghost', size: 'icon' })}>

                        <Image src={theme === "dark" ? "/github-white.svg" : "/github.svg"} alt="github" width={24} height={24} />
                    </Link>

                    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>

                        <SunIcon className="h-6 w-6" />
                    </Button>

                    <Button variant="ghost" size="icon" className='flex lg:hidden' onClick={() => setMobileMenuOpen(true)}>

                        <Bars3Icon className="h-6 w-6" />
                    </Button>
                </div>
            </nav>

            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>

                <div className="fixed inset-0 z-50" />

                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                    <div className="flex items-center justify-between">

                        <a href="#" className="-m-1.5 p-1.5">

                            <span className="sr-only"></span>
                        </a>

                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>

                            <XMarkIcon className="h-6 w-6" />
                        </Button>
                    </div>

                    <div className="mt-6 flow-root">

                        <div className="-my-6 divide-y divide-gray-500/10">

                            <div className="py-6">

                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
