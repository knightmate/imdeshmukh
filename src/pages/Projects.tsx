import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  
];

function Projects() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-mono font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Github size={20} />
                <span>View Source</span>
              </a>
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;