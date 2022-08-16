import config from '../config/config'

let valid = {'enchants':1,'attributes':2,'unbreakable':4,'candestroy':8,'canplaceon':16,'misc':32,'dyed':64}
register('command', (...args) => {
    let tot = 0
    let reg = []
    let item = Player.getHeldItem()
    if (args[0]==='list') return ChatLib.chat(`&6&m-------&6 Flags &6&m-------\n&eenchants, attributes, unbreakable, candestroy, canplaceon, misc, dyed\nExample: /hideflags enchants unbreakable\nYou can type "all" to hide all flags!\n&6&m--------------------`)
    if (item) {
        if (item.getNBT().getTag('tag')) {
            if (args[0]==undefined && config['hf-defaultall']==false) {
                return ChatLib.chat('&cEnter flags to hide! Do /hideflags list to see these flags!') 
            } else if (args[0]==undefined && config['hf-defaultall']==true) {
                item.getNBT().getTag('tag').setByte('HideFlags', 127);
                return ChatLib.chat(`&aSuccessfully hidden &eall&a flags!`)
            }

            if (args.includes('all')) {
                item.getNBT().getTag('tag').setByte('HideFlags', 127);
                return ChatLib.chat(`&aSuccessfully hidden &eall&a flags!`)
            }

            for (let i = 0; i < args.length; i++) {
                x = args[i]
                if (!Object.keys(valid).includes(x)) return ChatLib.chat('&cEnter valid flags to hide! Do /hideflags list to see these flags!')
                if (reg.includes(x)==true) { break; }
                tot = tot + valid[x]
                reg.push(x)
            }
            item.getNBT().getTag('tag').setByte('HideFlags', tot)
            ChatLib.chat(`&aSuccessfully hidden &e${reg.length}&a flags!`)
        } else return ChatLib.chat('&cHold an item with flags! (Enchantments, effects, etc)')
    } else return ChatLib.chat('&cHold an item to remove flags from!')
    console.log(item)
}).setCommandName('hideflags').setAliases('hf')
