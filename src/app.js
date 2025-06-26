// Importaciones
import express from 'express';  
import PORT from 'config';
// Instancias
const app = express();
const PORT = process.env.PORT || 3000;
// Elevación Servidor: Creo una ruta básica para probar 
// la funcionalidad del servidor
 app.get('/', (req, res) => {
    res.send('Servidor corriendo correctamente, ahora añadí nodemon ')
 });
app.listen(PORT, () => console.log(`Servidor corriendo en puerto http://localhost:3000`));{
   

}