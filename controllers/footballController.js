import Equipo from "../models/football.js";


//Crear
const agregar = async (req, res) => {
  try {
      const equipo = new Equipo(req.body);
      const equipoGuardado = await equipo.save();
      res.json({ body: equipoGuardado, ok: "SI", msg: "Registro creado correctamente." });
  } catch (error) {
      console.log(error);
  }
}

//Leer
const listar = async (req, res) => {
  const equipo = await Equipo.find();
  res.json(equipo);
}

//Eliminar
const eliminar = async (req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //console.log(id);

  //validar si existe el Registro
  /* const equipo = await Equipo.findById(id);
  console.log(equipo);
  if (!equipo) {
      const error = new Error("Registro no encontrado.");
      return res.status(404).json({ msg: error.message, ok: "SI" });
  } */

  try {
      await Equipo.deleteOne({_id:id}); //findByIdAndDelete(id)
      res.json({ msg: "Registro eliminado correctamente.", ok: "SI" });
  } catch (error) {
      console.log(error);
  }
}
//Editar
const editar = async (req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //console.log(id);

  //validar si existe el Registro
  /* const equipo = await Equipo.findById(id);
  console.log(equipo); */

  if (req.body.Equiposfutbol !== null && req.body.Entrenador !== null) {
    //capturar los datos del formulario
      /* Equipo.Equiposfutbol = req.body.Equiposfutbol;
      Equipo.Entrenador = req.body.Entrenador; */

      try {
        const equipoGuardado= await Equipo.updateOne({_id:id}, req.body);
        res.json({ body: equipoGuardado, msg: "Registro actualizado correctamente.", ok: "SI" });
      } catch (error) {
        console.log(error);
      }
  }
  else{
    const error = new Error("no se han encontrado los parametros en el body.");
    return res.status(404).json({ msg: error.message, ok: "SI" });
  }
}

//Leer uno
const listarUno = async(req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //validar si existe el Registro
  const equipo = await Equipo.findById(id)

  if (!equipo) {
      const error = new Error("Registro no encontrado.");
      return res.status(404).json({ msg: error.message, ok: "SI" });
  }

  res.json(equipo);
}

export {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno
}