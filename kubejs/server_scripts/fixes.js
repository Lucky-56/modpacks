//fix tags here that could get fixed by the mod devs themselves https://open.spotify.com/track/5M4yti0QxgqJieUYaEXcpw

ServerEvents.tags('item', event => {
    //no errors
    colorsDyenamics.forEach(color => {
        event.remove('c:glass_block/tinted', `dyenamics:${color}_stained_glass`)
    })
    event.remove('c:foods/meat', ['#c:foods/meat/raw', '#c:foods/meat/cooked'])
    event.remove('c:cooked_meats', 'kaleidoscope_cookery:cooked_donkey_meat')
    event.remove('kaleidoscope_nether:mod_items', [
        'kaleidoscope_nether:glowing_kabob',
        'kaleidoscope_nether:glowing_pudding',
        'kaleidoscope_nether:glowing_salad',
        'kaleidoscope_nether:glowing_soup'
    ])

    event.add('alexscaves:cave_paintings', /^alexscaves:cave_painting_.*/)

    //preferences
    event.add('minecraft:wooden_stairs', [
        'abyssal_decor:white_wood_stairs', 'abyssal_decor:blackwood_stairs', 'abyssal_decor:blackwood_shingle_stairs', 'abyssal_decor:cinnamon_stairs', 'abyssal_decor:cinnamon_shingle_stairs', 'abyssal_decor:mossy_cinnamon_shingle_stairs'
    ])

    event.add('minecraft:wooden_slabs', [
        'abyssal_decor:white_wood_slab', 'abyssal_decor:blackwood_slab', 'abyssal_decor:cinnamon_slab', 'abyssal_decor:cinnamon_shingle_slab', 'abyssal_decor:mossy_cinnamon_shingle_slab', 'abyssal_decor:blackwood_shingle_slab'
    ])

    event.add('minecraft:axes', /^tfmg:.*_axe/)
    event.add('minecraft:hoes', /^tfmg:.*_hoe/)
    event.add('minecraft:swords', /^tfmg:.*_sword/)
    event.add('minecraft:shovels', /^tfmg:.*_shovel/)
    event.add('minecraft:pickaxes', /^tfmg:.*_pickaxe/)

    event.add('c:foods/golden', [
        'someassemblyrequired:chopped_golden_carrot', 'someassemblyrequired:golden_apple_slices', 'someassemblyrequired:enchanted_golden_apple_slices'
    ])

    event.add('c:foods/vegetable', [
        'someassemblyrequired:sliced_onion', 'someassemblyrequired:tomato_slices', 'someassemblyrequired:sliced_onion',
        'someassemblyrequired:chopped_beetroot', 'someassemblyrequired:chopped_golden_carrot', 'someassemblyrequired:chopped_carrot'
    ])

    event.add('c:foods/fruit', [
        'someassemblyrequired:apple_slices', 'someassemblyrequired:golden_apple_slices', 'someassemblyrequired:enchanted_golden_apple_slices'
    ])

    event.add('c:crops/onion', 'someassemblyrequired:sliced_onion')
    event.add('c:foods/onion', 'someassemblyrequired:sliced_onion')

    event.add('c:crops/tomato', 'someassemblyrequired:tomato_slices')
    event.add('c:foods/tomato', 'someassemblyrequired:tomato_slices')

    event.add('c:crops/beetroot', 'someassemblyrequired:chopped_beetroot')
    event.add('c:foods/beetroot', [
        'minecraft:beetroot', 'someassemblyrequired:chopped_beetroot'
    ])

    event.add('c:crops/carrot', 'someassemblyrequired:chopped_carrot')
    event.add('c:foods/carrot', [
        'minecraft:carrot', 'someassemblyrequired:chopped_carrot'
    ])

    event.add('c:foods/apple', [
        'minecraft:apple', 'someassemblyrequired:apple_slices'
    ])

    event.add('c:foods/golden_apple', [
        'minecraft:golden_apple', 'someassemblyrequired:golden_apple_slices'
    ])

    event.add('c:foods/golden_carrot', [
        'minecraft:golden_carrot', 'someassemblyrequired:chopped_golden_carrot'
    ])

    event.add('createdieselgenerators:fermentable', 'someassemblyrequired:apple_slices')

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

    event.add('c:seeds', [
        'bountifulfares:grass_seeds', 'abyssal_decor:amaranth_1'
    ])

    event.add('c:stripped_logs', [
        'aether:stripped_skyroot_log', 'upgrade_aquatic:stripped_river_log'
    ])
    event.add('c:stripped_woods', [
        'aether:stripped_skyroot_wood', 'upgrade_aquatic:stripped_river_wood'
    ])

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

    event.removeAll('forge:seeds')
    event.removeAll('forge:heads')
    event.removeAll('forge:tools/fishing_rods')
    event.removeAll('forge:bogroll_tag')
    event.removeAll('forge:whitewood_log')
    event.removeAll('forge:blackwood_log')
    event.removeAll('forge:cinnamon_log')
    event.removeAll('forge:shells')
    event.add('abyssal_decor:cinnamon_log', [
        'abyssal_decor:cinnamon_log', 'abyssal_decor:cinnamon_wood',
        'abyssal_decor:stripped_cinnamon_log', 'abyssal_decor:stripped_cinnamon_wood'
    ])

    event.add('abyssal_decor:blackwood_log', [
        'abyssal_decor:blackwood_log', 'abyssal_decor:blackwood_wood',
        'abyssal_decor:stripped_blackwood_log'
    ])

    event.add('abyssal_decor:whitewood_log', [
        'abyssal_decor:white_wood_log', 'abyssal_decor:white_wood_wood'
    ])

    event.add('quark:counts_as_weapon_for_gold_tools_have_fortune', [
        'minecraft:golden_spear', 'kaleidoscope_cookery:gold_kitchen_knife'
    ])
})

