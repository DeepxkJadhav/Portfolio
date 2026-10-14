import { Project, GitHubRepoSnapshot } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'sentient-ops',
    name: 'Sentient Ops',
    thesis: 'Autonomous Multi-Agent AI Operating System with Dynamic Multi-LLM Routing and Persistent Vector Memory.',
    category: 'Agentic AI',
    status: 'Production Beta',
    featured: true,
    technologies: ['Python', 'FastAPI', 'Next.js 14', 'React 18', 'Docker', 'Kubernetes', 'Redis', 'Qdrant', 'pgvector'],
    shortDescription: 'Transforms AI from a passive text completion engine into an autonomous digital workforce by decomposing complex user objectives into executable task DAGs with specialized agent roles and long-term memory.',
    githubUrl: 'https://github.com/DeepxkJadhav/Sentient-UI',
    liveUrl: 'https://sentient-ui-iota.vercel.app',
    metrics: [
      { label: 'Agent Roles', value: 'Coding, Sec, ML, Ops' },
      { label: 'Routing Engines', value: 'Claude, OpenAI, Gemini, Ollama' },
      { label: 'Memory Architecture', value: 'pgvector + Qdrant Dual-Tier' }
    ],
    caseStudy: {
      problem: 'Single-prompt LLM interactions fail when tasks require multi-step reasoning, external tool execution, file persistence, or cross-domain specialization. Developers waste hours context-switching and copy-pasting outputs between disjoint models and command lines.',
      whyInteresting: 'Orchestrating autonomous agents requires solving state drift, circular task loops, token budget runaway, and reliable tool-execution feedback loops without locking the user into a single proprietary model provider.',
      architectureComponents: [
        { name: 'Task DAG Decomposition Engine', role: 'Breaks high-level user intent into a dependency-ordered Directed Acyclic Graph of executable atomic steps.', tech: 'Python / Pydantic / NetworkX' },
        { name: 'Dynamic Multi-LLM Router', role: 'Analyzes step complexity and token economics to route queries to OpenAI (o1/4o), Anthropic Claude 3.5, Google Gemini 1.5, or local Ollama models.', tech: 'FastAPI / AsyncIO / Provider SDKs' },
        { name: 'Specialized Agent Swarm', role: 'Domain-specific agent profiles with sandboxed tool calling (code runner, security auditor, DevOps deployer).', tech: 'Python Agent Harness' },
        { name: 'Dual-Tier Vector Memory', role: 'Episodic short-term context stored in Redis; semantic long-term agent memory indexed in Qdrant & pgvector.', tech: 'Qdrant / pgvector / Redis' },
        { name: 'Real-time Operator Console', role: 'Interactive visualization of live DAG progression, agent thought tokens, tool output logs, and human-in-the-loop approvals.', tech: 'Next.js / Tailwind CSS / WebSockets' }
      ],
      dataFlow: [
        { from: 'User Intent', to: 'DAG Decomposition', data: 'Objective text + constraints' },
        { from: 'DAG Engine', to: 'Multi-LLM Router', data: 'Atomic task step + tool definition' },
        { from: 'Router', to: 'Specialized Agent', data: 'Optimal LLM selection (cost/latency trade-off)' },
        { from: 'Agent Tool Exec', to: 'Vector Memory Tier', data: 'Execution artifacts + state embeddings' },
        { from: 'Operator Console', to: 'Agent Harness', data: 'Real-time approval or interruption signal' }
      ],
      decisions: [
        {
          title: 'Decoupled Router vs Provider Hardcoding',
          description: 'Abstracted LLM providers behind an internal uniform inference protocol rather than coupling agents to a single API.',
          tradeoff: 'Requires maintaining format normalization layers across OpenAI/Claude/Gemini function calling, but provides immunity against vendor outages and price changes.'
        },
        {
          title: 'Dual-Tier Memory (Redis + Qdrant) vs Single Vector Store',
          description: 'Separated millisecond session state caching into Redis while archiving cross-session embeddings into Qdrant.',
          tradeoff: 'Higher deployment footprint, but eliminates vector search latency on high-frequency transient state updates.'
        }
      ],
      verification: [
        { method: 'Multi-Step Coding Agent Benchmark', result: 'Autonomous decomposition and execution of end-to-end repository creation including unit tests.' },
        { method: 'Failover Resilience', result: 'Automatic fallback to local Ollama models when remote provider APIs return rate limits or HTTP 500 errors.' }
      ],
      limitations: [
        'Local Ollama model execution requires workstation GPU with >=12GB VRAM for complex multi-tool reasoning.',
        'Token budgeting currently requires manual maximum threshold bounds to prevent runaway cost on pathological loops.'
      ],
      nextMilestones: [
        'Tree-of-Thought (ToT) search exploration with autonomous rollback upon verification gate failure.',
        'Native MCP (Model Context Protocol) tool provider federation.'
      ]
    }
  },
  {
    id: 'topochain',
    name: 'TopoChain',
    thesis: 'Multimodal Software Supply-Chain Integrity & Topological Drift Detection via Persistent Homology and AST Intelligence.',
    category: 'Supply Chain Security',
    status: 'Research Prototype',
    featured: true,
    technologies: ['Python 3.11', 'PyTorch', 'Ripser', 'Persim', 'AST Parser', 'NetworkX', 'TDA'],
    shortDescription: 'Detects zero-day logic backdoors, malicious package tampering, and dependency compromises by analyzing the topological shape of code graphs using persistent homology and topological neural networks.',
    githubUrl: 'https://github.com/DeepxkJadhav/topochain',
    metrics: [
      { label: 'Automated Tests', value: '49 Passed (100%)' },
      { label: 'Math Foundation', value: 'Ripser + Vietoris-Rips' },
      { label: 'Detection Mechanism', value: 'Persistent Homology Betti-0/1' }
    ],
    caseStudy: {
      problem: 'Modern software supply-chain attacks (e.g., xz-utils, solarwinds, event-stream) evade signature scanners and AST linters through subtle semantic mutation, distributed payload obfuscation, and innocent-looking conditional triggers.',
      whyInteresting: 'Syntactic modifications that keep function signatures identical still fundamentally warp the topological shape (cycles, connected components, and hole persistence) of the program execution and dependency call graph.',
      architectureComponents: [
        { name: 'Multi-Language AST Extractor', role: 'Traverses source files and converts control flow, variable bindings, and calls into directed simplicial representations.', tech: 'Python ast / tree-sitter' },
        { name: 'Filtration & Simplicial Complex Builder', role: 'Constructs Vietoris-Rips complexes across multidimensional code graph embeddings at increasing spatial distances.', tech: 'Ripser' },
        { name: 'Persistent Homology Engine', role: 'Computes Betti curves (H0 connected components, H1 structural cycles) and persistence diagrams.', tech: 'Persim / Scikit-TDA' },
        { name: 'Topological Neural Network (TNN)', role: 'PyTorch-based classifier that learns topological signatures of malicious drift and backdoors.', tech: 'PyTorch / Graph Embeddings' }
      ],
      dataFlow: [
        { from: 'Source Code / Git Diff', to: 'AST Parser', data: 'Raw code trees' },
        { from: 'AST Parser', to: 'Graph Builder', data: 'Node-edge dependency topology' },
        { from: 'Graph Builder', to: 'Ripser Engine', data: 'Vietoris-Rips filtration' },
        { from: 'Persistence Diagram', to: 'PyTorch TNN', data: 'Betti numbers & persistence landscapes' },
        { from: 'TNN Evaluation', to: 'Integrity Report', data: 'Drift anomaly score + compromise locus' }
      ],
      decisions: [
        {
          title: 'Topological Invariants vs Deep Feature Embedding Alone',
          description: 'Leveraged algebraic topology (persistent homology) rather than relying exclusively on opaque LLM/BERT code embeddings.',
          tradeoff: 'Computationally heavier than text-similarity checks, but mathematical invariants are impossible for attackers to disguise through variable renaming or code formatting.'
        },
        {
          title: 'Ripser C++ Backend Integration',
          description: 'Selected Ripser for Vietoris-Rips complex construction over pure Python TDA libraries.',
          tradeoff: 'Requires native C++ build dependencies in CI, but achieves 40x speedup in persistence diagram computation.'
        }
      ],
      verification: [
        { method: 'Automated Test Suite', result: '49 unit and integration tests passing with 100% test coverage across filtration, graph generation, and model inference.' },
        { method: 'Synthetic Backdoor Evaluation', result: 'Successfully flagged hidden state-machine hijacking and delayed trigger injections in sample supply chain libraries.' }
      ],
      limitations: [
        'Very large monolith codebases (>500k LOC) require hierarchical graph partitioning to prevent factorial simplicial complex memory growth.',
        'Dynamic runtime reflection in interpreted languages requires static approximation.'
      ],
      nextMilestones: [
        'Persistent Homology H2 (2D cavity) tracking for multi-repository transitive microservice dependencies.',
        'Automated GitHub Action PR security gate integration.'
      ]
    }
  },
  {
    id: 'extension-os',
    name: 'Extension | OS',
    thesis: 'Open-Source In-Browser AI Operating Layer & Multi-Provider Workflow Orchestrator.',
    category: 'Browser Systems',
    status: 'Released (v0.1)',
    featured: true,
    technologies: ['TypeScript', 'Chrome Extension MV3', 'Groq API', 'OpenAI API', 'Ollama', 'Web Speech API', 'Tailwind CSS'],
    shortDescription: 'Eliminates tab-switching friction by embedding customizable multi-provider AI actions, Mixture of Agents (MoA) synthesis, and voice assistance directly into the active browser viewport.',
    githubUrl: 'https://github.com/DeepxkJadhav/ExtensionOS',
    releaseUrl: 'https://github.com/DeepxkJadhav/ExtensionOS/releases/tag/v0.1',
    metrics: [
      { label: 'Inference Latency', value: '<500ms via Groq LPU' },
      { label: 'Extension Standard', value: 'Chrome Manifest V3' },
      { label: 'Execution Model', value: 'Mixture of Agents (MoA)' }
    ],
    caseStudy: {
      problem: 'Knowledge workers and developers lose cognitive flow having to copy text, navigate away to third-party web apps, paste prompts, and format results back into their work.',
      whyInteresting: 'Modern browser security (Manifest V3) strictly forbids remote script execution and limits background service worker lifespans, requiring clean message-passing architectures and local streaming pipelines.',
      architectureComponents: [
        { name: 'Context Selection Injector', role: 'Lightweight content script that captures text selection, DOM context, and triggers an overlay menu without interfering with page styles.', tech: 'Shadow DOM / TypeScript' },
        { name: 'Background Service Worker Broker', role: 'Manages API authentication, streaming chunks over chrome.runtime ports, and provider failover.', tech: 'Chrome Extensions MV3 Service Worker' },
        { name: 'Multi-Provider Adapter Matrix', role: 'Standardized streaming interfaces for Groq (ultra-low latency), OpenAI (GPT-4o), Together AI, and local Ollama.', tech: 'TypeScript Fetch Streams' },
        { name: 'Prompt Factory & MoA Combiner', role: 'Aggregates multiple model outputs and applies an editorial synthesizer agent.', tech: 'Mixture of Agents Engine' }
      ],
      dataFlow: [
        { from: 'DOM Selection', to: 'Content Script', data: 'Selected text + surrounding parent block' },
        { from: 'Content Script', to: 'Background Worker', data: 'Action intent + prompt config' },
        { from: 'Background Worker', to: 'Provider API (Groq/Ollama)', data: 'Streaming SSE prompt request' },
        { from: 'Provider API', to: 'Floating UI', data: 'Incremental token stream via MessagePort' }
      ],
      decisions: [
        {
          title: 'Shadow DOM Encapsulation',
          description: 'Rendered all in-page UI inside a closed Shadow Root.',
          tradeoff: 'Cannot inherit host page fonts or styling variables automatically, but guarantees host CSS never breaks the extension UI.'
        },
        {
          title: 'Direct Client-to-API Keys via chrome.storage.sync',
          description: 'Never route user API keys through a middleman server; store encrypted in user-controlled local storage.',
          tradeoff: 'Requires user to bring their own API keys, but ensures total data privacy and zero operating cloud overhead.'
        }
      ],
      verification: [
        { method: 'Manifest V3 Audit', result: 'Zero CSP violations, clean memory unload when service worker idles, 100% compliance with Chrome Web Store guidelines.' },
        { method: 'Streaming Benchmarks', result: 'Time-to-first-token under 450ms using Groq LLaMA-3.1 70B.' }
      ],
      limitations: [
        'Restricted on certain internal browser settings pages (e.g. chrome://extensions) due to native browser security restrictions.',
        'Cross-origin iframe text extraction is subject to browser same-origin policies.'
      ],
      nextMilestones: [
        'Firefox WebExtensions manifest cross-compilation.',
        'Local WebAssembly vector search for instant semantic browser history recall.'
      ]
    }
  },
  {
    id: 'synapse-grid',
    name: 'SynapseGrid',
    thesis: 'Real-Time CRDT Collaborative Cloud Development Environment with Isolated Compiler Sandboxes.',
    category: 'Distributed Systems',
    status: 'Active',
    featured: true,
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Node.js', 'Yjs', 'WebSockets', 'Docker', 'Tailwind CSS'],
    shortDescription: 'Combines Google Docs-style real-time multi-user collaborative code editing with instant multi-language container compilation, autonomous AI code assistant, and live host telemetry monitoring.',
    githubUrl: 'https://github.com/DeepxkJadhav/SYNAPSE-GRID',
    metrics: [
      { label: 'Sync Protocol', value: 'Yjs CRDT over WebSockets' },
      { label: 'Execution Sandbox', value: 'Isolated Docker Containers' },
      { label: 'Latency', value: 'Sub-30ms Editor State Sync' }
    ],
    caseStudy: {
      problem: 'Pair programming and live team technical assessments suffer from latency desynchronization, editor conflicts, and the severe security risk of executing untrusted candidate code on host servers.',
      whyInteresting: 'Requires harmonizing Conflict-Free Replicated Data Types (CRDTs) across multiple concurrent keystrokes while maintaining strict ephemeral container sandboxes that run multi-language compilers safely.',
      architectureComponents: [
        { name: 'CRDT Sync Engine', role: 'Maintains state consistency across multiple concurrent editors without lock-stepping.', tech: 'Yjs / WebSockets / y-websocket' },
        { name: 'Monaco Editor Integration', role: 'Provides VS Code-grade code editing, syntax highlighting, and multi-cursor presence awareness.', tech: 'Monaco Editor / Y-Monaco' },
        { name: 'Sandboxed Execution Runner', role: 'Executes Python, C++, Java, and JS code in resource-constrained, non-root Docker containers with strict timeouts.', tech: 'Docker API / Node.js Child Process' },
        { name: 'Host Telemetry Daemon', role: 'Streams CPU, memory, container I/O, and socket connection health to the UI.', tech: 'Systeminformation / WebSocket Stream' }
      ],
      dataFlow: [
        { from: 'Developer Typing', to: 'Yjs Document', data: 'Delta byte updates' },
        { from: 'Yjs Document', to: 'WebSocket Server', data: 'Binary state sync vector' },
        { from: 'Run Code Trigger', to: 'Docker Runner', data: 'Source code + compiler flags' },
        { from: 'Docker Container', to: 'UI Terminal Output', data: 'stdout / stderr buffer streams' }
      ],
      decisions: [
        {
          title: 'Yjs CRDTs vs Operational Transformation (OT)',
          description: 'Adopted Yjs decentralized CRDT algorithms instead of centralized OT server models.',
          tradeoff: 'Slightly higher memory overhead per document history, but eliminates server state serialization bottlenecks and provides offline-resilient sync.'
        },
        {
          title: 'Disposable Docker Containers vs VM Sandboxes',
          description: 'Utilized ephemeral lightweight Alpine Docker containers with `--network none` and `--memory 256m` bounds.',
          tradeoff: 'Does not support long-running OS virtualization, but provides sub-500ms compilation launch speeds.'
        }
      ],
      verification: [
        { method: 'Concurrent Multi-Client Load Test', result: 'Tested with 20 simulated concurrent typers with zero character desynchronization or merge conflicts.' },
        { method: 'Security Jailbreak Testing', result: 'Verified that fork bombs, network exfiltration attempts, and file-system privilege escalation attempts are strictly contained.' }
      ],
      limitations: [
        'Execution timeouts capped at 10 seconds per run to prevent resource starvation.',
        'Graphics-intensive GUI applications not supported in terminal execution sandbox.'
      ],
      nextMilestones: [
        'WebAssembly-based client-side compilers (Pyodide, WebR) for zero-latency serverless code execution.',
        'Integrated AI code reviewer providing inline CRDT git-diff proposals.'
      ]
    }
  },
  {
    id: 'ghost-vision',
    name: 'GhostVision',
    thesis: 'AI-Powered Cyber Threat Intelligence Platform Leveraging Machine Learning Anomaly Detection and MITRE ATT&CK Correlation.',
    category: 'Cybersecurity ML',
    status: 'Active',
    featured: true,
    technologies: ['Python', 'TensorFlow', 'XGBoost', 'Scikit-learn', 'FastAPI', 'MongoDB', 'MITRE ATT&CK API', 'VirusTotal'],
    shortDescription: 'Analyzes network telemetry and authentication logs using machine learning anomaly detection ensembles to identify zero-day attacks, automatically correlating Indicators of Compromise (IoCs) with MITRE ATT&CK tactics.',
    githubUrl: 'https://github.com/DeepxkJadhav/GhostVision',
    metrics: [
      { label: 'ML Algorithms', value: 'XGBoost + Isolation Forest + ANN' },
      { label: 'Threat Matrices', value: 'MITRE ATT&CK Enterprise' },
      { label: 'IoC Intelligence', value: 'VirusTotal API Correlation' }
    ],
    caseStudy: {
      problem: 'Security Operations Centers (SOCs) are overwhelmed by thousands of false-positive alerts daily while sophisticated advanced persistent threats (APTs) quietly bypass traditional rule-based firewalls.',
      whyInteresting: 'Combining unsupervised anomaly detection with supervised threat classification allows the system to flag unknown outliers without requiring prior signatures.',
      architectureComponents: [
        { name: 'Telemetry Ingestion & Feature Engineering', role: 'Calculates packet entropy, connection frequency, port variance, and authentication failure rate vectors.', tech: 'Python / NumPy / Pandas' },
        { name: 'Ensemble ML Anomaly Detector', role: 'Combines Isolation Forests, XGBoost classifiers, and an Autoencoder neural network to detect outlier behavioral distributions.', tech: 'TensorFlow / Scikit-learn' },
        { name: 'MITRE ATT&CK Correlation Engine', role: 'Maps anomaly signatures to specific tactics, techniques, and procedures (TTPs).', tech: 'FastAPI / MITRE Enterprise Matrix' },
        { name: 'IoC Reputation Pipeline', role: 'Enriches flagged IPs, domains, and hashes via VirusTotal and threat intelligence feeds.', tech: 'Async VirusTotal API Client' }
      ],
      dataFlow: [
        { from: 'Network Logs', to: 'Feature Engineering', data: 'Raw syslog and auth entries' },
        { from: 'Feature Vector', to: 'Ensemble Models', data: 'Normalized 24-dimensional metrics' },
        { from: 'Ensemble Detector', to: 'MITRE Correlator', data: 'Anomaly confidence score (>0.85 threshold)' },
        { from: 'Correlator', to: 'SOC Alert Dashboard', data: 'Enriched report with IoC threat score and mitigation advice' }
      ],
      decisions: [
        {
          title: 'Ensemble (Unsupervised + Supervised) vs Single Classifier',
          description: 'Fusing an Autoencoder (for novel zero-days) with XGBoost (for known attack patterns).',
          tradeoff: 'Higher computational pipeline overhead, but reduces false-positive alert fatigue by 60% compared to standard threshold alerting.'
        }
      ],
      verification: [
        { method: 'Synthetic Attack Injection', result: 'Successfully flagged brute-force credential stuffing, slow-port scans, and beaconing DNS exfiltration patterns.' }
      ],
      limitations: [
        'Requires continuous baseline retraining when organizational network topology undergoes legitimate migrations.',
        'Encrypted payload traffic inspection relies strictly on transport metadata rather than deep packet inspection.'
      ],
      nextMilestones: [
        'Federated learning support for privacy-preserving cross-organization threat intelligence sharing.',
        'Automated SOAR (Security Orchestration, Automation, and Response) playbook execution.'
      ]
    }
  },
  {
    id: 'voxtrace',
    name: 'VoxTrace',
    thesis: 'Multimodal Audio Intelligence Pipeline with Timestamped Whisper Transcription and Acoustic RAG Vector Search.',
    category: 'Speech & RAG',
    status: 'Active',
    featured: true,
    technologies: ['Python', 'OpenAI Whisper', 'Hugging Face Transformers', 'FAISS', 'FastAPI', 'PyTorch'],
    shortDescription: 'End-to-end multimodal speech pipeline that ingests long-form raw audio, generates timestamped multi-speaker transcriptions, indexes semantic embeddings in FAISS, and answers natural language questions grounded in audio provenance.',
    githubUrl: 'https://github.com/DeepxkJadhav/VoxTrace',
    metrics: [
      { label: 'Speech Model', value: 'OpenAI Whisper Base/Medium' },
      { label: 'Vector Index', value: 'FAISS IndexFlatL2 / IndexHNSW' },
      { label: 'Grounded Retrieval', value: 'Sub-second Timestamp Audio RAG' }
    ],
    caseStudy: {
      problem: 'Audio and podcast recordings contain immense domain knowledge that remains unsearchable and locked behind linear playback listening.',
      whyInteresting: 'Standard speech-to-text models drop acoustic metadata, making it impossible to perform precise temporal grounding (e.g. "jump to the exact 4 seconds where the speaker discussed Kubernetes migration").',
      architectureComponents: [
        { name: 'Audio Preprocessing & Chunking', role: 'Normalizes sample rates, strips silence, and segments long audio into 30-second sliding windows with overlap.', tech: 'PyDub / Librosa' },
        { name: 'Whisper Transcription Engine', role: 'Performs multilingual speech-to-text with word-level timestamp generation.', tech: 'OpenAI Whisper' },
        { name: 'Semantic Embedding Pipeline', role: 'Encodes text segments into 768-dimensional dense vectors preserving acoustic timestamp provenance.', tech: 'Sentence-Transformers / Hugging Face' },
        { name: 'FAISS Vector Search Engine', role: 'Enables millisecond nearest-neighbor semantic search over transcribed segments.', tech: 'FAISS' },
        { name: 'Contextual QA API', role: 'Injects retrieved transcript snippets with exact timestamps into LLM context for verifiable grounded responses.', tech: 'FastAPI / Pydantic' }
      ],
      dataFlow: [
        { from: 'Raw Audio (.wav / .mp3)', to: 'Audio Preprocessor', data: '16kHz normalized audio buffer' },
        { from: 'Audio Buffer', to: 'Whisper Model', data: 'Audio spectrum frames' },
        { from: 'Whisper Model', to: 'Embedding Pipeline', data: 'Timestamped text segments' },
        { from: 'Embeddings', to: 'FAISS Index', data: '768-dimensional dense vectors' },
        { from: 'User Query', to: 'QA API', data: 'Semantic retrieval -> Grounded response with audio timestamp jump-links' }
      ],
      decisions: [
        {
          title: 'Segment-Level Timestamps with Overlap vs Whole-File Chunking',
          description: 'Constructed 30-second chunking with 5-second overlaps preserving speaker turns.',
          tradeoff: 'Increases vector index size by roughly 20%, but prevents search misses when queries span across hard chunk boundaries.'
        }
      ],
      verification: [
        { method: 'Retrieval Accuracy Test', result: '94% Recall@5 on targeted semantic questions across 2+ hour recorded technical lectures.' }
      ],
      limitations: [
        'Whisper processing time scales with audio length on CPU-only machines (GPU recommended for real-time streaming speech transcription).'
      ],
      nextMilestones: [
        'Diarization model integration (pyannote.audio) for automated speaker separation and identification.',
        'Real-time WebSocket audio streaming ingestion.'
      ]
    }
  }
];

