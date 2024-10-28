const { Router } = require("express");

const trabajadorModel = require("../models/trabajador");

const router = Router();

router.get("/trabajador", async (req,res) =>{
    await trabajadorModel.getTrabajador((error,data)=>{
        res.status(200).json(data);
    })
});

router.get("/trabajador/:id", async (req,res) =>{
    const { id } = req.params;
    await trabajadorModel.getTrabajadorById(id,(error,data)=>{
        res.status(200).json(data);
    })
});

router.post("/trabajador", async (req,res) =>{

    trabajadorData = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
        dni: req.body.dni
    }

    await trabajadorModel.insertTrabajador(trabajadorData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.put("/trabajador/:id", async (req,res) =>{
    const { id } = req.params;

    trabajadorData = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
        dni: req.body.dni
    }

    await trabajadorModel.updateTrabajador(id,trabajadorData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.delete("/trabajador/:id", async (req,res) =>{
    const { id } = req.params;
    await trabajadorModel.deleteTrabajador(id,(error,data)=>{
        res.status(200).json(data);
    })
});

module.exports = router;