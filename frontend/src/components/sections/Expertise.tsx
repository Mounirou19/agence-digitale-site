import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiShield, FiZap, FiSmartphone, FiMonitor, FiTool } from 'react-icons/fi';

const Expertise: React.FC = () => {
  const techStack = {
    frontend: [
      'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vue.js'
    ],
    backend: [
      'Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB'
    ],
    tools: [
      'Docker', 'Git', 'N8N', 'Figma', 'Adobe Suite', 'VS Code'
    ],
    ai: [
      'ChatGPT API', 'Langchain', 'RAG', 'AutoML', 'Computer Vision', 'NLP'
    ],
  };

  const capabilities = [
    {
      icon: <FiMonitor size={32} />,
      title: 'Design & UX/UI',
      description: 'Interfaces modernes, intuitives et optimisées pour la conversion',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <FiLayers size={32} />,
      title: 'Architecture Web',
      description: 'Solutions scalables, performantes et sécurisées',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <FiZap size={32} />,
      title: 'Performance',
      description: 'Optimisation avancée pour des temps de chargement éclair',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: <FiShield size={32} />,
      title: 'Sécurité',
      description: 'Protection complète contre les menaces et vulnérabilités',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: <FiSmartphone size={32} />,
      title: 'Mobile First',
      description: 'Expérience optimale sur tous les appareils',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: <FiTool size={32} />,
      title: 'Maintenance',
      description: 'Support continu et mises à jour régulières',
      color: 'from-indigo-500 to-indigo-700',
    },
  ];

  return (
    <section id="expertise" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Expertise Technique
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Technologies <span className="text-gradient">de pointe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous maîtrisons les technologies les plus avancées pour créer des solutions 
            performantes, évolutives et innovantes
          </p>
        </motion.div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${capability.color} flex items-center justify-center text-white mb-6`}>
                {capability.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-display font-bold text-center mb-12">
            Notre Stack Technique
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div>
              <h4 className="text-lg font-bold text-primary-600 mb-4 flex items-center">
                <FiMonitor className="mr-2" />
                Frontend
              </h4>
              <div className="space-y-2">
                {techStack.frontend.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-lg font-bold text-primary-600 mb-4 flex items-center">
                <FiLayers className="mr-2" />
                Backend
              </h4>
              <div className="space-y-2">
                {techStack.backend.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-lg font-bold text-primary-600 mb-4 flex items-center">
                <FiTool className="mr-2" />
                Outils
              </h4>
              <div className="space-y-2">
                {techStack.tools.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI */}
            <div>
              <h4 className="text-lg font-bold text-primary-600 mb-4 flex items-center">
                <FiZap className="mr-2" />
                Intelligence Artificielle
              </h4>
              <div className="space-y-2">
                {techStack.ai.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
