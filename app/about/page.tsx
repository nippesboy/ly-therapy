'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const textFadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
          <Image
            src="/images/therapist-office.jpg"
            alt="Therapeutin in der Praxis"
            fill
            className="object-cover"
            priority
          />
        </div>
        <motion.div 
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Über mich
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Ihre Psychotherapeutin in Köln
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            className="space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="relative p-12 rounded-3xl bg-gradient-to-br from-card-bg to-section-bg/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-card-border group hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-text-primary mb-8">
                  Meine Qualifikation
                </h2>
                <motion.div 
                  className="space-y-6 text-text-secondary text-lg leading-relaxed"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.15 }}
                >
                  <motion.p variants={textFadeIn}>
                    Als approbierte Psychologische Psychotherapeutin bringe ich umfassende Expertise in der Verhaltenstherapie mit. Meine langjährige Erfahrung in der ambulanten Psychotherapie ermöglicht es mir, Menschen in verschiedensten Lebenssituationen kompetent zu unterstützen.
                  </motion.p>
                  <motion.p variants={textFadeIn}>
                    Durch regelmäßige Fort- und Weiterbildungen halte ich mich stets auf dem neuesten Stand der therapeutischen Methoden und Erkenntnisse. Dies erlaubt mir, moderne und effektive Behandlungsansätze in meine Arbeit zu integrieren.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="relative p-12 rounded-3xl bg-gradient-to-br from-card-bg to-section-bg/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-card-border group hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-text-primary mb-8">
                  Meine Schwerpunkte
                </h2>
                <motion.div 
                  className="space-y-6 text-text-secondary text-lg leading-relaxed"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.15 }}
                >
                  <motion.p variants={textFadeIn}>
                    Mein therapeutisches Spektrum umfasst die Behandlung von Depression und Angststörungen, wobei ich besonderen Wert auf einen ganzheitlichen Ansatz lege. In der Stress- und Burnout-Bewältigung unterstütze ich Sie dabei, Ihre Balance wiederzufinden und nachhaltige Strategien zu entwickeln.
                  </motion.p>
                  <motion.p variants={textFadeIn}>
                    Ein weiterer Fokus liegt auf der Persönlichkeitsentwicklung und der Bearbeitung von Beziehungsproblemen. Dabei nutze ich moderne therapeutische Methoden, um Ihnen neue Perspektiven zu eröffnen. Auch in der Behandlung von Trauma und PTBS verfüge ich über fundierte Erfahrung und spezielle Qualifikationen.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative h-[800px] rounded-2xl overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <Image
              src="/images/therapist-office.jpg"
              alt="Therapeutin in der Praxis"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        <motion.div 
          className="bg-gradient-to-br from-section-bg to-card-bg p-12 rounded-2xl shadow-lg mb-24 border border-card-border group hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <h2 className="text-3xl font-bold text-text-primary mb-8">
              Mein therapeutischer Ansatz
            </h2>
            <motion.div 
              className="space-y-6 text-text-secondary text-lg leading-relaxed"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
            >
              <motion.p variants={textFadeIn}>
                In meiner therapeutischen Arbeit verbinde ich wissenschaftlich fundierte
                Methoden mit einer empathischen und wertschätzenden Haltung. Mein Ziel ist es,
                Ihnen einen sicheren Raum zu bieten, in dem Sie sich öffnen und Ihre
                persönlichen Herausforderungen angehen können.
              </motion.p>
              <motion.p variants={textFadeIn}>
                Die Verhaltenstherapie, die ich praktiziere, ist ein moderner und
                effektiver Ansatz, der sich an Ihren individuellen Bedürfnissen und
                Zielen orientiert. Gemeinsam entwickeln wir Strategien, die Ihnen helfen,
                Ihre Lebensqualität zu verbessern und Ihre persönlichen Ressourcen zu
                stärken.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div 
            className="bg-card-bg/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-card-border group hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
            variants={fadeInUp}
          >
            <div className="relative">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Wissenschaftliche Grundlage
              </h3>
              <motion.p 
                className="text-text-secondary leading-relaxed"
                variants={textFadeIn}
              >
                Meine Arbeit basiert auf aktuellen wissenschaftlichen Erkenntnissen
                und wird durch regelmäßige Fortbildungen stetig weiterentwickelt.
                Dieser evidenzbasierte Ansatz garantiert Ihnen eine moderne und effektive Therapie.
              </motion.p>
            </div>
          </motion.div>
          <motion.div 
            className="bg-card-bg/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-card-border group hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
            variants={fadeInUp}
          >
            <div className="relative">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Individuelle Betreuung
              </h3>
              <motion.p 
                className="text-text-secondary leading-relaxed"
                variants={textFadeIn}
              >
                Jeder Mensch ist einzigartig. Ich entwickle mit Ihnen einen
                maßgeschneiderten Therapieplan, der Ihre persönlichen Bedürfnisse
                und Ziele in den Mittelpunkt stellt. Ihre individuelle Geschichte ist der Ausgangspunkt unserer gemeinsamen Arbeit.
              </motion.p>
            </div>
          </motion.div>
          <motion.div 
            className="bg-card-bg/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-card-border group hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
            variants={fadeInUp}
          >
            <div className="relative">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Vertrauensvolle Zusammenarbeit
              </h3>
              <motion.p 
                className="text-text-secondary leading-relaxed"
                variants={textFadeIn}
              >
                Eine vertrauensvolle therapeutische Beziehung ist die Grundlage
                für eine erfolgreiche Therapie. In einem geschützten Rahmen können Sie 
                offen über Ihre Anliegen sprechen und neue Perspektiven entwickeln.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 