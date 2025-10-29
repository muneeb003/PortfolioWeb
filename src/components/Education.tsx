import { GraduationCap, Award } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const education = [
  {
    type: "degree",
    icon: GraduationCap,
    title: "Bachelor of Software Engineering",
    organization: "University of Engineering and Technology, Taxila",
    period: "2020 – 2024",
    description:
      "Specialized in Distributed Systems and Big Data Analytics. Thesis on scalable data processing frameworks.",
    color: "text-electric-purple",
  },
];

const certifications = [
  {
    type: "certification",
    icon: Award,
    title: "Machine Learning Specialization",
    organization: "DeepLearning.AI & Stanford University",
    period: "2023",
    description:
      "Comprehensive specialization covering supervised learning, ML workflows, and model optimization using TensorFlow and Scikit-learn.",
  },
  {
    type: "certification",
    icon: Award,
    title: "Deep Learning Specialization",
    organization: "DeepLearning.AI & Coursera",
    period: "2023",
    description:
      "Advanced program focusing on neural networks, CNNs, sequence models, and deep learning best practices for AI applications.",
  },
  {
    type: "certification",
    icon: Award,
    title: "OCI Generative AI Professional",
    organization: "Oracle Cloud Infrastructure",
    period: "2024",
    description:
      "Credential demonstrating expertise in Oracle’s Generative AI ecosystem, including model integration and AI deployment workflows.",
  },
  {
    type: "certification",
    icon: Award,
    title: "Introduction to GANs",
    organization: "DeepLearning.AI",
    period: "2024",
    description:
      "Learned the fundamentals of Generative Adversarial Networks and implemented custom GAN architectures for image generation tasks.",
  },
  {
    type: "certification",
    icon: Award,
    title: "Python for Data Science, AI and Development",
    organization: "IBM",
    period: "2023",
    description:
      "Practical course covering Python for data manipulation, visualization, and AI model development using popular libraries like Pandas and Matplotlib.",
  },
  {
    type: "certification",
    icon: Award,
    title: "Crash Course on Python",
    organization: "Google",
    period: "2023",
    description:
      "Introduced Python programming essentials for data analysis, automation, and backend development workflows.",
  },
  {
    type: "certification",
    icon: Award,
    title: "Generative AI Productivity Hacks with Miss Excel",
    organization: "Coursera",
    period: "2024",
    description:
      "Explored productivity-enhancing AI tools and prompt engineering strategies for real-world data and automation workflows.",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Animated gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-purple to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development in data engineering
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold mb-8 text-center text-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            Academic Background
          </motion.h3>
          <div className="flex flex-col items-center  gap-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="group h-full bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-hover">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <span className="text-sm font-mono text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {item.organization}
                    </p>
                    {/* <p className="text-foreground/70 leading-relaxed text-sm">
                      {item.description}
                    </p> */}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            className="text-2xl font-bold mb-8 text-center text-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            Professional Certifications
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6 justify-items-center">
            {certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={
                  index === certifications.length - 1 &&
                  certifications.length % 3 !== 0
                    ? "md:col-span-3 flex justify-center" // center last item
                    : ""
                }
              >
                <Card className="group h-full bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-hover">
                  <div className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors animate-glow-pulse">
                        <item.icon className="w-8 h-8 text-neon-cyan" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">
                      {item.organization}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground mb-3">
                      {item.period}
                    </p>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-purple to-transparent opacity-50" />
    </section>
  );
}
