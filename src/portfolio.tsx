import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, MapPin, Phone, Download, Calendar, Database, Code, BarChart3, Cpu, Terminal, Zap } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Prédiction du Churn Client",
      image: "/data.png",
      description: "Modèle ML de prédiction du taux de désabonnement avec 95% de précision",
      technologies: ["Python", "Scikit-learn", "Pandas", "Régression Logistique", "Pipeline ML"],
      challenges: "Analyser 2000 clients et identifier les facteurs clés de churn avec encodage des variables catégorielles",
      solutions: "Pipeline ML avec OneHotEncoder et régression logistique. Accuracy 95.25%, Recall 97% pour détecter les churners. Analyse des coefficients révélant l'inactivité et les contrats mensuels comme facteurs majeurs",
      githubUrl: "https://github.com/Rayanemksm1/churn_pred",
      type: "Data",
      icon: Database
    },
    {
      title: "ABS - E-commerce Matériaux",
      image: "/ABS.png",
      description: "Application web de gestion et vente de matériaux de construction",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Apache"],
      challenges: "Développement d'une architecture MVC avec gestion de panier, recherche de produits et interface responsive",
      solutions: "Structure MVC simplifiée avec base MySQL, système de panier fonctionnel et interface utilisateur responsive avec FontAwesome",
      githubUrl: "https://github.com/Rayanemksm1/abs",
      type: "Full Stack",
      icon: Code
    },
    {
      title: "Jeu du Loup Garou en ligne",
      image: "/loup.jpg",
      description: "Jeu multijoueur avec IA et chat en temps réel",
      technologies: ["HTML/CSS", "JavaScript", "Python", "IA"],
      challenges: "Implémentation d'un système de chat temps réel et intégration d'une IA pour gérer la partie",
      solutions: "Architecture full-stack avec WebSockets pour la communication temps réel et algorithmes d'IA pour l'assistance au jeu",
      githubUrl: "https://github.com/Rayanemksm1/loupgarou",
      type: "Full Stack",
      icon: Terminal
    },
    {
      title: "Wall is You",
      image: "/wall.jpg",
      description: "Jeu de résolution de labyrinthe avec mécaniques de puzzle",
      technologies: ["Python", "Pygame", "Algorithmes"],
      challenges: "Création d'un système de règles dynamiques et résolution de puzzles complexes",
      solutions: "Implémentation d'algorithmes de pathfinding et système de règles modulaire",
      githubUrl: "https://github.com/Rayanemksm1/wall_is_you",
      type: "Python",
      icon: Cpu
    },
    {
      title: "Jeu du Moulin",
      image: "/moulin.png",
      description: "Jeu du moulin en différentes versions avec IA",
      technologies: ["Python", "Tkinter", "Minimax"],
      challenges: "Développement d'une IA compétitive utilisant l'algorithme Minimax",
      solutions: "Implémentation de l'algorithme Minimax avec élagage alpha-beta pour optimiser les performances",
      githubUrl: "https://github.com/Rayanemksm1/Jeu_du-Moulin",
      type: "Python",
      icon: Cpu
    },
    {
      title: "Portfolio SI S5",
      image: "/si.png",
      description: "Portfolio de présentation développé en HTML/CSS",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      challenges: "Création d'un design moderne et responsive",
      solutions: "Utilisation de Flexbox et Grid CSS avec animations fluides",
      githubUrl: "https://rayanemksm1.github.io/Monportfolio/",
      type: "Web",
      icon: Code
    }
  ];

  const skills = {
    "Langages": ["Python", "Java", "JavaScript", "R", "SQL", "C", "HTML", "CSS", "PHP"],
    "Frameworks": ["React", "Node.js", "Django", "Flask", "Tailwind", "Pandas", "NumPy"],
    "Data & BI": ["Power BI", "Tableau", "SAS", "PostgreSQL", "MySQL", "Analyse"],
    "DevOps": ["Git/GitHub", "Linux", "Unix", "Bash", "REST API"],
    "Méthodologies": ["Agile", "POO", "Tests unitaires", "CI/CD"],
    "Soft Skills": ["Équipe", "Service client", "Priorités", "Autonomie", "Rigueur"]
  };

  const experiences = [
    {
      poste: "Licence MIAGE - Mathématiques & Informatique",
      entreprise: "Université Paris Nanterre",
      periode: "Sept 2024 - Aujourd'hui",
      description: "Formation axée sur le développement logiciel, la data et la gestion des systèmes d'information, à l'interface entre technologie et business.",
      type: "Formation"
    },
    {
      poste: "Licence 1 Mathématiques & Informatique",
      entreprise: "Université Gustave Eiffel",
      periode: "Sept 2023 - Juin 2024",
      description: "Algorithmie, programmation (C/Python), mathématiques, économie et management.",
      type: "Formation"
    },
    {
      poste: "Commis de salle / Barman",
      entreprise: "Hotel Barrière Fouquet's",
      periode: "Fév 2023 - Mai 2025",
      description: "Développement du sens du service client et de la gestion des priorités. Travail en équipe dans un environnement exigeant et dynamique.",
      type: "Professionnel"
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 relative overflow-hidden">
      {/* Animated Background */}
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

      {/* Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Terminal className="text-cyan-400" size={24} />
              <h1 className="text-xl font-bold">
                <span className="text-cyan-400">{'<'}</span>
                <span className="text-white">Rayane MEKSEM</span>
                <span className="text-cyan-400">{' />'}</span>
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {['Accueil', 'Projets', 'Compétences', 'Parcours', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm relative group"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-cyan-500/10 scale-0 group-hover:scale-100 transition-transform rounded" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-cyan-400"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['Accueil', 'Projets', 'Compétences', 'Parcours', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 px-4 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
              <img
                src="/myphoto.png"
                alt="Rayane MEKSEM"
                className="relative w-40 h-40 rounded-full mx-auto object-cover border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-cyan-400 font-mono">
                <Terminal size={20} />
                <span className="animate-pulse">_</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Rayane MEKSEM
                </span>
              </h2>
              
              <div className="flex items-center justify-center gap-2 text-xl text-gray-400 font-mono">
                <Code size={20} className="text-cyan-400" />
                <span>Développeur</span>
                <span className="text-cyan-400">|</span>
                <Database size={20} className="text-purple-400" />
                <span>Data / BI</span>
              </div>

              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Étudiant MIAGE à Paris Nanterre, je recherche un{' '}
                <span className="text-cyan-400 font-semibold">stage (2-5 mois)</span> dès{' '}
                <span className="text-purple-400 font-semibold">avril 2026</span> en développement logiciel, 
                data et business intelligence. Curieux, rigoureux et motivé, je souhaite contribuer à des projets innovants tout en consolidant mes acquis techniques et organisationnels.
              </p>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <Zap size={20} />
                Me Contacter
              </button>
              <button
                onClick={() => scrollToSection('projets')}
                className="px-8 py-3 bg-slate-800/50 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-slate-800 hover:border-cyan-500 transition-all flex items-center gap-2"
              >
                <Code size={20} />
                Voir Projets
              </button>
              <a
                href="/CV-S-G.pdf"
                download
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <Download size={20} />
                Télécharger CV
              </a>
            </div>

            <div className="flex justify-center gap-6 pt-4">
              {[
                { icon: Github, url: "https://github.com/Rayanemksm1", color: "hover:text-white" },
                { icon: Linkedin, url: "https://www.linkedin.com/in/rayane-meksem-66b591294", color: "hover:text-blue-400" },
                { icon: Mail, url: "mailto:rayanemksm5@gmail.com", color: "hover:text-cyan-400" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 bg-slate-800/50 rounded-lg border border-cyan-500/20 ${social.color} transition-all hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 text-cyan-400 font-mono">
              <BarChart3 size={24} />
              <span>{'<projects>'}</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Mes Réalisations</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Projets académiques et personnels en développement, data science et IA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-900/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500 transition-all hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                    <div className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-lg border border-cyan-500/30">
                      <IconComponent className="text-cyan-400" size={20} />
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-mono">
                        {project.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-slate-800/50 border border-purple-500/20 text-purple-300 rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 text-cyan-400 font-mono">
              <Cpu size={24} />
              <span>{'<skills>'}</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Stack Technique</h2>
            <p className="text-gray-400">Technologies et compétences maîtrisées</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-4 font-mono">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-800/50 border border-purple-500/20 text-gray-300 rounded-lg text-sm hover:border-purple-500 hover:text-purple-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-950/30 to-purple-950/30 border border-cyan-500/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400 font-mono">Languages</h3>
            <div className="flex justify-center gap-12">
              <div>
                <p className="text-xl font-semibold text-white mb-1">Français</p>
                <p className="text-gray-400 text-sm">Langue Maternelle</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-white mb-1">Anglais</p>
                <p className="text-gray-400 text-sm">Avancé (B2-C1)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="parcours" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 text-cyan-400 font-mono">
              <Calendar size={24} />
              <span>{'<experience>'}</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Mon Parcours</h2>
            <p className="text-gray-400">Formation et expérience professionnelle</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm rounded-xl border-l-4 p-6 hover:shadow-lg transition-all ${
                  exp.type === "Formation"
                    ? "border-l-purple-500 hover:shadow-purple-500/10"
                    : "border-l-cyan-500 hover:shadow-cyan-500/10"
                }`}
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.poste}</h3>
                    <p className={`font-semibold ${
                      exp.type === "Formation" ? "text-purple-400" : "text-cyan-400"
                    }`}>
                      {exp.entreprise}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-4 py-1 rounded-full text-xs font-mono ${
                      exp.type === "Formation"
                        ? "bg-purple-500/10 border border-purple-500/30 text-purple-300"
                        : "bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                    }`}>
                      {exp.type}
                    </span>
                    <span className="text-gray-400 text-sm font-mono">{exp.periode}</span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 text-cyan-400 font-mono">
              <Mail size={24} />
              <span>{'<contact>'}</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Restons Connectés</h2>
            <p className="text-gray-400">Une opportunité de stage ou un projet ? Contactez-moi !</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Mail, label: "Email", value: "rayanemksm5@gmail.com", link: "mailto:rayanemksm5@gmail.com" },
              { icon: Phone, label: "Téléphone", value: "06 02 48 49 35", link: "tel:0602484935" },
              { icon: Linkedin, label: "LinkedIn", value: "rayane-meksem", link: "https://www.linkedin.com/in/rayane-meksem-66b591294" },
              { icon: Github, label: "GitHub", value: "Rayanemksm1", link: "https://github.com/Rayanemksm1" }
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group"
              >
                <contact.icon className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                <p className="text-white font-semibold mb-1">{contact.label}</p>
                <p className="text-gray-400 text-sm break-all">{contact.value}</p>
              </a>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-950/30 to-purple-950/30 border border-cyan-500/30 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-cyan-400">
              <MapPin size={20} />
              <p className="text-lg font-semibold">Nanterre, Île-de-France</p>
            </div>
            <p className="text-purple-400 text-xl font-bold">
              ✨ Disponible pour un stage (2-5 mois) dès avril 2026
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-cyan-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2 text-cyan-400 font-mono">
            <Terminal size={16} />
            <span>{'</portfolio>'}</span>
          </div>
          <p className="text-gray-400">© 2025 Rayane MEKSEM. Tous droits réservés.</p>
          <p className="text-gray-500 text-sm mt-1 font-mono">Étudiant MIAGE | Dev & Data Analyst</p>
        </div>
      </footer>
    </div>
  );
}
