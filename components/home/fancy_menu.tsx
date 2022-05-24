import { gsap, Linear } from "gsap";
import { Flip } from 'gsap/dist/Flip';
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Layout, Fit, Alignment, useRive } from '@rive-app/react-canvas';
import Image from "next/image";
import {
    MENULINKS,
} from "../../constants";



const FancyMenu = () => {
    const headerRef: MutableRefObject<HTMLDivElement> = useRef(null);
    const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

    // Tailwind CSS Styles
    const MENU_STYLE = {
        SECTION: "",
        CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
    };

    // Hive React Component 
    const { rive, RiveComponent } = useRive({
        src: 'rive/star.riv',
        autoplay: true,

        layout: new Layout({
            fit: Fit.Fill,
            alignment: Alignment.Center,


        })

    });

    // Animation reveal for GSAP
    const initRevealAnimation = (
        targetSection: MutableRefObject<HTMLDivElement>
    ): GSAPTimeline => {
        const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
        revealTl
            .to(headerRef.current, { opacity: 1, duration: 2 });



        return revealTl;
    };

    // Use effect

    useEffect(() => {
        gsap.to(headerRef.current, { rotation: "+360", color: "#8c0", duration: 5 });
    });


    const renderBackgroundImage = (): React.ReactNode => (
        <>

            <div >

                <h1 ref={headerRef} className="font-medium text-4xl md:text-5xl text-center">Here we are </h1>
            </div>

        </>

    );

    const renderContent = (): React.ReactNode => (
        <>
            <RiveComponent />
            <div className="bg-red-500 w-full flex md:items-center py-8 min-h-screen relative mb-24">

            </div>
        </>
    );

    // Menu link
    // const { ref: FancyMenuRef } = MENULINKS[4];

    // Return Function
    return (
        <section
            className={MENU_STYLE.SECTION}
            // id={FancyMenuRef}
            ref={targetSection}
            style={{ opacity: 1 }}
        >
            {renderBackgroundImage()}
            {renderContent()}
        </section>
    );
};


export default FancyMenu;