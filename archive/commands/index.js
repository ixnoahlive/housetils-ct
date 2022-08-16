const officialCommands = ['help']

function isCreative() {
    return Player.asPlayerMP().player.field_71075_bZ.field_75098_d // thanks housing editor <3 <3 <3
}
// Will use this just to get some things working, then switch to a proper handler!
register('command', (...args) => {
    let heldItem;
    switch (args[0]) {

        case "help":
            ChatLib.chat('&6&m-----------------------------------------------------')
            ChatLib.chat('&6Housetils Commands:')
            ChatLib.chat(`&f${officialCommands.sort().join(', ')}`)
            ChatLib.chat('&6&m-----------------------------------------------------')
        break;

        case "unbreakable":
            if (!isCreative()) return ChatLib.chat('&cYou must be in creative mode to use this command!')
            heldItem = Player.getHeldItem()

            if (heldItem) { 
                if (!heldItem.getItemNBT().getTag('tag')) {
                    const MCNBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
                    heldItem.getItemNBT().set("tag", new NBTTagCompound(new MCNBTTagCompound()));
                } 
                    heldItem.getItemNBT().getTag('tag').setByte('Unbreakable',1)
                
                ChatLib.chat('&aMade held item unbreakable!')
            } else {
                ChatLib.chat('&cPlease hold a valid item to make unbreakable!')
            }
        break;

        default:
            ChatLib.chat('&f[&6HT&f] &cInvalid command, run /ht help for all commands!')
        break;
    }
}).setName('ht')