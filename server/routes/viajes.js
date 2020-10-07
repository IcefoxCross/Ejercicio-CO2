const express = require('express');
const router = express.Router();
const Viaje = require('../models/viaje');

// FUNCS
const calcularEmision = (medio, km, ida_vuelta, personas) => {
    const coeficientes = {
        "Metro (Tren, Subway, Subterráneo)": 0.033,
        "Auto (Gasolina)": 0.21,
        "Camioneta (Diésel)": 0.249,
        "Motocicleta (Gasolina)": 0.092,
        "Bus Transantiago (Transporte público)": 0.039,
        "Bus (Vehículo privado)": 0.012,
        "Avión (Chile)": 0.279,
        "Avión (Internacional)": 0.179,
        "Caminando": 0
    };

    const multiplicador = ida_vuelta ? 2 : 1;
    return coeficientes[medio] * km * multiplicador / personas;
};

function getViaje(newViaje) {
    Viaje.findOne({
        direccion_partida: newViaje.direccion_partida, direccion_termino: newViaje.direccion_termino,
        medio_transporte: newViaje.medio_transporte, kilometros: newViaje.kilometros,
        numero_personas: newViaje.numero_personas, ida_vuelta: newViaje.ida_vuelta,
        kg_co2: newViaje.kg_co2, fecha: newViaje.fecha
    }).then((result) => {
        return result;
    });
}

// GET
router.get('/', (req,res) => {
    Viaje.find({}).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json({message: err.message});
    });
});

// POST
router.post('/', (req,res) => {
    const body = req.body;
    const kg_co2 = calcularEmision(body.medio_transporte, body.kilometros, body.ida_vuelta, body.numero_personas);
    const fecha = new Date( new Date().setHours(0,0,0,0));

    const viaje = new Viaje({
        direccion_partida: body.direccion_partida,
        direccion_termino: body.direccion_termino,
        medio_transporte: body.medio_transporte,
        kilometros: body.kilometros,
        numero_personas: body.numero_personas,
        ida_vuelta: body.ida_vuelta,
        kg_co2: kg_co2,
        fecha: fecha
    });

    viaje.save().then(savedViaje => {
        res.json(savedViaje);
    }).catch((err) => {
        res.status(400).json({ message: err.message });
    });
});

module.exports = router;