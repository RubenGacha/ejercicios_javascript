const color=document.getElementById("color");
const divColor=document.getElementById("salida");
const tbody=document.getElementById("cuerpo");
const bGuardar=document.getElementById("guardar");
let misColores=[];

addEventListener("load",()=>{
    divColor.textContent=color.value;
    const storage=localStorage.getItem("mis_colores");
    if(storage!==null){
        misColores=JSON.parse(storage);
    }
    mostrarTabla();
})

color.addEventListener("input",()=>{
    const colorFondo=color.value
    const colorLetra="#"+invertirColor(colorFondo);
    divColor.textContent=colorFondo;
    divColor.style.color=colorLetra;
    divColor.style.backgroundColor=colorFondo;
})

bGuardar.addEventListener("click",()=>{
    const colorFondo=color.value
    const colorLetra="#"+invertirColor(colorFondo);
    const miColor={
        letra:colorLetra,
        fondo:colorFondo
    }
    misColores.push(miColor);
    guardarStorage();
    mostrarTabla();
})

const guardarStorage=()=>{
    localStorage.setItem("mis_colores",JSON.stringify(misColores));
}

const eliminarDato=(elem)=>{
            misColores.splice(elem.target.dataset.id,1);
            guardarStorage();
            mostrarTabla();
}

const mostrarData=(elem)=>{

    divColor.textContent=elem.target.dataset.fondo;
    divColor.style.color=elem.target.dataset.letra;
    divColor.style.backgroundColor=elem.target.dataset.fondo;
}

const mostrarTabla=()=>{
    const fragment=document.createDocumentFragment();

    misColores.forEach((color,index)=>{
        //crear elementos del DOM
        const fila=document.createElement("tr");
        const cLetra=document.createElement("td");
        const cFondo=document.createElement("td");
        const cbuttonElim=document.createElement("td");
        const bottonElim=document.createElement("button")
        const cbuttonMos=document.createElement("td");
        const bottonMos=document.createElement("button")

        //datos del boton eliminar
        bottonElim.setAttribute("data-id",index); //agregar id al data
        bottonElim.textContent="eliminar"; //poner eliminar en un contexto
        bottonElim.addEventListener('click',(e)=>eliminarDato(e)); 
        cbuttonElim.appendChild(bottonElim);

        //datos del boton mostrar
        bottonMos.setAttribute("data-letra",color.letra); //agregar letra al data
        bottonMos.setAttribute("data-fondo",color.fondo); //agregar fondo al data
        bottonMos.textContent="mostrar"; //poner mostrar en un contexto
        bottonMos.addEventListener('click',(e)=>mostrarData(e)); 
        cbuttonMos.appendChild(bottonMos);


        cLetra.textContent=color.letra;
        cLetra.style.backgroundColor=color.letra;
        cLetra.style.color=color.fondo;
        
        cFondo.textContent=color.fondo;
        cFondo.style.backgroundColor=color.fondo;
        cFondo.style.color=color.letra;
        
        fila.appendChild(cLetra);
        fila.appendChild(cFondo);
        fila.appendChild(cbuttonElim);
        fila.appendChild(cbuttonMos);

        fragment.appendChild(fila);

    })

    tbody.innerHTML="";
    tbody.appendChild(fragment);

}


const invertirColor=(Pcolor)=>{
    //color a convertir
    const colorOriginal=Pcolor.toString().substr(1);
    //el color blanco
    const blanco="FFFFFF";
    
    //transforma el valor hexadecimal a decimal
    const colorOriginalNumerico=parseInt(colorOriginal,16);
    const blancoNumerico=parseInt(blanco,16);
    
    //saca el color invertido que seria blanco - original
    const invertido=blancoNumerico-colorOriginalNumerico;

    //convierte de decimal a hexadecimal
    let invertidoString=invertido.toString(16);

    //validamos que tenga 6 caracteres
    while (invertidoString.length != 6){
        invertidoString="0"+invertidoString;
        if(invertidoString.length>6){
            break;
        }
    }
    return invertidoString;
}