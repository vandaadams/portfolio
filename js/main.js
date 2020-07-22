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


// Adds styling to active navlink 

const navLinks =  document.querySelectorAll('a')

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const items = document.querySelectorAll('.nav-item')
    items.forEach(e => {
      e.classList.remove('active')
    })
    link.parentElement.classList.add('active')
  })
});
