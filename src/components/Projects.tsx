import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Symbly – AI-Powered Multi-Tenant RAG Pipeline",
    description:
      "Developed a scalable Retrieval-Augmented Generation (RAG) pipeline using LangChain and Gemini API with Qdrant Cloud for high-speed semantic search and document intelligence.",
    tech: ["LangChain", "Gemini API", "Qdrant Cloud", "Python"],
    gradient: "from-electric-purple/20 to-primary/20",
  },
  {
    title: "OKO Product (Jazz ROV) – GIS Data Pipeline & Alarm Monitoring",
    description:
      "Built a GIS-based alarm monitoring pipeline integrating SNMPv3 data collection, PostGIS storage, and Kafka-based streaming for real-time telecom network visualization.",
    tech: ["Python", "Apache Kafka", "PostgreSQL", "QGIS", "SNMPv3"],
    gradient: "from-cyber-teal/20 to-data-blue/20",
  },
  {
    title: "Cratus – Real-Time Sensor Data ETL Pipeline",
    description:
      "Engineered a high-throughput IoT ETL pipeline using Apache Kafka and PostgreSQL for real-time sensor data processing and deployed it on AWS EC2 for fault monitoring.",
    tech: ["Apache Kafka", "PostgreSQL", "AWS EC2", "Python"],
    gradient: "from-neon-cyan/20 to-glow-blue/20",
  },
  {
    title: "Thunder – Telenor Analytics Project",
    description:
      "Developed time-series forecasting models to predict telecom network trends, enabling proactive maintenance and performance optimization.",
    tech: ["Python", "Time-Series Forecasting", "Pandas", "Matplotlib"],
    gradient: "from-data-blue/20 to-electric-purple/20",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 relative overflow-hidden bg-secondary/5"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Building scalable data solutions and engineering complex pipelines
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={
                index === projects.length - 1 && projects.length % 3 !== 0
                  ? "md:col-span-3  flex justify-center " // center last item
                  : ""
              }
            >
              <Card className="group relative overflow-hidden bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow cursor-hover h-full">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Animated Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />

                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/30 group-hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Data Flow Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
