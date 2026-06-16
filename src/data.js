import {
  FaCode,
  FaCodeBranch,
  FaDatabase,
  FaRobot,
  FaServer,
  FaTools
} from "react-icons/fa";

export const techStackCategories = [
  {
    title: "Automation Testing",
    icon: FaRobot,
    items: ["Selenium", "Robot Framework", "Playwright"]
  },
  {
    title: "API Testing",
    icon: FaCodeBranch,
    items: ["Postman", "SoapUI", "GraphQL"]
  },
  {
    title: "Programming & Scripting",
    icon: FaCode,
    items: ["Python", "Groovy", "SQL", "Bash / Linux CLI"]
  },
  {
    title: "Messaging & Data",
    icon: FaDatabase,
    items: ["SQL", "Kafka", "RabbitMQ", "ElasticSearch"]
  },
  {
    title: "CI/CD & QA Tools",
    icon: FaTools,
    items: ["Jenkins", "GitLab", "Jira", "Xray", "Confluence"]
  },
  {
    title: "Monitoring & Infrastructure",
    icon: FaServer,
    items: ["Kibana", "Grafana", "DevTools", "Kubernetes"]
  }
];

export const experience = [
  {
    company: "T-Mobile",
    role: "QA Engineer (Integration & API Validation)",
    period: "Sep 2024 - Present",
    highlights: [
      "Perform manual end-to-end testing of API integrations between internal systems.",
      "Create test scenarios from requirements and implementation documentation.",
      "Validate SOAP and REST services using SoapUI and verify data with SQL queries.",
      "Analyze logs and investigate issues using Linux commands and Kubernetes tools.",
      "Identify defects and collaborate with developers and analysts in Agile teams."
    ]
  },
  {
    company: "Comarch",
    role: "Junior Quality Assurance Engineer",
    period: "Aug 2022 - Aug 2024",
    highlights: [
      "Designed and executed manual test scenarios for web applications, including regression and integration testing.",
      "Prepared test cases based on business and technical requirements.",
      "Performed API testing using GraphQL and Postman.",
      "Developed automated GUI tests using Robot Framework and Selenium.",
      "Investigated issues with DevTools, Kibana, and Grafana, and tracked defects in Jira/Xray."
    ]
  },
  {
    company: "ZMR",
    role: "QA and Documentation Intern",
    period: "Apr 2022 - Jul 2022",
    highlights: [
      "Prepared technical and quality assurance documentation.",
      "Supported validation testing processes and quality checks.",
      "Performed measurements using diagnostic tools.",
      "Worked according to GMP standards and quality procedures."
    ]
  }
];

export const projects = [
  {
    title: "Wow---Memory-Test-Game",
    description: "JavaScript memory game inspired by Warcraft, focused on gameplay logic and interactive UI behavior.",
    github: "https://github.com/Shongini/Wow---Memory-Test-Game",
    demo: "https://github.com/Shongini/Wow---Memory-Test-Game"
  },
  {
    title: "Application-Testing---Comarch-Opaska-Zycia",
    description: "QA-focused project documenting testing approach and practical validation work for a real application context.",
    github: "https://github.com/Shongini/Application-Testing---Comarch-Opaska-Zycia",
    demo: "https://github.com/Shongini/Application-Testing---Comarch-Opaska-Zycia"
  },
  {
    title: "New-Years-Event",
    description: "Python project for managing event information and guest lists, showing practical scripting and data organization.",
    github: "https://github.com/Shongini/New-Years-Event",
    demo: "https://github.com/Shongini/New-Years-Event"
  }
];

export const blogPosts = [
  {
    title: "How I Build Reliable QA Pipelines",
    excerpt: "A practical flow for moving from manual checks to repeatable CI quality gates.",
    date: "2026-04-01"
  },
  {
    title: "Selenium + API Strategy That Actually Scales",
    excerpt: "Balancing E2E and service-level tests to reduce flakes and speed up releases.",
    date: "2026-03-18"
  },
  {
    title: "Validation Mindset in Modern Software Teams",
    excerpt: "What pharma validation taught me about risk-based testing in product teams.",
    date: "2026-02-27"
  }
];
