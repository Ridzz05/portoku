import { users } from '@/app/data/users';
import ProfileSection from './ProfileSection';
import {
  AnimatedSection,
  AnimatedText,
  AnimatedSkill,
} from './AnimatedElements';
import ClientWrapper from '../contact/ClientWrapper';

export default function About() {
  const mainUser = users[0];
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git'];
  const skillColors = ['bg-neo-yellow', 'bg-neo-coral', 'bg-neo-mint', 'bg-neo-sky', 'bg-neo-pink', 'bg-neo-lavender', 'bg-neo-lime', 'bg-neo-orange'];

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <ClientWrapper>
          <AnimatedSection className="mb-12">
            <div className="text-center mb-12">
              <h1 className="neo-heading text-4xl md:text-5xl mb-4">About Me</h1>
              <div className="neo-card bg-neo-sky inline-block px-6 py-2">
                <p className="font-grotesk text-sm font-medium">Kenali saya lebih dekat</p>
              </div>
            </div>
            <ProfileSection user={mainUser} />
          </AnimatedSection>

          <AnimatedText className="mt-16" delay={0.6}>
            <div className="text-center">
              <h3 className="neo-heading text-2xl mb-6">Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <AnimatedSkill key={index}>
                    <span className={`inline-block w-2 h-2 rounded-full ${skillColors[index % skillColors.length]} mr-2 border border-neo-black`} />
                    {skill}
                  </AnimatedSkill>
                ))}
              </div>
            </div>
          </AnimatedText>
        </ClientWrapper>
      </div>
    </main>
  );
}