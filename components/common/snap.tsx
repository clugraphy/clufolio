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

        var animation = gsap.timeline();

        animation
            .to("#blueDots", { duration: 4, scale: 0.5, x: 1150 }, "+=1")
            .to("#greenDots", { duration: 2, scale: 2, x: 650 }, "<")
            .to(".square", { duration: 3, rotate: 360, scale: 2, x: 400 },)

        blueSquare.addEventListener("click", () => animation.restart)


    })


    const { ref: snapAttackRef } = MENULINKS[2];
    return (
        <>
            <section id={snapAttackRef} className="w-full relative tall:py-36 py-48 section-container flex flex-col snap-y snap-mandatory">

                {/* <div className="h-48 w-48 bg-red-500"><Image
                    alt=""
                    className=""
                    src={Mask}
                    layout="fill"
                />
                </div> */}

                <div className={styles.square}></div>
                <div id="blueDots" className="h-48 w-48 bg-blue-500"></div>
                <div id="greenDots" className="h-48 w-48 bg-green-500"></div>
            </section>
        </>
    );
};

export default SnapSection;