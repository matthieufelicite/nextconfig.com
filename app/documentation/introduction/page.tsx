import Link from "next/link";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

export default function Page() {

    return (

        <div className="flex-1 p-6">

            <p className="text-base font-semibold leading-7 text-gradient">Introduction</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Getting started with Next.js</h1>

            <p className="mt-4">This documentation provides all the necessary tools to get started with a Next.js project.</p>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">Requirements</h2>

            <p className="mt-4">Node.js must be installed on your system to follow the instructions and utilize the features described in this documentation. You can download Node.js <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="underline">here</Link>.</p>

            <p className="mt-2">For package management, we will use <Link href="https://pnpm.io/" target="_blank" rel="noopener noreferrer" className="underline">pnpm</Link>, which is an efficient alternative to npm with better performance in terms of disk space management and installation speed.</p>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">Getting started</h2>

            <pre className="flex items-center mt-2 bg-secondary text-background p-2 w-full rounded">
                <code className="text-sm bg-secondary text-background p-2 w-full rounded">pnpm create next-app@latest</code>

                <Button variant="ghost" size="icon">

                    <ClipboardIcon className="w-4 h-4" />
                </Button>
            </pre>

            <pre className="flex items-center mt-2 bg-secondary text-background p-2 w-full rounded">
                <code className="text-sm bg-secondary text-background p-2 w-full rounded">cd ./name</code>

                <Button variant="ghost" size="icon">

                    <ClipboardIcon className="w-4 h-4" />
                </Button>
            </pre>

        </div>
    );
}

