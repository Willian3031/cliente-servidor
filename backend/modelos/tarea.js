// Se crea el modelo de Tarea para MongoDB
const mongoose = require('mongoose');

// Esquema de la tarea
const TareaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fechaLimite: { type: String, required: true },
    prioridad: { type: String, required: true },
    estado: { type: String, required: true }
});

// Exportamos el modelo
module.exports = mongoose.model('Tarea', TareaSchema);
