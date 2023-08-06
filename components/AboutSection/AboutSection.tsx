import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import AboutSlider from "./AboutSlider";


function AboutSection() {
    return (
        <>
            <div className="w-full h-50 bg-second-color">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
                        <div className="flex flex-col items=center text-center mt-10 mb-20 w-96 gap-3">
                            <div>
                                <h1 className="text-2xl font-bold text-first-text">WHAT THEY SAY ABOUT US</h1>
                                <p className="text-second-text">Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sed urna malesuada consectetuer</p>
                            </div>
                            <div>
                                <AboutSlider />
                            </div>
                        </div>
                        <div className="flex flex-col items=center text-center mt-10 mb-20 m-auto">
                            <div className="flex items-center justify-center bg-white w-60 h-20 flex-col rounded-md">
                                <h1 className="font-bold">OUTSTOCK ON INSTAGRAM</h1>
                                <h1>#Follow Instagram</h1>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </>
    )
}
export default AboutSection