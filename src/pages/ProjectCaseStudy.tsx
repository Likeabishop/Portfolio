import { ArrowLeft, ExternalLink, Github, AlertCircle, BookOpen, Cpu, Lightbulb } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/projects";

const ProjectCaseStudy = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Case Study | Karabo Tebeila</title>

        <meta
          name="description"
          content={project.description}
        />

        <meta property="og:title" content={`${project.title} | Karabo Tebeila`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            name: project.title,
            description: project.description,
            programmingLanguage: project.tech,
            codeRepository: project.github,
            author: {
              "@type": "Person",
              name: "Karabo Tebeila",
            },
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Back */}

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Hero */}

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[420px] rounded-2xl object-cover shadow-lg"
        />

        <div className="mt-10">

          <span
            className={`inline-block rounded-full px-4 py-1 text-sm font-medium mb-4 ${
              project.status === "complete"
                ? "bg-green-100 text-green-700"
                : project.status === "in-progress"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {project.status.replace("-", " ").toUpperCase()}
          </span>

          <h1 className="text-5xl font-bold mb-5 dark:text-white">
            {project.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-8">
            {project.description}
          </p>

        </div>

        {/* Tech */}

        <section className="mt-12">

          <h2 className="text-2xl font-semibold mb-5 dark:text-white">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

        </section>

        {/* Overview */}

        <section className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow">

          <div className="flex items-center gap-3 mb-5">

            <BookOpen className="text-indigo-600" />

            <h2 className="text-3xl font-semibold dark:text-white">
              Overview
            </h2>

          </div>

          <p className="leading-8 text-gray-700 dark:text-gray-300">
            {project.caseStudy.overview}
          </p>

        </section>

        {/* Problem */}

        <section className="mt-10 bg-white dark:bg-gray-800 rounded-xl p-8 shadow">

          <div className="flex items-center gap-3 mb-5">

            <AlertCircle className="text-red-500" />

            <h2 className="text-3xl font-semibold dark:text-white">
              Problem
            </h2>

          </div>

          <p className="leading-8 text-gray-700 dark:text-gray-300">
            {project.caseStudy.problem}
          </p>

        </section>

        {/* Solution */}

        <section className="mt-10 bg-white dark:bg-gray-800 rounded-xl p-8 shadow">

          <div className="flex items-center gap-3 mb-5">

            <Cpu className="text-green-600" />

            <h2 className="text-3xl font-semibold dark:text-white">
              Solution
            </h2>

          </div>

          <p className="leading-8 text-gray-700 dark:text-gray-300">
            {project.caseStudy.solution}
          </p>

        </section>

        {/* Architecture */}

        <section className="mt-10 bg-white dark:bg-gray-800 rounded-xl p-8 shadow">

          <h2 className="text-3xl font-semibold mb-6 dark:text-white">
            Architecture
          </h2>

          <div className="rounded-xl bg-slate-900 text-green-400 font-mono p-8 overflow-auto whitespace-pre-wrap">
            {project.caseStudy.architecture}
          </div>

        </section>

        {/* Challenges */}

        <section className="mt-10 bg-white dark:bg-gray-800 rounded-xl p-8 shadow">

          <h2 className="text-3xl font-semibold mb-6 dark:text-white">
            Challenges
          </h2>

          <ul className="space-y-4">

            {project.caseStudy.challenges.map((challenge) => (

              <li
                key={challenge}
                className="flex items-start gap-3"
              >
                <span className="text-red-500 mt-1">●</span>

                <span className="text-gray-700 dark:text-gray-300">
                  {challenge}
                </span>

              </li>

            ))}

          </ul>

        </section>

        {/* Lessons */}

        <section className="mt-10 bg-white dark:bg-gray-800 rounded-xl p-8 shadow">

          <div className="flex items-center gap-3 mb-6">

            <Lightbulb className="text-yellow-500" />

            <h2 className="text-3xl font-semibold dark:text-white">
              Lessons Learned
            </h2>

          </div>

          <ul className="space-y-4">

            {project.caseStudy.lessons.map((lesson) => (

              <li
                key={lesson}
                className="flex items-start gap-3"
              >
                <span className="text-indigo-500 mt-1">✔</span>

                <span className="text-gray-700 dark:text-gray-300">
                  {lesson}
                </span>

              </li>

            ))}

          </ul>

        </section>

        {/* Buttons */}

        <section className="mt-14 flex flex-wrap gap-4">

          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              <Github size={18} />
              View Source Code
            </a>
          )}

          {project.liveLink && project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

        </section>

      </div>
    </>
  );
};

export default ProjectCaseStudy;