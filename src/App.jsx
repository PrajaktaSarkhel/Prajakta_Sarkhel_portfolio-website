import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, FileText, Award, Code, Briefcase } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            PS
          </h1>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors hidden sm:block">About</a>
            <a href="#projects" className="text-sm hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors hidden sm:block">Projects</a>
            <a href="#research" className="text-sm hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors hidden sm:block">Research</a>
            <a href="#contact" className="text-sm hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors hidden sm:block">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-full mb-6">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Available for Internships</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 dark:text-white">
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Prajakta</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm a CSE undergrad, currently exploring full-stack development. Published two research papers, presented at IIM Calcutta. I believe the best solutions come from diverse perspectives. Looking to learn from real-world projects and contribute to meaningful tech innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all text-center">
                View Projects
              </a>
              <a 
                href="/Prajakta_Sarkhel_resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 dark:bg-white dark:text-gray-900 text-white rounded-lg hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
              <FileText className="w-5 h-5" />
              Resume
              </a>
              <a href="#contact" className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all dark:text-white text-center">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                PS
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 dark:text-white">About Me</h3>
          
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Education</h4>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <h5 className="font-semibold text-lg dark:text-white">B.Tech in Computer Science & Engineering</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2024 - 2028</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Asansol Engineering College (West Bengal, India)</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">SGPA: 8.68/10</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <h5 className="font-semibold text-lg dark:text-white">Higher Secondary Education</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2021 - 2023</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Auxilium Convent School (West Bengal, India)</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">Score: 92.25%</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <h5 className="font-semibold text-lg dark:text-white">Secondary Education</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2009 - 2021</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Mount Carmel School (Jharkhand, India)</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">Score: 96.4%</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Technical Skills</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <Code className="w-6 h-6 text-blue-500 mb-3" />
                <h5 className="font-semibold mb-2 dark:text-white">Languages</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">C, C++, Python, JavaScript, Java</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <Briefcase className="w-6 h-6 text-purple-500 mb-3" />
                <h5 className="font-semibold mb-2 dark:text-white">Web Technologies</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300"> HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), ReactJs</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <Award className="w-6 h-6 text-green-500 mb-3" />
                <h5 className="font-semibold mb-2 dark:text-white">Currently Learning</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">Next.js, MongoDB, TypeScript</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">LeetCode Problems</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Research Papers</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">8.68</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">SGPA</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-500/10 to-orange-500/10">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Open Source PRs</div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 dark:text-white">Featured Projects</h3>
          
          <div className="space-y-12">
            <div className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">Eunoia</div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">Web App</span>
                    <span className="px-3 py-1 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">Wellness</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 dark:text-white">Eunoia</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    A mental wellness application that generates mood-based audio tones using Web Audio API. Features include responsive design, local storage for preferences, interactive timers, and dynamic state management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">HTML5</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">CSS3</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">Web Audio API</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/PrajaktaSarkhel" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center md:order-2">
                  <div className="text-white text-4xl font-bold">PosturePro</div>
                </div>
                <div className="p-6 sm:p-8 md:order-1">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="px-3 py-1 bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">IoT</span>
                    <span className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">Hardware</span>
                    <span className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">Arduino</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 dark:text-white">PosturePro</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    IoT-based posture correction system designed for real-time BLE notifications to smartphones and smartwatches. Led team presentation at TSEC 2025, IIM Calcutta.
                  </p>
                  <div className="mb-6 p-4 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                      🏆 Presented at TSEC 2025, IIM Calcutta
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">IoT</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">BLE</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">Hardware</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">Arduino</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">Python</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/PrajaktaSarkhel" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      <Github className="w-4 h-4" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 dark:text-white">Research Publications</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">Published</span>
              </div>
              <h4 className="text-xl font-bold mb-3 dark:text-white">
                An Insight into Impact of Dark Mode on Energy Conservation Across Devices
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                National Conference on Communication, Computing and IoT (NCCCI-2025)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Published: February 2025
              </p>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                <FileText className="w-4 h-4" />
                Download PDF
              </button>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-green-600 dark:text-green-400" />
                <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">Published</span>
              </div>
              <h4 className="text-xl font-bold mb-3 dark:text-white">
                The Role of Stimuli-Responsive Materials for Biomedical Challenges
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                AICTE - VAANI Conference
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Published: September 2025
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mb-6">
                Utilized AI-generated visualizations for data representation
              </p>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg cursor-not-allowed text-sm">
                <FileText className="w-4 h-4" />
                PDF Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 dark:text-white">Let's Connect</h3>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12">
            I'm excited to connect with fellow developers, potential mentors, and companies to collaborate on interesting project ideas!
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:prajaktasarkhel@gmail.com"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/prajakta-sarkhel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all dark:text-white"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/PrajaktaSarkhel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all dark:text-white"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Prajakta Sarkhel. Designed, developed, and thoughtfully engineered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;