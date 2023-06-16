const container = document.querySelector('#background')

const urlParams = new URLSearchParams(window.location.search);
      const projetId = urlParams.get('name');
      // Chargez les données JSON correspondantes
      fetch('data.json')
        .then(response => response.json())
        .then(data => {
          const projet = data[projetId];
          const arrSections = projet["sections"];
          document.title = projet.titre + " - " + projet.date;
          arrSections.forEach(section => {
            const newSection = document.createElement("section");
            const divContent = document.createElement("div")
            section.elements.forEach(element => {
              let newElement
              if(element.type == "paragraphe"){
                newElement = paragraph(element.content)
                divContent.appendChild(newElement)
              }              
              else if(element.type == "titre"){
                newElement = titre(element.content);
                let line = document.createElement("span");
                line.classList.add("titleSeparator");
                newSection.prepend(line);
                newSection.prepend(newElement);
              }
              else if(element.type == "img"){
                newElement = image(element.content, element.orientation);
                divContent.appendChild(newElement);
              }
              else if(element.type == "figma"){
                divContent.innerHTML += element.content
                console.log(element.content)
              }
            });
            newSection.appendChild(divContent)
            newSection.classList.add(section.type)
            container.appendChild(newSection)
          });
          // Remplissez les zones correspondantes de la page template
          document.querySelector('#titre').innerHTML = projet.titre + " - " + projet.date;
          document.querySelector('#description').innerHTML = projet.description;
          document.querySelector("#cover").src = projet.cover
          document.querySelector('#mission').innerHTML =`mission: ${projet.mission}`

          if(projet.projectLink !== undefined){
            document.querySelector('.content').innerHTML += `
            <div class="mainBtn">
              <a href="${projet.projectLink}" target="_blank">Voir le projet ${projet.titre}</a>
              <div class="arrow">
                <div class="line"></div>
                <img src="./asset/arrow.svg" alt="">
              </div>
            </div>`
          }
          
          function titre(content){
            const h2 = document.createElement("h2");
            h2.textContent = content
            return h2
          }

          function paragraph(content){
            const p = document.createElement("p");
            p.textContent = content
            return p
          }

          function image(src, orientation){
            const img = document.createElement("img");
            img.src = src
            img.classList.add(orientation)
            img.classList.add("hoverable")
            hoverableEl = document.querySelectorAll('.hoverable');
            img.addEventListener('mouseenter', () => {
                circle.classList.add('active');
                dot.classList.add('active');
            })
            img.addEventListener('mouseleave', () => {
                circle.classList.remove('active');
                dot.classList.remove('active');
            })
            return img
          }

          //afficher les images en grand lors du click
          let imgEl = document.querySelectorAll('img');
          imgEl.forEach(el => {
              el.addEventListener('click', () => {
                  let imgSrc = el.getAttribute('src');
                  let body = document.querySelector('body');
                  let fullImg = document.createElement('div');
                  fullImg.classList.add('fullImg');
                  let close = document.createElement('div');
                  close.classList.add('close');
                  let closeImg = document.createElement('img');
                  closeImg.src = './asset/cross.svg';
                  close.appendChild(closeImg);
                  let img = document.createElement('img');
                  img.src = imgSrc;
                  img.classList.add('lgImg');
                  fullImg.appendChild(close);
                  fullImg.appendChild(img);
                  body.appendChild(fullImg);
                  console.log(fullImg)
                  fullImg.addEventListener('click', () => {
                      body.removeChild(fullImg);
                  }
                  )
              })
          })


        });
