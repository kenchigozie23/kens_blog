"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import Container from "./Container";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Medical Doctor.",
      "Research writer.",
      "SEO specialist.",
      "Software developer.",
      "Data analyst.",
      "Digital marketer.",
    ],
    
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <p className="text-3xl font-bold tracking-wide text-zinc-800 sm:text-5xl dark:text-zinc-100">
          👋 Hello there! I'm a {""}
          <span className="text-3xl tracking-wide text-[#66cdaa] sm:text-5xl">
            {typeEffect}
          </span>
          <span className="text-[#66cdaa]">
            <Cursor />
          </span>
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 tracking-wider">
        👨‍⚕️💻📝🔬🌐 Multitalented professional with a unique blend of medical expertise, technical prowess and creative flair. Excelling in bridging the gap between healthcare, technology, and effective communication strategies.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
