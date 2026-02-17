import Hero from './components/Hero/Hero'
import { projects } from '@/app/data/portofolio'
import PortfolioItem from './portofolio/PortfolioItem'
import ClientWrapper from './contact/ClientWrapper'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Featured Projects Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <ClientWrapper>
          <div className="text-center mb-12">
            <h2 className="neo-heading text-3xl md:text-4xl mb-4">Featured Projects</h2>
            <div className="neo-card bg-neo-mint inline-block px-6 py-3">
              <p className="font-grotesk text-sm font-medium">
                Beberapa proyek terbaik yang telah saya kerjakan
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <PortfolioItem key={project.id} project={project} index={index} />
            ))}
          </div>
        </ClientWrapper>
      </section>
    </main>
  );
}
