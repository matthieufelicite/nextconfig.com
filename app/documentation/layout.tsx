import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { PropsWithChildren } from "react";

export default function DocumentationLayout({ children }: PropsWithChildren) {

    return (

        <>
            <Header documentation={true} />

            <section className="flex mx-auto flex max-w-7xl justify-between lg:px-8 h-[calc(100vh-85px)]">

                <Navigation />
                {children}
            </section>
        </>
    );
}