// Rand Token
const token = ~~[Math.random() * 0123456789]
let userName = "Miki_Moli"
const listImg = ['🍌', '🍍', '🍏']

function generatorApi() {
    const numeric = '1234567890'
    const upperAz = 'ABCDEFGHIJKLMNOPRSTUVWXYZ'
    const lowerAz = 'abcdefghijklmnopqrstuvwxyz'
    const generator = upperAz + numeric + lowerAz 
    let resultGenerator = ''
    for (let i = 0; i < 10; i++) {
        resultGenerator += generator[Math.floor([Math.random() * generator.length])]
    }
    return resultGenerator;
}

function getToken(userName, callback) {
    console.info("Membaca User .....")
    if(userName)
    setTimeout(() => {
        console.info("User valid ! ✅")
        callback({ token, userName })
    }, 200);
}

function getApi(token, callback) {
    console.info("API Key di Proses...")
    if (token)
        setTimeout(() => {
        console.info("API Key Valid ! ✅")
        callback({apiKey: generatorApi()})
    }, 500);
}

function showImg() {
    const createImg = document.createElement('img')
    createImg.setAttribute('src', 'cat.jpg')
    createImg.style.width = '300px'
    document.body.appendChild(createImg)
}

function getPict(apiKey, callback) {
    console.info("Foto Sedang di Proses...")
    if (apiKey)
    setTimeout(() => {
        console.info('Gambar berhasil tampil ✅')
        callback(listImg)
    }, 1500)
}

getToken("userName", (response) => {
    const generateToken = response
    console.info(generateToken)
    getApi(generateToken, (response) => {
        const generateApi = response
        console.info(generateApi)
        getPict(generateApi, (response) => {
            const generatePicture = response;
            console.info(generatePicture)
        })
    })
})

// const generateToken = getToken(userName)
// const generateApi = getApi(generateToken.token)
// const getPicture = secretPict(generateApi.apiKey)

// console.info(generateToken)
// console.info(generateApi)