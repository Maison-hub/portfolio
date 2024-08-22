---
title: "YouCloud"
description: "YouCloud est une application web innovante qui permet aux utilisateurs de stocker, partager et visualiser des fichiers 3D (stl, glb) en ligne. Développée avec PHP et Three.js, cette application offre une expérience utilisateur immersive et performante."
year: "2024"
date: "2024-04-13"
cover: "/img/projects/youcloud/thumbnail.png"
categories: ["front-end", "back-end", "PHP", "Three.js"] 
---

## Contexte de réalisation

YouCloud a été réaliser dans le cadre d'un projet étudiant (SAE) lors de ma deuxième année de BUT MMI. Réalisé seul sur 3 jours consécutifs.
L'objectif était de créer une application web permettant aux utilisateurs de stocker et de visualiser des fichiers 3Ds en ligne. L'idée était de fournir une plateforme simple et intuitive pour les créateurs de contenus 3D.

## Technologies utilisées

- **Slim PHP** : Un micro-framework Php qui permet de créer des applications web rapidement et facilement. Très bien documenté et facile à prendre en main.
- **Twig** : Un moteur de template pour PHP qui permet de séparer la logique de présentation de du logique métier.
- **Three.js** : Une bibliothèque Javascript qui permet de créer et d'afficher des graphiques 3Ds dans un navigateur web.
- **MySQL** : Un système de gestion de base de données relationnelle open source.
- **Docker** : Un outil de conteneurisation qui permet de créer, de déployer et de gérer des applications dans des conteneurs.

## Un projet très court

Le projet a été réalisé sur une durée de trois jours consécutifs. Les techniques utilisés étaient imposés par le sujet. J'ai donc decouvert le frame wok Slim PHP qui m'a permis de rapidement décrire mes routes et de les lier à des fonctions. Côté front nous avons dû utiliser Twig comme moteur de template qui a permis sur un temps très court de pouvoir très rapidement afficher les informations stockées en base de données. Pour la 3D nous avons utilisé Three js sur un projet vite appart qui une fois "build" était intégré à notre projet Slim PHP.

::img-gallery
---
images:
    - src: "/img/projects/youcloud/img/dashboard.png"
      bgpos: "object-bottom"
    - src: "/img/projects/youcloud/img/login.png"
      bgpos: "object-top"
---
::

## Apprentissage

Ce projet m'a permis d'apprendre beaucoup notamment sur la structure des projets backend et en particulier sur l'architecture. Le rendu rapide m'a permis d'appréhender la gestion des deadlines et de la pression dans un contexte de rogramation. J'ai également beaucoup échangé avec mes camarades de classe pour s'entraider et former des équipes pour avancer plus rapidement.

## Pistes d'amélioration

Avec plus de temps j'aurais aimé avoir une interface plus travailler avec plus d'animation. J'aurais également aimé ajouter des fonctionnalités de partage de fichiers et de visualisation de fichier 3D plus poussé. Un système tag et de trie sur les fichiers auraient également été un plus pour l'expérience utilisateur. Enfin avec un temps plus long j'aurais aimé travailler un peu plus sur la configuration docker pour permettre une mise en route du projet plus simple. Cependant je suis très satisfait du résultat qui répond parfaitement à la consigne du projet et même plus car mon application permet de visualiser des fichier STL et GLB alors que seule le stl était demandé.
