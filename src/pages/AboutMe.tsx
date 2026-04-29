import useDocumentTitle from "../hooks/useDocumentTitle";

const AboutMe = () => {
  useDocumentTitle('About Me');
  
    return (
      <section id="about" className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a disciplined, high-output Software Engineer who builds reliable, secure, and scalable systems. I specialize in Java with Spring Boot and modern React TypeScript applications, focusing on designing backend services that are resilient, maintainable, and cloud-ready.

              My work emphasizes secure API design, authentication systems, containerized deployments, and performance-driven architecture. I’m particularly interested in cloud-native engineering, distributed systems, and infrastructure that supports high-availability applications at scale.

              Currently pursuing an Advanced Diploma in Computer Science, I’ve gained valuable experience working in fast-paced startup environments where ownership, adaptability, and solution-driven thinking are essential.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Beyond delivery, I continuously refine my craft by exploring modern tooling, contributing to technical communities, and mentoring peers.
            </p>
          </div>
        </div>
      </section>
    )
}

export default AboutMe;