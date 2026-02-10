import { motion } from 'motion/react';
import { Briefcase, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Développeur IoT & Intelligence Artificielle',
      company: 'Projet RavaGuard',
      period: '2024 - Présent',
      type: 'Projet Académique & Recherche',
      description: 'Développement d\'une solution complète IoT & IA pour la détection et la lutte contre les oiseaux ravageurs.',
      responsibilities: [
        'Conception et développement de l\'architecture système complète',
        'Intégration capteurs IoT avec Raspberry Pi',
        'Développement modèles Machine Learning (classification audio/image)',
        'Création API REST Django sécurisée',
        'Développement frontend React et application mobile Flutter',
        'Déploiement et mise en production avec Docker',
      ],
      color: 'from-green-500 to-blue-600',
    },
    {
      title: 'Ingénieur Logiciel Junior',
      company: 'Projets Académiques & Personnels',
      period: '2023 - Présent',
      type: 'Développement Full-Stack',
      description: 'Conception et développement de solutions logicielles complètes intégrant web, mobile et desktop.',
      responsibilities: [
        'Analyse des besoins et conception architecturale',
        'Développement backend avec Django, Laravel, Spring Boot',
        'Développement frontend React et applications mobiles Flutter',
        'Conception et développement d\'applications desktop Java',
        'Intégration API tierces (Google Maps, etc.)',
        'Tests, documentation et maintenance applicative',
      ],
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Administrateur Systèmes & Réseaux',
      company: 'Projets Infrastructure',
      period: '2023 - Présent',
      type: 'Infrastructure & DevOps',
      description: 'Conception, déploiement et sécurisation d\'infrastructures réseau et systèmes.',
      responsibilities: [
        'Déploiement et configuration pfSense (pare-feu)',
        'Mise en place IDS/IPS avec Snort',
        'Configuration VLAN, VPN, NAT, ACL',
        'Administration systèmes Linux (Ubuntu Server)',
        'Mise en place pipelines CI/CD (Jenkins, Docker, Kubernetes)',
        'Automatisation avec Ansible',
        'Configuration clusters haute disponibilité (MongoDB Replica Set)',
      ],
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Coordinateur - Club Informatique',
      company: 'Université',
      period: '2023 - Présent',
      type: 'Leadership & Formation',
      description: 'Coordination des activités du club informatique universitaire et animation d\'ateliers techniques.',
      responsibilities: [
        'Organisation d\'événements et ateliers techniques',
        'Formation des membres sur les technologies modernes',
        'Coordination des projets collectifs',
        'Veille technologique et partage de connaissances',
        'Mentorat des étudiants juniors',
      ],
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="experiences" className="py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #8b5cf6 1px, transparent 1px),
            linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-xl border border-orange-500/20 rounded-full mb-4"
          >
            <Sparkles size={16} className="text-orange-400" />
            <span className="text-sm font-semibold text-orange-400">Mon Parcours Pro</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Expériences
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Responsabilités techniques, conception et mise en production
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className={`absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b ${exp.color} opacity-20 hidden md:block`}></div>
                )}

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="flex flex-col md:flex-row gap-6 relative z-10">
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}
                    >
                      <Briefcase size={28} className="text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-gray-400 mb-3">
                          <span className={`font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent text-lg`}>
                            {exp.company}
                          </span>
                          <span className="text-sm">•</span>
                          <span className="text-sm px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed text-lg">{exp.description}</p>

                      <div className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                          Responsabilités
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {exp.responsibilities.map((resp, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              viewport={{ once: true }}
                              className="text-sm text-gray-400 flex items-start gap-3 group/item"
                            >
                              <CheckCircle2 size={16} className="text-blue-400 mt-0.5 flex-shrink-0 group-hover/item:text-blue-300 transition-colors" />
                              <span className="group-hover/item:text-gray-300 transition-colors">{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}