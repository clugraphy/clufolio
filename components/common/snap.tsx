import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from 'gsap'
import { useEffect } from "react";
import { MENULINKS } from "../../constants";
import Mask from 'public/images/circles-mask-whole.svg';
import styles from 'components/common/snap.module.scss'
import { snap } from "gsap-trial/src/all";


const SnapSection = () => {

    useEffect(() => {
        const $square = (".square");
        const blueSquare = document.querySelector("#blueDots")

        let animation = gsap.to("#blueDots", { duration: 3, scale: 2, ease: "back" });

        blueSquare.addEventListener("click", () => animation.restart)


    })


    const { ref: snapAttackRef } = MENULINKS[2];
    return (
        <>
            <section id={snapAttackRef} className="w-full relative tall:py-36 py-48 section-container flex flex-col snap-y snap-mandatory">
                <div className="h-48 w-48 bg-red-500"><Image
                    alt=""
                    className=""
                    src={Mask}
                    layout="fill"
                /></div>
                <div className={styles.square}></div>
                <div id="blueDots" className="h-48 w-48 bg-blue-500 clip-path-polygon"></div>
                {/* <Image
                    alt=""
                    className="hover:clip-path-circle"
                    layout="fill"
                    height={400}
                    width={400}
                    src="https://res.cloudinary.com/demo/image/upload/sample.jpg" />
                <Image
                    alt=""
                    className=""
                    src={Mask}
                    layout="fill"
                /> */}
                {/* <div className="aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> */}
            </section>
        </>
    );
};

export default SnapSection;