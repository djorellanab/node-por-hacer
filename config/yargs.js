const descripcion ={
        alias:  'd',
        demand: true,
        desc: "Descripcion de la tarea por hacer"
    };
const completado ={
        alias:  'c',
        default: true,
        desc: "Marca completado o pendiente la tarea"
    };

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer',{descripcion} )
    .command('actualizar', 'Actualizar el estado completado de una tarea', {descripcion,completado}, )
    .command('eliminar', 'Eliminar un elemento por hacer', {descripcion} )
    .help()
    .argv;

let getComando = () => argv._[0];

module.exports = {argv, getComando};