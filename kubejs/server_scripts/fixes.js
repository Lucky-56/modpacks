//fix tags here that could get fixed by the mod devs themselves https://open.spotify.com/track/5M4yti0QxgqJieUYaEXcpw

ServerEvents.tags('item', event => {
    //no errors
    event.remove('c:foods/meat', ['#c:foods/meat/raw', '#c:foods/meat/cooked'])
    event.remove('c:cooked_meats', 'kaleidoscope_cookery:cooked_donkey_meat')
    event.add('alexscaves:cave_paintings', /alexscaves:cave_painting_.*/)

    //preferences
    event.add('minecraft:wooden_stairs', [
        'abyssal_decor:white_wood_stairs', 'abyssal_decor:blackwood_stairs', 'abyssal_decor:blackwood_shingle_stairs', 'abyssal_decor:cinnamon_stairs', 'abyssal_decor:cinnamon_shingle_stairs', 'abyssal_decor:mossy_cinnamon_shingle_stairs'
    ])

    event.add('minecraft:wooden_slabs', [
        'abyssal_decor:white_wood_slab', 'abyssal_decor:blackwood_slab', 'abyssal_decor:cinnamon_slab', 'abyssal_decor:cinnamon_shingle_slab', 'abyssal_decor:mossy_cinnamon_shingle_slab', 'abyssal_decor:blackwood_shingle_slab'
    ])

    event.add('minecraft:axes', /tfmg:.*_axe/)
    event.add('minecraft:hoes', /tfmg:.*_hoe/)
    event.add('minecraft:swords', /tfmg:.*_sword/)
    event.add('minecraft:shovels', /tfmg:.*_shovel/)
    event.add('minecraft:pickaxes', /tfmg:.*_pickaxe/)

    event.add('minecraft:meat', ['marbledschevon:raw_chevon', 'marbledschevon:cooked_chevon'])
    event.add('c:foods/raw_meat', 'marbledschevon:raw_chevon')
    event.add('c:foods/cooked_meat', 'marbledschevon:cooked_chevon')

    event.add('c:foods/cooked_fishes', '#c:foods/cooked_fish')

    event.add('c:foods/banana', 'alexsmobs:banana')

    event.add('c:foods/milk', ['farmersdelight:milk_bottle', 'caverns_and_chasms:golden_milk_bucket'])

    event.add('c:foods/edible_when_placed', [
        'ends_delight:chorus_fruit_pie',
        'kaleidoscope_cookery:cold_cut_ham_slices',
        'kaleidoscope_cookery:blaze_lamb_chop', 'kaleidoscope_cookery:braised_pork_ribs',
        'kaleidoscope_cookery:brown_mushroom_pot_soup', 'kaleidoscope_cookery:buddha_jumps_over_the_wall', 'kaleidoscope_cookery:candied_potato',
        'kaleidoscope_cookery:chorus_fried_egg', 'kaleidoscope_cookery:cold_roasted_meat', 'kaleidoscope_cookery:cold_style_sashimi',
        'kaleidoscope_cookery:crimson_fungus_pot_soup', 'kaleidoscope_cookery:crystal_lamb_chop', 'kaleidoscope_cookery:dark_cuisine',
        'kaleidoscope_cookery:desert_style_sashimi', 'kaleidoscope_cookery:dongpo_pork', 'kaleidoscope_cookery:dough_drop_soup',
        'kaleidoscope_cookery:end_style_sashimi', 'kaleidoscope_cookery:fondant_pie', 'kaleidoscope_cookery:fondant_spider_eye',
        'kaleidoscope_cookery:four_joy_meatball_soup', 'kaleidoscope_cookery:fried_caterpillar', 'kaleidoscope_cookery:fried_spring_roll',
        'kaleidoscope_cookery:frost_lamb_chop', 'kaleidoscope_cookery:golden_salad',
        'kaleidoscope_cookery:nether_style_sashimi', 'kaleidoscope_cookery:numbing_spicy_chicken', 'kaleidoscope_cookery:oil_splashed_fish',
        'kaleidoscope_cookery:pan_seared_knight_steak', 'kaleidoscope_cookery:red_mushroom_pot_soup',
        'kaleidoscope_cookery:slime_ball_meal', 'kaleidoscope_cookery:spicy_blood_stew', 'kaleidoscope_cookery:spicy_chicken',
        'kaleidoscope_cookery:spicy_rabbit_head', 'kaleidoscope_cookery:stargazy_pie', 'kaleidoscope_cookery:stuffed_tiger_skin_pepper',
        'kaleidoscope_cookery:suspicious_stir_fry', 'kaleidoscope_cookery:sweet_and_sour_ender_pearls', 'kaleidoscope_cookery:tundra_style_sashimi',
        'kaleidoscope_cookery:warped_fungus_pot_soup', 'kaleidoscope_end:dark_dragon_steak',
        'kaleidoscope_end:end_caterpillar_sashimi', 'kaleidoscope_end:end_salad', 'kaleidoscope_end:optic_nerve_sweet_and_sour_pork',
        'kaleidoscope_end:void_mutton_steak', 'kaleidoscope_nether:braised_lion_head', 'kaleidoscope_nether:braised_pork_rice',
        'kaleidoscope_nether:corn_carrot_pork_rib_soup', 'kaleidoscope_nether:soul_lamb_chop',
        'kaleidoscope_cookery:shengjian_mantou_plate', 'kaleidoscope_cookery:baozi_plate', 'kaleidoscope_cookery:qingtuan_plate',
        'kaleidoscope_cookery:sticky_candy_plate', 'kaleidoscope_cookery:sticky_rice_cake_plate', 'kaleidoscope_cookery:zongzi_plate',
        'kaleidoscope_cookery:berry_platter', 'kaleidoscope_cookery:apple_platter', 'kaleidoscope_cookery:tomato_platter',
        'kaleidoscope_cookery:watermelon_platter', 'kaleidoscope_cookery:chorus_fruit_platter'
    ])

    event.add('c:tools/knife', 'aethersdelight:arkenium_knife')

    event.remove('minecraft:redstone_ores', 'regions_unexplored:raw_redstone_block')
    event.add('c:ores', [
        '#c:ores/uranium', '#c:ores/shadoline', '#c:ores/nebulite', '#c:ores/seabrass', '#c:ores/asbestos'
    ])
    event.add('c:ores/uranium', [
        'createnuclear:uranium_ore', 'createnuclear:deepslate_uranium_ore', 'alexscaves:radrock_uranium_ore'
    ])
    event.add('c:ores/redstone', 'alexscaves:guanostone_redstone_ore')
    event.add('c:ores/coal', 'alexscaves:coprolith_coal_ore')
    event.add('c:ores/shadoline', [
        'enderscape:shadoline_ore', 'enderscape:mirestone_shadoline_ore'
    ])
    event.add('c:ores/nebulite', [
        'enderscape:nebulite_ore', 'enderscape:mirestone_nebulite_ore'
    ])
    event.add('c:ores/seabrass', 'abyssal_decor:seabrass_ore')
    event.add('c:ores/asbestos', [
        'oreganized:asbestos_ore', 'oreganized:deepslate_asbestos_ore'
    ])

    event.remove('c:nuggets/diamond', 'dndesires:diamond_shard')
    event.remove('c:nuggets/lapis', 'dndesires:lapis_lazuli_shard')
    event.add('c:nuggets/coal', 'spelunkery:coal_lump')
    event.add('c:nuggets/charcoal', 'spelunkery:charcoal_lump')
    event.add('c:nuggets', ['#c:nuggets/coal', '#c:nuggets/charcoal'])

    event.add('c:seeds', 'bountifulfares:grass_seeds')

    event.add('c:copper_torches', ['minecraft:copper_torch', 'caverns_and_chasms:cupric_torch'])

    event.add('environmental:convertable_to_mud', ['aether_beyond_parity:enchanted_grass_block', 'regions_unexplored:ashen_dirt'])

    colorsDyeDepot.forEach(color => {
        event.add('supplementaries:sacks', `suppsquared:sack_${color}`)
    })

    event.removeAll('ratatouille:raw_meat')
    event.add('ratatouille:compostable_items_1to1', '#c:foods/raw_meat')
    event.add('ratatouille:compostable_items_4to1', 'ratatouille:cocoa_powder')

    event.add('alexsmobs:anaconda_breedables', '#alexsmobs:anaconda_foodstuffs')
    event.add('alexsmobs:grizzly_bear_breedables', '#alexsmobs:grizzly_breedables')

    event.add('burnt:burnt_logs', [
        'burnt:burnt_log', 'burnt:stripped_burnt_log',
        'burnt:burnt_wood', 'burnt:stripped_burnt_wood',
        'burnt:ember_log', 'burnt:stripped_ember_log',
        'burnt:ember_wood'
    ])
})

