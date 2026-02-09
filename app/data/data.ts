import { Github, Instagram, Linkedin, Mail } from "lucide-react";

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
    field: "Islamic Economics",
    period: "2018 - 2022",
    location: "Bogor, Indonesia",
  },
  {
    institution: "Amaliah Vocational High School",
    degree: "Vocational High School",
    field: "Computer and Network Engineering",
    period: "2011 - 2014",
    location: "Bogor, Indonesia",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/noprizal",
    label: "Instagram",
    color: "hover:text-pink-400",
  },
  {
    icon: Github,
    href: "https://github.com/noprizal",
    label: "GitHub",
    color: "hover:text-gray-300",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/noprizal",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: Mail,
    href: "mailto:rizalnov667@gmail.com",
    label: "Email",
    color: "hover:text-green-400",
  },
];

const experienceData = [
  {
    company: "PT. Voltras International",
    position: "Back End Developer",
    period: "2023 - Present",
    location: "South Tangerang, Indonesia ",
    techStack: ["Java", "Spring", "PostgreSQL", "MongoDB", "Docker"],
    project:
      "Payment Gateway Integration, Accounting System & Railway Gateway API",
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
    period: "2024 - Present",
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
    achievements: [
      "Successfully delivered multiple custom web and digital invitation projects with high client satisfaction.",
      "Improved client engagement through visually appealing and interactive invitation designs.",
      "Developed high-performance websites optimized for fast loading, smooth animations, and responsive behavior across modern browsers.",
      "Implemented image and media optimization strategies using Cloudinary to balance visual quality and performance.",
      "Applied modern UI/UX principles to enhance readability, accessibility, and overall user experience.",
    ],
  },
];

const portfolioProjects = [
  {
    title: "Calaraya",
    description:
      "A web application that provides website development and digital invitation services.",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766645318/personal/web-porto/calaraya_kubdtf.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/",
  },
  {
    title: "Qatia Rent",
    description:
      "A web application for renting clothes and admin panel to manage the clothes & transactions.",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765989761/personal/web-porto/qatia_tiulwx.png",
    techStack: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    previewUrl: "https://qatiarent.com/",
  },
  {
    title: "E-Invitation Netflix",
    description: "A modern e-invitation with a Netflix-inspired theme",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992495/personal/web-porto/netflix_jmoiic.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/bella-syafik?id=OkfVBm",
  },
  {
    title: "E-Invitation Floral",
    description: "A beautiful e-invitation with a floral-inspired theme",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992923/personal/web-porto/floral_lund0v.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/ilham-rosi?id=O9IPp",
  },
  {
    title: "E-Invitation Magazine",
    description: "A stylish e-invitation with a magazine-inspired theme",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765993975/personal/web-porto/magazine_yt4whr.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/rahma-jalal?id=Gku6G",
  },
  {
    title: "E-Invitation Maroon",
    description: "An Elegant e-invitation with a maroon-inspired theme",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994308/personal/web-porto/maroon_aohj7a.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/reigiya-amar?id=1XsqW",
  },
  {
    title: "E-Invitation Stylish Bold",
    description: "A modern e-invitation with a stylish bold-inspired theme",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994579/personal/web-porto/stylishbold_armbt3.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/dinna-hudha?id=6yTQy",
  },
  {
    title: "E-Invitation Monochrome",
    description: "A modern e-invitation with a monochrome-inspired theme",
    imageUrl:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766313919/personal/web-porto/nadhar_rginzu.png",
    techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
    previewUrl: "https://calaraya.vercel.app/nadiah-haris?id=XyUaw",
  },
];
const contactInfo = {
  email: "rizalnov667@gmail.com",
  instagram: "https://www.instagram.com/_kkbwk/",
};

const certificatesData = [
  {
    id: 1,
    title: "Rest API with Go & Docker",
    issuing_organization: "BuildWithAngga",
    issue_date: "2025-03-09",
    expiration_date: null,
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1770624102/personal/certifications/bwa-go_hwbkkm.jpg",
    desc: "Learn how to build a REST API with Go and Docker.",
    preview_url: "https://res.cloudinary.com/dk16ng09n/image/upload/v1770624102/personal/certifications/bwa-go_hwbkkm.jpg",
  },
  {
    id: 2,
    title: "Basic Artificial Intelligence",
    issuing_organization: "Dicoding",
    issue_date: "2024-12-18",
    expiration_date: "2027-12-18",
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1770625831/personal/certifications/basic_ai_dicoding_jgfmec.webp",
    desc: "Learn basics of Machine Learning, Deep Learning and Data Processing.",
    preview_url: "https://www.dicoding.com/certificates/6RPNYEQQ9Z2M",
  },
  {
    id: 3,
    title: "Basic Structure Query Language",
    issuing_organization: "Dicoding",
    issue_date: "2024-10-08",
    expiration_date: "2027-10-08",
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1770629119/personal/certifications/sql_dicoding_h0xueb.png",
    desc: "Learn the fundamentals of SQL, including data types, queries and database design.",
    preview_url: "https://www.dicoding.com/certificates/N9ZOY6JGDPG5",
  },
  {
    id: 4,
    title: "Basic Data Science",
    issuing_organization: "Dicoding",
    issue_date: "2024-10-03",
    expiration_date: "2027-10-03",
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1770630856/personal/certifications/data_science_dicoding_mfbbja.png",
    desc: "Learn the fundamentals of data science, machine learning, and data visualization.",
    preview_url: "https://www.dicoding.com/certificates/QLZ9VKL5DX5D",
  },
  {
    id: 5,
    title: "Build Booking Car Wash with Laravel & Filament",
    issuing_organization: "BuildWithAngga",
    issue_date: "2024-09-16",
    expiration_date: null,
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1770633273/personal/certifications/car_wash_bwa_ddpgc8.jpg",
    desc: "Learn how to build a booking car wash with Laravel, MySQL and Filament.",
    preview_url: "https://res.cloudinary.com/dk16ng09n/image/upload/v1770633273/personal/certifications/car_wash_bwa_ddpgc8.jpg",
  },
  {
    id: 6,
    title: "Build Company Profile with Laravel",
    issuing_organization: "BuildWithAngga",
    issue_date: "2024-08-26",
    expiration_date: null,
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1770636704/personal/certifications/laravel_compro_ho8jqq.jpg",
    desc: "Learn how to build a company profile with Laravel.",
    preview_url: "https://res.cloudinary.com/dk16ng09n/image/upload/v1770636704/personal/certifications/laravel_compro_ho8jqq.jpg",
  },
  {
    id: 7,
    title: "Kotlin for Android Development",
    issuing_organization: "Google",
    issue_date: "2023-05-15",
    expiration_date: null,
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994579/personal/web-porto/stylishbold_armbt3.png",
    desc: "Learning Kotlin language and Android development basics with Jetpack Compose.",
    preview_url: "https://developers.google.com/certification/associate-android-developer",
  },
];

export {
  profileData,
  educationData,
  experienceData,
  portfolioProjects,
  certificatesData,
  contactInfo,
  socialLinks,
};
