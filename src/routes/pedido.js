const { Router } = require("express");

const pedidoModel = require("../models/pedido");

const router = Router();

router.get("/pedido", async (req,res) =>{
    await pedidoModel.getPedido((error,data)=>{
        res.status(200).json(data);
    })
});

router.get("/pedido/:id", async (req,res) =>{
    const { id } = req.params;
    await pedidoModel.getPedidoById(id,(error,data)=>{
        res.status(200).json(data);
    })
});

router.post("/pedido", async (req,res) =>{

    pedidoData = {
        cliente_id: req.body.cliente_id,
        trabajador_id: req.body.trabajador_id,
        forma_pago: req.body.forma_pago,
        ubicacion_entrega: req.body.ubicacion_entrega,
        tipo_entrega: req.body.tipo_entrega,
        precio_total: req.body.precio_total,
        estado_entrega: req.body.estado_entrega,
        fecha_pedido: req.body.fecha_pedido,
        fecha_entrega: req.body.fecha_entrega
    }

    await pedidoModel.insertPedido(pedidoData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.put("/pedido/:id", async (req,res) =>{
    const { id } = req.params;

    pedidoData = {
        cliente_id: req.body.cliente_id,
        trabajador_id: req.body.trabajador_id,
        forma_pago: req.body.forma_pago,
        ubicacion_entrega: req.body.ubicacion_entrega,
        tipo_entrega: req.body.tipo_entrega,
        precio_total: req.body.precio_total,
        estado_entrega: req.body.estado_entrega,
        fecha_pedido: req.body.fecha_pedido,
        fecha_entrega: req.body.fecha_entrega
    }

    await pedidoModel.updatePedido(id,pedidoData,(error,data)=>{
        res.status(200).json(data);
    })
});

router.delete("/pedido/:id", async (req,res) =>{
    const { id } = req.params;
    await pedidoModel.deletePedido(id,(error,data)=>{
        res.status(200).json(data);
    })
});

module.exports = router;