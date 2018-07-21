const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)

    // Get the path
    const path = parsedUrl.pathname
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')

    // Get the HTTP Method
    const method = req.method.toLowerCase()

    if(trimmedPath == 'hello' && method == 'post'){
        res.setHeader('Content-Type', 'application/json')
        res.writeHead(200)
        res.end(JSON.stringify({'message': 'Hello'}))
    }
})

server.listen(3000, () => {
    console.log('The server is listening on port ' + 3000)
})