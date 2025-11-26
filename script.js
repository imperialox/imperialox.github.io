// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation des cartes de compétences
const animateSkillCards = () => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, index * 100);
    });
};

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');

            // Animer les cartes de compétences quand la section compétences est visible
            if (entry.target.id === 'skills') {
                setTimeout(animateSkillCards, 300);
            }
        }
    });
}, observerOptions);

// Observer toutes les sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
});

// Observer spécifique pour la timeline
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const timelineBlocks = entry.target.querySelectorAll('.timeline-block');
            timelineBlocks.forEach((block, index) => {
                setTimeout(() => {
                    block.style.opacity = '1';
                    block.style.transform = 'translateY(0)';
                }, index * 200);
            });
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const timeline = document.querySelector('.modern-timeline');
if (timeline) {
    // Initialiser tous les blocs en invisible
    document.querySelectorAll('.timeline-block').forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(30px)';
        block.style.transition = 'all 0.6s ease-out';
    });

    timelineObserver.observe(timeline);
}

// Effet parallax pour la section hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.particles');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Animation du texte d'accueil avec effet dynamique
const animateText = () => {
    const name = document.querySelector('.name');
    const title = document.querySelector('.title');
    const slogan = document.querySelector('.hero-slogan');

    // Animation du nom avec effet de brillance
    if (name) {
        name.style.opacity = '0';
        name.style.transform = 'translateY(30px)';
        setTimeout(() => {
            name.style.transition = 'all 0.8s ease-out';
            name.style.opacity = '1';
            name.style.transform = 'translateY(0)';

            // Ajouter un effet de brillance qui passe
            setTimeout(() => {
                name.style.position = 'relative';
                const shine = document.createElement('div');
                shine.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    animation: shine 3s ease-in-out infinite;
                `;
                name.style.position = 'relative';
                name.appendChild(shine);

                // Ajouter l'animation shine
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes shine {
                        0% { left: -100%; }
                        50%, 100% { left: 100%; }
                    }
                `;
                document.head.appendChild(style);
            }, 1000);
        }, 200);
    }

    // Animation du titre avec gradient qui bouge
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'translateY(30px)';
        setTimeout(() => {
            title.style.transition = 'all 0.8s ease-out';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 400);
    }

    // Animation du slogan
    if (slogan) {
        slogan.style.opacity = '0';
        slogan.style.transform = 'translateY(30px)';
        setTimeout(() => {
            slogan.style.transition = 'all 0.8s ease-out';
            slogan.style.opacity = '1';
            slogan.style.transform = 'translateY(0)';
        }, 600);
    }
};

// Lancer l'animation du texte au chargement
window.addEventListener('load', animateText);

// Effet de typing pour le slogan
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';

    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Animation des statistiques
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
            }
        };

        updateCounter();
    });
};

// Observer pour les statistiques
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Effet de survol pour les cartes de projets
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Animation des icônes de compétences
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'rotate(360deg) scale(1.1)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotate(0deg) scale(1)';
    });
});

// ========================================
// CONFIGURATION EMAILJS
// ========================================
// Pour configurer EmailJS :
// 1. Créez un compte gratuit sur https://www.emailjs.com/
// 2. Ajoutez un service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email
// 4. Copiez vos IDs ci-dessous

const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'sd1Zx8uIN1YgLhhiy',      // Remplacez par votre clé publique EmailJS
    SERVICE_ID: 'service_g5qi4or',      // Remplacez par votre service ID
    TEMPLATE_ID: 'template_2ixiwrc'     // Remplacez par votre template ID
};

// Initialiser EmailJS (automatique au chargement)
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
}

