const token = ~~[Math.random() * 123456789]
const pictures = ["🍏", "🍌", "🍍"]

function login(userName) {
    if (userName)
    setTimeout(() => {
        return {token, userName}
    }, 300);
}

console.info(login('Cindys'))