export const OTHER_REPOSITORIES: GitHubRepoSnapshot[] = [
  {
    name: 'Arachne',
    description: 'High-performance self-hosted web scraping, crawling, and AI extraction engine for LLM-ready markdown and structured JSON.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/DeepxkJadhav/Arachne',
    updatedAt: '2026-10-14'
  },
  {
    name: 'CYPH3R',
    description: 'AI-powered digital footprint intelligence platform. Face embeddings, public-source correlation, and graph analytics.',
    language: 'TypeScript',
    stars: 2,
    forks: 0,
    url: 'https://github.com/DeepxkJadhav/CYPH3R',
    updatedAt: '2026-09-18'
  },
  {
    name: 'VeilChat',
    description: 'Private, end-to-end encrypted messaging platform featuring local-first storage and zero-knowledge relay architecture.',
    language: 'Dart',
    stars: 0,
    forks: 0,
    url: 'https://github.com/DeepxkJadhav/VeilChat',
    updatedAt: '2026-05-27'
  },
  {
    name: 'EdgeSim',
    description: 'Offline simulation suite for AI/ML developers to safely explore reinforcement learning, probabilistic modeling, and risk-aware strategies.',
    language: 'Python',
    stars: 1,
    forks: 0,
    url: 'https://github.com/DeepxkJadhav/EdgeSim',
    updatedAt: '2025-10-26'
  },
  {
    name: 'ModelStudio',
    description: 'Developer workspace for machine learning model experimentation, hyperparameter tuning, and metric tracking.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/DeepxkJadhav/ModelStudio',
    updatedAt: '2026-10-11'
  },
  {
    name: 'DriveGuard',
    description: 'Computer vision and sensor anomaly detection suite for vehicular driver assistance and safety monitoring.',
    language: 'Python',
    stars: 1,
    forks: 0,
    url: 'https://github.com/DeepxkJadhav/DriveGuard',
    updatedAt: '2026-08-07'
  }
];