// ========================================
// FORMULAIRE DE CONTACT
// ========================================
const contactForm = document.querySelector('.form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Récupérer les données du formulaire
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        // Validation basique
        if (!name || !email || !subject || !message) {
            showNotification('Veuillez remplir tous les champs du formulaire.', 'error');
            return;
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Veuillez entrer une adresse email valide.', 'error');
            return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // Désactiver le bouton et afficher le loading
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;

        // Vérifier si EmailJS est configuré
        if (!EMAILJS_CONFIG.PUBLIC_KEY.startsWith('VOTRE_')) {
            try {
                // Paramètres pour EmailJS
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    subject: subject,
                    message: message,
                    to_name: 'Yassine LAKHAL'
                };

                // Envoyer l'email via EmailJS
                await emailjs.send(
                    EMAILJS_CONFIG.SERVICE_ID,
                    EMAILJS_CONFIG.TEMPLATE_ID,
                    templateParams
                );

                showNotification('Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');
                contactForm.reset();

            } catch (error) {
                console.error('Erreur EmailJS:', error);
                showNotification('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
            }
        } else {
            // EmailJS n'est pas configuré - afficher un message d'information
            console.log('📧 Données du formulaire:', { name, email, subject, message });
            showNotification(
                '⚠️ EmailJS n\'est pas encore configuré. Consultez le README.md pour les instructions.',
                'info'
            );
            contactForm.reset();
        }

        // Réactiver le bouton
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// Fonction pour afficher les notifications
const showNotification = (message, type = 'info') => {
    // Supprimer les notifications existantes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());

    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: linear-gradient(135deg, #4CAF50, #45a049);' : ''}
        ${type === 'error' ? 'background: linear-gradient(135deg, #f44336, #d32f2f);' : ''}
        ${type === 'info' ? 'background: linear-gradient(135deg, #2196F3, #1976D2);' : ''}
    `;

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Supprimer après 5 secondes
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
};

// Effet de particules animées
const createParticles = () => {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--accent-color);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite linear;
        `;
        particlesContainer.appendChild(particle);
    }
};

// Lancer l'effet de particules
createParticles();

// Effet de code binaire robotique en arrière-plan
const createBinaryRain = () => {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    // Créer des colonnes de nombres binaires
    for (let i = 0; i < 15; i++) {
        const column = document.createElement('div');
        column.style.cssText = `
            position: absolute;
            left: ${i * 7}%;
            top: -100%;
            color: rgba(0, 212, 255, 0.4);
            font-family: 'Courier New', monospace;
            font-size: 16px;
            font-weight: bold;
            white-space: nowrap;
            animation: binaryFall ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            text-shadow: 0 0 5px rgba(0, 212, 255, 0.5);
            letter-spacing: 2px;
        `;

        // Générer une chaîne de 0 et 1
        let binary = '';
        for (let j = 0; j < 20; j++) {
            binary += Math.random() > 0.5 ? '1 ' : '0 ';
        }
        column.textContent = binary;
        particlesContainer.appendChild(column);
    }

    // Ajouter l'animation CSS pour la chute
    const style = document.createElement('style');
    style.textContent = `
        @keyframes binaryFall {
            0% {
                top: -100%;
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                top: 110%;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
};

// Lancer l'effet de code binaire
createBinaryRain();

// Navigation active selon la section visible
const updateActiveNav = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', updateActiveNav);

// Animation de révélation progressive des éléments
const revealElements = () => {
    const elements = document.querySelectorAll('.skill-category, .project-card, .contact-item');

    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease-out ${index * 0.1}s`;

        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        elementObserver.observe(element);
    });
};

// Lancer les animations de révélation
revealElements();

// Effet de curseur personnalisé (optionnel)
const createCustomCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--accent-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });

        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
};

// Activer le curseur personnalisé (décommentez si souhaité)
// createCustomCursor();

// Performance: Désactiver les animations sur les appareils lents
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition', 'none');
}

// Lazy loading pour les images
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

