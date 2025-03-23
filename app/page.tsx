'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* Static background image */}
          <div className="absolute inset-0 bg-[url('/images/therapist-office.jpg')] bg-cover bg-center"></div>
          
          {/* Video element */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={(e) => {
              console.log('Video loaded successfully');
              const video = e.target as HTMLVideoElement;
              video.style.opacity = '1';
            }}
            onError={(e) => {
              console.error('Video error:', e);
              const video = e.target as HTMLVideoElement;
              video.style.display = 'none';
            }}
          >
            <source 
              src="/videos/hero-bg.mp4" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <motion.div 
          className="relative z-20 text-center px-4 sm:px-6 lg:px-8"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Psychologische Psychotherapie
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Professionelle Unterstützung für Ihre psychische Gesundheit
          </motion.p>
          <motion.div
            variants={fadeInUp}
          >
            <Link 
              href="/contact" 
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Termin vereinbaren
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="min-h-screen py-24 bg-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-gray-900 leading-tight"
                variants={fadeInUp}
              >
                Über mich
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                Als approbierte Psychotherapeutin mit langjähriger Erfahrung biete ich Ihnen
                einen sicheren und vertrauensvollen Rahmen für Ihre persönliche Entwicklung.
              </motion.p>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                Mein therapeutischer Ansatz ist geprägt von Empathie, Respekt und
                Professionalität. Gemeinsam entwickeln wir Lösungsstrategien für Ihre
                individuellen Herausforderungen.
              </motion.p>
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
                alt="Therapy Session"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Therapy Methods Section */}
      <motion.section 
        className="min-h-screen py-24 bg-gradient-to-b from-gray-50 to-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Mein therapeutischer Ansatz
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Individuelle Beratung
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Jeder Mensch ist einzigartig. Ich entwickle mit Ihnen einen
                maßgeschneiderten Therapieplan, der Ihre persönlichen Bedürfnisse
                berücksichtigt.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Wissenschaftliche Methoden
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Meine Arbeit basiert auf wissenschaftlich fundierten
                Therapiemethoden und wird kontinuierlich durch Fortbildungen
                erweitert.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Vertrauensvolle Atmosphäre
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In einer geschützten und wertschätzenden Umgebung können Sie
                offen über Ihre Anliegen sprechen.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        className="relative h-[80vh] py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Vereinbaren Sie einen Termin
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ich freue mich darauf, Sie kennenzulernen und Sie auf Ihrem Weg zu unterstützen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
