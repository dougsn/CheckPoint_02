/*************************************************************************
**************************************************************************
                              Animação do Scroll
**************************************************************************
**************************************************************************
*/

// Cadastro

ScrollReveal({
  reset: false /*Caso queira que a animação do scroll fique tanto na descida quanto na subida, trocar para true */,
  distance: '60px',
  duration: 2500,
  delay: 400
})

ScrollReveal().reveal('.form', {
  delay: 200,
  origin: 'left'
})

ScrollReveal().reveal('.turisticos', {
  delay: 900,
  origin: 'top'
})

ScrollReveal().reveal('.fotos', {
  delay: 900,
  origin: 'bottom'
})

// Princial

ScrollReveal().reveal('.video', {
  delay: 300,
  origin: 'left'
})

ScrollReveal().reveal('.sobre', {
  delay: 300,
  origin: 'left'
})

ScrollReveal().reveal('.contato', {
  delay: 500,
  origin: 'left'
})