// Animations pour la timeline du parcours
const animateTimelineOnScroll = () => {
    const timelineBlocks = document.querySelectorAll('.timeline-block');

    timelineBlocks.forEach((block, index) => {
        // Animation d'entrée depuis la gauche ou la droite
        block.style.opacity = '0';

        if (block.classList.contains('timeline-left')) {
            block.style.transform = 'translateX(-50px)';
        } else {
            block.style.transform = 'translateX(50px)';
        }

        block.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`;
    });

    // Observer pour déclencher l'animation
    const timelineObserverAnim = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const blocks = entry.target.querySelectorAll('.timeline-block');
                blocks.forEach(block => {
                    block.style.opacity = '1';
                    block.style.transform = 'translateX(0)';
                });
            }
        });
    }, { threshold: 0.2 });

    const timelineContainer = document.querySelector('.modern-timeline');
    if (timelineContainer) {
        timelineObserverAnim.observe(timelineContainer);
    }
};

// Effet de pulsation sur les logos de la timeline
const pulseTimelineIcons = () => {
    const icons = document.querySelectorAll('.timeline-icon');

    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.animation = 'pulse 2s ease-in-out infinite';
        }, index * 300);
    });
};

// Ajouter l'animation de pulse en CSS
const addPulseAnimation = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                transform: translate(-50%, -50%) scale(1);
                box-shadow: 0 5px 20px rgba(0, 212, 255, 0.3);
            }
            50% {
                transform: translate(-50%, -50%) scale(1.05);
                box-shadow: 0 8px 30px rgba(0, 212, 255, 0.5);
            }
        }
        
        @keyframes drawLine {
            from {
                height: 0;
            }
            to {
                height: 100%;
            }
        }
    `;
    document.head.appendChild(style);
};

// Animation de la ligne centrale qui se dessine
const animateTimelineLine = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const line = entry.target.querySelector('::before');
                entry.target.style.setProperty('--line-animation', 'drawLine 2s ease-out forwards');
            }
        });
    }, { threshold: 0.1 });

    const timelineContainer = document.querySelector('.modern-timeline');
    if (timelineContainer) {
        observer.observe(timelineContainer);
    }
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio de Yassine LAKHAL chargé avec succès !');

    // Lancer les animations de la timeline
    addPulseAnimation();
    animateTimelineOnScroll();

    // Pulse sur les icônes après un délai
    setTimeout(pulseTimelineIcons, 1000);

    // Ajouter des effets interactifs aux cartes de timeline
    document.querySelectorAll('.timeline-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Trouver l'icône associée
            const block = card.closest('.timeline-block');
            const icon = block.querySelector('.timeline-icon');

            // Effet sur la carte
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';

            // Effet sur l'icône
            if (icon) {
                icon.style.transform = 'translate(-50%, -50%) scale(1.15) rotate(5deg)';
                icon.style.boxShadow = '0 10px 40px rgba(0, 212, 255, 0.6)';
            }

            // Animer les tags
            const tags = card.querySelectorAll('.tag');
            tags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-3px)';
                    tag.style.boxShadow = '0 4px 12px rgba(0, 212, 255, 0.3)';
                }, index * 50);
            });
        });

        card.addEventListener('mouseleave', () => {
            const block = card.closest('.timeline-block');
            const icon = block.querySelector('.timeline-icon');

            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';

            if (icon) {
                icon.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
                icon.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.3)';
            }

            const tags = card.querySelectorAll('.tag');
            tags.forEach(tag => {
                tag.style.transform = 'translateY(0)';
                tag.style.boxShadow = 'none';
            });
        });
    });

    // Ajouter un effet de chargement
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    loader.innerHTML = `
        <div style="
            width: 50px;
            height: 50px;
            border: 3px solid var(--border-color);
            border-top: 3px solid var(--accent-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
    `;

    document.body.appendChild(loader);

    // Masquer le loader après le chargement
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
});

// Ajouter l'animation de spin pour le loader
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ========================================
// MODAL PROJETS
// ========================================

