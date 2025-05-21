export interface Project {
    id: number;
    title: string;
    description: string;
    bgColor: string;
    tags: string[];
    link: string;
  }
  
  // Data proyek portofolio
  export const projects: Project[] = [
    {
      id: 1,
      title: "Personal Website",
      description: "Website personal dengan desain minimalis menggunakan Next.js dan Tailwind CSS.",
      bgColor: "bg-gray-200",
      tags: ["Next.js", "Tailwind CSS", "React"],
      link: "https://github.com/Ridzz05"
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description: "Dashboard admin untuk platform e-commerce dengan fitur analitik dan manajemen produk.",
      bgColor: "bg-gray-300",
      tags: ["React", "TypeScript", "Chart.js"],
      link: "https://github.com/Ridzz05"
    },
    {
      id: 3,
      title: "Mobile App UI",
      description: "Desain UI untuk aplikasi mobile dengan fokus pada pengalaman pengguna yang intuitif.",
      bgColor: "bg-gray-200",
      tags: ["Figma", "UI/UX", "Prototype"],
      link: "https://github.com/Ridzz05"
    },
    {
      id: 4,
      title: "API Integration",
      description: "Integrasi berbagai API untuk menghasilkan aplikasi web yang dinamis dan responsif.",
      bgColor: "bg-gray-300",
      tags: ["API", "JavaScript", "Node.js"],
      link: "https://github.com/Ridzz05"
    }
  ];