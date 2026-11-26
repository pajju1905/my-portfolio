/**
 * Prajwal Gouda - Portfolio Data
 * Central data store for all portfolio content, experience, projects, skills, education, and certifications.
 */

export const personalInfo = {
  name: 'Prajwal Gouda',
  role: 'Python Full Stack Developer & BCA Graduate',
  location: 'Bengaluru, Karnataka, India',
  phone: '+91 8088645248',
  email: 'Prajwalgouda223@gmail.com',
  linkedin: 'https://www.linkedin.com/in/prajwallgouda',
  github: 'https://github.com/pajju1905',
  summary:
    'Recent Bachelor of Computer Applications (BCA) graduate with a strong academic foundation and hands-on experience in Python, PHP, Java, JavaScript, React, Django, and MySQL. A quick learner with strong problem-solving and time-management skills, eager to build full-stack web applications and contribute to organizational growth.',
}

export const stats = [
  { value: '87.0%', label: 'BCA Aggregate', sub: 'Himalaya BCA College' },
  { value: 'Intern', label: 'Cravita Technologies', sub: 'Python Full Stack' },
  { value: '3', label: 'Full-Stack Projects', sub: 'Farmogram · TrackBook · Portfolio' },
  { value: '3', label: 'Industry Certifications', sub: 'HackerRank · GATES · Tata' },
]

export const experience = [
  {
    role: 'Python Full Stack Developer Intern',
    company: 'Cravita Technologies',
    location: 'Bengaluru, Karnataka',
    period: 'Aug 2026 – Present',
    badge: 'Current Role',
    description:
      'Working on responsive web applications, backend APIs, databases, and CRUD-based full-stack projects.',
    highlights: [
      'Developed responsive web applications using Python, HTML, CSS, JavaScript, and React.',
      'Worked on backend development, APIs, databases, and CRUD operations.',
      'Built and integrated full-stack projects with a focus on functionality, responsive UI, and database management.',
    ],
    technologies: ['Python', 'React', 'JavaScript', 'MySQL', 'REST APIs', 'HTML5', 'CSS3', 'Git'],
  },
]

export const projects = [
  {
    id: 'farmogram',
    number: '01',
    name: 'Farmogram',
    subtitle: 'Smart AgroConnect & Management System',
    type: 'Full-Stack Web Application · 2026',
    badge: 'Flagship Project',
    description:
      'A web-based platform connecting farmers and buyers through an online crop marketplace, with crop management, weather updates, smart reminders, and harvest tracking.',
    fullDescription:
      'Farmogram is a smart agro-management platform built to connect farmers and buyers through an online crop marketplace. It includes crop management, weather updates, smart reminders, harvest tracking, and role-based farmer, buyer, and admin dashboards.',
    features: [
      'Online crop marketplace for farmers and buyers',
      'Crop management and harvest tracking',
      'Weather updates and smart reminders',
      'Dedicated farmer, buyer, and admin dashboards',
      'Analytics and API integration',
      'PHP and MySQL-based CRUD operations',
    ],
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'REST APIs', 'Analytics'],
    liveUrl: 'https://farmogram.infinityfreeapp.com',
    year: '2026',
    className: 'farmogram-card',
    mark: 'Farmogram.',
    accent: '#2e7d32',
  },
  {
    id: 'trackbook',
    number: '02',
    name: 'TrackBook',
    subtitle: 'Student Management System',
    type: 'Academic Management System · 2026',
    badge: 'Institution Platform',
    description:
      'A web-based book management system that helps users organize, track, search, and manage book records.',
    fullDescription:
      'TrackBook is a responsive web-based book management system developed to organize, track, search, and manage book records efficiently using PHP, MySQL, HTML, CSS, and JavaScript.',
    features: [
      'Centralized book record management',
      'Search and track book records',
      'Responsive user interface',
      'PHP and MySQL database operations',
      'Efficient add, edit, and delete workflows',
    ],
    tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'CRUD'],
    year: '2026',
    className: 'trackbook-card',
    mark: 'TrackBook.',
    accent: '#1976d2',
  },
  {
    id: 'portfolio',
    number: '03',
    name: 'Personal Portfolio',
    subtitle: 'Professional React Portfolio Website',
    type: 'Frontend Web Application · 2026',
    badge: 'Personal Brand',
    description:
      'A responsive React.js portfolio showcasing my skills, projects, education, certifications, and contact information.',
    fullDescription:
      'A responsive personal portfolio website built with React.js to present my professional profile. It uses reusable components and modern styling to provide an interactive, user-friendly experience across mobile and desktop devices.',
    features: [
      'Responsive sections for profile, skills, projects, and education',
      'Reusable React components',
      'Interactive project detail dialogs',
      'Resume view and print experience',
      'Modern, accessible UI styling',
    ],
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    year: '2026',
    className: 'portfolio-card',
    mark: 'Portfolio.',
    accent: '#7c3aed',
  },
]

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'code',
    skills: ['Python', 'PHP', 'JavaScript', 'Java', 'SQL'],
  },
  {
    title: 'Web & Frontend Development',
    icon: 'layout',
    skills: ['React', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design', 'DOM & Fetch API'],
  },
  {
    title: 'Backend & Databases',
    icon: 'database',
    skills: ['Django', 'Node.js', 'MySQL', 'CRUD Operations', 'REST APIs', 'XAMPP'],
  },
  {
    title: 'Developer Tools & Concepts',
    icon: 'tools',
    skills: ['VS Code', 'GitHub', 'OOP', 'Git', 'Responsive Web Design'],
  },
]

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Himalaya BCA College, Ankola',
    year: '2026',
    score: '87.0% Aggregate',
    badge: 'Distinction',
    details:
      'Completed the Bachelor of Computer Applications program with an 87.0% aggregate.',
  },
]

export const certifications = [
  {
    title: 'Software Engineer Intern Role Certification',
    issuer: 'HackerRank',
    date: 'September 2026',
    badge: 'Verified Assessment',
    description:
      'Rigorous industry role assessment evaluating algorithmic problem solving, data structures, code quality, and software engineering competence.',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'GATES Institute',
    date: 'Certified',
    badge: 'Full Stack',
    description:
      'Hands-on full-stack training covering PHP, MySQL, JavaScript, HTML5, CSS3, backend integration, and responsive web application development.',
  },
  {
    title: 'Tata Cybersecurity Certificate',
    issuer: 'Tata Group',
    date: 'Certified',
    badge: 'Cybersecurity',
    description:
      'Practical virtual experience program focusing on system security essentials, identity and access management, threat mitigation, and cybersecurity hygiene.',
  },
]

export const softSkills = [
  'Problem Solving',
  'Teamwork',
  'Time Management',
  'Adaptability',
  'Continuous Learning',
]

export const languages = [
  { name: 'English', level: 'Professional Working Proficiency' },
  { name: 'Kannada', level: 'Native / Fluent' },
  { name: 'Hindi', level: 'Conversational' },
]