// Données des projets
const projectsData = {
    'robot-autonome': {
        title: 'Robot Autonome Intelligent - TurtleBot3',
        image: 'turtlebot.png',
        tags: ['Python', 'ROS', 'OpenCV', 'TensorFlow', 'Navigation'],
        description: `
            <p>Développement d'un système de navigation autonome pour robot mobile TurtleBot3 avec capacités de perception et de décision en temps réel. Le projet utilise ROS comme framework principal, Python pour le développement des algorithmes, OpenCV pour la vision par ordinateur et TensorFlow Lite pour l'intelligence artificielle embarquée. Le robot est capable de naviguer de manière autonome dans un environnement dynamique grâce à la cartographie SLAM (création de cartes 2D de l'environnement), la détection et reconnaissance d'objets en temps réel, et la planification de trajectoire avec les algorithmes A* et DWA. L'interface de contrôle via RViz permet le monitoring et la télé-opération. Le système atteint un taux de réussite de 95% pour l'évitement d'obstacles avec une précision de localisation de ±5cm.</p>
        `
    },
    'iot-intelligent': {
        title: 'Système IoT Intelligent',
        image: 'dashboard_iot.png',
        tags: ['ESP32', 'MQTT', 'Node.js', 'MongoDB', 'Cloud'],
        description: `
            <p>J’ai développé une plateforme IoT complète composée d’un dashboard web et d’un système de gestion des appareils. Les utilisateurs peuvent créer un compte, connecter leurs microcontrôleurs (comme des ESP32) et visualiser en temps réel les données issues de leurs capteurs.Les appareils transmettent leurs mesures via MQTT, puis celles-ci sont enregistrées dans une base de données PostgreSQL.Le dashboard affiche les données collectées sous forme de graphiques et d’interprétations, permettant à chaque utilisateur de suivre et analyser facilement les informations provenant de ses différents devices IoT.</p>
        `
    },
    'sysml-automobile': {
        title: 'Régulateur-Limiteur de Vitesse & Kit Bluetooth',
        image: 'ihm.png',
        tags: ['SysML', 'Statecharts', 'Rhapsody', 'Bluetooth', 'Temps Réel'],
        description: `
            <p>Modélisation système complète d'un véhicule intégrant régulateur de vitesse, limiteur intelligent et kit main libre Bluetooth selon une approche SysML avec IBM Rhapsody. Le projet modélise quatre systèmes principaux : le véhicule de base avec gestion des pédales et du moteur (temps de réponse accélération 300ms, freinage 200ms), un régulateur de vitesse maintenant automatiquement la vitesse définie au-dessus de 50 km/h avec ajustement throttle toutes les 50ms, un limiteur de vitesse permettant un ajustement fin ou rapide avec alarme en cas de dépassement, et un kit Bluetooth main libre avec jumelage sécurisé et gestion complète des appels. Les statecharts modélisent les comportements complexes et les interactions entre systèmes, avec une gestion de priorité intelligente. Le modèle complet et fonctionnel a été validé par simulation IHM, démontrant l'efficacité des statecharts pour gérer la complexité des systèmes temps réel automobiles.</p>
        `
    },
    'esp32-cam': {
        title: 'Reconnaissance d\'Image ESP32-CAM',
        image: 'espcam.png',
        tags: ['ESP32-CAM', 'TensorFlow Lite', 'OpenCV', 'Edge AI', 'Vision'],
        description: `
            <p>Développement d'un système de reconnaissance d'images en temps réel sur ESP32-CAM, intégrant des algorithmes de vision par ordinateur et d'intelligence artificielle embarquée pour la détection et classification d'objets avec des ressources matérielles limitées. Le système utilise l'ESP32-CAM (240MHz, 520KB SRAM) avec caméra OV2640 2MP, TensorFlow Lite for Microcontrollers pour l'inférence IA, et OpenCV pour le prétraitement d'images. Le pipeline capture des images 640x480, les redimensionne en 96x96 pixels pour optimiser la mémoire, applique une normalisation RGB vers grayscale, puis exécute l'inférence avec un modèle MobileNetV2 quantifié (int8, 300KB). Le système atteint une latence inférieure à 200ms par image avec une précision de 85-90% sur objets courants, un framerate de 5-10 FPS en détection continue, et permet le streaming vidéo via WiFi avec API REST et publication MQTT des événements de détection pour des applications de surveillance intelligente, comptage d'objets et détection d'intrusion low-cost.</p>
        `
    },
    'uml-convoyeur': {
        title: 'Modélisation UML Système de Convoyage',
        image: 'convoyeur.png',
        tags: ['UML', 'Enterprise Architect', 'POO', 'Design Patterns', 'Industrie'],
        description: `
            <p>Modélisation orientée objet d'un système de convoyage industriel automatisé pour le tri et l'aiguillage de bennes vers différentes destinations avec Enterprise Architect. Le système comprend trois tapis roulants (A et B en entrées, C commun vers sortie), un vérin d'aiguillage pour orienter les bennes, et des capteurs de détection de présence à chaque étape. La modélisation UML complète inclut les diagrammes structurels (classes avec architecture POO complète, composants pour modules logiciels, déploiement pour architecture matérielle) et les diagrammes comportementaux (cas d'utilisation pour cycles A et B avec gestion de priorité, séquence pour interactions temporelles, états pour tapis/vérin/contrôleur, activités pour flux de décision). Le système implémente une logique de fonctionnement avec priorité B sauf si cycle A déjà engagé, une gestion du tapis C partagé permettant un seul cycle à la fois, et une tolérance aux fautes avec détection de capteurs défaillants, gestion de chute de benne et blocage vérin. Les design patterns utilisés incluent State pour les états des tapis, Observer pour notifications capteurs, Singleton pour contrôleur unique et Factory pour création d'objets Benne, aboutissant à un modèle UML complet et validé avec architecture modulaire permettant les évolutions futures.</p>
        `
    },
    'robotics-designs': {
        title: 'Robotics Designs – Exchange USA',
        image: 'robotics-1.png',
        images: [
            'robotics-1.png',
            'robotics-2.png',
            'robotics-3.png',
            'robotics-4.png',
            'robotics-5.png',
            'robotics-6.png'
        ],
        tags: ['Robotique', 'PID', 'Capteurs', 'Prototypage', 'SolidWorks'],
        videos: [
            { title: 'Défi suiveur de ligne', url: '' },
            { title: 'Contrôle PID appliqué', url: '' },
            { title: 'Présentation hebdomadaire', url: '' }
        ],
        description: `
            <p>Projet réalisé durant l’échange académique aux États-Unis dans le cadre du cours Robotics Designs. Chaque semaine, un nouveau défi imposait de modéliser un robot en fonction d’une technologie ou d’un capteur précis (suiveur de ligne, robot PID, navigation par ultrasons, détection infrarouge, etc.). Les projets prenaient la forme d’un concours où les étudiants devaient concevoir rapidement une architecture mécanique et logicielle efficace avant de la présenter. Cette approche a renforcé la créativité, l’itération rapide et la capacité à adapter des lois de commande ou des capteurs à des environnements variés tout en documentant les choix d’ingénierie.</p>
        `
    }
};

