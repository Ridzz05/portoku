import { projects } from '@/app/data/portofolio';
import PortfolioItem from './PortfolioItem';
import {
  AnimatedSection,
  AnimatedText,
  AnimatedLink,
} from './AnimatedElements';
import ClientWrapper from '../contact/ClientWrapper';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <ClientWrapper>
          <AnimatedSection className="mb-8">
            <div className="text-center mb-12">
              <h1 className="neo-heading text-4xl md:text-5xl mb-4">Portofolio</h1>
              <div className="neo-card bg-neo-lavender inline-block px-6 py-3">
                <p className="font-grotesk text-sm font-medium max-w-md">
                  Berikut adalah beberapa proyek yang telah saya kerjakan. Setiap proyek mencerminkan
                  pendekatan saya dalam menyelesaikan masalah dan menciptakan solusi yang kreatif.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <PortfolioItem key={project.id} project={project} index={index} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedText className="mt-16 text-center" delay={0.8}>
            <h3 className="neo-heading text-2xl mb-4">Ingin Berkolaborasi?</h3>
            <div className="neo-card bg-neo-mint/30 inline-block px-6 py-3 mb-6">
              <p className="font-grotesk text-sm font-medium max-w-md">
                Jika Anda tertarik untuk berkolaborasi atau memiliki pertanyaan tentang proyek saya,
                jangan ragu untuk menghubungi saya.
              </p>
            </div>
            <div className="mt-4">
              <AnimatedLink href="/contact">
                <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
                Hubungi Saya
              </AnimatedLink>
            </div>
          </AnimatedText>
        </ClientWrapper>
      </div>
    </main>
  );
}