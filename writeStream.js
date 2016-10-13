var fs = require('fs');
var data = "Written to output.txt by writeStream.js";

var writerStream = fs.createWriteStream("output.txt");

writerStream.write(data, "UTF8");

writerStream.end();

writerStream.on("finish", function(){
  console.log("write complete...");
});

writerStream.on("error", function(err){
  console.log(err.stack);
});

console.log("End");