// Importaciones
import express from 'express';  
import 'dotenv/config' 

// Instancias
const app = express();
const PORT = process.env.PORT || 3000;
// Elevación Servidor: Creo una ruta básica para probar 
// la funcionalidad del servidor
 app.get('/', (req, res) => {
    res.send('hola server')
 });
app.listen(PORT, () => console.log(`Servidor corriendo en puerto http://localhost:3000`));{
   
}