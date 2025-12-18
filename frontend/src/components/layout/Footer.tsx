import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* À propos */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4 text-gradient">
              Digital Studio
            </h3>
            <p className="text-gray-400 mb-6">
              Votre agence digitale premium spécialisée dans la création de sites web, 
              contenus visuels et solutions IA pour propulser votre présence en ligne.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiGithub size={24} />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-400 hover:text-white transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMail size={18} />
                <span>contact@digitalstudio.fr</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiPhone size={18} />
                <span>+33 6 XX XX XX XX</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMapPin size={18} />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Digital Studio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