ServerEvents.tags('block', event => {
    //errorless
    event.remove('minecraft:stairs', /dndecor:dark_metal_.*_slab/)
    event.add('minecraft:slabs', /dndecor:dark_metal_.*_slab/)

    //preferences
    event.add('minecraft:lanterns', [
        'minecraft:lantern', 'minecraft:soul_lantern'
    ])

    event.add('minecraft:candles', [
        'bountifulfares:coconut_candle', 'bountifulfares:green_tea_candle',
        'bountifulfares:black_tea_candle', 'bountifulfares:chamomile_candle', 'bountifulfares:honeysuckle_candle',
        'bountifulfares:bellflower_candle', 'bountifulfares:torchflower_candle', 'bountifulfares:walnut_candle'
    ])

    event.add('minecraft:wooden_stairs', [
        'createdieselgenerators:chip_wood_stairs',
        'gardens_of_the_dead:whistlecane_mosaic_stairs', 'minecraft:bamboo_mosaic_stairs', 'burnt:smoldering_stairs', 'burnt:blazing_stairs', 'burnt:burnt_bamboo_mosaic_stairs', 'burnt:smoldering_bamboo_stairs', 'abyssal_decor:blackwood_shingle_stairs',
        'burnt:burnt_stairs', 'burnt:smoldering_bamboo_mosaic_stairs', 'burnt:ember_stairs', 'burnt:burnt_bamboo_stairs'
    ])

    event.add('minecraft:wooden_slabs', [
        'createdieselgenerators:chip_wood_slab',
        'gardens_of_the_dead:whistlecane_mosaic_slab', 'minecraft:bamboo_mosaic_slab', 'burnt:smoldering_slab', 'burnt:blazing_slab', 'burnt:burnt_bamboo_mosaic_slab', 'burnt:smoldering_bamboo_mosaic_slab', 'burnt:smoldering_bamboo_slab', 'abyssal_decor:white_wood_slab', 'abyssal_decor:blackwood_slab', 'abyssal_decor:cinnamon_slab', 'abyssal_decor:cinnamon_shingle_slab', 'abyssal_decor:mossy_cinnamon_shingle_slab', 'abyssal_decor:blackwood_shingle_slab',
        'burnt:burnt_slab', 'burnt:burnt_bamboo_slab', 'burnt:ember_slab', 'mynethersdelight:powdery_mosaic_slab'
    ])

    event.add('minecraft:stairs', [
        'createdieselgenerators:asphalt_stairs', 'suppsquared:daub_stairs', 'alexscaves:gingerbread_brick_stairs',
        'suppsquared:daub_frame_stairs', 'alexsmobs:purpur_planks_stairs', 'moresnifferflowers:amber_mosaic_stairs',
        'betterarcheology:cracked_mud_brick_stairs', 'alexscaves:frosted_gingerbread_brick_stairs',
        'alexscaves:frosted_gingerbread_stairs', 'alexscaves:gingerbread_stairs', 'alexscaves:wafer_cookie_stairs',
        'moresnifferflowers:garnet_mosaic_stairs',
    ])

    event.add('minecraft:slabs', [
        'createdieselgenerators:asphalt_slab', 'suppsquared:daub_frame_slab',
        'suppsquared:daub_slab', 'alexsmobs:purpur_planks_slab', 'moresnifferflowers:amber_mosaic_slab',
        'moresnifferflowers:chiseled_amber_slab', 'moresnifferflowers:garnet_mosaic_slab',
        'betterarcheology:cracked_mud_brick_slab', 'alexscaves:frosted_gingerbread_brick_slab',
        'alexscaves:gingerbread_brick_slab', 'alexscaves:frosted_gingerbread_slab',
        'alexscaves:gingerbread_slab', 'alexscaves:wafer_cookie_slab', '#minecraft:slab',
        'moresnifferflowers:chiseled_garnet_slab',
    ])

    event.add('c:ores/shadoline', [
        'enderscape:shadoline_ore', 'enderscape:mirestone_shadoline_ore'
    ])
    event.add('c:ores/nebulite', [
        'enderscape:nebulite_ore', 'enderscape:mirestone_nebulite_ore'
    ])
    event.add('c:ores/seabrass', 'abyssal_decor:seabrass_ore')
    event.add('c:ores/asbestos', [
        'oreganized:asbestos_ore', 'oreganized:deepslate_asbestos_ore'
    ])

    colorsDyeDepot.forEach(color => {
        event.add('supplementaries:sacks', `suppsquared:sack_${color}`)
    })

    event.add('burnt:burnt_logs', [
        'burnt:stripped_ember_log', 'burnt:ember_wood'
    ])
})

