import { motion } from 'motion/react';
import { Code2, Server, Brain, Shield, Sparkles } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Génie Logiciel & Développement',
      icon: Code2,
      gradient: 'from-blue-500 to-cyan-600',
      skills: [
        { name: 'Backend', items: ['Django', 'Laravel', 'Spring Boot'] },
        { name: 'Frontend', items: ['React', 'HTML', 'CSS','Tailwind CSS', 'JavaScript'] },
        { name: 'Mobile', items: ['Flutter', 'Dart','React Native'] },
        { name: 'Desktop', items: ['Java Swing'] },
        { name: 'Architecture', items: ['API REST', 'JWT', 'MVC / MTV'] },
        { name: 'Outils', items: ['Git', 'GitHub', 'Bonnes pratiques'] },
      ],
    },
    {
      title: 'DevOps & Systèmes',
      icon: Server,
      gradient: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Conteneurisation', items: ['Docker', 'Dockerfile', 'Images'] },
        { name: 'Orchestration', items: ['Kubernetes', 'Pods', 'Services'] },
        { name: 'CI/CD', items: ['Jenkins', 'Pipelines'] },
        { name: 'Automatisation', items: ['Ansible', 'Scripts'] },
        { name: 'Systèmes', items: ['Linux', 'Ubuntu Server','Debian'] },
      ],
    },
    {
      title: 'Intelligence Artificielle & IoT',
      icon: Brain,
      gradient: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'Machine Learning', items: ['Classification audio', 'Classification image'] },
        { name: 'Vision', items: ['Computer Vision', 'Traitement image'] },
        { name: 'Hardware', items: ['Raspberry Pi', 'Capteurs PIR'] },
        { name: 'IoT Chain', items: ['Capteur → Backend → Frontend'] },
        { name: 'Data', items: ['Création de datasets', 'Prétraitement'] },
        { name: 'Intégration', items: ['Django API', 'Flutter Mobile'] },
      ],
    },
    {
      title: 'Réseaux & Cybersécurité',
      icon: Shield,
      gradient: 'from-red-500 to-orange-600',
      skills: [
        { name: 'Réseau', items: ['VLAN', 'NAT', 'ACL', 'VPN'] },
        { name: 'Firewall', items: ['pfSense', 'iptables'] },
        { name: 'Sécurité', items: ['IDS/IPS', 'Snort'] },
        { name: 'Pentesting', items: ['Nmap', 'Wireshark', 'Kali Linux'] },
        { name: 'Protection', items: ['Sécurisation API', 'Hardening'] },
        { name: 'Infrastructure', items: ['Architecture sécurisée'] },
      ],
    },
  ];

  return (
    <section id="competences" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(168, 85, 247, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-xl border border-purple-500/20 rounded-full mb-4"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-semibold text-purple-400">Expertise Technique</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Compétences Techniques
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Une expertise complète couvrant l'ensemble du cycle de développement et de déploiement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} blur-2xl opacity-30`} />
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                  >
                    <category.icon size={28} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-2">
                      <div className={`text-sm font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                        {skillGroup.name}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-gray-300 hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}