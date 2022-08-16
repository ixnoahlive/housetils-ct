const MCNBTTagString = Java.type("net.minecraft.nbt.NBTTagString");
const MCNBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");

register('command', (...args)=>{
    const item = Player.getHeldItem();
    const nbt = item.getNBT();
    new NBTTagList(
        nbt.getTag("tag").getTag("display").get("Lore").rawNBT
    ).appendTag(new MCNBTTagString("§aaaaawawawfadfds"));
}).setCommandName('lore')