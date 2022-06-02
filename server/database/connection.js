const mongoose = require('mongoose');

const connectBDD = async() =>{
    try{
        //Conexión a MongoDB
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log(`MongoDB conectada: ${con.connection.host}`);
    }catch(err){
        console.log("Error al conectarse con MongoDB");
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectBDD