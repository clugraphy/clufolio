import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import Image from "next/image";
import Button, { ButtonTypes } from "./button";

// TODO: Make a good looking footer.

const Footer = () => {
  const renderSocialIcons = (): React.ReactNode => {
    return Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className="link hover:opacity-80 duration-300 md:px-2 px-1"
        rel="noreferrer"
        target="_blank"
      >
        <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
      </a>
    ));
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center">
        Feel free to connect on social media.
      </h1>
      <div className="flex mt-8">{renderSocialIcons()}</div>
      <div className="flex mt-8">
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
          type={ButtonTypes.WHITE}
          name="Let's Talk"
          href={`mailto: ${EMAIL}`}
        ></Button>
      </div>
      <p className="text-center text-sm sm:text-base mt-8">
        Designed and Developed with ❤️ by C Everything Studio
      </p>
    </>
  );

  const { ref: footerRef } = MENULINKS[3];

  return (
    <footer className="w-full relative select-none bg-cover" id={footerRef}>
      <Image
        src="/footer-curve.svg"
        alt="Footer"
        className="relative w-full"
        loading="lazy"
        height={640}
        width={1920}
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-24">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
