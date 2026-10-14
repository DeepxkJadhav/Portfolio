# Deepak Jadhav — Cinematic Engineering Portfolio

[![GitHub Pages Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://deepxkjadhav.github.io/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

An engineering-first, cinematic personal portfolio presenting **Deepak Jadhav** (`@DeepxkJadhav`) as an **AI Systems Engineer & Autonomous Software Builder**.

**Production Domain:** [https://deepxkjadhav.github.io/](https://deepxkjadhav.github.io/)

---

## ✦ Creative Direction: Engineering After Dark

- **Atmosphere:** Deep near-black background (`#08090B`) paired with graphite structured surfaces (`#111318`) and restrained electric-blue illumination (`#8AA8FF`).
- **Signature Visual:** Custom 60fps computational graph canvas rendering autonomous agent task propagation, Vietoris-Rips simplicial connections, and token routing signals. Zero heavy GPU shader dependencies, with automatic intersection-observer pausing and `prefers-reduced-motion` compliance.
- **Topological Schematics:** Interactive component flow architectures for featured autonomous systems, demonstrating real engineering trade-offs, empirical verification, and failure boundaries.

---

## ✦ Audited Systems & Featured Work

1. **Sentient Ops / Sentient-UI (Flagship)**  
   *Autonomous Multi-Agent AI Operating System with Dynamic Multi-LLM Routing & Persistent Vector Memory.*  
   Decomposes complex objectives into executable task DAGs; dynamic cost/latency routing across OpenAI, Claude, Gemini, and local Ollama models; dual-tier memory with Redis and Qdrant/pgvector.
2. **TopoChain**  
   *Multimodal Software Supply-Chain Integrity & Topological Drift Detection.*  
   Detects zero-day logic backdoors and dependency tampering via persistent homology (Ripser + Persim), AST feature vectorization, and PyTorch Topological Neural Networks. 49 passing automated tests.
3. **Extension | OS**  
   *Open-Source In-Browser AI Operating Layer & Multi-Provider Workflow Orchestrator.*  
   Manifest V3 Chrome extension embedding sub-500ms Groq/OpenAI inference, Mixture of Agents (MoA) synthesis, and contextual viewport selection menus.
4. **SynapseGrid**  
   *Real-Time CRDT Collaborative Cloud Development Environment with Container Sandboxes.*  
   Pair programming IDE powered by Yjs CRDT synchronization, Monaco Editor, isolated Docker multi-language compilation sandboxes, and live telemetry.
5. **GhostVision**  
   *AI-Powered Cyber Threat Intelligence Platform.*  
   Machine learning anomaly detection (XGBoost, Isolation Forest, Autoencoder), MITRE ATT&CK enterprise tactic mapping, and VirusTotal IoC scoring.
6. **VoxTrace**  
   *Multimodal Audio Intelligence Pipeline with Acoustic RAG.*  
   OpenAI Whisper speech-to-text with word-level timestamps, Hugging Face dense semantic embeddings, and FAISS nearest-neighbor vector retrieval.

---

## ✦ Getting Started Locally

### Prerequisites

- **Node.js**: v20+ or v22+
- **npm**: v10+

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/DeepxkJadhav/Portfolio.git
cd portfolio

# Install locked dependencies
npm ci

# Start local development server
npm run dev
```

Visit `http://localhost:5173` to inspect the site.

---

## ✦ Verification & Production Build

Run the automated quality assurance suite:

```bash
# Typecheck & verify strict TypeScript rules
npm run lint

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ✦ Automated GitHub Pages Deployment

The repository is configured with an automated GitHub Actions CI/CD pipeline at `.github/workflows/deploy.yml`:

- **Trigger:** On push to `main` branch or manual `workflow_dispatch`.
- **Pipeline:** Runs clean checkout, Node.js 22 toolchain setup, `npm ci`, TypeScript typecheck (`npm run lint`), production build (`npm run build`), and deployments via official `actions/deploy-pages@v4`.
- **Target URL:** `https://deepxkjadhav.github.io/`

---

## ✦ Research Dossier

For complete verified credentials, educational transcripts, and repository audit history, see [docs/PORTFOLIO_RESEARCH.md](docs/PORTFOLIO_RESEARCH.md).
