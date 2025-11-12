# 🎯 Guide Rapide - Portfolio Simplifié

## ✅ Projet Nettoyé !

Votre portfolio a été **simplifié** :
- ❌ Supprimé : 8 fichiers backend complexes
- ✅ Gardé : 4 fichiers essentiels
- 🎉 Résultat : Simple, rapide, fonctionnel !

## 📁 Structure Finale (4 fichiers)

```
portfolio/
├── index.html        ← Page web
├── styles.css        ← Design  
├── script.js         ← Animations + EmailJS
├── README.md         ← Documentation complète
└── start.sh          ← Script de démarrage (bonus)
```

## 🚀 Démarrage en 3 Secondes

### Méthode 1 : Script automatique
```bash
./start.sh
```

### Méthode 2 : Commande manuelle
```bash
python3 -m http.server 8080
```

Puis ouvrir : **http://localhost:8080**

## 📧 Envoi d'Emails (Configuration Requise)

### Pourquoi EmailJS ?
- ✅ **Aucun mot de passe** dans le code
- ✅ **Aucun backend** nécessaire
- ✅ **200 emails gratuits** par mois
- ✅ **5 minutes** de configuration

### Configuration en 3 Étapes

#### 1️⃣ Créer un compte
- Aller sur : https://www.emailjs.com/
- Cliquer sur **"Sign Up"**
- S'inscrire gratuitement

#### 2️⃣ Connecter votre email
- Cliquer sur **"Email Services"** → **"Add New Service"**
- Choisir **Gmail** (ou votre fournisseur)
- Se connecter à votre Gmail
- Noter le **Service ID** (ex: `service_abc123`)

#### 3️⃣ Créer un template
- Aller dans **"Email Templates"** → **"Create New Template"**
- Copier ce contenu :

**Sujet du template :**
```
Nouveau message - {{subject}}
```

**Contenu du template :**
```
Bonjour Yassine,

Nouveau message de {{from_name}} ({{from_email}})

Sujet: {{subject}}

Message:
{{message}}

---
Portfolio
```

- Sauvegarder
- Noter le **Template ID** (ex: `template_xyz789`)

#### 4️⃣ Récupérer votre clé
- Aller dans **"Account"** → **"General"**
- Copier votre **Public Key** (ex: `abc123xyz`)

#### 5️⃣ Configurer le portfolio
Ouvrir `script.js` et modifier les lignes **200-204** :

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'abc123xyz',           // ← Coller votre Public Key
    SERVICE_ID: 'service_abc123',      // ← Coller votre Service ID
    TEMPLATE_ID: 'template_xyz789'     // ← Coller votre Template ID
};
```

#### 6️⃣ C'est Prêt ! 🎉
- Recharger la page
- Tester le formulaire de contact
- Vous recevrez l'email !

## 🎨 Personnalisation Rapide

### Changer votre nom
**Fichier :** `index.html` **Ligne :** ~48
```html
<span class="name">VOTRE NOM</span>
```

### Changer votre photo
**Fichier :** `index.html` **Ligne :** ~85
```html
<img src="URL_DE_VOTRE_PHOTO" alt="Votre Nom">
```

### Changer votre email
**Fichier :** `index.html` **Ligne :** ~357
```html
<p>votre-email@example.com</p>
```

### Ajouter des projets
**Fichier :** `index.html` **Lignes :** ~202-222
Dupliquer le bloc `.project-card` et modifier le contenu.

## 🌐 Hébergement Gratuit

### GitHub Pages (Recommandé)
```bash
git init
git add .
git commit -m "Mon portfolio"
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
git push -u origin main
```
Puis activer GitHub Pages dans les settings du repo.

### Netlify (Le plus simple)
1. Aller sur https://www.netlify.com/
2. Glisser-déposer le dossier `portfolio`
3. C'est en ligne ! 🎉

## ❓ Questions Fréquentes

### Le formulaire affiche "EmailJS n'est pas configuré"
→ C'est normal ! Suivez les étapes de configuration ci-dessus.

### Dois-je mettre mon mot de passe Gmail ?
→ **NON !** EmailJS gère tout. Vous vous connectez UNE FOIS sur leur site.

### C'est vraiment gratuit ?
→ Oui ! 200 emails gratuits par mois. Largement suffisant pour un portfolio.

### Puis-je utiliser mon propre domaine ?
→ Oui ! Une fois hébergé, pointez votre domaine vers l'hébergement.

## 📖 Documentation Complète

Pour plus de détails, consultez **README.md**

## 🎉 Félicitations !

Votre portfolio est maintenant :
- ✅ Simple (4 fichiers)
- ✅ Moderne (design pro)
- ✅ Fonctionnel (emails réels)
- ✅ Sécurisé (pas de mot de passe dans le code)
- ✅ Gratuit (hébergement et emails)

**Bon développement ! 🚀**



