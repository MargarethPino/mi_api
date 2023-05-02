import mongoose from "mongoose";
 
const userSchema = mongoose.Schema ({
    EquipoRegistrado:{
        type: String,
        require: true,
        trim: true
    },
    CategoriaJuego: {
        type: String,
        require: true,
        trim: true
    }
    ,Jugadores: {
        type: String,
        require: true,
        trim: true
    }
},{
    timestamps: true
});

const Usuario = mongoose.model("Usuario",userSchema) ;
 export default Usuario;