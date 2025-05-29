import { projects } from '@/app/data/portofolio';
import PortfolioItem from './PortfolioItem';
import {
  AnimatedSection,
  AnimatedText,
  AnimatedLink,
  AnimatedBackground
} from './AnimatedElements';
import ClientWrapper from '../contact/ClientWrapper';

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-5xl mx-auto px-4">
          <ClientWrapper>
            <AnimatedSection className="mb-8">
              <h1 className="text-4xl font-mono uppercase tracking-tight pt-16 mt-6 mb-8">Portofolio</h1>
              
              <AnimatedText className="mb-8">
                <p className="font-mono text-sm leading-relaxed max-w-2xl mx-auto">
                  [ Berikut adalah beberapa proyek yang telah saya kerjakan. Setiap proyek mencerminkan 
                  pendekatan saya dalam menyelesaikan masalah dan menciptakan solusi yang kreatif. ]
                </p>
              </AnimatedText>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {projects.map((project, index) => (
                  <PortfolioItem key={project.id} project={project} index={index} />
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedText className="mt-16" delay={0.8}>
              <h3 className="font-mono text-xl uppercase tracking-tight mb-4">Ingin Berkolaborasi?</h3>
              <p className="font-mono text-sm leading-relaxed max-w-2xl mx-auto mb-6">
                [ Jika Anda tertarik untuk berkolaborasi atau memiliki pertanyaan tentang proyek saya, 
                jangan ragu untuk menghubungi saya. ]
              </p>
              <AnimatedLink href="/contact">
                [ Hubungi Saya ]
              </AnimatedLink>
            </AnimatedText>

            <AnimatedBackground />
          </ClientWrapper>
        </div>
      </div>
    </main>
  );
}