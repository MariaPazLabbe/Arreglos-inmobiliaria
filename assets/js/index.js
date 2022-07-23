
// Variables
const html = document.querySelector('.propiedades') 
const button = document.querySelector('.search') 
const rooms = document.querySelector('.rooms')
const min = document.querySelector('.min-meters') 
const max = document.querySelector('.max-meters') 
const total = document.querySelector('.py-3') 
let code = ''
let numZero = 0 
/*********************** Función Reutilizable ***************************************/
const dataProp = function (src, name, rooms, meters, description) {
  code += `<div class="propiedad"><div class="img" style=" background-image: url('${src}');"></div>
  <section>
  <h5>${name}</h5>
  <div class="d-flex justify-content-between">
  <p>Cuartos: ${rooms}</p>
  <p>Metros: ${meters}</p>
  </div>
  <p class="my-3">${description}</p>
  <button class="btn btn-info">Ver más</button>
  </section>
  </div>`
}
const setview = function (click, roomsSearch, minSearch, maxSearch) {
  /*********************** Condiciones ***************************************/
  if (
    click === 'Search' &&
    (rooms.value === '' || min.value === '' || max.value === '')
  ) {
    alert('Error: Debes ingresar todos los parámetros de búsqueda')
    return

  } else if (min.value > max.value) {
    alert('Error: El mínimo de metros no puede ser mayor a máximo de metros')
    return
  } else {

    code = ''
    html.innerHTML = ''
    numZero = 0

    //filter
    let Properties = propiedadesJSON.filter(
      ({ rooms, meters }) =>
        rooms >= roomsSearch &&
        meters >= minSearch &&
        meters <= maxSearch
    )
    for (let p of Properties) {
      numZero = numZero + 1
      dataProp(p.src, p.name, p.rooms, p.meters, p.description)
    }
    html.innerHTML = code
    total.innerHTML = `Total: ${numZero}`
  }
}
/************* Activación del botón ********************/
button.addEventListener('click', () => {
  setview('Search', rooms.value, min.value, max.value)
})
setview('noSearch', -Infinity, -Infinity, Infinity)
