'use client';

import { motion } from 'framer-motion';

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

export default function About() {
  return (
    <main className="min-h-screen py-12">
      <motion.section 
        className="max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <h1 className="text-sm uppercase tracking-tight font-mono">[  About Us  ]</h1>
          <p className="text-xs mt-2 font-mono">Tentang Kami</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <div className="border border-black p-6">
              <h2 className="text-sm uppercase tracking-tight font-mono mb-4">[  Visi  ]</h2>
              <p className="text-xs font-mono leading-relaxed">
                Menjadi platform kreatif yang menginspirasi dan memfasilitasi kolaborasi antara seniman dan kreator digital, 
                menciptakan karya-karya yang memadukan unsur tradisional dan modern dalam dunia desain.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="border border-black p-6">
              <h2 className="text-sm uppercase tracking-tight font-mono mb-4">[  Misi  ]</h2>
              <p className="text-xs font-mono leading-relaxed">
                • Mengembangkan platform kolaboratif yang inovatif<br />
                • Mendorong kreativitas dan eksperimen dalam desain<br />
                • Membangun komunitas kreatif yang inklusif<br />
                • Melestarikan dan mengembangkan unsur budaya dalam karya digital
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="border border-black p-6">
              <h2 className="text-sm uppercase tracking-tight font-mono mb-4">[  Tim Kami  ]</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs uppercase tracking-tight font-mono mb-2">[  Desainer  ]</h3>
                  <ul className="text-xs font-mono space-y-1">
                    <li>• UI/UX Designer</li>
                    <li>• Graphic Designer</li>
                    <li>• Motion Designer</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-tight font-mono mb-2">[  Developer  ]</h3>
                  <ul className="text-xs font-mono space-y-1">
                    <li>• Frontend Developer</li>
                    <li>• Backend Developer</li>
                    <li>• Full Stack Developer</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="border border-black p-6">
              <h2 className="text-sm uppercase tracking-tight font-mono mb-4">[  Kontak  ]</h2>
              <div className="text-xs font-mono space-y-2">
                <p>• Email: hello@untobelagak.com</p>
                <p>• Instagram: @untobelagak</p>
                <p>• Lokasi: Yogyakarta, Indonesia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
} 