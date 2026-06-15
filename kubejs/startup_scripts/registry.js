Platform.mods.kubejs.name = 'karton creëren2'

StartupEvents.registry('item', event => {

    event.create('pet').displayName('Eggo').texture('kubejs:item/eggo')
    event.create('backpack_slot')
    event.create('crushed_raw_arkenium')
        .tag('create:crushed_raw_materials')

    event.create('loose_cogwheel')
        .displayName('Unfinished Cogwheel')
    event.create('loose_large_cogwheel')
        .displayName('Unfinished Large Cogwheel')
    event.create('andesite_powder')
    event.create('andesite_alloy_blend')
})

StartupEvents.registry('fluid', event => {
    event.create('molten_andesite_alloy', 'thick')
        .tint(0xFFFFFF)
        .stillTexture('kubejs:block/molten_andesite_alloy')
        .flowingTexture('kubejs:block/molten_andesite_alloy_flowing')
        .noBlock()
        .noBucket()
})
