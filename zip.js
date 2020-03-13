var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();
var r = fs.createReadStream('./myOutput.txt');
var w = fs.createWriteStream('./myOutput.txt.gz');
r.pipe(gzip).pipe(w);