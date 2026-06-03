import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 8 Project placeholders with array-based case study points matching the mockup
const initialProjects = [
  {
    id: 1,
    title: "LifeLineAI: AI-Powered ECG Descriptor",
    badge: "FINAL YEAR PROJECT",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", // Blue for Medical/Tech
    desc: "Architected an end-to-end multimodal platform translating raw ECG images into clinical text using Reinforcement Learning, image enhancement, and signal digitization.",
    githubUrl: "https://github.com/Asad939asad/LifeLine.ai-",
    liveUrl: "https://lifeline-ai-ex2i.vercel.app/",
    videoUrl: "./fyp-demo.mp4",
    challenges: [
      "Extracting clean, machine-readable signals from noisy, unstandardized raw ECG images.",
      "Curating and processing a massive custom dataset of 100,000 ECG images sourced from PhysioNet.",
      "Ensuring the generated diagnostic reports strictly aligned with precise medical terminology and clinical standards."
    ],
    solution: [
      "Engineered a multi-stage computer vision pipeline for image segmentation, enhancement, and signal digitization.",
      "Fine-tuned a Large Language Model on the curated dataset to accurately map visual signal data to textual descriptions.",
      "Implemented a Reinforcement Learning (RL) optimization loop to continuously refine text outputs based on clinical accuracy."
    ],
    impact: [
      "Secured 1st Position at the Industrial Open House for Final Year Projects.",
      "Automated the complex translation of visual diagnostic data into actionable NLP-based medical insights.",
      "Created a highly scalable pipeline capable of bridging multimodal AI (Vision and Text) for healthcare applications."
    ]
  },
  {
    id: 2,
    title: "TEXBase Multi-Agentic System",
    badge: "MULTI AGENTIC SYSTEM",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #2563eb 100%)", // Indigo/Blue
    desc: "Developed a multi-agentic system for managing B2B textile trade, integrating LangGraph-based email drafting, PO price predictions, and commodity market intelligence with robust quality gates.",
    githubUrl: "https://github.com/Asad939asad/Texbase---Multi-Agentic-Email-Management-System",
    videoUrl: "./2.mov",
    challenges: [
      "Handling multi-turn conversational memory and preventing persona/role 'amnesia' during iterative email drafts in LangGraph.",
      "Extracting purchase order (PO) details from low-resolution PDF/image scans with severe latency bottlenecks (up to 12.4s per OCR/LLM query).",
      "Enforcing strict quality gates (faithfulness, answer relevancy, and tool call accuracy) in CI/CD before deployment to prevent critical hallucinations in B2B communications."
    ],
    solution: [
      "Designed a dynamic context injection layer utilizing few-shot prompting and Pydantic validators to lock in user persona constraints.",
      "Engineered a parallelized OCR + Gemini Vision pipeline using asyncio to reduce processing latency by 33% (from 12.4s to 8.0s).",
      "Built an automated LLM-as-a-Judge evaluation harness running 40 quality gates in GitHub Actions to block builds failing safety thresholds."
    ],
    impact: [
      "Achieved 93.6% Tool Call Accuracy and 92.4% Faithfulness, comfortably passing production thresholds (0.80 and 0.70 respectively).",
      "Reduced PO parsing critical path latency by 33% using concurrent asynchronous processing.",
      "Implemented an end-to-end feedback logger to systematically capture user feedback, tracking semantic drift across 42 active deployment trials."
    ]
  },
  {
    id: 3, // Adjust ID based on your portfolio order
    title: "Minutes.ai",
    badge: "AGENTIC AI",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)", // Indigo/Purple
    desc: "Intelligent meeting assistant providing low-latency real-time transcription, automated summaries, action-item tracking, and natural-language database querying.",
    githubUrl: "https://github.com/Asad939asad/Minutes-AI----Live-Meeting-Assistance-App", // Adjust to your repository link
    // liveUrl: "https://example.com", // Adjust to your deployment link
    videoUrl: "./Tricon-Video.mp4",
    challenges: [
      "Handling real-time audio chunking and low-latency transcription stream management over WebSocket connections.",
      "Translating open-ended natural language requests into safe, executable, and valid SQL queries on SQLite without schema corruption.",
      "Enforcing strict JSON output structures from LLMs to ensure reliable frontend parsing of multi-speaker transcripts and summaries.",
      "Translating complex, nested data structures (summaries, key points, action items) dynamically without losing structural keys or date formatting."
    ],
    solution: [
      "Engineered an asynchronous, dual-stream WebSocket handler backed by thread-safe queues and AssemblyAI's real-time transcription API.",
      "Integrated OpenAI's GPT-4o-mini as a code-generating agent, wrapping SQLite queries in database transactions with automatic rollback on failure.",
      "Leveraged Gemini 1.5 Flash with highly structured instructions and schema fallback systems to reliably format transcript analysis.",
      "Built a recursive translation pipeline using asynchronous translators to convert UI content into multiple languages while preserving JSON formatting."
    ],
    impact: [
      "Reduced post-meeting documentation overhead and manual minute-writing by more than 80% for collaborative teams.",
      "Enabled non-technical stakeholders to instantly query meeting databases and generate insights using plain English instead of SQL queries.",
      "Improved task accountability by auto-extracting structured action items, assignees, and target due dates directly from audio.",
      "Streamlined global collaboration by allowing international teams to translate and read transcripts in their native languages."
    ]
  },
  {
    id: 4,
    title: "TextileNexus",
    badge: "WEB3 & SUPPLY CHAIN",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)", // Indigo to Purple
    desc: "A decentralized tracking and auditing dApp for textile supply chains, using Solidity smart contracts, multi-sig administration, and a dynamic actor reputation system.",
    githubUrl: "https://github.com/Asad939asad/Decentralized-Textile-System",
    liveUrl: "https://github.com/Asad939asad/Decentralized-Textile-System",
    videoUrl: "./screenshot-2026-04-30-at-114508-pm_fDNoUORA.mp4",
    challenges: [
      "Managing complex multi-stage production workflows (Spinning to Dispatch) while remaining under the Ethereum 24KB smart contract size limit.",
      "Preventing fraudulent supply chain records and ensuring only verified actors execute specific role-based operations.",
      "Coordinating secure transit dispatches across three distinct departments (Origin, Logistics, Finance) to prevent single-point-of-failure errors.",
      "Ensuring immutable quality assurance tracking for raw materials and batches without relying on centralized databases."
    ],
    solution: [
      "Decoupled heavy processing logic into modular libraries (TextileLogic) and shared type schemas (TextileTypes) to optimize bytecode size.",
      "Enforced fine-grained, gas-efficient modifiers with custom error definitions to bypass expensive Solidity string revert overhead.",
      "Implemented a multi-party consensus gate for dispatch orders, requiring cryptographic sign-offs from three independent departments.",
      "Built a state-driven quality control protocol and a real-time reputation engine that dynamically increments or decrements actor trust scores."
    ],
    impact: [
      "Achieved complete, tamper-proof transparency for textile batch custody and transit checkpoints from raw fiber to retail store.",
      "Enabled secure decentralized governance over actor registrations and thresholds using a 2-of-3 multi-sig council structure.",
      "Optimized transaction gas consumption significantly by implementing library delegation and custom error gas-saving techniques.",
      "Mitigated supply chain fraud by automatically deactivating bad actors and applying score penalties for failed quality checks."
    ]
  },

  {
    id: 6,
    title: "Parallel Graph Benchmarks",
    badge: "HIGH-PERFORMANCE",
    gradient: "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)", // Indigo to Blue
    desc: "A high-performance benchmark suite implementing sequential and parallel graph algorithms in C using OpenMP, optimized with lock-free atomic structures and CSR representation for processing massive scale-free datasets.",
    githubUrl: "https://github.com/Asad939asad/Parallel-Graph-Benchmarks",
    liveUrl: "https://github.com/Asad939asad/Parallel-Graph-Benchmarks",
    videoUrl: "./banner_xubKBMNW.mp4",
    challenges: [
      "Graph representation overhead: Classic adjacency lists caused extensive L1/L2 cache misses and pointer-chasing latency when processing large-scale graphs with 50M+ vertices.",
      "Atomic updates bottleneck: Parallel cheapest-edge determination in Borůvka's algorithm suffered from heavy thread contention when using standard mutexes or critical sections.",
      "Frontier density imbalance: BFS traversals on scale-free graphs generated massive, irregular search frontiers that overloaded thread-local queues and caused severe workload imbalance.",
      "DSU race conditions: Implementing path compression in the disjoint-set union (DSU) structure concurrently led to race conditions and corrupt parent-child tree linkages."
    ],
    solution: [
      "Converted graph storage to Compressed Sparse Row (CSR) layout with cache-line aligned allocations to maximize CPU cache utility and spatial data locality.",
      "Implemented a lock-free Compare-And-Swap (CAS) update mechanism, packing 32-bit edge weights and indices into single 64-bit atomic words using __sync_bool_compare_and_swap.",
      "Designed a Hybrid BFS switching dynamically between Top-Down (pushing values) and Bottom-Up (pulling values) traversal based on active frontier density thresholds.",
      "Decoupled the merging process into a read-only parallel lookup phase to locate roots, followed by a thread-safe sequential merge phase, preventing structure corruption."
    ],
    impact: [
      "Achieved up to 8x execution speedup on multi-core systems, successfully processing graphs with over 50 million vertices and 150 million edges.",
      "Reduced execution time for Borůvka's MST on massive sparse networks to under 1.8 seconds by eliminating critical section locking bottlenecks.",
      "Built a robust C benchmarking framework validating correctness and path length equality between parallel and sequential implementations on real-world SNAP datasets.",
      "Developed a Python-based visual analysis pipeline using Pandas and Matplotlib to automatically plot efficiency curves and execution speedup across dynamic thread pools."
    ]
  },

  {
    id: 7,
    title: "Learnly.AI",
    badge: "AI / EDTECH",
    gradient: "linear-gradient(135deg, #059669 0%, #06b6d4 100%)", // Emerald to Cyan
    desc: "AI-powered educational platform utilizing Flask, Chroma DB, and Groq API to generate personalized flashcards, slide decks, and automated quizzes with semantic grading from PDF textbooks.",
    githubUrl: "https://github.com/Asad939asad/Learnly.AI",
    liveUrl: "https://github.com/Asad939asad/Learnly.AI",
    videoUrl: "./Learnly Demo Final.mp4",
    challenges: [
      "Extracting precise semantic context from dense textbooks while avoiding noise in retrieval.",
      "Ensuring consistent JSON structures from LLM responses for dynamic slide decks and quiz elements.",
      "Overcoming high latency when sequentially grading multiple short-answer questions via LLM API calls.",
      "Rendering dynamic content inside ReportLab flowables without violating PDF document boundary constraints."
    ],
    solution: [
      "Implemented a vector search index using Chroma DB and HuggingFace sentence-transformers embeddings with a 100-token chunk recursive text splitter.",
      "Developed a robust JSON parsing wrapper to strip markdown fences and automatically recover structured data.",
      "Integrated a ThreadPoolExecutor with 8 concurrent worker threads to parallelize semantic grading via the Groq API.",
      "Designed a dynamic PDF builder utilizing ReportLab SimpleDocTemplate with precise 16:9 aspect ratio spacing and Hex-colored flowables."
    ],
    impact: [
      "Reduced content grading latency by 75% through concurrent, LLM-based short-answer scoring.",
      "Achieved high-fidelity educational material generation with zero-hallucination RAG document support.",
      "Enabled instant download of presentation-ready slide decks directly formatted as standard 16:9 PDFs.",
      "Provided an intuitive interface for students to manage PDF indexing, learning goals, and review detailed grading feedback."
    ]
  },

  {
    id: 7,
    title: "Lumina Intelligent Advisor",
    badge: "SELF-RAG AI",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)", // Indigo Purple
    desc: "Self-correcting RAG advisory agent built with LangGraph to orchestrate multi-agent validation loops, ensuring zero-hallucination responses for complex queries.",
    githubUrl: "https://github.com/Asad939asad/Self-Aware-Rag-for-The-Intelligent-University-Advisor",
    liveUrl: "https://huggingface.co/spaces/Asad999/Luminas-self-rag-system",
    videoUrl: "./screenshot-2026-06-02-at-75502-pm_4imAtCbl.mp4",
    challenges: [
      "Preventing LLM hallucinations and factual drift when retrieval queries yielded ambiguous, conflicting, or complex organizational guidelines.",
      "Bypassing runtime crashes of standard vector databases under experimental Python 3.14 environments due to strict metaclass updates.",
      "Managing multi-step agentic routing and state updates across complex conversational graphs with low response latency.",
      "Ensuring maximum retrieval coverage for multi-faceted user inquiries such as prerequisite trees and full course catalogs."
    ],
    solution: [
      "Orchestrated a LangGraph-powered state machine featuring a relevance grader, a generator, and a dual-checkpoint hallucination checking loop.",
      "Engineered a custom, NumPy-driven cosine similarity search engine and a robust pickle-based persistence layer for 100% stability on Python 3.14.",
      "Leveraged Groq's high-speed API with Llama-3.3-70b-versatile and parallelized grading nodes to achieve sub-second response routing.",
      "Implemented an aggressive max-coverage semantic retrieval strategy (k=15) with dynamic web search fallback for out-of-index queries."
    ],
    impact: [
      "Achieved a 100% pass rate across rigorous production evaluation scenarios, verifying zero factual hallucinations.",
      "Reduced vector search query latency to sub-millisecond speeds using the pure-NumPy fallback engine.",
      "Provided users with a premium glassmorphic UI displaying real-time agent checkpoints and seamless streaming responses.",
      "Successfully automated complex prerequisite mapping and resolved advisor ambiguity with zero manual overrides."
    ]
  },

  {
    id: 8,
    title: "Finter.ai",
    badge: "AGENTIC FINTECH",
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)", // Emerald to Cyan
    desc: "End-to-end intelligent portfolio management and financial analysis system orchestrating 40+ tools using LangGraph state machines and Google Gemini.",
    githubUrl: "https://github.com/Asad939asad/Finter.ai",
    liveUrl: "https://example.com",
    videoUrl: "./561093229-912c33e5-19fe-4662-b096-cef55a0ad479_fwp7OJId.mp4",
    challenges: [
      "Managing complex, multi-step financial reasoning flows without infinite loops or state corruption in agent routing.",
      "Integrating and orchestrating 40+ distinct Yahoo Finance financial metrics, analyst recommendations, and technical analysis tools dynamically inside the LLM context.",
      "Streamlining the real-time delivery of multi-node LLM 'thinking' steps and Matplotlib visualizations to the frontend UI without blocking connections.",
      "Setting up a secure, sandboxed execution environment for running custom LLM-generated Python visualization code on the server."
    ],
    solution: [
      "Implemented a 9-node LangGraph state machine with memory checkpointing (MemorySaver) and custom reflective routing logic.",
      "Developed a standardized Model Context Protocol (MCP) server exposing yfinance and Pinecone RAG databases via a JSON-RPC stdio transport layer.",
      "Built a FastAPI streaming backend using Server-Sent Events (SSE) to broadcast real-time state updates, agent thought processes, and base64-encoded charts.",
      "Restricted globals and added input validation to compile and execute custom chart code safely in an isolated backend runtime."
    ],
    impact: [
      "Achieved zero-friction tool discovery, allowing Gemini to seamlessly execute 40+ financial and fundamental analysis API tools.",
      "Provided users with real-time, interactive chat streams showcasing step-by-step agent thinking and immediate Matplotlib visualizations.",
      "Secured Python code execution by mitigating remote code execution (RCE) vulnerabilities during custom chart rendering.",
      "Enabled RAG-based context retrieval from financial education databases, bridging the gap between raw data and consumer financial literacy."
    ]
  },

  
];

