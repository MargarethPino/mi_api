import torneo from "../models/Tournaments.js";


//Crear
const agregar = async (req, res) => {
  try {
      const torneo = new Torneo(req.body);
      const torneoGuardado = await torneo.save();
      res.json({ body: torneoGuardado, ok: "SI", msg: "Registro creado correctamente." });
  } catch (error) {
      console.log(error);
  }
}

//Leer
const listar = async (req, res) => {
  const torneo = await Torneo.find();
  res.json(torneo);
}

//Eliminar
const eliminar = async (req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //console.log(id);

  //validar si existe el Registro
  /* const torneo = await Torneo.findById(id);
  console.log(torneo);
  if (!torneo) {
      const error = new Error("Registro no encontrado.");
      return res.status(404).json({ msg: error.message, ok: "SI" });
  } */

  try {
      await Torneo.deleteOne({_id:id}); //findByIdAndDelete(id)
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
  /* const torneo = await Torneo.findById(id);
  console.log(torneo); */

  if (req.body.LigasFutbolEurope !== null && req.body.DescripciónLigas  !== null) {
    //capturar los datos del formulario
      /* Torneo.LigasFutbolEurope = req.body.LigasFutbolEuropeTorneo;
      Torneo.DescripciónLigas  = req.body.DescripciónLigas ; */

      try {
        const torneoGuardado= await Usuario.updateOne({_id:id}, req.body);
        res.json({ body: torneoGuardado, msg: "Registro actualizado correctamente.", ok: "SI" });
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
  const torneo = await Torneo.findById(id)

  if (!torneo) {
      const error = new Error("Registro no encontrado.");
      return res.status(404).json({ msg: error.message, ok: "SI" });
  }

  res.json(torneo);
}

export {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno
}