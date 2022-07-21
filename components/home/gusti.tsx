import { gsap, Linear } from "gsap";
import { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { isSmallScreen } from "pages";

const COLLABORATION_STYLE = {
  SLIDING_TEXT:
    "opacity-20 text-5xl md:text-7xl font-bold whitespace-nowrap transform-gpu",
  SECTION:
    "w-full relative select-none tall:py-36 py-48 section-container flex flex-col snap-y snap-mandatory",
  TITLE: "mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center",
};

const GustiSection = () => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const initTextGradientAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
    });
  };

  const initSlidingTextAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ) => {
    const slidingTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    slidingTl
      .to(targetSection.current.querySelector(".ui-left"), {
        xPercent: isSmallScreen() ? -500 : -150,
      })
      .from(
        targetSection.current.querySelector(".ui-right"),
        { xPercent: isSmallScreen() ? -500 : -150 },
        "<"
      );

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0,
      animation: slidingTl,
    });
  };

  useEffect(() => {
    const textBgAnimation = initTextGradientAnimation(targetSection);
    const slidingAnimation = initSlidingTextAnimation(targetSection);

    return () => {
      textBgAnimation.kill();
      slidingAnimation.kill();
    };
  }, [quoteRef, targetSection]);

  const renderSlidingText = (text: string, layoutClasses: string) => (
    <p className={`${layoutClasses} ${COLLABORATION_STYLE.SLIDING_TEXT}`}>
      {Array(5)
        .fill(text)
        .reduce((str, el) => str.concat(el), "")}
    </p>
  );

  const renderTitle = () => (
    <div className="text-black">
      <h1 ref={quoteRef} className={COLLABORATION_STYLE.TITLE}>
        Iti este <span className="text-strong font-bold text-red-300">foooooaaaame?</span>
        ?
      </h1>
    </div>
  );


  //TODO: Play with the design and colors

  return (
    <section className={COLLABORATION_STYLE.SECTION} ref={targetSection}>
      {renderSlidingText(
        "Vrei sa gusti? ",
        "ui-left"
      )}

      {renderTitle()}

      {renderSlidingText(
        " Mai, tu vrei sa gusti ?  Mai, tu vrei sa gusti ?   Mai, tu vrei sa gusti ?  ",
        "mt-6 md:mt-8 ui-right"
      )}
    </section>
  );
};

export default GustiSection;
