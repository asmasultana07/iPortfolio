import {
  Project,
  Education,
  Experience,
  ContactInfo,
  Publication,
  AchievementItem
} from '../types';

export const portfolioOwner = {
  name: 'Asma Sultana',
  designations: [
    'Frontend Developer',
    'Software Developer',
    'Full-Stack Developer',
    'AI / ML Researcher' 
  ],
  photo: '/assets/hero.png',
  shortBio: 'I build scalable MERN stack applications with modern UI, secure backend, and performance-driven architecture.',
  
  careerObjective: {
    headline: 'A CSE graduate, problem solver, and lifelong learner.',
    summary: "I'm a Computer Science and Engineering graduate with a strong interest in building meaningful digital solutions. I enjoy turning ideas into real projects, learning new technologies, and constantly challenging myself to grow. For me, tech is not just a career — it's a way to create, explore and make an impact.",
    bulletPoints: [
      'Experienced in research projects, with recognized strengths in analytical thinking, teamwork, problem-solving, and statistical computing.',
      'Committed to continuous learning from experienced professionals and fostering high-trust, effective collaboration in agile engineering environments.',
      'Active researcher with a published peer-reviewed journal paper in BMJ Health & Care Informatics and another under submission to Nature Health.'
    ]
  },

  aboutMe: {
    journeyParagraphs: [
      "I started my coding journey during my university days, out of curiosity and a desire to create. What began with simple HTML & CSS turned into a deeper interest in web development, then gradually expanded to JavaScript, React and backend tools.",
      "Later, I got into data science and machine learning, where I discovered how data can solve real-world problems. Today, I'm exploring AI/ML, building projects and working on becoming a well-rounded developer — ready for new opportunities and bigger challenges."
    ],
    workEnjoyedParagraphs: [
      "I genuinely enjoy crafting clean, pixel-perfect, and accessible user interfaces from Figma prototypes. There is a deep satisfaction in turning static wireframes into fluid, responsive applications that perform reliably across devices.",
      "I also love working with modern full-stack architectures (React, Next.js, Node.js), integrating intelligent AI/ML APIs, and designing data visualization dashboards that transform complex metrics into clear, actionable insights."
    ],
    hobbiesList: [
      {
        icon: 'BookOpen',
        title: 'Reading books',
        subtitle: '(self-growth, fiction, islamic)'
      },
      {
        icon: 'Walk',
        title: 'Taking walks',
        subtitle: '(it keeps me calm & focused)'
      },
      {
        icon: 'Palette',
        title: 'Drawing / Painting',
        subtitle: '(a simple way to express myself)'
      }, 
      {
        icon: 'Camera',
        title: 'Photography',
        subtitle: '(capturing little beautiful moments)'
      }
    ],
    personality: `I am a curious, methodical, and patient problem-solver who values precision and clean craftsmanship. I believe in continuous learning—every bug is a teaching moment, and every new library is an opportunity to expand what is possible. Colleagues know me as a supportive collaborator who communicates clearly and brings calm positivity to every team.`
  },

  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/asmasultana07',
      icon: 'github',
      username: 'asmasultana07'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/asma-9414a9264',
      icon: 'linkedin',
      username: 'asmasultana'
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/abasma/code',
      icon: 'kaggle',
      username: 'abasma/code'
    }
  ]
};

// Requirement 10: Contact Information
export const contactDetails: ContactInfo = {
  email: 'ab.asma1084@gmail.com',
  phone: '+880 1516-340576',
  location: 'Dhaka, Bangladesh',
  whatsapp: '',
  whatsappUrl: ''
};

// New: Skill Groups Data (Icon-based) using @icons-pack/react-simple-icons
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiTypescript,
  SiFastapi,
  SiDjango,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiFigma,
  SiBraintree,
} from '@icons-pack/react-simple-icons';

