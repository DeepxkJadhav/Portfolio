export interface ProjectArchitectureComponent {
  name: string;
  role: string;
  tech: string;
}

export interface ProjectArchitectureFlow {
  from: string;
  to: string;
  data: string;
}

export interface ProjectCaseStudy {
  problem: string;
  whyInteresting: string;
  architectureComponents: ProjectArchitectureComponent[];
  dataFlow: ProjectArchitectureFlow[];
  decisions: {
    title: string;
    description: string;
    tradeoff: string;
  }[];
  verification: {
    method: string;
    result: string;
  }[];
  limitations: string[];
  nextMilestones: string[];
}

export interface Project {
  id: string;
  name: string;
  thesis: string;
  category: 'Agentic AI' | 'Supply Chain Security' | 'Browser Systems' | 'Distributed Systems' | 'Cybersecurity ML' | 'Speech & RAG';
  status: 'Production Beta' | 'Research Prototype' | 'Released (v0.1)' | 'Active';
  featured: boolean;
  technologies: string[];
  shortDescription: string;
  githubUrl: string;
  liveUrl?: string;
  releaseUrl?: string;
  metrics?: { label: string; value: string }[];
  caseStudy: ProjectCaseStudy;
}

export interface CapabilityGroup {
  domain: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    evidencedBy: string;
    projectUrl: string;
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  badgeCode?: string;
}

export interface Education {
  institution: string;
  degree: string;
  specialization: string;
  location: string;
  highlights: string[];
}

export interface GitHubRepoSnapshot {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
}
