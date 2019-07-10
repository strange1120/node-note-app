const fs = require('fs')


const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)

data.name == 'Kyle'
data.age == 32

const newJson = JSON.stringify(data)
fs.writeFileSync('1-JSON.json', newJson)