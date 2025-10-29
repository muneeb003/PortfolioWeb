import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const workExperience = [
  {
    title: "AI Engineer",
    organization: "Symbly",
    period: "June 2025 – Present",
    description:
      "Developing end-to-end Retrieval-Augmented Generation (RAG) pipelines using LangChain, Gemini API, and Qdrant Cloud for enterprise-grade document intelligence systems.",
    achievements: [
      "Built a scalable multi-tenant RAG pipeline enabling secure, context-aware document retrieval",
      "Integrated Qdrant Cloud for high-speed semantic search and vector storage",
      "Automated data ingestion workflows using LangChain’s loaders and text splitters",
      "Deployed modular RAG architecture on Linux servers ensuring scalability and fault tolerance",
    ],
  },
  {
    title: "Data Engineer",
    organization: "OKO Insights",
    period: "March 2024 – Present",
    description:
      "Designed and deployed real-time, SNMPv3-based network data pipelines for large-scale telecom systems to enhance operational efficiency and visibility.",
    achievements: [
      "Engineered Python & PostgreSQL-based ETL architecture for data ingestion and transformation",
      "Integrated OTDR devices with SNMPv3 for fiber fault detection and monitoring",
      "Implemented Kafka-based streaming for real-time alarm and network visualization",
      "Developed automated validation and alerting frameworks ensuring high data reliability",
    ],
  },
  {
    title: "Data Scientist",
    organization: "SOFTOO (Brillanz Group)",
    period: "Jan 2024 – Present",
    description:
      "Developing analytics pipelines, real-time data streams, and forecasting models to support telecom network performance optimization.",
    achievements: [
      "Built Python and Spark-based data pipelines for automated ETL processes",
      "Created real-time data streaming systems using Apache Kafka and Amazon Redshift",
      "Developed time-series forecasting models for telecom KPIs and network reliability",
      "Integrated spatial data with PostGIS and visualized results using QGIS",
    ],
  },
  {
    title: "Machine Learning Intern",
    organization: "SOFTOO (Brillanz Group)",
    period: "June 2023 – Aug 2023",
    description:
      "Assisted in the design and implementation of applied machine learning and deep learning solutions for real-world data problems.",
    achievements: [
      "Collaborated with senior data scientists on ML and AI use cases",
      "Implemented supervised and unsupervised learning models using TensorFlow and PyTorch",
      "Supported deployment of ML workflows on AWS EC2 and RDS environments",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Animated gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Building scalable data solutions and driving insights through
            engineering excellence
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-electric-purple to-transparent" />

          <div className="space-y-12">
            {workExperience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow z-10 animate-glow-pulse" />

                {/* Content Card */}
                <motion.div
                  className="ml-16"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="group bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-hover">
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <Briefcase className="w-6 h-6 text-primary" />
                          <span className="text-sm font-mono text-muted-foreground">
                            {item.period}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {item.organization}
                      </p>
                      <p className="text-foreground/80 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-foreground/70"
                          >
                            <span className="text-primary mt-1">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
}
