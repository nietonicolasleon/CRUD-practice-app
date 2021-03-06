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
            //res.send(data)
            res.redirect('/add-vino')
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el vino"
            });
        });
}

// Conseguir y retornar todos los vinos / solo uno
exports.find = (req, res) =>{
    if(req.query.id){
        const id = req.query.id;
        VinoBDD.findById(id)
        .then(data =>{
            if(!data){
                res.status(400).send({message: "No se encontró el vino con la id: " + id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message : "Error al buscar al vino con la id: " + id})
        })
    }else{
        VinoBDD.find()
        .then(vino =>{
            res.send(vino)
        })
        .catch(err =>{
            res.status(500).send({ message : err.message || "Ocurrió un error al buscar la información del vino" })
        })
    }
}

// Modificar un nuevo vino por su id
exports.update = (req, res) =>{
    if(!req.body){
        return res
        .status(400)
        .send({ message : "La data para actualizar no puede estar vacía"})
    }

    const id = req.params.id;
    VinoBDD.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data =>{
        if(!data){
            res.status(400).send({message : `No se puede actualizar el vino ${id} . Puede que no se haya encontrado.`})
        }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message : "Error al actualizar el vino"})
    })
}

// Borrar un vino con su id
exports.delete = (req, res) =>{
    const id = req.params.id;

    VinoBDD.findByIdAndDelete(id)
    .then(data =>{
        if (data) {
            res.status(404).send({message : `No se puede borrar el vino con la id ${id} . La id puede ser errónea`})
        }else{
            res.send({
                message : "Vino borrado exitosamente"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message : "No se puede borrar el vino con la id: " + id
        });
    });
}