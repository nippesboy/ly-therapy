"use client";
import { motion } from "framer-motion";

export default function Impressum() {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Impressum
        </motion.h1>
        
        <motion.section 
        className="py-8 bg-white relative"
        >
          <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-600">
            [Vorname] [Nachname]<br />
            Psychotherapeutische Praxis<br />
            [Straße und Hausnummer]<br />
            [PLZ] Berlin
          </p>
        </motion.section>
        
        <motion.section 
        className="py-8 bg-white relative"
        >
          <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
          <p className="text-gray-600">
            Telefon: [Ihre Telefonnummer]<br />
            E-Mail: [Ihre E-Mail-Adresse]
          </p>
        </motion.section>
        
        <motion.section 
        className="py-8 bg-white relative"
        >
          <h2 className="text-2xl font-bold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="text-gray-600">
            Berufsbezeichnung: Psychotherapeutin<br />
            Zuständige Kammer: [Name der Psychotherapeutenkammer]<br />
            Verliehen durch: [Bundesland]
          </p>
          <p className="mt-4 text-gray-600">
            Es gelten folgende berufsrechtliche Regelungen:<br />
            - Psychotherapeutengesetz (PsychThG)<br />
            - Berufsordnung der [zuständige Psychotherapeutenkammer]
          </p>
        </motion.section>
        
        <motion.section 
        className="py-8 bg-white relative"
        >
          <h2 className="text-2xl font-bold mb-4">Aufsichtsbehörde</h2>
          <p className="text-gray-600">
            [Name der zuständigen Aufsichtsbehörde]<br />
            [Anschrift der Aufsichtsbehörde]
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
}
