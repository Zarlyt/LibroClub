const Sequelize = require('sequelize');
const AlumnoModel = require('./models/alumnos');
const UsuarioModel = require('./models/usuario');
const ClubModel = require('./models/club');
const ComentarioModel = require('./models/comentario');
const MiembroModel = require('./models/miembro');


//inicia el conection
const sequelize = new Sequelize('mysql://root:Z0cXMRdcUMacC4YR3b3e@containers-us-west-73.railway.app:5999/railway');

//const sequelize = new Sequelize('club_libros', 'root', '', {
 //   host:'localhost' ,
 //   dialect:'mysql'
//});



//Se crean los modelos

const Alumno = AlumnoModel(sequelize, Sequelize);
const Usuario = UsuarioModel(sequelize, Sequelize);
const Club = ClubModel(sequelize, Sequelize);
const Comentario = ComentarioModel(sequelize, Sequelize);
const Miembro = MiembroModel(sequelize, Sequelize);




sequelize.sync({force:false}).then(()=>{
    console.log("Tablas Creadas");
});

//Se exportan los modelos
module.exports={
    Alumno,
    Usuario,
    Club,
    Comentario,
    Miembro,
}
