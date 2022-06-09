const axios = require('axios');

exports.homeRoutes = (req, res) =>{
    //Hace una get request a /api/vinos
    axios.get('http://localhost:3000/api/vinos')
    .then(function(response){
        res.render('index', {vinos : response.data});
    })
    .catch(err => {
        res.send(err);
    })
}

exports.add_vino = (req, res) =>{
    res.render('add_vino');
}

exports.update_vino = (req, res) =>{
    axios.get('http://localhost:3000/api/vinos', {params : {id : req.query.id}})
    .then(function(vinodata){
        res.render('update_vino', {vino: vinodata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}