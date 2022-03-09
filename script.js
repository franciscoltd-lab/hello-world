const obtenerInformacion = (materia) =>{
    let materias = {
        fisica: ["pedro", "juan", "pepito", "maria"] ,
        programacion: ["pedro", "juan", "pepito"],
        logica: ["juan", "pepito", "maria"],
        quimica: ["pedro", "pepito", "maria"]
    }

    if(materias[materia]){
        return materias[materia];
    } else{
        return "la materia no existe";
    }
}

let informacion = obtenerInformacion("logca");
document.write(informacion);
