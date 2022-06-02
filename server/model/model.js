const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    codigo:{
        type: Number,
        required: true
    },
    marca:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    uvas:{
        type: String,
        required: true
    },
    anio: String,
    contenido: String,
    cantidad: Number,
    PrecioCaja:{
        type: String,
        required: true
    },
    PrecioIndividual:{
        type: String,
        required: true
    },
    PrecioCajaAumento:{
        type: String,
        required: true
    },
    PrecioIndividualAumento:{
        type: String,
        required: true
    },
    PrecioPublicado:{
        type: String,
        required: true
    }
})

const VinoBDD = mongoose.model('vinobdd', schema);

module.exports = VinoBDD;