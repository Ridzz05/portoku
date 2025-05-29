import { users } from '@/app/data/users';
import ContactForm from './ContactForm';
import {
  AnimatedContact,
  AnimatedText,
  AnimatedSocialLinks,
  AnimatedLink,
  AnimatedBackground
} from './AnimatedElements';
import ClientWrapper from './ClientWrapper';

export default function Contact() {
  const mainUser = users[0];

  return (
    <main className="min-h-screen">
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <ClientWrapper>
            <AnimatedContact className="mb-8">
              <h1 className="text-4xl font-mono uppercase tracking-tight pt-16 mt-6 mb-8">Contact Me</h1>
              
              <div className="max-w-lg mx-auto">
                <AnimatedText className="mb-8">
                  <p className="font-mono text-sm leading-relaxed">
                    [ Tertarik untuk bekerja sama atau ingin mengetahui lebih lanjut tentang proyek saya? 
                    Silakan hubungi saya melalui form di bawah ini atau melalui media sosial. ]
                  </p>
                </AnimatedText>
                
                <ContactForm />
              </div>
            </AnimatedContact>
            
            <AnimatedSocialLinks className="mt-12">
              <h3 className="font-mono text-xl uppercase tracking-tight mb-4">Temukan Saya Di</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <AnimatedLink 
                  href={`https://instagram.com/${mainUser.instagram}`}
                  className="font-mono text-sm border border-black px-4 py-2"
                />
                <AnimatedLink 
                  href="https://github.com"
                  className="font-mono text-sm border border-black px-4 py-2"
                />
                <AnimatedLink 
                  href="https://linkedin.com"
                  className="font-mono text-sm border border-black px-4 py-2"
                />
              </div>
            </AnimatedSocialLinks>

            <AnimatedBackground />
          </ClientWrapper>
        </div>
      </div>
    </main>
  );
}