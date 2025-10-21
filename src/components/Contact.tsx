import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [changeButtonText, setChangeButtonText] = useState("Send Message");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          setChangeButtonText("Message Sent!");
          setFormData({ name: "", email: "", message: "" });
          toast.success("Message sent successfully!");
          setTimeout(() => {
            setChangeButtonText("Send Message");
          }, 3000);
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          toast.error("Failed to send message. Please try again later.");
        }
      );
    // console.log("Form submitted:", formData);
  };

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "mohammedzaidmadari@gmail.com",
      href: "mailto:mohammedzaidmadari@gmail.com",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/Zaid-Madari",
      href: "https://linkedin.com/in/Zaid-Madari",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "github.com/ZaidGIT",
      href: "https://github.com/ZaidGIT",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`min-h-screen flex items-center py-32 relative overflow-hidden ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl ${
            darkMode ? "bg-white/[0.02]" : "bg-black/[0.02]"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl ${
            darkMode ? "bg-white/[0.02]" : "bg-black/[0.02]"
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={`mb-4 text-center ${darkMode ? "text-white" : "text-black"}`}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-center mb-16 ${darkMode ? "text-gray-500" : "text-gray-600"}`}
        >
          I'm always open to discussing new projects and opportunities
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={`mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Feel free to reach out through any of the channels below. I typically respond
              within 24 hours.
            </p>

            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${
                    darkMode
                      ? "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20"
                      : "bg-gray-50 border-black/10 hover:bg-gray-100 hover:border-black/20"
                  } transition-all duration-300`}
                >
                  <motion.div
                    className={`p-3 rounded-lg ${
                      darkMode ? "bg-white/5" : "bg-black/5"
                    }`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <div className={darkMode ? "text-white" : "text-black"}>
                      {link.icon}
                    </div>
                  </motion.div>
                  <div>
                    <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                      {link.label}
                    </p>
                    <p className={darkMode ? "text-white" : "text-black"}>
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileFocus={{ scale: 1.01 }}>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`${
                    darkMode
                      ? "bg-white/[0.02] border-white/10 text-white placeholder:text-gray-500 focus:border-white/30"
                      : "bg-gray-50 border-black/10 text-black placeholder:text-gray-500 focus:border-black/30"
                  } rounded-xl transition-all`}
                  required
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`${
                    darkMode
                      ? "bg-white/[0.02] border-white/10 text-white placeholder:text-gray-500 focus:border-white/30"
                      : "bg-gray-50 border-black/10 text-black placeholder:text-gray-500 focus:border-black/30"
                  } rounded-xl transition-all`}
                  required
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`${
                    darkMode
                      ? "bg-white/[0.02] border-white/10 text-white placeholder:text-gray-500 focus:border-white/30"
                      : "bg-gray-50 border-black/10 text-black placeholder:text-gray-500 focus:border-black/30"
                  } rounded-xl min-h-[150px] transition-all`}
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className={`w-full rounded-xl ${
                    darkMode
                      ? changeButtonText === "Message Sent!"
                        ? "bg-green-600 text-white hover:bg-green-700":
                        "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {changeButtonText === "Message Sent!" && (<Check size={18} className="ml-2" />)}
                  {changeButtonText !== "Message Sent!" && (
                  <Send size={18} className="ml-2" />
                  )}
                  <span>{changeButtonText}</span>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`mt-16 pt-8 border-t ${
            darkMode ? "border-white/10" : "border-black/10"
          } text-center`}
        >
          <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            © 2025 Mohammed Zaid Madari. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
