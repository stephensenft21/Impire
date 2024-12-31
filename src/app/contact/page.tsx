'use client';

import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';

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
            Got questions, feedback, or want to collaborate? Fill out the form below or reach out directly.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <form>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-2 p-3 w-full rounded-lg border border-gray-600 bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 p-3 w-full rounded-lg border border-gray-600 bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="mt-2 p-3 w-full rounded-lg border border-gray-600 bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 px-4 rounded-lg shadow-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Feedback Form */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <form>
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-200">
                    Rate Your Experience
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    className="mt-2 p-3 w-full rounded-lg border border-gray-600 bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  >
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="average">Average</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-200">
                    Feedback
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    rows="5"
                    className="mt-2 p-3 w-full rounded-lg border border-gray-600 bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    placeholder="Share your feedback"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 px-4 rounded-lg shadow-lg transition duration-300"
                >
                  Submit Feedback
                </button>
              </form>
            </motion.div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ContactPage;
