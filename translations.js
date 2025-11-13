// Dictionnaire de traductions FR/EN
const translations = {
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-about': 'À propos',
        'nav-skills': 'Compétences',
        'nav-projects': 'Projets',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Yassine LAKHAL',
        'hero-subtitle': 'Ingénieur Systèmes Embarqués & Robotique',
        'hero-slogan': 'Construire les technologies de demain',
        'hero-btn-projects': 'Découvrir mes projets',
        'hero-btn-contact': 'Me contacter',
        
        // About Section
        'about-title': 'À propos de moi',
        'about-subtitle': 'Passionné par l\'innovation technologique',
        'about-description-1': 'Ingénieur passionné par les systèmes embarqués et la robotique, je me spécialise dans le développement de solutions technologiques innovantes. Mon expertise couvre l\'électronique, la programmation embarquée, l\'intelligence artificielle et le traitement du signal.',
        'about-description-2': 'Diplômé en ingénierie des systèmes embarqués, je combine une solide formation théorique avec une passion pour l\'innovation pratique. Mon objectif est de contribuer au développement de technologies qui façonnent l\'avenir.',
        'stat-1-label': 'Années d\'expérience',
        'stat-2-label': 'Projets réalisés',
        'stat-3-label': 'Technologies maîtrisées',
        
        // Skills Section
        'skills-title': 'Compétences Techniques',
        'skills-subtitle': 'Technologies et outils que je maîtrise',
        'category-programming': 'Programmation',
        'category-hardware': 'Matériel',
        'category-specialties': 'Spécialités',
        
        // Projects Section
        'projects-title': 'Mes Projets',
        'projects-subtitle': 'Réalisations techniques et innovations',
        'btn-view-more': 'Voir plus',
        
        // Contact Section
        'contact-title': 'Contactez-moi',
        'contact-subtitle': 'Prêt à collaborer sur votre prochain projet ?',
        'contact-email': 'Email',
        'contact-phone': 'Téléphone',
        'contact-location': 'Localisation',
        'form-name': 'Votre nom',
        'form-email': 'Votre email',
        'form-subject': 'Sujet',
        'form-message': 'Votre message',
        'form-submit': 'Envoyer le message',
        'cv-download': 'Télécharger mon CV',
        
        // Footer
        'footer-rights': 'Tous droits réservés.'
    },
    
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Yassine LAKHAL',
        'hero-subtitle': 'Embedded Systems & Robotics Engineer',
        'hero-slogan': 'Building the technologies of tomorrow',
        'hero-btn-projects': 'Discover my projects',
        'hero-btn-contact': 'Contact me',
        
        // About Section
        'about-title': 'About Me',
        'about-subtitle': 'Passionate about technological innovation',
        'about-description-1': 'Engineer passionate about embedded systems and robotics, I specialize in developing innovative technological solutions. My expertise covers electronics, embedded programming, artificial intelligence, and signal processing.',
        'about-description-2': 'Graduated in embedded systems engineering, I combine solid theoretical training with a passion for practical innovation. My goal is to contribute to the development of technologies that shape the future.',
        'stat-1-label': 'Years of experience',
        'stat-2-label': 'Completed projects',
        'stat-3-label': 'Mastered technologies',
        
        // Skills Section
        'skills-title': 'Technical Skills',
        'skills-subtitle': 'Technologies and tools I master',
        'category-programming': 'Programming',
        'category-hardware': 'Hardware',
        'category-specialties': 'Specialties',
        
        // Projects Section
        'projects-title': 'My Projects',
        'projects-subtitle': 'Technical achievements and innovations',
        'btn-view-more': 'View more',
        
        // Contact Section
        'contact-title': 'Contact Me',
        'contact-subtitle': 'Ready to collaborate on your next project?',
        'contact-email': 'Email',
        'contact-phone': 'Phone',
        'contact-location': 'Location',
        'form-name': 'Your name',
        'form-email': 'Your email',
        'form-subject': 'Subject',
        'form-message': 'Your message',
        'form-submit': 'Send message',
        'cv-download': 'Download my CV',
        
        // Footer
        'footer-rights': 'All rights reserved.'
    }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    // Sauvegarder la langue choisie
    localStorage.setItem('preferred-language', lang);
    
    // Mettre à jour tous les éléments avec data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Mettre à jour les placeholders
    const nameInput = document.querySelector('input[placeholder]');
    const emailInput = document.querySelector('input[type="email"]');
    const subjectInput = document.querySelectorAll('input[type="text"]')[1];
    const messageTextarea = document.querySelector('textarea');
    
    if (nameInput) nameInput.placeholder = translations[lang]['form-name'];
    if (emailInput) emailInput.placeholder = translations[lang]['form-email'];
    if (subjectInput) subjectInput.placeholder = translations[lang]['form-subject'];
    if (messageTextarea) messageTextarea.placeholder = translations[lang]['form-message'];
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialiser les boutons de langue
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Charger la langue sauvegardée ou utiliser français par défaut
    const savedLang = localStorage.getItem('preferred-language') || 'fr';
    if (savedLang === 'en') {
        changeLanguage('en');
    }
});

