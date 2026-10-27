// Edit this file to update your site's content.

export const profile = {
  name: 'Harpreet Singh Chawla',
  title: 'Ph.D. Candidate, Computer Science',
  tagline: 'Systems security research on Trusted Execution Environments and confidential computing.',
  bio: "I'm a Ph.D. candidate in Computer Science at Texas A&M University, advised by Dr. Chia-Che Tsai. My research is in systems security — isolation techniques, Trusted Execution Environments (Intel SGX, TDX), and confidential computing — spanning both attacking and defending enclave boundaries, toolchain hardening, and securing multi-agent AI systems on confidential VMs.",
  location: 'College Station, TX',
  email: 'harpreetsc@tamu.edu',
  github: 'https://github.com/harpreetsc1992',
  linkedin: 'https://linkedin.com/in/harpreet-singh-chawla-64a4b41a3',
  scholar: 'https://scholar.google.com/citations?user=RLyQn2UAAAAJ',
  resumeUrl: '', // e.g. '/resume.pdf' — drop a PDF in public/ and link it here
}

export const education = [
  {
    school: 'Texas A&M University',
    degree: 'Ph.D., Computer Science (GPA 4.0)',
    period: 'Aug 2020 – Expected Dec 2027',
  },
  {
    school: 'The George Washington University',
    degree: 'M.S., Computer Science',
    period: 'Aug 2015 – May 2017',
  },
  {
    school: 'Jaypee Institute of Information Technology',
    degree: 'B.Tech, Information Technology',
    period: 'Jul 2010 – May 2014',
  },
]

export const skills = [
  'C',
  'C++',
  'x86 Assembly',
  'RISC-V',
  'Intel SGX',
  'Intel TDX',
  'Gramine',
  'Xen',
  'Linux',
  'Trusted Execution Environments',
  'Confidential Computing',
  'Side-Channel Analysis',
  'CFI / SFI',
  'LLVM / Clang',
  'GDB',
  'Ghidra',
]

export const projects = [
  {
    name: 'NesTEE: Intra-Process Protection for TEEs',
    description:
      "Discovered a privilege-escalation attack against the SGX2 ENCLU instruction and built a defense framework that gates and verifies in-enclave instruction calls. Submitted to NDSS '27.",
    link: '',
    tags: ['Intel SGX', 'TEE'],
  },
  {
    name: 'Dynamic Memory Management for Hardware Enclaves',
    description:
      "Optimized Gramine's SGX2 enclave dynamic memory management to recover performance lost to context switches while preserving SGX's security guarantees. Published at SYSTOR '25.",
    link: '',
    tags: ['Intel SGX', 'Gramine'],
  },
  {
    name: 'TDX as a Trusted Coordination Service for Gramine-SGX',
    description:
      "Built a TDX confidential-VM coordination service that validates Iago-attack-prone syscalls (ioctl, shared memory, semaphores) that Gramine's library OS can't validate alone, at under 1% overhead on real TDX hardware.",
    link: '',
    tags: ['Intel TDX', 'Confidential Computing'],
  },
  {
    name: 'Securing Multi-Agent AI Systems on Intel TDX',
    description:
      'Found inter- and intra-agent vulnerabilities across MetaGPT, CrewAI, AutoGen, and LangGraph, then built an intra-TD isolation layer (Intel MPK, Clang CFI, SFI) adding ≤0.16% latency overhead to LLM-driven multi-agent workloads.',
    link: '',
    tags: ['Intel TDX', 'Multi-Agent Systems'],
  },
]

export const publications = [
  {
    title: 'Adaptive and Efficient Dynamic Memory Management for Hardware Enclaves',
    authors:
      'Vijay Dhanraj, Harpreet Singh Chawla, Daniel Manila, Eric Thomas Schneider, Erica Fu, Donald E. Porter, Chia-Che Tsai, Mona Vij',
    venue: "SYSTOR '25",
    date: 'Sept 2025',
    link: '',
  },
  {
    title: 'NUCAlloc: Fine-Grained Block Placement in Hashed Last-Level NUCA Caches',
    authors: 'Raveendra Soori, Shreyas Prabhu, Harpreet Singh Chawla, Michael Ferdman',
    venue: "ICS '24",
    date: 'June 2024',
    link: '',
  },
  {
    title: 'Attack of the Knights: Non-Uniform Cache Side Channel Attack',
    authors:
      'Farabi Mahmud, Sungkeun Kim, Harpreet Singh Chawla, Jiayi Huang, Chia-Che Tsai, Eun Jung Kim, Abdullah Muzahid',
    venue: "ACSAC '23",
    date: 'Dec 2023',
    link: '',
  },
  {
    title: 'CRIMES: Using Evidence to Secure the Cloud',
    authors: 'Sundaresan Rajasekaran, Harpreet Singh Chawla, Zhen Ni, Neel Shah, Timothy Wood, Emery Berger',
    venue: "Middleware '18",
    date: '2018',
    link: 'https://dl.acm.org/doi/10.1145/3274808.3274812',
  },
  {
    title: 'Scalable Cloud Security via Asynchronous Virtual Machine Introspection',
    authors: 'Sundaresan Rajasekaran, Zhen Ni, Harpreet Singh Chawla, Neel Shah, Timothy Wood, Emery Berger',
    venue: "USENIX HotCloud '16",
    date: '2016',
    link: 'https://www.usenix.org/system/files/conference/hotcloud16/hotcloud16_rajasekaran.pdf',
  },
]

export const manuscripts = [
  {
    title: 'NesTEE: Lightweight Intra-Process Protection for Sensitive Instructions on TEEs',
    authors: 'Harpreet Singh Chawla, Chia-Che Tsai',
    status: "Submitted to NDSS '27",
  },
  {
    title: "TDX as a Trusted Coordination Service for the Unprotected Subsystems of Gramine-SGX",
    authors: 'Harpreet Singh Chawla, Wenhan Ji, Donald E. Porter, Chia-Che Tsai',
    status: 'Under submission',
  },
  {
    title: 'Running Agent-LLMs in CVMs using Intra-TD Isolation',
    authors: 'Harpreet Singh Chawla',
    status: 'In preparation',
  },
  {
    title: 'One Trust Domain Per Agent: SFI and CFI for Gramine-TDX Multi-Agent Coordination',
    authors: 'Harpreet Singh Chawla',
    status: 'In preparation',
  },
]
