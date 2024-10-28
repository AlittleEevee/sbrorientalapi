const { Router } = require("express");

const clienteModel = require("../models/cliente");

const router = Router();

router.get("/cliente", async (req,res) =>{
    await clienteModel.getCliente((error,data)=>{
        res.status(200).json(data);
    })
});

router.get("/login", async (req,res) =>{
    loginData = {
        correo: req.body.correo,
        contraseña: req.body.contraseña
    }
    await clienteModel.getClienteLogin(loginData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.get("/cliente/:id", async (req,res) =>{
    const { id } = req.params;
    await clienteModel.getClienteById(id,(error,data)=>{
        res.status(200).json(data);
    })
});

router.post("/cliente", async (req,res) =>{

    clienteData = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        contraseña: req.body.contraseña
    }

    await clienteModel.insertCliente(clienteData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.put("/cliente/:id", async (req,res) =>{
    const { id } = req.params;

    clienteData = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        contraseña: req.body.contraseña
    }

    await clienteModel.updateCliente(id,clienteData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.delete("/cliente/:id", async (req,res) =>{
    const { id } = req.params;
    await clienteModel.deleteCliente(id,(error,data)=>{
        res.status(200).json(data);
    })
});

module.exports = router;