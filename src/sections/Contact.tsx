'use client';
import { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  subject: string;
  message: string;
};

export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending'>('idle');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  // Animation helpers

  const modalVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { opacity: 0, y: 40, scale: 0.97, transition: { duration: 0.2 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const onSubmit = async (data: FormData) => {
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.custom(
          (t) => (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-6 py-4 rounded-lg shadow-lg"
            >
              <span className="text-emerald-500 flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Message sent successfully!
              </span>
            </motion.div>
          ),
          { duration: 5000, position: 'top-center' }
        );
        reset();
        setIsOpen(false);
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }
    } catch (error) {
      toast.custom(
        (t) => (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="flex items-center gap-2 bg-red-500/20 border border-red-500/20 px-6 py-4 rounded-lg shadow-lg"
          >
            <span className="text-red-500 flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error instanceof Error ? error.message : 'Failed to send message'}
            </span>
          </motion.div>
        ),
        { duration: 5000, position: 'top-center' }
      );
    } finally {
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="bg-gray-900 py-16">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="rounded-2xl p-0.5 shadow-xl">
          <div className="bg-gradient-to-r from-emerald-400 to-sky-500 rounded-xl p-8 md:p-10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Let's Build Something Great</h2>
                <p className="text-gray-600 mt-2">
                  Have a project in mind? Reach out and let's make it happen.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                Contact Me <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-3xl w-full max-w-2xl relative shadow-2xl border border-gray-800">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setStatus('idle');
                    }}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    title="Close"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="block text-base font-semibold text-gray-300 mb-2">Name*</label>
                        <input
                          {...register('name', { required: 'Required' })}
                          className="w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-gray-700 text-gray-200 placeholder-gray-500 text-base transition-colors"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-base font-semibold text-gray-300 mb-2">Phone</label>
                        <input
                          type="tel"
                          {...register('phone')}
                          className="w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-gray-700 text-gray-200 placeholder-gray-500 text-base transition-colors"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="block text-base font-semibold text-gray-300 mb-2">Email*</label>
                        <input
                          type="email"
                          {...register('email', {
                            required: 'Required',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Invalid email address'
                            }
                          })}
                          className="w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-gray-700 text-gray-200 placeholder-gray-500 text-base transition-colors"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-base font-semibold text-gray-300 mb-2">Address</label>
                        <input
                          type="text"
                          {...register('address')}
                          className="w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-gray-700 text-gray-200 placeholder-gray-500 text-base transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-300 mb-2">Subject*</label>
                    <input
                      {...register('subject', { required: 'Required' })}
                      className="w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-gray-700 text-gray-200 placeholder-gray-500 text-base transition-colors"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-300 mb-2">Message*</label>
                    <textarea
                      rows={5}
                      {...register('message', { required: 'Required' })}
                      className="w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-gray-700 text-gray-200 placeholder-gray-500 text-base transition-colors scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 resize-none"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-gradient-to-r from-emerald-500 to-sky-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-70 flex justify-center items-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};