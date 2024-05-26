"use client"

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useState } from "react";

const navigationItems = [

    { name: 'Introduction', href: '/documentation/introduction', current: true }
]

export default function Navigation() {

    const [navigation, setNavigation] = useState(navigationItems);

    const handleItemClick = (itemName: string) => {

        const newNavigation = navigation.map(item => ({

            ...item,
            current: item.name === itemName
        }));
        setNavigation(newNavigation);
    }

    return (

        <nav className="hidden lg:flex w-[20%] border-r pr-6 pt-6 flex-col" aria-label="Sidebar">

            <ul role="list" className="-mx-2 space-y-2">

                {navigation.map((item) => (

                    <li key={item.name}>

                        <Link href={item.href} className={item.current ? buttonVariants({ variant: 'outline', justify: 'start', className: 'w-full' }) : buttonVariants({ variant: 'ghost', justify: 'start', className: 'w-full' })} onClick={() => handleItemClick(item.name)}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
