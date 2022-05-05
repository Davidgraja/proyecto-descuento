

const funcionDescuento =(precio, descuento)=>{
    const precioConDescuento = 100 - descuento;
    const precioFinal= (precio * precioConDescuento ) / 100;
    return precioFinal;
}

const cupones = [
    {nombre: "Buen Oulet", descuento : 15},
    {nombre: "Flow Mint", descuento : 25},
    {nombre: "Card Mart", descuento : 35},
]



const inputs = document.getElementById("contenedor-descuento");

const botonCalcular = document.getElementById("button-calcular");
botonCalcular.addEventListener('click' ,calcular);


const resultado = document.getElementById("resultado");

// funcion para calcular
const total_A_Pagar = document.createElement("p");

function calcular(){
    const pago = document.getElementById("pago");
    const valorPago = pago.value

    const descuento= document.querySelector(".cupones")
    const valorDescuento = descuento.value
        
    const funcionFind = cupones.find(function(cupon){
        return cupon.nombre == valorDescuento;
    })

        
    const cuponEncontrado = cupones.some(function(cupon){
        return cupon.nombre == valorDescuento;
    })

    console.log(cuponEncontrado)
    console.log(funcionFind)

    pago.value = "";
    descuento.value = "";

    let total
    if(valorDescuento > 0){

         total = funcionDescuento(valorPago, valorDescuento)
        total_A_Pagar.textContent = total + " $"
         resultado.appendChild(total_A_Pagar)
    }
   
    
    
    else if(funcionFind==undefined){
        total_A_Pagar.textContent = " Cupon no encontrado"
        resultado.appendChild(total_A_Pagar) 

    }

    else if(cuponEncontrado== true){

        total = funcionDescuento(valorPago, funcionFind.descuento)
        total_A_Pagar.textContent = total + " $"
        resultado.appendChild(total_A_Pagar) 
    }
}
    
const cupon = document.getElementById("Cupon")

const  añadir_cupon = document.getElementById("añadir-cupon")
añadir_cupon.addEventListener("click", añadir)
var evento_cupon

function añadir(){

    const spanNombre = document.createElement("span")
    spanNombre.textContent = " Ingrese el nombre del cupon "

    const inputCuponNombre = document.createElement('input')
   

    const spanDescuento = document.createElement('span')
    spanDescuento.textContent = "ingrese el % de descuento"

    const inputCuponDescuento = document.createElement('input')
    
   
    const botomAgregar = document.createElement("button")
    botomAgregar.textContent = "Agregar"
    botomAgregar.type="button"
    
    cupon.appendChild(spanNombre)
    cupon.appendChild(inputCuponNombre)
    Cupon.appendChild(spanDescuento)
    cupon.appendChild(inputCuponDescuento);
    cupon.appendChild(botomAgregar)

    botomAgregar.addEventListener("click",Agregar)

    function Agregar(){
        const cuponNombre= inputCuponNombre.value
        const cuponDescuento= parseInt(inputCuponDescuento.value)

        

        const cuponsimilar= cupones.find(function(cupon){
            return cupon.nombre == cuponNombre

        })
        try{
            if(cuponNombre == cuponsimilar.nombre){
                total_A_Pagar.textContent = "Cupon ya existente, intente con otro cupon"
                resultado.appendChild(total_A_Pagar)

                inputCuponNombre.value = "";
                inputCuponDescuento.value= "";
                cupon.removeChild(spanNombre)
                cupon.removeChild(inputCuponNombre)
                cupon.removeChild(spanDescuento)
                cupon.removeChild(inputCuponDescuento)
                cupon.removeChild(botomAgregar)
            }
        } 
        catch{
            cupones.push({nombre: cuponNombre, descuento : cuponDescuento })
            const datalist= document.getElementById("cupones")
            const option = document.createElement("option")
            option.textContent = cuponNombre 
            datalist.appendChild(option)

                
            inputCuponNombre.value = "";
            inputCuponDescuento.value= "";
            cupon.removeChild(spanNombre)
            cupon.removeChild(inputCuponNombre)
            cupon.removeChild(spanDescuento)
            cupon.removeChild(inputCuponDescuento)
            cupon.removeChild(botomAgregar)

        }


        
       


            
    
    }
} 
