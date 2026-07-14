export const profile = {
  name: "Ahmad Shahbaz",
  role: "DevOps Engineer",
  tagline: "I containerize, orchestrate, and automate the path from commit to production.",
  location: "Lahore, Pakistan",
  email: "ahmadwa744@gmail.com",
  resumeUrl: "/Ahmad_Shahbaz_Resume.pdf",
  avatarUrl: "/images/ahmad.png",
  initials: "AS",
  socials: {
    github: "https://github.com/ahmadionic",
    linkedin: "https://www.linkedin.com/in/ahmad-shahbaz-dev/",
    fiverr: "https://www.fiverr.com/s/Ker9RoY",
    upwork: "https://www.upwork.com/freelancers/~011b1a22f0dd240ec5?mp_source=share",
  },
};

export const stats = [
  { label: "Years in DevOps", value: "1+" },
  { label: "Deployed pipelines", value: "5+" },
  { label: "Uptime target", value: "99.9%" },
];

export const stack = [
  { name: "Docker", category: "Containers" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Helm", category: "Orchestration" },
  { name: "ArgoCD", category: "GitOps" },
  { name: "Terraform", category: "IaC" },
  { name: "AWS (ECR, EC2)", category: "Cloud" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "Linux", category: "OS" },
  { name: "Nginx / Ingress", category: "Networking" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Grafana", category: "Observability" },
  { name: "React.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
];

export const floatingStack = [
  "docker",
  "kubernetes",
  "aws",
  "github",
  "react",
  "nodejs",
  "mongodb",
  "githubactions",
  "nginx",
  "prometheus",
  "grafana",
];

export const featuredProject = {
  name: "CafeFresco",
  subtitle: "Full-stack app — complete production-ready DevOps pipeline",
  description:
    "A complete production-ready pipeline built end to end: containerized the application with Docker, pushed images to AWS ECR, and deployed on Kubernetes running on EC2. GitHub Actions handles CI/CD from commit to rollout, Ingress manages routing, and Prometheus + Grafana provide live monitoring and dashboards.",
  highlights: [
    { label: "Containerization", detail: "Dockerized app + services" },
    { label: "Registry", detail: "AWS ECR image pipeline" },
    { label: "Compute", detail: "AWS EC2 + Kubernetes" },
    { label: "CI/CD", detail: "GitHub Actions, commit → deploy" },
    { label: "Routing", detail: "Ingress-based traffic management" },
    { label: "Observability", detail: "Prometheus + Grafana dashboards" },
  ],
  status: "deployed",
  links: {
    repo: "https://github.com/ahmadionic/cafeFresco-fullstack",
    demo: "",
  },
};

export const otherProjects = [
  {
    name: "Real Estate Lambda Migration",
    description:
      "Migrated a real estate platform's backend to serverless — TypeScript on the Serverless Framework, PostgreSQL on Neon, with GitHub Actions handling deployment.",
    tags: ["TypeScript", "Serverless Framework", "PostgreSQL", "GitHub Actions"],
  },
  {
    name: "POS System — Next.js / Prisma",
    description:
      "Point-of-sale system deployed with Docker and Nginx on EC2, CI/CD wired through GitHub Actions.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Docker", "Nginx", "EC2"],
  },
];

export const experience = [
  {
    title: "DevOps Engineer (Freelance)",
    org: "Fiverr / Upwork",
    date: "Ongoing",
    description:
      "Delivering CI/CD pipelines, containerization, and cloud deployment services to independent clients.",
  },
  {
    title: "Technical Trainer",
    org: "Independent — Modern Software Development & AI Workflows",
    date: "Ongoing",
    description:
      "Delivering a 17-session course covering SDLC, dev environments, AI agents, multi-agent systems, context engineering, and Cursor AI.",
  },
  {
    title: "DevOps Intern",
    org: "Fantech Labs",
    date: "Completed",
    description:
      "Hands-on internship focused on deployment pipelines and infrastructure practices.",
  },
  {
    title: "B.S. Information Technology",
    org: "University of Okara",
    date: "Final year",
    description: "Coursework and final year project (CafeFresco) centered on DevOps infrastructure.",
  },
];

export const terminalLines = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "ahmad-shahbaz" },
  { type: "cmd", text: "kubectl get pods" },
  { type: "out", text: "Running" },
  { type: "cmd", text: "docker ps" },
  { type: "out", text: "Containers healthy" },
  { type: "cmd", text: "terraform apply" },
  { type: "out", text: "Infrastructure updated" },
];
