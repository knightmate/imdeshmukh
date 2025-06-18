import React, { useState } from 'react';
import { Twitter, Github, Linkedin, FileDown, Settings } from 'lucide-react';
import { GitHubMarkdown } from '../components/GitHubMarkdown';

function About() {
  const [showSettings, setShowSettings] = useState(false);
  const [githubConfig, setGithubConfig] = useState({
    owner: 'knightmate',
    repo: 'imdeshmukh',
    aboutPath: 'about.md',
    experiencePath: 'experience.md',
    branch: 'main'
  });

  const handleConfigChange = (field: keyof typeof githubConfig, value: string) => {
    setGithubConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <main className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
      <div className="space-y-8">
        {/* GitHub Content Configuration */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-mono font-bold">About Me</h1>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <Settings size={20} />
            <span>Configure</span>
          </button>
        </div>

        {showSettings && (
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="text-lg font-medium mb-4">GitHub Content Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Repository Owner
                </label>
                <input
                  type="text"
                  value={githubConfig.owner}
                  onChange={(e) => handleConfigChange('owner', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="e.g., knightmate"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Repository Name
                </label>
                <input
                  type="text"
                  value={githubConfig.repo}
                  onChange={(e) => handleConfigChange('repo', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="e.g., imdeshmukh"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  About File Path
                </label>
                <input
                  type="text"
                  value={githubConfig.aboutPath}
                  onChange={(e) => handleConfigChange('aboutPath', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="e.g., about.md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Experience File Path
                </label>
                <input
                  type="text"
                  value={githubConfig.experiencePath}
                  onChange={(e) => handleConfigChange('experiencePath', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="e.g., experience.md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Branch
                </label>
                <input
                  type="text"
                  value={githubConfig.branch}
                  onChange={(e) => handleConfigChange('branch', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="e.g., main"
                />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p>Current source: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">github.com/{githubConfig.owner}/{githubConfig.repo}/blob/{githubConfig.branch}/</code></p>
              <p className="mt-1">Files: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{githubConfig.aboutPath}</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{githubConfig.experiencePath}</code></p>
            </div>
          </div>
        )}

        {/* About Content from GitHub */}
        <div className="space-y-6">
          <GitHubMarkdown
            owner={githubConfig.owner}
            repo={githubConfig.repo}
            path={githubConfig.aboutPath}
            branch={githubConfig.branch}
            className="text-gray-600 dark:text-gray-300"
          />
        </div>

        {/* Work Experience from GitHub */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <GitHubMarkdown
            owner={githubConfig.owner}
            repo={githubConfig.repo}
            path={githubConfig.experiencePath}
            branch={githubConfig.branch}
            className="text-gray-600 dark:text-gray-300"
          />
        </div>

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