import Link from "next/link";

export default function Page() {

    return (

        <div className="flex-1 p-6">

            <h1 className="text-4xl">Introduction</h1>

            <p className="mt-4">This documentation provides all the necessary tools to get started with a Next.js project.</p>

            <h2 className="text-2xl mt-5">Requirements</h2>

            <p className="mt-4">Node.js must be installed on your system to follow the instructions and utilize the features described in this documentation. You can download Node.js <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="underline">here</Link>.</p>

            <p className="mt-2">For package management, we will use <Link href="https://pnpm.io/" target="_blank" rel="noopener noreferrer" className="underline">pnpm</Link>, which is an efficient alternative to npm with better performance in terms of disk space management and installation speed.</p>

            <h2 className="text-2xl mt-5">Getting started</h2>
            <code>pnpm create next-app@latest<br></br></code>
            <code>cd </code>
        </div>
    );
}

