import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";


const SnapSection = () => {

    useEffect(() => {
        gsap.utils.toArray('.animate-image').forEach((el, index) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top top",
                    toggleActions: "play none none reverse",
                    markers: true
                }
            })

            tl
                .set(el, { transformOrigin: 'center center' })
                .fromTo(el, { opacity: 0, scale: 0.8, y: "+=100" }, { opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false })
        })
    })

    return (
        <>
            <section className="w-full relative tall:py-36 py-48 section-container flex flex-col snap-y snap-mandatory">
                <Image
                    alt=""
                    className="aspect-w-16 aspect-h-9 "
                    layout="fill"
                    height={400}
                    width={400}
                    src="https://res.cloudinary.com/demo/image/upload/sample.jpg" />
                <h1>HERE</h1>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>>
                </div>

            </section>

        </>
    );
};

export default SnapSection;