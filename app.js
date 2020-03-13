const http = require('http');
const fs = require('fs');
var zlib = require('zlib');

const server = http.createServer((req, res) => {
    //gzconsole.log(req.method);
    if (req.method == "POST"){
        // Create writer stream
        var wstream = fs.createWriteStream('myOutput.txt');

        let body = [];
        let first = ""
        let nb_chunk = 0;
        let nb_items = 0;
        req.on('data', chunk => {
            nb_chunk += 1;
            let data =  chunk.toString().split('\n');
            let last = data[data.length -1];
            if(first){
                data[0] = first + data[0];
            }
            else{
                if(data[0] === ''){
                    data = data.slice(1);
                }
            }
            if (last.length !== 10) {
                first = last;
                body = data.slice(0, data.length -1);
            }
            else {
                body = data;
                first = "";
            }

            nb_items += body.length;
            body = body.filter(startsWithA);
            body.forEach (item => wstream.write(item + '\n'));
            //wstream.on('error', function(err){    console.log(err.stack);       });
            //wstream.on('finish', function() {    console.log("Write success.");   });
        });
        req.on('end', () => {
            try{
                console.log("Numbers of chunks : " + nb_chunk);
                console.log("Number of items : " + nb_items);
                const used = process.memoryUsage().heapUsed / 1024 / 1024;
                console.log(`The script uses approximately ${used} MB`);
                wstream.end();
                res.end();
                //var gzip = zlib.createGzip();
                var r = fs.createReadStream('./myOutput.txt');
                //var w = fs.createWriteStream('./myOutput.txt.gz');
                //r.pipe(gzip).pipe(w); // problème le zip ne contient que la première ligne, si on effectue les mêmes commandes  dans un autre script avec node zip.js, ça marche bien
            }
            catch (er){
                res.statusCode = 400;
                return res.end(`error: ${er.message}`);
            }
        });
    }
    else {
        return res.end("Get method");
    }
});
server.listen(3000, () => console.log(`Adresse du serveur : http://localhost:3000`));

function startsWithA(item){
    return item.charAt(0) === "A";
}