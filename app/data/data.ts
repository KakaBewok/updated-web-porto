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
    title: "The Ultimate Next.js Series",
    issuing_organization: "Code with Mosh",
    issue_date: "2024-05-15",
    expiration_date: null,
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1766645318/personal/web-porto/calaraya_kubdtf.png",
    desc: "Master Next.js 14/15, the most popular React framework for building full-stack applications.",
    preview_url: "https://codewithmosh.com/",
  },
  {
    id: 2,
    title: "Mastering TypeScript",
    issuing_organization: "Udemy",
    issue_date: "2024-03-10",
    expiration_date: "2026-03-10",
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1765989761/personal/web-porto/qatia_tiulwx.png",
    desc: "Comprehensive course covering advanced TypeScript features, patterns, and best practices.",
    preview_url: "https://www.udemy.com/",
  },
  {
    id: 3,
    title: "Full Stack Java Developer",
    issuing_organization: "Binar Academy",
    issue_date: "2023-11-20",
    expiration_date: null,
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992495/personal/web-porto/netflix_jmoiic.png",
    desc: "Intensive bootcamp covering Java, Spring Boot, and modern frontend technologies.",
    preview_url: "https://www.binaracademy.com/",
  },
  {
    id: 4,
    title: "Advanced React Patterns",
    issuing_organization: "Frontend Masters",
    issue_date: "2024-01-05",
    expiration_date: null,
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992923/personal/web-porto/floral_lund0v.png",
    desc: "Deep dive into React design patterns, performance optimization, and custom hooks.",
    preview_url: "https://frontendmasters.com/",
  },
  {
    id: 5,
    title: "Cloud Practitioner",
    issuing_organization: "AWS",
    issue_date: "2023-08-12",
    expiration_date: "2026-08-12",
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1765993975/personal/web-porto/magazine_yt4whr.png",
    desc: "Foundational knowledge of AWS Cloud platform, services, and security.",
    preview_url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    id: 6,
    title: "Responsive Web Design",
    issuing_organization: "freeCodeCamp",
    issue_date: "2022-12-30",
    expiration_date: null,
    image_path: "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994308/personal/web-porto/maroon_aohj7a.png",
    desc: "Mastering HTML5, CSS3, and responsive design principles for modern web.",
    preview_url: "https://www.freecodecamp.org/certification/fcc12345678/responsive-web-design",
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
