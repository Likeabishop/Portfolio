const Hero = () => {
    return (
      <section id="home" className="min-h-[90vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-indigo-600 dark:text-indigo-400">Karabo Tebeila</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I build exceptional digital experiences that make a difference. 
              With 2+ practical years of experience in web development, I specialize in 
              creating responsive, user-friendly applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200 font-medium"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 mx-auto bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/images/me.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Hero;