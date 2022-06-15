import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import Button, { ButtonTypes } from "../common/button";
import HeroImage from "./hero-image";
import Rive, { Layout, Fit, Alignment, useRive } from '@rive-app/react-canvas';
import PngImage from "./png-image";


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


// Hero Section
const HeroSection = React.memo(() => {
  const typedSpanElement: MutableRefObject<HTMLSpanElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  // Typed Animation
  const initTypeAnimation = (
    typedSpanElement: MutableRefObject<HTMLSpanElement>
  ): Typed => {
    return new Typed(typedSpanElement.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    });
  };

  // Animation reveal for GSAP
  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): GSAPTimeline => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

    return revealTl;
  };


  // Hive React Component 
  const { rive, RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    })
  });


  // Use effect : 
  useEffect(() => {
    const typed = initTypeAnimation(typedSpanElement);
    initRevealAnimation(targetSection);
    gsap.to(svgRotate, { rotation: "+360", color: "#8c0", duration: 5 });
    return typed.destroy;
  }, [typedSpanElement, targetSection]);


  // Background Render

  const renderBackgroundImage = (): React.ReactNode => (
    <div className={HERO_STYLES.BG_WRAPPER} style={{ maxHeight: "650px" }} id="svgRotate">
      {/* <RiveComponent/> */}
      {/* <PngImage /> */}
      <HeroImage />
    </div>
  );


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

  // Hero content
  const renderHeroContent = (): React.ReactNode => (
    <div className={HERO_STYLES.CONTENT}>
      <div className="md:mb-5 mb-2 text-black">
        <p className="text-4xl seq">BRYO appetit 👋🏻</p>
        <h1 className="text-3xl seq">Pizza buna, facuta de nepalezi</h1>
      </div>
      <p className="mb-5 text-black">
        <span className={HERO_STYLES.TYPED_SPAN} ref={typedSpanElement}></span>
      </p>
      <div className="flex seq mb-5 text-black">{renderSocialLinks()}</div>
      <div className="flex seq text-black">
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
    </div>
  );

  // Menu link
  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className={HERO_STYLES.SECTION}
      id={heroSectionRef}
      ref={targetSection}
      style={{ opacity: 0 }}
    >
      {renderHeroContent()}
      {renderBackgroundImage()}
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;



