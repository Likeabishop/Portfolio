import { Link } from "react-router-dom";

const Hero = () => {
    return (
      <section id="home" className="min-h-[90vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Karabo Tebeila
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Full-Stack Software Engineer
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            I design and build scalable, secure web applications that deliver real business value. 
            Specializing in Java, Spring Boot, React, and cloud-ready systems.
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Java', 'Spring Boot', 'React', 'Python', 'TypeScript', 'AWS'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Hire Me
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200 font-medium hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View Work
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Hero;