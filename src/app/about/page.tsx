import { users } from '@/app/data/users';
import ProfileSection from './ProfileSection';
import {
  AnimatedSection,
  AnimatedText,
  AnimatedSkill,
  AnimatedBackground
} from './AnimatedElements';
import ClientWrapper from '../contact/ClientWrapper';

export default function About() {
  const mainUser = users[0];
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git'];
  
  return (
    <main className="min-h-screen">
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <ClientWrapper>
            <AnimatedSection className="mb-8">
              <h1 className="text-4xl font-mono uppercase tracking-tight pt-7 mt-6 mb-8">About Me</h1>  
              <ProfileSection user={mainUser} />
            </AnimatedSection>
            
            <AnimatedText className="mt-12" delay={0.6}>
              <h3 className="font-mono text-xl uppercase tracking-tight mb-4">Skills</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, index) => (
                  <AnimatedSkill key={index}>
                    [ {skill} ]
                  </AnimatedSkill>
                ))}
              </div>
            </AnimatedText>

            <AnimatedBackground />
          </ClientWrapper>
        </div>
      </div>
    </main>
  );
}