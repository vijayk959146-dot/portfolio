export type PortfolioProject = {
  number: string
  name: string
  repoName: string
  category: string
  architecture: string
  description: string
  techStack: string[]
  keyFeatures: string[]
  systemSpec: string
  url: string
  liveDemoUrl?: string
  status: string
  badgeColor: string
}

export const portfolio = {
  name: 'Vijayakumar Police Patil',
  firstName: 'Vijayakumar',
  role: 'Engineering Student · Aspiring Developer',
  college: 'RV College of Engineering',
  semester: '3rd semester',
  location: 'Bengaluru, India',
  availability: 'Open to internships, research, and collaboration',
  email: 'vijayk959146@gmail.com',
  photo: '/vijay-profile.jpeg',
  github: 'https://github.com/vijayk959146-dot',
  linkedin: 'https://www.linkedin.com/in/vijay-kumar-689820380',
  leetcode: 'https://leetcode.com/u/vijayakumarpp/',
  bio: 'I’m Vijayakumar Police Patil, a third-semester student at RV College of Engineering, aspiring developer, and competitive programming enthusiast. I enjoy sharpening my problem-solving skills through DSA and building my knowledge one project at a time. Outside of tech, I enjoy playing cricket and football.',
  skills: ['Competitive Programming', 'Data Structures & Algorithms', 'Python / ML Modeling', 'Full Stack Development', 'IoT & Hardware Interfacing', 'System Security Analysis'],
  learning: ['Distributed Systems & Microservices', 'Advanced Machine Learning & Predictive Modeling', 'WebGL & Real-time Visual Computing'],
  projects: [
    {
      number: '01',
      name: 'AI-Assisted Attack Surface & Vulnerability Scanner',
      repoName: '-EL-3SEM-security-project',
      category: 'Cybersecurity & Machine Learning',
      architecture: 'Heuristic Threat Modeling · Automated Reconnaissance Pipeline',
      description: 'An intelligent security framework engineered to scan attack surfaces, perform port/endpoint reconnaissance, and classify vulnerability vectors using automated inspection algorithms.',
      techStack: ['Python', 'Network Security', 'Vulnerability Assessment', 'Threat Modeling'],
      keyFeatures: [
        'Automated network vector scanning & port inspection',
        'Vulnerability classification pipeline with severity scoring',
        'Heuristic attack surface analysis reducing manual audit overhead'
      ],
      systemSpec: 'Engineered for 3rd Sem EL Security curriculum with modular auditing routines.',
      url: 'https://github.com/vijayk959146-dot/-EL-3SEM-security-project',
      status: 'Active Repository',
      badgeColor: '#e0533c',
    },
    {
      number: '02',
      name: 'Non-Invasive Breath Analysis Diagnostic Engine',
      repoName: 'breathe_analysis_model',
      category: 'Biomedical IoT & Predictive ML',
      architecture: 'Multi-Sensor Array (MQ Series) · Real-time Signal Classification',
      description: 'Biomedical non-invasive diagnostic engine that interfaces MQ gas sensor arrays with supervised ML models to analyze exhaled Volatile Organic Compounds (VOCs) for early disease biomarker detection.',
      techStack: ['Python', 'Machine Learning', 'MQ Gas Sensors', 'IoT Signal Processing', 'Vercel'],
      keyFeatures: [
        'Continuous analog signal acquisition from multi-gas sensor matrix',
        'Feature extraction & statistical normalization for respiratory gas classification',
        'Web interface dashboard for live diagnostic monitoring and result telemetry'
      ],
      systemSpec: 'Live deployed model inference telemetry running on Vercel.',
      url: 'https://github.com/vijayk959146-dot/breathe_analysis_model',
      liveDemoUrl: 'https://breathe-analysis-model.vercel.app',
      status: 'Production Live Demo',
      badgeColor: '#20bf6b',
    },
    {
      number: '03',
      name: 'NLP Academic Enquiry Knowledge Engine',
      repoName: 'College-Enquiry-Chatbot',
      category: 'Natural Language Processing & Chat Systems',
      architecture: 'Intent Classification · Contextual Knowledge Graph · Feedback Loop',
      description: 'An AI-powered academic query resolver that processes natural language student enquiries regarding campus admissions, department curricula, and administrative workflows without human dispatch.',
      techStack: ['Python', 'NLP Tokenization', 'Machine Learning', 'Pattern Matching', 'Intent Extraction'],
      keyFeatures: [
        'Domain-specific intent recognition trained on university query datasets',
        'Zero-latency automated query response with fallback escalation routes',
        'Integrated student feedback telemetry to continuously re-train conversational intents'
      ],
      systemSpec: 'Eliminates repetitive physical inquiry desks via structured conversational triage.',
      url: 'https://github.com/vijayk959146-dot/College-Enquiry-Chatbot',
      status: 'Completed System',
      badgeColor: '#8854d0',
    },
    {
      number: '04',
      name: 'SVU College Unified Campus Platform',
      repoName: 'ProjectSVUCE',
      category: 'Full-Stack Campus Architecture',
      architecture: 'Client-Server Architecture · Student Information Bus',
      description: 'A comprehensive campus management portal functioning as a unified digital bridge between students, administration, and academic departments for academic circulars, grades, and event tracking.',
      techStack: ['Full-Stack', 'REST APIs', 'Campus DB Architecture', 'Mobile/Web UI'],
      keyFeatures: [
        'Centralized portal for student affairs, notice boards, and department updates',
        'Role-segregated access for undergraduates, faculty, and administrative staff',
        'Unified notification dispatch preventing campus information silos'
      ],
      systemSpec: 'Architected to service campus-wide throughput for all undergraduate queries.',
      url: 'https://github.com/vijayk959146-dot/ProjectSVUCE',
      status: 'Collaborative Project',
      badgeColor: '#3867d6',
    },
    {
      number: '05',
      name: 'High-Performance 3D Portfolio & Visual Engine',
      repoName: 'portfolio',
      category: 'WebGL Systems & Creative Engineering',
      architecture: 'React 18 · React Three Fiber · Lenis Momentum Engine · GSAP Core',
      description: 'An ultra-optimized personal digital system leveraging WebGL shaders, procedural 3D wireframe geometries, kinetic scroll physics, and a minimalist brutalist engineering aesthetic.',
      techStack: ['TypeScript', 'React 18', 'Three.js', 'React Three Fiber', 'GSAP', 'Lenis'],
      keyFeatures: [
        'Interactive real-time 3D parametric mesh rendering via Three.js canvas',
        'Hardware-accelerated inertia scrolling using Lenis smooth wheel physics',
        'TypeScript strictly-typed architecture with modularized section abstractions'
      ],
      systemSpec: 'Sub-second first contentful paint with automated CI/CD push to GitHub.',
      url: 'https://github.com/vijayk959146-dot/portfolio',
      status: 'Production System',
      badgeColor: '#f7b731',
    },
  ] as PortfolioProject[],
  timeline: [
    { year: 'NOW', title: 'Engineering · 3rd semester', place: 'RV College of Engineering · Bengaluru', text: 'Developing a strong foundation in engineering and exploring where technology can lead.' },
  ],
}
