const body = document.getElementById("body");
let navIcon = document.querySelector('.nav__icon');
const colorBtns = document.querySelectorAll('.hero-right__btn-color')

function navMenu () {
  body.querySelector("header").classList.toggle("nav__menu")
  navIcon.classList.toggle("open__icon");
}

function changeColorDark () {
  body.classList.toggle("dark");
  body.classList.remove("blue");
  body.classList.remove("white");
}

const clearClassBody = () => {
  colorBtns.forEach(btn => {
    body.classList.remove(btn.dataset.color)
  })
}

colorBtns.forEach(btn => {
 btn.addEventListener('click', evt => {
  clearClassBody()

  body.classList.add(evt.target.dataset.color)
})
})

document.querySelector('.desktop-btn').addEventListener('click', evt => {

document.querySelector('#desktopModal').innerHTML = `
  <div class="modal-dialog mx-auto">
  <div class="modal-content">
    <div class="modal-body">
      <div class="project-modal__box desktop-modal__box d-flex"></div>
    </div>
  </div>
  </div>
`
projectsDesktop.forEach(el => {
  const link = document.createElement('a')
  link.classList.add('project-modal__link')
  link.setAttribute('href', el.link)
  link.setAttribute('target', '_blank')
  link.innerHTML = `
    <img class="project-modal__img" src="${el.img}" width={300} height={250} alt="img ${el.title}" />
  `
  document.querySelector('.desktop-modal__box').appendChild(link)
  })
})

document.querySelector('.tablet-btn').addEventListener('click', evt => {

document.querySelector('#tabletModal').innerHTML = `
  <div class="modal-dialog mx-auto">
  <div class="modal-content ">
    <div class="modal-body">
      <div class="project-modal__box tablet-modal__box d-flex"></div>
    </div>
  </div>
  </div>
`
projectsTablet.forEach(el => {
  const link = document.createElement('a')
  link.classList.add('project-modal__link')
  link.setAttribute('href', el.link)
  link.setAttribute('target', '_blank')
  link.innerHTML = `
    <img class="project-modal__img" src="${el.img}" width={300} height={250} alt="img ${el.title}" />
  `
  document.querySelector('.tablet-modal__box').appendChild(link)
  })
})

document.querySelector('.mobile-btn').addEventListener('click', evt => {

document.querySelector('#mobileModal').innerHTML = `
  <div class="modal-dialog mx-auto">
  <div class="modal-content ">
    <div class="modal-body">
      <div class="project-modal__box mobile-modal__box d-flex"></div>
    </div>
  </div>
  </div>
`

projectsMobile.forEach(el => {
  const link = document.createElement('a')
  link.classList.add('project-modal__link')
  link.setAttribute('href', el.link)
  link.setAttribute('target', '_blank')
  link.innerHTML = `
    <img class="project-modal__img" src="${el.img}" width={300} height={250} alt="img ${el.title}" />
  `
  document.querySelector('.mobile-modal__box').appendChild(link)
  })
})
