import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceProps {
  darkMode: boolean;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  current?: boolean;
}

export function Experience({ darkMode }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: ExperienceItem[] = [
    {
      company: "IT Idol Technologies",
      role: "Associate SDE",
      period: "Jan 2025 – Present",
      current: true,
      description: [
        "Developed scalable ed-tech systems using React.js, Node.js, Prisma ORM, and MySQL",
        "Implemented GraphQL APIs for efficient data querying and management",
        "Collaborated using GitLab for version control and team coordination",
        "Deployed applications on AWS infrastructure with focus on performance and reliability",
      ],
    },
    {
      company: "1Rivet",
      role: "SDE Intern",
      period: "Apr 2024 – Jul 2024",
      description: [
        "Built full-stack features for web applications using the MERN stack",
        "Worked with Sequelize ORM for database modeling and migrations",
        "Contributed to backend API development and integration",
        "Gained hands-on experience with modern development workflows and best practices",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className={`min-h-screen flex items-center py-32 relative overflow-hidden ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage: darkMode
              ? "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)"
              : "radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={`mb-16 text-center ${darkMode ? "text-white" : "text-black"}`}
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ x: 10, scale: 1.01 }}
              className={`p-8 rounded-xl border ${
                darkMode
                  ? "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20"
                  : "bg-gray-50 border-black/10 hover:bg-gray-100 hover:border-black/20"
              } transition-all duration-300`}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className={`p-4 rounded-lg flex-shrink-0 ${
                    darkMode ? "bg-white/5" : "bg-black/5"
                  }`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase
                    className={darkMode ? "text-white" : "text-black"}
                    size={24}
                  />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`mb-1 ${darkMode ? "text-white" : "text-black"}`}>
                        {exp.role}
                      </h3>
                      <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <motion.span
                        className={`px-3 py-1 rounded-full text-xs ${
                          darkMode
                            ? "bg-white/10 text-gray-300 border border-white/20"
                            : "bg-black/5 text-gray-700 border border-black/10"
                        }`}
                        animate={{
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        Current
                      </motion.span>
                    )}
                  </div>

                  <div className={`flex items-center gap-2 mb-4 text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        whileHover={{ x: 5 }}
                        className={`text-sm flex items-start gap-3 ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <motion.span
                          className={`mt-2 h-1 w-1 rounded-full flex-shrink-0 ${
                            darkMode ? "bg-white/50" : "bg-black/50"
                          }`}
                          whileHover={{ scale: 2 }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
