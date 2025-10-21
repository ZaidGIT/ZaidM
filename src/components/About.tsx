import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Brain } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

export function About({ darkMode }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen flex items-center py-32 relative overflow-hidden ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage: darkMode
              ? "radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)"
              : "radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={`mb-16 text-center ${darkMode ? "text-white" : "text-black"}`}
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              I'm passionate about combining artificial intelligence with full-stack development
              to create intelligent, scalable systems. My work spans across machine learning
              models, generative AI applications, and robust backend architectures.
            </p>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              With expertise in the MERN stack and modern ML frameworks, I thrive on solving
              complex problems and building solutions that make a real impact. I'm deeply
              interested in research areas like GenAI and continuously adapt to emerging
              technologies.
            </p>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              My approach is rooted in clarity, precision, and a commitment to writing clean,
              maintainable code that scales with business needs.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "Education",
                content: ["Bachelor of Artificial Intelligence & Data Science", "Uka Tarsadia University", "2021 – 2025"],
                delay: 0.3,
                color: "indigo",
              },
              {
                icon: <Brain size={24} />,
                title: "Research Interests",
                content: ["Generative AI, Machine Learning Systems, and AI-powered Full Stack Applications"],
                delay: 0.4,
                color: "purple",
              },
              {
                icon: <Code2 size={24} />,
                title: "Core Expertise",
                content: ["Adaptable across technologies with a focus on building intelligent, scalable solutions"],
                delay: 0.5,
                color: "violet",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ scale: 1.02, x: 5 }}
                className={`p-6 rounded-xl border relative overflow-hidden group ${
                  darkMode
                    ? "bg-white/[0.02] border-white/10 hover:border-indigo-500/30"
                    : "bg-gray-50 border-black/10 hover:border-indigo-500/30"
                } transition-all duration-300`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div
                    className={`p-3 rounded-lg ${
                      darkMode ? `bg-${item.color}-500/10 border border-${item.color}-500/20` : `bg-${item.color}-500/10 border border-${item.color}-500/20`
                    }`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={darkMode ? `text-${item.color}-400` : `text-${item.color}-600`}>
                      {item.icon}
                    </div>
                  </motion.div>
                  <div>
                    <h3 className={`mb-2 ${darkMode ? "text-white" : "text-black"}`}>
                      {item.title}
                    </h3>
                    {item.content.map((text, i) => (
                      <p
                        key={i}
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
