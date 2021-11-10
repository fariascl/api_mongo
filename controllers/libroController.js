var Libro = require('../models/libro.js');

function guardar(req, res){
    try {
        let libro = new Libro()
        libro.nombre = req.body.nombre
        libro.anio = req.body.anio
        libro.idioma = req.body.idioma
        libro.autor = req.body.autor

        libro.save((err, librostore) => {
            if (err){
                return res.status(400).send({mensaje: `Error al intentar guardar en base de datos > ${err}`})
                
            }
            res.status(200).send({ libro: librostore})
        })

    }
    catch (error){
        res.status(500).send({mensaje: `error: ` + error})
    }
}

function listar(req, res){
    Libro.find({}, (err, libros) => {
        if (err){
            return res.status(500).send({ mensaje: 'error al realizar la peticion'})
        }
        res.status(200).send({ libros})
    })
}

function recupera(req, res){
    let idlibro = req.params.id
    Libro.findById(idlibro, (err, libro) => {
        if (err){
            return res.status(500).send({ mensaje: 'error al realizar la peticion'})
        }
        if (!libro) {
            return res.status(400).send({ mensaje: 'error, el ibro no existe' })
        }

        res.status(200).send({ libro })
    })
}

function editar(req, res){
    let idlibro = req.params.id
    Libro.findByIdAndUpdate(idlibro, req.body, (err, libro) => {
        if (err){
            return res.status(500).send({ mensaje: 'error al modificar el libro '})
        }
        if (!libro) {
            return res.status(400).send({mensaje : 'error, el libro no existe'})
        }

        res.status(200).send({ libro })
    })
}

function elimina(req, res){
    let idlibro = req.params.id
    Libro.findByIdAndDelete(idlibro, (err, libro) => {
        if (err){
            return res.status(500).send({ mensaje: 'error al eliminar el libro '})
        }
        if (!libro) {
            return res.status(400).send({mensaje : 'error, el libro no existe'})
        }

        res.status(200).send({ libro })
    })
}

module.exports = {
    guardar,
    listar,
    recupera,
    editar,
    elimina
};
