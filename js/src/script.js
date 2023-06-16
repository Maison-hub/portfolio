const container = document.getElementById("projetContainer")
let hoverableEl = document.querySelectorAll('.hoverable');



//detect if is a mobile device
if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    document.querySelector('.dot').style.display = "none";
    document.querySelector('.circle').style.display = "none";
}

fetch('data.json')
.then(response => response.json())
.then(data => {
    const projetKey = Object.keys(data)

    projetKey.forEach(projetName => {
        let currProject = data[projetName]
        container.innerHTML += 
        `
        <a class="projetContent hoverable visitable" href="${currProject.lien}">
            <div class="txt">
                <div class="head">
                    <h3>${currProject.titre}</h3>
                    <div class="date">
                        ${currProject.date}
                    </div>
                </div>
                <div class="mission">
                    ${currProject.mission}
                </div>

                <div class="description">
                    ${currProject.description}
                </div>
                <div class="arrow">
                    <img src="./asset/homepage/prjArrow.svg" alt="">
                </div>
            </div>

            <img class="cover"  src="${currProject.cover}" alt="">
        </a>
        `
    });
    hoverableEl = document.querySelectorAll('.hoverable');
    hoverableEl.forEach(el => {
        el.addEventListener('mouseenter', () => {
            circle.classList.add('active');
            dot.classList.add('active');
        })
        el.addEventListener('mouseleave', () => {
            circle.classList.remove('active');
            dot.classList.remove('active');
        })
    })

    let visitable = document.querySelectorAll('.visitable');
    visitable.forEach(el => {
        el.addEventListener('mouseenter', () => {
            circle.classList.add('active');
            dot.classList.add('visitable');
        })
        el.addEventListener('mouseleave', () => {
            circle.classList.remove('active');
            dot.classList.remove('visitable');
        })
    })

});

// let circle = document.querySelector('.purpleBg')

// document.addEventListener('mousemove', parallax);


// function parallax(e){

//         const x = (window.innerWidth = e.pageX*15)/200
//         const y = (window.innerHeight = e.pageY*15)/200

//         circle.style.transform = `translateX(${x}px) translateY(${y}px)`
// }


// let mouseFollow = document.querySelector('.mouseFollower');
let dot = document.querySelector('.dot');
let circle = document.querySelector('.circle');

const onMouseMove = (e) =>{
    // mouseFollow.style.left = e.pageX + 'px';
    // mouseFollow.style.top = e.pageY + 'px';
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);

document.addEventListener('mousemove', parallax);

let purpleBg = document.querySelector('.purpleBg')

function parallax(e){

    const x = (window.innerWidth = e.pageX*15)/100
    const y = (window.innerHeight = e.pageY*15)/100

    purpleBg.style.transform = `translateX(${x}px) translateY(${y}px)`
}