import React, { MutableRefObject, useEffect, useRef } from "react";

const VideoBanner = () => {
    return (
        <>
            <div
                className="absolute z-30 p-5 text-4xl text-white bg-grey-500 bg-opacity-50 rounded-xl"
            >
                BRYO apetitte
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 h-full w-full "
            >
                <source
                    src="palm_l.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </>
    )

}

export default VideoBanner;