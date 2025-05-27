import express from 'express';

// Crear una instancia de Express
const app = express();
// Configurar el puerto en el que el servidor escuchara
const PORT = 3000;

// Ruta GET con parametro de ruta
// Solicitud: http://localhost:3000/profile?edad=41
app.get('/profile', (req, res) => {
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});
// Solicitud: http://localhost:3000/user?edad=41
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`ID del usuario recibido: ${userId}`)
    res.send(`Perfil del usuario con ID: ${userId}`);
});

// Inciar el servidor

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});