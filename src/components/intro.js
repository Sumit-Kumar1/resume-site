'use client'
import Profiles from "./profileBar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
    const phrases = [
        " Backend Developer",
        " API Specialist",
        " Golang Enthusiast"
    ];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 5000); // Change phrase every 5 second

        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <section id="intro" className="flex flex-col bg-[#353353] max-w-full items-center justify-center h-screen">
            <img src="https://jthemes.net/themes/html/bolby/demo/images/avatar-1.svg" className="mb-4"></img>
            <div className="text-center">
                <h1 className="mb-2 text-4xl font-bold">Sumit Kumar</h1>
                <p className="text-xl m-3"> I'm a 
                    <span className="animate bg-[##44D7B6]">
                        <motion.span
                            key={currentPhraseIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 10 } }}
                            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                        >
                            {phrases[currentPhraseIndex]}
                        </motion.span>
                    </span>
                </p>
                <Profiles></Profiles>
                <button className="btn bg-[#FF4C60] text-white rounded-lg border-0 mt-3">View My Resume</button>
            </div>
        </section>
    )
}