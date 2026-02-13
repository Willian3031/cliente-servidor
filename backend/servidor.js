// Se añade mongo
const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/gestion_tareas')
.then(() => console.log('Conectado a MongoDB'))
.catch(error => console.error('Error de conexión:', error));


// Permite comunicación con Angular
app.use(cors());

// Permite recibir datos en formato JSON
app.use(express.json());

// Simulación de base de datos en memoria
let tareas = [];

/*
Endpoint para registrar una tarea
POST /api/tareas
*/
app.post('/api/tareas', (req, res) => {

    const { titulo, descripcion, fechaLimite, prioridad, estado } = req.body;

    if (!titulo || !descripcion || !fechaLimite || !prioridad || !estado) {
        return res.status(400).json({
            mensaje: 'Todos los campos son obligatorios'
        });
    }

    const nuevaTarea = {
        id: tareas.length + 1,
        titulo,
        descripcion,
        fechaLimite,
        prioridad,
        estado
    };

    tareas.push(nuevaTarea);

    res.status(201).json({
        mensaje: 'Tarea registrada correctamente',
        tarea: nuevaTarea
    });
});

/*
Endpoint para consultar tareas
GET /api/tareas
*/
app.get('/api/tareas', (req, res) => {
    res.json(tareas);
});

// Manejo básico de errores
app.use((req, res) => {
    res.status(404).json({
        mensaje: 'Ruta no encontrada'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
