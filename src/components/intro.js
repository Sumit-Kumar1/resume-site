"use client";
import Profiles from "./profileBar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Intro() {
  const phrases = [
    " Golang Enthusiast",
    " Backend Developer",
    " ML Enthusiast",
    " Game Developer",
    " Full Stack Developer",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 second

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section
      id="intro"
      className="flex flex-col bg-[#353353] max-w-full items-center justify-center h-screen text-white"
    >
      <Image
        src="/images/animated.png"
        className=""
        alt="avatar"
        width={250}
        height={100}
      ></Image>
      <div className="text-center">
        <h1 className="mb-2 text-4xl font-bold">Sumit Kumar</h1>
        <p className="text-xl m-3">
          {" "}
          I&apos;m a
          <span className="animate text-error font-light">
            <motion.span
              key={currentPhraseIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 20,
              }}
              transition={{
                duration: 0.5,
                delay: currentPhraseIndex / 50,
              }}
            >
              {phrases[currentPhraseIndex]}
            </motion.span>
          </span>
        </p>
        <Profiles></Profiles>
        <a
          className="btn bg-[#FF4C60] text-white rounded-lg border-0 mt-3 hover:text-[#FF4C60]"
          href="/document/Resume-Sumit-Kumar.pdf"
          target="_blank"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
}
