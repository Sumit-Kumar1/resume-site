import { motion } from "framer-motion";

const skills = [
  { name: "API Development", level: "Expert" },
  { name: "Golang", level: "Advanced" },
  { name: "Database Management", level: "Advanced" },
  { name: "Microservices", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Skills</h1>
        <ul>
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="mb-4 p-4 bg-gray-200 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="badge badge-primary">{skill.level}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
