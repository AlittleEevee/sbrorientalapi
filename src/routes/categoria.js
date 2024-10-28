const { Router } = require("express");

const categoriaModel = require("../models/categoria");

const router = Router();

router.get("/categoria", async (req,res) =>{
    await categoriaModel.getCategoria((error,data)=>{
        res.status(200).json(data);
    })
});

router.get("/categoria/:id", async (req,res) =>{
    const { id } = req.params;
    await categoriaModel.getCategoriaById(id,(error,data)=>{
        res.status(200).json(data);
    })
});

router.post("/categoria", async (req,res) =>{

    categoriaData = {
        nombre: req.body.nombre
    }

    await categoriaModel.insertCategoria(categoriaData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.put("/categoria/:id", async (req,res) =>{
    const { id } = req.params;

    categoriaData = {
        nombre: req.body.nombre
    }

    await categoriaModel.updateCategoria(id,categoriaData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.delete("/categoria/:id", async (req,res) =>{
    const { id } = req.params;
    await categoriaModel.deleteCategoria(id,(error,data)=>{
        res.status(200).json(data);
    })
});

module.exports = router;