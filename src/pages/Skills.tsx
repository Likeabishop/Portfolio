import { Code2, Cloud, Shield, Server, Database, Box, GitBranch } from "lucide-react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Skills = () => {
    useDocumentTitle('Skills');

    const skills = [
        // Cloud & Containerization (Your new expertise)
        { name: 'Docker', level: 75, icon: Box, category: 'cloud', description: 'Containerized JWT auth service with multi-container setup' },
        { name: 'Container Orchestration', level: 60, icon: Box, category: 'cloud', description: 'Docker Compose, networking, volume management' },
        { name: 'Cloud Deployment', level: 55, icon: Cloud, category: 'cloud', description: 'AWS fundamentals, preparing for production deployment' },
        
        // Backend & Security (Your strengths)
        { name: 'Java', level: 80, icon: Code2, category: 'backend', description: 'Core language for enterprise applications' },
        { name: 'Spring Boot', level: 75, icon: Server, category: 'backend', description: 'Built production-ready JWT auth service' },
        { name: 'Spring Security', level: 70, icon: Shield, category: 'backend', description: 'JWT authentication, role-based access control' },
        { name: 'JWT Authentication', level: 75, icon: Shield, category: 'backend', description: 'Complete auth flow with refresh tokens & blacklisting' },
        { name: 'REST APIs', level: 75, icon: Server, category: 'backend', description: 'Designed and implemented secure API endpoints' },
        
        // Database
        { name: 'PostgreSQL', level: 70, icon: Database, category: 'database', description: 'Production database for auth service' },
        { name: 'Redis', level: 65, icon: Database, category: 'database', description: 'Token blacklisting and caching' },
        { name: 'SQL', level: 70, icon: Database, category: 'database', description: 'Complex queries, joins, optimization' },
        
        // Frontend (Your existing skills)
        { name: 'React', level: 75, icon: Code2, category: 'frontend', description: 'Component architecture, hooks, state management' },
        { name: 'TypeScript', level: 70, icon: Code2, category: 'frontend', description: 'Type-safe development' },
        { name: 'TailwindCSS', level: 70, icon: Code2, category: 'frontend', description: 'Responsive UI development' },
        
        // DevOps & Tools
        { name: 'Git/GitHub', level: 75, icon: GitBranch, category: 'tools', description: 'Version control, collaboration' },
        { name: 'CI/CD', level: 55, icon: GitBranch, category: 'tools', description: 'Preparing for GitHub Actions pipeline' },
        { name: 'Data Structures & Algorithms', level: 70, icon: Code2, category: 'fundamentals', description: 'Problem-solving foundation' },
    ];

    // Group skills by category
    const categories = [
        { id: 'cloud', name: '☁️ Cloud & Containerization', color: 'text-sky-600' },
        { id: 'backend', name: '⚙️ Backend & Security', color: 'text-indigo-600' },
        { id: 'database', name: '🗄️ Database', color: 'text-emerald-600' },
        { id: 'frontend', name: '🎨 Frontend', color: 'text-purple-600' },
        { id: 'tools', name: '🛠️ DevOps & Tools', color: 'text-amber-600' },
        { id: 'fundamentals', name: '📚 Computer Science', color: 'text-rose-600' },
    ];

    return (
        <section id="skills" className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Technical Skills
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Currently building cloud-native applications with Docker containerization 
                and preparing for AWS deployment. My JWT authentication service demonstrates 
                production-ready backend development with modern security practices.
            </p>

            {categories.map((category) => {
                const categorySkills = skills.filter(s => s.category === category.id);
                if (categorySkills.length === 0) return null;

                return (
                    <div key={category.id} className="mb-8">
                        <h3 className={`text-xl font-semibold ${category.color} dark:text-white mb-4`}>
                            {category.name}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {categorySkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border-l-4 border-indigo-500"
                                >
                                    <div className="flex items-start mb-3">
                                        <skill.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {skill.name}
                                            </h3>
                                            {skill.description && (
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                    {skill.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                        <div
                                            className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-500"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 inline-block">
                                        {skill.level}% Proficiency
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}

            {/* Cloud Journey Highlight */}
            <div className="mt-8 bg-gradient-to-r from-indigo-50 to-sky-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    ☁️ Current Cloud Journey
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                    Built and containerized a complete JWT authentication service with Docker. 
                    Now preparing for AWS deployment with:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400 list-disc list-inside">
                    <li>Container orchestration with Docker Compose</li>
                    <li>Environment-based configuration for dev/prod</li>
                    <li>Preparing CI/CD pipeline with GitHub Actions</li>
                    <li>Planning AWS deployment (EC2, RDS, ElastiCache)</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;