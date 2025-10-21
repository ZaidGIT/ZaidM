import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Database,
  Code2,
  Layers,
  GitBranch,
  Cloud,
  Cpu,
  FileJson,
} from "lucide-react";

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  items: string[];
}

export function Skills({ darkMode }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills: Skill[] = [
    {
      name: "Machine Learning & AI",
      icon: <Brain size={24} />,
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "GenAI"],
    },
    {
      name: "Data Science",
      icon: <Cpu size={24} />,
      items: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis", "Statistics"],
    },
    {
      name: "Frontend Development",
      icon: <Code2 size={24} />,
      items: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      name: "Backend Development",
      icon: <Layers size={24} />,
      items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Microservices"],
    },
    {
      name: "Databases & ORMs",
      icon: <Database size={24} />,
      items: ["MongoDB", "MySQL", "PostgreSQL", "Prisma ORM", "Sequelize ORM"],
    },
    {
      name: "DevOps & Tools",
      icon: <Cloud size={24} />,
      items: ["AWS", "Docker", "Git", "GitLab", "CI/CD", "Linux"],
    },
    {
      name: "Version Control",
      icon: <GitBranch size={24} />,
      items: ["Git", "GitHub", "GitLab", "Branching", "Code Review", "Collaboration"],
    },
    {
      name: "API Development",
      icon: <FileJson size={24} />,
      items: ["REST", "GraphQL", "JSON", "API Design", "Authentication", "Testing"],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`min-h-screen py-32 relative overflow-hidden ${darkMode ? "bg-black" : "bg-white"}`}
    >
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage: darkMode
            ? "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={`mb-16 text-center ${darkMode ? "text-white" : "text-black"}`}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-6 rounded-xl border ${
                darkMode
                  ? "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20"
                  : "bg-gray-50 border-black/10 hover:bg-gray-100 hover:border-black/20"
              } transition-all duration-300`}
            >
              <motion.div
                className={`w-12 h-12 rounded-lg ${
                  darkMode ? "bg-white/5" : "bg-black/5"
                } flex items-center justify-center mb-4`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className={darkMode ? "text-white" : "text-black"}>
                  {skill.icon}
                </div>
              </motion.div>

              <h3 className={`mb-4 ${darkMode ? "text-white" : "text-black"}`}>
                {skill.name}
              </h3>

              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.05 + i * 0.03 }}
                    whileHover={{ x: 5 }}
                    className={`text-sm flex items-center gap-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <motion.span
                      className={`w-1 h-1 rounded-full ${
                        darkMode ? "bg-white/50" : "bg-black/50"
                      }`}
                      whileHover={{ scale: 2 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
