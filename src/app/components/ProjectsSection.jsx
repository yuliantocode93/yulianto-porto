"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Using Bootstrap 5",
    image: "/images/projects/FE-Porto.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/portfolio-bootstrap5.git",
  },

  {
    id: 2,
    title: "News Portal",
    description: "Using Bootstrap 5 and News API",
    image: "/images/projects/news.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/pencarian-berita-API.git",
  },
  {
    id: 3,
    title: "Portfolio Responsive",
    description: "Using TailwindCSS",
    image: "/images/projects/tailwindcss.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/portfolio-tailwindcss.git",
  },
  {
    id: 4,
    title: "React Store API",
    description: "Using ReactJS and Store API",
    image: "/images/projects/Store-API.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/simple-react-fakeStoreApi-1.git",
  },
  {
    id: 5,
    title: "Frontend API News",
    description: "Using ReactJS, Material UI and News API",
    image: "/images/projects/FE-API-News.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/portal-berita-reactjs-eduwork",
  },
  {
    id: 6,
    title: "Restfull API",
    description: "Using ExpressJS, MongoDB, and MySQL",
    image: "/images/projects/RestfullAPI.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/nodejs-API-mongoDB-mySQL.git",
  },
  {
    id: 7,
    title: "Youtube Clone",
    description: "Using ReactJS, Material UI and YouTube API",
    image: "/images/projects/youtube.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/YLCM-Media.git",
  },
  {
    id: 8,
    title: "MERN Ecommerce",
    description: "Using ReactJS, Redux, ExpressJS and MongoDB",
    image: "/images/projects/MERN1.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/simple-fullstack-simple-mern.git",
  },
  {
    id: 9,
    title: "MERN Properties Marketplace",
    description: "Using ReactJS, Redux, ExpressJS and MongoDB",
    image: "/images/projects/MERN2.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/crud-mern-properties.git",
  },
  {
    id: 10,
    title: "NextJS Ecommerce",
    description: "Using NextJS and Firebase",
    image: "/images/projects/Shoes-store.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/Next.js-With-Firebase",
  },
  {
    id: 11,
    title: "MERN Authentication",
    description: "Using React, Redux, ExpressJS, MongoDB and Firebase",
    image: "/images/projects/mern-auth.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/mern-authentication.git",
  },
  {
    id: 12,
    title: "Front-end Sisko API",
    description: "Using ReactJS and Sisko API",
    image: "/images/projects/sisko-api.png",
    tag: ["Web"],
    previewUrl: "https://github.com/yuliantocode93/FE-Sisko-API.git",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Web");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
