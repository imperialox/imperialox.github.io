# 📋 Système de Pop-up pour les Projets

## ✅ Implémentation Complète

Les descriptions des projets s'affichent maintenant dans une **modale élégante** au lieu de rediriger vers des pages séparées.

---

## 🎯 Fonctionnalités

### Affichage
- ✅ **Pop-up centrée** avec fond semi-transparent flouté
- ✅ **Design moderne** : 2 colonnes (image gauche, contenu droite)
- ✅ **Responsive** : 1 colonne sur mobile
- ✅ **Animations fluides** : Fade-in + slide-up

### Contenu
- ✅ **Image du projet** en pleine hauteur
- ✅ **Titre** du projet
- ✅ **Tags techniques** (technologies utilisées)
- ✅ **Description complète** avec sections formatées :
  - 🎯 Objectif
  - 🔧 Technologies
  - ⚙️ Fonctionnalités
  - 📊 Résultats
  - 💡 Compétences

### Fermeture
- ✅ Bouton **X** en haut à droite
- ✅ Clic **en dehors** de la modale
- ✅ Touche **Échap**

---

## 📁 Fichiers Modifiés

### 1. `index.html`

#### Structure HTML de la modale (ajoutée avant `</body>`)
```html
<div id="projectModal" class="modal">
    <div class="modal-content">
        <span class="modal-close">&times;</span>
        <div class="modal-body">
            <div class="modal-image">
                <img id="modalImage" src="" alt="Project">
            </div>
            <div class="modal-text">
                <h2 id="modalTitle"></h2>
                <div id="modalTechTags" class="modal-tech-tags"></div>
                <div id="modalDescription" class="modal-description"></div>
            </div>
        </div>
    </div>
</div>
```

#### Boutons modifiés
**Avant** :
```html
<a href="projet-robot-autonome.html" class="btn btn-outline">Voir plus</a>
```

**Après** :
```html
<button class="btn btn-outline btn-modal" data-project="robot-autonome">Voir plus</button>
```

**Version** : CSS v21.0, JS v3.1

---

### 2. `styles.css`

#### Styles de la modale (210 lignes ajoutées)

**Structure principale** :
```css
.modal {
    display: none;
    position: fixed;
    z-index: 10000;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(5px);
}

.modal.active {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

**Contenu** :
```css
.modal-content {
    background: #ffffff;
    border-radius: 20px;
    max-width: 900px;
    width: 90%;
    max-height: 85vh;
    overflow-y: auto;
}

.modal-body {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 50/50 */
    gap: 0;
}
```

**Bouton fermeture** :
```css
.modal-close {
    position: absolute;
    top: 20px;
    right: 25px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
}

.modal-close:hover {
    background: var(--accent-color);
    transform: rotate(90deg);
}
```

**Responsive** :
```css
@media (max-width: 768px) {
    .modal-body {
        grid-template-columns: 1fr; /* Une colonne */
    }
    .modal-image {
        min-height: 250px;
        border-radius: 20px 20px 0 0;
    }
}
```

---

### 3. `script.js`

#### Données des 5 projets (370 lignes ajoutées)

**Structure des données** :
```javascript
const projectsData = {
    'robot-autonome': {
        title: 'Robot Autonome Intelligent - TurtleBot3',
        image: 'turtlebot.png',
        tags: ['Python', 'ROS', 'OpenCV', 'TensorFlow', 'Navigation'],
        description: `
            <h3>🎯 Objectif</h3>
            <p>Description...</p>
            // ... Sections formatées en HTML
        `
    },
    // ... 4 autres projets
};
```

#### Fonctions principales

**Ouverture de la modale** :
```javascript
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    // Remplir titre, image, tags, description
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Bloquer scroll
}
```

**Fermeture** :
```javascript
function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Réactiver scroll
}
```

**Event Listeners** :
```javascript
// Boutons "Voir plus"
document.querySelectorAll('.btn-modal').forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Bouton X
document.querySelector('.modal-close').addEventListener('click', closeProjectModal);

// Clic en dehors
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
});

// Touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
});
```

---

## 🎨 Design de la Modale

### Dimensions
| Écran | Largeur | Hauteur max | Colonnes |
|-------|---------|-------------|----------|
| Desktop | 900px | 85vh | 2 (50/50) |
| Tablette | 90% | 85vh | 2 |
| Mobile | 95% | 90vh | 1 |

### Animations

**Apparition** :
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from { 
        transform: translateY(50px); 
        opacity: 0; 
    }
    to { 
        transform: translateY(0); 
        opacity: 1; 
    }
}
```

**Durées** :
- Fond : 300ms (fadeIn)
- Contenu : 400ms (slideUp)
- Rotation X : 300ms

---

## 📊 Contenu des Projets

### 1. Robot Autonome Intelligent 🤖
- **Image** : `turtlebot.png`
- **Tags** : Python, ROS, OpenCV, TensorFlow, Navigation
- **Sections** : Objectif, Technologies, Fonctionnalités, Résultats, Compétences

### 2. Système IoT Intelligent 📡
- **Image** : URL Unsplash
- **Tags** : ESP32, MQTT, Node.js, MongoDB, Cloud
- **Sections** : Objectif, Architecture, Fonctionnalités, Performance, Compétences

