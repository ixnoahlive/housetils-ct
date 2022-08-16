register('command', (...args) => {
    let heldItem = Player.getHeldItem()
    if (!heldItem.getRegistryName()=="minecraft:skull") return ChatLib.chat('&cHold a valid head with a SkullOwner tag!')
    if (!heldItem.getNBT().getTag('tag')) {
        return ChatLib.chat('&cHold a valid head with a SkullOwner tag!')
    } else {
        console.log(heldItem.getNBT())
        heldItem.getNBT().getTag('tag').setString('SkullOwner', 'ixNoah')
        console.log(heldItem.getNBT())
    }
}).setCommandName('skull').setAliases('sk')