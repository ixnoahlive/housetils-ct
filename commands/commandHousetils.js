import config from '../config/config'
const officialCommands = ['housetils','hideflags','showflags','copyxyz']
const unofficialCommands = ['rename','skull']
register('command', () => {
    ChatLib.chat('&6&m-----------------------------------------------------')
    ChatLib.chat('&6Housetils Commands:')
    ChatLib.chat(`&f${officialCommands.sort().join(', ')}`)
    ChatLib.chat('&6&m-----------------------------------------------------')
}).setCommandName('housetils').setAliases('ht')