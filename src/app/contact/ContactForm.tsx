'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm border border-black p-6 mb-6"
        >
          [ Terima kasih! Pesan Anda telah terkirim. Saya akan menghubungi Anda segera. ]
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block font-mono text-sm uppercase mb-2">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full font-mono text-sm border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block font-mono text-sm uppercase mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full font-mono text-sm border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block font-mono text-sm uppercase mb-2">Pesan</label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full font-mono text-sm border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>
          
          <div className="text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`font-mono text-sm border border-black px-8 py-2 ${isSubmitting ? 'bg-gray-200' : 'hover:bg-black hover:text-white'} transition-colors`}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              {isSubmitting ? '[ Mengirim... ]' : '[ Kirim Pesan ]'}
            </motion.button>
          </div>
        </form>
      )}
    </motion.div>
  );
}