export const skillGroups = [
  {
    title: 'Frontend Development',
    level: 'Strong',
    description: 'Modern component-driven web frameworks, responsive styling, and state management.',
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'JavaScript (ES6+)', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Context API & State Management', icon: SiNodedotjs }
      
    ],
  },
  {
    title: 'Backend & APIs',
    level: 'Strong',
    description: 'Server architectures, RESTful API design, JWT authentication, and cloud backends.',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'REST APIs', icon: SiFastapi },
      { name: 'JWT & Authentication', icon: SiDjango },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiNodedotjs },
      { name: 'Firebase', icon: SiFirebase }
    ]
  },
  {
    title: 'Databases & DBMS',
    level: 'Good',
    description: 'Relational and NoSQL schemas, query optimization, and persistent data design.',
    skills: [
      { name: 'MySQL & Relational DBMS', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
    ]
  },
  {
    title: 'AI, ML & Data Science',
    level: 'Advanced',
    description: 'Transformer models, NLP summarization, predictive classifiers, and health informatics.',
    skills: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Scikit-learn (ML Pipelines)', icon: SiScikitlearn },
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Matplotlib', icon: SiNumpy },
      { name: 'Seaborn', icon: SiNumpy },
    ]
  },
  {
    title: 'Tools & DevOps',
    level: 'Advanced',
    description: 'Modern build chains, cloud deployments, code generators, and version control.',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vite & npm', icon: SiGithub },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Netlify Hosting', icon: SiVercel },
      { name: 'Claude Code & AI Assisted Dev', icon: SiTensorflow },
      { name: 'Figma', icon: SiFigma }
    ]
  },
  {
    title: 'Core Engineering Concepts',
    level: 'Advanced',
    description: 'Foundational problem-solving disciplines and cross-functional team skills.',
    skills: [
      { name: 'Analytical Problem Solving', icon: SiTensorflow },
      { name: 'Debugging & Troubleshooting', icon: SiTensorflow },
      { name: 'Attention to Detail', icon: SiBraintree },
      { name: 'Team Collaboration', icon: SiGit },
      { name: 'Office & Excel', icon: SiPostman }
    ]
  }
];




// Requirement 7: Educational Qualification (Updated with Thesis & Comprehensive Coursework)
export const educationData: Education = {
  degree: 'BSc in Computer Science and Engineering',
  institution: 'University of Asia Pacific',
  location: '',
  period: 'Apr 2020 – Sep 2024',
  cgpa: '3.59 / 4.00',
  major: 'Computer Science and Engineering',
  keyCourses: [
    'Web Development',
    'Software Development',
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Microprocessors & Microcontrollers',
    'Machine Learning',
    'Artificial Intelligence',
    'Database Management Systems (DBMS)'
  ],
  thesis: {
    title: 'Bangla Text Summarization using the BANGLABERT and BERTSUM Model',
    methods: [
      'Implemented extractive and abstractive summarization techniques for Bangla text.',
      'Utilized NLP techniques, LLMs, and LSTM-based architectures for comparative performance analysis.',
      'Applied fine-tuning on BANGLABERT and BERTSUM models to improve summarization accuracy.'
    ],
    description: 'Researched state-of-the-art transformer architectures for low-resource Bengali linguistic processing, evaluating grammatical accuracy and semantic loss.',
    impact: 'Achieved improved coherence and fluency in generated summaries, demonstrating the potential of transformer-based models in low-resource language processing.'
  },
  highlights: [
    'Dean’s Award for Academic Excellence (Fall 2023) for outstanding scholastic achievement.',
    'Consistently maintained top-tier academic standing graduating with a 3.59 CGPA.',
    'Completed capstone research in transformer-based natural language processing.',
    'Active participant in university programming contests, math olympiads, and cybersecurity CTFs.'
  ]
};

// Requirement 8: Professional Experience (Updated with AMIA, INNOVISION, and Eutropia)
export const experienceData: Experience[] = [
  {
    role: 'Research Volunteer',
    company: 'American Medical Informatics Association (AMIA) – TIB YEAR 2025',
    period: '2025 – Present',
    type: 'Research Volunteer',
    location: 'Remote / International',
    description: 'Assigned as an active volunteer to the Translational Bioinformatics Year-In-Review (TBI YIR) team of AMIA.',
    achievements: [
      'Conducted systematic article screening and scoring of high-impact research papers in translational bioinformatics and computational medicine.',
      'Evaluated methodologies applying machine learning in genomics, computational pathology, and health informatics.',
      'Collaborated with international domain experts and biomedical informatics researchers.'
    ]
  },
  {
    role: 'Monitoring & Data Entry Specialist',
    company: 'INNOVISION (Administered by UNICEF)',
    period: '2024',
    type: 'Research & Monitoring',
    location: 'Dhaka, Bangladesh',
    description: 'Administered research monitoring and data analytics for project delivery funded by UNICEF.',
    achievements: [
      'Conducted systematic scoring, monitoring, and accurate data entry while collaborating with a 6-member team to complete the project within the required timeline.',
      'Analyzed field and survey reports using Microsoft Excel & KoboCollect to aggregate and store findings.',
      'Enforced data integrity protocols and generated statistical summary reports for project leads.'
    ]
  },
  {
    role: 'Frontend Web Developer (Intern)',
    company: 'Eutropia IT Solution',
    period: '2023 – 2024',
    type: 'Engineering Internship',
    location: 'Dhaka, Bangladesh',
    description: 'Engineered responsive frontend web solutions based on client wireframes and functional specifications.',
    achievements: [
      'Developed a modern Food Restaurant web application with interactive menus, promotional sliders, and reservation interfaces.',
      'Translated detailed client Figma mockups into cross-browser compatible HTML5, CSS3, and JavaScript code.',
      'Optimized load speeds, image assets, and mobile touch interactions across iOS and Android devices.'
    ]
  }
];

