import Container from "@/components/Container";
import React from "react";
import portraitImage from "@/img/ken.png";
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
            👨‍⚕️💻📊💉 Versatile Professional: Medical Doctor | Public Health
            Consultant | Software Developer | Research Writer | Digital Marketer
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              👨‍⚕️ Medical Professional: As a practicing medical doctor, I bring a
              wealth of knowledge and expertise in the field of public health.
              Committed to promoting well-being and preventing disease, I
              leverage my clinical experience to provide insightful
              consultations and develop effective healthcare strategies
            </p>
            <p>
              💻 Tech Savvy Developer: With a passion for technology, I excel as
              a software developer, creating innovative solutions that
              streamline processes and enhance efficiency. My proficiency in
              coding and data analysis allows me to tackle complex challenges,
              delivering cutting-edge applications tailored to specific needs.
            </p>
            <p>
              📝 Research Writer: As a skilled research writer, I
              have a knack for transforming complex information into compelling
              narratives. My ability to distill intricate details into clear and
              concise content ensures effective communication across diverse
              audiences, making me a valuable asset in knowledge dissemination.
            </p>
            <p>
              🌐 Digital Marketing: In the ever-evolving digital
              landscape, I thrive as a digital marketer, crafting engaging
              campaigns and leveraging the power of online platforms to connect
              with target audiences. My expertise in SEO, social media, and
              analytics enables me to drive brand awareness, increase online
              visibility, and maximize ROI.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
