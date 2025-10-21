import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Brain, Globe, MessageSquare, Video, Eye, Code, BookOpen, Cpu, Layers, Rocket, Aperture, Monitor, Scroll, Type } from "lucide-react";
import { Badge } from "../ui/badge";


interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  category: "Web" | "AI" | "Full Stack";
  tech: string[];
  github: string;
  icon: React.ReactNode;
  color: string;
}

export function Projects({ darkMode }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<"All" | "Web" | "AI" | "Full Stack">("All");

  const projects: Project[] = [
    {
      title: "Enginuity",
      description: "Enginuity (Engineering + Ingenuity) is an AI-powered platform connecting top talent with the right recruiters efficiently and vice versa.",
      category: "Full Stack",
      tech: ["React", "Node.js", "OpenAI API", "Sequelize", "Express", "AWS", "Docker"],
      github: "https://github.com/ZaidGIT/Enginuity",
      icon: <Rocket size={32} />,
      color: "indigo",
    },
    {
      title: "Text to Image Generation",
      description: "AI application that generates high-quality images from textual descriptions using stable diffusion models.",
      category: "AI",
      tech: ["Python", "TensorFlow", "React", "OpenAI API", "Cuda"],
      github: "https://github.com/ZaidGIT/Text-to-Image-generation",
      icon: <Aperture size={32} />,
      color: "purple",
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Machine learning-powered dashboard for business intelligence with real-time data visualization and forecasting.",
      category: "AI",
      tech: ["Python", "TensorFlow", "React", "Flask", "PostgreSQL"],
      github: "#",
      icon: <Cpu size={32} />,
      color: "violet",
    },
    {
      title: "Real Time People Counting System",
      description: "MERN stack application for real-time people counting and analytics using computer vision, and techniques like centroid tracking and Numpy for calculations.",
      category: "AI",
      tech: ["Python", "OpenCV", "NumPy", "imutils", "Flask"],
      github: "https://github.com/ZaidGIT/Real-Time-People-Counting",
      icon: <Monitor size={32} />,
      color: "indigo",
    },
    {
      title: "Blog on thoughts on AI, Tech, and Programming",
      description: "A personal blog sharing insights and tutorials on AI, web development, and programming best practices.",
      category: "Web",
      tech: ["React", "Vercel", "lucide-react"],
      github: "https://izaidblog.vercel.app",
      icon: <Type size={32} />,
      color: "purple",
    },
    {
      title: "GenAI for beginner programmers",
      description: "GitHub repository for beginners to learn GenAI concepts and build projects, Find resources and tutorials to get started.",
      category: "AI",
      tech: ["Python", "PyTorch", "OpenCV", "Scikit-Learn", "All Major ML Libraries..."],
      github: "https://github.com/ZaidGIT/generative-ai-for-beginners",
      icon: <BookOpen size={32} />,
      color: "violet",
    },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={ref}
      className={`min-h-screen py-32 relative overflow-hidden ${darkMode ? "bg-black" : "bg-white"}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          style={{
            backgroundImage: darkMode
              ? "radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)"
              : "radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={`mb-4 text-center ${darkMode ? "text-white" : "text-black"}`}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-center mb-12 ${darkMode ? "text-gray-500" : "text-gray-600"}`}
        >
          A selection of projects spanning AI, full-stack development, and data science
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {["All", "Web", "AI", "Full Stack"].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category as typeof filter)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                filter === category
                  ? darkMode
                    ? "bg-indigo-600 text-white border border-indigo-500"
                    : "bg-indigo-600 text-white border border-indigo-500"
                  : darkMode
                  ? "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-black/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <motion.div
                className={`p-8 rounded-xl border group relative overflow-hidden ${
                  darkMode
                    ? "bg-white/[0.02] border-white/10 hover:border-indigo-500/30"
                    : "bg-gray-50 border-black/10 hover:border-indigo-500/30"
                } transition-all duration-300`}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background Gradient on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${project.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`mb-6 inline-flex p-4 rounded-xl ${
                      darkMode 
                        ? `bg-${project.color}-500/10 border border-${project.color}-500/20` 
                        : `bg-${project.color}-500/10 border border-${project.color}-500/20`
                    }`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={darkMode ? `text-${project.color}-400` : `text-${project.color}-600`}>
                      {project.icon}
                    </div>
                  </motion.div>

                  {/* Title and GitHub Link */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`flex-1 ${darkMode ? "text-white" : "text-black"}`}>
                      {project.title}
                    </h3>
                    <motion.a
                      target="_blank"
                      href={project.github}
                      className={`p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                        darkMode ? "hover:bg-white/10" : "hover:bg-black/10"
                      }`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github
                        size={20}
                        className={darkMode ? "text-white" : "text-black"}
                      />
                    </motion.a>
                  </div>

                  {/* Description */}
                  <p
                    className={`mb-6 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            darkMode
                              ? "border-white/20 text-gray-400 bg-white/5"
                              : "border-black/20 text-gray-600 bg-black/5"
                          }`}
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <motion.div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-${project.color}-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
