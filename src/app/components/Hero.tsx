import { motion } from 'motion/react';
import { ChevronDown, Download, Mail, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        }} />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 45, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-green-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            {/* <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 rounded-full mb-8"
            >
              <Sparkles size={20} className="text-yellow-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio Ingénieur 2026
              </span>
            </motion.div> */}

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <motion.span 
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% auto' }}
              >
                Fallilou Mbacke Gueye
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
              Étudiant en Master Systèmes d'Information
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 text-lg sm:text-xl">
              <span className="px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg text-blue-400 font-semibold">
                Dev web et Mobile
              </span>
              <span className="text-gray-600">•</span>
              <span className="px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-lg text-purple-400 font-semibold">
                DevOps
              </span>
              <span className="text-gray-600">•</span>
              <span className="px-4 py-2 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-lg text-green-400 font-semibold">
                IA & IoT
              </span>
              <span className="text-gray-600">•</span>
              <span className="px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-lg text-purple-400 font-semibold">
                Systemes Reseaux et Cybersécurité
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Spécialisé dans la conception et le développement de solutions logicielles modernes 
            intégrant développement web, mobile et desktop, DevOps, intelligence artificielle et IoT. 
            Habitué à travailler sur des architectures complètes, de la conception au déploiement.
          </motion.p>

          {/* Badges with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { name: 'Génie Logiciel', color: 'from-blue-500 to-cyan-500' },
              { name: 'DevOps & Cloud', color: 'from-purple-500 to-pink-500' },
              { name: 'IA & IoT', color: 'from-green-500 to-emerald-500' },
              { name: 'Réseaux & Cybersécurité', color: 'from-red-500 to-orange-500' }
            ].map((badge, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-6 py-3 bg-gradient-to-r ${badge.color} bg-opacity-10 backdrop-blur-xl border border-white/10 rounded-xl text-sm sm:text-base text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default`}
                style={{
                  background: `linear-gradient(135deg, ${badge.color.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : badge.color.includes('purple') ? 'rgba(168, 85, 247, 0.1)' : badge.color.includes('green') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'} 0%, transparent 100%)`
                }}
              >
                {badge.name}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons with improved design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projets')}
              className="relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg overflow-hidden group"
              style={{ backgroundSize: '200% auto' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">Voir mes projets</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              <a href="https://drive.google.com/file/d/1cg1q1aSY6Xt5JKetwNHVqRx9_IVLHyNK/view?usp=drive_link">Télécharger mon CV</a>
              
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Me contacter
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('apropos')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2 }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-semibold">Découvrir</span>
          <ChevronDown size={32} />
        </div>
      </motion.button>
    </section>
  );
}