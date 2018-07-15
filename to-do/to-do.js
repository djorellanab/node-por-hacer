const fs = require('fs');

let listadoPorHacer = [];

const  guardarDB = () =>
{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

const cargardDB = () =>
{
    try{
        listadoPorHacer = require('../db/data.json');
    }catch(err){
        listadoPorHacer = [];
    }
}

const getListado = () =>
{
    cargardDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };
    cargardDB();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const actualizar = (descripcion, completado = true) =>{
    cargardDB();
    let index = listadoPorHacer.findIndex(hacer => hacer.descripcion === descripcion);
    try{
        listadoPorHacer[index].completado = completado;
    }catch(err){
        console.log("No se ha encontrado el elemento")
    }
    guardarDB();
}

const eliminar = (descripcion) =>{
    cargardDB(); 
    try{
        _listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
        if(_listadoPorHacer.length === listadoPorHacer.length) {
            guardarDB();
            listadoPorHacer = _listadoPorHacer;
            return false;}
        else{return true;}
    }catch(err){
        return false;
    }
}
module.exports = {
    actualizar,
    crear,
    eliminar,
    getListado
};