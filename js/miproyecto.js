

let nombre = prompt("ingrese su nombre");
let provinciaNorteSeleccionada;
let personasIngresadas;
let diasIngresados;


//objeto - funcion constructora
class Hotel { 
    constructor (nombre, provincia, ciudad, precio){
    this.nombre= nombre;
    this.provincia= provincia;
    this.ciudad= ciudad; 
    this.precio= precio;
    }

    informar() {

    console.log("El hotel  ", this.nombre + " vale ", this.precio + " pesos.");

    }
    resetear() {
        this.nombre= "";
        this.provincia= "";
        this.ciudad= ""; 
        this.precio= 0;    

    }
}   
       

const hotelNorteRu = new Hotel ("Norte Rupestre","Jujuy","Tilcara",3000);
const hotelUwaWasi = new Hotel ("Uwa Wasi hotel","Jujuy","Purmamarca",4500);
const hotelLuna = new Hotel ("Luna hotel","Jujuy","Tilcara",4600);
const hotelInti = new Hotel ("Inti hotel","Jujuy","Humahuaca",4600);

//arrays 

let regionesArg = ["Norte", "Litoral", "Patagonia","Salir"];
let provinciasNorte = ["Jujuy","Salta"];

const hotelesJujuydisp =[
    
    {nombre:"Norte Rupestre",precio:3000 },
    {nombre: "Uwa Wasi hotel",precio:4500 },
    {nombre: "Luna hotel",precio:4600 },
    {nombre: "Inti hotel",precio:2800 },
];



//funcion saludar
const saludarUsuario=()=>{
 
   alert("Hola "+ nombre + " te damos la bienvenida a Ar.book ");
   
}
saludarUsuario();




// De acuerdo al ingreso de la region norte me muestra las opciones de provincias
const mostrarProvinciasNorte=()=>{
    provinciaNorteSeleccionada = (prompt('Ingrese una provincia:\n' + provinciasNorte.join("\n")));

    switch(provinciaNorteSeleccionada){
        case "Jujuy":
            mostrarHotelesJujuy(); 
           break;
        case "Salta":
            console.log("No hay hoteles disponibles");
        default:
            alert("no existe esa opcion en el menu");
            mostrarProvinciasNorte();
            break;            
    }
   
}
//calcula el precio de acuerdo al ingreso de personas y dias
const calcularPrecio=(cantpersonas,cantdias,preciodia)=>{
    const precioTotal=cantpersonas * cantdias * preciodia;
    return precioTotal;

}



// De acuerdo al ingreso de hotel me muestra el valor
const mostrarHotelesJujuy=()=>{
   
    
    console.log("Hay " + hotelesJujuydisp.length + " hoteles disponibles");
    
    for (const item of hotelesJujuydisp) {
        console.log(item.nombre);
    }
    
    hotelesJujuy= (prompt('Ingrese el nombre del hotel que desea:\n'));

    if (hotelesJujuy=="Norte Rupestre"){
        
        hotelNorteRu.informar();
       
        personasIngresadas=Number(prompt("ingrese cantidad de personas"));
        
        diasIngresados=Number(prompt("ingrese cantidad de dias"));
        
        const preciofinal=calcularPrecio(personasIngresadas,diasIngresados,hotelNorteRu.precio);
        
        alert("usted va a pagar " + preciofinal +" pesos");  

           


    }
    else if(hotelesJujuy=="Uwa Wasi hotel"){
        alert("Actualmente no hay disponibilidad en hotel Uwa Wasi");
    }
    else if(hotelesJujuy=="Luna hotel"){
        hotelLuna.informar();
       
        personasIngresadas=Number(prompt("ingrese cantidad de personas"));
        
        diasIngresados=Number(prompt("ingrese cantidad de dias"));
        
        const preciofinal=calcularPrecio(personasIngresadas,diasIngresados,hotelLuna.precio);
        
        alert("usted va a pagar " + preciofinal +" pesos");  

        
    }
    else if(hotelesJujuy=="Inti hotel"){
        alert("Actualmente no hay disponibilidad en el Inti hotel");
    }
    else {
        alert("No existe ese hotel");
        mostrarHotelesJujuy();
    


    }

}


//menu

do {
    regiones =(prompt('Ingrese una region:\n' + regionesArg.join("\n")));

    switch (regiones){
    
    case "Norte":
        mostrarProvinciasNorte();
        break;
        
    
    case "Litoral":
        console.log("No hay disponibilidad en el Litoral");
        break;
        

    
    case "Patagonia":
        console.log("No hay disponibilidad en la Patagonia");
        break;
        
    
    case "Salir":    
        alert("Hasta pronto");
        break;

    

    default: 
        alert("No corresponde a ninguna región");
        break; 

    }
 
    } while(regiones != "Salir" && regiones != null);




  










