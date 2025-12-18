import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiTarget, FiZap } from 'react-icons/fi';

const About: React.FC = () => {
  const team = [
    {
      name: 'Amar',
      role: 'Expert Technique & IA',
      description: 'Infrastructure web, automatisation et solutions intelligentes',
      icon: <FiZap size={32} />,
    },
    {
      name: 'Mounirou',
      role: 'Lead Developer',
      description: 'Développement full-stack, UX/UI et optimisation SEO',
      icon: <FiTarget size={32} />,
    },
    {
      name: 'Venushan',
      role: 'Directeur Créatif',
      description: 'Photo, vidéo et création de contenu visuel premium',
      icon: <FiAward size={32} />,
    },
    {
      name: 'Abdul',
      role: 'Stratégie & Business',
      description: 'Commercial, développement client et gestion financière',
      icon: <FiUsers size={32} />,
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'Nous visons la perfection dans chaque projet, du code à la création visuelle.',
    },
    {
      title: 'Innovation',
      description: 'Nous intégrons les dernières technologies (IA, automatisation) pour vous démarquer.',
    },
    {
      title: 'Proximité',
      description: 'Un accompagnement personnalisé et une relation de confiance à long terme.',
    },
    {
      title: 'Résultats',
      description: 'Votre ROI est notre priorité. Chaque action est mesurée et optimisée.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            À propos
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Une équipe <span className="text-gradient">complémentaire</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quatre experts passionnés réunis pour offrir une solution digitale complète, 
            de la technique au créatif, du développement à la stratégie commerciale
          </p>
        </motion.div>

        {/* Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white mb-6">
                {member.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{member.name}</h3>
              <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-primary rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-display font-bold text-center mb-12">
            Nos valeurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-white/90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { value: '4', label: 'Experts passionnés' },
            { value: '100%', label: 'En interne' },
            { value: '360°', label: 'Couverture complète' },
            { value: '24/7', label: 'Disponibilité' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
