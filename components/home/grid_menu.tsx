import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import {
    MENULINKS,
} from "../../constants";
import VanillaTilt from "vanilla-tilt";

const GridMenuSection = () => {
    const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
    const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
    const tilt: MutableRefObject<HTMLDivElement> = useRef(null);
    const tilt2: MutableRefObject<HTMLDivElement> = useRef(null);
    const tilt3: MutableRefObject<HTMLDivElement> = useRef(null);
    const tilt4: MutableRefObject<HTMLDivElement> = useRef(null);
    const tilt5: MutableRefObject<HTMLDivElement> = useRef(null);
    const tilt6: MutableRefObject<HTMLDivElement> = useRef(null);
    const tilt7: MutableRefObject<HTMLDivElement> = useRef(null);
    const tilt8: MutableRefObject<HTMLDivElement> = useRef(null);


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

    //Use effect section

    useEffect(() => {
        const options = {
            scale: 1.1,
            speed: 1000,
            max: 25,
            glare: true,

        };


        VanillaTilt.init(tilt.current, options);
        VanillaTilt.init(tilt2.current, options);
        VanillaTilt.init(tilt3.current, options);
        VanillaTilt.init(tilt4.current, options);
        VanillaTilt.init(tilt5.current, options);
        VanillaTilt.init(tilt6.current, options);
        VanillaTilt.init(tilt7.current, options);
        VanillaTilt.init(tilt8.current, options);


    });

    const renderCards = (): React.ReactNode => (
        <>
            <div className="container mx-auto px-4 py-5 ">
                <h1 className="text-3xl font-bold text-gray-800 mb-5">Meniu</h1>
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div ref={tilt} className="rounded-lg relattive overflow-hidden shadow-lg transition ease-linear duration-500 hover:bg-yellow-400  ">
                        <Image
                            src="/images/IMG_6139.jpg"
                            alt=""
                            layout="responsive"
                            width={400}
                            height={200}
                            objectFit="cover"
                        />

                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Breakfast</div>
                            <p className="text-gray-700 text-base">
                                Intre orele 10:00-12:00
                            </p>
                        </div>
                    </div>
                    <div ref={tilt2} className="rounded-lg overflow-hidden shadow-lg transition ease-linear duration-500 hover:bg-yellow-400">
                        <Image
                            src="/images/IMG_6139.jpg"
                            alt=""
                            layout="responsive"
                            width={400}
                            height={200}
                            objectFit="cover"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Salad</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>

                    </div>
                    <div ref={tilt3} className="rounded-lg overflow-hidden shadow-lg transition ease-linear duration-500 hover:bg-yellow-400">
                        <Image
                            src="/images/IMG_6139.jpg"
                            alt=""
                            layout="responsive"
                            width={400}
                            height={200}
                            objectFit="cover"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Our Dish</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>

                    </div>
                    <div ref={tilt4} className="rounded-lg overflow-hidden shadow-lg bg-green-300 transition ease-linear duration-500 hover:bg-yellow-400">
                        <Image
                            src="/images/IMG_6139.jpg"
                            layout="responsive"
                            alt=""
                            width={400}
                            height={200}
                            objectFit="cover"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Risotto</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>

                    </div>
                    <div ref={tilt5} className="rounded-lg overflow-hidden shadow-lg ">

                        <Image
                            src="/images/IMG_6139.jpg"
                            layout="responsive"
                            alt=""
                            width={400}
                            height={200}
                            objectFit="cover"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Pasta by BRYO</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>

                    </div>
                    <div ref={tilt6} className="rounded-lg overflow-hidden shadow-lg transition ease-linear duration-500 hover:bg-yellow-400">
                        <Image
                            src="/images/IMG_6139.jpg"
                            layout="responsive"
                            width={400}
                            alt=""
                            height={200}
                            objectFit="cover"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Clasic Pizza</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>

                    </div>
                    <div ref={tilt7} className="rounded-lg overflow-hidden shadow-lg transition ease-linear duration-500 hover:bg-yellow-400">
                        <Image
                            src="/images/IMG_6139.jpg"
                            layout="responsive"
                            alt=""
                            width={400}
                            height={200}
                            objectFit="cover"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Pizza by BRYO</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>

                    </div>
                    <div ref={tilt8} className="rounded-lg overflow-hidden shadow-lg transition ease-linear duration-500 hover:bg-yellow-400">
                        <Image
                            className="max-w-full h-auto"
                            src="/images/IMG_6139.jpg"
                            layout="responsive"
                            alt=""
                            width={400}
                            height={200}
                            objectFit="cover"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Desert</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

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
                    <div className="relative max-h-full border-8 w-1/2 lg:w-1/3 bg-red-300 ">
                        <a className="pin absolute mx-auto">4</a>
                    </div>
                    <div className="relative h-auto border-8 w-1/2 lg:w-1/3 bg-red-400">
                        <a className="pin absolute mx-auto">5</a>
                    </div>
                    <div className="relative h-auto border-8 w-full m-4 lg:w-1/3 bg-red-500">
                        <a className="pin absolute mx-auto">6</a>
                    </div>
                </div>
            </div>

        </>
    );



    return (
        <section className="w-full flex flex-col md:items-center py-8 min-h-screen relative mb-24"
            id={MENULINKS[2].ref}
            ref={targetSection}
        >
            {renderCards()}
        </section>
    );
};

export default GridMenuSection;
