const AboutMe = () => {
    return (
      <section id="about" className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a disciplined, high-output, solution-oriented operator and I solve problems clinically.
              I make decisions from that identity daily. I am a Software Engineer who has dabbled in different technologies and 
              I have found comfort in Spring Boot (Java) + React TypeScript, but I am also very interested in emerging technologies like Blockchain/Web3. 
              I am also interested in Data Science. 
              Last but not least I am an Advanced Diploma in Computer Science student and I've had the opportunity to work with startups
              where there is a lot of pressure and a lot of moving parts.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through blog posts and mentoring.
            </p>
          </div>
        </div>
      </section>
    )
}

export default AboutMe;