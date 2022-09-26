//Agrregando EVENTOS

//OBJETO - clase constructora
class farmacia{
    constructor(id, laboratorio, producto, precio,imagen){
        this.id = id,
        this.laboratorio = laboratorio,
        this.producto = producto,
        this.precio = precio,
        this.imagen = imagen
    }//metodo
    verDatos(){        
        console.log(`En nuestro sistema encontramos:\nID: ${this.id}\nLABORATORIO: ${this.laboratorio}\nPRODUCTO: ${this.producto}\nPRECIO DE COSTO: ${this.precio}\n IMAGEN:${this.imagen}`)
    }
}
class sucursales{
    constructor(direccion, zona, telefono, imagen){        
        this.direccion = direccion,
        this.zona = zona,
        this.telefono = telefono
        this.imagen = imagen
    }//metodo
    verZona(){
        console.log(`Visita nuestras sucursales:\nNOMBRE: Farmacia Ivo\nZONA: ${zona}\nDIRECCIÓN: ${direccion}\nTELEFONO: ${telefono}`)
    }
}
//Instanciación de Objetos - PRODUCTOS DE FARMACIA Y SUCURSALES
//PRODUCTOS
const producto1 = new farmacia(0, "Bagó", "Tafirol", 250, "tafirol.jpg")

const producto2 = new farmacia(1, "Bagó", "Ibupirac", 450, "ibupirac.png")

const producto3 = new farmacia(2, "Bayer", "Bayaspirina", 455, "bayaspirina.jpg")

const producto4 = new farmacia(3, "Roemmers", "Amoxidal", 950, "amoxi.png")

const producto5 = new farmacia(4, "Cassara", "Betacort Plus", 700, "betacor.jpg")

const producto6 = new farmacia(5, "Ciccarelli", "Agua Oxigenada", 150, "agua.png")

const producto7 = new farmacia(6, "Ciccarelli", "Gazas", 280, "gazas.jpg")

const producto8 = new farmacia(7, "Medigen", "Salbutamol", 550, "salbutam.jpg")

const producto9 = new farmacia(8, "Porta", "Bi Alcohol 500ml", 700, "alcoho.jpg")

const producto10 = new farmacia(9, "Bayer", "Merthiolate", 400, "merthi.jpg")

const producto11 = new farmacia(10, "Elea", "Alernix Rapida Acción", 325, "alernix.png")

//SUCURSALES
const sucursal1 = new sucursales("Bajada Puccio 1552", "NORTE", 4251236, "sucursal.png")

const sucursal2 = new sucursales("Arijon 155 Bis", "SUR", 4125842, "sucursal.png")

const sucursal3 = new sucursales("Entre Ríos 729", "CENTRO", 4568523, "sucursal.png")

const sucursal4 = new sucursales("Pellegrini 6523", "OESTE", 4362145, "sucursal.png")

const sucursal5 = new sucursales("Bv. Seguí 6411", "SUDOESTE", 4302562, "sucursal.png")

//ARRAY CON LOS PRODUCTOS
//const stock = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11]
const stock = []
stock.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11)

//ARRAY CON SUCURSALES
const locales = [sucursal1, sucursal2, sucursal3, sucursal4, sucursal5]




//------------------ MOSTRAR CATALOGO
let productos_stock = document.getElementById("productos")
function mostrarCatalogo(array){ 

    productos_stock.innerHTML = ""
    array.forEach((farmacia)=>{
        let stock_card = document.createElement("div")
        stock_card.innerHTML = `<div id="${farmacia.id}" class="card d-flex justify-content-start" style="width: 18rem;">
                                    <img class="card-img-top" style="height: 250px;" src="sources/${farmacia.imagen}" alt="${farmacia.producto} de Laboratorios: ${farmacia.laboratorio}">
                                    <div class="card-body">
                                        <h4 class="card-title">${farmacia.producto}</h4>
                                        <p>Laboratorio: ${farmacia.laboratorio}</p>
                                        <p class="">Precio: $${farmacia.precio}</p>
                                        <button id="comprar_producto${farmacia.id}" class="btn btn-outline-primary btn_compra">Agregar al carrito</button>
                                    </div>
                                    
        </div>`
        productos_stock.append(stock_card)
    })
    let btn_compra = document.getElementById(`comprar_producto${farmacia.id}`)
        console.log(btn_compra)
        btn_compra.addEventListener("click", ()=>{
            console.log(farmacia)
            agregar_carrito(farmacia)

        })
}

