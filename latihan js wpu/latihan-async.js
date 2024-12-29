const allInput = document.querySelectorAll('input')
const [user, token, apikey] = allInput

const randToken = ~~[Math.random() * 12345678]
console.info(randToken)

// API Key
function randApiKey() {
    const upperBet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerBet = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "1234567890"
    const generator = upperBet + lowerBet + numbers
    let resultGenerate = ""
    for (let i = 0; i < 8; i++) {
        resultGenerate += generator[Math.floor(Math.random() * generator.length)]
    }
    return resultGenerate
}

const tokenKey = randToken

// Function Generate Token

function genToken(params) {
    user.addEventListener('change',()=> {
        params = user.value
        console.info({tokenKey})
        token.value = tokenKey
    })
}

// Function Generate API

// function genApi(tokenKey) {
//     if(tokenKey) return apikey.value = 
// }

const users = genToken()
console.info(users)

allInput.value = ''
