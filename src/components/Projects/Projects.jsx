import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import otherProjects from "../../data/other-projects.json"; // Import the new JSON file
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Programming Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>

      <h2 className={styles.title}>Other Projects</h2>
      <div className={styles.projects}>
        {otherProjects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
