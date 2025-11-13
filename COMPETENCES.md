# 🛠 Section Compétences - Nouvelle Présentation

## 📋 Vue d'ensemble

La section Compétences a été complètement refaite avec un design en **grille de 9 cartes** modernes et professionnelles.

## ✨ Caractéristiques

### Design des Cartes

Chaque carte de compétence contient :
1. **Logo** : Grande icône colorée en haut (80x80px)
2. **Titre** : Nom de la compétence en gras
3. **Description** : Texte détaillé expliquant l'expertise

### Animations et Effets

- ✅ **Apparition en cascade** : Les cartes apparaissent une par une (décalage de 100ms)
- ✅ **Hover 3D** : Les cartes se soulèvent et s'agrandissent au survol
- ✅ **Rotation du logo** : L'icône tourne à 360° au survol
- ✅ **Barre supérieure** : Une barre turquoise animée apparaît en haut au survol
- ✅ **Ombre dynamique** : L'ombre s'intensifie au survol

### Disposition

```
┌─────────┬─────────┬─────────┐
│ Card 1  │ Card 2  │ Card 3  │
├─────────┼─────────┼─────────┤
│ Card 4  │ Card 5  │ Card 6  │
├─────────┼─────────┼─────────┤
│ Card 7  │ Card 8  │ Card 9  │
└─────────┴─────────┴─────────┘
```

**Grille responsive** :
- **Desktop** : 3 colonnes (min 320px par carte)
- **Tablette** : 2 colonnes
- **Mobile** : 1 colonne

## 🎯 Les 9 Compétences

### 1. Programmation Embarquée
- **Icône** : `fas fa-microchip`
- **Focus** : C/C++, Python, STM32, ESP32, Arduino, protocoles (UART, SPI, I2C, CAN)

### 2. Robotique
- **Icône** : `fas fa-robot`
- **Focus** : Robots autonomes, navigation, contrôle moteur, capteurs

### 3. Intelligence Artificielle
- **Icône** : `fas fa-brain`
- **Focus** : TensorFlow Lite, vision par ordinateur, reconnaissance d'objets

### 4. IoT & Réseaux
- **Icône** : `fas fa-wifi`
- **Focus** : MQTT, WiFi, LoRa, Bluetooth, architectures distribuées

### 5. Traitement du Signal
- **Icône** : `fas fa-wave-square`
- **Focus** : Filtrage, FFT, traitement d'images, applications audio/vision

### 6. Modélisation SysML/UML
- **Icône** : `fas fa-project-diagram`
- **Focus** : Ingénierie système, statecharts, diagrammes, validation temps réel

### 7. Électronique & PCB
- **Icône** : `fas fa-memory`
- **Focus** : Circuits imprimés, schématique, routage, prototypage

### 8. Interfaces Graphiques Qt
- **Icône** : `fas fa-desktop`
- **Focus** : Qt/C++, IHM, applications desktop, tableaux de bord temps réel, supervision

### 9. Systèmes Temps Réel
- **Icône** : `fas fa-clock`
- **Focus** : FreeRTOS, Zephyr, ordonnancement, synchronisation

## 🎨 Styles CSS

### Variables Utilisées
```css
--gradient-accent: linear-gradient(135deg, #00d4ff, #0099cc)
--text-primary: #1a1a2e
--text-secondary: #4a4a68
```

### Classes Principales
- `.skills-grid` : Conteneur de la grille
- `.skill-card` : Carte individuelle
- `.skill-icon-large` : Icône en haut
- `.skill-title` : Titre de la compétence
- `.skill-description` : Texte descriptif

## 📱 Responsive

### Desktop (> 1024px)
- 3 cartes par ligne
- Icônes 80x80px
- Padding 40px

### Tablet (768px - 1024px)
- 2 cartes par ligne
- Espacement réduit

### Mobile (< 768px)
- 1 carte par ligne
- Icônes 70x70px
- Padding 30px
- Texte réduit

## 🔄 Modifications Effectuées

### Fichiers Modifiés
1. **index.html** : Structure HTML complètement refaite
2. **styles.css** : Nouveaux styles pour `.skill-card`
3. **script.js** : Animation `animateSkillCards()` au lieu de `animateSkillBars()`

### Supprimé
- ❌ Anciennes barres de progression
- ❌ Catégories (Programmation, Matériel, Spécialités)
- ❌ Animation `fillBar`

### Ajouté
- ✅ Grille de 9 cartes
- ✅ Descriptions détaillées
- ✅ Animations au hover
- ✅ Apparition en cascade

## 🚀 Comment Modifier

### Changer une Description
Dans `index.html`, modifiez le texte dans `.skill-description` :
```html
<p class="skill-description">
    Votre nouvelle description ici...
</p>
```

### Changer une Icône
Remplacez la classe FontAwesome :
```html
<i class="fas fa-votre-nouvelle-icone"></i>
```

Liste d'icônes : https://fontawesome.com/icons

### Ajouter une Compétence
Copiez un bloc `.skill-card` et modifiez son contenu.

### Changer les Couleurs
Dans `styles.css`, modifiez :
```css
.skill-icon-large {
    background: var(--gradient-accent); /* Changez cette ligne */
}
```

## ✅ Résultat

✨ **Design moderne et professionnel**
🎯 **9 compétences clairement présentées**
📱 **100% responsive**
⚡ **Animations fluides et élégantes**

