import React from 'react';
import { Github, Linkedin, ExternalLink, Code, Database, Server, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';

function App() {
  const { language, setLanguage, t } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const skills = [
    { name: 'C', category: 'Systems' },
    { name: 'Java', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'SQL', category: 'Database' },
    { name: 'SAP', category: 'Enterprise' }
  ];

  const projects = [
    {
      title: t('projects.items.bankSimulator.title'),
      description: t('projects.items.bankSimulator.description'),
      technologies: ['C', 'Data Structures', 'Algorithms'],
      icon: <Code className="w-6 h-6" />,
      githubUrl: 'https://github.com/Dev2Mist/Proyecto-de-Banco'
    },
    {
      title: t('projects.items.videogameShop.title'),
      description: t('projects.items.videogameShop.description'),
      technologies: ['C', 'Memory Management', 'Callbacks'],
      icon: <Code className="w-6 h-6" />,
      githubUrl: 'https://github.com/Dev2Mist/Proyecto-Tienda-de-Videojuegos'
    },
    {
      title: t('projects.items.emailSystem.title'),
      description: t('projects.items.emailSystem.description'),
      technologies: ['Python', 'Java', 'Sockets'],
      icon: <Server className="w-6 h-6" />,
      githubUrl: 'https://github.com/Dev2Mist/servidor-cliente/tree/main' 
    },
    {
      title: t('projects.items.coffeeShop.title'),
      description: t('projects.items.coffeeShop.description'),
      technologies: ['JavaScript', 'HTML', 'CSS'],
      icon: <Database className="w-6 h-6" />,
      githubUrl: 'https://github.com/Dev2Mist/Landing-Page-de-Cafeteria/tree/main' 
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-gray-900 dark:text-white">Benjamín R. Borges</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.about')}</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.skills')}</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.projects')}</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.contact')}</a>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 pl-4 border-l border-gray-200 dark:border-gray-700">
                <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-sm rounded transition-colors ${
                    language === 'en' 
                      ? 'bg-blue-600 text-white dark:bg-blue-500' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-2 py-1 text-sm rounded transition-colors ${
                    language === 'es' 
                      ? 'bg-blue-600 text-white dark:bg-blue-500' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  ES
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                {t('hero.getInTouch')}
              </a>
              <a href="#projects" className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                {t('hero.viewProjects')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">{t('skills.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['systems', 'backend', 'frontend', 'database'].map((category) => (
              <div key={category} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md dark:shadow-gray-900/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t(`skills.categories.${category}`)}</h3>
                <div className="space-y-3">
                  {skills.filter(skill => skill.category.toLowerCase() === category).map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">{t('projects.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center space-x-4">
                    {project.githubUrl ? (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center space-x-1 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>{t('projects.viewCode')}</span>
                      </a>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-500 font-medium flex items-center space-x-1">
                        <Github className="w-4 h-4" />
                        <span>{t('projects.viewCode')}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">{t('contact.title')}</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/benjaminborges" target="_blank" rel="noopener noreferrer" className="bg-gray-700 dark:bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Dev2Mist" target="_blank" rel="noopener noreferrer" className="bg-gray-700 dark:bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 dark:border-gray-800">
            <p className="text-gray-400 dark:text-gray-500">
              © 2025 Benjamín Andrés Ramírez Borges. {t('contact.footer')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;