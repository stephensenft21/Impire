'use client';

import Link from 'next/link';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const HomePage = () => {
  const { theme } = useAppContext();

  return (
    <section
      className={`min-h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-purple-500 text-white px-4 py-16 sm:px-8 lg:px-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold tracking-wide mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            Welcome to Impire
          </motion.h1>
          <p className="text-lg text-gray-300">
            Empowering your fitness journey with passion and precision.
          </p>
        </header>

        <main>
          {/* Feature Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <Link href="/about">
              <motion.div
                className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 shadow-lg p-6 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer hover:bg-purple-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h2 className="text-2xl font-bold text-white">About Me</h2>
                <p className="text-gray-200">Learn more about the trainer behind Impire.</p>
              </motion.div>
            </Link>

            {/* Card 2 */}
            <Link href="/training">
              <motion.div
                className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 shadow-lg p-6 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer hover:bg-purple-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-white">Training Packages</h2>
                <p className="text-gray-200">Explore our specialized fitness packages.</p>
              </motion.div>
            </Link>

            {/* Card 3 */}
            <Link href="/client">
              <motion.div
                className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 shadow-lg p-6 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer hover:bg-purple-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              >
                <h2 className="text-4xl font-bold text-white">Client Transformations</h2>
                <p className="text-gray-200">See the incredible results achieved by our clients.</p>
              </motion.div>
            </Link>
          </section>

          {/* CTA Section */}
          <section className="text-center mt-10">
            <motion.h2
              className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
            >
              Ready to Transform Your Life?
            </motion.h2>
            <Link href="/contact">
              <motion.button
                className="bg-purple-600 hover:bg-purple-500 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.button>
            </Link>
          </section>
        </main>
      </div>
    </section>
  );
};

export default HomePage;
