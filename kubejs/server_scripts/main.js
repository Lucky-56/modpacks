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
    event.add('c:chains', ['aether_beyond_parity:zanite_chain', 'abyssal_decor:seabrass_chain', 'abyssal_decor:deepbronze_chain'])

    event.add('kubejs:tuff_ore_replaceables', ['minecraft:tuff', 'caverns_and_chasms:schist'])

    event.add('kubejs:pots', 'minecraft:decorated_pot')
    colorsVanilla.forEach(color => {
        event.add('kubejs:pots', `clayworks:${color}_decorated_pot`)
    })
    colorsDyeDepot.forEach(color => {
        event.add('kubejs:pots', `dye_the_world:${color}_decorated_pot`)
    })
})

ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(['dndesires:handheld_drill', 'dndesires:handheld_saw'])

    event.add('c:hidden_from_recipe_viewers', [
        'lifesizebdubs:imposter_tnt', 'lifesizebdubs:imposter_egg'
    ])

    event.add('c:chains', ['aether_beyond_parity:zanite_chain', 'abyssal_decor:seabrass_chain', 'abyssal_decor:deepbronze_chain'])
    copperVariants.forEach(variant => {
        event.remove('create:chain_rideable', `minecraft:${variant}copper_chain`)
    })

    event.add('dynamiccrosshair:tools', ['create:handheld_worldshaper', 'simulated:creative_physics_staff'])
    event.add('dynamiccrosshair:ranged_weapons', 'create:potato_cannon')

    event.remove('curios:head', 'create:goggles')
    event.add('accessories:face', 'create:goggles')

    //thanks to @pigturtle on discord
    // this works but returns an ItemStack[]
    let foodItems = Ingredient.all.stackArray.filter(stack => stack.getFoodProperties(null) != null)

    // the .map() call is necessary because event.add() excpects an Item or Item[]
    event.add("kubejs:edible", [foodItems.map(stack => stack.item), '#c:foods/edible_when_placed', 'ftblibrary:icon_item'])
})

ServerEvents.recipes(event => {
    function elemental_painting(dye, painting) {
        event.shapeless(`minecraft:painting[entity_data={id:"minecraft:painting",variant:"${painting}"}]`, ['minecraft:painting', `minecraft:${dye}_dye`]).id(`kubejs:${dye}_elemental_painting_manual_only`)
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

    //crushed arkenium
    event.recipes.create.crushing(['kubejs:crushed_raw_arkenium', CreateItem.of('create:experience_nugget', 0.75)], Ingredient.of('#c:raw_materials/arkenium'), 400).id('kubejs:crushing/raw_arkenium')
    event.recipes.create.crushing(['9x kubejs:crushed_raw_arkenium', CreateItem.of('9x create:experience_nugget', 0.75)], Ingredient.of('#c:storage_blocks/raw_arkenium'), 400).id('kubejs:crushing/raw_arkenium_block')
    event.recipes.create.crushing(['kubejs:crushed_raw_arkenium', CreateItem.of('kubejs:crushed_raw_arkenium', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('aether:holystone', 0.125)], Ingredient.of('#c:ores/arkenium')).id('kubejs:crushing/arkenium_ore')

    event.smelting('aethersdelight:arkenium_ingot', 'kubejs:crushed_raw_arkenium', 0.1).id('kubejs:smelting/arkenium_ingot')
    event.blasting('aethersdelight:arkenium_ingot', 'kubejs:crushed_raw_arkenium', 0.1).id('kubejs:blasting/arkenium_ingot')
    event.recipes.create.splashing(['9x aethersdelight:arkenium_nugget', CreateItem.of('aether:ambrosium_shard', 0.75)], 'kubejs:crushed_raw_arkenium').id('kubejs:splashing/arkenium_nugget')

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

    event.replaceInput({ id: /createdeco:green_.*_lamp/ }, 'minecraft:glow_berries', '#c:copper_torches')
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
})