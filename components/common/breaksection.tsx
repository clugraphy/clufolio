import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";


const BreakSection = () => {
    const tilt = useRef(null);



    useEffect(() => {
        const options = {
            scale: 1.2,
            speed: 1000,
            max: 30
        };

        VanillaTilt.init(tilt.current, options);
    });



    return (
        <>

            <div className="bg-gray-500 mx-auto mt-10 ml-20 h-52 w-52">
                <div ref={tilt} className="text-white  text-5xl">Here</div>
            </div>


        </>
    )
}

export default BreakSection;