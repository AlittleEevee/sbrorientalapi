const { Router } = require("express");

const productoModel = require("../models/producto");

const router = Router();

router.get("/producto", async (req,res) =>{
    await productoModel.getProducto((error,data)=>{
        res.status(200).json(data);
    })
});

module.exports = router;