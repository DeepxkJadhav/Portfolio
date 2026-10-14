import { Certification, Education } from '../types';

export const PROFILE = {
  name: "Deepak Jadhav",
  handle: "DeepxkJadhav",
  title: "AI Systems Engineer & Autonomous Software Builder",
  headline: "BUILDING INTELLIGENT SYSTEMS.",
  tagline: "AI systems engineer focused on building autonomous agent workflows, topological code security, and the resilient infrastructure that makes LLMs reliable.",
  email: "deepak.s.jadhav07@gmail.com",
  github: "https://github.com/DeepxkJadhav",
  location: "Ahilyanagar, India",
  timezone: "IST (UTC+5:30)",
  availability: "Available for high-impact AI systems engineering & autonomous agent infrastructure roles",

  about: [
    "I design and build software systems at the intersection of Generative AI, autonomous agents, and systems infrastructure. Rather than treating Large Language Models as simple text completion endpoints, I engineer deterministic orchestration loops, dynamic multi-model routing networks, and persistent vector memory tiers that enable models to act as reliable operational engines.",
    "My engineering work spans multi-agent operating systems (Sentient Ops), topological software supply-chain drift detection (TopoChain), in-browser multi-provider LLM layers (Extension | OS), and real-time collaborative development sandboxes (SynapseGrid).",
    "I hold a Bachelor of Technology in Computer Science & Engineering with an Artificial Intelligence specialization from Parul University, paired with certifications from AWS and IBM."
  ],

  philosophy: [
    {
      number: "01",
      principle: "Ground Abstractions in Concrete Failure Modes",
      detail: "Avoid hypothetical system architectures. Analyze where LLM context drift occurs, where tool calls fail, where container sandboxes leak memory, and build defenses around those observable limits."
    },
    {
      number: "02",
      principle: "Deterministic Orchestration for Stochastic Engines",
      detail: "While model outputs are probabilistic, agent workflows, task DAGs, verification gates, and state machines must remain strictly deterministic and auditable."
    },
    {
      number: "03",
      principle: "Structural & Topological Verification Over Heuristics",
      detail: "Regex and keyword scans fail against modern supply-chain compromises. Persistent homology, AST invariance, and algebraic topology provide verifiable geometric proof of program integrity."
    },
    {
      number: "04",
      principle: "Measure Bounds: Latency, Tokens, and Memory",
      detail: "Engineering judgment requires profiling Time-To-First-Token (TTFT), context compression loss, container startup latency, and memory footprint before claiming production readiness."
    },
    {
      number: "05",
      principle: "Evidence Over Assertion",
      detail: "Every capability, benchmark, and architectural claim must be verifiable through passing test suites, reproducible codebases, and inspectable Git provenance."
    }
  ],

  education: {
    institution: "Parul University",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    specialization: "Artificial Intelligence Specialization",
    location: "Vadodara / Gujarat, India",
    highlights: [
      "Rigorous coursework in Advanced Machine Learning, Neural Networks, Distributed Systems, and Data Structures",
      "Specialized research in Autonomous Agent Task Decomposition and Topological Data Analysis for Software Security",
      "Core languages: Python, TypeScript, C++, and SQL"
    ]
  } as Education,

  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      badgeCode: "CLF-C02"
    },
    {
      title: "IBM AI Engineering Professional Certificate",
      issuer: "IBM",
      badgeCode: "AI-ENG-PROF"
    }
  ] as Certification[],

  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Native / Bilingual" },
    { name: "Japanese", level: "Basic / Elementary" }
  ]
};
