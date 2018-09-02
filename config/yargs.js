const descripcion = {
        demand: true,
        alias: 'd'
    },
    completado = {
        default: true,
        alias: 'c',
        descripcion: 'Marca como completado o pendiente'
    }

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'actualiza el estado de completado de alguna tarea', { descripcion, completado })
    .command('borrar', 'Elimina una tarea de la lista', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}