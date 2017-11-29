const fs = require('fs')
const parts = 100
const total = 1000

let arrayParts = []
let path = ""

// Preenche o array para marcacao dos diretórios
for (let i = 1; i <= parts; i++) arrayParts.push(i * total);

function convertToMegabytes(bytes) {
    return bytes / 1024 / 1024
}
function calc(data, callback) {

    data = data.split('\n')

    let total = 0
    data.map( (value, position) => {
        // if (position < 100)
        // if (position >= 100 && position < 200)
        // if (position >= 200 && position < 300)
        // if (position >= 300 && position < 400)
        // if (position >= 400 && position < 500)
        // if (position >= 500 && position < 600)
        // if (position >= 600 && position < 700)
        // if (position >= 700 && position < 800)
        // if (position >= 800 && position < 900)
        if (position >= 900 && position < 1000)

            total +=  parseInt(value)
    })

    callback(total / (data.length - 2))
}

// ============================================ V8
let promissesV8Post = []
let promissesV8Get = []
let promissesV8Put = []
let promissesV8Delete = []
let promissesV8Tempo = []

for (let i = 0 ; i < parts; i++) {
    promissesV8Post.push(new Promise((resolve, reject) => {
        fs.readFile(`./v8/tests_${arrayParts[i]}/registrosMemoriaPost.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesV8Get.push(new Promise((resolve, reject) => {

        fs.readFile(`./v8/tests_${arrayParts[i]}/registrosMemoriaGet.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesV8Put.push(new Promise((resolve, reject) => {

        fs.readFile(`./v8/tests_${arrayParts[i]}/registrosMemoriaPut.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesV8Delete.push(new Promise((resolve, reject) => {

        fs.readFile(`./v8/tests_${arrayParts[i]}/registrosMemoriaDelete.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesV8Tempo.push(new Promise((resolve, reject) => {

        fs.readFile(`./v8/tests_${arrayParts[i]}/tempoTestes.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            data = data.replace('\n', '')

            resolve(parseInt(data))
        });
    }))
}

Promise.all (promissesV8Post)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais_a_cada_100.txt', `V8 - POST : Média: ${total / data.length} \n`)
    })
Promise.all (promissesV8Get)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais_a_cada_100.txt', `V8 - GET : Média: ${total / data.length} \n`)
    })
Promise.all (promissesV8Put)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais_a_cada_100.txt', `V8 - Put : Média: ${total / data.length} \n`)
    })
Promise.all (promissesV8Delete)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais_a_cada_100.txt', `V8 - Delete : Média: ${total / data.length} \n`)
    })
Promise.all (promissesV8Tempo)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais_a_cada_100.txt', `V8 - Tempo de execução : Média: ${total / data.length} \n`)
    })

// // ============================================ ChakraCore
let promissesChakraCorePost = []
let promissesChakraCoreGet = []
let promissesChakraCorePut = []
let promissesChakraCoreDelete = []
let promissesChakraCoreTempo = []

for (let i = 0 ; i < parts; i++) {
    promissesChakraCorePost.push(new Promise((resolve, reject) => {

        fs.readFile(`./chakracore/tests_${arrayParts[i]}/registrosMemoriaPost.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesChakraCoreGet.push(new Promise((resolve, reject) => {

        fs.readFile(`./chakracore/tests_${arrayParts[i]}/registrosMemoriaGet.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesChakraCorePut.push(new Promise((resolve, reject) => {

        fs.readFile(`./chakracore/tests_${arrayParts[i]}/registrosMemoriaPut.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesChakraCoreDelete.push(new Promise((resolve, reject) => {

        fs.readFile(`./chakracore/tests_${arrayParts[i]}/registrosMemoriaDelete.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesChakraCoreTempo.push(new Promise((resolve, reject) => {

        fs.readFile(`./chakracore/tests_${arrayParts[i]}/tempoTestes.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            data = data.replace('\n', '')

            resolve(parseInt(data))
        });
    }))
}

Promise.all (promissesChakraCorePost)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais_a_cada_100.txt', `ChakraCore - POST : Média: ${total / data.length} \n`)
    })
Promise.all (promissesChakraCoreGet)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais_a_cada_100.txt', `ChakraCore - GET : Média: ${total / data.length} \n`)
    })
Promise.all (promissesChakraCorePut)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais_a_cada_100.txt', `ChakraCore - Put : Média: ${total / data.length} \n`)
    })
Promise.all (promissesChakraCoreDelete)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais_a_cada_100.txt', `ChakraCore - Delete : Média: ${total / data.length} \n`)
    })
Promise.all (promissesChakraCoreTempo)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais_a_cada_100.txt', `ChakraCore - Tempo de execução : Média: ${total / data.length} \n`)
    })