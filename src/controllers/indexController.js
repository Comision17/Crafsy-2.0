let aside = require('../data/aside.json')
let productos = require('../data/productos.json')

module.exports = {
    home : (req,res) => {
        return res.render('index', 
        {
            mensaje: 'Aca estamos aprendiendo controladores',
            aside,
            productos
        });
    },
    search : (req,res) => {
        let elemento = req.query.search

        let resultados = productos.filter(producto => {
            return producto.marca.toLowerCase() === elemento.toLowerCase() || (producto.titulo.toLowerCase().includes(elemento.toLowerCase())) /* || (producto.descripcion.toLowerCase().includes(elemento.toLowerCase())) */
        })
        /* Codigo de nico */
        /* let resultados = productos.filter(producto => {
            return (producto.titulo.toLowerCase().indexOf(elemento.toLowerCase()) != -1)
        }) */

        return res.render('busqueda', 
        {
            busqueda: elemento,
            resultados
        });
    }
}