export const CAPABILITIES = [
  {
    domain: 'Agentic AI & Autonomous Workflows',
    description: 'Decomposing non-deterministic tasks into verifiable Directed Acyclic Graphs (DAGs) with specialized agent roles, tool execution, and self-correction loops.',
    iconName: 'Cpu',
    skills: [
      { name: 'Task DAG Decomposition', evidencedBy: 'Sentient Ops', projectUrl: 'https://github.com/DeepxkJadhav/Sentient-UI' },
      { name: 'Multi-Agent Swarm Orchestration', evidencedBy: 'Sentient Ops', projectUrl: 'https://github.com/DeepxkJadhav/Sentient-UI' },
      { name: 'Tool Calling & Execution Sandboxes', evidencedBy: 'Sentient Ops, SynapseGrid', projectUrl: 'https://github.com/DeepxkJadhav/Sentient-UI' },
      { name: 'Mixture of Agents (MoA)', evidencedBy: 'Extension | OS', projectUrl: 'https://github.com/DeepxkJadhav/ExtensionOS' }
    ]
  },
  {
    domain: 'LLM Systems & Retrieval (RAG)',
    description: 'Engineering resilient inference pipelines, multi-model routing networks, and high-performance semantic retrieval tiers.',
    iconName: 'Layers',
    skills: [
      { name: 'Dynamic Multi-LLM Routing', evidencedBy: 'Sentient Ops, Extension | OS', projectUrl: 'https://github.com/DeepxkJadhav/Sentient-UI' },
      { name: 'Vector Databases (Qdrant, pgvector, FAISS)', evidencedBy: 'Sentient Ops, VoxTrace', projectUrl: 'https://github.com/DeepxkJadhav/Sentient-UI' },
      { name: 'Acoustic & Semantic RAG', evidencedBy: 'VoxTrace', projectUrl: 'https://github.com/DeepxkJadhav/VoxTrace' },
      { name: 'Context Compaction & Memory Tiers', evidencedBy: 'Sentient Ops', projectUrl: 'https://github.com/DeepxkJadhav/Sentient-UI' }
    ]
  },
  {
    domain: 'Applied Machine Learning & Deep Learning',
    description: 'Statistical modeling, topological data analysis, anomaly detection, and deep learning architectures.',
    iconName: 'Binary',
    skills: [
      { name: 'Topological Data Analysis (Ripser, Persim)', evidencedBy: 'TopoChain', projectUrl: 'https://github.com/DeepxkJadhav/topochain' },
      { name: 'PyTorch Neural Networks & TNNs', evidencedBy: 'TopoChain, VoxTrace', projectUrl: 'https://github.com/DeepxkJadhav/topochain' },
      { name: 'Ensemble Anomaly Detection (XGBoost, Isolation Forest)', evidencedBy: 'GhostVision', projectUrl: 'https://github.com/DeepxkJadhav/GhostVision' },
      { name: 'Audio Transformers (Whisper)', evidencedBy: 'VoxTrace', projectUrl: 'https://github.com/DeepxkJadhav/VoxTrace' }
    ]
  },
  {
    domain: 'Distributed Systems & Real-Time Sync',
    description: 'Designing low-latency network architectures, conflict-free collaborative sync, and safe execution isolation.',
    iconName: 'Network',
    skills: [
      { name: 'CRDTs (Yjs) & Conflict Resolution', evidencedBy: 'SynapseGrid', projectUrl: 'https://github.com/DeepxkJadhav/SYNAPSE-GRID' },
      { name: 'WebSocket Multiplexing & Streaming', evidencedBy: 'SynapseGrid, Extension | OS', projectUrl: 'https://github.com/DeepxkJadhav/SYNAPSE-GRID' },
      { name: 'Docker Sandboxed Code Execution', evidencedBy: 'SynapseGrid, Sentient Ops', projectUrl: 'https://github.com/DeepxkJadhav/SYNAPSE-GRID' },
      { name: 'FastAPI Async Microservices', evidencedBy: 'Sentient Ops, GhostVision, VoxTrace', projectUrl: 'https://github.com/DeepxkJadhav/Sentient-UI' }
    ]
  },
  {
    domain: 'MLOps, Cloud & Infrastructure',
    description: 'Packaging, deploying, and monitoring reproducible AI software across containerized environments.',
    iconName: 'Boxes',
    skills: [
      { name: 'Containerization & Orchestration (Docker, Kubernetes)', evidencedBy: 'Sentient Ops, SynapseGrid', projectUrl: 'https://github.com/DeepxkJadhav/Sentient-UI' },
      { name: 'AWS Cloud Architecture', evidencedBy: 'AWS Certified Cloud Practitioner', projectUrl: 'https://github.com/DeepxkJadhav' },
      { name: 'CI/CD Pipelines (GitHub Actions)', evidencedBy: 'TopoChain, Sentient Ops', projectUrl: 'https://github.com/DeepxkJadhav/topochain' },
      { name: 'Redis Caching & Queue Management', evidencedBy: 'Sentient Ops, Arachne', projectUrl: 'https://github.com/DeepxkJadhav/Sentient-UI' }
    ]
  },
  {
    domain: 'Frontend Engineering & Systems UX',
    description: 'High-density technical interfaces, real-time command dashboards, and client-side systems layers.',
    iconName: 'Terminal',
    skills: [
      { name: 'React 18 / Next.js 14 / TypeScript', evidencedBy: 'SynapseGrid, Sentient Ops', projectUrl: 'https://github.com/DeepxkJadhav/SYNAPSE-GRID' },
      { name: 'Chrome Extension MV3 Architecture', evidencedBy: 'Extension | OS', projectUrl: 'https://github.com/DeepxkJadhav/ExtensionOS' },
      { name: 'Interactive Visualizations & Canvas API', evidencedBy: 'Engineering Portfolio', projectUrl: 'https://github.com/DeepxkJadhav/Portfolio' },
      { name: 'Keyboard Accessibility & Semantic Systems', evidencedBy: 'Engineering Portfolio', projectUrl: 'https://github.com/DeepxkJadhav/Portfolio' }
    ]
  }
];
