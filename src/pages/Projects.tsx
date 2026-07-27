import { ExternalLink, Github } from "lucide-react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  useDocumentTitle('Projects');

  const navigate = useNavigate();

    return (
      <section id="projects" className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.status === 'coming-soon' ? (
                      <>
                        <span className="flex items-center text-gray-400 dark:text-gray-600 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Coming Soon
                        </span>
                        <span className="flex items-center text-gray-400 dark:text-gray-600 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                          <Github className="w-4 h-4 mr-1" />
                          Coming Soon
                        </span>
                      </>
                    ) : (
                      <>
                        <a
                          href={project.liveLink}
                          onClick={() => navigate(`/projects/${project.slug}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          onClick={() => navigate(`/projects/${project.slug}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
    )
}

export default Projects;