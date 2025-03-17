import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'The site you’re looking at right now – built with React, TypeScript, and Framer Motion.',
    stack: ['React', 'TypeScript', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: 'https://github.com/HariAdityaRE/My-Projects',
  },
  {
    title: 'Notebook Web App',
    description: 'A minimal productivity app for creating, tracking, and managing tasks.',
    stack: ['React', 'Redux', 'Firebase'],
  },
  {
    title: 'BST Visualizer',
    description: 'A Binasry Search Tree(BST Visualizer)',
    stack: ['Python'],
    githubUrl: 'https://github.com/HariAdityaRE/My-Projects/tree/master/BST-Visualizer'
  },
];

const Projects: React.FC = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.stack}>
                {project.stack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className={styles.links}>
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                )}
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Code</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
