import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, MapPin, Phone, Download, Calendar } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const projects = [
    {
      title: "Prédiction du Churn Client",
      image: "/data.png",
      description: "Modèle ML de prédiction du taux de désabonnement avec 95% de précision",
      technologies: ["Python", "Scikit-learn", "Pandas", "Régression Logistique", "Pipeline ML"],
      challenges: "Analyser 2000 clients et identifier les facteurs clés de churn avec encodage des variables catégorielles",
      solutions: "Pipeline ML avec OneHotEncoder et régression logistique. Accuracy 95.25%, Recall 97% pour détecter les churners. Analyse des coefficients révélant l'inactivité et les contrats mensuels comme facteurs majeurs",
      githubUrl: "https://github.com/Rayanemksm1/churn_pred",
      type: "Data"
    },
    {
      title: "ABS - E-commerce Matériaux",
      image: "/ABS.png",
      description: "Application web de gestion et vente de matériaux de construction",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Apache"],
      challenges: "Développement d'une architecture MVC avec gestion de panier, recherche de produits et interface responsive",
      solutions: "Structure MVC simplifiée avec base MySQL, système de panier fonctionnel et interface utilisateur responsive avec FontAwesome",
      githubUrl: "https://github.com/Rayanemksm1/abs",
      type: "Full Stack"
    },
    {
      title: "Jeu du Loup Garou en ligne",
      image: "/loup.jpg",
      description: "Jeu multijoueur avec IA et chat en temps réel",
      technologies: ["HTML/CSS", "JavaScript", "Python", "IA"],
      challenges: "Implémentation d'un système de chat temps réel et intégration d'une IA pour gérer la partie",
      solutions: "Architecture full-stack avec WebSockets pour la communication temps réel et algorithmes d'IA pour l'assistance au jeu",
      githubUrl: "https://github.com/Rayanemksm1",
      type: "Full Stack"
    },
    {
      title: "Wall is You",
      image: "/wall.jpg",
      description: "Jeu de résolution de labyrinthe avec mécaniques de puzzle",
      technologies: ["Python", "Pygame", "Algorithmes"],
      challenges: "Création d'un système de règles dynamiques et résolution de puzzles complexes",
      solutions: "Implémentation d'algorithmes de pathfinding et système de règles modulaire",
      githubUrl: "https://github.com/Rayanemksm1/wall_is_you",
      type: "Python"
    },
    {
      title: "Jeu du Moulin",
      image: "/moulin.png",
      description: "Jeu du moulin en différentes versions avec IA",
      technologies: ["Python", "Tkinter", "Minimax"],
      challenges: "Développement d'une IA compétitive utilisant l'algorithme Minimax",
      solutions: "Implémentation de l'algorithme Minimax avec élagage alpha-beta pour optimiser les performances",
      githubUrl: "https://github.com/Rayanemksm1/Jeu_du-Moulin",
      type: "Python"
    },
    {
      title: "Portfolio SI S5",
      image: "/si.png",
      description: "Portfolio de présentation développé en HTML/CSS",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      challenges: "Création d'un design moderne et responsive",
      solutions: "Utilisation de Flexbox et Grid CSS avec animations fluides",
      githubUrl: "https://rayanemksm1.github.io/Monportfolio/",
      type: "Web"
    }
  ];

  const skills = {
    "Langages de Programmation": ["Python", "Java", "JavaScript", "R", "SQL", "C", "HTML", "CSS", "PHP"],
    "Frameworks & Bibliothèques": ["React", "Node.js", "Django", "Flask", "Tailwind CSS", "Pandas", "NumPy"],
    "Data & BI": ["Power BI", "Tableau", "SAS", "PostgreSQL", "MySQL", "Analyse de données"],
    "Outils & Systèmes": ["Git/GitHub", "Linux", "Unix", "Bash", "REST API"],
    "Méthodologies": ["Agile (Scrum)", "POO", "Tests unitaires", "CI/CD"],
    "Soft Skills": ["Travail d'équipe", "Service client", "Gestion des priorités", "Autonomie", "Rigueur"]
  };

  const experiences = [
    
    {
      poste: "Licence MIAGE - Mathématiques & Informatique",
      entreprise: "Université Paris Nanterre",
      periode: "Septembre 2024 - Aujourd'hui",
      description: "Formation axée sur le développement logiciel, la data et la gestion des systèmes d'information, à l'interface entre technologie et business.",
      type: "Formation"
    },
    {
      poste: "Licence 1 Mathématiques & Informatique",
      entreprise: "Université Gustave Eiffel",
      periode: "Septembre 2023 - Juin 2024",
      description: "Algorithmie, programmation (C/Python), mathématiques, économie et management.",
      type: "Formation"
    },
    {
      poste: "Commis de salle / Barman",
      entreprise: "Hotel Barrière Fouquet's",
      periode: "Février 2023 - Mai 2025",
      description: "Développement du sens du service client et de la gestion des priorités. Travail en équipe dans un environnement exigeant et dynamique.",
      type: "Professionnel"
    },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rayane MEKSEM
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Accueil', 'À propos', 'Projets', 'Compétences', 'Expériences', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('à propos', 'apropos'))}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4">
              {['Accueil', 'À propos', 'Projets', 'Compétences', 'Expériences', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('à propos', 'apropos'))}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
          <img
            src="/myphoto.png"
            alt="maphoto"
            className="w-32 h-32 rounded-full mx-auto object-cover shadow-2xl"
          />

          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Rayane MEKSEM
          </h2>
          <p className="text-2xl text-gray-600 mb-6">
            Étudiant MIAGE - Développeur & Consultant Data / BI
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Étudiant en Licence MIAGE à l'Université Paris Nanterre, je recherche un stage (2 à 5 mois) 
            à partir d'avril 2026 pour développer mes compétences en développement logiciel, data et 
            business intelligence. Curieux, rigoureux et motivé, je souhaite contribuer à des projets innovants.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Me Contacter
            </button>
            <button
              onClick={() => scrollToSection('projets')}
              className="bg-white text-gray-700 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all border border-gray-300"
            >
              Voir mes projets
            </button>
            <a
                      href="/CV-S-G.pdf"
                      download
                      className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
                    >
                      <Download size={20} />
                      Télécharger CV
                    </a>


          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/Rayanemksm1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/rayane-meksem" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:rayanemksm5@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

     {/* About Section */}
      <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            À Propos de Moi
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Découvrez mon parcours, mes passions et ce qui me motive
          </p>
      
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            
            {/* Introduction */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Étudiant en troisième année de MIASHS, parcours MIAGE, je me forme à 
              l'intersection de l'informatique, des mathématiques et de la gestion. 
              Passionné de développement web et de data, j'ai mené plusieurs projets 
              concrets qui ont renforcé mes compétences en programmation, en 
              conception d'interfaces et en travail d’équipe.
            </p>
      
            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Localisation */}
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600" size={26} />
                <div>
                  <p className="font-semibold text-gray-900">Localisation</p>
                  <p className="text-gray-600">Nanterre, Île-de-France</p>
                </div>
              </div>
      
              {/* Disponibilité */}
              <div className="flex items-center gap-4">
                <Calendar className="text-blue-600" size={26} />
                <div>
                  <p className="font-semibold text-gray-900">Disponibilité</p>
                  <p className="text-gray-600">Stage dès avril 2026 (2-5 mois)</p>
                </div>
              </div>
      
              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" size={26} />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600 break-all">rayanemksm5@gmail.com</p>
                </div>
              </div>
      
              {/* Téléphone */}
              <div className="flex items-center gap-4">
                <Phone className="text-blue-600" size={26} />
                <div>
                  <p className="font-semibold text-gray-900">Téléphone</p>
                  <p className="text-gray-600">06 02 48 49 35</p>
                </div>
              </div>
      
            </div>
      
            {/* Interests */}
            <div className="mt-10 pt-6 border-t border-gray-300">
              <p className="font-semibold text-gray-900 mb-4">Centres d'intérêt</p>
              <div className="flex flex-wrap gap-3">
                {["Programmation", "Randonnée", "Voyage", "Escape game"].map((interest, i) => (
                  <span
                    key={i}
                    className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
      
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projets" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Mes Projets
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets académiques qui illustrent mes compétences 
            en développement et ma capacité à résoudre des problèmes complexes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Technologies :</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t pt-4 mb-4">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Défis :</strong> {project.challenges}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Solutions :</strong> {project.solutions}
                    </p>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    <Github size={20} />
                    Voir sur GitHub
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Mes Compétences
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un aperçu des technologies et compétences que j'ai acquises au cours 
            de ma formation MIAGE et de mes projets personnels.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-blue-100"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-white text-gray-700 px-3 py-2 rounded-lg text-sm font-medium shadow-sm border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-6">Langues</h3>
            
              <div className="flex justify-center items-start gap-16 flex-wrap">
                
                <div className="flex flex-col items-center">
                  <p className="text-xl font-semibold mb-1">Français</p>
                  <p className="text-blue-100 text-sm">Langue Maternelle / Bilingue</p>
                </div>
            
                <div className="flex flex-col items-center">
                  <p className="text-xl font-semibold mb-1">Anglais</p>
                  <p className="text-blue-100 text-sm">Avancé</p>
                </div>
            
              </div>
            </div>

        </div>
      </section>

     {/* Experience Section */}
<section
  id="Expériences"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
      Mon Parcours
    </h2>
    <p className="text-center text-gray-600 mb-12">
      Mon expérience professionnelle et ma formation académique
    </p>

    <div className="space-y-10">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`bg-white p-6 rounded-xl shadow-md border-l-4 transition-all hover:shadow-xl ${
            exp.type === "Formation"
              ? "border-purple-600"
              : "border-blue-600"
          }`}
        >
          {/* Header Section */}
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {exp.poste}
              </h3>
              <p
                className={`font-semibold ${
                  exp.type === "Formation"
                    ? "text-purple-600"
                    : "text-blue-600"
                }`}
              >
                {exp.entreprise}
              </p>
            </div>

            <span
              className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                exp.type === "Formation"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {exp.type}
            </span>
          </div>

          {/* Date */}
          <p className="text-gray-600 text-sm mt-4 mb-3 flex items-center gap-2">
            <Calendar size={16} />
            {exp.periode}
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Me Contacter
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Vous avez une opportunité de stage ou un projet ? N'hésitez pas à me contacter !
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
              <Mail className="mx-auto mb-4 text-white" size={32} />
              <p className="text-white font-semibold mb-2">Email</p>
              <a href="mailto:rayanemksm5@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                rayanemksm5@gmail.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
              <Phone className="mx-auto mb-4 text-white" size={32} />
              <p className="text-white font-semibold mb-2">Téléphone</p>
              <a href="tel:0602484935" className="text-blue-100 hover:text-white transition-colors">
                06 02 48 49 35
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
              <Linkedin className="mx-auto mb-4 text-white" size={32} />
              <p className="text-white font-semibold mb-2">LinkedIn</p>
              <a href="https://www.linkedin.com/in/rayane-meksem" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                linkedin.com/in/rayane-meksem
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
              <Github className="mx-auto mb-4 text-white" size={32} />
              <p className="text-white font-semibold mb-2">GitHub</p>
              <a href="https://github.com/Rayanemksm1" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                github.com/Rayanemksm1
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl inline-block">
            <p className="text-blue-100 text-lg mb-2">
              📍 Basé à Nanterre, Île-de-France
            </p>
            <p className="text-white text-xl font-bold">
              ✨ Disponible pour un stage de 2 à 5 mois dès avril 2026
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2025 Rayane MEKSEM. Tous droits réservés.</p>
          <p className="text-gray-400 text-sm">Étudiant MIAGE | Développeur & Consultant Data / BI</p>
        </div>
      </footer>
    </div>
  );
}


