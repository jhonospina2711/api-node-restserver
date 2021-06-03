const { response, request } = require('express')

const usuariosGet = (req, res = response) => {

    const {q, nombre = 'No Name', apikey , page = 10, limit} = req.query;
    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API - Controller',
        id
    });
}

const usuariosPost = (req, res = response) => {
    const {nombre, edad}  = req.body;
    res.json({
        msg: 'post API - Controller',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controller'
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controller'
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}