var VinoBDD = require('../model/model');

// Crear y Guardar un nuevo vino
exports.create = (req, res) =>{
    //Validar la peticion
    if (!req.body) {
        res.status(400).send({message: "El contenido no puede estar vacío"});
        return;
    }

    //Nuevo Vino
    const vino = new VinoBDD({
        codigo: req.body.codigo,
        marca: req.body.marca,
        nombre: req.body.nombre,
        uvas: req.body.uvas,
        anio: req.body.anio,
        contenido: req.body.contenido,
        cantidad: req.body.cantidad,
        PrecioCaja: req.body.PrecioCaja,
        PrecioIndividual: req.body.PrecioIndividual,
        PrecioCajaAumento: req.body.PrecioCajaAumento,
        PrecioIndividualAumento: req.body.PrecioIndividualAumento,
        PrecioPublicado: req.body.PrecioPublicado
    })

    //Guardar vino en la BDD
    vino
        .save(vino)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el vino"
            });
        });
}

// Conseguir y retornar todos los vinos / solo uno
exports.find = (req, res) =>{
    VinoBDD.find()
    .then(vino =>{
        res.send(vino)
    })
    .catch(err =>{
        res.status(500).send({ message : err.message || "Ocurrió un error al buscar la información del vino" })
    })
}

// Modificar un nuevo vino por su id
exports.update = (req, res) =>{

}

// Borrar un vino con su id
exports.delete = (req, res) =>{

}