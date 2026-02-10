import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles, Zap, ArrowRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'RavaGuard',
      subtitle: 'Plateforme IA & IoT pour la Lutte Contre les Oiseaux Ravageurs',
      description: 'Solution complète intégrant Intelligence Artificielle, IoT et développement multi-plateforme pour la détection et la lutte contre les oiseaux ravageurs dans les cultures agricoles.',
      context: 'Problématique agricole majeure nécessitant une solution technologique innovante combinant vision par ordinateur, capteurs IoT et interfaces utilisateur modernes.',
      solution: [
        'Système de détection automatique basé sur IA (classification audio et image)',
        'Architecture IoT complète : Capteurs PIR → Raspberry Pi → Backend Django → Frontend React/Flutter',
        'Application mobile Flutter avec dashboard, historique et notifications push',
        'API REST sécurisée avec authentification JWT',
        'Gestion en temps réel des événements et des capteurs',
      ],
      stack: ['Django', 'React', 'Flutter', 'Raspberry Pi', 'Machine Learning', 'Computer Vision', 'IoT', 'JWT'],
      result: 'Système opérationnel permettant la détection automatique et la gestion intelligente des menaces, avec interfaces web et mobile complètes.',
      image: 'https://images.unsplash.com/photo-1584757867291-da5496cc8712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjByYXNwYmVycnklMjBwaSUyMHNlbnNvcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDc2MzU5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      featured: true,
    },
    {
      title: 'Application Mobile RavaGuard',
      subtitle: 'Interface Mobile Flutter pour la Gestion IoT',
      description: 'Application mobile cross-platform développée avec Flutter pour le contrôle et la surveillance du système RavaGuard.',
      context: 'Besoin d\'une interface mobile intuitive permettant aux utilisateurs de surveiller et contrôler le système à distance.',
      solution: [
        'Dashboard temps réel avec visualisation des données',
        'Historique complet des événements détectés',
        'Système d\'authentification sécurisé (JWT)',
        'Notifications push pour alertes instantanées',
        'Interface utilisateur moderne et responsive',
      ],
      stack: ['Flutter', 'Dart', 'REST API', 'JWT', 'Firebase', 'State Management'],
      result: 'Application mobile performante et intuitive permettant un contrôle total du système depuis n\'importe où.',
      image: 'https://images.unsplash.com/photo-1744974086616-8cd4368609ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGZsdXR0ZXIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcwNzYzNTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
    },
    {
      title: 'Backend API Sécurisé RavaGuard',
      subtitle: 'API REST Django pour Système IoT',
      description: 'Backend robuste gérant l\'ensemble des données, capteurs et événements du système RavaGuard.',
      context: 'Architecture backend nécessaire pour orchestrer les communications entre capteurs, IA et interfaces utilisateur.',
      solution: [
        'API REST complète avec Django REST Framework',
        'Authentification et autorisation JWT',
        'Gestion des capteurs et périphériques IoT',
        'Traitement et stockage des événements',
        'Intégration modèles Machine Learning',
        'Documentation API (Swagger/OpenAPI)',
      ],
      stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Docker', 'Redis', 'Celery'],
      result: 'API scalable et sécurisée gérant efficacement l\'ensemble des flux de données du système.',
      image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MDc0ODQ4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-purple-500 via-pink-500 to-rose-600',
    },
    {
      title: 'Dictionnaire Interactif Desktop',
      subtitle: 'Application Java Swing',
      description: 'Application desktop élégante inspirée du Concise Oxford Dictionary avec interface utilisateur soignée.',
      context: 'Projet académique visant à créer une application desktop professionnelle avec une expérience utilisateur de qualité.',
      solution: [
        'Interface graphique Java Swing moderne',
        'Design inspiré du Concise Oxford Dictionary',
        'Système de recherche avancé',
        'Gestion de base de données locale',
        'Architecture MVC propre et maintenable',
      ],
      stack: ['Java', 'Java Swing', 'SQLite', 'MVC', 'JUnit'],
      result: 'Application desktop fonctionnelle avec interface professionnelle et performances optimales.',
      image: 'https://images.unsplash.com/photo-1675557009285-b55f562641b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MDcyOTgxNXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-orange-500 via-amber-500 to-yellow-600',
    },
    {
      title: 'Plateforme de Gestion des Lignes de Bus',
      subtitle: 'Application Web avec Géolocalisation',
      description: 'Système de gestion et de suivi en temps réel des lignes de bus avec intégration Google Maps.',
      context: 'Nécessité d\'une solution pour gérer et suivre les lignes de bus avec localisation en temps réel.',
      solution: [
        'Interface web responsive avec React',
        'Intégration Google Maps API',
        'Suivi en temps réel des véhicules',
        'Gestion des itinéraires et horaires',
        'Backend Laravel robuste',
        'Panel d\'administration complet',
      ],
      stack: ['Laravel', 'React', 'Google Maps API', 'MySQL', 'WebSockets', 'Bootstrap'],
      result: 'Plateforme complète permettant la gestion efficace et le suivi en temps réel des transports.',
      image: 'https://images.unsplash.com/photo-1597239451147-f163967b8581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDcyMjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-teal-500 via-cyan-500 to-blue-600',
    },
    {
      title: 'Infrastructures Réseau Sécurisées',
      subtitle: 'Architecture Réseau avec pfSense & Snort',
      description: 'Conception et déploiement d\'infrastructures réseau sécurisées avec pare-feu et systèmes de détection d\'intrusion.',
      context: 'Projet de sécurisation d\'infrastructure réseau avec segmentation VLAN et monitoring de sécurité.',
      solution: [
        'Déploiement pfSense comme pare-feu principal',
        'Configuration VLAN pour segmentation réseau',
        'Intégration Snort (IDS/IPS)',
        'Mise en place de règles de filtrage avancées',
        'Configuration NAT, VPN et ACL',
        'Monitoring et logs centralisés',
      ],
      stack: ['pfSense', 'Snort', 'VLAN', 'iptables', 'VPN', 'NAT', 'ACL'],
      result: 'Infrastructure réseau hautement sécurisée avec détection d\'intrusion et monitoring en temps réel.',
      image: 'https://images.unsplash.com/photo-1693314184947-af516631ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBmaXJld2FsbCUyMGN5YmVyc2VjdXJpdHl8ZW58MXx8fHwxNzcwNzYzNTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-red-500 via-orange-500 to-amber-600',
    },
    {
      title: 'MongoDB Replica Set',
      subtitle: 'Haute Disponibilité et Réplication',
      description: 'Mise en place d\'un cluster MongoDB avec réplication multi-nœuds pour garantir la haute disponibilité.',
      context: 'Besoin d\'une architecture de base de données résiliente et hautement disponible.',
      solution: [
        'Configuration Replica Set MongoDB',
        'Déploiement multi-nœuds (Primary + Secondaries)',
        'Mise en place de la réplication automatique',
        'Configuration du failover automatique',
        'Tests de basculement et récupération',
        'Monitoring des performances',
      ],
      stack: ['MongoDB', 'Replica Set', 'Linux', 'Docker', 'Monitoring Tools'],
      result: 'Cluster MongoDB hautement disponible avec réplication automatique et failover instantané.',
      image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MDc0ODQ4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-green-500 via-lime-500 to-emerald-600',
    },
    {
      title: 'CI/CD & DevOps Pipeline',
      subtitle: 'Automatisation avec Docker, Jenkins, Kubernetes & Ansible',
      description: 'Mise en place d\'une chaîne CI/CD complète pour l\'automatisation du déploiement et de la maintenance.',
      context: 'Optimisation du workflow de développement avec automatisation complète du build, test et déploiement.',
      solution: [
        'Pipeline Jenkins pour CI/CD',
        'Conteneurisation avec Docker',
        'Orchestration Kubernetes (pods, services, deployments)',
        'Automatisation Ansible pour configuration',
        'Tests automatisés intégrés',
        'Déploiement automatique en production',
      ],
      stack: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Git', 'Linux', 'Shell Scripting'],
      result: 'Pipeline DevOps complet réduisant le temps de déploiement et minimisant les erreurs humaines.',
      image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MDc0ODQ4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-indigo-500 via-violet-500 to-purple-600',
    },
  ];

  return (
    <section id="projets" className="py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-xl border border-green-500/20 rounded-full mb-4"
          >
            <Zap size={16} className="text-green-400" />
            <span className="text-sm font-semibold text-green-400">Réalisations</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Des projets complexes démontrant une maîtrise complète du cycle de développement
          </p>
        </motion.div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-80 lg:h-full overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="px-4 py-2 bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 rounded-full flex items-center gap-2"
                        >
                          <Sparkles size={16} className="text-yellow-400" />
                          <span className="text-sm font-semibold text-yellow-400">Projet Phare</span>
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 sm:p-10 space-y-5 relative z-10">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{project.description}</p>

                    <div className="space-y-4">
                      <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                          Contexte
                        </h4>
                        <p className="text-sm text-gray-400">{project.context}</p>
                      </div>

                      {project.solution && (
                        <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                            Solution
                          </h4>
                          <ul className="space-y-2">
                            {project.solution.slice(0, 3).map((item, i) => (
                              <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                <ArrowRight size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-green-400 mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                          Résultat
                        </h4>
                        <p className="text-sm text-gray-400">{project.result}</p>
                      </div>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-medium text-gray-300 hover:border-white/30 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
