import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Cherish",
  initials: "PSC",
  url: "https://github.com/cherish2003",
  location: "Andhra Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Andhra+Pradesh",
  description:
    "Full Stack Developer passionate about building efficient and scalable applications. Open-source contributor and hackathon enthusiast.",
  summary:
    "I'm currently pursuing my Bachelor's degree at SRM University, AP. I have experience working as a Full Stack Developer, contributing to both frontend and backend projects. I have also actively participated in multiple hackathons, including winning the prestigious Smart India Hackathon 2024.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "PostgreSQL",
    "MongoDB",
    "Flutter",
    "AWS",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "saicherish90@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cherish2003",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/polu-siva-sai-cherish-94688b236/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Cherishhere",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:saicherish90@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "CoupleSquad",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Intern",
      logoUrl: "/atomic.jpeg",
      start: "Aug 2023",
      end: "Oct 2023",
      description:
        "Contributed to the development of the primary website (Version 2), enhancing UI with Material-UI and optimizing the backend. Integrated Socket.IO for real-time messaging and developed new APIs to improve system functionality.",
    },
    {
      company: "BragTech",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Front End Intern",
      logoUrl: "/bragtechhq_logo.jpeg",
      start: "Jun 2023",
      end: "Aug 2023",
      description:
        "Led a team of four developers to create web pages using Next.js and Tailwind CSS. Developed a custom Content Management System (CMS) to optimize blog and content management processes.",
    },
  ],
  projects: [
    {
      title: "SRMAP CRCS TrackR",
      href: "https://apps.apple.com/app/srmap-crcs-trackr/id6511195848",
      dates: "2023 - Present",
      active: true,
      description:
        "Developed a career management app in Flutter for university students, used by 1200+ users. Implemented OAuth-based login, device-based authentication, and QR code attendance, making academic management paperless.",
      technologies: ["Flutter", "OAuth", "QR Code", "Firebase"],
      links: [],
      image:
        "data:image/jpeg;base64,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",
      video: "",
    },
    // {
    //   title: "AndroidArmour",
    //   href: "https://github.com/cherish2003/AndroidArmour",
    //   dates: "2023",
    //   active: true,
    //   description:
    //     "Developed a web-based framework using React.js and FastAPI to integrate security features into Android applications (APKs) for Android 14+.",
    //   technologies: ["React.js", "FastAPI", "Python", "Android Security"],
    //   links: [],
    //   image: "",
    //   video: "",
    // },
    {
      title: "Pixel Plank",
      href: "https://github.com/cherish2003/PixelPlank",
      dates: "2023",
      active: true,
      description:
        "Developed a real-time collaborative whiteboard app using React, Tailwind CSS, Socket.io, Express, and MongoDB.",
      technologies: ["React", "TailwindCSS", "Socket.io", "MongoDB"],
      links: [],
      image: "/pixelplank.png",
      video: "",
    },
    {
      title: "Insightfy",
      href: "https://github.com/cherish2003/Insightfy",
      dates: "2023",
      active: true,
      description:
        "Developed AI-powered file analysis platform using Next.js, TypeScript, Shadcn UI, and Tailwind CSS featuring drag-and-drop uploads, text analysis, and CSV report downloads.",
      technologies: ["Next.js", "TypeScript", "Shadcn UI", "TailwindCSS"],
      links: [],
      image: "/insightfy.png",
      video:
        "",
    },
    {
      title: "Connect",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "A private multi-chat messenger built using React.js, Tailwind CSS, and Firebase. Features include login, registration, image reserving, and real-time messaging powered by Firebase backend.",
      technologies: ["React.js", "Tailwind CSS", "Firebase"],
      links: [],
      image: "/connect.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon (SIH) 2024",
      dates: "2024",
      location: "India",
      description:
        "Represented SRM University, AP, as part of the winning team in India's largest and most prestigious hackathon, competing among 88,000+ teams.",
      image:
        "data:image/png;base64,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",
      mlh: "",
      links: [],
    },
    {
      title: "FOSSASIA 2024 Hackathon ",
      dates: "2024",
      location: "India",
      description:
        "Participant, FOSSASIA 2024 Hackathon - Competed in a renowned hackathon, collaborating on innovative open-source solutions.",
      image:
        "data:image/jpeg;base64,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EeR+blz7oS6XecdUev2blUvBVULVXNdunb9+ZqNjo4+O5/nTY6OPjuf51ldnWLOEnvEXiTZ1izhJ7xF4lHRd0/Uv37PHR8oe57WIdGIs1lq7j555fydmtyfkurrbwOfXOXP1LxNGH26tfvk/pPX3Z1izhJ7xF4l7+A8F4htWLKCur7fyVNEX67+WjdlmxwG4OJ5yF8UG7ItQaJ2ZEI4lsbMiM209OS6uWiZYVhsT6NbZe62Stpal9DUynWk1WB7HO6XauY3n3rcPGbHAc5CgGzrFnCT3iLxLXkPglu6nndkw1lKavVbWnPTj5tGq2O/9fHc/zpsdPHh3P86yuzrFnCT3iLxJs6xZwk94i8Sy6R7p+p39+zx0fKPuarY4ePDuf51iMY4cOGLq2hNYyq1ohJrtbqkZkjIjM5Hcu7s6xZwk94i8S7Vv0Y4lqahrKmnio4s/Slkma7IewNJJPyUZQ3lpGtrzLachVS3rsuMl2aRX4epU9HtxnumELfU1bi+bVdG553l2q4tBPWcgM/apBpM+3N0+9H/TarpZLZBZrVTW6lz5KBmqCedx5yT7SST8VK8dYKxFdcV19bQW7laaVzCx/LRtzyY0HcXA84K0ZEJOpLmzj7IyKI59ljajFp6a8OtFDwF9jrT+rtU/023Gc3ShtmsRTsg5ctB3OcXObv8AcG/iVSMI0dRb8NW6jrI+TqIYQ2RmYOR943LxNImDHYoggnopWRV1OCG8p+jI09BPQR0e89eYsshKVOi5mXCyKatpOyx/Lq+P89ZO8F4DGKLbLWedY6XUlMfJiHlHcwOZ9IZc60Gx0cfHc/zrLO0c4ra4gWvWA6RURZH9pfNnWLOEnvEXiWSMdFo636nobbnOblDMjFdmkXp6mq2Ojj47n+deVijRsLBYqm6ed/KOQ1P8LybU1tZwbz656+peVs6xZwk94i8SbOsWcJPeIvEjimuFb9T5XbOM05ZkWuzSPH1Oxol+2tN/2pP5SrwpJo7wdf7PiiCsuVvMNO2N4L+WjdkS3Ibg4lVtasWLjDRo4G3ra7cpSrkmtFyevaERFpOKEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//9k=",
      mlh: "",
      links: [],
    },
    {
      title: "C Square 24-Hour Hackathon 2022",
      dates: "2022",
      location: "India",
      description:
        "Winner, C Square 24-Hour Hackathon — Outperformed 43 teams in a competitive hackathon hosted by Hackathon Club, SRM University, AP.",
      image: "/srmap.png",
      mlh: "",
      links: [],
    },
  ],
  education: [
    {
      degree: "Bachelor’s Degree in Computer Science",
      school: "SRM University, Andhra Pradesh",
      gpa: "8.5/10.0",
      logoUrl: "/srmap.png",
      href: "https://srmap.edu.in/",
      start: "2021",
      end: "2025",
    },
  ],
} as const;
