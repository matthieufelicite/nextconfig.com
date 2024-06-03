import Link from "next/link";
import CodeSection from "@/components/CodeSection";

export default function Page() {

    return (

        <div className="flex-1 p-6 overflow-scroll">

            <p className="text-base font-semibold leading-7 text-gradient">Introduction</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Getting started with Next.js</h1>

            <p className="mt-4">This documentation provides all the necessary tools to get started with a Next.js project.</p>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">Requirements</h2>

            <p className="mt-4">Node.js must be installed on your system to follow the instructions and utilize the features described in this documentation. You can download Node.js <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="underline">here</Link>.</p>

            <p className="mt-2">For package management, we will use <Link href="https://pnpm.io/" target="_blank" rel="noopener noreferrer" className="underline">pnpm</Link>, which is an efficient alternative to npm with better performance in terms of disk space management and installation speed.</p>

            <h2 className="my-5 text-2xl font-semibold tracking-tight sm:text-3xl">Getting started</h2>

            <p className="mt-2">This docomentation shows one possible organisation for your code, the one who is the most simple and easy to understand but you can also use another one if you want.</p>

            <div className="flex flex-col gap-4">

                <CodeSection code="pnpm create next-app@latest --typescript --app" />

                <p className="mt-2">After this command, you will have to choose the name of your project, and the project will initialise.</p>

                <CodeSection code="cd ./name" />

                <CodeSection code="pnpm dev" />

                <p className="mt-2">localhost:3000</p>
            </div>
        </div>
    );
}

