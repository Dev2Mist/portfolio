import React from 'react';
import { Github, Linkedin, ExternalLink, Code, Database, Server, Globe, Moon, Sun, Calendar, MapPin, Mail, Send } from 'lucide-react';
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
    { name: 'SAP BTP', category: 'Enterprise' },
    { name: 'SAP Fiori', category: 'Enterprise' },
    { name: 'SAP JavaScript', category: 'Enterprise' }
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800/30 rounded-full animate-float opacity-40"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800/30 rounded-full animate-float-delayed opacity-35"></div>
        <div className="absolute top-60 left-1/4 w-12 h-12 bg-green-200 dark:bg-green-800/30 rounded-full animate-float-slow opacity-30"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-yellow-200 dark:bg-yellow-800/30 rounded-full animate-float opacity-25"></div>
        <div className="absolute bottom-20 left-20 w-18 h-18 bg-pink-200 dark:bg-pink-800/30 rounded-full animate-float-delayed opacity-35"></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-indigo-200 dark:bg-indigo-800/30 rounded-full animate-float-slow opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-red-200 dark:bg-red-800/30 rounded-full animate-float opacity-25"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-gray-900 dark:text-gray-100">Benjamín R. Borges</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">{t('nav.about')}</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">{t('nav.skills')}</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">{t('nav.projects')}</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">{t('nav.contact')}</a>
              
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
                <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-sm rounded transition-colors ${
                    language === 'en' 
                      ? 'bg-blue-600 text-white dark:bg-blue-500' 
                      : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-2 py-1 text-sm rounded transition-colors ${
                    language === 'es' 
                      ? 'bg-blue-600 text-white dark:bg-blue-500' 
                      : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                {t('hero.getInTouch')}
              </a>
              <a href="#projects" className="border border-gray-400 dark:border-gray-500 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg hover:border-gray-500 dark:hover:border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                {t('hero.viewProjects')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 transition-colors duration-300 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">{t('skills.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {['systems', 'backend', 'frontend', 'database', 'enterprise'].map((category) => (
              <div key={category} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{t(`skills.categories.${category}`)}</h3>
                <div className="space-y-3">
                  {skills.filter(skill => skill.category.toLowerCase() === category).map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 transition-colors duration-300 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">{t('projects.title')}</h2>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10 shadow-lg">
                  <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full"></div>
                </div>
                
                {/* Project Card */}
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-2 relative">
                    {/* Timeline Arrow */}
                    <div className={`absolute top-6 ${index % 2 === 5 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-0 h-0 border-t-8 border-b-8 border-transparent ${index % 2 === 0 ? 'border-l-8 border-l-gray-200 dark:border-l-gray-700' : 'border-r-8 border-r-gray-200 dark:border-r-gray-700'}`}></div>
                    
                    {/* Project Year Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                          {index === 3 ? 2023 : 2023 + index} {/* Coffee shop project is 2023 */}
                        </span>
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">
                        {project.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{project.title}</h3>
                    
                    <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
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
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">{t('contact.title')}</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-center">
            {t('contact.description')}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold text-white">Enviar Email</h3>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-800 border border-gray-600 dark:border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-800 border border-gray-600 dark:border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-800 border border-gray-600 dark:border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Asunto del mensaje"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-800 border border-gray-600 dark:border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>
            
            {/* Social Links */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-white mb-4">Conecta Conmigo</h3>
                <p className="text-gray-300 mb-8">
                  También puedes encontrarme en estas plataformas profesionales
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/benjaminborges" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-4 bg-gray-800 dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-500 transition-colors">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">LinkedIn</h4>
                    <p className="text-gray-400 text-sm">Conecta profesionalmente</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                </a>
                
                <a 
                  href="https://github.com/Dev2Mist" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-4 bg-gray-800 dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className="bg-gray-600 p-3 rounded-lg group-hover:bg-gray-500 transition-colors">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">GitHub</h4>
                    <p className="text-gray-400 text-sm">Explora mis proyectos</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 dark:border-gray-800">
            <p className="text-gray-400 dark:text-gray-500 text-center">
              © 2025 Benjamín Andrés Ramírez Borges. {t('contact.footer')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;