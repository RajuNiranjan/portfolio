"use client";

import { useAmp } from "next/amp";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabBar from "./TabBar";
import TabButton from "./TabBar";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Java Script</li>
        <li>React JS</li>
        <li>Tailwind Css</li>
        <li>Next JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          B.Tech - KKR & KSR Institute of Technology and Sciences (EEE), Guntur,
          A.P
        </li>
        <li>Intermediate - Sri Gayatri Junior College, Guntur, A.P</li>
        <li>Class X - Naveena High School, Guntur, A.P</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: <ul className="list-disc pl-2"></ul>,
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about">
      <motion.div
        className="text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}>
        <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/img/lap.jpeg" alt="img" width={500} height={500} />
          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-base lg:text-lg text-[#fff]">
              {`
                Hello! I'm Niranjan Raju, a passionate Front-End developer.From my
              early age I was so much passionate on web. I develop web
              applications, I also have experience working with Reactjs and Next
              js. Able to do any web and programming related task by handling
              difficulties smoothly in any given time. Have a reasonable skill
              on Front-End development
                `}
            </p>
            <div className="flex flex-row justify-start mt-8 gap-5">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}>
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}>
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}>
                {" "}
                Experience{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
