import Navigation from "@/components/Navigation";
import { PropsWithChildren } from "react";

export default function DocumentationLayout({ children }: PropsWithChildren) {

    return (

        <section className="flex mx-auto flex max-w-7xl justify-between lg:px-8">

            <Navigation />
            {children}
        </section>
    );
}