ServerEvents.tags('block', event => {
    //errorless
    event.remove('minecraft:stairs', /^dndecor:dark_metal_.*_slab/)
    event.add('minecraft:slabs', /^dndecor:dark_metal_.*_slab/)

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
        { id: 'abyssal_decor:cinnamon_planks_stripped_recipe' },
        { id: 'abyssal_decor:white_wood_stick_recipe' },
        { id: 'abyssal_decor:blackwood_stick_recipe' },
        { id: 'abyssal_decor:cinnamon_stick_recipe' },

        { id: 'tfmg:industrial_blasting/steel_from_dust' },

        { id: 'minecraft:furnace' },
        { id: 'woodworks:oak_bookshelf' },
        { id: 'bountifulfares:sweet_berry_pips_from_sweet_berries' },

        { id: 'create_dragons_plus:ending/chorus_fruit_from_apple' },
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
        type: 'tfmg:casting',
        ingredients: [
            {
                type: 'neoforge:single',
                amount: 144,
                fluid: 'tfmg:molten_plastic'
            }
        ],
        processing_time: 100,
        results: [
            {
                id: 'tfmg:plastic_sheet'
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

    event.shapeless('4x abyssal_decor:cinnamon_planks',
        '#abyssal_decor:cinnamon_log'
    ).id('abyssal_decor:cinnamon_planks_recipe')

    event.shapeless('4x abyssal_decor:blackwood_planks',
        '#abyssal_decor:blackwood_log'
    ).id('abyssal_decor:blackwood_planks_recipe')

    event.shapeless('4x abyssal_decor:white_wood_planks',
        '#abyssal_decor:whitewood_log'
    ).id('abyssal_decor:white_wood_planks_recipe')

    //event.recipes.farmersdelight.cutting
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                tag: 'starcatcher_delight:common_fishes'
            }
        ],
        result: [
            {
                item: {
                    count: 1,
                    id: 'starcatcher_delight:starcaught_fillet_common'
                }
            }
        ],
        tool: {
            tag: 'c:tools/knife'
        }
    }).id('starcatcher_delight:cutting/starcaught_fillet_common')

    function smokeCook(output, input, xp, id) {
        event.smoking(output, input, xp).id(`kubejs:smoking/${id}`)
        event.campfireCooking(output, input, xp, 600).id(`kubejs:campfire_cooking/${id}`)
    }
    smokeCook('abyssal_decor:cooked_muckroot', 'abyssal_decor:muckroot_item', 0.1, 'muckroot')
    smokeCook('abyssal_decor:toasted_seeds', 'abyssal_decor:amaranth_1', 1.0, 'amaranth_seeds')
    smokeCook('abyssal_decor:popped_spidercorn', 'abyssal_decor:spidercorn_crop', 1.0, 'spidercorn')

    event.replaceInput({ id: 'someassemblyrequired:cutting/farmersdelight/onion' }, '#c:crops/onion', '#kubejs:sliceable/onion')
    event.replaceInput({ id: 'someassemblyrequired:cutting/farmersdelight/tomato' }, '#c:crops/tomato', '#kubejs:sliceable/tomato')

    event.replaceInput([
        { id: 'bountifulfares:apple_compote_jar' },
        { id: 'bountifulfares:apple_stew' },
        { id: 'farmersdelight:fruit_salad' },
        { id: 'farmersdelight:horse_feed' },
        { id: 'abyssal_decor:cinnamon_apple_recipe' },
        { id: 'bountifulfares:cooking/apple_compote' },
        { id: 'farmersdelight:cooking/apple_cider' },
        { id: 'brewinandchewin:cooking/apple_jelly' },
        { id: 'bountifulfares:cooking/apple_stew' }
    ], 'minecraft:apple', '#c:foods/apple')
    event.custom({
        type: 'bountifulfares:fermenting',
        ingredient: {
            tag: 'c:foods/apple'
        },
        particle_color: 16771237,
        result: {
            id: 'bountifulfares:apple_cider_jar'
        },
        result_count: 1
    }).id('bountifulfares:apple_cider_jar_from_fermenting')
    event.custom({
        type: 'kaleidoscope_tavern:barrel',
        carrier: {
            item: 'kaleidoscope_tavern:empty_bottle'
        },
        fluid: 'kaleidoscope_tavern:grape_juice',
        ingredients: [
            {
                tag: 'c:foods/apple'
            }
        ],
        result: {
            count: 1,
            id: 'kaleidoscope_tavern:brandy'
        }
    }).id('kaleidoscope_tavern:barrel/brandy')

    event.replaceInput([
        { id: 'farmersdelight:cooking/sludge_stew' },
        { id: 'mynethersdelight:cooking/giant_tentacles' },
        { id: 'create_bic_bit:compat/farmersdelight/stamppot' }
    ], 'farmersdelight:onion', '#c:crops/onion')

    event.replaceInput([
        { id: 'minecraft:beetroot_soup' },
        { id: 'kaleidoscope_nether:pot/couples_lung_slice' },
    ], 'minecraft:beetroot', '#c:crops/beetroot')

    event.replaceInput([
        { id: 'bountifulfares:bountiful_stew' },
        { id: 'abnormals_delight:seared_venison' },
        { id: 'kaleidoscope_end:pot/stuffed_shulker' },
        { id: 'kaleidoscope_nether:stockpot/magma_cream_soup' },
        { id: 'kaleidoscope_cookery:stockpot/lamb_and_radish_soup' },
        { id: 'kaleidoscope_nether:stockpot/soul_soup' },
        { id: 'bountifulfares:cooking/bountiful_stew' },
        { id: 'kaleidoscope_cookery:flex_stockpot/lamb_and_radish_soup' },
        { id: 'create_bic_bit:compat/farmersdelight/stamppot' }
    ], 'minecraft:carrot', '#c:crops/carrot')
    event.recipes.kaleidoscope_cookery.pot('kaleidoscope_nether:spicy_pot', [
        '#c:raw_meats', '#c:raw_meats', ['#c:crops/carrot', '#c:crops/potato', '#c:crops/beetroot'], '#c:vegetables/lettuce', ['#c:vegetables/pepper', '#c:hot_spices'], ['#c:vegetables/pepper', '#c:hot_spices']
    ], 'minecraft:bowl', 300, 5).id('kaleidoscope_nether:pot/spicy_pot')
    event.recipes.kaleidoscope_cookery.pot('kaleidoscope_nether:spicy_pot_rice', [
        '#c:raw_meats', ['#c:crops/carrot', '#c:crops/potato', '#c:crops/beetroot'], '#c:vegetables/lettuce', ['#c:vegetables/pepper', '#c:hot_spices'], ['#c:vegetables/pepper', '#c:hot_spices']
    ], '#c:foods/cooked_rice', 300, 5).id('kaleidoscope_nether:pot/spicy_pot_rice')
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            {
                tag: 'c:foods/raw_dragon_meat'
            },
            {
                type: 'neoforge:compound',
                children: [
                    {
                        item: 'minecraft:chorus_fruit'
                    },
                    {
                        item: 'ends_delight:chorus_fruit_grain'
                    }
                ]
            },
            {
                item: 'ends_delight:chorus_succulent'
            },
            {
                tag: 'c:crops/carrot'
            },
            {
                item: 'minecraft:potato'
            },
            {
                tag: 'c:crops/tomato'
            }
        ],
        result: {
            id: 'ends_delight:dragon_meat_stew_block'
        },
        container: {
            id: 'ends_delight:half_dragon_egg_shell'
        },
        recipe_book_tab: 'meals',
        cookingtime: 200,
        experience: 2.0
    }).id('ends_delight:food/dragon_meat_stew_block')
    event.custom({
        type: 'farmersdelight:cooking',
        experience: 1.0,
        ingredients: [
            {
                tag: 'c:foods/raw_duck'
            },
            {
                tag: 'c:foods/pasta'
            },
            {
                tag: 'c:crops/carrot'
            },
            {
                tag: 'c:foods/vegetable'
            }
        ],
        recipe_book_tab: 'meals',
        result: {
            count: 1,
            id: 'abnormals_delight:duck_noodles'
        }
    }).id('abnormals_delight:cooking/duck_noodles')

    event.replaceInput([
        { id: 'kaleidoscope_cookery:golden_salad' }
    ], 'minecraft:golden_apple', '#c:foods/golden_apple')

    event.replaceInput([
        { id: 'kaleidoscope_cookery:golden_salad' },
        { id: 'farmersdelight:horse_feed' }
    ], 'minecraft:golden_carrot', '#c:foods/golden_carrot')
})

RecipeViewerEvents.addEntries('item', event => {
    event.add('spelunkery:tuff_zinc_ore')
    event.add('tide:small_cooked_fish')
})