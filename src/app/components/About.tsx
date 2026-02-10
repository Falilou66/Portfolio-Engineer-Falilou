import { motion } from 'motion/react';
import { User, Award, Users, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="apropos" className="py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 rounded-full mb-4"
          >
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">Mon Parcours</span>
          </motion.div> */}

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              À propos
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-xl">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src="https://images.unsplash.com/photo-1597239451147-f163967b8581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDcyMjE5MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Engineering workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Animated border gradient */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    background: [
                      'linear-gradient(0deg, rgba(59,130,246,0.3), rgba(168,85,247,0.3))',
                      'linear-gradient(90deg, rgba(168,85,247,0.3), rgba(34,197,94,0.3))',
                      'linear-gradient(180deg, rgba(34,197,94,0.3), rgba(59,130,246,0.3))',
                      'linear-gradient(270deg, rgba(59,130,246,0.3), rgba(168,85,247,0.3))',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ zIndex: -1, filter: 'blur(20px)' }}
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl -z-10 blur-2xl opacity-50"></div>
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl -z-10 blur-2xl opacity-50"></div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Passionné par les technologies et l'innovation, mon parcours reflète une évolution 
                  naturelle du technicien vers l'ingénieur, avec une capacité démontrée à analyser 
                  des besoins complexes et à concevoir des architectures logicielles robustes.
                </p>
                <p className="text-lg leading-relaxed">
                  Ma formation académique combine une <span className="text-purple-400 font-semibold">Licence professionnelle en Systèmes, Réseaux & Télécommunications</span> (mention Très Bien) 
                  et un <span className="text-blue-400 font-semibold">Master en Systèmes d'Information</span> actuellement en cours.
                </p>
                <p className="text-lg leading-relaxed">
                  Je m'investis particulièrement dans les projets intégrant <span className="text-green-400 font-semibold">IoT, Intelligence Artificielle, DevOps</span> et <span className="text-purple-400 font-semibold">cybersécurité</span>, 
                  avec un goût prononcé pour la recherche appliquée et l'innovation technologique.
                </p>
              </div>

              {/* Highlights with enhanced design */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {[
                  { icon: User, title: 'Profil Ingénieur', subtitle: 'Architecture & Conception', gradient: 'from-blue-500 to-cyan-500' },
                  { icon: Award, title: 'Mention Très Bien', subtitle: 'Licence Pro SRT', gradient: 'from-purple-500 to-pink-500' },
                  { icon: Users, title: 'Leadership', subtitle: 'Coordinateur Club Info', gradient: 'from-green-500 to-emerald-500' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 group overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <item.icon className={`bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent mb-3`} size={32} />
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.subtitle}</div>
                    
                    {/* Border gradient effect */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${item.gradient}`} style={{ padding: '1px', zIndex: -1 }}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}