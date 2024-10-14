import Container from "@/components/Container";
import React from "react";
import portraitImage from "@/img/kenneth.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="image"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-wide text-zinc-800 sm:text-3xl dark:text-zinc-100">
            👨‍⚕️💻📊 Professional Software Developer | Digital Marketer | Blockchain Developer | Research Writer 
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
           
            <p>
              💻 Tech Savvy Developer: With a passion for technology, I excel as
              a software developer, creating innovative solutions that
              streamline processes and enhance efficiency.
            </p>
            <p>
              📝 Research Writer: As a skilled research writer, I
              have a knack for transforming complex information into compelling
              narratives.
            </p>
            <p>
              🌐 Digital Marketing: In the ever-evolving digital
              landscape, I thrive as a digital marketer, crafting engaging
              campaigns and leveraging the power of online platforms to connect
              with target audiences.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
