import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Code, Database, Brain, Cpu, GitBranch, Layers } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import { SiReact, SiTensorflow, SiNodedotjs, SiBlender } from 'react-icons/si';
import { LiaPython } from "react-icons/lia";
import { PiGitlabLogoSimpleBold } from "react-icons/pi";

interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: darkMode
              ? "radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)"
              : "radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: darkMode
            ? "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Main Content with Animated Centerpiece */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            style={{ y, opacity, scale }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className={`inline-block mb-6 px-4 py-1.5 rounded-full border backdrop-blur-sm ${
                  darkMode 
                    ? "border-indigo-500/20 bg-indigo-500/5 text-indigo-300" 
                    : "border-indigo-500/20 bg-indigo-500/5 text-indigo-700"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Available for opportunities
              </motion.div>

              <motion.h1
                className={`mb-6 ${darkMode ? "text-white" : "text-black"}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Mohammed Zaid Madari
              </motion.h1>

              <motion.h2
                className={`mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Software Developer & ML Engineer
              </motion.h2>

              <motion.p
                className={`mb-12 ${darkMode ? "text-gray-500" : "text-gray-600"}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Specializing in Machine Learning, Generative AI, and Full Stack Development.
                Building intelligent, scalable systems that bridge AI algorithms with robust architectures.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className={`rounded-full px-8 ${
                      darkMode
                        ? "bg-indigo-600 text-white hover:bg-indigo-500"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    View Projects
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    className={`rounded-full px-8 ${
                      darkMode
                        ? "border-white/20 text-white hover:bg-white/5"
                        : "border-black/20 text-black hover:bg-black/5"
                    }`}
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Animated Illustration */}
          <motion.div
            className="order-1 lg:order-2 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Central Circle */}
              <motion.div
                className={`absolute inset-0 rounded-full ${
                  darkMode 
                    ? "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20" 
                    : "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
                }`}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Orbiting Icons */}
              {[
                { icon: SiTensorflow, delay: 0, color: "indigo" },
                { icon: LiaPython, delay: 0.5, color: "purple" },
                { icon: SiReact, delay: 1, color: "violet" },
                { icon: SiNodedotjs, delay: 1.5, color: "indigo" },
                { icon: SiBlender, delay: 2, color: "purple" },
                { icon: PiGitlabLogoSimpleBold, delay: 2.5, color: "violet" },
              ].map((item, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = 180;
                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      x: "-50%",
                      y: "-50%",
                    }}
                    animate={{
                      x: [
                        Math.cos(angle) * radius - 24,
                        Math.cos(angle + Math.PI * 2) * radius - 24,
                      ],
                      y: [
                        Math.sin(angle) * radius - 24,
                        Math.sin(angle + Math.PI * 2) * radius - 24,
                      ],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: item.delay,
                    }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-xl ${
                        darkMode
                          ? `bg-${item.color}-500/10 border border-${item.color}-500/30`
                          : `bg-${item.color}-500/10 border border-${item.color}-500/30`
                      } backdrop-blur-sm flex items-center justify-center`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        rotate: {
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                    >
                      <item.icon
                        size={24}
                        className={darkMode ? `text-${item.color}-400` : `text-${item.color}-600`}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Center Core */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className={`w-32 h-32 rounded-full ${
                    darkMode
                      ? "bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-2 border-indigo-500/30"
                      : "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-2 border-indigo-500/30"
                  } backdrop-blur-md flex items-center justify-center`}
                >
                  <motion.div
                    className={`text-4xl ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ⚡
                  </motion.div>
                </div>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="100"
                  fill="none"
                  stroke={darkMode ? "rgba(99, 102, 241, 0.1)" : "rgba(99, 102, 241, 0.15)"}
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  animate={{
                    strokeDashoffset: [0, -10],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="150"
                  fill="none"
                  stroke={darkMode ? "rgba(139, 92, 246, 0.1)" : "rgba(139, 92, 246, 0.15)"}
                  strokeWidth="1"
                  strokeDasharray="8,8"
                  animate={{
                    strokeDashoffset: [0, 16],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <span className={`text-xs ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
          Scroll to explore
        </span>
        <ArrowDown
          size={20}
          className={darkMode ? "text-gray-600" : "text-gray-400"}
        />
      </motion.div>
    </section>
  );
}
