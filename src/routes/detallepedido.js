const { Router } = require("express");

const detallepedidoModel = require("../models/detallepedido");

const router = Router();

router.get("/detallepedido", async (req,res) =>{
    await detallepedidoModel.getDetallepedido((error,data)=>{
        res.status(200).json(data);
    })
});

router.get("/detallepedido/:id", async (req,res) =>{
    const { id } = req.params;
    await detallepedidoModel.getDetallepedidoById(id,(error,data)=>{
        res.status(200).json(data);
    })
});

router.post("/detallepedido", async (req,res) =>{

    detallepedidoData = {
        pedido_id: req.body.pedido_id,
        producto_id: req.body.producto_id,
        cantidad: req.body.cantidad,
        precio_unitario: req.body.precio_unitario
    }

    await detallepedidoModel.insertDetallepedido(detallepedidoData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.put("/detallepedido/:id", async (req,res) =>{
    const { id } = req.params;

    detallepedidoData = {
        pedido_id: req.body.pedido_id,
        producto_id: req.body.producto_id,
        cantidad: req.body.cantidad,
        precio_unitario: req.body.precio_unitario
    }

    await detallepedidoModel.updateDetallepedido(id,detallepedidoData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.delete("/detallepedido/:id", async (req,res) =>{
    const { id } = req.params;
    await detallepedidoModel.deleteDetallepedido(id,(error,data)=>{
        res.status(200).json(data);
    })
});

module.exports = router;