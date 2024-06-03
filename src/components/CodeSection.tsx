"use client"

import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { useState } from 'react';

type Props = {
    code: string;
}

export default function CodeSection({ code }: Props) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset icon after 2 seconds
    }

    return (
        <pre className="bg-accent flex items-center text-sm rounded-lg px-4 py-2 border whitespace-pre-wrap">
            <code className="language-bash flex-1">
                {code}
            </code>
            <Button variant="ghost" size="icon" className="hover:border" onClick={handleCopy}>
                {isCopied ? <CheckIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
            </Button>
        </pre>
    );
}
