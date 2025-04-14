import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Twitter, Github, Linkedin, FileDown } from 'lucide-react';
import { useTheme } from './ThemeContext';
import About from './pages/About';
import Posts from './pages/Posts';
import Projects from './pages/Projects';

function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="flex justify-between items-center mb-16">
      <Link to="/">
        <img
          src="/myimage.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </Link>
      <nav className="flex items-center">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-full px-6 py-2 shadow-sm">
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'text-teal-500' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/posts" 
                className={isActive('/posts') ? 'text-teal-500' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}
              >
                Posts
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={isActive('/projects') ? 'text-teal-500' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <button 
          className="ml-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" 
          onClick={toggleTheme} 
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 lg:px-8 transition-colors duration-200">
        <div className="max-w-4xl mx-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;