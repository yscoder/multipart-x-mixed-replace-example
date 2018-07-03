const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'multipart/x-mixed-replace; boundary=--test' })

    let i = 1

    function sendData() {
        const content = fs.readFileSync(`./imgs/run${i}.png`)
        res.write(`--test\nContent-Type: image/png\nContent-length: ${content.length}\n\n`)
        res.write(content)
        i = i === 20 ? 1 : i + 1
        setTimeout(sendData, 50)
    }

    setTimeout(sendData, 50)
})

server.listen(8090)
console.log('Server running!')
