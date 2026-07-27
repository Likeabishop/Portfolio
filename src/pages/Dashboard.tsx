import React from 'react';
import Hero from './Hero';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Helmet } from "react-helmet-async";

const Dashboard: React.FC = () => {
  useDocumentTitle('Welcome');

  return (
    <div>
      <Helmet>

        <title>
            Karabo Tebeila | Java Backend Engineer
        </title>

        <meta
            name="description"
            content="Java Backend Engineer specializing in Spring Boot, Kafka, Redis, AI integrations and distributed systems."
        />

        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Karabo Tebeila",
                "url": "https://justkarabo.xyz",
                "jobTitle": "Software Engineer",
                "alumniOf":"Tshwane University of Technology",
                "description":
                    "Java Backend Engineer specializing in Spring Boot, Kafka, Redis, AI and distributed systems.",

                "sameAs": [
                    "https://github.com/Likeabishop",
                    "https://www.linkedin.com/in/karabo-tebeila-90881331b"
                ],

                "knowsAbout": [
                    "Java",
                    "Spring Boot",
                    "Kafka",
                    "Redis",
                    "React",
                    "TypeScript",
                    "Artificial Intelligence",
                    "Blockchain",
                    "Microservices"
                ]
            })}
        </script>

        </Helmet>
      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default Dashboard;