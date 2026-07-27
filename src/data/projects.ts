export interface Project {
    slug: string;
    title: string;
    description: string;
    github: string;
    liveLink?: string;
    image: string;
    tech: string[];
    status: "complete" | "coming-soon" | "in-progress";
    caseStudy: {
      overview: string;
      problem: string;
      solution: string;
      architecture: string;
      challenges: string[];
      lessons: string[];
    };
  }
  
  export const projects: Project[] = [
    {
      slug: "liveauth",
      title: "LiveAuth",
      description:
        "A production-style authentication microservice implementing stateless JWT authentication, refresh token rotation, role-based access control, Redis-backed token management, and containerized deployment.",
      github: "https://github.com/Likeabishop/LiveAuth",
      liveLink: "",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      tech: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
      status: "in-progress",
      caseStudy: {
        overview:
          "LiveAuth is a standalone authentication microservice built to demonstrate production-ready authentication patterns for distributed systems.",
        problem:
          "Modern applications require centralized authentication that can be reused across multiple services while remaining secure, scalable, and stateless.",
        solution:
          "The service issues JWT access tokens, rotates refresh tokens, stores token state in Redis, and enforces role-based authorization using Spring Security.",
        architecture:
          "React Client → API Gateway → LiveAuth → PostgreSQL + Redis",
        challenges: [
          "Designing stateless authentication.",
          "Implementing secure refresh token rotation.",
          "Managing revoked tokens with Redis.",
          "Securing endpoints using role-based authorization.",
        ],
        lessons: [
          "JWTs require proper revocation strategies.",
          "Redis greatly improves authentication performance.",
          "Authentication should be isolated into its own microservice.",
        ],
      },
    },
  
    {
      slug: "local-news-articles",
      title: "Local News Articles",
      description:
        "A real-time social platform built with React and Django featuring authentication, WebSocket messaging, and interactive community engagement.",
      github: "https://github.com/Likeabishop/Local-News-Articles",
      liveLink: "",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1000&q=80",
      tech: ["React", "Django", "MySQL", "Tailwind CSS", "WebSockets"],
      status: "complete",
      caseStudy: {
        overview:
          "A full-stack community platform allowing users to share and discuss local news while communicating in real time.",
        problem:
          "Traditional news websites rarely encourage community interaction or live discussion.",
        solution:
          "Built a responsive React frontend with a Django REST backend and integrated WebSockets for real-time communication.",
        architecture:
          "React → Django REST API → MySQL → Django Channels (WebSockets)",
        challenges: [
          "Maintaining persistent WebSocket connections.",
          "Synchronizing frontend state.",
          "Managing authentication across REST and WebSocket protocols.",
        ],
        lessons: [
          "Real-time applications require thoughtful state management.",
          "WebSockets significantly improve user engagement.",
          "Separating API and real-time communication simplifies architecture.",
        ],
      },
    },
  
    {
      slug: "tenalink",
      title: "TenaLink",
      description:
        "A property management platform designed to streamline communication and operations between landlords and tenants.",
      github: "https://github.com/Likeabishop/TenaLink",
      liveLink: "",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80",
      tech: [
        "Spring Boot",
        "React",
        "Tailwind CSS",
        "MySQL",
        "JWT",
      ],
      status: "in-progress",
      caseStudy: {
        overview:
          "TenaLink modernizes property management by digitizing communication, rent management, maintenance requests, and tenant administration.",
        problem:
          "Many landlords still rely on fragmented communication channels and manual processes.",
        solution:
          "Developed a centralized web platform where landlords and tenants interact through a secure dashboard.",
        architecture:
          "React → Spring Boot → MySQL",
        challenges: [
          "Supporting multiple user roles.",
          "Designing scalable domain models.",
          "Building intuitive workflows.",
        ],
        lessons: [
          "Domain-driven design improves maintainability.",
          "User experience is critical in property management software.",
        ],
      },
    },
  
    {
      slug: "entrada",
      title: "Entrada",
      description:
        "A secure event booking and ticket management platform designed using a microservices architecture.",
      github: "https://github.com/Likeabishop/Entrada",
      liveLink: "",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
      tech: [
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "JWT",
        "Docker",
      ],
      status: "in-progress",
      caseStudy: {
        overview:
          "Entrada enables users to browse events, purchase tickets, and manage bookings through a scalable backend architecture.",
        problem:
          "Event organizers need secure ticket issuance while users expect a seamless booking experience.",
        solution:
          "Designed independent backend services responsible for booking, authentication, and ticket management.",
        architecture:
          "React → API Gateway → Booking Service → Authentication Service → PostgreSQL",
        challenges: [
          "Maintaining booking consistency.",
          "Designing scalable service boundaries.",
          "Managing authentication across services.",
        ],
        lessons: [
          "Microservices improve maintainability when bounded contexts are respected.",
          "Booking workflows require careful transactional design.",
        ],
      },
    },
  
    {
      slug: "contextos-ingestion",
      title: "ContextOS Ingestion",
      description:
        "An ingestion service responsible for processing and preparing documents for downstream AI workflows.",
      github: "https://github.com/Likeabishop/ContextOS-Ingestion",
      liveLink: "",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
      tech: [
        "Java",
        "Spring Boot",
        "Docker",
        "REST API",
      ],
      status: "in-progress",
      caseStudy: {
        overview:
          "ContextOS Ingestion processes incoming documents and prepares structured data for AI-powered applications.",
        problem:
          "AI systems require consistent, validated, and structured input before downstream processing.",
        solution:
          "Developed a dedicated ingestion pipeline responsible for validating, transforming, and storing incoming content.",
        architecture:
          "Client → Ingestion API → Processing Pipeline → Storage",
        challenges: [
          "Handling malformed input.",
          "Ensuring scalable document processing.",
          "Designing extensible ingestion workflows.",
        ],
        lessons: [
          "Dedicated ingestion services simplify downstream AI systems.",
          "Validation early in the pipeline reduces operational complexity.",
        ],
      },
    },
  
    {
      slug: "music-platform",
      title: "Music Updates Platform",
      description:
        "A platform where artists publish releases and fans stay informed through personalized feeds.",
      github: "#",
      liveLink: "",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=80",
      tech: [
        "React",
        "FastAPI",
        "Python",
        "PostgreSQL",
      ],
      status: "coming-soon",
      caseStudy: {
        overview: "Currently under development.",
        problem: "To be documented.",
        solution: "To be documented.",
        architecture: "Coming soon.",
        challenges: [],
        lessons: [],
      },
    },
  
    {
      slug: "ride-hailing-platform",
      title: "Ride-Hailing Logistics Platform",
      description:
        "A geospatial logistics platform supporting drivers, riders, and route optimization.",
      github: "#",
      liveLink: "",
      image:
        "https://images.unsplash.com/photo-1556122071-e404eaedb77f?auto=format&fit=crop&w=1000&q=80",
      tech: [
        "React",
        "FastAPI",
        "Python",
        "Maps API",
      ],
      status: "coming-soon",
      caseStudy: {
        overview: "Currently under development.",
        problem: "To be documented.",
        solution: "To be documented.",
        architecture: "Coming soon.",
        challenges: [],
        lessons: [],
      },
    },
  ];