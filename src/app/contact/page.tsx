'use client';

import { motion } from 'framer-motion';
import { users } from '@/app/data/users';
import { useState } from 'react';

export default function Contact() {
  const mainUser = users[0];
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen">
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-mono uppercase tracking-tight mb-6">Contact Me</h1>
            
            <div className="max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-8"
              >
                <p className="font-mono text-sm leading-relaxed">
                  [ Tertarik untuk bekerja sama atau ingin mengetahui lebih lanjut tentang proyek saya? 
                  Silakan hubungi saya melalui form di bawah ini atau melalui media sosial. ]
                </p>
              </motion.div>
              
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
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12"
          >
            <h3 className="font-mono text-xl uppercase tracking-tight mb-4">Temukan Saya Di</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={`https://instagram.com/${mainUser.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm border border-black px-4 py-2"
                whileHover={{ scale: 1.05, backgroundColor: 'black', color: 'white' }}
                whileTap={{ scale: 0.95 }}
              >
                [ Instagram ]
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm border border-black px-4 py-2"
                whileHover={{ scale: 1.05, backgroundColor: 'black', color: 'white' }}
                whileTap={{ scale: 0.95 }}
              >
                [ GitHub ]
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm border border-black px-4 py-2"
                whileHover={{ scale: 1.05, backgroundColor: 'black', color: 'white' }}
                whileTap={{ scale: 0.95 }}
              >
                [ LinkedIn ]
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Background decoration - same as home page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTQtMi4yMSAwLTQgMS43OS00IDQgMCAyLjIxIDEuNzkgNCA0IDQgMi4yMSAwIDQtMS43OSA0LTR6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
        </motion.div>
      </div>
    </main>
  );
} 