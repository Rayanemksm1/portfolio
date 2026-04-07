import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, MapPin, Phone, Calendar, Database, Code, BarChart3, Cpu, Terminal, Zap } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    let animationFrame;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);


  const navItems = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'Projets', id: 'projets' },
    { label: 'Compétences', id: 'competences' },
    { label: 'Parcours', id: 'parcours' },
    { label: 'Contact', id: 'contact' }
  ];

  const projects = [
    {
      title: "Prédiction du Churn Client",
      image: "/data.jpg",
      description: "Modèle ML de prédiction du taux de désabonnement avec 95% de précision",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      githubUrl: "https://github.com/Rayanemksm1/churn_pred",
      type: "Data",
      icon: Database
    },
    {
      title: "Hospital Management",
      image: "/background.jpg",
      description: "Application web de gestion de rendez-vous médicaux",
      technologies: ["Django", "SQLite", "HTML/CSS/JS", "Bootstrap"],
      githubUrl: "https://rayanemksm.pythonanywhere.com",
      type: "Full Stack",
      icon: Code
    }
  ];

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 relative overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-purple-950/20" />
        <div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          
          <h1 className="text-xl font-bold text-cyan-400 font-mono">
            &lt;Rayane /&gt;
          </h1>

          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-gray-300 hover:text-cyan-400"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="accueil" className="pt-32 text-center">
        <h2 className="text-5xl font-bold text-cyan-400">Rayane MEKSEM</h2>
        <p className="text-gray-400 mt-4">Développeur | Data</p>

        <div className="flex justify-center gap-4 mt-6">
          <button onClick={() => scrollToSection('contact')} className="bg-cyan-500 px-6 py-2 rounded">
            Me contacter
          </button>
          <button onClick={() => scrollToSection('projets')} className="border px-6 py-2 rounded">
            Voir projets
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projets" className="py-20 px-6">
        <h2 className="text-3xl text-center mb-10">Projets</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.title} className="border p-4 rounded-lg bg-slate-900">
                
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => e.target.src = '/fallback.jpg'}
                  className="w-full h-40 object-cover rounded"
                />

                <h3 className="text-xl mt-4">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>

                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 mt-3"
                >
                  <Github size={16} />
                  <span>
                    {project.githubUrl.includes('github') ? 'View Code' : 'Voir Projet'}
                  </span>
                  <ExternalLink size={14} />
                </a>

              </div>
            );
          })}
        </div>
      </section>

      {/* COMPETENCES */}
      <section id="competences" className="py-20 text-center">
        <h2 className="text-3xl mb-6">Compétences</h2>
        <p className="text-gray-400">Python, Java, React, SQL, Data, IA</p>
      </section>

      {/* PARCOURS */}
      <section id="parcours" className="py-20 text-center">
        <h2 className="text-3xl mb-6">Parcours</h2>
        <p className="text-gray-400">MIAGE - Université Paris Nanterre</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl mb-6">Contact</h2>
        
        <div className="flex justify-center gap-6">
          <a href="mailto:rayanemksm5@gmail.com"><Mail /></a>
          <a href="https://github.com/Rayanemksm1"><Github /></a>
          <a href="https://linkedin.com"><Linkedin /></a>
        </div>

        <p className="mt-4 text-gray-400">Nanterre, Île-de-France</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2025 Rayane MEKSEM
      </footer>

    </div>
  );
}
