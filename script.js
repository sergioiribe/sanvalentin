var isAnimating = false

function toggleFold() {
  if (isAnimating) {
    return
  }

  isAnimating = true

  var hoja = document.getElementById('hoja')
  hoja.classList.toggle('folded')
  linea.style.display = 'block'
}
