const { Router } = require("express");

const path = require('path');

const router = Router();

router.get('/img/:id', (req, res) => {
    const { id } = req.params;
    const rutaImagen = path.join(__dirname, '../img', `${id}.png`);
    res.sendFile(rutaImagen);
});

module.exports = router;