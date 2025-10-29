import { Database, Cloud, Workflow, BarChart3, Cpu, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import data from "/data.png";
import {
  Brain,
  Layers,
  LineChart,
  Code,
  Server,
  GitBranch,
} from "lucide-react";

const skills = [
  { icon: Zap, name: "Python & SQL", color: "text-glow-blue" },
  {
    icon: Workflow,
    name: "ETL Pipelines & Data Automation",
    color: "text-electric-purple",
  },
  { icon: Cpu, name: "Apache Kafka & Airflow", color: "text-cyber-teal" },
  {
    icon: Database,
    name: "PostgreSQL, Snowflake & Redshift",
    color: "text-data-blue",
  },
  { icon: Cloud, name: "AWS (EC2, RDS, S3) & Docker", color: "text-neon-cyan" },
  {
    icon: Brain,
    name: "LangChain, LangGraph & Generative AI",
    color: "text-primary",
  },
  {
    icon: Layers,
    name: "TensorFlow, PyTorch, HuggingFace",
    color: "text-electric-purple",
  },
  {
    icon: LineChart,
    name: "Data Visualization (Power BI, QGIS)",
    color: "text-cyber-teal",
  },
  {
    icon: Server,
    name: "Linux Systems & Cloud Deployments",
    color: "text-data-blue",
  },
  {
    icon: GitBranch,
    name: "Git, VS Code, Replit, N8N",
    color: "text-glow-blue",
  },
  { icon: Code, name: "FastAPI & API Integrations", color: "text-primary" },
  {
    icon: BarChart3,
    name: "Time-Series Forecasting & ML Models",
    color: "text-electric-purple",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img src={data} alt="" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              I’m a result-driven Data Engineer passionate about transforming
              raw data into actionable insights through scalable pipelines,
              AI-powered workflows, and real-time analytics. My work bridges
              data engineering and AI, combining cloud-based ETL, streaming
              systems, and Retrieval-Augmented Generation (RAG) to build
              next-generation data solutions.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I thrive at the intersection of data, automation, and
              intelligence, creating solutions that enhance efficiency,
              accuracy, and business value.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="mt-20">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Technical Expertise
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group relative overflow-hidden bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-hover flex flex-col justify-center">
                  <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 flex flex-col items-center text-center justify-center">
                    <skill.icon
                      className={`w-12 h-12 mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <p className="text-sm font-medium text-foreground/90">
                      {skill.name}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
