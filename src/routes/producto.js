const { Router } = require("express");

const productoModel = require("../models/producto");

const router = Router();

router.get("/producto", async (req,res) =>{
    await productoModel.getProducto((error,data)=>{
        res.status(200).json(data);
    })
});

router.get("/producto/:id", async (req,res) =>{
    const { id } = req.params;
    await productoModel.getProductoById(id,(error,data)=>{
        res.status(200).json(data);
    })
});

router.post("/producto", async (req,res) =>{

    productoData = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        categoria_id: req.body.categoria_id,
        imagen: req.body.imagen
    }

    await productoModel.insertProducto(productoData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.put("/producto/:id", async (req,res) =>{
    const { id } = req.params;

    productoData = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        categoria_id: req.body.categoria_id,
        imagen: req.body.imagen
    }

    await productoModel.updateProducto(id,productoData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.delete("/producto/:id", async (req,res) =>{
    const { id } = req.params;
    await productoModel.deleteProducto(id,(error,data)=>{
        res.status(200).json(data);
    })
});

module.exports = router;