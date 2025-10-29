import {
  Database,
  Cloud,
  Code,
  Workflow,
  BarChart3,
  GitBranch,
  Server,
  Cpu,
} from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    category: "Programming & Scripting",
    icon: Code,
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Bash / Shell Scripting", level: 80 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    category: "Data Engineering & Processing",
    icon: Cpu,
    skills: [
      { name: "Apache Kafka", level: 90 },
      { name: "Apache Airflow", level: 88 },
      { name: "ETL Pipelines (Custom & Cloud)", level: 92 },
      { name: "Pandas / NumPy", level: 94 },
    ],
  },
  {
    category: "Machine Learning & AI Frameworks",
    icon: Workflow,
    skills: [
      { name: "LangChain / LangGraph", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 83 },
      { name: "HuggingFace Transformers", level: 80 },
    ],
  },
  {
    category: "Cloud & Deployment",
    icon: Cloud,
    skills: [
      { name: "AWS (EC2, RDS, S3)", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Linux Administration", level: 88 },
      { name: "CI/CD & Cloud Automation", level: 80 },
    ],
  },
  {
    category: "Databases & Storage",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "Snowflake", level: 85 },
      { name: "Amazon Redshift", level: 84 },
      { name: "Qdrant / Pinecone / FAISS / Chroma", level: 88 },
    ],
  },
  {
    category: "Data Visualization & Analytics",
    icon: BarChart3,
    skills: [
      { name: "Power BI", level: 85 },
      { name: "QGIS", level: 82 },
      { name: "Matplotlib / Seaborn", level: 88 },
      { name: "Time-Series Forecasting", level: 80 },
    ],
  },
  {
    category: "Development Tools & Libraries",
    icon: GitBranch,
    skills: [
      { name: "Git / GitHub / VS Code", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "OpenAI SDK / Vanna AI / Ollama", level: 82 },
      { name: "N8N Automation", level: 80 },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    icon: Server,
    skills: [
      { name: "AWS Deployment", level: 88 },
      { name: "Monitoring & Alerting Systems", level: 82 },
      { name: "System Reliability & Logging", level: 85 },
      { name: "Distributed Systems Architecture", level: 80 },
    ],
  },
];

export function Skills() {
  const [visibleBars, setVisibleBars] = useState<Set<string>>(new Set());

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Animated gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive toolkit for building intelligent, scalable, and
            data-driven systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="group h-full bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-hover">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const barKey = `${categoryIndex}-${skillIndex}`;
                      return (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.5,
                              delay: skillIndex * 0.05,
                            },
                          }}
                          viewport={{ once: false }}
                          onViewportEnter={() => {
                            setVisibleBars((prev) => new Set(prev).add(barKey));
                          }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground/90">
                              {skill.name}
                            </span>
                            <span className="text-xs font-mono text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-accent rounded-full relative overflow-hidden"
                              initial={{ width: 0 }}
                              animate={{
                                width: visibleBars.has(barKey)
                                  ? `${skill.level}%`
                                  : 0,
                              }}
                              transition={{
                                duration: 1,
                                delay: skillIndex * 0.05,
                                ease: "easeOut",
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                            </motion.div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
}
