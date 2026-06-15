ServerEvents.tags('block', event => {


    colorsVanilla.forEach(color => {
        event.add(`c:storage_blocks/${color}_dye`, `dye_depot:${color}_dye_basket`)
        event.add('c:storage_blocks', `#c:storage_blocks/${color}_dye`)
    })
    colorsDyeDepot.forEach(color => {
        event.add(`c:storage_blocks/${color}_dye`, `dye_depot:${color}_dye_basket`)
        event.add('c:storage_blocks', `#c:storage_blocks/${color}_dye`)
    })
    event.remove('c:storage_blocks/chorus_fruit', 'quark:chorus_fruit_block')
    event.add('c:storage_blocks/chorus_fruit', 'ends_delight:chorus_fruit_crate')
    event.add('c:storage_blocks/shadoline', 'enderscape:raw_shadoline_block')
    event.add('c:storage_blocks/rice_panicle', 'kaleidoscope_cookery:straw_block')
    event.add('c:storage_blocks/hemp', 'nirvana:hemp_crate')
    event.add('c:storage_blocks/weed', 'nirvana:weed_crate')
    event.add('c:storage_blocks/ravager_hide', 'quark:bonded_ravager_hide')
    event.add('c:storage_blocks/crimson_kelp', 'netherdepthsupgrade:crimson_kelp_block')
    event.add('c:storage_blocks/warped_kelp', 'netherdepthsupgrade:warped_kelp_block')
    event.add('c:storage_blocks/amaranth', 'abyssal_decor:amaranth_crate')
    event.add('c:storage_blocks/boiled_pickerelweed', 'upgrade_aquatic:boiled_pickerelweed_block')

    event.remove('c:storage_blocks', 'enderscape:shadoline_block')
    event.add('c:storage_blocks', [
        '#c:storage_blocks/shadoline', '#c:storage_blocks/neodymium', '#c:storage_blocks/hemp',
        '#c:storage_blocks/weed', '#c:storage_blocks/ravager_hide', '#c:storage_blocks/steel',
        '#c:storage_blocks/raw_uranium', '#c:storage_blocks/crimson_kelp', '#c:storage_blocks/warped_kelp',
        '#c:storage_blocks/amaranth', '#c:storage_blocks/cast_iron', '#c:storage_blocks/bronze',
        '#c:storage_blocks/nethersteel', '#c:storage_blocks/uranium', '#c:storage_blocks/pearl',
        '#c:storage_blocks/boiled_pickerelweed', '#c:storage_blocks/industrial_iron'
    ])
})

ServerEvents.tags('item', event => {


    colorsVanilla.forEach(color => {
        event.add(`c:storage_blocks/${color}_dye`, `dye_depot:${color}_dye_basket`)
        event.add('c:storage_blocks', `#c:storage_blocks/${color}_dye`)
    })
    colorsDyeDepot.forEach(color => {
        event.add(`c:storage_blocks/${color}_dye`, `dye_depot:${color}_dye_basket`)
        event.add('c:storage_blocks', `#c:storage_blocks/${color}_dye`)
    })

    event.remove('c:storage_blocks/chorus_fruit', 'quark:chorus_fruit_block')
    event.add('c:storage_blocks/chorus_fruit', 'ends_delight:chorus_fruit_crate')
    event.add('c:storage_blocks/shadoline', 'enderscape:raw_shadoline_block')
    event.add('c:storage_blocks/rice_panicle', 'kaleidoscope_cookery:straw_block')
    event.add('c:storage_blocks/hemp', 'nirvana:hemp_crate')
    event.add('c:storage_blocks/weed', 'nirvana:weed_crate')
    event.add('c:storage_blocks/ravager_hide', 'quark:bonded_ravager_hide')
    event.add('c:storage_blocks/crimson_kelp', 'netherdepthsupgrade:crimson_kelp_block')
    event.add('c:storage_blocks/warped_kelp', 'netherdepthsupgrade:warped_kelp_block')
    event.add('c:storage_blocks/amaranth', 'abyssal_decor:amaranth_crate')
    event.add('c:storage_blocks/boiled_pickerelweed', 'upgrade_aquatic:boiled_pickerelweed_block')

    event.remove('c:storage_blocks', 'enderscape:shadoline_block')
    event.add('c:storage_blocks', [
        '#c:storage_blocks/shadoline', '#c:storage_blocks/neodymium', '#c:storage_blocks/hemp',
        '#c:storage_blocks/weed', '#c:storage_blocks/ravager_hide', '#c:storage_blocks/steel',
        '#c:storage_blocks/raw_uranium', '#c:storage_blocks/crimson_kelp', '#c:storage_blocks/warped_kelp',
        '#c:storage_blocks/amaranth', '#c:storage_blocks/cast_iron', '#c:storage_blocks/bronze',
        '#c:storage_blocks/nethersteel', '#c:storage_blocks/uranium', '#c:storage_blocks/pearl',
        '#c:storage_blocks/boiled_pickerelweed', '#c:storage_blocks/industrial_iron'
    ])
})

ServerEvents.recipes(event => {


    event.shaped('aethersdelight:arkenium_block', [
        'rrr',
        'rrr',
        'rrr'
    ], {
        r: '#c:raw_materials/arkenium'
    }).id('kubejs:raw_arkenium_block')
    event.shapeless('9x aethersdelight:raw_arkenium',
        '#c:storage_blocks/raw_arkenium'
    ).id('kubejs:raw_arkenium')
    event.shaped('quark:chorus_fruit_block', [
        'cc',
        'cc'
    ], {
        c: 'minecraft:chorus_fruit'
    }).id('quark:building/crafting/compressed/chorus_fruit_block')
    event.shapeless('4x minecraft:chorus_fruit', 'quark:chorus_fruit_block').id('quark:building/crafting/compressed/chorus_fruit_blockuncompress')
    event.shaped('enderscape:shadoline_block', [
        'ss',
        'ss'
    ], {
        s: 'enderscape:shadoline_ingot'
    }).id('enderscape:shadoline_block')
    event.shapeless('4x enderscape:shadoline_ingot', 'enderscape:shadoline_block').id('enderscape:shadoline_ingot')
})
