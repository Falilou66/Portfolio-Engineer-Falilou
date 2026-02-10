import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'fallilou.mbacke.gueye@uadb.edu.sn',
      href: 'mailto:fallilou.mbacke.gueye@uadb.edu.sn',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Fallilou Mbacke Gueye',
      href: 'https://linkedin.com/in/fallilou-mbacke-gueye',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Falilou66',
      href: 'https://github.com/Falilou66',
      color: 'from-gray-700 to-gray-500',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+221 78 280 74 90',
      href: 'tel:+221782807490',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Sénégal',
      href: null,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Disponible pour stages de Master, projets de recherche appliquée et opportunités ingénieur junior
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 group h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-400 mb-1">{contact.label}</div>
                        <div className="text-white font-medium truncate group-hover:text-blue-400 transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${contact.color}`}>
                        <contact.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-400 mb-1">{contact.label}</div>
                        <div className="text-white font-medium truncate">{contact.value}</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Discutons de votre projet
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Intéressé par les projets innovants intégrant développement, DevOps, IA et IoT. 
              N'hésitez pas à me contacter pour échanger sur vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:fallilou.mbacke.gueye@uadb.edu.sn"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Envoyer un email
              </a>
              <a
                href="https://linkedin.com/in/fallilou-mbacke-gueye"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold border border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                <a href="https://linkedin.com/in/fallilou-mbacke-gueye">Me suivre sur LinkedIn</a>
                
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
