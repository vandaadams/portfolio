// scrolls into section when navlink is clicked

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

// https://github.com/camwiegert/in-view

inView('.section')
  .on('enter', section => {
    // adds active class to navlink when section scrolls in
    scrollLinks.forEach(link => {
      if ('#' + section.id === link.getAttribute('href')) {
        link.parentElement.classList.add('active')
      }
    });
    // fades in section
    document.querySelector('.' + section.id).classList.remove('hidden')
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
    // fades out section
    document.querySelector('.' + section.id).classList.add('hidden')
  })

  inView.threshold(0.5);


// --------------------------------------------------- //
// Adds active styling to active navlink

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
// --------------------------------------------------- //

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

setSlide = (prev,next) => {
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

// --------------------------------------------------- //
// sections fade in on scroll
// window.addEventListener('scroll', event => {
//   const pageTop = window.scrollY;
//   const height = window.innerHeight;
//   const pageBottom = pageTop + height;
//   const sections = document.querySelectorAll('.section')
//
//   // gets pageTop value of an element
//   getPositionY = (element) => {
//     const rect = element.getBoundingClientRect();
//     return rect.y
//   }
//
//   makeVisible = () => {
//     for (let i = 0; i < sections.length; i++) {
//       const section = sections[i]
//       const sectionTop = getPositionY(section)
//       // fades in section when scrolled down to 33% of the window
//       if (sectionTop < pageBottom * 0.5) {
//         section.classList.remove('hidden')
//       } else {
//         section.classList.add('hidden')
//       }
//     }
//   }
//   // setTimeout(makeVisible(), 500);
// });
// --------------------------------------------------- //
