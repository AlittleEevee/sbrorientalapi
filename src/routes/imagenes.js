const { Router } = require("express");

const path = require('path');
const fs = require('fs');

const router = Router();

router.get('/img/:id', (req, res) => {
    const { id } = req.params;
    const rutaImagen = path.join(__dirname, '../img', `${id}`);
    const imagenPorDefecto = path.join(__dirname, '../img', 'imagen.png');

    fs.access(rutaImagen, fs.constants.F_OK, (err) => {
        if (err) {
            res.sendFile(imagenPorDefecto);
        } else {
            res.sendFile(rutaImagen);
        }
    });
});

module.exports = router;