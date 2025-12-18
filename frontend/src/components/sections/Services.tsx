import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCamera, FiCpu, FiTrendingUp, FiInstagram, FiSearch } from 'react-icons/fi';
import Card from '../ui/Card';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FiCode size={40} />,
      title: 'Création de Sites Web',
      description: 'Sites vitrines professionnels et applications web sur mesure, optimisés UX/UI pour convertir vos visiteurs en clients.',
      features: ['Design moderne', 'Responsive', 'Optimisé SEO', 'Performance maximale'],
      color: 'from-primary-500 to-primary-700',
    },
    {
      icon: <FiCamera size={40} />,
      title: 'Contenus Visuels Premium',
      description: 'Shootings photo et vidéo professionnels pour sublimer votre image de marque et captiver votre audience.',
      features: ['Photo pro', 'Vidéo promotionnelle', 'Storytelling', 'Retouche studio'],
      color: 'from-secondary-500 to-secondary-700',
    },
    {
      icon: <FiInstagram size={40} />,
      title: 'Gestion Réseaux Sociaux',
      description: 'Stratégie de contenu, gestion quotidienne et community management pour développer votre communauté.',
      features: ['Stratégie contenu', 'Publication régulière', 'Engagement', 'Analytics'],
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: <FiCpu size={40} />,
      title: 'Solutions IA & Automatisation',
      description: 'Intégration d\'intelligence artificielle et automatisations pour optimiser vos processus et gagner du temps.',
      features: ['Chatbots IA', 'Automatisation', 'CRM intelligent', 'Analytics prédictifs'],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: <FiSearch size={40} />,
      title: 'SEO & Référencement',
      description: 'Optimisation SEO complète et référencement local pour dominer les résultats de recherche Google.',
      features: ['SEO technique', 'Contenu optimisé', 'Google Business', 'Backlinks'],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: <FiTrendingUp size={40} />,
      title: 'Marketing Digital',
      description: 'Campagnes Google Ads, Facebook Ads et stratégies de croissance pour maximiser votre ROI.',
      features: ['Google Ads', 'Meta Ads', 'Email marketing', 'Growth hacking'],
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
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
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Une expertise <span className="text-gradient">360°</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la conception à la croissance, nous couvrons tous vos besoins digitaux 
            avec une approche intégrée et personnalisée
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Besoin d'une solution sur mesure ? Nous créons des packages adaptés à vos objectifs.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
          >
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
