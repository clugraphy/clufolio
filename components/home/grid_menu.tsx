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
        <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                <div className="
    group
    inline-block pb-4 bg-gradient-to-tr from-purple-600 to-orange-400 text-white overflow-hidden rounded-2xl shadow
    hover:shadow-md
    transition
  ">
                    <figure className="max-h-64 aspect-square overflow-hidden">
                        {/* <img
                            className="w-full h-full object-cover transition group-hover:scale-125"
                            src="https://images.unsplash.com/photo-1649168916853-8bdb50116941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0OTQ0MzY5Nw&ixlib=rb-1.2.1&q=80&w=400"
                        /> */}
                        <Image
                            alt="Alpha card"
                            src={alphacard}
                            layout="responsive"
                            width={700}
                            height={475}
                        />
                    </figure>
                    <div className="p-4">
                        <h3 className="text-xl font-bold">Card Title</h3>
                        <p className="font-serif">Lorem ipsum dolor sit amet</p>
                    </div>
                    <footer className="flex gap-2 px-4">
                        <button className="text-blue-400 hover:text-red-400">
                            <i className="fa-solid fa-heart"></i>
                        </button>
                        <button className="text-blue-400 hover:text-red-400">
                            <i className="fa-solid fa-comment"></i>
                        </button>
                    </footer>
                </div>
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                {/* <!-- Column Content --> */}
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                {/* <!-- Column Content --> */}
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                {/* <!-- Column Content --> */}
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                {/* <!-- Column Content --> */}
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                {/* <!-- Column Content --> */}
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                {/* <!-- Column Content --> */}
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                {/* <!-- Column Content --> */}
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                {/* <!-- Column Content --> */}
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                {/* <!-- Column Content --> */}
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                {/* <!-- Column Content --> */}
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1 xl:w-1/3">
                {/* <!-- Column Content --> */}
            </div>

        </div>
    );

    return (
        <section className="w-full relative select-none"
            id={MENULINKS[2].ref}
            ref={targetSection}
        >
            {renderGrid()}
        </section>
    );
};

export default GridMenuSection;
