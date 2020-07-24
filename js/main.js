// Scrolls into section when navlink is clicked

const scrollLinks = document.querySelectorAll('.scroll')

scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const href = link.getAttribute('href')
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  })
});

// active class for navbar links
// https://github.com/camwiegert/in-view

inView('.section')
  .on('enter', section => {
    // adds active class to navlink when section scrolls in
    scrollLinks.forEach(link => {
      if ('#' + section.id === link.getAttribute('href')) {
        link.parentElement.classList.add('active')
      }
    });
    // makes footer visible on all sections but home
    if (section.id != 'home') {
      document.getElementById('footer').classList.add('visible')
    } else if (section.id == 'home') {
      document.getElementById('footer').classList.remove('visible')
    }
  })
  // removes active class from navlink when section scrolls out
  .on('exit', section => {
    scrollLinks.forEach(link => {
      if ('#' + section.id === link.getAttribute('href')) {
        link.parentElement.classList.remove('active')
      }
    });
  })

  inView.threshold(0.5);

// Adds styling to active navlink

// const navLinks =  document.querySelectorAll('a')
//
// navLinks.forEach(link => {
//   link.addEventListener('click', (event) => {
//     const items = document.querySelectorAll('.nav-item')
//     items.forEach(e => {
//       e.classList.remove('active')
//     })
//     link.parentElement.classList.add('active')
//   })
// });

const carouselItems = document.querySelectorAll('.carousel-item')
const total = carouselItems.length;
const moveRight = document.getElementById('moveRight')
const moveLeft = document.getElementById('moveLeft')
let current = 0;

carouselItems.forEach(item => {
  // sets first element as active
  if(item === carouselItems[0]) {
    item.classList.add('active-item')
  }
});

moveRight.addEventListener('click', (event) => {
  // declares next element by adding 1 to current element
  let next = current;
  current += 1;
  setSlide(next, current);
})

moveLeft.addEventListener('click', (event) => {
  // declares previous element by removing 1 from current element
  let prev = current;
  current -= 1;
  setSlide(prev, current);
})

function setSlide(prev,next) {
  // sets first and last element for infinite slide
  let slide = current
  if (next > total-1) {
    slide = 0;
    current = 0;
  } else if (next < 0) {
    slide = total - 1;
    current = total - 1;
  }

  // removes active class from previous carousel item
  // adds active class to current carousel item
  carouselItems[prev].classList.remove('active-item')
  carouselItems[current].classList.add('active-item')
}


window.addEventListener('scroll', event => {

});