// Dot Grid component mimicking the system cluster dashboard in the header visual
function NodeDotGrid({ seed }) {
  const dots = Array.from({ length: 24 });
  // Deterministic lights based on project id seed
  const activePattern = [
    [1, 4, 9, 12, 17, 20],
    [2, 5, 8, 11, 14, 15, 19, 22],
    [0, 3, 6, 7, 13, 16, 21],
    [4, 8, 12, 16, 20, 23, 1],
    [2, 3, 8, 9, 14, 15, 20, 21],
    [5, 10, 15, 20, 22, 23],
    [1, 6, 11, 16, 18, 22]
  ][(seed - 1) % 8];

  return (
    <div className="project-card-new__dot-grid">
      {dots.map((_, idx) => (
        <span
          key={idx}
          className={`header-dot ${activePattern.includes(idx) ? 'header-dot--active' : ''}`}
        />
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  const [challengesOpen, setChallengesOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [impactOpen, setImpactOpen] = useState(false);

  return (
    <div className="project-card-new">
      {/* Dynamic Gradient Header Visual */}
      <div className={`project-card-new__header ${project.videoUrl ? 'project-card-new__header--has-video' : ''}`} style={{ background: project.gradient }}>
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="project-card-new__video"
          />
        ) : (
          /* Node Cluster Graphic */
          <div className="project-card-new__graphic">
            <div className="project-card-new__node-icon">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="project-card-new__node-num">{200 + project.id * 19}</span>
            </div>
            <NodeDotGrid seed={project.id} />
          </div>
        )}

        {/* Badge */}
        <div className="project-card-new__badge-wrapper">
          <span className="project-card-new__badge">{project.badge}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="project-card-new__body">
        <div className="project-card-new__main-info">
          {/* Title and Links Row */}
          <div className="project-card-new__title-row">
            <h3 className="project-card-new__title">{project.title}</h3>

            <div className="project-card-new__actions">
              {/* GitHub Link */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-new__action-btn project-card-new__action-btn--github"
                  title="View GitHub Repository"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              )}

              {/* Live Demo Arrow Link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-new__action-btn project-card-new__action-btn--arrow"
                title="Open Live Application"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Short Description */}
          <p className="project-card-new__desc">{project.desc}</p>

          <div className="project-card-new__divider" />
        </div>

        {/* Accordions / Project Details */}
        <div className="project-card-new__accordions">
          {/* Challenges tab */}
          <div className="project-accordion">
            <button
              className={`project-accordion__trigger ${challengesOpen ? 'is-active' : ''}`}
              onClick={() => setChallengesOpen(!challengesOpen)}
            >
              <span className="accordion-label"><span className="accordion-num">01</span> PROJECT CHALLENGES</span>
              <span className="accordion-icon">{challengesOpen ? '−' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {challengesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="project-accordion__content"
                >
                  {project.challenges.map((bullet, idx) => (
                    <div key={idx} className="project-bullet-item">
                      <span className="bullet-slash">/</span>
                      <p>{bullet}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solution tab */}
          <div className="project-accordion">
            <button
              className={`project-accordion__trigger ${solutionOpen ? 'is-active' : ''}`}
              onClick={() => setSolutionOpen(!solutionOpen)}
            >
              <span className="accordion-label"><span className="accordion-num">02</span> ENGINEERING SOLUTION</span>
              <span className="accordion-icon">{solutionOpen ? '−' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {solutionOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="project-accordion__content"
                >
                  {project.solution.map((bullet, idx) => (
                    <div key={idx} className="project-bullet-item">
                      <span className="bullet-slash">/</span>
                      <p>{bullet}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Impact tab */}
          <div className="project-accordion">
            <button
              className={`project-accordion__trigger ${impactOpen ? 'is-active' : ''}`}
              onClick={() => setImpactOpen(!impactOpen)}
            >
              <span className="accordion-label"><span className="accordion-num">03</span> COMMERCIAL IMPACT</span>
              <span className="accordion-icon">{impactOpen ? '−' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {impactOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="project-accordion__content"
                >
                  {project.impact.map((bullet, idx) => (
                    <div key={idx} className="project-bullet-item">
                      <span className="bullet-slash">/</span>
                      <p>{bullet}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsGrid() {
  return (
    <div className="projects-section-container" id="work">
      <div className="projects-section-header">
        <div className="projects-section-header__left">
          <h2 className="projects-section-header__heading">
            Engineering Archive<span className="asterisk-symbol">*</span>
          </h2>
        </div>
        <div className="projects-section-header__right">
          <p className="projects-section-header__subheading">
            Deep technical dives into AI pipelines, microservices, and live deployments.
          </p>
        </div>
      </div>

      {/* 4x2 Responsive Grid */}
      <div className="projects-grid-4x2">
        {initialProjects.map(proj => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
}
