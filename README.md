# 🚀 Portfolio Yassine LAKHAL

Site web portfolio moderne pour ingénieur en systèmes embarqués et robotique.

## ✨ Fonctionnalités

- ✅ **Design moderne** : Minimaliste avec animations fluides
- ✅ **Responsive** : Adapté mobile, tablette et desktop
- ✅ **Envoi d'emails réels** : Formulaire de contact fonctionnel avec EmailJS
- ✅ **Multilingue** : Français/Anglais avec switcher
- ✅ **Pages projets détaillées** : Chaque projet a sa propre page
- ✅ **Timeline dynamique** : Parcours professionnel animé
- ✅ **9 compétences** : Présentation en grille moderne

## 📁 Structure du Projet

```
portfolio/
├── index.html                      # Page principale
├── styles.css                      # Design et animations
├── script.js                       # JavaScript et interactions
├── translations.js                 # Traductions FR/EN
├── projet-*.html                   # Pages détaillées des projets
├── *.png, *.jpeg                   # Images et logos
└── *.md                           # Documentation
```

## 🚀 Démarrage Rapide

### Lancer le serveur
```bash
python3 -m http.server 8080
# Puis ouvrir : http://localhost:8080
```

## 📧 Configuration des Emails (EmailJS)

Pour que le formulaire de contact envoie de vrais emails :

### 1️⃣ Créer un compte EmailJS
- Aller sur [https://www.emailjs.com/](https://www.emailjs.com/)
- S'inscrire gratuitement (200 emails/mois)

### 2️⃣ Configurer votre service
- Cliquer sur **"Add New Service"**
- Choisir **Gmail** (ou autre)
- Connecter votre compte email
- Noter votre **Service ID**

### 3️⃣ Créer un template
- Aller dans **"Email Templates"**
- Cliquer sur **"Create New Template"**
- Utiliser les variables : `from_name`, `from_email`, `subject`, `message`, `to_name`
- Noter votre **Template ID**

### 4️⃣ Récupérer votre clé
- Aller dans **"Account"** → **"General"**
- Copier votre **Public Key**

### 5️⃣ Configurer le portfolio
Ouvrir `script.js` et remplacer (lignes ~200) :

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'votre_clé_publique_ici',
    SERVICE_ID: 'votre_service_id_ici',
    TEMPLATE_ID: 'votre_template_id_ici'
};
```

## 🎨 Sections du Site

### 🏠 Hero Section
- Nom et titre avec animations
- Photo de profil circulaire
- Grille technique et code binaire en arrière-plan
- Boutons d'action (Contact, CV)

### 👤 À Propos
- Présentation personnelle (FR/EN)
- Statistiques (années d'expérience, projets, technologies)

### 📚 Parcours
- Timeline dynamique inversée
- Logos des institutions
- Alternance gauche/droite
- Animations au scroll

### 🛠 Compétences (Nouvelle Version !)
Grille de **9 cartes modernes** avec :
- **Icône distinctive** pour chaque compétence
- **Titre professionnel**
- **Description détaillée** de l'expertise
- **Animations au survol** :
  - Rotation 3D de l'icône
  - Élévation de la carte
  - Barre turquoise en haut
  - Ombre dynamique

**Les 9 compétences** :
1. 🔧 Programmation Embarquée (C/C++, Python, STM32, ESP32)
2. 🤖 Robotique (Navigation, contrôle, capteurs)
3. 🧠 Intelligence Artificielle (TensorFlow Lite, vision)
4. 📡 IoT & Réseaux (MQTT, WiFi, LoRa, Bluetooth)
5. 📊 Traitement du Signal (FFT, filtrage, images)
6. 📐 Modélisation SysML/UML (Statecharts, diagrammes)
7. ⚡ Électronique & PCB (Circuits, routage)
8. 🖥️ Interfaces Graphiques Qt (Qt/C++, IHM, tableaux de bord)
9. ⏱️ Systèmes Temps Réel (FreeRTOS, Zephyr)

### 🚀 Projets
- Robot Autonome (TurtleBot3)
- Système IoT Intelligent
- Régulateur-Limiteur de Vitesse (SysML)
- Reconnaissance d'Image ESP32-CAM
- Modélisation UML Convoyeur

### 📧 Contact
- Formulaire fonctionnel avec EmailJS
- Liens sociaux (LinkedIn, GitHub, Email)

## 🌐 Multilingue

Changez la langue avec le switcher FR/EN :
- Toutes les sections sont traduites
- Sauvegarde automatique de la préférence
- Traductions dans `translations.js`

## 🎯 Personnalisation

### Modifier les compétences
Dans `index.html`, section `<div class="skills-grid">` :

```html
<div class="skill-card">
    <div class="skill-icon-large">
        <i class="fas fa-votre-icone"></i>
    </div>
    <h3 class="skill-title">Votre Compétence</h3>
    <p class="skill-description">
        Votre description détaillée...
    </p>
</div>
```

### Changer les couleurs
Dans `styles.css`, variables CSS (début du fichier) :

```css
:root {
    --primary-color: #ffffff;
    --accent-color: #00d4ff;
    --gradient-accent: linear-gradient(135deg, #00d4ff, #0099cc);
}
```

### Ajouter un projet
1. Créer `projet-nom.html` en dupliquant un projet existant
2. Ajouter la carte dans `index.html` section projets
3. Mettre à jour les couleurs dans `styles.css` (voir `COULEURS_PROJETS.md`)

## 📱 Responsive Design

✅ **Mobile** (< 768px) : 1 colonne, menu hamburger
✅ **Tablette** (768-1024px) : 2 colonnes
✅ **Desktop** (> 1024px) : 3 colonnes

## 🛠️ Technologies Utilisées

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript ES6+
- EmailJS (envoi d'emails)
- Font Awesome (icônes)
- Google Fonts (Inter)

## 📚 Documentation Additionnelle

- `COMPETENCES.md` - Détails de la section compétences
- `COULEURS_PROJETS.md` - Guide des couleurs par projet
- `PARCOURS_TIMELINE.md` - Documentation de la timeline
- `LANGUE.md` - Guide du système multilingue
- `GUIDE_RAPIDE.md` - Démarrage rapide

## 🌐 Hébergement

### GitHub Pages
```bash
git init
git add .
git commit -m "Portfolio v1.0"
git remote add origin https://github.com/votre-username/portfolio.git
git push -u origin main
```

Puis dans Settings → Pages → Sélectionner `main`

URL : `https://votre-username.github.io/portfolio`

## 🆘 Dépannage

### Le formulaire ne fonctionne pas
- Configurez EmailJS (voir ci-dessus)
- Vérifiez les IDs dans `script.js`
- Ouvrez la console (F12) pour voir les erreurs

### Les animations ne marchent pas
- Utilisez un serveur web (pas de double-clic)
- Vérifiez que JavaScript est activé

### Problème de cache
- Rechargez avec **Ctrl + Shift + R**
- Les versions CSS/JS sont incrémentées automatiquement

## 📸 Captures d'Écran

✨ **Design minimaliste et professionnel**
🎯 **Animations fluides et élégantes**
📱 **100% responsive**
🌍 **Multilingue FR/EN**

## 🤝 Support

- [Documentation EmailJS](https://www.emailjs.com/docs/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [MDN Web Docs](https://developer.mozilla.org/)

---

Créé avec ❤️ par Yassine LAKHAL
