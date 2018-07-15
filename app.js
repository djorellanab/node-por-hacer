const  {argv, getComando} = require('./config/yargs');
const porHacer = require('./to-do/to-do');
const colors = require('colors');

let comando = getComando();

switch (comando){
    case 'crear':
    {
        console.log("Comando por crear");
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    }
    case 'listar':
    {
        console.log("Comando por listar");
        let listado = porHacer.getListado();
        for(let tarea of listado)
        {
            console.log('=====Por hacer===='.green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log('=================='.green);
        }
        break;
    }
    case 'actualizar':
    {
        console.log("Comando por actualizar");
        porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    }
    case 'eliminar':
    {
        console.log("Comando por eliminar");
        let borro = porHacer.eliminar(argv.descripcion);
        console.log("Se ha borrado:", borro);
        break;
    }
    default: console.log("Comando no reconocido");
}