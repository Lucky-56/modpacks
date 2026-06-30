//priority: 1

const colorsVanilla = [
    'white', 'light_gray', 'gray', 'black',
    'brown', 'red', 'orange', 'yellow',
    'lime', 'green', 'cyan', 'light_blue',
    'blue', 'purple', 'magenta', 'pink'
]
const colorsDyeDepot = [
    'maroon', 'rose', 'coral', 'ginger',
    'tan', 'beige', 'olive', 'amber',
    'forest', 'verdant', 'teal', 'aqua',
    'mint', 'navy', 'slate', 'indigo'
]
function dyeItem(color, override_source) {
    let prefix = 'minecraft'
    if (colorsDyeDepot.includes(color)) { prefix = 'dye_depot' }
    else if (colorsDyenamics.includes(color)) prefix = 'dyenamics'
    return `${override_source ? override_source : prefix}:${color}_dye`
}
const colorsDyenamics = [
    'amber', 'aquamarine', 'bubblegum', 'cherenkov',
    'conifer', 'fluorescent', 'honey', 'icy_blue',
    'lavender', 'maroon', 'mint', 'navy',
    'peach', 'persimmon', 'rose', 'spring_green',
    'ultramarine', 'wine'
]
const woodTypesVanilla = [
    'oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry'
]
const woodTypesVanillaNether = [
    'crimson', 'warped'
]
const copperVariants = [
    '', 'exposed_', 'weathered_', 'oxidized_', 'waxed_', 'waxed_exposed_', 'waxed_weathered_', 'waxed_oxidized_'
]
const corundumColors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'
]

ServerEvents.tags('block', event => {

    event.add('artifacts:rooted_boots_grass', 'trmt:eroded_grass_block')

    event.add('create:wrench_pickup', 'dndesires:bore_block')

    event.add('c:chains', ['aether_beyond_parity:zanite_chain', 'abyssal_decor:seabrass_chain', 'abyssal_decor:deepbronze_chain'])

    event.add('kubejs:tuff_ore_replaceables', ['minecraft:tuff', 'caverns_and_chasms:schist'])

    event.add('kubejs:pots', 'minecraft:decorated_pot')
    colorsVanilla.forEach(color => {
        event.add('create:wrench_pickup', `dndesires:${color}_bore_block`)
        event.add('kubejs:pots', `clayworks:${color}_decorated_pot`)
    })
    colorsDyeDepot.forEach(color => {
        event.add('create:wrench_pickup', `dndesires:${color}_bore_block`)
        event.add('kubejs:pots', `dye_the_world:${color}_decorated_pot`)
    })
})

ServerEvents.tags('item', event => {

    event.add('caverns_and_chasms:additional_toolbox_tools', [
        '#supplementaries:altimeters', '#kubejs:tfmg/multimeters',

        'caverns_and_chasms:barometer', 'caverns_and_chasms:depth_gauge',
        'chalk:chalk_box', 'create:clipboard', 'create:wrench', 'creaturefeature:open_mind',
        'measurements:tape_measure', 'minecraft:compass', 'oreganized:speedometer',
        'oreganized:thermometer', 'oreganized:unknown_device', 'powergrid:multimeter', 'quark:abacus',
        'refurbished_furniture:wrench', 'starcatcher:starcatcher_rod', 'tide:climate_gauge', 'tide:depth_meter'
    ])

    event.add('dynamiccrosshair:tools', [
        'create:handheld_worldshaper', 'simulated:creative_physics_staff'
    ])
    event.add('dynamiccrosshair:ranged_weapons', [
        '#quark:pickarangs',

        'create:potato_cannon'
    ])

    event.removeAllTagsFrom(['dndesires:handheld_drill', 'dndesires:handheld_saw'])

    event.add('c:hidden_from_recipe_viewers', [
        'lifesizebdubs:imposter_tnt', 'lifesizebdubs:imposter_egg'
    ])

    event.add('c:chains', [
        'aether_beyond_parity:zanite_chain', 'abyssal_decor:seabrass_chain', 'abyssal_decor:deepbronze_chain'
    ])
    copperVariants.forEach(variant => {
        event.remove('create:chain_rideable', `minecraft:${variant}copper_chain`)
    })
    event.add('kubejs:tfmg/multimeters', 'tfmg:multimeter')
    colorsVanilla.forEach(color => {
        event.add('kubejs:tfmg/multimeters', `tfmg:${color}_multimeter`)
    })

    //thanks to @pigturtle on discord
    // this works but returns an ItemStack[]
    let foodItems = Ingredient.all.stackArray.filter(stack => stack.getFoodProperties(null) != null)

    // the .map() call is necessary because event.add() excpects an Item or Item[]
    event.add("kubejs:edible", [foodItems.map(stack => stack.item), '#c:foods/edible_when_placed', 'ftblibrary:icon_item'])
})

