"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandSocketIo, TbRobot, TbTools } from "react-icons/tb";

import type { ITechItemWithIcon } from "@/types/interface";

const techItems: ITechItemWithIcon[] = [
  { color: "#61DAFB", icon: <SiReact />, name: "React" },
  { color: "#3178C6", icon: <SiTypescript />, name: "TypeScript" },
  { color: "#ffffff", icon: <SiNextdotjs />, name: "Next.js" },
  { color: "#339933", icon: <SiNodedotjs />, name: "Node.js" },
  { color: "#ffffff", icon: <SiExpress />, name: "Express.js" },
  { color: "#06B6D4", icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { color: "#4169E1", icon: <SiPostgresql />, name: "PostgreSQL" },
  { color: "#2D3748", icon: <SiPrisma />, name: "Prisma ORM" },
  { color: "#3FCF8E", icon: <SiSupabase />, name: "Supabase" },
  { color: "#00A67E", icon: <SiOpenai />, name: "OpenAI API" },
  { color: "#D97757", icon: <TbApi />, name: "Claude API" },
  { color: "#D97757", icon: <TbRobot />, name: "Claude Code" },
  { color: "#00A67E", icon: <TbRobot />, name: "Realtime AI" },
  { color: "#ffffff", icon: <TbBrandSocketIo />, name: "WebSockets" },
  { color: "#FFCB05", icon: <TbTools />, name: "MCP Building" },
  { color: "#FFCB05", icon: <TbRobot />, name: "LLM Building" },
  { color: "#FFCB05", icon: <TbTools />, name: "AI Tools" },
  { color: "#ffffff", icon: <SiVercel />, name: "Vercel" },
  { color: "#46E3B7", icon: <TbApi />, name: "Render" },
];

const loopItems: ITechItemWithIcon[] = [...techItems, ...techItems];

export const TechStrip = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="w-full bg-background-secondary border-y border-border py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-8 flex-wrap">
            {techItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 text-lg font-medium text-text-muted"
              >
                <span style={{ color: item.color }}>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-background-secondary border-y border-border py-4">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <motion.div
          className="flex w-max gap-12"
          animate={{ x: "-50%" }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-2 text-lg font-medium text-text-muted whitespace-nowrap"
            >
              <span className="text-xl" style={{ color: item.color }}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
