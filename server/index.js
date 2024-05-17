// import packages
import express from 'express'
import ViteExpress from 'vite-express'
import handlerFunctions from './controller.js'

// create Express instance
const app = express()

// set up middleware
app.use(express.json())

// endpoints
const {getSabers, addSaber, editSaber, deleteSaber, test} = handlerFunctions

app.get('/gallery', getSabers)
app.post('/forge', addSaber)
app.delete('/delete/:id', deleteSaber)
app.put('/edit/:id', editSaber)


// open door to server with .listen()
ViteExpress.listen(app, 66, () => console.log('Excecute port 66! http://localhost:66'))