import {
  FaBug,
  FaFlask,
  FaGitlab,
  FaLinux,
  FaPeopleArrows,
  FaProjectDiagram,
  FaRobot,
  FaServer
} from "react-icons/fa";

export const skills = [
  { name: "Selenium", level: 92, icon: FaBug },
  { name: "Robot Framework", level: 88, icon: FaRobot },
  { name: "SQL", level: 80, icon: FaServer },
  { name: "REST API", level: 90, icon: FaProjectDiagram },
  { name: "Linux", level: 84, icon: FaLinux },
  { name: "Jira", level: 85, icon: FaFlask },
  { name: "GitLab CI", level: 82, icon: FaGitlab },
  { name: "Scrum", level: 89, icon: FaPeopleArrows }
];

export const experience = [
  {
    company: "Ticketmaster",
    role: "Event Creation Specialist",
    period: "Current",
    details: "Created and managed high-traffic event listings with quality and release discipline."
  },
  {
    company: "IGT Poland",
    role: "Operator",
    period: "Previous",
    details: "Handled operational workflows and quality-sensitive production processes."
  },
  {
    company: "Teva / Polfarma / Adamed",
    role: "Validation QA",
    period: "Earlier",
    details: "Validated pharma-related systems and documentation according to strict quality standards."
  }
];

export const projects = [
  {
    title: "API Regression Guard",
    description: "Automated API regression suite with report snapshots and fast smoke runs.",
    github: "https://github.com/",
    demo: "#"
  },
  {
    title: "UI Test Matrix",
    description: "Cross-browser Selenium pack with reusable page objects and CI pipelines.",
    github: "https://github.com/",
    demo: "#"
  },
  {
    title: "VibeCoding QA Assistant",
    description: "Experimental helper to generate and review test cases using AI prompts.",
    github: "https://github.com/",
    demo: "#"
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