ServerEvents.recipes(event => {

    event.remove([
        { id: 'burnt:stripped_burnt_logs_recipe' },
        { id: 'burnt:burnt_wood_recipe' },
        { id: 'burnt:burnt_stripped_wood_recipe' },

        { id: 'tfmg:industrial_blasting/steel_from_dust' },

        { id: 'minecraft:furnace' },
        { id: 'bountifulfares:sweet_berry_pips_from_sweet_berries' },
    ])

    event.shaped('2x dramaticdoors:tall_rue_socotra_door', [
        'S',
        'S',
        'S'
    ], {
        S: 'regions_unexplored:socotra_door'
    }).id('dramaticdoors:tall_rue_socotra_door')

    event.shapeless('regions_unexplored:blackstone_cluster', ['spelunkery:blackstone_pebble', 'spelunkery:blackstone_pebble', 'spelunkery:blackstone_pebble', 'spelunkery:blackstone_pebble', 'spelunkery:blackstone_pebble']).id('regions_unexplored:blackstone_cluster')

    event.shapeless('6x bellsandwhistles:metro_window', [
        'bellsandwhistles:metro_casing', '#c:glass_blocks'
    ]).id('bellsandwhistles:metro/metro_window')
    event.shapeless('someassemblyrequired:raw_burger_bun', [
        '#c:foods/dough', '#c:seeds'
    ]).id('someassemblyrequired:crafting_shapeless/raw_burger_bun')

    event.recipes.create.mixing('250x ratatouille:mince_meat', [
        Ingredient.of('#c:foods/raw_meat'), Ingredient.of('#c:salts')
    ]).id('ratatouille:mixing/mince_meat')

    event.custom({
        'type': 'tfmg:casting',
        'ingredients': [
            {
                'type': 'neoforge:single',
                'amount': 144,
                'fluid': 'tfmg:molten_plastic'
            }
        ],
        'processing_time': 100,
        'results': [
            {
                'id': 'tfmg:plastic_sheet'
            }
        ]
    }).id('tfmg:casting/plastic_sheet')

    event.replaceInput({ type: 'minecraft:crafting_shaped', id: /^cinchsmissingblocks:snow_brick_.*/ }, 'minecraft:snow_block', 'cinchsmissingblocks:snow_bricks')


    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('create:precision_mechanism', 0.13), // Main output, will appear in JEI as the result
            CreateItem.of('create:golden_sheet', 0.008), // Rest of these items will be considered Random Salvage
            CreateItem.of('create:andesite_alloy', 0.008),
            CreateItem.of('create:cogwheel', 0.005),
            CreateItem.of('create:shaft', 0.002),
            CreateItem.of('create:crushed_raw_gold', 0.002),
            CreateItem.of('2x minecraft:gold_nugget', 0.002),
            CreateItem.of('minecraft:iron_ingot', 0.001),
            CreateItem.of('minecraft:clock', 0.001)
        ],
        // Input:
        'create:golden_sheet',
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel',]),
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel',]),
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')]]),
        ]
    )
        .transitionalItem('create:incomplete_precision_mechanism') // Set the transitional item
        .loops(5) // Set the number of loops
        .id('create:sequenced_assembly/precision_mechanism')
})

RecipeViewerEvents.addEntries('item', event => {
    event.add('spelunkery:tuff_zinc_ore')
})