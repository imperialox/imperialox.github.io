# 🌐 Système de Traduction FR/EN

## ✅ Fonctionnalité Ajoutée

Le portfolio supporte maintenant **deux langues** :
- 🇫🇷 **Français** (par défaut)
- 🇬🇧 **English**

## 🔧 Comment Ça Marche

### **Sélecteur dans la Navbar**
En haut à droite de la navigation, vous trouverez :
```
[🌐 FR] [🌐 EN]
```

- **Cliquer sur FR** → Affichage en français
- **Cliquer sur EN** → Affichage en anglais
- **Sauvegarde automatique** → La langue est mémorisée

## 📝 Éléments Traduits

### **Navigation**
- Accueil ↔ Home
- À propos ↔ About
- Compétences ↔ Skills
- Projets ↔ Projects
- Contact ↔ Contact

### **Section Hero**
- Titre et sous-titre
- Slogan : "Construire les technologies de demain" ↔ "Building the technologies of tomorrow"
- Boutons : "Découvrir mes projets" ↔ "Discover my projects"

### **Section À Propos**
- Titre : "À propos de moi" ↔ "About Me"
- Sous-titre et descriptions complètes
- Labels des statistiques :
  - "Années d'expérience" ↔ "Years of experience"
  - "Projets réalisés" ↔ "Completed projects"
  - "Technologies maîtrisées" ↔ "Mastered technologies"

### **Section Compétences**
- Titre : "Compétences Techniques" ↔ "Technical Skills"
- Catégories :
  - Programmation ↔ Programming
  - Matériel ↔ Hardware
  - Spécialités ↔ Specialties

### **Section Projets**
- Titre : "Mes Projets" ↔ "My Projects"
- Sous-titre
- Bouton "Voir plus" ↔ "View more"

### **Section Contact**
- Titre : "Contactez-moi" ↔ "Contact Me"
- Formulaire (placeholders et bouton)

## 🎨 Design du Sélecteur

### **Apparence**
- **Boutons** : Petits, arrondis avec icône globe
- **État normal** : Transparent avec bordure
- **Au survol** : Fond légèrement blanc
- **État actif** : Fond turquoise (couleur accent)

### **Position**
- **Desktop** : À droite du menu, avant le hamburger
- **Mobile** : En haut à droite (fixe)

## 💾 Sauvegarde de la Préférence

Le système utilise `localStorage` pour mémoriser la langue :
- Premier visite → Français par défaut
- Changement de langue → Sauvegardé automatiquement
- Rechargement de page → Langue conservée

## 📁 Fichiers Impliqués

### **translations.js**
- Dictionnaire de toutes les traductions
- Fonction `changeLanguage(lang)`
- Initialisation automatique au chargement

### **index.html**
- Attributs `data-translate` sur les éléments
- Boutons de langue dans la navbar
- Import du script translations.js

### **styles.css**
- Styles pour `.language-switcher`
- Styles pour `.lang-btn`
- Responsive design pour mobile

## 🚀 Utilisation

### **Pour l'Utilisateur**
1. Ouvrir le portfolio
2. Cliquer sur **EN** en haut à droite
3. Tout le contenu passe en anglais
4. Cliquer sur **FR** pour revenir en français

### **Pour Ajouter des Traductions**
Éditer `translations.js` et ajouter :

```javascript
fr: {
    'nouvelle-cle': 'Texte en français',
    // ...
},
en: {
    'nouvelle-cle': 'Text in English',
    // ...
}
```

Puis dans le HTML :
```html
<p data-translate="nouvelle-cle">Texte en français</p>
```

## 🎯 Avantages

### **Pour le Portfolio**
- ✅ Audience internationale
- ✅ Professionnel et moderne
- ✅ Meilleure accessibilité

### **Pour les Recruteurs**
- ✅ Entreprises françaises → Français
- ✅ Entreprises internationales → English
- ✅ Flexibilité selon le contexte

## 📊 Statistiques

**Traductions disponibles** : ~30 textes
**Langues supportées** : 2 (FR, EN)
**Temps de changement** : Instantané
**Sauvegarde** : Automatique (localStorage)

## 🔮 Extensions Futures

Pour ajouter d'autres langues (ex: Espagnol, Arabe) :
1. Ajouter `es` ou `ar` dans `translations.js`
2. Ajouter un bouton dans la navbar
3. Traduire tous les textes

Exemple :
```javascript
es: {
    'nav-home': 'Inicio',
    'nav-about': 'Acerca de',
    // ...
}
```

**Votre portfolio est maintenant bilingue !** 🌍

