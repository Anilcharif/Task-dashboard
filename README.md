# 🗂️ Task Planner – Organise tes journées entre études, dev et perso

Un outil simple et efficace développé en **Next.js** pour planifier ses tâches quotidiennes.  
Pensé comme un vrai outil du quotidien : clair, rapide et utilisable sans compte ni backend.  
Les données sont enregistrées automatiquement dans le navigateur (localStorage).

---

## 🖼️ Aperçu

Ajoute ton fichier `capture01.png` à la racine du projet pour afficher la capture ici :

![Dashboard du Task Planner](./capture01.png)

---

## 🎯 Objectif du projet

Task Planner permet d’organiser sa journée en séparant clairement :

- les **tâches d’études**  
- les **tâches de développement / projets**  
- les **tâches personnelles**

C’est un outil pensé pour être **ouvert chaque matin**, ajouter 3 à 5 priorités,  
et cocher au fur et à mesure ce que tu termines.

---

## 🚀 Fonctionnalités

### ✔️ Ajouter une tâche
- Titre  
- Catégorie (Études / Dev / Perso)  
- Notes (optionnelles)  
- Échéance (date)

### ✔️ Filtrer
- Par catégorie  
- Par statut : *À faire* / *Terminé*

### ✔️ Gérer
- Marquer terminé  
- Remettre en cours  
- Supprimer une tâche  

### ✔️ Sauvegarde automatique
- Persistance via **localStorage**  
- Aucune base de données nécessaire  
- Tout fonctionne en local

---

## 🧠 Stack technique

- **Next.js 14 (App Router)**
- **React**
- **LocalStorage**
- **Hooks personnalisés**
- **CSS custom** (UI sombre moderne)

Structure du code :

```
app/
  page.tsx
  globals.css

components/
  TaskForm.tsx
  TaskList.tsx
  TaskItem.tsx
  FilterBar.tsx
  useTasks.ts
```

---

## 📦 Installation

```bash
npm install
npm run dev
```

Puis ouvre :  
➡️ http://localhost:3000

---

## 🎓 Pourquoi ce projet est pertinent pour un recruteur ?

- Montre ta maîtrise de **Next.js**, **React**, **hooks**, **gestion du state**  
- UI propre et professionnelle  
- Structure claire, composants bien séparés  
- Fonctionnalités réelles, utiles au quotidien  
- Projet simple mais **complet** (features, logique, persistance)

Ce n’est pas une démonstration vide :  
c’est un **vrai petit outil** qui prouve ta capacité à faire quelque chose d’utilisable.

---

## 📄 Licence

Projet personnel – libre d’utilisation.
