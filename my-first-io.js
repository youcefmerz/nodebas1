const fs = require('fs')
const buf = fs.readFileSync(process.argv[2])

const str = buf.toString()
const tab = str.split("\n")
console.log(tab.length - 1 )


