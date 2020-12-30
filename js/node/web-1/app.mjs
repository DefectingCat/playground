import http from 'http';
import fs from 'fs';

let server = http.createServer((req, res) => {
    
    let data = fs.readFileSync('./www/index.html', 'utf-8');
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(data),
        'Content-Type': 'text/html'
    })
    res.end(data);
}).listen(4000);

console.log('running at 4000');