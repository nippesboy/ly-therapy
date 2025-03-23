'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">
      <motion.section 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
          <Image
            src="/images/therapy-contact.jpg"
            alt="Kontakt Hero Image"
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
            Kontakt
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Ich freue mich auf Ihre Nachricht
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
                variants={fadeInUp}
              >
                Kontaktieren Sie mich
              </motion.h2>
              <motion.div 
                className="space-y-4 text-gray-700 dark:text-gray-300"
                variants={fadeInUp}
              >
                <p className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Musterstraße 123, 12345 Berlin</span>
                </p>
                <p className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+49 (0) 123 456789</span>
                </p>
                <p className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>kontakt@example.com</span>
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
                variants={fadeInUp}
              >
                Anfahrt
              </motion.h2>
              <motion.p 
                className="text-gray-700 dark:text-gray-300 mb-4"
                variants={fadeInUp}
              >
                Die Praxis ist gut mit öffentlichen Verkehrsmitteln erreichbar:
              </motion.p>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div>
              <div className="relative">
                <motion.h2 
                  className="text-3xl font-bold text-text-primary mb-6"
                  variants={fadeInUp}
                >
                  Kontaktieren Sie mich
                </motion.h2>
                <motion.div 
                  className="space-y-4 text-text-primary"
                  variants={fadeInUp}
                >
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Musterstraße 123, 12345 Berlin</span>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+49 (0) 123 456789</span>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>kontakt@example.com</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="relative p-8 rounded-3xl bg-gradient-to-br from-card-bg to-section-bg/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-card-border group hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div>
              <div className="relative">
                <motion.h2 
                  className="text-3xl font-bold text-text-primary mb-6"
                  variants={fadeInUp}
                >
                  Anfahrt
                </motion.h2>
                <motion.p 
                  className="text-text-primary mb-4"
                  variants={fadeInUp}
                >
                  Die Praxis ist gut mit öffentlichen Verkehrsmitteln erreichbar:
                </motion.p>
                <motion.ul 
                  className="list-disc list-inside space-y-2 text-text-primary"
                  variants={fadeInUp}
                >
                  <li>U-Bahn: Linie U1, Station Musterstraße</li>
                  <li>Bus: Linie 123, Haltestelle Musterstraße</li>
                  <li>Parkplätze sind in der Nähe verfügbar</li>
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative p-8 rounded-3xl bg-gradient-to-br from-card-bg to-section-bg/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-card-border group hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div>
            <div className="relative">
              <motion.h2 
                className="text-3xl font-bold text-text-primary mb-6"
                variants={fadeInUp}
              >
                Kontaktformular
              </motion.h2>
              <motion.form 
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={fadeInUp}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Ihre Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Nachricht senden
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 