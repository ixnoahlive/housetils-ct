import config from '../config/config'
register('command', () => {
    let X = Player.getX().toFixed(3)
    let Y = Player.getY().toFixed(3)
    let Z = Player.getZ().toFixed(3)

    let Pitch = Player.getPitch().toFixed(1)
    let Yaw = Player.getYaw().toFixed(1)

    if (config['coord-round']==true) {
        X = Math.floor(X)+.5
        Y = Math.floor(Y)+.5
        Z = Math.floor(Z)+.5
    }

    let Component = new TextComponent(`&eYour current coordinates:\n&b${X} ${Y} ${Z} &6${Yaw} ${Pitch}`)
    .setHoverValue('&aClick to copy to clipboard!')
    .setClick('run_command', `/ct copy ${X} ${Y} ${Z} ${Yaw} ${Pitch}`)
    ChatLib.chat(Component)
}).setCommandName('copyxyz').setAliases('xyz','coords')