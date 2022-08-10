let productos = require('../data/productos.json')


module.exports = {
    list: (req,res) => {
        return res.render('admin/listaProductos',{
            productos
        })
    },
    create:(req,res) => {
        return res.render('admin/crearProducto')
    },
    edit:(req,res) => {
        id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        })
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
        return res.render('admin/editarProducto',{
            producto
        })
    },
    store:(req,res) => {
        let producto = req.body
        res.send(producto)
    }
}