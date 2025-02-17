import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    image: "",
    languages: ["React", "TailwindCSS", "Node.js"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "https://via.placeholder.com/500",
    languages: ["Next.js", "TypeScript", "GraphQL"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "https://via.placeholder.com/500",
    languages: ["Vue", "Firebase", "Express"],
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of Project Four.",
    image: "https://via.placeholder.com/500",
    languages: ["Angular", "Python", "Django"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-16 px-10 bg-gray-100">
      <div className="grid grid-cols-1 mt-15 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => {
          const row = Math.floor(index / 2); // Determine row index
          return (
            <motion.div
              key={project.id}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "linear", delay: row * 0.5 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-5 h-32 flex flex-col bg-green-50 justify-between">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <div className="flex flex-wrap mt-2">
                  {project.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="bg-green-400 text-white text-xs px-3 py-1 rounded-full mr-2 mt-1"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
