"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

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
      "AI enthusiast",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <p className="text-3xl font-bold tracking-wide text-zinc-800 sm:text-5xl dark:text-zinc-100">
         Hey👋, I'm a {""}
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
        <div className=" mx-auto py-6">
        
        <div className="flex justify-start">
          <ul className="flex lg:space-x-8 space-x-5">
            <li>
              <a
                href="https://www.fb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaFacebook
                  className="text-4xl transform hover:scale-125 transition-transform duration-300"
                  aria-label="Facebook"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
              >
                <FaTwitter
                  className="text-4xl transform hover:scale-125 transition-transform duration-300"
                  aria-label="Twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
              >
                <FaInstagram
                  className="text-4xl transform hover:scale-125 transition-transform duration-300"
                  aria-label="Instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kenneth-okoronkwo"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
              >
                <FaLinkedin
                  className="text-4xl transform hover:scale-125 transition-transform duration-300"
                  aria-label="LinkedIn"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/kenchigozie23"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                <FaGithub
                  className="text-4xl transform hover:scale-125 transition-transform duration-300"
                  aria-label="GitHub"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </Container>
  );
};

export default Hero;
