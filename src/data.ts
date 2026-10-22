export type PortfolioProject = {
  number: string
  name: string
  type: string
  description: string
  tags: string[]
  image: string
  color: string
  url: string
  workType: string
}

export const portfolio = {
  name: 'Vijayakumar Police Patil',
  firstName: 'Vijayakumar',
  role: 'Engineering Student · Aspiring Developer',
  college: 'RV College of Engineering',
  semester: '3rd semester',
  location: 'Bengaluru, India',
  availability: 'Open to internships, learning, and collaboration',
  email: 'vijayk959146@gmail.com',
  photo: '/vijay-profile.jpeg',
  github: 'https://github.com/vijayk959146-dot',
  linkedin: 'https://www.linkedin.com/in/vijay-kumar-689820380',
  leetcode: 'https://leetcode.com/u/vijayakumarpp/',
  bio: 'I’m Vijayakumar Police Patil, a third-semester student at RV College of Engineering, aspiring developer, and competitive programming enthusiast. I enjoy sharpening my problem-solving skills through DSA and building my knowledge one project at a time. Outside of tech, I enjoy playing cricket and football.',
  skills: ['Competitive programming', 'Data structures & algorithms', 'Web development', 'Game development', 'Problem solving'],
  learning: ['Building interactive web experiences', 'Game design and 3D graphics', 'Data structures & algorithms'],
  projects: [
    {
      number: '01',
      name: 'AI Security Analyser',
      type: 'Cybersecurity · Python',
      description: 'AI-Assisted Attack Surface & Vulnerability scanner — maps threats and surfaces vulnerabilities using machine learning.',
      tags: ['Python', 'AI/ML', 'Cybersecurity', 'Vulnerability'],
      image: 'photo-1550751827-4bd374c3f58b',
      color: '#c0392b',
      url: 'https://github.com/vijayk959146-dot/-EL-3SEM-security-project',
      workType: 'Academic project',
    },
    {
      number: '02',
      name: 'Breathe Analysis Model',
      type: 'IoT · Machine Learning',
      description: 'Disease detection using MQ gas sensors and ML modelling — classifies respiratory conditions from sensor readings in real-time.',
      tags: ['ML', 'IoT', 'HTML', 'Sensors'],
      image: 'photo-1576086213369-97a306d36557',
      color: '#16a085',
      url: 'https://github.com/vijayk959146-dot/breathe_analysis_model',
      workType: 'Research project',
    },
    {
      number: '03',
      name: 'College Enquiry Chatbot',
      type: 'ML · Chatbot',
      description: 'ML-powered chatbot that answers college-related queries instantly — no office visits needed. Includes a suggestion box for student feedback.',
      tags: ['Machine Learning', 'NLP', 'Chatbot', 'Python'],
      image: 'photo-1531746790731-6c087fecd65a',
      color: '#8e44ad',
      url: 'https://github.com/vijayk959146-dot/College-Enquiry-Chatbot',
      workType: 'Academic project',
    },
    {
      number: '04',
      name: 'SVU College App',
      type: 'Mobile · Full Stack',
      description: 'One-stop college companion app — bridges students and the institution for queries, updates, and resources all in one place.',
      tags: ['Mobile', 'Full Stack', 'Education'],
      image: 'photo-1523050854058-8df90110c9f1',
      color: '#2980b9',
      url: 'https://github.com/vijayk959146-dot/ProjectSVUCE',
      workType: 'Team project',
    },
    {
      number: '05',
      name: 'Portfolio',
      type: 'Web · React · Three.js',
      description: 'This very portfolio — built with React, TypeScript, Three.js 3D graphics, and GSAP smooth scroll animations.',
      tags: ['React', 'TypeScript', 'Three.js', 'GSAP'],
      image: 'photo-1460925895917-afdab827c52f',
      color: '#d35400',
      url: 'https://github.com/vijayk959146-dot/portfolio',
      workType: 'Independent project',
    },
  ] as PortfolioProject[],
  timeline: [
    { year: 'NOW', title: 'Engineering · 3rd semester', place: 'RV College of Engineering · Bengaluru', text: 'Developing a strong foundation in engineering and exploring where technology can lead.' },
  ],
}
