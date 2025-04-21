'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen py-12">
      <motion.section 
        className="max-w-2xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <h1 className="text-sm uppercase tracking-tight font-mono">[  Contact Us  ]</h1>
          <p className="text-xs mt-2 font-mono">Hubungi Kami</p>
        </motion.div>

        <motion.form 
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="border border-black">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama"
              required
              className="w-full px-4 py-3 text-xs font-mono bg-transparent outline-none placeholder:text-black/40"
            />
          </div>

          <div className="border border-black">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 text-xs font-mono bg-transparent outline-none placeholder:text-black/40"
            />
          </div>

          <div className="border border-black">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subjek"
              required
              className="w-full px-4 py-3 text-xs font-mono bg-transparent outline-none placeholder:text-black/40"
            />
          </div>

          <div className="border border-black">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Pesan"
              required
              rows={6}
              className="w-full px-4 py-3 text-xs font-mono bg-transparent outline-none placeholder:text-black/40 resize-none"
            />
          </div>

          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`text-xs font-mono px-6 py-2 border border-black
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:text-white'}
                transition-colors`}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? '[ mengirim... ]' : '[ kirim pesan ]'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-mono mt-4 text-green-600"
              >
                [ Pesan berhasil dikirim ]
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-mono mt-4 text-red-600"
              >
                [ Gagal mengirim pesan ]
              </motion.p>
            )}
          </motion.div>
        </motion.form>

        <motion.div 
          variants={itemVariants}
          className="mt-12 border border-black p-6"
        >
          <h2 className="text-sm uppercase tracking-tight font-mono mb-4">[  Informasi Kontak  ]</h2>
          <div className="text-xs font-mono space-y-2">
            <p>• Email: hello@untobelagak.com</p>
            <p>• Instagram: @untobelagak</p>
            <p>• Lokasi: Yogyakarta, Indonesia</p>
            <p>• Jam Kerja: Senin - Jumat, 09:00 - 17:00 WIB</p>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
} 