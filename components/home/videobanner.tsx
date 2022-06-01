import { SOCIAL_LINKS } from "constants";
import { EMAIL } from "constants";

import React, { MutableRefObject, useEffect, useRef } from "react";
import Button, { ButtonTypes } from "../common/button";
import Image from "next/image";
import RenderResult from "next/dist/server/render-result";

const VideoBanner = () => {


    // Tailwind CSS Styles 
    const HERO_STYLES = {
        SECTION:
            "w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
        CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
        SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
        BG_CLU: "w-full transform-gpu absolute flex",
        BG_WRAPPER:
            "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 transform-gpu flex items-end",
        TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
    };

    // Social links Render
    const renderSocialLinks = (): React.ReactNode =>
        Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
            <a
                href={SOCIAL_LINKS[el]}
                key={el}
                className={HERO_STYLES.SOCIAL_LINK}
                rel="noreferrer"
                target="_blank"
            >
                <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
            </a>
        ));

    return (
        <><div className="flex mx-auto">
            <div
                className="absolute z-30 p-48 top-48 text-3xl lg:text-6xl text-gray-300 bg-green-100 bg-opacity-50 rounded-xl"
            >
                BRYO apetitte
                <div className="flex seq p-4 z-10 text-white">
                    <Button
                        classes="mr-3"
                        type={ButtonTypes.OUTLINE}
                        name="Menu"
                        target="_blank"
                        rel="noreferrer"
                        href="/bryo_food_menu_2022.pdf"
                    ></Button>
                    <Button
                        classes="ml-3"
                        type={ButtonTypes.OUTLINE}
                        name="Let's Talk"
                        href={`mailto: ${EMAIL}`}
                    ></Button>
                </div>
                {renderSocialLinks()}
            </div>
            <video
                autoPlay
                loop
                muted
                className="relative z-10 h-full w-full "
            >
                <source
                    src="palm_l.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

        </div>

        </>
    )

}

export default VideoBanner;