import SimpleLayout from "@/components/SimpleLayout";
import React from "react";
import logoAnimaginary from "@/img/logos/animaginary.svg";
import logoCosmos from "@/img/logos/f1.png";
import logoHelioStream from "@/img/logos/crypto.png";
import logoOpenShuttle from "@/img/logos/r1.png";
import logoPlanetaria from "@/img/logos/k2.png";
import { type Metadata } from "next";
import { Card } from "@/components/Card";
import Image from "next/image";
import { GoLink } from "react-icons/go";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I’ve built throughout my career.",
};

const ProjectPage = () => {
  const projects = [
    {
      name: "E-Commerce Website",
      description:
        "Creating technology to empower civilians to explore space on their own terms.",
      link: { href: "https://ecommerce-stunning.vercel.app/", label: "E-Commerce " },
      logo: logoPlanetaria,
    },
    {
      name: "E-Learning Website",
      description:
        "High performance web animation library, hand-written in optimized WASM.",
      link: { href: "https://kens-education.vercel.app/", label: "E-Learning" },
      logo: logoAnimaginary,
    },
    {
      name: "Crypto Price Tracker",
      description:
        "Real-time video streaming library, optimized for interstellar transmission.",
      link: { href: "https://cryptopricetrackplug.vercel.app/", label: "Bitcoin" },
      logo: logoHelioStream,
    },
    {
      name: "Invseta Finance Limited",
      description:
        "The operating system that powers our Planetaria space shuttles.",
      link: { href: "https://investa-website.vercel.app/", label: "Finance" },
      logo: logoCosmos,
    },
    {
      name: "Grilli Restaurant",
      description:
        "The schematics for the first rocket I designed that successfully made it to orbit.",
      link: { href: "https://ken-resturant-landing-page.vercel.app/", label: "Restaurant" },
      logo: logoOpenShuttle,
    },
  ];
  return (
    <SimpleLayout
      title="👨‍⚕️👨‍💻📊✍️ Doctor, Coder, Analyst, Writer: Blending 🩺Tech & 💊Medical Ingenuity."
      intro="I'm a Software developer, Freelancer, and an IT-Specialist. I specialize in creating intuitive frontend project and software with creative eye for design and a strong focus on delivering elegant and intuitive interfaces. Excited to collaborate on new projects!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt="logo"
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-100">
              <GoLink className="text-lg flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
};

export default ProjectPage;
