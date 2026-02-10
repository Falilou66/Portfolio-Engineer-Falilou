import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Master Systèmes d\'Information',
      institution: 'Université',
      period: '2024 - Présent',
      status: 'En cours',
      description: 'Formation avancée en systèmes d\'information, génie logiciel, DevOps, IA et architectures complexes.',
      highlights: [
        'Génie logiciel et architectures distribuées',
        'DevOps, Cloud Computing et conteneurisation',
        'Intelligence artificielle et IoT',
        'Sécurité des systèmes d\'information',
        'Gestion de projets techniques',
      ],
      color: 'from-blue-500 to-purple-600',
    },
    {
      degree: 'Licence Professionnelle SRT',
      institution: 'Systèmes, Réseaux & Télécommunications',
      period: '2023',
      status: 'Mention Très Bien',
      description: 'Formation spécialisée en systèmes, réseaux et télécommunications avec excellence académique.',
      highlights: [
        'Administration systèmes et réseaux',
        'Sécurité informatique et cybersécurité',
        'Télécommunications et protocoles réseau',
        'Virtualisation et infrastructures',
        'Projet de fin d\'études avec mention Très Bien',
      ],
      color: 'from-green-500 to-blue-600',
    },
  ];

  const certifications = [
    'Docker & Kubernetes',
    'CI/CD avec Jenkins',
    'Sécurité réseau avancée',
    'Machine Learning',
  ];

  return (
    <section id="formation" className="py-20 md:py-32 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Formation
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Parcours académique solide et formation continue
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Education */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-slate-600 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <GraduationCap size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">{edu.degree}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-gray-400">
                        <span className={`font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                          {edu.institution}
                        </span>
                        <span className="text-sm">•</span>
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="mt-2">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${edu.color} text-white`}>
                          <Award size={16} />
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">POINTS CLÉS</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications & Formations Techniques</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-purple-500 transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