// Peer-Reviewed Publications & High-Impact Research
export const publicationsData: Publication[] = [
  {
    title: 'Explainable Machine Learning Revealing the Impact of Mental and Physical Health on Arthritis',
    journal: 'BMJ Health & Care Informatics',
    status: 'Published',
    doi: '10.1136/bmjhci-2025-101955',
    doiUrl: 'https://doi.org/10.1136/bmjhci-2025-101955',
    authors: 'Md. Atik Shams; Sumaiya Fatema; D M Hasibul Islam; Anindita Datta; David Eisenberg; Danastan Tasaouf Mridula; Junnatul Mawa; Asma Sultana; Nafiya Ahmed; Monowarul Islam et al.',
    description: 'Investigated multi-factorial clinical interactions between depressive disorders, chronic physical telemetry, and arthritis progression using explainable machine learning (SHAP / LIME), uncovering critical predictive markers for clinical intervention.',
    tags: ['Explainable AI (XAI)', 'BMJ Health & Care Informatics', 'Healthcare Analytics', 'SHAP', 'Clinical ML']
  },
  {
    title: 'Machine Learning Reveals Associations Between Psychosocial Factors and Chronic Kidney Disease',
    journal: 'Nature Health',
    status: 'Under Submission',
    authors: 'Asma Sultana et al.',
    description: 'Pioneering study evaluating deep generative models, diffusion algorithms, and gradient boosting classifiers to analyze high-dimensional psychosocial determinants correlating with chronic kidney disease (CKD).',
    tags: ['Nature Health (Under Submission)', 'GAN', 'Diffusion Models', 'XGBoost', 'AutoEncoder', 'SVM']
  }
];

// Achievements & Participations
export const achievementsData: AchievementItem[] = [
  {
    title: "Dean’s Award for Academic Excellence",
    organization: "University of Asia Pacific (Fall 2023)",
    description: "Awarded by the Dean of the School of Engineering for exceptional academic achievement and top-tier CGPA.",
    iconType: 'award'
  },
  {
    title: "7th Women’s Mathematics Olympiad 2023",
    organization: "University of Dhaka (DU)",
    description: "Selected competitor testing analytical problem-solving, combinatorics, and advanced mathematical reasoning.",
    iconType: 'math'
  },
  {
    title: "JRC Memorial Intra University Math Olympiad",
    organization: "University of Asia Pacific (UAP)",
    description: "Honored participant in university-wide mathematical logic and analytical computation contest.",
    iconType: 'math'
  },
  {
    title: "Intra Department CTF Contest 2022",
    organization: "Cyber Security Club at UAP",
    description: "Competed in Capture The Flag challenges encompassing web security, cryptography, and reverse engineering.",
    iconType: 'security'
  },
  {
    title: "Complete Web Development with Programming Hero",
    organization: "Programming Hero",
    description: "Intensive full-stack curriculum mastering React.js, Node.js, Express, MongoDB, and modern web architectures.",
    iconType: 'code'
  },
  {
    title: "R Programming and Data Science",
    organization: "Iskulghar",
    description: "Specialized certification in exploratory data analysis, statistical modeling, and data visualization in R.",
    iconType: 'code'
  }
];

