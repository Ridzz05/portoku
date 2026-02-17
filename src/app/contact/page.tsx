import { users } from '@/app/data/users';
import ContactForm from './ContactForm';
import {
  AnimatedContact,
  AnimatedText,
  AnimatedSocialLinks,
  AnimatedLink,
  AnimatedBackground,
} from './AnimatedElements';
import ClientWrapper from './ClientWrapper';

export default function Contact() {
  const mainUser = users[0];

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <ClientWrapper>
          <AnimatedContact className="mb-8">
            <div className="text-center mb-12">
              <h1 className="neo-heading text-4xl md:text-5xl mb-4">Contact Me</h1>
              <div className="neo-card bg-neo-coral/20 inline-block px-6 py-3">
                <p className="font-grotesk text-sm font-medium max-w-md">
                  Tertarik untuk bekerja sama atau ingin mengetahui lebih lanjut tentang proyek saya?
                  Silakan hubungi saya melalui form di bawah ini.
                </p>
              </div>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="neo-card bg-white p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </AnimatedContact>

          <AnimatedSocialLinks className="mt-16 text-center">
            <h3 className="neo-heading text-2xl mb-6">Temukan Saya Di</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedLink href={`https://instagram.com/${mainUser.instagram}`} />
              <AnimatedLink href="https://github.com/Ridzz05" />
              <AnimatedLink href="https://linkedin.com" />
            </div>
          </AnimatedSocialLinks>

          <AnimatedBackground />
        </ClientWrapper>
      </div>
    </main>
  );
}