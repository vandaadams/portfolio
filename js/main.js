

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
  // adds active class to navlink when section scrolls in
  .on('enter', section => {
    scrollLinks.forEach(link => {
      if ('#' + section.id === link.getAttribute('href')) {
        link.parentElement.classList.add('active')
      }
    });
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
