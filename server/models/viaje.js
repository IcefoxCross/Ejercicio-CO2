const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const viajeSchema = new mongoose.Schema({
    direccion_partida: String,
    direccion_termino: String,
    medio_transporte: String,
    kilometros: Number,
    numero_personas: Number,
    ida_vuelta: Boolean,
    kg_co2: Number,
    fecha: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Viaje', viajeSchema);