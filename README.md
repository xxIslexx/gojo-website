# 🌀 Gojo Scroll Animation

Un projet d’animation web inspiré de la hype autour de la page de lancement de **GTA 6**, revisité avec l’univers de **Jujutsu Kaisen**.

🖥️ Démo en ligne : [https://gojo-animation.netlify.app](https://gojo-animation.netlify.app)

---

## 📌 À propos

Ce mini-site rend hommage au personnage de **Satoru Gojo** à travers un effet de **scroll animé image par image**, à la manière d’un trailer.  
J’ai voulu reproduire l’effet **cinématographique en plein écran** qu’on a pu voir sur la page officielle de GTA VI, mais avec Gojo parce que… bah c’est Gojo.

---

## 🛠️ Tech utilisées

- **HTML + Tailwind CSS** – mise en page responsive rapide
- **JavaScript (GSAP + ScrollTrigger)** – animation fluide basée sur le scroll
- **After Effects + export PNG/WebP** – pour créer les séquences animées
- **Netlify** – pour l’hébergement simple et rapide

---

## 📁 Structure du projet

```bash
/
├── index.html              # Structure de la page
├── gojo.js                 # Animations GSAP et ScrollTrigger
├── intro/                  # Séquence image par image d'intro
├── vid3/, vid4/            # Autres animations scrollées
├── img/                    # Images statiques
