var express = require('express');
var router = express.Router();
var controller = require('../controllers/producto_controller')
//localhost:3000/producto
router.get('/', function(req, res) {
    controller.show(req,res);
});
//localhost:3000/producto
router.post('/', function(req, res) {
   controller.create(req,res);
});
//localhost:3000/producto/show/9
router.get('/show/:id', function(req, res) {
    controller.detail(req,res);
});

router.post('/update', function(req, res) {
    controller.update(req,res);
});
//localhost:3000/producto/delete/5
router.get('/delete/:id', function(req, res) {
    controller.delete(req,res);
});

module.exports = router;