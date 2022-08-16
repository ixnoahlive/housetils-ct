// Read config

let config = FileLib.read('Housetils', 'config/config.yaml')
if (!config) throw new Error('Error while reading config!')
let lines = config.split('\n')
let newlines = []
lines.forEach((x) => {
    if (!(x==undefined | x.length<3 | x.startsWith('#'))) {
        newlines.push(x)
    }
})

config = {}
newlines.forEach((x) => {
    x = x.split(':', 2)
    x[0] = x[0].trim()
    x[1] = x[1].trim()
    if (x[1]==='true') x[1] = true
    if (x[1]==='false') x[1] = false
    config[x[0]] = x[1]
})

console.log('[HT] Loaded config!')
export default config;