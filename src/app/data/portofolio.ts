export interface Project {
    id: number;
    title: string;
    description: string;
    bgColor: string;
    image: string;
    tags: string[];
    link: string;
  }
  
  // Data proyek portofolio
  export const projects: Project[] = [
    {
      id: 1,
      title: "Macommerce",
      description: "Website ini awalnya dibuat hanya sekedar iseng semata, tapi makin hari aku selalu mengembangkan beberapa fitur pada website.",
      bgColor: "bg-gray-200",
      image: "https://img.freepik.com/free-vector/gradient-website-template_23-2149160298.jpg",
      tags: ["Next.JS", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/Ridzz05/macommerce/"
    },
    {
      id: 2,
      title: "Aplikasi Kasir Sederhana",
      description: "Aplikasi kasir ini dibuat dengan menggunakan Framework Flutter, mengintegrasikan SQLite untuk membuat aplikasi menjadi offline sepenuhnya.",
      bgColor: "bg-gray-300",
      image: "https://img.freepik.com/free-vector/dashboard-user-panel-template_23-2148399136.jpg",
      tags: ["Flutter", "Dart", "SQLite", "UI/UX", "Prototype", "Figma"],
      link: "https://github.com/Ridzz05"
    },
    {
      id: 3,
      title: "Mobile App UI",
      description: "Desain UI untuk aplikasi mobile dengan fokus pada pengalaman pengguna yang intuitif.",
      bgColor: "bg-gray-200",
      image: "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg",
      tags: ["Figma", "UI/UX", "Prototype"],
      link: "https://github.com/Ridzz05"
    },
    {
      id: 4,
      title: "API Integration",
      description: "Integrasi berbagai API untuk menghasilkan aplikasi web yang dinamis dan responsif.",
      bgColor: "bg-gray-300",
      image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
      tags: ["API", "JavaScript", "Node.js"],
      link: "https://github.com/Ridzz05"
    }
  ];