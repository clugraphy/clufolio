import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import alphacard from "../../public/projects/alpha.jpg"
import {
    MENULINKS,
} from "../../constants";

const GridMenuSection = () => {
    const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
    const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

    // Animation section

    // const initQuoteAnimation = (
    //     quoteRef: MutableRefObject<HTMLDivElement>,
    //     targetSection: MutableRefObject<HTMLDivElement>
    //   ): ScrollTrigger => {
    //     const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    //     timeline
    //       .from(quoteRef.current, { opacity: 0, duration: 2 })
    //       .to(quoteRef.current.querySelector(".text-strong"), {
    //         backgroundPositionX: "100%",
    //         duration: 1,
    //       });

    //     return ScrollTrigger.create({
    //       trigger: targetSection.current,
    //       start: "center bottom",
    //       end: "center center",
    //       scrub: 0,
    //       animation: timeline,
    //     });
    //   };

    // Use effect section

    //   useEffect(() => {
    //     const quoteAnimationRef = initQuoteAnimation(quoteRef, targetSection);

    //     return quoteAnimationRef.kill;
    //   }, [quoteRef, targetSection]);

    const renderGrid = (): React.ReactNode => (
        <>
            <div className=" h-screen flex w-full md:w md:mx-auto ">

                <div className="md:pl-3 md:pr-0 pt-8 pb-0 md:pb-6 px-2 w-full flex flex-wrap bg-grey-light">
                    <div className="relative h-auto border-8 border-yellow-300 w-1/2 bg-red-50">
                        <a className="pin absolute mx-auto">1</a>
                        <h1 className="text-4xl p-4">This is the true</h1>
                        <h2 className="text-2xl p-4">38 RON</h2>
                    </div>
                    <div className="relative h-auto border-8 w-1/2 bg-red-100">
                        <a className="pin absolute mx-auto">2</a>
                    </div>
                    <div className="relative h-auto border-8 w-full bg-red-200">
                        <a className="pin absolute mx-auto">3</a>
                    </div>
                    <div className="relative max-h-full border-8 w-1/2 lg:w-1/3 bg-red-300">
                        <a className="pin absolute mx-auto">4</a>
                    </div>
                    <div className="relative h-auto border-8 w-1/2 lg:w-1/3 bg-red-400">
                        <a className="pin absolute mx-auto">5</a>
                    </div>
                    <div className="relative h-auto border-8 w-full lg:w-1/3 bg-red-500">
                        <a className="pin absolute mx-auto">6</a>
                    </div>
                </div>
            </div>

        </>
    );

    const renderGridContent = (): React.ReactNode => (
        <h1>RENDER GRID CONTENT</h1>
    );

    return (
        <section className="w-full flex md:items-center py-8 section-container min-h-screen relative mb-24"
            id={MENULINKS[2].ref}
            ref={targetSection}
        >
            {renderGrid()}
        </section>
    );
};

export default GridMenuSection;
