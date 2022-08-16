console.log('123')
/*
register('command', (...args) => {
    switch (args[0]) {
        case "help":
            ChatLib.chat('&6&m-----------------------------------------------------')
            ChatLib.chat('&6Housetils Commands:')
            ChatLib.chat(`&f${officialCommands.sort().join(', ')}`)
            ChatLib.chat('&6&m-----------------------------------------------------')
        break;

        case "unbreakable":
            let heldItem = Player.getHeldItem()
            if (heldItem) {
                heldItem.getItemNBT().getTag('tag').setByte('Unbreakable',1)
                ChatLib.chat('&aMade held item unbreakable!')
            } else {
                ChatLib.chat('&cPlease hold an item to make unbreakable!')
            }
        break;

        default:
            ChatLib.chat('&f[&6HT&f] &cInvalid command, run /ht help for all commands!')
        break;
    }
}).setName('ht')
*/