const modalImageElement = document.getElementById('modalImage');
const modalImageSingleWrapper = document.getElementById('modalImageSingle');
const modalCarousel = document.getElementById('modalCarousel');
const modalCarouselTrack = document.getElementById('modalCarouselTrack');
const modalCarouselIndicators = document.getElementById('modalCarouselIndicators');
const carouselPrevBtn = document.getElementById('carouselPrev');
const carouselNextBtn = document.getElementById('carouselNext');
const modalVideosSection = document.getElementById('modalVideos');
const modalVideosGrid = document.getElementById('modalVideosGrid');

let currentCarouselIndex = 0;
let currentCarouselImages = [];

function showSingleImage(src, alt) {
    if (!modalImageElement || !modalImageSingleWrapper || !modalCarousel) return;

    modalImageSingleWrapper.style.display = 'block';
    modalImageElement.src = src;
    modalImageElement.alt = alt;

    modalCarousel.classList.remove('active');
    modalCarousel.setAttribute('aria-hidden', 'true');
    if (modalCarouselTrack) modalCarouselTrack.innerHTML = '';
    if (modalCarouselIndicators) modalCarouselIndicators.innerHTML = '';

    currentCarouselImages = [];
    currentCarouselIndex = 0;
}

function updateCarousel() {
    if (!modalCarouselTrack || !modalCarouselIndicators) return;
    if (!currentCarouselImages.length) return;

    modalCarouselTrack.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;

    const indicators = modalCarouselIndicators.querySelectorAll('button');
    indicators.forEach((indicator, index) => {
        const isActive = index === currentCarouselIndex;
        indicator.classList.toggle('active', isActive);
        indicator.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
}

function setupCarousel(images = [], title = '') {
    if (!modalCarousel || !modalCarouselTrack || !modalCarouselIndicators || !modalImageSingleWrapper) return;

    if (!images.length) {
        showSingleImage('', title);
        return;
    }

    modalImageSingleWrapper.style.display = images.length > 1 ? 'none' : 'block';

    if (images.length === 1) {
        showSingleImage(images[0], title);
        return;
    }

    modalCarousel.classList.add('active');
    modalCarousel.setAttribute('aria-hidden', 'false');

    modalCarouselTrack.innerHTML = images.map((src, index) => `
        <div class="carousel-slide">
            <img src="${src}" alt="${title} - image ${index + 1}">
        </div>
    `).join('');

    modalCarouselIndicators.innerHTML = images.map((_, index) => `
        <button type="button" data-index="${index}" aria-label="Aller à l'image ${index + 1}"></button>
    `).join('');

    currentCarouselImages = images;
    currentCarouselIndex = 0;
    updateCarousel();

    const indicatorButtons = modalCarouselIndicators.querySelectorAll('button');
    indicatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetIndex = Number(button.getAttribute('data-index'));
            if (!Number.isNaN(targetIndex)) {
                currentCarouselIndex = targetIndex;
                updateCarousel();
            }
        });
    });
}

