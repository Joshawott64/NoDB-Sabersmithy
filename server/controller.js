let saberData = [
    {id: 0, isDefault: true, name: 'Vader Saber', color: 'red', emitter: '../src/assets/SaberParts/VaderEmitter.png', guard: '../src/assets/SaberParts/VaderGuard.png', switch: '../src/assets/SaberParts/VaderSwitch.png', pommel:'../src/assets/SaberParts/VaderPommel.png'},
    {id: 1, isDefault: true, name: 'Luke Saber', color: 'blue', emitter: '../src/assets/SaberParts/LukeEmitter.png', guard: '../src/assets/SaberParts/LukeGuard.png', switch: '../src/assets/SaberParts/LukeSwitch.png', pommel: '../src/assets/SaberParts/LukePommel.png'},
    {id: 2, isDefault: true, name: 'Youngling Slayer 3000', color: 'blue', emitter: '../src/assets/SaberParts/AnakinEmitter.png', guard: '../src/assets/SaberParts/AnakinGuard.png', switch: '../src/assets/SaberParts/AnakinSwitch.png', pommel: '../src/assets/SaberParts/AnakinPommel.png'},
]

let globalId = 3

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

        res.status(200).send(saberData)
    }
}

export default handlerFunctions