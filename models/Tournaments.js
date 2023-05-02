import mongoose from "mongoose";
 
const userSchema = mongoose.Schema ({
    LigasFutbolEurope:{
        type: String,
        require: true,
        trim: true
    },
    DescripciónLigas: {
        type: String,
        require: true,
        trim: true
    }
},{
    timestamps: true
});

const Torneo  = mongoose.model("Torneo",userSchema) ;
 export default Torneo;