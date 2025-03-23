"use client";
import { motion } from "framer-motion";

export default function Datenschutz() {
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
          Datenschutzerklärung
        </motion.h1>
        
        <motion.section 
        className="py-8 bg-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-xl font-bold mt-4 mb-2">Allgemeine Hinweise</h3>
          <p className="text-gray-600">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </motion.section>
        
        <motion.section 
        className="py-8 bg-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">2. Verantwortliche Stelle</h2>
          <p className="text-gray-600">
            [Vorname] [Nachname]<br />
            Psychotherapeutische Praxis<br />
            [Straße und Hausnummer]<br />
            [PLZ] Berlin<br />
            Telefon: [Ihre Telefonnummer]<br />
            E-Mail: [Ihre E-Mail-Adresse]
          </p>
        </motion.section>
        
        <motion.section 
        className="py-8 bg-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">3. Datenerfassung auf dieser Website</h2>
          <h3 className="text-xl font-bold mt-4 mb-2">Cookies</h3>
          <p className="text-gray-600">
            Diese Website verwendet keine Marketing- oder Analyse-Cookies. Es werden lediglich technisch notwendige Cookies durch das Next.js Framework verwendet, die für die grundlegende Funktionalität der Website erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und werden nur für die Dauer Ihrer Browsersitzung gespeichert.
          </p>

          <p className="mt-4 text-gray-600">
            Sie können in Ihren Browsereinstellungen festlegen, ob Cookies gesetzt werden dürfen. Das Deaktivieren von Cookies kann die Funktionalität dieser Website einschränken.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Server-Log-Dateien</h3>
          <p className="text-gray-600">
            Der Provider dieser Website erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Diese sind:
            <br />- Browsertyp und -version
            <br />- Verwendetes Betriebssystem
            <br />- Referrer URL
            <br />- Hostname des zugreifenden Rechners
            <br />- Uhrzeit der Serveranfrage
            <br />- IP-Adresse
          </p>
        </motion.section>
        
        <motion.section 
        className="py-8 bg-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">4. Therapeutische Dokumentation</h2>
          <p className="text-gray-600">
            Als Psychotherapeutin bin ich zur Dokumentation der therapeutischen Behandlung verpflichtet. Diese Dokumentation erfolgt unter Beachtung der gesetzlichen Vorschriften, insbesondere:
            <br />- Berufsordnung für Psychotherapeuten
            <br />- Patientenrechtegesetz
            <br />- Datenschutz-Grundverordnung (DSGVO)
          </p>
        </motion.section>
        
        <motion.section 
        className="py-8 bg-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">5. Ihre Rechte</h2>
          <p className="text-gray-600">
            Sie haben folgende Rechte:
            <br />- Recht auf Auskunft
            <br />- Recht auf Berichtigung
            <br />- Recht auf Einschränkung der Verarbeitung
            <br />- Recht auf Löschung
            <br />- Recht auf Datenübertragbarkeit
            <br />- Widerspruchsrecht
          </p>
        </motion.section>
        
        <motion.section 
        className="py-8 bg-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">6. Änderung der Datenschutzerklärung</h2>
          <p className="text-gray-600">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
          </p>
        </motion.section>
        
        <motion.section 
        className="py-8 bg-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        >
          <p className="text-gray-600">
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
}
