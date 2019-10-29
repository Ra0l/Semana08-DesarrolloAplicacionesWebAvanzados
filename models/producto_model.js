let mongoose = require('mongoose')
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var producto_schema = new Schema({
    nombre: {type:String, require:true},
    descripcion: {type:String, require:true},
    imagen : String,
    precio : {type:String, require:true},
    // tag:[
    //     {nombre:{type:String}}
    // ]
});

prod_model = mongoose.model('producto', producto_schema, 'producto');

module.exports = prod_model;