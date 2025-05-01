import React from 'react';
import { Twitter, Github, Linkedin, FileDown } from 'lucide-react';

const workExperience = [
  {
    company: 'Coditation',
    role: 'Senior Software Engineer',
    period: '2022 - Present',
    points: [
      'Leading fullstack development across modern web and backend systems',
      'Working on Generative AI projects using RAG pipelines and vector databases',
      'Exploring prompt engineering and building AI-based solutions',
      'Tech stack: JavaScript, React, Next.js, Node.js, NestJS'
    ]
  },
  {
    company: 'Sunlighten',
    role: 'Software Engineer',
    period: '2021 - 2022',
    points: [
      'Worked on MSWTT systems and built complete end-to-end solutions',
      'Developed web and mobile applications using React and React Native',
      'Designed and implemented frontend interfaces and backend APIs',
      'Handled deployment and integration across platforms'
    ]
  }
];


function About() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
      <div className="space-y-8">
      <div>
  <h1 className="text-2xl font-mono font-bold mb-6">Hey, I'm Meghraj</h1>
  <p className="text-gray-600 dark:text-gray-300 mb-6">
    Software engineer and problem solver. <br /><br />
     Full-stack engineer, working on building scalable web applications to classic backend systems. I'm good at developing and designing anything from web apps to complex high-performance backends and more.
    <br />
    
    <br />
    I started from building simple HTML pages to creating React Native apps, web apps, and backend systems.
    <br />
    <br />
    Nowadays, I'm tinkering with Gen AI, RAG, and vector databases — exploring prompt engineering to find solutions to problems using AI.
    <br />
    <br />
    My professional stack lies in JavaScript, React, Next.js, Node, and NestJS.
  </p>
</div>

        <div className="space-y-12">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          {workExperience.map((job, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-medium">{job.company}</h3>
                <span className="text-gray-500 dark:text-gray-400">{job.period}</span>
              </div>
              <p className="text-teal-600 dark:text-teal-400">{job.role}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <div>
          <h2 className="text-2xl font-semibold mb-4">Places I've Called Home</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
            <li>Born in Bucharest, Romania</li>
            <li>Exchange student in Deatsville, AL</li>
            <li>University in Philadelphia, PA</li>
            <li>Vancouver, BC</li>
            <li>Seattle, WA</li>
            <li>San Francisco, CA</li>
          </ul>
        </div> */}

        <a 
          href="/resume.pdf" 
          download 
          className="inline-flex items-center space-x-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
        >
          <FileDown size={20} />
          <span>Download Resume</span>
        </a>
      </div>

      <div className="space-y-8">
        <div className="lg:pl-12">
          <div className="max-w-sm px-2.5 lg:max-w-md">
            <img
              src="/cardimg.png"
              alt="Profile"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 shadow-lg"
              width="900"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex flex-col space-y-4 mt-8">
            <a 
              href="https://x.com/itsdeshmukh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Twitter size={20} />
              <span>Follow on X</span>
            </a>
            <a 
              href="https://github.com/knightmate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={20} />
              <span>Follow on GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/meghraj1998/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Linkedin size={20} />
              <span>Follow on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;