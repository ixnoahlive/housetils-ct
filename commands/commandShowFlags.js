register('command', () => {
    let item = Player.getHeldItem()
    if (item) {
        if (item.getNBT().getTag('tag')) {
            ChatLib.chat('&aAll tags are now being displayed!')
            item.getNBT().getTag('tag').setByte('HideFlags', 0)
        } else {
            ChatLib.chat('&cNo tag compound found, so all flags are already shown.')
        }
    }
}).setCommandName('showflags').setAliases('sf')