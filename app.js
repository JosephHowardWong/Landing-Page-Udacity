// GET ALL NEEDED DOM ELEMENTS
const navBar = document.querySelector('#navbar__list');

const topBtn = document.querySelector('.top-btn');

const collapseBtn = document.querySelectorAll('.collapse');

const sections = document.querySelectorAll('section');

const docFrag = document.createDocumentFragment();


//BUILD OUT UNORDERED LIST OF NAV ITEMS
sections.forEach(section => {
    const navLi = document.createElement('li');
    const anch = document.createElement('a');
    anch.innerHTML = section.getAttribute('data-nav');
    // anch.classList.add(nav-anch);
    anch.classList.add(section.id);
    anch.href = `#${section.id}`;
    navLi.appendChild(anch);
    docFrag.appendChild(navLi);
})

navBar.appendChild(docFrag);


// USE INTERSECTION OBSERVER TO ACTIVATE THE NAV ANCH AND SECTION IN VIEW
const options = {
    threshold: 0.6
}

let observer = new IntersectionObserver(activeSec, options);

function activeSec(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("your-active-class");
            activateSecNav(entry.target.id);
        }
        else {
            entry.target.classList.remove("your-active-class");
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
})


// ACTIVATE ANCH CORRESPONDING TO SECTION IN VIEW AND TOGGLE "GO TO TOP BUTTON"
const activateSecNav = anchId => {
    const anchList = document.querySelectorAll('a');
    anchList.forEach( anch => {
        if(anch.classList.contains(anchId)) {
            anch.classList.add("your-active-class");
        }
        else {
            anch.classList.remove("your-active-class");
        }
        if(anch.classList.contains("your-active-class") && !anch.classList.contains("home")) {
            topBtn.classList.add("your-active-class");
        }
        else if(anch.classList.contains("your-active-class") && anch.classList.contains("home")) {
            topBtn.classList.remove("your-active-class");
        }
    })
}


// ON ANCHOR CLICK, SMOOTH SCROLL TO SECTION
const anchors = document.querySelectorAll('#navbar__list a');

anchors.forEach(anchor=> {
    anchor.addEventListener('click',
        (e) => scrollToSec(e, anchor.classList[0]))
});

const scrollToSec = (e, anchId) => {
    e.preventDefault();
    const sec = document.querySelector(`#${anchId}`);
    sec.scrollIntoView({block: "end", behavior: "smooth"});
}


// SCROLL TO TOP BUTTON
const pgHead = document.querySelector('.page__header');

topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    pgHead.scrollIntoView({behavior: "smooth"});
})


// HIDE NAVBAR AFTER SCROLLING STOP (SHOULD BE VISIBLE AT TOP)
const nav = document.querySelector('nav');

const homeSec = document.querySelector('#home');

window.onscroll = () => {
    const coords = homeSec.getBoundingClientRect();
    if(coords.bottom < 500) {
        nav.classList.remove('no-show');
        setTimeout(() => nav.classList.add('no-show'), 2000);
    }
    if(coords.bottom >= 500) {
        setTimeout(() => nav.classList.remove('no-show'), 2000);
    }
}


// MAKE SECTIONS COLLAPSIBLE
const toggleSec = (e) => {
    e.preventDefault();
    sections.forEach(sec => {
        if(e.target.classList.contains(sec.id)) {
            sec.classList.toggle("sec-collapse");
        }
    })
}

collapseBtn.forEach( Btn => {
    Btn.addEventListener('click', toggleSec);
})