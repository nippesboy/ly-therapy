'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
};

export default function Therapy() {
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
            src="/images/therapy-session.jpg"
            alt="Therapiesitzung"
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
            Meine Therapiemethoden
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Wissenschaftlich fundierte Verhaltenstherapie
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Verhaltenstherapie
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Die Verhaltenstherapie ist ein wissenschaftlich fundierter Ansatz,
                  der sich auf die Veränderung von problematischen Verhaltensweisen
                  und Denkmustern konzentriert. Im Mittelpunkt steht die Frage:
                  "Was hält das Problem aufrecht und wie können wir es verändern?"
                </p>
                <p>
                  Gemeinsam erarbeiten wir konkrete Lösungsstrategien und üben neue
                  Verhaltensweisen ein. Dabei berücksichtigen wir stets Ihre
                  individuellen Bedürfnisse und Ziele.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <Image
              src="/images/therapy-session.jpg"
              alt="Therapiesitzung"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl shadow-lg mb-24 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Der therapeutische Prozess
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">1</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Erstgespräch
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Im ersten Gespräch lernen wir uns kennen und besprechen Ihre
                Anliegen und Erwartungen. Gemeinsam entwickeln wir erste
                Therapieziele.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">2</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Diagnostik
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In den ersten Sitzungen erheben wir eine fundierte Diagnose
                und entwickeln einen individuellen Therapieplan.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">3</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Therapie
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In regelmäßigen Sitzungen arbeiten wir an Ihren Zielen und
                entwickeln neue Bewältigungsstrategien.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="space-y-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 text-center"
            variants={fadeInUp}
          >
            Häufige Themen in der Therapie
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={fadeInUp}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Depression
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gemeinsam erarbeiten wir Strategien gegen depressive Gedanken
                und Antriebslosigkeit. Wir stärken Ihre Ressourcen und
                entwickeln neue Perspektiven.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Angststörungen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Wir analysieren Ihre Ängste und entwickeln schrittweise
                Bewältigungsstrategien. Dabei gehen wir in Ihrem Tempo vor.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Stress & Burnout
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Wir identifizieren Stressfaktoren und entwickeln Strategien
                zur besseren Balance zwischen Anforderungen und Ressourcen.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Beziehungsprobleme
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gemeinsam analysieren wir Beziehungsmuster und entwickeln
                neue Kommunikationsstrategien für erfüllendere Beziehungen.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Vereinbaren Sie ein Erstgespräch
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ich freue mich darauf, Sie kennenzulernen und Sie auf Ihrem Weg zu unterstützen.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kontakt aufnehmen
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 