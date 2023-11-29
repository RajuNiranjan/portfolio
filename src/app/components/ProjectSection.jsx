"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "Personal Portfolio Website",
    description:
      "Sleek Next.js portfolio showcasing creativity, powered by Tailwind CSS, ensuring seamless, responsive design excellence.",
    image: "/img/projects/portfolio.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Weather Website",
    description:
      "Dynamic React weather app leveraging API data, delivering accurate forecasts with intuitive design, enhancing your daily planning effortlessly.",
    image: "/img/projects/weather.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/RajuNiranjan/weather-app",
    previewUrl: "https://weather-app-jet-sigma.vercel.app/",
  },
  {
    id: 3,
    title: "ToDo Website",
    description:
      "Dynamic React e-commerce site with CSS finesse, ensuring responsive design for seamless shopping experiences.",
    image: "/img/projects/todoapp.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/RajuNiranjan/todoapp",
    previewUrl: "https://todoapp-tan-iota.vercel.app/",
  },
  {
    id: 4,
    title: "Ecommerce Website",
    description:
      "Dynamic React e-commerce site with CSS finesse, ensuring responsive design for seamless shopping experiences.",
    image: "/img/projects/ecommerse.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RajuNiranjan/E-Mart_clone",
    previewUrl: "https://e-mart-clone.vercel.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  const handelTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVarient = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project">
      <h2 className="text-center text-4xl font-bold m-4">My Projects</h2>

      <div className="text-white flex flex-row justify-center items-center gap-3 py-6">
        <ProjectTag
          onClick={handelTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handelTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handelTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12" ref={ref}>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVarient}
            initial="initial"
            animate={isView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
