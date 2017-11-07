const fs = require('fs')

function convertToMegabytes(bytes) {
    return bytes / 1024 / 1024
}
function calc(data, callback) {

    data = data.split('\n')

    let total = 0
    data.map( (value, position) => {
        if (position < 1000)
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

for (let i = 1 ; i <= 3; i++) {
    promissesV8Post.push(new Promise((resolve, reject) => {

        fs.readFile(`./v8/teste-${i}/registrosMemoriaPost.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesV8Get.push(new Promise((resolve, reject) => {

        fs.readFile(`./v8/teste-${i}/registrosMemoriaGet.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesV8Put.push(new Promise((resolve, reject) => {

        fs.readFile(`./v8/teste-${i}/registrosMemoriaPut.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesV8Delete.push(new Promise((resolve, reject) => {

        fs.readFile(`./v8/teste-${i}/registrosMemoriaDelete.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesV8Tempo.push(new Promise((resolve, reject) => {

        fs.readFile(`./v8/teste-${i}/tempoTestes.txt`, 'utf8', function (err, data) {
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

        fs.appendFileSync('./resultados_finais.txt', `V8 - POST : [${data}] -> Média: ${total / data.length} \n`)
    })
Promise.all (promissesV8Get)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais.txt', `V8 - GET : [${data}] -> Média: ${total / data.length} \n`)
    })
Promise.all (promissesV8Put)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais.txt', `V8 - Put : [${data}] -> Média: ${total / data.length} \n`)
    })
Promise.all (promissesV8Delete)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais.txt', `V8 - Delete : [${data}] -> Média: ${total / data.length} \n`)
    })
Promise.all (promissesV8Tempo)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais.txt', `V8 - Tempo de execução : [${data}] -> Média: ${total / data.length} \n`)
    })

// ============================================ ChakraCore
let promissesChakraCorePost = []
let promissesChakraCoreGet = []
let promissesChakraCorePut = []
let promissesChakraCoreDelete = []
let promissesChakraCoreTempo = []

for (let i = 1 ; i <= 3; i++) {
    promissesChakraCorePost.push(new Promise((resolve, reject) => {

        fs.readFile(`./chakracore/teste-${i}/registrosMemoriaPost.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesChakraCoreGet.push(new Promise((resolve, reject) => {

        fs.readFile(`./chakracore/teste-${i}/registrosMemoriaGet.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesChakraCorePut.push(new Promise((resolve, reject) => {

        fs.readFile(`./chakracore/teste-${i}/registrosMemoriaPut.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesChakraCoreDelete.push(new Promise((resolve, reject) => {

        fs.readFile(`./chakracore/teste-${i}/registrosMemoriaDelete.txt`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }

            calc(data, function (result) {
                resolve(result)
            })
        });
    }))
    promissesChakraCoreTempo.push(new Promise((resolve, reject) => {

        fs.readFile(`./chakracore/teste-${i}/tempoTestes.txt`, 'utf8', function (err, data) {
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

        fs.appendFileSync('./resultados_finais.txt', `ChakraCore - POST : [${data}] -> Média: ${total / data.length} \n`)
    })
Promise.all (promissesChakraCoreGet)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais.txt', `ChakraCore - GET : [${data}] -> Média: ${total / data.length} \n`)
    })
Promise.all (promissesChakraCorePut)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais.txt', `ChakraCore - Put : [${data}] -> Média: ${total / data.length} \n`)
    })
Promise.all (promissesChakraCoreDelete)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais.txt', `ChakraCore - Delete : [${data}] -> Média: ${total / data.length} \n`)
    })
Promise.all (promissesChakraCoreTempo)
    .then( data => {
        let total = 0
        data.map( (value, position) => {
            if (position < data.length)
                total += value
        })

        fs.appendFileSync('./resultados_finais.txt', `ChakraCore - Tempo de execução : [${data}] -> Média: ${total / data.length} \n`)
    })