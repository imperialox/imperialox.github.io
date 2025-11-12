<<<<<<< HEAD
# 🚀 Portfolio Yassine LAKHAL

Site web portfolio moderne pour ingénieur en systèmes embarqués et robotique.

## ✨ Fonctionnalités

- ✅ **Design moderne** : Minimaliste avec animations fluides
- ✅ **Responsive** : Adapté mobile, tablette et desktop
- ✅ **Envoi d'emails réels** : Formulaire de contact fonctionnel
- ✅ **Pas de backend** : Tout fonctionne depuis le navigateur
- ✅ **3 fichiers seulement** : Simple et facile à personnaliser

## 📁 Structure du Projet

```
portfolio/
├── index.html       # Page web principale
├── styles.css       # Design et animations
├── script.js        # JavaScript et EmailJS
└── README.md        # Ce fichier
```

## 🚀 Démarrage Rapide

### Option 1 : Double-clic (plus simple)
```bash
# Ouvrir directement dans le navigateur
xdg-open index.html
```

### Option 2 : Serveur local
```bash
# Avec Python
python3 -m http.server 8080

# Puis ouvrir : http://localhost:8080
```

## 📧 Configuration des Emails (EmailJS)

Pour que le formulaire de contact envoie de vrais emails :

### 1️⃣ Créer un compte EmailJS
- Aller sur [https://www.emailjs.com/](https://www.emailjs.com/)
- S'inscrire gratuitement (200 emails/mois gratuits)

### 2️⃣ Configurer votre email
- Cliquer sur **"Add New Service"**
- Choisir **Gmail** (ou votre fournisseur)
- Connecter votre compte email
- Noter votre **Service ID**

### 3️⃣ Créer un template d'email
- Aller dans **"Email Templates"**
- Cliquer sur **"Create New Template"**
- Utiliser ce contenu :

```
Sujet: Nouveau message depuis votre portfolio - {{subject}}

Bonjour {{to_name}},

Vous avez reçu un nouveau message de {{from_name}} ({{from_email}})

Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

- **Variables à utiliser** : `from_name`, `from_email`, `subject`, `message`, `to_name`
- Noter votre **Template ID**

### 4️⃣ Récupérer votre clé publique
- Aller dans **"Account"** → **"General"**
- Copier votre **Public Key**

### 5️⃣ Configurer le portfolio
Ouvrir `script.js` et remplacer ligne 200-204 :

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'votre_clé_publique_ici',
    SERVICE_ID: 'votre_service_id_ici',
    TEMPLATE_ID: 'votre_template_id_ici'
};
```

### 6️⃣ Tester !
- Ouvrir votre portfolio
- Aller à la section Contact
- Remplir le formulaire
- Envoyer → Vous recevrez l'email ! 🎉

## 🎨 Personnalisation

### Modifier vos informations
**Fichier : `index.html`**

- **Nom et titre** : Ligne ~48-49
- **Photo de profil** : Ligne ~85 (remplacer l'URL)
- **Email de contact** : Ligne ~357
- **Liens sociaux** : Lignes ~369-371

### Ajouter des projets
**Fichier : `index.html`**

Dupliquer la structure `.project-card` (lignes ~202-222) :

```html
<div class="project-card">
    <div class="project-image">
        <img src="URL_DE_VOTRE_IMAGE" alt="Votre Projet">
        ...
    </div>
    <div class="project-content">
        <h3 class="project-title">Titre du Projet</h3>
        <p class="project-description">Description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technologie 1</span>
            <span class="tech-tag">Technologie 2</span>
        </div>
        <a href="#" class="btn btn-outline">Voir plus</a>
    </div>
</div>
```

### Modifier les compétences
**Fichier : `index.html`**

Modifier les sections `.skill-item` (lignes ~133-177) et ajuster les pourcentages dans `data-width`.

### Changer les couleurs
**Fichier : `styles.css`**

Modifier les variables CSS (lignes 2-15) :

```css
:root {
    --primary-color: #1a1a2e;      /* Couleur principale */
    --accent-color: #00d4ff;       /* Couleur d'accent */
    /* ... */
}
```

## 🌐 Hébergement Gratuit

### GitHub Pages
```bash
# 1. Créer un repo GitHub
# 2. Pousser les fichiers
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/votre-username/portfolio.git
git push -u origin main

# 3. Aller dans Settings → Pages
# 4. Sélectionner la branche main
# 5. Votre site sera sur : https://votre-username.github.io/portfolio
```

## 🛠️ Dépannage

### Le formulaire ne fonctionne pas
- ✅ Vérifiez que vous avez configuré EmailJS
- ✅ Vérifiez les IDs dans `script.js`
- ✅ Ouvrez la console du navigateur (F12) pour voir les erreurs

### Les animations ne fonctionnent pas
- ✅ Assurez-vous d'ouvrir avec un serveur web (pas en double-clic)
- ✅ Vérifiez que JavaScript est activé

### Message "EmailJS n'est pas configuré"
- ✅ C'est normal ! Suivez les étapes de configuration ci-dessus
- ✅ Le formulaire affichera quand même les données dans la console

## 📸 Aperçu

- **Design** : Minimaliste bleu nuit / turquoise
- **Sections** : Accueil, À propos, Compétences, Projets, Contact
- **Animations** : Fluides et modernes
- **Mobile-friendly** : Menu hamburger adaptatif

## 🤝 Support

Questions ? Consultez :
- [Documentation EmailJS](https://www.emailjs.com/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)



# imperialox.github.io
