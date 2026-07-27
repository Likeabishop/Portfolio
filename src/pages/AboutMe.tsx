import { Helmet } from "react-helmet-async";
import useDocumentTitle from "../hooks/useDocumentTitle";

const AboutMe = () => {
  useDocumentTitle("About Me");

  return (
    <>
      <Helmet>
        <title>About | Karabo Tebeila | Software Engineer</title>

        <meta
          name="description"
          content="Learn more about Karabo Tebeila, a Software Engineer specializing in Java, Spring Boot, React, distributed systems, Kafka, Redis, AI integrations, and scalable cloud-native applications."
        />

        <meta
          name="keywords"
          content="Karabo Tebeila, Java Developer, Software Engineer, Spring Boot, React, Kafka, Redis, AI, Microservices, Backend Engineer"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Karabo Tebeila",
            jobTitle: "Software Engineer",
            url: "https://justkarabo.xyz",
            image: "https://justkarabo.xyz/images/profile.jpg",

            description:
              "Software Engineer specializing in Java, Spring Boot, React, distributed systems, cloud-native applications, Kafka, Redis and AI integrations.",

            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Tshwane University of Technology",
            },

            sameAs: [
              "https://github.com/Likeabishop",
              "https://www.linkedin.com/in/karabo-tebeila-90881331b",
            ],

            knowsAbout: [
              "Java",
              "Spring Boot",
              "React",
              "TypeScript",
              "Microservices",
              "Redis",
              "Kafka",
              "Docker",
              "REST APIs",
              "JWT",
              "Artificial Intelligence",
              "Blockchain",
              "Distributed Systems",
            ],
          })}
        </script>
      </Helmet>

      <section id="about" className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a disciplined, high-output Software Engineer who builds
              reliable, secure, and scalable systems. I specialize in Java with
              Spring Boot and modern React TypeScript applications, focusing on
              designing backend services that are resilient, maintainable, and
              cloud-ready.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              My work emphasizes secure API design, authentication systems,
              containerized deployments, distributed systems, and
              performance-driven architecture. I'm particularly interested in
              cloud-native engineering, event-driven systems, artificial
              intelligence, and infrastructure that supports highly available
              applications at scale.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Currently pursuing an Advanced Diploma in Computer Science, I've
              gained valuable experience working in fast-paced startup
              environments where ownership, adaptability, and solution-driven
              thinking are essential.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Beyond delivery, I continuously refine my craft by building
              production-ready side projects, contributing to open-source
              software, exploring emerging AI technologies, and sharing
              technical knowledge through project case studies and engineering
              documentation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;