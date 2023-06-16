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
else{
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
}