function goToPreviousSlide() {
    if (!currentCarouselImages.length) return;
    currentCarouselIndex = (currentCarouselIndex - 1 + currentCarouselImages.length) % currentCarouselImages.length;
    updateCarousel();
}

function goToNextSlide() {
    if (!currentCarouselImages.length) return;
    currentCarouselIndex = (currentCarouselIndex + 1) % currentCarouselImages.length;
    updateCarousel();
}

function populateProjectVideos(project) {
    if (!modalVideosSection || !modalVideosGrid) return;
    const videos = Array.isArray(project.videos) ? project.videos.slice(0, 3) : [];

    if (!videos.length) {
        modalVideosSection.classList.remove('active');
        modalVideosSection.setAttribute('aria-hidden', 'true');
        modalVideosGrid.innerHTML = '';
        return;
    }

    modalVideosSection.classList.add('active');
    modalVideosSection.setAttribute('aria-hidden', 'false');

    modalVideosGrid.innerHTML = videos.map((video, index) => {
        const title = video?.title || `Vidéo ${index + 1}`;
        if (video?.url) {
            return `
                <div class="video-card">
                    <div class="video-frame">
                        <iframe src="${video.url}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <p>${title}</p>
                </div>
            `;
        }
        return `
            <div class="video-card placeholder">
                <div class="video-frame">
                    <i class="fas fa-video-slash"></i>
                </div>
                <p>${title} (à venir)</p>
            </div>
        `;
    }).join('');
}

if (carouselPrevBtn) {
    carouselPrevBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        goToPreviousSlide();
    });
}

if (carouselNextBtn) {
    carouselNextBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        goToNextSlide();
    });
}

// Fonction pour ouvrir la modal
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectsData[projectId];

    if (!project) return;

    // Remplir le contenu
    document.getElementById('modalTitle').textContent = project.title;

    const hasGallery = Array.isArray(project.images) && project.images.length > 1;
    const hasSingleArrayImage = Array.isArray(project.images) && project.images.length === 1;
    const fallbackImage = project.image || (project.images && project.images[0]) || '';

    if (hasGallery) {
        setupCarousel(project.images, project.title);
    } else if (hasSingleArrayImage) {
        showSingleImage(project.images[0], project.title);
    } else {
        showSingleImage(fallbackImage, project.title);
    }

    // Tags techniques
    const tagsContainer = document.getElementById('modalTechTags');
    tagsContainer.innerHTML = project.tags.map(tag =>
        `<span class="tech-tag">${tag}</span>`
    ).join('');

    // Description
    document.getElementById('modalDescription').innerHTML = project.description;

    // Vidéos
    populateProjectVideos(project);

    // Afficher la modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Empêcher scroll page
}

// Fonction pour fermer la modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Réactiver scroll page
}

// Event listeners pour les cartes de projets (toute la carte est cliquable)
document.addEventListener('DOMContentLoaded', () => {
    // Rendre toute la carte cliquable
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const button = card.querySelector('.btn-modal');
            if (button) {
                const projectId = button.getAttribute('data-project');
                openProjectModal(projectId);
            }
        });
    });

    // Ancien système avec boutons (au cas où)
    const modalButtons = document.querySelectorAll('.btn-modal');

    modalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Éviter double déclenchement
            const projectId = button.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Fermer avec le bouton X
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }

    // Fermer en cliquant en dehors
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
});
