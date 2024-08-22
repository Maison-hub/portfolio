---
title: "Velostan"
description: "Ce projet est un site web fictif qui a pour but donner des informations sur les vélos en libre accès de la ville de Nancy. Ce projet a été réalisé dans le cadre de mes études de BUT MMI. En binôme nous avons créé un site web actualisé en temps réel et renseignant sur la disponibilité des vélos cela en abordant de nouvelles problématiques."
year: "2022"
date: "2022-05-01"
cover: "/img/projects/velostan/thumbnail.png"
categories: ["Javascript", "API"] 
---
## Contexte

Les SAE (Situations d'apprentissage et d'évaluation) sont les projets majeurs à réaliser en BUT. Ce projet est le résultat de la SAE 105 un projet majeur qui met en relation différentes matières telles que le développement web, l'intégration ou encore l'hébergement

## Webdesign

Avant de passer au développement j'ai réalisé une maquette de la page d'accueil. Cela a permis de fixer le style et un pseudo charte graphique/design système. Nous avons donc grace à cette maquette réalisé un site web cohérent dans son ensemble

## Les problématiques

::image-Text
---
image:
    src: "/img/projects/velostan/img/select-stations.png"
    description: "Selection d'une station"
    bgpos: "object-top"
    width: "w-[50%]"
textPosition: "left"
---
Ce projet nous a permis de nous confronter à des problématiques nouvelles. La principale difficulté était l'accès aux données en temps réel. Nous avons utilisé pour cela la fonction \"fetch\" en Javascript. Cela nous a permis de récupérer les données d'un fichier json diffusées par le ministère des transports. Une fois ces données récupérées nous les avons traité et organisé pour les rendre à l'utilisateur de manière agréable. La seconde problématique était l'implémentation d'une carte et l'affichage de marker pour localiser les stations. Pour ce faire nous avons utilisé open Street map et nous avons placé les stations grace à leur longitude et latitude. Enfin nous avons implémenté un algorithme qui calcule la station la plus proche de vos grâce à votre localisation.
::

## Responsive

En raison des fonctionnalités de localisation et de recherche de station nous avons pensé que la majorité des utilisateurs serait sur le mobile c'est pourquoi le site a été pensé pour être responsive. Nous avons implémenté une barre de navigation inférieure sur mobile et nous avons utilisé des unités relatives en CSS: Vw, Vh, %.

::img-gallery
---
images:
    - src: "/img/projects/velostan/img/mobile/home.png"
      bgpos: "object-top"
    - src: "/img/projects/velostan/img/mobile/map.png"
      bgpos: "object-bottom"
    - src: "/img/projects/velostan/img/mobile/contact.png"
      bgpos: "object-top"
---
::

## Fonctionalité supplémentaire

Nous avons décidé de rajouter un mode clair au site. Un petit challenge qui dépasse le \"cahier des charges\" mais qui nous ont permis d'en apprendre plus sur la manipulation des variables Css.

::img-gallery
---
images:
    - src: "/img/projects/velostan/img/switch.png"
      bgpos: "object-bottom"
    - src: "/img/projects/velostan/img/light-map.png"
      bgpos: "object-top"
---
::

## L'Hebergement

Comme l'indiquait les consignes nous avons hébergé le site sur le serveur pédagogique Webetu. Nous avons établi une connexion au serveur en SFTP avec FileZilla ce qui nous ont permis de transférer les fichiers. Cependant l'accès au site par navigateur nécessite un login à l'université j'ai donc également hébergé le site sur git hub.

## Apport personnel

Ce projet m'a permis de découvrir l'utilisation de fichier json, l'intégration d'une carte sur un site web, l'utilisation des autos layout dans figma. En général ce projet m'a rendu plus à l'aise avec l'utilisation de figma et l'intégration de maquette. Enfin j'ai exploré là responsive avec l'implémentation d'un menu mobile.
