const profileData = {
  name: "Noprizal",
  role: "Software Developer",
  photo:
    "https://res.cloudinary.com/dk16ng09n/image/upload/v1765988672/personal/web-porto/WhatsApp_Image_2025-12-17_at_11.17.56_PM_isskwf.jpg",
  intro:
    "Passionate software developer with expertise in building modern web applications using cutting-edge technologies. I specialize in creating scalable, performant, and user-friendly solutions that solve real-world problems. With a strong foundation in both frontend and backend development, I continuously strive to deliver exceptional digital experiences.",
  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Spring",
    "Java",
    "PHP",
    "Laravel",
  ],
  socials: {
    instagram: "https://www.instagram.com/_kkbwk/",
    linkedin: "https://www.linkedin.com/in/noprizal/",
    github: "https://github.com/KakaBewok",
    email: "rizalnov667@gmail.com",
  },
};

const educationData = [
  {
    institution: "Djuanda University",
    degree: "Bachelor of Economics",
    period: "2018 - 2022",
    location: "Bogor, Indonesia",
  },
  {
    institution: "Amaliah Vocational High School",
    degree: "Computer and Network Engineering",
    period: "2011 - 2014",
    location: "Bogor, Indonesia",
  },
];

const experienceData = [
  {
    company: "PT. Voltras International",
    position: "Back End Developer",
    period: "2023 - Present",
    location: "South Tangerang, Indonesia ",
    techStack: ["Java", "Spring", "PostgreSQL", "MongoDB"],
    project:
      "Payment Gateway Integration, Accounting System & Railway Gateway API",
    responsibilities: [
      "Designed, developed, and maintained backend systems for seamless payment integrations with major banks (BRI, BCA, Permata Bank, BSI).",
      "Integrated and optimized bank statement APIs to support automated fund transfers and reconciliation processes.",
      "Implemented Virtual Account APIs to enable automated and scalable payment solutions.",
      "Handled high-volume financial transactions in production environments with a strong focus on data accuracy, security, and reliability.",
      "Collaborated closely with banking partners and internal stakeholders to ensure regulatory compliance and smooth system integrations.",
      "Developed a comprehensive accounting system to generate journals, ledgers, and financial reports while managing millions of transaction records with high data integrity.",
      "Designed and developed a backend gateway service that integrates with external railway supplier APIs (KAI).",
      "Consumed and normalized data from supplier APIs to provide standardized responses for internal services.",
      "Exposed internal APIs consumed by the railway-service for schedule retrieval, availability, booking, and transaction workflows.",
      "Implemented error handling, data validation, and response mapping to ensure system stability and data consistency.",
      "Ensured reliable communication between external suppliers and internal microservices architecture.",
    ],
    achievements: [
      "Successfully processed and maintained millions of financial transactions with high reliability.",
      "Improved transaction automation and reconciliation efficiency through optimized bank API integrations.",
      "Delivered stable and compliant backend services for mission-critical financial systems.",
      "Enabled seamless integration between external railway suppliers and internal railway services.",
      "Improved system reliability through centralized gateway and standardized API contracts.",
    ],
  },
  {
    company: "Calaraya Project (Freelance)",
    position: "Full Stack Developer",
    period: "2025 - Present",
    location: "Bogor, Indonesia",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Laravel",
      "PHP",
    ],
    project: "Websites & Digital Invitation",
    responsibilities: [
      "Designed and developed custom websites and digital wedding invitations based on client requirements and branding preferences.",
      "Implemented responsive and mobile-friendly layouts to ensure optimal user experience across devices.",
      "Integrated multimedia content such as images, videos, background music, and RSVP forms.",
      "Collaborated directly with clients to gather requirements, provide design suggestions, and deliver revisions efficiently.",
      "Managed deployment, hosting, and basic SEO optimization for client websites.",
    ],
    achievements: [
      "Successfully delivered multiple custom web and digital invitation projects with high client satisfaction.",
      "Improved client engagement through visually appealing and interactive invitation designs.",
      "Built reusable templates to reduce development time while maintaining customization flexibility.",
      "Developed high-performance websites optimized for fast loading, smooth animations, and responsive behavior across modern browsers.",
      "Implemented image and media optimization strategies using Cloudinary to balance visual quality and performance.",
      "Applied modern UI/UX principles to enhance readability, accessibility, and overall user experience.",
      "Reduced page load time by optimizing assets, layout structure, and component rendering in Next.js.",
      "Successfully deployed and maintained production websites with stable uptime and consistent performance.",
    ],
  },
  // {
  //   company: "Djuanda University",
  //   position: "System Administrator & Administrative Staff",
  //   period: "2015 - 2023",
  //   location: "Bogor, Indonesia",
  //   techStack: ["Ms Office"],
  //   project: "Neo Feeder PD-DIKTI Academic System",
  //   responsibilities: [
  //     "Managed student academic records, including biodata, educational history, curriculum details, and enrollment data.",
  //     "Maintained and validated student grades to ensure accuracy and compliance with academic regulations.",
  //     "Prepared and organized institutional data for higher education accreditation assessments.",
  //     "Handled and facilitated incoming and outgoing correspondence, including document processing and distribution, to support administrative operations.",
  //   ],
  //   achievements: [
  //     "Ensured accurate and compliant academic data reporting for national higher education systems.",
  //     "Supported successful accreditation processes through well-prepared and structured academic data.",
  //     "Maintained efficient administrative workflows for daily university operations.",
  //   ],
  // },
];

const portfolioProjects = [
  {
    title: "Rent Clothes Web ",
    description:
      "A web application for renting clothes and admin panel to manage the clothes & transactions.",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765989761/personal/web-porto/qatia_tiulwx.png",
    techStack: ["Laravel", "React", "MySQL", "Tailwind CSS", "Typescript"],
    previewUrl: "https://qatiarent.com/",
  },
  {
    title: "E-Invitation Netflix Theme",
    description: "A modern e-invitation platform with a Netflix-inspired theme",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992495/personal/web-porto/netflix_jmoiic.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/bella-syafik?id=OkfVBm",
  },
  {
    title: "E-Invitation Floral Theme",
    description:
      "A beautiful e-invitation platform with a floral-inspired theme",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992923/personal/web-porto/floral_lund0v.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/ilham-rosi?id=O9IPp",
  },
  {
    title: "E-Invitation Magazine Theme",
    description:
      "A stylish e-invitation platform with a magazine-inspired theme",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765993975/personal/web-porto/magazine_yt4whr.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/rahma-jalal?id=Gku6G",
  },
  {
    title: "E-Invitation Maroon Theme",
    description:
      "An Elegant e-invitation platform with a maroon-inspired theme",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994308/personal/web-porto/maroon_aohj7a.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/reigiya-amar?id=1XsqW",
  },
  {
    title: "E-Invitation Stylish Bold Theme",
    description:
      "A modern e-invitation platform with a stylish bold-inspired theme",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994579/personal/web-porto/stylishbold_armbt3.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/dinna-hudha?id=6yTQy",
  },
];
const contactInfo = {
  email: "rizalnov667@gmail.com",
  instagram: "https://www.instagram.com/_kkbwk/",
};

export {
  profileData,
  educationData,
  experienceData,
  portfolioProjects,
  contactInfo,
};
