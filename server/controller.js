let saberData = [
    {id: 0, isDefault: true, name: 'Vader Saber', color: 'red', emitter: './assets/SaberParts/VaderEmitter.png', guard: './assets/SaberParts/VaderGuard.png', switch: './assets/SaberParts/VaderSwitch.png', pommel:'./assets/SaberParts/VaderPommel.png'},
    {id: 1, isDefault: true, name: 'Luke Saber', color: 'blue', emitter: './assets/SaberParts/LukeEmitter.png', guard: './assets/SaberParts/LukeGuard.png', switch: './assets/SaberParts/LukeSwitch.png', pommel: './assets/SaberParts/LukePommel.png'}
]

let globalId = 2

const handlerFunctions = {
    getSabers: (req, res) => {
        res.status(200).send(saberData)
    },
    addSaber: (req, res) => {
        const newSaber = req.body

        newSaber.id = globalId

        saberData.push(newSaber)

        globalId++

        res.status(200).send(saberData)
    },
    editSaber: (req, res) => {
        const {id} = req.params
        const editedSaber = req.body
        editedSaber.id = +id
        
        const index = saberData.findIndex((el) => el.id === +id)

        saberData.splice(index, 1, editedSaber)

        res.status(200).send(saberData)
    },
    deleteSaber: (req, res) => {
        const {id} = req.params
        
        saberData = saberData.filter((el) => el.id != id)

        res.status(200).send(invoiceData)
    }
}

export default handlerFunctions