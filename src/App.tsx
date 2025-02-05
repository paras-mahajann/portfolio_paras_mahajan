import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  ChevronDown,
  Box,
  Terminal,
  Smartphone,
  Globe,
  Database,
  Cpu,
} from 'lucide-react';

function App() {
  // Create repeating pattern of emojis for the border
  const borderPattern = Array(20).fill('🐍 🤖').join(' ');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Emoji Border */}
      <div
        className="fixed top-0 left-0 w-full overflow-hidden text-4xl whitespace-nowrap opacity-20 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {borderPattern}
      </div>
      <div
        className="fixed bottom-0 left-0 w-full overflow-hidden text-4xl whitespace-nowrap opacity-20 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {borderPattern}
      </div>
      <div
        className="fixed top-0 left-0 h-full overflow-hidden text-4xl whitespace-nowrap opacity-20 pointer-events-none"
        style={{ zIndex: 1, writingMode: 'vertical-rl' }}
      >
        {borderPattern}
      </div>
      <div
        className="fixed top-0 right-0 h-full overflow-hidden text-4xl whitespace-nowrap opacity-20 pointer-events-none"
        style={{ zIndex: 1, writingMode: 'vertical-rl' }}
      >
        {borderPattern}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-indigo-900 opacity-90"></div>
          <img
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Terminal size={64} className="text-indigo-400" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-indigo-400">Paras Mahajan</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-indigo-900/50 rounded-full text-indigo-300 border border-indigo-700">
              Frontend Developer
            </span>
            <span className="px-4 py-2 bg-indigo-900/50 rounded-full text-indigo-300 border border-indigo-700">
              Python Expert
            </span>
            <span className="px-4 py-2 bg-indigo-900/50 rounded-full text-indigo-300 border border-indigo-700">
              Android Developer
            </span>
          </div>
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/paras-mahajann"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/paras-mahajan-developer/"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mahajanparas912@gmail.com"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <a href="#specialties" className="animate-bounce inline-block">
            <ChevronDown size={32} className="text-indigo-400" />
          </a>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-2 justify-center">
            <Code2 className="text-indigo-400" />
            Core Specialties
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-indigo-900/50 hover:border-indigo-400 transition-colors">
              <Globe className="text-indigo-400 w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">
                Frontend Development
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React & Next.js</li>
                <li>• JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• React-Native</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl border border-indigo-900/50 hover:border-indigo-400 transition-colors">
              <Terminal className="text-indigo-400 w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">
                Python Full-Stack
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• FastAPI & Django</li>
                <li>• OpenCV & ML</li>
                <li>• MySQL</li>
                <li>• Git & AWS</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl border border-indigo-900/50 hover:border-indigo-400 transition-colors">
              <Smartphone className="text-indigo-400 w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">
                Android Development
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Kotlin & Jetpack Compose</li>
                <li>• Android SDK</li>
                <li>• Material Design</li>
                <li>• Firebase Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2 justify-center">
            <Cpu className="text-indigo-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Code Assistant',
                desc: 'Python-based code analysis and suggestion engine using machine learning',
                tech: ['Python', 'TensorFlow'],
                image:
                  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80',
              },
              {
                title: 'React Native Social App',
                desc: 'Cross-platform mobile application with real-time features',
                tech: ['React Native', 'Firebase'],
                image:
                  'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80',
              },
              {
                title: 'Blockchain Explorer',
                desc: 'Web3 interface for blockchain data visualization',
                tech: ['React', 'Web3.js'],
                image:
                  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden border border-indigo-900/50 hover:border-indigo-400 transition-colors"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm border border-indigo-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900 border-t border-indigo-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2 justify-center">
            <Database className="text-indigo-400" />
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Python',
              'React',
              'Kotlin',
              'FastAPI',
              'Django',
              'MySQL',
              'Android SDK',
              'Firebase',
              'AWS',
              'Git',
            ].map((skill) => (
              <div
                key={skill}
                className="p-4 bg-gray-800 rounded-xl text-center border border-indigo-900/50 hover:border-indigo-400 transition-colors"
              >
                <p className="font-medium text-indigo-300">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800 border-t border-indigo-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Let's Build Something Amazing
          </h2>
          <p className="text-indigo-300 mb-8">
            Looking to create innovative solutions with cutting-edge technology?
            Let's connect and discuss your next project.
          </p>
          <a
            href="mailto:mahajanparas912@gmail.com"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors border border-indigo-500"
          >
            <Mail size={20} />
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-indigo-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-indigo-300">
          <p>© 2024 Paras Mahajan. Building the future with code.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
