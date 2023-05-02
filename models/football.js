import mongoose from "mongoose";
 
const userSchema = mongoose.Schema ({
    Equiposfutbol:{
        type: String,
        require: true,
        trim: true
    },
    Entrenador: {
        type: String,
        require: true,
        trim: true
    }
},{
    timestamps: true
});

const Equipos = mongoose.model("Equipos",userSchema) ;
 export default Equipos;