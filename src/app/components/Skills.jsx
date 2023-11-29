"use client";

import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const skillsData = [
  {
    id: 1,
    title: "HTML",
    persentage: 95,
  },
  {
    id: 2,
    title: "JavaScript",
    persentage: 85,
  },
  {
    id: 3,
    title: "CSS",
    persentage: 90,
  },
  {
    id: 4,
    title: "React JS",
    persentage: 85,
  },
  {
    id: 5,
    title: "Next JS",
    persentage: 50,
  },
  {
    id: 6,
    title: "Tailwind Css",
    persentage: 85,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col gap-5 my-5">
      <h2 className="text-4xl font-bold mb-5">My Skills</h2>
      <div className="flex flex-col gap-5">
        {skillsData.map((e) => (
          <div key={e.id}>
            <p>{e.title}</p>
            <ProgressBar completed={e.persentage} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
