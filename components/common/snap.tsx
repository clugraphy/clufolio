import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { MENULINKS } from "../../constants";


const SnapSection = () => {


    const { ref: snapAttackRef } = MENULINKS[2];
    return (
        <>
            <section id={snapAttackRef} className="w-full relative tall:py-36 py-48 section-container flex flex-col snap-y snap-mandatory">
                <Image
                    alt=""
                    className="aspect-w-16 aspect-h-9 "
                    layout="fill"
                    height={400}
                    width={400}
                    src="https://res.cloudinary.com/demo/image/upload/sample.jpg" />
                <div className="aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </section>
        </>
    );
};

export default SnapSection;