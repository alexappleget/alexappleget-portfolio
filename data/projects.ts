import type { IProject } from "@/types/interface";

export const projects: IProject[] = [
  {
    description:
      "A full-stack application for improving collaboration and communication for group gameplay. Features custom-rolled authentication with JWT tokens, refresh tokens, and httpOnly cookies.",
    githubUrls: [
      { label: "Frontend", url: "https://github.com/alexappleget/terrrrr-frontend" },
      { label: "Backend", url: "https://github.com/alexappleget/terrrrr-backend" },
    ],
    highlights: [
      "Custom authentication with JWT tokens, refresh tokens, and httpOnly cookies",
      "Custom middleware functions to protect backend endpoints",
      "Role-based access control",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express.js"],
    title: "Terrrrr",
  },
  {
    description:
      "A realtime AI assistant with voice communication. Uses a wake word ('Hey Jarvis') to start conversations and can perform tasks like writing PR descriptions and creating Google Calendar events.",
    githubUrls: [
      { label: "Code", url: "https://github.com/alexappleget/jarvis" },
    ],
    highlights: [
      "Realtime AI API integration with WebSocket communication",
      "Wake word detection for hands-free interaction",
      "Custom AI tools for task automation (PR descriptions, calendar events)",
    ],
    techStack: ["Node.js", "WebSockets", "OpenAI Realtime API", "AI Tools"],
    title: "Jarvis",
  },
  {
    description:
      "A Next.js application that makes secret santa gift-giving magical with AI-customized gift suggestions based on each person's interests.",
    githubUrls: [
      { label: "Code", url: "https://github.com/LetsGetTechnical/elecretanta" },
    ],
    highlights: [
      "OpenAI API integration for personalized gift suggestions",
      "Automated profile creation with Supabase function triggers",
      "100% test coverage with React Testing Library and Jest",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "OpenAI API"],
    title: "Elecretanta",
  },
];
