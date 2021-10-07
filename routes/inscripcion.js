import express from 'express';
const router = express.Router();

//Importar el modelo inscripcion
import Inscripcion from '../models/inscripcion';

//Agregar una inscrpcion
//Rutas(Post)
router.post('/nueva-inscripcion', async(req, res) => {
    const body = req.body;
    try{
        const inscripcionDB = await Inscripcion.create(body);
        res.status(200).json(inscripcionDB);
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});

//Rutas Get (con parametros)
router.get('/inscripcion/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const inscripcionDB = await Inscripcion.findOne({_id});
    res.json(inscripcionDB);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ocurrio un error',
    error
        })
    }
});

//Rutas Get (con todos los documentos)
router.get('/inscripcion', async(req, res) => {
    try {
    const inscripcionDB = await Inscripcion.find();
    res.json(inscripcionDB);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ocurrio un error',
    error
        })
    }
});

//Rutas Delete (eliminar una inscripcion)
router.delete('/inscripcion/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const inscripcionDB = await Inscripcion.findByIdAndDelete({_id});
    if(!inscripcionDB){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(inscripcionDB);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ocurrio un error',
    error
        })
    }
});

//Rutas Put (actualizar una inscripcion)
router.put('/inscripcion/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const inscripcionDB = await Nota.findByIdAndUpdate(_id,
        body,{new: true});
        res.json(inscripcionDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})

//Exportacion de router
module.exports = router;