# Template Portfolio

<img width="1120" alt="image" src="https://github.com/Maison-hub/portfolio/assets/73071779/b7324e7c-97e1-4bca-84d9-b6f3a129cad0">

## Basé sur HTML, CSS et JavaScript

Le template est entièrement personnalisable et repose principalement sur un fichier Json vous pouvez l'utiliser a condition de laisser un lien vers le repository github :)

### Get Started

>**Note** <br>
>Pour fonctionner le template doit être heberger pour que le `URLSearchParams` puisse fonctionner.


Pour modifier la page d'accueil accedez au fichier `index.html` et modifiez le texte dans les balises.

>**Warning**<br>
>ne pas toucher a la balise vide avec la classe projectContainer

```html
<section class="projetContainer" id="projetContainer">
    <!-- ici seront inseré les projets  -->
</section>
```
Cette balise contient les projet que vous allez rensignez depuis le fichier `data.json`

Maintenant vous pouvez modifier le fichier `data.json` pour ajouter vos propre projet.

Voici a quoi ressemble un projet 

```json
"Project-Name": {
    "titre": "Project Name",
    "date": "2023",
    "mission": "DEV WEB",
    "description": "Desciption of the project",
    "cover": "./image/Project-Name.png",
    "lien": "./projet.html?name=Project-Name",
    "projectLink": "https://project.com",
    "sections": [
    // Array des section sur la page produit voir a section 'Section' du README
    ]
}
```

Ajoutez les informations de votre projets dans les champs prévu 



>**Note**<br>
>Le projectLink doit être un lien vers une page web et non vers un fichier html.

>**Warning**<br>
>La valeure de name= dans le lien doit être identique a la valeure de la clé du projet dans le fichier `data.json`

### Section

Les sections sont les différentes parties qui apparaterons sur la page `projet.html`. La parie section est un tableau d'objet qui contient les **elements qui compose la section** (text, image, ...). Chaque section est composé de 2 champs `type` et `element`.

```json
"type": "rightImg", //type 
"elements": [
// Array des elements de la section voir a section 'Element' du README
]
```
`elements` est un tableau d'objet qui contient les elements qui seront affiché dans la section. Vous pouvez retrouver la liste des elements dans la section `Element` du README.

`type: ` correspond au type de section que vous voulez afficher. Il existe differend types de section en voici la liste

| type:   | effet        | 
| :--------------- |:---------------|
| leftImg  |   place l'image a gauche et le texte a droite      |
| rightImg  | place l'image a droite et le texte a gauche         | 
| fullImage | place l'image au centre (ne pas mettre d'elements text dans cette section)          |
|  imageGal       | Creé une galerie d'image (il faut lui donner au moins 2 images en élements)           |

### Element

Les elements sont les différentes parties qui apparaterons sur la page `projet.html`. La parie element est un tableau d'objet qui contient les elements. Chaque element est composé de 2 champs `type` et `content`.

_exemple d'élement_
```json
{
    "type": "paragraphe",
    "content" : "Lorem ipsum dolor sit amet"
}
```	
Le champ `content` est le contenu de l'element. Il dépend du type de l'element. Par exemple pour un element paragraphe il s'agit du text a afficher tandis que pour une image il correspond au chemin de l'image.

Le type de l'element correspond au type de l'element que vous voulez afficher. Il existe differend types d'element en voici la liste avec leur content correspondant : 

| type:   | content        | rendu       |
| :--------------- |:---------------|:---------------|
| paragraphe |  le contenu de votre paragraph  | affiche un paragraph de text     |
| titre | le texte de votre titre  |  affiche un titre |
|  figma      | code HTML iframe donné par figma   | un embed de votre fichier figma |

| type:   | content     |orientation  | rendu |
| :--------------- |:---------------|:---------------|:----------------|
| img  | chemin d'accès a votre image| portrait ou paysage | affiche une image  |

>**Note**<br>
>Il est conseillé de mettre un element de type figma dans une section de type `fullImg` pour avoir un rendu en full width sur votre page


### Classe spéciale

#### hoverable
Le template dispose d'un curseur qui suit le déplacement de la souris. Le courseur personalisé devient plus gros au survol d'un lien. Pour gérer les element sur lesquels le curseur doit changer de taille il faut ajouter la classe `hoverable` a l'element.

#### visitable
Lorsque vous survolez un projet le curseur s'agrandit et le texte `visite` apparait cela est du a la présence de la classe `visitable`








