// Se añade mongo
const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const Tarea = require('./modelos/tarea');

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

/*
Endpoint para registrar una tarea
POST /api/tareas
*/
app.post('/api/tareas', async (req, res) => {

    try {

        const { titulo, descripcion, fechaLimite, prioridad, estado } = req.body;

        if (!titulo || !descripcion || !fechaLimite || !prioridad || !estado) {
            return res.status(400).json({
                mensaje: 'Todos los campos son obligatorios'
            });
        }

        const nuevaTarea = new Tarea({
            titulo,
            descripcion,
            fechaLimite,
            prioridad,
            estado
        });

        await nuevaTarea.save();

        res.status(201).json({
            mensaje: 'Tarea guardada en MongoDB',
            tarea: nuevaTarea
        });

    } catch (error) {
        console.error("ERROR REAL:", error);
        res.status(500).json({
            mensaje: 'Error al guardar la tarea'
        });

    }

});

/*
Endpoint para consultar tareas
GET /api/tareas
*/
app.get('/api/tareas', async (req, res) => {

    try {

        const tareas = await Tarea.find();
        res.json(tareas);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al consultar tareas'
        });

    }

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
