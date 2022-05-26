const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080;

//log request
app.use(morgan('tiny'));

//request del body-parser
app.use(bodyparser.urlencoded({extended:true}))

//seteo del view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

//Cargar assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")))
app.use("/css", express.static(path.resolve(__dirname, "assets/img")))
app.use("/css", express.static(path.resolve(__dirname, "assets/js")))


app.get('/',(req, res)=>{
    res.render('index');
})

app.listen(3000,()=>{console.log(`Server is running on http://localhost:${PORT}`)});