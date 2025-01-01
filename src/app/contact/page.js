'use client';

import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import FeedbackForm from '../../components/Feedback/FeedbackForm';

const ContactPage = () => {
  const { theme } = useAppContext();

  return (
    <section
      className={`min-h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-purple-500 text-white px-4 py-16 sm:px-8 lg:px-16 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold tracking-wide mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            Contact Me
          </motion.h1>
          <p className="text-lg text-gray-300">
            Got questions or want to collaborate? Fill out the form below or reach out directly.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feedback Form */}
            <FeedbackForm />

            {/* Contact Information */}
            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
                <p className="text-gray-300">Feel free to reach out anytime. I'll do my best to respond promptly!</p>
              </div>
              <div>
                <p className="flex items-center space-x-3">
                  <span className="text-purple-400">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span>email@example.com</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-purple-400">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span>+1 234 567 890</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-purple-400">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span>123 Fitness St, Training City</span>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition duration-300"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition duration-300"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition duration-300"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition duration-300"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ContactPage;