### 3. Régulateur-Limiteur & Bluetooth 🚗
- **Image** : `ihm.png`
- **Tags** : SysML, Statecharts, Rhapsody, Bluetooth, Temps Réel
- **Sections** : Objectif, Systèmes modélisés, Outils, Résultat, Compétences

### 4. Reconnaissance Image ESP32-CAM 📷
- **Image** : `image.png`
- **Tags** : ESP32-CAM, TensorFlow Lite, OpenCV, Edge AI, Vision
- **Sections** : Objectif, Architecture, Pipeline, Modèle IA, Performances, Compétences

### 5. Modélisation UML Convoyeur 🏭
- **Image** : `convoyeur.png`
- **Tags** : UML, Enterprise Architect, POO, Design Patterns, Industrie
- **Sections** : Objectif, Description système, Diagrammes, Logique, Gestion erreurs, Compétences

---

## 🎯 Avantages vs Pages Séparées

| Critère | Pop-up ✅ | Pages séparées ❌ |
|---------|----------|-------------------|
| **UX** | Fluide, pas de rechargement | Navigation lourde |
| **Performance** | Instantané | Temps de chargement |
| **Maintenance** | Données centralisées dans JS | Fichiers HTML multiples |
| **SEO** | Moins bon | Meilleur |
| **Animation** | Transitions élégantes | Pas d'animation |
| **Code** | Moins de fichiers | Plus de fichiers |

---

## 🔧 Comment Ajouter un Projet

### Étape 1 : Ajouter la carte dans `index.html`
```html
<div class="project-card">
    <div class="project-image">
        <img src="mon-projet.png" alt="Mon Projet">
    </div>
    <div class="project-content">
        <h3 class="project-title">Titre du Projet</h3>
        <p class="project-description">
            Description courte...
        </p>
        <div class="project-tech">
            <span class="tech-tag">Tech1</span>
            <span class="tech-tag">Tech2</span>
        </div>
        <button class="btn btn-outline btn-modal" data-project="mon-projet-id">
            Voir plus
        </button>
    </div>
</div>
```

### Étape 2 : Ajouter les données dans `script.js`
```javascript
const projectsData = {
    // ... projets existants
    'mon-projet-id': {
        title: 'Mon Nouveau Projet',
        image: 'mon-projet.png',
        tags: ['Tech1', 'Tech2', 'Tech3'],
        description: `
            <h3>🎯 Objectif</h3>
            <p>Description de l'objectif...</p>
            
            <h3>🔧 Technologies</h3>
            <ul>
                <li><strong>Technologie 1</strong> : Explication</li>
                <li><strong>Technologie 2</strong> : Explication</li>
            </ul>
            
            <h3>⚙️ Fonctionnalités</h3>
            <ul>
                <li>Fonctionnalité 1</li>
                <li>Fonctionnalité 2</li>
            </ul>
            
            <h3>💡 Compétences</h3>
            <ul>
                <li>Compétence 1</li>
                <li>Compétence 2</li>
            </ul>
        `
    }
};
```

**Important** : Le `data-project="mon-projet-id"` doit correspondre à la clé dans `projectsData`.

---

## 🎨 Personnalisation

### Changer la largeur maximale
```css
.modal-content {
    max-width: 1200px; /* Au lieu de 900px */
}
```

### Changer les proportions image/texte
```css
.modal-body {
    grid-template-columns: 40% 60%; /* Au lieu de 50/50 */
}
```

### Changer la couleur du fond
```css
.modal {
    background-color: rgba(0, 0, 0, 0.95); /* Plus foncé */
}
```

### Désactiver le blur
```css
.modal {
    backdrop-filter: none; /* Retirer le flou */
}
```

---

## 🚀 Utilisation

1. **Cliquez** sur un bouton "Voir plus"
2. **La modale s'ouvre** avec animation
3. **Scrollez** pour lire le contenu
4. **Fermez** avec :
   - Bouton X (rotation au hover)
   - Clic en dehors
   - Touche Échap

---

## ✅ Tests Effectués

- ✅ Ouverture/fermeture fluide
- ✅ Scroll interne de la modale
- ✅ Responsive mobile/desktop
- ✅ Tous les boutons "Voir plus"
- ✅ Fermeture par X, clic dehors, Échap
- ✅ Blocage scroll de la page pendant modale ouverte
- ✅ Affichage correct images et tags
- ✅ Formatage HTML de la description

---

## 📚 Fichiers Conservés

Les pages HTML individuelles (`projet-*.html`) peuvent être :
- ✅ **Conservées** pour le SEO et liens directs
- ❌ **Supprimées** si vous préférez uniquement les pop-ups

**Recommandation** : Les conserver pour :
- Indexation Google (SEO)
- Partage de liens directs
- Accessibilité

---

## 🎯 Résultat

**Expérience utilisateur fluide et moderne** avec :
- ✨ Pas de rechargement de page
- ⚡ Affichage instantané
- 🎨 Design élégant et professionnel
- 📱 Parfaitement responsive
- 🚀 Animations soignées

**Versions** :
- CSS : v21.0
- JS : v3.1

**Les projets s'affichent maintenant en pop-up !** 🎉