ServerEvents.recipes(event => {
    function elemental_painting(dye, painting) {
        event.shapeless(`minecraft:painting[entity_data={id:"minecraft:painting",variant:"${painting}"}]`, ['minecraft:painting', `minecraft:${dye}_dye`]).id(`kubejs:crafting/${dye}_elemental_painting_manual_only`)
    }

    elemental_painting('white', 'minecraft:wind')
    elemental_painting('light_gray', 'portfolio:fauna')
    elemental_painting('gray', 'portfolio:decay')
    elemental_painting('black', 'portfolio:night')
    elemental_painting('brown', 'minecraft:earth')
    elemental_painting('red', 'portfolio:ichor')
    elemental_painting('orange', 'minecraft:fire')
    elemental_painting('yellow', 'portfolio:light')
    elemental_painting('lime', 'portfolio:flora')
    elemental_painting('green', 'portfolio:chaos')
    elemental_painting('cyan', 'portfolio:frost')
    elemental_painting('light_blue', 'minecraft:water')
    elemental_painting('blue', 'portfolio:nullity')
    elemental_painting('purple', 'portfolio:ether')
    elemental_painting('magenta', 'portfolio:order')
    elemental_painting('pink', 'portfolio:life')

    //missing
    event.shaped('aethersdelight:arkenium_knife', [
        'A',
        'S'
    ], {
        A: 'aethersdelight:arkenium_ingot',
        S: 'aether:skyroot_stick'
    }).id('kubejs:crafting/arkenium_kinfe')
    event.shaped('aethersdelight:raw_arkenium_block', [
        'rrr',
        'rrr',
        'rrr'
    ], {
        r: '#c:raw_materials/arkenium'
    }).id('kubejs:crafting/raw_arkenium_block')
    event.shapeless('9x aethersdelight:raw_arkenium', '#c:storage_blocks/raw_arkenium').id('kubejs:crafting/raw_arkenium_from_block')

    //integration
    event.shaped('create:steam_whistle', [
        'S',
        'I',
        'P'
    ], {
        S: '#c:plates/gold',
        I: '#c:ingots/gold',
        P: 'pipeorgans:base'
    }).id('create:crafting/kinetics/steam_whistle')
    event.shaped('chalk:chalk_box', [
        'csc',
        ' c '
    ], {
        c: 'create:cardboard',
        s: '#c:slime_balls'
    }).id('chalk:chalk_box')

    // rosee
    event.recipes.create.sandpaper_polishing('create:polished_rose_quartz', [['create:rose_quartz', 'biomesoplenty:rose_quartz_chunk']]).id('create:sandpaper_polishing/rose_quartz')
    event.recipes.farmersdelight.cutting('biomesoplenty:rose_quartz_block', '#minecraft:pickaxes', '4x biomesoplenty:rose_quartz_chunk').id('kubejs:cutting/farmersdelight/rose_quartz_from_block')

    //brush grading
    event.smithing('betterarcheology:iron_brush', 'feather', 'brush', '#c:ingots/iron').id('betterarcheology:iron_brush')
    event.smithing('betterarcheology:diamond_brush', 'feather', 'betterarcheology:iron_brush', '#c:gems/diamond').id('betterarcheology:diamond_brush')

    //netherite nugget ^^
    event.shapeless('supplementaries:netherite_door', ['supplementaries:gold_door', '#c:nuggets/netherite']).id('supplementaries:netherite_door')
    event.shapeless('supplementaries:netherite_trapdoor', ['supplementaries:gold_trapdoor', '#c:nuggets/netherite']).id('supplementaries:netherite_trapdoor')
    event.shapeless('suppsquared:heavy_key', ['supplementaries:key', '#c:nuggets/netherite']).id('suppsquared:heavy_key')

    //anvil repair from Fixed
    event.recipes.create.item_application('minecraft:chipped_anvil', ['minecraft:damaged_anvil', Ingredient.of('#c:storage_blocks/iron')]).id('kubejs:item_application/damaged_anvil_repair')
    event.recipes.create.item_application('minecraft:anvil', ['minecraft:chipped_anvil', Ingredient.of('#c:storage_blocks/iron')]).id('kubejs:item_application/chipped_anvil_repair')

    event.remove({ id: 'aether:aether_saddle' })

    //sussing
    event.custom({
        type: 'supplementaries:sus_crafting',
        ingredient: {
            item: 'minecraft:red_sand'
        },
        result: {
            id: 'betterarcheology:suspicious_red_sand'
        }
    }).id('kubejs:sus_crafting/suspicious_red_sand')
    event.custom({
        type: 'supplementaries:sus_crafting',
        ingredient: {
            item: 'minecraft:dirt'
        },
        result: {
            id: 'betterarcheology:suspicious_dirt'
        }
    }).id('kubejs:sus_crafting/suspicious_dirt')
    event.custom({
        type: 'supplementaries:sus_crafting',
        ingredient: {
            item: 'atmospheric:arid_sand'
        },
        result: {
            id: 'atmospheric:suspicious_arid_sand'
        }
    }).id('kubejs:sus_crafting/suspicious_arid_sand')
    event.custom({
        type: 'supplementaries:sus_crafting',
        ingredient: {
            item: 'atmospheric:red_arid_sand'
        },
        result: {
            id: 'atmospheric:suspicious_red_arid_sand'
        }
    }).id('kubejs:sus_crafting/suspicious_red_arid_sand')

    //unifying
    event.remove({ id: 'aethersdelight:glass_bottles_from_quicksoil_glass' })

    event.remove([
        { id: 'farmersdelight:painting_from_canvas' }
    ])
    event.shaped('minecraft:painting', [
        'sss',
        'scs',
        'sss'
    ], {
        s: '#c:rods/wooden',
        c: ['#minecraft:wool', 'farmersdelight:canvas']
    }).id('minecraft:painting')

    event.remove([
        { id: 'yungscavebiomes:tnt_from_ancient_sand' },
        { id: 'biomesoplenty:tnt_from_bop_sand' },
        { id: 'mynethersdelight:crafting/tnt_alt' }
    ])
    event.shaped('minecraft:tnt', [
        'gS',
        'Sg'
    ], {
        g: ['minecraft:gunpowder', 'mynethersdelight:powder_cannon'],
        S: '#minecraft:sand'
    }).id('minecraft:tnt')

    event.remove({ id: 'minecraft:stick_from_bamboo_item' })

    event.remove([
        { id: 'farmersdelight:scaffolding_from_canvas' },
        { id: 'mynethersdelight:crafting/scaffolding_alt' }
    ])
    event.shaped('6x minecraft:scaffolding', [
        'bsb',
        'b b',
        'b b'
    ], {
        b: ['minecraft:bamboo', 'mynethersdelight:powder_cannon'],
        s: ['#c:strings', 'farmersdelight:canvas']
    }).id('minecraft:scaffolding')

    event.remove({ id: 'aethersdelight:basket_from_skyroot_sticks' })
    event.shaped('farmersdelight:wooden_basket', [
        's s',
        'c c',
        'scs'
    ], {
        s: '#c:rods/wooden',
        c: 'farmersdelight:canvas'
    }).id('farmersdelight:wooden_basket')

    event.remove({ id: 'mynethersdelight:crafting/basket_alt' })
    event.shaped('farmersdelight:bamboo_basket', [
        'b b',
        'c c',
        'bcb'
    ], {
        b: ['minecraft:bamboo', 'mynethersdelight:powder_cannon'],
        c: 'farmersdelight:canvas'
    }).id('farmersdelight:bamboo_basket')

    event.shaped('create_integrated_farming:roost', [
        'b b',
        'cwc',
        'bcb'
    ], {
        b: ['minecraft:bamboo', 'mynethersdelight:powder_cannon'],
        c: 'farmersdelight:canvas',
        w: 'minecraft:wheat'
    }).id('create_integrated_farming:crafting/roost')
    event.shapeless('create_integrated_farming:roost', [
        'farmersdelight:bamboo_basket', 'minecraft:wheat'
    ]).id('kubejs:crafting/roost')

    event.shapeless('4x create_connected:brass_chute', [
        'create:chute', 'create:chute', 'create:chute', 'create:chute', '#c:plates/brass', '#c:plates/brass'
    ]).id('create_connected:crafting/kinetics/brass_chute')

    event.replaceInput({ id: /^createdeco:green_.*_lamp/ }, 'minecraft:glow_berries', '#c:copper_torches')
    event.remove({ id: 'create:mixing/chocolate' })

    event.recipes.create.crushing([
        'spelunkery:coal_lump',
        CreateItem.of('spelunkery:coal_lump', 0.5),
        CreateItem.of('spelunkery:coal_lump', 0.25),
        CreateItem.of('spelunkery:coal_lump', 0.15),
        CreateItem.of('create:cinder_flour', 0.04)
    ], Ingredient.of('#create:stone_types/scorchia')
    ).id('kubejs:crushing/schorchia')
    event.smelting('create:copper_nugget', 'minecraft:spyglass', 0.1)
    event.blasting('create:copper_nugget', 'minecraft:spyglass', 0.1)

    function narrails(type, input, additive, override_amount) {
        let transitional_item = `railways:track_incomplete_${type}_narrow`

        event.recipes.create.sequenced_assembly(`${override_amount ? override_amount : 1}x railways:track_${type}_narrow`,
            input, [
            event.recipes.create.pressing(transitional_item, transitional_item),
            event.recipes.create.cutting(transitional_item, transitional_item),
            event.recipes.create.deploying(transitional_item, [transitional_item, additive]),
            event.recipes.create.pressing(transitional_item, transitional_item)
        ]
        ).transitionalItem(transitional_item).id(`railways:sequenced_assembly/track_${type}_narrow`)
    }
    narrails('acacia', 'minecraft:acacia_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('bamboo', 'minecraft:bamboo', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('birch', 'minecraft:birch_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('cherry', 'minecraft:cherry_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('create_andesite', Ingredient.of('#create:sleepers'), [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('dark_oak', 'minecraft:dark_oak_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('ender', 'minecraft:end_stone_brick_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('jungle', 'minecraft:jungle_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('mangrove', 'minecraft:mangrove_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('oak', 'minecraft:oak_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('spruce', 'minecraft:spruce_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('stripped_bamboo', 'minecraft:bamboo_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('tieless', 'minecraft:glass_pane', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('biomesoplenty_dead', 'biomesoplenty:dead_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('biomesoplenty_fir', 'biomesoplenty:fir_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('biomesoplenty_hellbark', 'biomesoplenty:hellbark_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('biomesoplenty_jacaranda', 'biomesoplenty:jacaranda_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('biomesoplenty_magic', 'biomesoplenty:magic_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('biomesoplenty_mahogany', 'biomesoplenty:mahogany_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('biomesoplenty_palm', 'biomesoplenty:palm_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('biomesoplenty_redwood', 'biomesoplenty:redwood_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('biomesoplenty_umbran', 'biomesoplenty:umbran_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('biomesoplenty_willow', 'biomesoplenty:willow_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('quark_blossom', 'quark:blossom_planks_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('quark_ancient', 'quark:ancient_planks_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('quark_azalea', 'quark:azalea_planks_slab', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')])
    narrails('blackstone', 'minecraft:blackstone_slab', Ingredient.of('#c:nuggets/gold'))
    narrails('crimson', 'minecraft:crimson_slab', Ingredient.of('#c:nuggets/gold'))
    narrails('warped', 'minecraft:warped_slab', Ingredient.of('#c:nuggets/gold'))
    narrails('phantom', 'minecraft:phantom_membrane', Ingredient.of('#c:ingots/iron'), 32)

    event.shapeless('gnkinetics:cogstone', [
        'create:cogwheel', '#c:stones'
    ]).id('gnkinetics:crafting/cogstone')
    event.shapeless('gnkinetics:andesite_cogwheel', [
        'create:cogwheel', '#c:ingots/andesite_alloy'
    ]).id('gnkinetics:crafting/andesite_cogwheel')

    event.shapeless('dndecor:dark_metal_cogwheel', [
        'create:cogwheel', 'dndecor:dark_metal_block'
    ]).id('dndecor:crafting/dark_metal_cogwheel')
    event.shapeless('dndecor:large_dark_metal_cogwheel', [
        'create:large_cogwheel', 'dndecor:dark_metal_block'
    ]).id('dndecor:crafting/large_dark_metal_cogwheel')

    event.replaceInput({ input: '#dndecor:industrial_cogwheels' }, '#dndecor:industrial_cogwheels', ['gnkinetics:industrial_gear', '#dndecor:dyed_industrial_cogwheels'])

    event.remove([
        { id: 'dndecor:crafting/industrial_cogwheel' },
        { id: 'dndecor:crafting/large_industrial_cogwheel' }
    ])
    event.shapeless('gnkinetics:industrial_gear', [
        'create:cogwheel', ['create:industrial_iron_block', 'dndecor:industrial_plating_block']
    ]).id('gnkinetics:crafting/industrial_gear')
    event.shapeless('gnkinetics:large_industrial_gear', [
        'create:large_cogwheel', ['create:industrial_iron_block', 'dndecor:industrial_plating_block']
    ]).id('gnkinetics:crafting/large_industrial_gear')

    event.shapeless('2x gnkinetics:brass_gear', [
        'create:cogwheel', 'create:cogwheel', '#c:ingots/brass'
    ]).id('gnkinetics:crafting/brass_gear')
    event.shapeless('gnkinetics:large_brass_gear', [
        'create:large_cogwheel', '#c:ingots/brass'
    ]).id('gnkinetics:crafting/large_brass_gear')

    event.shapeless('2x tfmg:steel_cogwheel', [
        'create:cogwheel', 'create:cogwheel', '#c:ingots/steel'
    ]).id('tfmg:crafting/materials/steel_cogwheel')
    event.shapeless('tfmg:large_steel_cogwheel', [
        'create:large_cogwheel', '#c:ingots/steel'
    ]).id('tfmg:crafting/materials/large_steel_cogwheel')
    event.shapeless('2x tfmg:aluminum_cogwheel', [
        'create:cogwheel', 'create:cogwheel', '#c:ingots/aluminum'
    ]).id('tfmg:crafting/materials/aluminum_cogwheel')
    event.shapeless('tfmg:large_aluminum_cogwheel', [
        'create:large_cogwheel', '#c:ingots/aluminum'
    ]).id('tfmg:crafting/materials/large_aluminum_cogwheel')

    event.shapeless('create_connected:vertical_parallel_gearbox', [
        'create:vertical_gearbox', 'create:large_cogwheel'
    ]).id('kubejs:crafting/vertical_parallel_gearbox')

    event.shaped('create_connected:vertical_six_way_gearbox', [
        's s',
        'lcl',
        's s'
    ], {
        s: 'create:cogwheel',
        l: 'create:large_cogwheel',
        c: 'create:andesite_casing'
    }).id('kubejs:crafting/vertical_six_way_gearbox')
    event.shapeless('create_connected:vertical_six_way_gearbox', [
        'create_connected:vertical_parallel_gearbox', 'create:large_cogwheel'
    ]).id('kubejs:crafting/vertical_six_way_gearbox_alt')
    event.shapeless('create_connected:vertical_six_way_gearbox', [
        'create:vertical_gearbox', 'create:large_cogwheel', 'create:large_cogwheel'
    ]).id('kubejs:crafting/vertical_six_way_gearbox_alt2')

    event.shaped('create_connected:vertical_brass_gearbox', [
        'c c',
        ' r ',
        'c c'
    ], {
        r: 'create:rotation_speed_controller',
        c: 'create:cogwheel'
    }).id('kubejs:crafting/vertical_brass_gearbox')

    event.shaped('tfmg:steel_vertical_gearbox', [
        'c c',
        ' m ',
        'c c'
    ], {
        m: 'tfmg:heavy_machinery_casing',
        c: 'tfmg:steel_cogwheel'
    }).id('kubejs:crafting/steel_vertical_gearbox')
    event.shapeless('tfmg:steel_gearbox', 'tfmg:steel_vertical_gearbox').id('kubejs:crafting/steel_gearbox_trans')
    event.shapeless('tfmg:steel_vertical_gearbox', 'tfmg:steel_gearbox').id('kubejs:crafting/steel_vertical_gearbox_trans')
})