const lib = require('../dist/index')

function generateNormal() {
    return lib.normalize([Math.random(), Math.random()])
}

const datas = []

for (let i = 0; i < 30; ++i) {
    datas.push({ normal: generateNormal(), type: 'Joint' })
    datas.push({ normal: generateNormal(), type: 'Stylolite' })
}

lib.monteCarlo(datas, 10000) 
