'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Gagal mengirim pesan.');
      }

      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan. Coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }}
    >
      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="neo-card bg-neo-mint p-6 text-center"
        >
          <CheckCircleIcon className="w-12 h-12 mx-auto mb-3 stroke-[2]" />
          <p className="font-grotesk font-bold text-lg mb-1">Terima kasih!</p>
          <p className="font-grotesk text-sm">
            Pesan Anda telah terkirim. Saya akan menghubungi Anda segera.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="text-left space-y-5">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="neo-border bg-neo-coral/20 p-3 flex items-center gap-2"
            >
              <ExclamationTriangleIcon className="w-5 h-5 stroke-[2] flex-shrink-0" />
              <p className="font-grotesk text-sm font-medium">{error}</p>
            </motion.div>
          )}

          <div>
            <label htmlFor="name" className="block font-grotesk text-sm font-bold uppercase mb-2">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              placeholder="Masukkan nama Anda"
              className="neo-input"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-grotesk text-sm font-bold uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              placeholder="email@example.com"
              className="neo-input"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-grotesk text-sm font-bold uppercase mb-2">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tulis pesan Anda di sini..."
              className="neo-input resize-none"
            />
          </div>

          <div className="text-center pt-2">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`neo-btn inline-flex items-center gap-2 text-sm ${
                isSubmitting
                  ? 'bg-gray-200 cursor-not-allowed'
                  : 'bg-neo-yellow hover:bg-yellow-300'
              }`}
              whileHover={isSubmitting ? {} : { y: -3, boxShadow: '6px 6px 0px #1A1A1A' }}
              whileTap={isSubmitting ? {} : { y: 1, boxShadow: '2px 2px 0px #1A1A1A' }}
            >
              <PaperAirplaneIcon className="w-4 h-4 stroke-[2.5]" />
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
            </motion.button>
          </div>
        </form>
      )}
    </motion.div>
  );
}
