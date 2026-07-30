import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Code,
  Database,
  Brain,
  Cpu,
  GitBranch,
  Layers,
} from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import { SiReact, SiTensorflow, SiNodedotjs, SiBlender } from "react-icons/si";
import { LiaPython } from "react-icons/lia";
import { PiGitlabLogoSimpleBold } from "react-icons/pi";

interface HeroProps {
  darkMode: boolean;
}

const neuralConnections = [
  [40, 40, 100, 60],
  [40, 70, 100, 60],
  [40, 100, 100, 60],
  [40, 40, 100, 100],
  [40, 70, 100, 100],
  [40, 100, 100, 100],
  [100, 60, 180, 80],
  [100, 100, 180, 80],
  [180, 80, 230, 80],
];

const neuralNodes = [
  [40, 40],
  [40, 70],
  [40, 100],
  [100, 60],
  [100, 100],
  [180, 80],
  [230, 80],
];

export function Hero({ darkMode }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const nodeColor = darkMode ? "#818CF8" : "#4F46E5";
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
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
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
                className="relative mb-10 flex justify-center group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {/* <div
                    className={`px-3 py-1 rounded-md shadow-lg text-xs font-medium ${
                      darkMode
                        ? "bg-gray-900 text-indigo-200"
                        : "bg-white text-indigo-700 border border-indigo-100"
                    }`}
                  >
                    Basic Neural Network Model
                  </div> */}
                </div>
                <motion.svg
                  width="260"
                  height="160"
                  viewBox="0 0 260 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible"
                  aria-label="Animated neural network model"
                >
                  <defs>
                    {neuralConnections.map(([x1, y1, x2, y2], i) => (
                      <linearGradient
                        key={i}
                        id={`gradient${i}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0%"
                          stopColor={darkMode ? "#818CF8" : "#4F46E5"}
                          stopOpacity="0.5"
                        />
                        <stop
                          offset="100%"
                          stopColor={darkMode ? "#A78BFA" : "#6366F1"}
                          stopOpacity="0.35"
                        />
                      </linearGradient>
                    ))}
                    <filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Stable connections */}
                  {neuralConnections.map(([x1, y1, x2, y2], i) => (
                    <motion.line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={`url(#gradient${i})`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.72 }}
                      whileHover={{ opacity: 1 }}
                      transition={{
                        pathLength: { duration: 1.1, delay: i * 0.06, ease: "easeOut" },
                        opacity: { duration: 0.25 },
                      }}
                    />
                  ))}

                  {/* Subtle activation paths */}
                  {[0, 4, 7, 8].map((connectionIndex, i) => {
                    const [x1, y1, x2, y2] = neuralConnections[connectionIndex];
                    return (
                      <motion.line
                        key={`signal-${connectionIndex}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={darkMode ? "#C4B5FD" : "#4F46E5"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                        animate={{
                          pathLength: [0, 0.28, 0],
                          pathOffset: [0, 0.68, 1],
                          opacity: [0, 0.9, 0],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.45,
                        }}
                      />
                    );
                  })}

                  {/* Nodes */}
                  {neuralNodes.map(([cx, cy], i) => (
                    <motion.g
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.18 }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                      style={{ transformOrigin: `${cx}px ${cy}px` }}
                    >
                      <motion.circle
                        cx={cx}
                        cy={cy}
                        r="10"
                        fill={darkMode ? "rgba(129,140,248,0.12)" : "rgba(79,70,229,0.1)"}
                        animate={{
                          scale: [1, 1.18, 1],
                          opacity: [0.45, 0.8, 0.45],
                        }}
                        transition={{
                          duration: 3.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.14,
                        }}
                      />
                      <circle
                        cx={cx}
                        cy={cy}
                        r="5.5"
                        fill={nodeColor}
                        filter="url(#nodeGlow)"
                      />
                      <circle
                        cx={cx}
                        cy={cy}
                        r="2"
                        fill={darkMode ? "#EEF2FF" : "#FFFFFF"}
                        opacity="0.85"
                      />
                    </motion.g>
                  ))}

                  {/* animated data flow dots */}
                  {[0, 3, 6, 8].map((connectionIndex, i) => {
                    const [x1, y1, x2, y2] = neuralConnections[connectionIndex];
                    return (
                      <motion.circle
                        key={`dot-${connectionIndex}`}
                        r="2.4"
                        fill={darkMode ? "#E0E7FF" : "#4F46E5"}
                        animate={{
                          cx: [x1, x2],
                          cy: [y1, y2],
                          opacity: [0, 0.9, 0],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.55,
                        }}
                      />
                    );
                  })}
                </motion.svg>
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
                className={`mb-8 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Software Developer & ML Engineer
              </motion.h2>

              <motion.p
                className={`mb-12 ${
                  darkMode ? "text-gray-500" : "text-gray-600"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Specializing in Machine Learning, Generative AI, and Full Stack
                Development. Building intelligent, scalable systems that bridge
                AI algorithms with robust architectures.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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
              {/* Outer Rotating Ring */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke={
                      darkMode
                        ? "rgba(99, 102, 241, 0.15)"
                        : "rgba(99, 102, 241, 0.2)"
                    }
                    strokeWidth="1"
                    strokeDasharray="10 20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>

              {/* Middle Rotating Ring */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke={
                      darkMode
                        ? "rgba(139, 92, 246, 0.15)"
                        : "rgba(139, 92, 246, 0.2)"
                    }
                    strokeWidth="1"
                    strokeDasharray="5 15"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>

              {/* Floating Particles */}
              {Array.from({ length: 12 }).map((_, index) => {
                const angle = index * 30 * (Math.PI / 180);
                const radius = 100 + Math.random() * 80;
                return (
                  <motion.div
                    key={`particle-${index}`}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      x: "-50%",
                      y: "-50%",
                    }}
                    animate={{
                      x: [
                        Math.cos(angle) * radius,
                        Math.cos(angle) * (radius + 20),
                        Math.cos(angle) * radius,
                      ],
                      y: [
                        Math.sin(angle) * radius,
                        Math.sin(angle) * (radius + 20),
                        Math.sin(angle) * radius,
                      ],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className={`w-1 h-1 rounded-full ${
                        darkMode ? "bg-indigo-400" : "bg-indigo-500"
                      }`}
                    />
                  </motion.div>
                );
              })}

              {/* Tech Icons in Orbit */}
              {[
                { icon: SiReact, angle: 0, color: "indigo" },
                { icon: LiaPython, angle: 60, color: "purple" },
                { icon: SiTensorflow, angle: 120, color: "violet" },
                { icon: SiNodedotjs, angle: 180, color: "indigo" },
                { icon: SiBlender, angle: 240, color: "purple" },
                { icon: PiGitlabLogoSimpleBold, angle: 300, color: "violet" },
              ].map((item, index) => {
                const angleRad = item.angle * (Math.PI / 180);
                const orbitRadius = 150;
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
                        Math.cos(angleRad) * orbitRadius - 20,
                        Math.cos(angleRad + Math.PI * 2) * orbitRadius - 20,
                      ],
                      y: [
                        Math.sin(angleRad) * orbitRadius - 20,
                        Math.sin(angleRad + Math.PI * 2) * orbitRadius - 20,
                      ],
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                  >
                    <motion.div
                      className={`w-10 h-10 rounded-lg ${
                        darkMode
                          ? "bg-white/[0.04] border border-white/10"
                          : "bg-black/[0.04] border border-black/10"
                      } backdrop-blur-sm flex items-center justify-center shadow-lg`}
                      whileHover={{
                        scale: 1.3,
                        backgroundColor: darkMode
                          ? "rgba(99, 102, 241, 0.1)"
                          : "rgba(99, 102, 241, 0.1)",
                        borderColor: darkMode
                          ? "rgba(99, 102, 241, 0.3)"
                          : "rgba(99, 102, 241, 0.3)",
                      }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        },
                      }}
                    >
                      <item.icon
                        size={20}
                        className={darkMode ? "text-gray-400" : "text-gray-600"}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Central Geometric Core */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Outer hexagon */}
                {/* <motion.div
                  className="relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <motion.polygon
                      points="60,10 100,35 100,85 60,110 20,85 20,35"
                      fill="none"
                      stroke={darkMode ? "rgba(99, 102, 241, 0.3)" : "rgba(99, 102, 241, 0.4)"}
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </svg>
                </motion.div> */}

                {/* Inner circle with gradient */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div
                    className={`w-20 h-20 rounded-full ${
                      darkMode
                        ? "bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-indigo-500/20"
                        : "bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-indigo-500/20"
                    } border ${
                      darkMode ? "border-indigo-400/30" : "border-indigo-500/30"
                    } backdrop-blur-md flex items-center justify-center shadow-xl`}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 180, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Code
                        size={32}
                        className={
                          darkMode ? "text-indigo-400" : "text-indigo-600"
                        }
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Animated connecting beams */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {[0, 60, 120, 180, 240, 300].map((angle, index) => {
                  const rad = angle * (Math.PI / 180);
                  return (
                    <motion.line
                      key={`beam-${index}`}
                      x1="200"
                      y1="200"
                      x2={200 + Math.cos(rad) * 180}
                      y2={200 + Math.sin(rad) * 180}
                      stroke={
                        darkMode
                          ? "rgba(99, 102, 241, 0.1)"
                          : "rgba(99, 102, 241, 0.15)"
                      }
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}
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
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span
          className={`text-xs ${darkMode ? "text-gray-600" : "text-gray-400"}`}
        >
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