//---------------- PARA ESCONDER EL CATALOGO
function ocultarCatalogo(){
    productos_stock.innerHTML = ""
}

// -------------- BOTON PARA MOSTRAR EL STOCK
let btn_catalogo = document.getElementById("ver_catalogo")
btn_catalogo.addEventListener("click", ()=>{
    mostrarCatalogo(stock)
})

//--------------- BOTON PARA OCULTAR EL CATALOGO
let btn_ocultar = document.getElementById("ocultar_catalogo")
btn_ocultar.onclick = ocultarCatalogo

//--------------- MOSTRAR LAS SUCURSALES
let mis_sucursales = document.getElementById("sucursales")
function mostrarSucursales(array){ 
    mis_sucursales.innerHTML = ""
    array.forEach((locales)=>{
        let sucursales_card = document.createElement("div")
        sucursales_card.innerHTML = `<div class="card d-flex justify-content-start" style="width: 18rem;">
                                    <img class="card-img-top" style="height: 250px;" src="sources/${locales.imagen}" alt="${locales.zona} de Zona: ${locales.zona}">
                                    <div class="card-body">
                                        <h4 class="card-title">${locales.zona}</h4>
                                        <p>Dirección: ${locales.direccion}</p>
                                        <p class="">Teléfono: ${locales.telefono}</p>
                                        <button class="btn btn-outline-primary btn_ir">Contactar por Skype</button>
                                    </div>
        </div>`
        mis_sucursales.append(sucursales_card)
    })
    let btnIr = document.getElementsByClassName("btn_ir")
    for(let compra of btnIr){
    compra.addEventListener("click", ()=>{
        Swal.fire({
            title: 'Contactando vía skype, aguarde por favor.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://i.gifer.com/75v7.gif")
              left top
              no-repeat
            `
          })
    })
}
}

//---------------- PARA ESCONDER SUCURSAL
function ocultarSucu(){
    mis_sucursales.innerHTML = ""
}
// -------------- BOTON PARA MOSTRAR SUCURSALES
let btn_sucursal = document.getElementById("ver_sucu")
btn_sucursal.addEventListener("click", ()=>{
    mostrarSucursales(locales)
})

//--------------- BOTON PARA OCULTAR SUCURSALES
let btn_ocultar_sucu = document.getElementById("ocultar_sucu")
btn_ocultar_sucu.onclick = ocultarSucu

// -------------- SETEANDO STORAGE
let destacados = []
let productos_carrito = []
let carrito = document.getElementById("carrito")


if(localStorage.getItem("destacados")){
    destacados = JSON.parse(localStorage.getItem("destacados"))
} else{
    console.log("Seteando por primera vez el array")
    destacados.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11)
    localStorage.setItem("stock", JSON.stringify(destacados) )
}
console.log(stock)

function agregar_carrito(farmacia){
    productos_carrito.push(farmacia)
    console.log(productos_carrito)
}
//-------------DOM
let boton_carrito = document.getElementById("boton_carrito")
let modal_body = document.getElementById("modal-body")
let btn_finalizar = document.getElementById("btnFinalizarCompra")
let precio_total = document.getElementById('precioTotal')

boton_carrito.addEventListener("click", ()=>{
    llenar_carrito(productos_carrito)
})
function llenar_carrito(array){

    modal_body.innerHTML = ""
    array.forEach((producto_carrito)=>{

        modal_body.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${producto_carrito.id}" style="max-width: 540px;">
            <img class="card-img-top" src="assets/${producto_carrito.imagen}" alt="${producto_carrito.titulo}">
            <div class="card-body">
                    <h4 class="card-title">${producto_carrito.titulo}</h4>
                
                    <p class="card-text">$${producto_carrito.precio}</p> 
                    <button class= "btn btn-danger" id="btn_eliminar"><i class="fas fa-trash-alt"></i></button>
            </div>    
        
        
        </div>
`

    })
 
    total_compra(array)
}

function total_compra(array){
    let acumulador = 0

    acumulador = array.reduce((acumulador, producto_carrito)=>{
        return acumulador + producto_carrito.precio
    },0)
    // console.log(`EL total hasta ahora es: ${acumulador}`)
    if(acumulador == 0){
        precio_total.innerHTML = `<strong>No hay productos en el carrito</strong>`
    }
    else{
        precio_total.innerHTML = `El precio total es de: $${acumulador}`
    }
}







