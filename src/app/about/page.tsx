import { users } from '@/app/data/users';
import ProfileSection from './ProfileSection';
import {
  AnimatedSection,
  AnimatedText,
  AnimatedSkill,
} from './AnimatedElements';
import ClientWrapper from '../contact/ClientWrapper';

// Frontend
import Html5Original from '@devicon/react/html5/original';
import Css3Original from '@devicon/react/css3/original';
import JavascriptOriginal from '@devicon/react/javascript/original';
import TypescriptOriginal from '@devicon/react/typescript/original';
import ReactOriginal from '@devicon/react/react/original';
import NextjsOriginal from '@devicon/react/nextjs/original';
import SvelteOriginal from '@devicon/react/svelte/original';
import TailwindcssOriginal from '@devicon/react/tailwindcss/original';
import BootstrapOriginal from '@devicon/react/bootstrap/original';
import VuejsOriginal from '@devicon/react/vuejs/original';

// Backend & Languages
import PhpOriginal from '@devicon/react/php/original';
import LaravelOriginal from '@devicon/react/laravel/original';
import NodejsOriginal from '@devicon/react/nodejs/original';
import PythonOriginal from '@devicon/react/python/original';
import DartOriginal from '@devicon/react/dart/original';
import FlutterOriginal from '@devicon/react/flutter/original';

// Database
import PostgresqlOriginal from '@devicon/react/postgresql/original';
import MysqlOriginal from '@devicon/react/mysql/original';
import SqliteOriginal from '@devicon/react/sqlite/original';
import MongodbOriginal from '@devicon/react/mongodb/original';
import FirebaseOriginal from '@devicon/react/firebase/original';

// Tools
import GitOriginal from '@devicon/react/git/original';
import DockerOriginal from '@devicon/react/docker/original';
import FigmaOriginal from '@devicon/react/figma/original';
import LinuxOriginal from '@devicon/react/linux/original';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', Icon: Html5Original },
      { name: 'CSS', Icon: Css3Original },
      { name: 'JavaScript', Icon: JavascriptOriginal },
      { name: 'TypeScript', Icon: TypescriptOriginal },
      { name: 'React', Icon: ReactOriginal },
      { name: 'Next.js', Icon: NextjsOriginal },
      { name: 'Vue.js', Icon: VuejsOriginal },
      { name: 'Svelte', Icon: SvelteOriginal },
      { name: 'Tailwind', Icon: TailwindcssOriginal },
      { name: 'Bootstrap', Icon: BootstrapOriginal },
    ],
  },
  {
    title: 'Backend & Languages',
    skills: [
      { name: 'PHP', Icon: PhpOriginal },
      { name: 'Laravel', Icon: LaravelOriginal },
      { name: 'Node.js', Icon: NodejsOriginal },
      { name: 'Python', Icon: PythonOriginal },
      { name: 'Dart', Icon: DartOriginal },
      { name: 'Flutter', Icon: FlutterOriginal },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', Icon: PostgresqlOriginal },
      { name: 'MySQL', Icon: MysqlOriginal },
      { name: 'SQLite', Icon: SqliteOriginal },
      { name: 'MongoDB', Icon: MongodbOriginal },
      { name: 'Firebase', Icon: FirebaseOriginal },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', Icon: GitOriginal },
      { name: 'Docker', Icon: DockerOriginal },
      { name: 'Figma', Icon: FigmaOriginal },
      { name: 'Linux', Icon: LinuxOriginal },
    ],
  },
];

const groupColors = ['bg-neo-yellow', 'bg-neo-coral', 'bg-neo-mint', 'bg-neo-lavender'];

export default function About() {
  const mainUser = users[0];

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
              <h3 className="neo-heading text-2xl mb-10">Skills</h3>
              <div className="space-y-8">
                {skillGroups.map((group, gIdx) => (
                  <div key={group.title}>
                    <div className={`neo-border ${groupColors[gIdx]} inline-block px-4 py-1 mb-4 shadow-brutal-sm`}>
                      <span className="font-grotesk text-xs font-bold uppercase tracking-wider">{group.title}</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                      {group.skills.map((skill, index) => (
                        <AnimatedSkill key={index}>
                          <skill.Icon size={20} />
                          {skill.name}
                        </AnimatedSkill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedText>
        </ClientWrapper>
      </div>
    </main>
  );
}