// Requirement 9: Projects Section (Enriched with SMM Panel, AppifyZone, Customer Support Zone, and Thesis)
export const projectsData: Project[] = [
  {
    id: 'project-thesis',
    title: 'Bangla Text Summarization (BANGLABERT & BERTSUM)',
    category: 'aiml',
    categoryLabel: 'NLP & Deep Learning',
    description: 'Undergraduate thesis implementing extractive and abstractive summarization techniques for Bangla text using fine-tuned transformer models and LSTM architectures.',
    techStack: ['Python', 'BANGLABERT', 'BERTSUM', 'Transformers', 'PyTorch', 'NLP', 'LSTM'],
    image: '/assets/ml-project1.png',
    repoUrl: 'https://github.com/asmasultana07',
    challenges: [
      'Scarcity of cleanly annotated benchmark datasets in low-resource Bengali language processing.',
      'Balancing extractive factual accuracy with abstractive grammatical fluency and coherence.',
      'Fine-tuning large transformer weights with constrained GPU compute memory.'
    ],
    futureImprovements: [
      'Deploy as an open-source huggingface space for instant Bangla document summarization.',
      'Expand training dataset with multi-domain Bengali news and academic corpora.',
      'Incorporate multi-lingual cross-lingual summary translation.'
    ]
  },
  {
    id: 'project-nature',
    title: 'CKD & Psychosocial Factors (Nature Health Submission)',
    category: 'aiml',
    categoryLabel: 'Medical ML Research',
    description: 'Predictive clinical research paper evaluating associations between psychosocial determinants and Chronic Kidney Disease using GAN, XGBoost, ANN, Diffusion, and SVM models.',
    techStack: ['Python', 'GAN', 'Diffusion Models', 'XGBoost', 'AutoEncoder', 'Scikit-Learn', 'ANN'],
    image: '/assets/ml-project2.png',
    repoUrl: 'https://github.com/asmasultana07',
    challenges: [
      'Synthesizing synthetic data via GANs to balance rare clinical comorbidities without hallucinating false correlations.',
      'Comparing diffusion architectures against tree ensembles across non-linear psychosocial variables.',
      'Adhering to rigorous reporting criteria for submission to Nature Health.'
    ],
    futureImprovements: [
      'Publish companion open-source interactive risk score calculator upon paper publication.',
      'Incorporate multi-center longitudinal patient follow-up data.'
    ]
  },
  {
    id: 'project-smm',
    title: 'SMM Panel – Game Library & Presence Platform',
    category: 'frontend',
    categoryLabel: 'React / Next.js',
    description: 'Responsive game library and digital growth web application built using Next.js and Tailwind CSS that helps creators and businesses build an online presence with real-time collaboration.',
    techStack: ['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript', 'Real-time Collab'],
    image: '/assets/project3.PNG',
    liveUrl: 'https://asmasultana07.github.io/Career.io/',
    repoUrl: 'https://github.com/asmasultana07',
    challenges: [
      'Executing real-time collaboration state updates across multiple simultaneous users without lag.',
      'Designing complex multi-platform service listings with responsive filtering.',
      'Balancing high-performance Next.js server components with dynamic client-side interactions.'
    ],
    futureImprovements: [
      'Integrate live WebSockets for instant order dispatch telemetry.',
      'Add multi-tier reseller dashboard with wallet checkout.'
    ]
  },
  {
    id: 'project-appify',
    title: 'AppifyZone – Interactive App Store Simulation',
    category: 'frontend',
    categoryLabel: 'React & Context API',
    description: 'Interactive app-store simulation web application enabling users to browse, view details, install/uninstall, and manage apps with Context API state coordination and LocalStorage persistence.',
    techStack: ['React.js', 'JavaScript (ES6+)', 'Context API', 'Tailwind CSS', 'LocalStorage'],
    image: '/assets/project-dom1.PNG',
    liveUrl: 'https://asmasultana07.github.io/Deshi-Deals/',
    repoUrl: 'https://github.com/asmasultana07',
    challenges: [
      'Structuring Context API providers to avoid unnecessary re-renders when installation states update.',
      'Ensuring local data persistence via LocalStorage synchronizes consistently across browser tabs.',
      'Handling smooth install/uninstall animation states and progress bars.'
    ],
    futureImprovements: [
      'Add user review submission with star ratings and comments.',
      'Implement category search with fuzzy matching algorithm.'
    ]
  },
  {
    id: 'project-support',
    title: 'Customer Support Zone Dashboard',
    category: 'frontend',
    categoryLabel: 'React Dashboard',
    description: 'Responsive React-based customer support dashboard designed to manage, track, and update user tickets dynamically from loaded data following predefined Figma UI specs.',
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Figma to Code', 'State Management'],
    image: '/assets/project2.PNG',
    liveUrl: 'https://asmasultana07.github.io/INANCE-template/',
    repoUrl: 'https://github.com/asmasultana07',
    challenges: [
      'Translating complex multi-pane Figma dashboard layouts into fully responsive flex/grid markup.',
      'Handling dynamic ticket status lifecycle transitions (Open, Pending, Resolved) with immediate UI feedback.',
      'Simulating realistic multi-agent ticket assignment.'
    ],
    futureImprovements: [
      'Connect with real backend ticket queue API and email webhook triggers.',
      'Add canned responses and file attachment upload support.'
    ]
  },
  {
    id: 'project-payoo',
    title: 'Payoo MFS (Mobile Financial Services)',
    category: 'fullstack',
    categoryLabel: 'Fintech Simulation',
    description: 'Mobile wallet simulation inspired by bKash/Nagad handling real-time balance calculations, PIN authorization, cash-in/cash-out, and transaction ledger in the DOM.',
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript (DOM)', 'Local State'],
    image: '/assets/project-dom2.PNG',
    liveUrl: 'https://asmasultana07.github.io/Payoo-MFS/',
    repoUrl: 'https://github.com/asmasultana07/Payoo-MFS',
    challenges: [
      'Managing dynamic DOM state updates accurately when simulating financial math.',
      'Implementing strict input validation for 11-digit mobile numbers and 4-digit security PINs.',
      'Creating an authentic mobile-first viewport feel while keeping it accessible on desktop browsers.'
    ],
    futureImprovements: [
      'Add persistent LocalStorage so transactions are saved across browser refreshes.',
      'Implement biometric Touch/Face ID mock animation and printable transaction receipts.'
    ]
  },
  {
    id: 'project-ml-heart',
    title: 'Heart Disease Analysis & Prediction',
    category: 'aiml',
    categoryLabel: 'Machine Learning & Health',
    description: 'Predictive health analytics model classifying cardiovascular risk using clinical indicators (blood pressure, cholesterol, ECG) with supervised ML classifiers. Published on Kaggle.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Kaggle'],
    image: '/assets/ml-project1.png',
    liveUrl: 'https://www.kaggle.com/code/abasma/heart-disease-analysis',
    repoUrl: 'https://github.com/asmasultana07/Heart-Disease-Analysis.git',
    challenges: [
      'Addressing class imbalances and missing values in patient clinical telemetry without introducing synthetic bias.',
      'Interpreting high-dimensional feature importance to distinguish true medical correlation from noise.',
      'Tuning hyperparameters across Logistic Regression, Random Forest, and SVM to maximize recall on high-risk patients.'
    ],
    futureImprovements: [
      'Deploy the trained ML model as an interactive web API using FastAPI and a React frontend.',
      'Incorporate explainable AI (SHAP values) for transparent clinical inspection.'
    ]
  },
  {
    id: 'project-mortality-r',
    title: 'Data Visualization on Mortality Dataset with R',
    category: 'aiml',
    categoryLabel: 'Statistical Computing',
    description: 'Multivariate statistical exploratory analysis and data preprocessing pipelines conducted on Mortality and Iris datasets using R programming, ggplot2, and Python.',
    techStack: ['R Programming', 'Python', 'Seaborn', 'ggplot2', 'Data Preprocessing'],
    image: '/assets/ml-project2.png',
    liveUrl: 'https://github.com/asmasultana07/Data-Visualization.git',
    repoUrl: 'https://github.com/asmasultana07/Data-Management-Visualization-with-R-programming.git',
    challenges: [
      'Handling outliers and varying population densities across mortality cohorts.',
      'Synchronizing data frames between R statistical environments and Python visualization libraries.',
      'Selecting optimal visual projections to communicate multi-variable findings clearly.'
    ],
    futureImprovements: [
      'Build an interactive R Shiny web dashboard allowing users to filter mortality metrics by region and age.',
      'Implement automated statistical test reporting (ANOVA, p-value calculations).'
    ]
  },
  {
    id: 'project-ocrs',
    title: 'OCRS – Online Crime Reporting Server',
    category: 'fullstack',
    categoryLabel: 'Full Stack & Database',
    description: 'A comprehensive law enforcement and citizen incident portal allowing online crime filing, investigation tracking, and statistical reporting with MySQL database.',
    techStack: ['Python', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap', 'XAMPP'],
    image: '/assets/web-project1.PNG',
    liveUrl: 'https://github.com/asmasultana07/OCRS-Online-Crime-Reporting-Server/blob/master/README.md',
    repoUrl: 'https://github.com/asmasultana07/OCRS-Online-Crime-Reporting-Server.git',
    challenges: [
      'Designing normalized relational SQL schemas connecting citizens, police stations, incident reports, and evidence files.',
      'Enforcing strict role-based authorization so citizens only access their own submissions.',
      'Securing SQL queries against injection on local XAMPP Apache servers.'
    ],
    futureImprovements: [
      'Modernize backend with Python Django or Node.js REST API with JWT authentication.',
      'Add interactive geospatial map view for geographic crime clustering.'
    ]
  }
];
