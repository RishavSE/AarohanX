export interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  skills: string[];
  interests: string[];
  verified: boolean;
  stipend: string;
  description: string;
  type: 'Technology' | 'Healthcare' | 'Finance' | 'Education' | 'Environment' | 'Social Impact';
  applicationDeadline: string;
  startDate: string;
  requirements: string[];
}

export const mockInternships: Internship[] = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Tech Mahindra",
    location: "Pune, Maharashtra",
    duration: "3 months",
    skills: ["JavaScript", "React", "Node.js"],
    interests: ["Technology"],
    verified: true,
    stipend: "₹25,000/month",
    description: "Work on cutting-edge web applications using modern JavaScript frameworks. Gain hands-on experience with React, Node.js, and modern development practices.",
    type: "Technology",
    applicationDeadline: "2024-01-15",
    startDate: "2024-02-01",
    requirements: ["Final year student", "Knowledge of JavaScript", "Basic understanding of databases"]
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Tata Consultancy Services",
    location: "Bengaluru, Karnataka",
    duration: "6 months",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    interests: ["Technology"],
    verified: true,
    stipend: "₹30,000/month",
    description: "Analyze large datasets and build predictive models for business insights. Work with experienced data scientists on real-world projects.",
    type: "Technology",
    applicationDeadline: "2024-01-20",
    startDate: "2024-02-15",
    requirements: ["Strong in Python", "Statistics knowledge", "ML fundamentals"]
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Flipkart",
    location: "Remote",
    duration: "4 months",
    skills: ["UI/UX Design"],
    interests: ["Technology"],
    verified: true,
    stipend: "₹20,000/month",
    description: "Design user-friendly interfaces for India's leading e-commerce platform. Create wireframes, prototypes, and conduct user research.",
    type: "Technology",
    applicationDeadline: "2024-01-10",
    startDate: "2024-01-25",
    requirements: ["Design portfolio", "Figma/Sketch knowledge", "User research basics"]
  },
  {
    id: 4,
    title: "Digital Marketing Intern",
    company: "Byju's",
    location: "Mumbai, Maharashtra",
    duration: "3 months",
    skills: ["Digital Marketing"],
    interests: ["Education", "Technology"],
    verified: true,
    stipend: "₹15,000/month",
    description: "Create engaging marketing campaigns for educational content. Learn about social media marketing, content creation, and analytics.",
    type: "Education",
    applicationDeadline: "2024-01-12",
    startDate: "2024-01-30",
    requirements: ["Marketing basics", "Content creation", "Social media knowledge"]
  },
  {
    id: 5,
    title: "Healthcare Analytics Intern",
    company: "Apollo Hospitals",
    location: "Chennai, Tamil Nadu",
    duration: "5 months",
    skills: ["Data Analysis", "Python"],
    interests: ["Healthcare"],
    verified: true,
    stipend: "₹22,000/month",
    description: "Analyze healthcare data to improve patient outcomes and operational efficiency. Work with medical data and healthcare systems.",
    type: "Healthcare",
    applicationDeadline: "2024-01-18",
    startDate: "2024-02-10",
    requirements: ["Data analysis skills", "Healthcare interest", "Python knowledge"]
  },
  {
    id: 6,
    title: "Environmental Research Intern",
    company: "Centre for Science and Environment",
    location: "New Delhi",
    duration: "4 months",
    skills: ["Research", "Data Analysis"],
    interests: ["Environment", "Social Impact"],
    verified: true,
    stipend: "₹18,000/month",
    description: "Conduct research on environmental policies and sustainability practices. Contribute to reports on climate change and environmental protection.",
    type: "Environment",
    applicationDeadline: "2024-01-14",
    startDate: "2024-02-05",
    requirements: ["Research skills", "Environmental awareness", "Report writing"]
  },
  {
    id: 7,
    title: "FinTech Developer Intern",
    company: "Paytm",
    location: "Noida, Uttar Pradesh",
    duration: "4 months",
    skills: ["Java", "API Development", "Android"],
    interests: ["Technology", "Finance"],
    verified: true,
    stipend: "₹28,000/month",
    description: "Develop mobile payment solutions and financial technology applications. Work on secure payment systems and API integrations.",
    type: "Finance",
    applicationDeadline: "2024-01-16",
    startDate: "2024-02-08",
    requirements: ["Java knowledge", "Mobile development", "Security awareness"]
  },
  {
    id: 8,
    title: "Social Media Marketing Intern",
    company: "Zomato",
    location: "Gurugram, Haryana",
    duration: "3 months",
    skills: ["Social Media", "Content Creation", "Marketing"],
    interests: ["Technology", "Social Impact"],
    verified: true,
    stipend: "₹16,000/month",
    description: "Manage social media campaigns for food delivery platform. Create engaging content and analyze social media metrics.",
    type: "Technology",
    applicationDeadline: "2024-01-11",
    startDate: "2024-01-28",
    requirements: ["Creative thinking", "Social media knowledge", "Content creation"]
  },
  {
    id: 9,
    title: "EdTech Content Intern",
    company: "Unacademy",
    location: "Bengaluru, Karnataka",
    duration: "5 months",
    skills: ["Content Writing", "Education Technology"],
    interests: ["Education", "Technology"],
    verified: true,
    stipend: "₹20,000/month",
    description: "Create educational content for online learning platform. Develop course materials and interactive learning experiences.",
    type: "Education",
    applicationDeadline: "2024-01-13",
    startDate: "2024-02-03",
    requirements: ["Strong writing skills", "Educational background", "Tech familiarity"]
  },
  {
    id: 10,
    title: "Cybersecurity Intern",
    company: "Quick Heal Technologies",
    location: "Pune, Maharashtra",
    duration: "6 months",
    skills: ["Cybersecurity", "Network Security", "Ethical Hacking"],
    interests: ["Technology"],
    verified: true,
    stipend: "₹26,000/month",
    description: "Learn about cybersecurity threats and defense mechanisms. Work on vulnerability assessments and security audits.",
    type: "Technology",
    applicationDeadline: "2024-01-17",
    startDate: "2024-02-12",
    requirements: ["Cybersecurity basics", "Networking knowledge", "Problem-solving skills"]
  },
  {
    id: 11,
    title: "Rural Development Intern",
    company: "Tata Trusts",
    location: "Multiple locations",
    duration: "4 months",
    skills: ["Project Management", "Community Outreach"],
    interests: ["Social Impact", "Education"],
    verified: true,
    stipend: "₹15,000/month",
    description: "Work on rural development projects focused on education and healthcare. Engage with local communities and implement social programs.",
    type: "Social Impact",
    applicationDeadline: "2024-01-19",
    startDate: "2024-02-14",
    requirements: ["Social work interest", "Communication skills", "Field work readiness"]
  },
  {
    id: 12,
    title: "Blockchain Developer Intern",
    company: "Polygon Technology",
    location: "Remote",
    duration: "5 months",
    skills: ["Blockchain", "Solidity", "Web3"],
    interests: ["Technology", "Finance"],
    verified: true,
    stipend: "₹35,000/month",
    description: "Develop decentralized applications and smart contracts. Work with cutting-edge blockchain technology and Web3 ecosystem.",
    type: "Technology",
    applicationDeadline: "2024-01-21",
    startDate: "2024-02-18",
    requirements: ["Blockchain basics", "Programming skills", "Crypto knowledge"]
  },
  {
    id: 13,
    title: "Renewable Energy Intern",
    company: "Suzlon Energy",
    location: "Ahmedabad, Gujarat",
    duration: "4 months",
    skills: ["Engineering", "Renewable Energy", "Project Planning"],
    interests: ["Environment", "Technology"],
    verified: true,
    stipend: "₹24,000/month",
    description: "Work on wind energy projects and renewable energy solutions. Assist in project planning and implementation of green energy initiatives.",
    type: "Environment",
    applicationDeadline: "2024-01-22",
    startDate: "2024-02-20",
    requirements: ["Engineering background", "Environmental interest", "Technical aptitude"]
  },
  {
    id: 14,
    title: "Game Development Intern",
    company: "Dream11",
    location: "Mumbai, Maharashtra",
    duration: "4 months",
    skills: ["Unity", "C#", "Game Design"],
    interests: ["Technology"],
    verified: true,
    stipend: "₹23,000/month",
    description: "Develop mobile games and interactive gaming experiences. Work with Unity engine and create engaging gameplay features.",
    type: "Technology",
    applicationDeadline: "2024-01-23",
    startDate: "2024-02-22",
    requirements: ["Unity knowledge", "Game development interest", "Creative thinking"]
  },
  {
    id: 15,
    title: "Healthcare Innovation Intern",
    company: "Practo",
    location: "Bengaluru, Karnataka",
    duration: "5 months",
    skills: ["Healthcare Technology", "Product Development", "Research"],
    interests: ["Healthcare", "Technology"],
    verified: true,
    stipend: "₹27,000/month",
    description: "Work on innovative healthcare solutions and digital health platforms. Contribute to product development and user research in healthcare technology.",
    type: "Healthcare",
    applicationDeadline: "2024-01-24",
    startDate: "2024-02-25",
    requirements: ["Healthcare interest", "Technology skills", "Innovation mindset"]
  }
];

export const skillsList = [
  "JavaScript", "Python", "React", "Node.js", "Machine Learning", "Data Analysis", 
  "UI/UX Design", "Digital Marketing", "Java", "Android", "iOS", "API Development",
  "Cybersecurity", "Blockchain", "Solidity", "Unity", "C#", "Game Design",
  "Social Media", "Content Writing", "Project Management", "Research",
  "Healthcare Technology", "Renewable Energy", "Engineering", "Web3",
  "Community Outreach", "Content Creation", "Network Security", "Ethical Hacking"
];

export const interestsList = [
  "Technology", "Healthcare", "Finance", "Education", "Environment", "Social Impact"
];
