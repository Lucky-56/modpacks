const colorMapList = [
    {
        color: 'white',
        single: [
            'minecraft:lily_of_the_valley', 'oreganized:datura', 'buzzier_bees:white_clover', 'environmental:white_lotus_flower', 'upgrade_aquatic:white_searocket', 'enderscape:wisp_flower', 'biomesoplenty:white_lavender', 'biomesoplenty:white_petals', 'aether:white_flower', 'deep_aether:enchanted_blossom', 'abyssal_decor:bark_orchid', 'regions_unexplored:white_trillium', 'regions_unexplored:white_snowbelle', 'regions_unexplored:white_magnolia_flowers'
        ],
        double: [
            'environmental:white_delphinium', 'biomesoplenty:tall_white_lavender'
        ]
    },
    {
        color: 'light_gray',
        single: [
            'minecraft:azure_bluet', 'minecraft:white_tulip', 'bountifulfares:chamomile_flowers', 'atmospheric:yucca_flower', 'biomesoplenty:endbloom', 'regions_unexplored:daisy', 'regions_unexplored:light_gray_snowbelle', 'regions_unexplored:tassel'
        ],
        double: [
            'atmospheric:tall_yucca_flower'
        ]
    },
    {
        color: 'gray',
        single: [
            'minecraft:closed_eyeblossom', 'biomesoplenty:wilted_lily', 'regions_unexplored:gray_snowbelle'
        ]
    },
    {
        color: 'black',
        single: [
            'minecraft:wither_rose', 'regions_unexplored:dorcel', 'regions_unexplored:black_snowbelle', 'minecraft:ink_sac', 'bountifulfares:dried_tea_leaves', 'burnt:soot'
        ]
    },
    {
        color: 'brown',
        single: [
            'bountifulfares:walnut_mulch', 'minecraft:cocoa_beans', 'abyssal_decor:cinnamon_stick', 'regions_unexplored:wilting_trillium', 'regions_unexplored:brown_snowbelle', 'regions_unexplored:cattail'
        ],
        double: [
            'biomesoplenty:cattail'
        ]
    },
    {
        color: 'maroon',
        single: [
            'minecraft:spider_eye'
        ]
    },
    {
        color: 'rose',
        double: [
            'minecraft:rose_bush'
        ]
    },
    {
        color: 'red',
        single: [
            'minecraft:poppy', 'minecraft:red_tulip', 'minecraft:beetroot', 'atmospheric:scalding_monkey_brush', 'atmospheric:firethorn', 'environmental:red_lotus_flower', 'environmental:red_hibiscus', 'bountifulfares:tea_berries', '#upgrade_aquatic:fire_corals', 'atmospheric:carmine_husk', 'biomesoplenty:rose', 'biomesoplenty:waterlily', 'deep_aether:sky_tulips', 'alexscaves:flytrap', 'regions_unexplored:alpha_rose', 'regions_unexplored:poppy_bush', 'regions_unexplored:tsubaki', 'regions_unexplored:waratah', 'regions_unexplored:red_lupine', 'regions_unexplored:red_snowbelle'
        ]
    },
    {
        color: 'orange',
        single: [
            'minecraft:orange_tulip', 'atmospheric:hot_monkey_brush', 'environmental:tasselflower', 'environmental:orange_hibiscus', 'minecraft:torchflower', 'minecraft:open_eyeblossom', 'atmospheric:barrel_cactus', 'biomesoplenty:orange_cosmos', 'biomesoplenty:burning_blossom', 'deep_aether:golden_aspess', 'regions_unexplored:mallow', 'regions_unexplored:orange_snowbelle', 'regions_unexplored:orange_coneflower', 'regions_unexplored:day_lily', 'regions_unexplored:cave_hyssop'
        ],
        double: [
            'environmental:bird_of_paradise', 'deep_aether:golden_flower'
        ]
    },
    {
        color: 'beige',
        single: [
            'minecraft:oxeye_daisy'
        ]
    },
    {
        color: 'yellow',
        single: [
            'minecraft:dandelion', 'buzzier_bees:buttercup', 'bountifulfares:honeysuckle', 'atmospheric:warm_monkey_brush', 'atmospheric:forsythia', 'caverns_and_chasms:false_hope', 'environmental:yellow_hibiscus', 'minecraft:wildflowers', 'enderscape:celestial_growth', '#upgrade_aquatic:horn_corals', 'friendsandfoes:buttercup', 'atmospheric:yellow_blossoms', 'abyssal_decor:daffodil', 'regions_unexplored:alpha_dandelion', 'regions_unexplored:hibiscus', 'regions_unexplored:yellow_lupine', 'regions_unexplored:yellow_snowbelle', 'regions_unexplored:tall_yellow_bioshroom'
        ],
        double: [
            'minecraft:sunflower', 'biomesoplenty:goldenrod'
        ]
    },
    {
        color: 'lime',
        single: [
            'environmental:dianthus', 'regions_unexplored:lime_snowbelle', 'regions_unexplored:green_bioshroom'
        ],
        double: [
            'alexscaves:curly_fern'
        ]
    },
    {
        color: 'forest',
        single: [
            'minecraft:bamboo'
        ]
    },
    {
        color: 'green',
        single: [
            'caverns_and_chasms:moschatel', 'bountifulfares:tea_leaves', 'regions_unexplored:green_snowbelle'
        ]
    },
    {
        color: 'verdant',
        single: [
            'minecraft:dried_kelp'
        ]
    },
    {
        color: 'cyan',
        single: [
            'enderscape:bulb_flower', 'upgrade_aquatic:pickerelweed', 'biomesoplenty:glowflower', 'deep_aether:aether_cattails', 'abyssal_decor:fever_blossom', 'regions_unexplored:cyan_snowbelle'
        ],
        double: [
            'minecraft:pitcher_plant', 'deep_aether:tall_aether_cattails'
        ]
    },
    {
        color: 'aqua',
        single: [
            'minecraft:glow_ink_sac'
        ]
    },
    {
        color: 'light_blue',
        single: [
            'minecraft:blue_orchid', 'regions_unexplored:aster', 'regions_unexplored:felicia_daisy', 'regions_unexplored:light_blue_snowbelle', 'regions_unexplored:blue_magnolia_flowers'
        ],
        double: [
            'environmental:blue_delphinium', 'biomesoplenty:blue_hydrangea', 'biomesoplenty:icy_iris'
        ]
    },
    {
        color: 'blue',
        single: [
            'minecraft:cornflower', 'environmental:bluebell', '#upgrade_aquatic:tube_corals', 'minecraft:lapis_lazuli', 'deep_aether:iaspove', 'regions_unexplored:blue_lupine', 'regions_unexplored:blue_snowbelle', 'regions_unexplored:meadow_sage', 'regions_unexplored:blue_bioshroom'
        ]
    },
    {
        color: 'purple',
        single: [
            'oreganized:purple_datura', 'bountifulfares:violet_bellflower', 'environmental:violet', 'environmental:purple_hibiscus', 'enderscape:corrupt_growth', 'atmospheric:water_hyacinth', 'biomesoplenty:violet', 'biomesoplenty:lavender', 'aether:purple_flower', 'deep_aether:radiant_orchid', 'deep_aether:echaisy', 'abyssal_decor:aster', 'regions_unexplored:hyssop', 'regions_unexplored:purple_lupine', 'regions_unexplored:purple_coneflower', 'regions_unexplored:purple_snowbelle'
        ],
        double: [
            'environmental:purple_delphinium', 'biomesoplenty:tall_lavender'
        ]
    },
    {
        color: 'magenta',
        single: [
            'minecraft:allium', 'autumnity:autumn_crocus', 'atmospheric:gilia', 'environmental:magenta_hibiscus', '#upgrade_aquatic:bubble_corals', 'biomesoplenty:wildflower', 'regions_unexplored:bleeding_heart', 'regions_unexplored:fireweed', 'regions_unexplored:magenta_snowbelle', 'regions_unexplored:saguaro_cactus_flower'
        ],
        double: [
            'minecraft:lilac'
        ]
    },
    {
        color: 'pink',
        single: [
            'minecraft:pink_tulip', 'buzzier_bees:pink_clover', 'environmental:cartwheel', 'environmental:pink_hibiscus', 'upgrade_aquatic:pink_searocket', 'minecraft:cactus_flower', 'minecraft:pink_petals', '#upgrade_aquatic:brain_corals', 'biomesoplenty:pink_daffodil', 'biomesoplenty:pink_hibiscus', 'deep_aether:aerlavender', 'regions_unexplored:glistering_bloom', 'regions_unexplored:salmon_poppy', 'regions_unexplored:salmon_poppy_bush', 'regions_unexplored:pink_lupine', 'regions_unexplored:pink_snowbelle', 'regions_unexplored:pink_magnolia_flowers', 'regions_unexplored:pink_bioshroom'
        ],
        double: [
            'minecraft:peony', 'environmental:pink_delphinium', 'upgrade_aquatic:flowering_rush', 'deep_aether:tall_aerlavender'
        ]
    }
]

//without create recipe
const recipeless = [
    {
        color: 'white',
        entries: [
            'enderscape:wisp_flower', 'biomesoplenty:white_petals', 'aether:white_flower', 'deep_aether:enchanted_blossom', 'abyssal_decor:bark_orchid', 'regions_unexplored:white_snowbelle', 'regions_unexplored:white_magnolia_flowers'
        ]
    },
    {
        color: 'light_gray',
        entries: [
            'bountifulfares:chamomile_flowers', 'biomesoplenty:endbloom', 'regions_unexplored:light_gray_snowbelle'
        ]
    },
    {
        color: 'gray',
        entries: [
            'minecraft:closed_eyeblossom', 'biomesoplenty:wilted_lily', 'regions_unexplored:gray_snowbelle'
        ]
    },
    {
        color: 'black',
        entries: [
            'regions_unexplored:black_snowbelle', 'bountifulfares:dried_tea_leaves', 'burnt:soot'
        ]
    },
    {
        color: 'brown',
        entries: [
            'bountifulfares:walnut_mulch', 'abyssal_decor:cinnamon_stick', 'regions_unexplored:brown_snowbelle', 'regions_unexplored:cattail'
        ]
    },
    {
        color: 'red',
        entries: [
            'bountifulfares:tea_berries', 'atmospheric:carmine_husk', 'deep_aether:sky_tulips', 'alexscaves:flytrap', 'regions_unexplored:red_snowbelle', 'regions_unexplored:red_lupine'
        ]
    },
    {
        color: 'orange',
        entries: [
            'deep_aether:golden_aspess', 'regions_unexplored:orange_coneflower', 'regions_unexplored:orange_snowbelle', 'regions_unexplored:cave_hyssop'
        ],
        entriesDouble: [
            'deep_aether:golden_flower'
        ]
    },
    {
        color: 'yellow',
        entries: [
            'bountifulfares:honeysuckle', 'caverns_and_chasms:false_hope', 'minecraft:wildflowers', 'enderscape:celestial_growth', '#upgrade_aquatic:horn_corals', 'friendsandfoes:buttercup', 'atmospheric:yellow_blossoms', 'abyssal_decor:daffodil', 'regions_unexplored:yellow_lupine', 'regions_unexplored:yellow_snowbelle', 'regions_unexplored:tall_yellow_bioshroom'
        ]
    },
    {
        color: 'lime',
        entries: [
            'regions_unexplored:lime_snowbelle', 'regions_unexplored:green_bioshroom'
        ],
        entriesDouble: [
            'alexscaves:curly_fern'
        ]
    },
    {
        color: 'green',
        entries: [
            'caverns_and_chasms:moschatel', 'bountifulfares:tea_leaves', 'regions_unexplored:green_snowbelle'
        ]
    },
    {
        color: 'cyan',
        entries: [
            'enderscape:bulb_flower', 'upgrade_aquatic:pickerelweed', 'deep_aether:aether_cattails', 'abyssal_decor:fever_blossom', 'regions_unexplored:cyan_snowbelle'
        ],
        entriesDouble: [
            'deep_aether:tall_aether_cattails'
        ]
    },
    {
        color: 'light_blue',
        entries: [
            'regions_unexplored:light_blue_snowbelle', 'regions_unexplored:blue_magnolia_flowers'
        ]
    },
    {
        color: 'blue',
        entries: [
            'minecraft:cornflower', 'environmental:bluebell', '#upgrade_aquatic:tube_corals', 'deep_aether:iaspove', 'regions_unexplored:blue_lupine', 'regions_unexplored:blue_snowbelle', 'regions_unexplored:meadow_sage', 'regions_unexplored:blue_bioshroom'
        ]
    },
    {
        color: 'purple',
        entries: [
            'bountifulfares:violet_bellflower', 'enderscape:corrupt_growth', 'biomesoplenty:violet', 'aether:purple_flower', 'deep_aether:radiant_orchid', 'deep_aether:echaisy', 'abyssal_decor:aster', 'regions_unexplored:purple_lupine', 'regions_unexplored:purple_coneflower', 'regions_unexplored:purple_snowbelle'
        ]
    },
    {
        color: 'magenta',
        entries: [
            'regions_unexplored:fireweed', '#upgrade_aquatic:bubble_corals', 'regions_unexplored:magenta_snowbelle'
        ]
    },
    {
        color: 'pink',
        entries: [
            'minecraft:cactus_flower', '#upgrade_aquatic:brain_corals', 'deep_aether:aerlavender', 'regions_unexplored:salmon_poppy', 'regions_unexplored:pink_lupine', 'regions_unexplored:pink_snowbelle', 'regions_unexplored:pink_magnolia_flowers', 'regions_unexplored:pink_bioshroom'
        ],
        double: [
            'deep_aether:tall_aerlavender'
        ]
    }
]

ServerEvents.recipes(event => {

    //existing go bye-bye
    event.remove([
        { id: 'burnt:soot_black_dye' },
        { id: 'create:milling/compat/biomesoplenty/endbloom' },
        { id: 'create:milling/compat/biomesoplenty/violet' },
        { id: 'create:milling/compat/biomesoplenty/white_petals' },
        { id: 'create:milling/compat/biomesoplenty/wilted_lily' },
        { id: 'create:milling/compat/environmental/bluebell' },
        { id: 'create:milling/compat/regions_unexplored/blue_lupine' },
        { id: 'create:milling/compat/regions_unexplored/fireweed' },
        { id: 'create:milling/compat/regions_unexplored/orange_coneflower' },
        { id: 'create:milling/compat/regions_unexplored/pink_lupine' },
        { id: 'create:milling/compat/regions_unexplored/purple_coneflower' },
        { id: 'create:milling/compat/regions_unexplored/purple_lupine' },
        { id: 'create:milling/compat/regions_unexplored/red_lupine' },
        { id: 'create:milling/compat/regions_unexplored/yellow_lupine' },
        { id: 'create:milling/cornflower' },
        { id: 'regions_unexplored:brown_dye_from_dead_steppe_shrub' },
        { id: 'regions_unexplored:brown_dye_from_small_desert_shrub' },
        { type: 'kaleidoscope_cookery:millstone' }
    ])
    colorsVanilla.forEach(color => {
        event.remove({ id: `create:milling/compat/regions_unexplored/${color}_snowbelle` })
    })

    //colorful
    colorMapList.forEach(map => {
        const { color, single, double } = map

        if (single != undefined) {
            single.forEach(input => {
                event.remove([
                    {
                        type: 'minecraft:crafting_shapeless',
                        input: input,
                        output: `#c:dyes/${color}`
                    },
                    {
                        type: 'kaleidoscope_cookery:millstone',
                        input: input,
                        output: `#c:dyes/${color}`
                    },
                    {
                        type: 'farmersdelight:cutting',
                        input: input,
                        output: `#c:dyes/${color}`
                    }
                ])
            })
            event.shapeless(dyeItem(color), [single]).id(`kubejs:crafting/dyes_single/${color}`)
            event.recipes.kaleidoscope_cookery.millstone(`2x ${dyeItem(color)}`, [single]).id(`kubejs:millstone/dyes_single/${color}`)
            //event.recipes.farmersdelight.cutting([single], '#c:tools/knife', `2x ${dyes(color)}`).id(`kubejs:cutting/dyes_single/'${color}`)
            if (single.length == 1) {
                event.custom({
                    type: 'farmersdelight:cutting',
                    ingredients: [
                        Ingredient.of(single)
                    ],
                    result: [
                        {
                            item: {
                                count: 2,
                                id: dyeItem(color)
                            }
                        }
                    ],
                    tool: [
                        {
                            type: 'farmersdelight:item_ability',
                            action: 'knife_dig'
                        },
                        {
                            tag: 'c:tools/knife'
                        }
                    ]
                }).id(`kubejs:cutting/dyes_single/${color}`)
            } else {
                let beetroot = single.indexOf('minecraft:beetroot')
                if (beetroot > -1) {
                    single.splice(beetroot, 1)
                }
                event.custom({
                    type: 'farmersdelight:cutting',
                    ingredients: [
                        {
                            type: 'neoforge:compound',
                            children: Ingredient.of(single)
                        }
                    ],
                    result: [
                        {
                            item: {
                                count: 2,
                                id: dyeItem(color)
                            }
                        }
                    ],
                    tool: [
                        {
                            type: 'farmersdelight:item_ability',
                            action: 'knife_dig'
                        },
                        {
                            tag: 'c:tools/knife'
                        }
                    ]
                }).id(`kubejs:cutting/dyes_single/${color}`)
            }

        }
        if (double != undefined) {
            double.forEach(input => {

                event.remove([
                    {
                        type: 'minecraft:crafting_shapeless',
                        input: input,
                        output: `#c:dyes/${color}`
                    },
                    {
                        type: 'kaleidoscope_cookery:millstone',
                        input: input,
                        output: `#c:dyes/${color}`
                    },
                    {
                        type: 'farmersdelight:cutting',
                        input: input,
                        output: `#c:dyes/${color}`
                    }
                ])
            })

            event.shapeless(`2x ${dyeItem(color)}`, [double]).id(`kubejs:crafting/dyes_double/${color}`)
            event.recipes.kaleidoscope_cookery.millstone(`3x ${dyeItem(color)}`, [double]).id(`kubejs:millstone/dyes_double/${color}`)
            //event.recipes.farmersdelight.cutting([double], '#c:tools/knife', `3x ${dyes(color)}`).id(`kubejs:cutting/dyes_double/${color}`)
            if (double.length == 1) {
                event.custom({
                    type: 'farmersdelight:cutting',
                    ingredients: [
                        Ingredient.of(double)
                    ],
                    result: [
                        {
                            item: {
                                count: 3,
                                id: dyeItem(color)
                            }
                        }
                    ],
                    tool: [
                        {
                            type: 'farmersdelight:item_ability',
                            action: 'knife_dig'
                        },
                        {
                            tag: 'c:tools/knife'
                        }
                    ]
                }).id(`kubejs:cutting/dyes_double/${color}`)
            } else {
                event.custom({
                    type: 'farmersdelight:cutting',
                    ingredients: [
                        {
                            type: 'neoforge:compound',
                            children: Ingredient.of(double)
                        }
                    ],
                    result: [
                        {
                            item: {
                                count: 3,
                                id: dyeItem(color)
                            }
                        }
                    ],
                    tool: [
                        {
                            type: 'farmersdelight:item_ability',
                            action: 'knife_dig'
                        },
                        {
                            tag: 'c:tools/knife'
                        }
                    ]
                }).id(`kubejs:cutting/dyes_double/${color}`)
            }

        }
    })
    recipeless.forEach(map => {
        const { color, entries, entriesDouble } = map

        event.recipes.create.milling(`2x ${dyeItem(color)}`, [entries]).id(`kubejs:milling/dyes_single/${color}`)
        if (entriesDouble != undefined) {
            event.recipes.create.milling(`3x ${dyeItem(color)}`, [entriesDouble]).id(`kubejs:milling/dyes_double/${color}`)
        }
    })
    //extras
    event.recipes.create.milling(dyeItem('brown'), [['regions_unexplored:small_desert_shrub', 'regions_unexplored:dead_steppe_shrub']]).id('kubejs:milling/dyes/brown_from_shrub')
    event.recipes.create.milling([`2x ${dyeItem('light_gray')}`, CreateItem.of(dyeItem('lime'), 0.1)], 'minecraft:white_tulip').id('create:milling/white_tulip')
    event.recipes.create.milling([`2x ${dyeItem('white')}`, CreateItem.of(dyeItem('light_gray'), 0.2), CreateItem.of(dyeItem('yellow'), 0.05)], 'regions_unexplored:white_trillium').id('create:milling/compat/regions_unexplored/white_trillium')
    event.recipes.create.milling([`2x ${dyeItem('magenta')}`, CreateItem.of(`2x ${dyeItem('purple')}`, 0.1), CreateItem.of(dyeItem('pink'), 0.1)], 'atmospheric:gilia').id('create:milling/compat/atmospheric/gilia')

    //adding back recipes but better
    event.recipes.kaleidoscope_cookery.millstone('minecraft:string', '#minecraft:wool').id('kubejs:millstone/wool')
    event.recipes.kaleidoscope_cookery.millstone('2x minecraft:sugar', 'minecraft:sugar_cane').id('kubejs:millstone/sugar_cane')
    event.recipes.kaleidoscope_cookery.millstone('3x minecraft:bone_meal', 'minecraft:bone').id('kubejs:millstone/bone')
    event.recipes.kaleidoscope_cookery.millstone('5x minecraft:bone_meal', 'kaleidoscope_nether:wither_rib').id('kubejs:millstone/wither_rib')
    event.recipes.create.milling(['5x minecraft:bone_meal', CreateItem.of(dyeItem('black'), 0.25), CreateItem.of('4x minecraft:bone_meal', 0.25)], 'kaleidoscope_nether:wither_rib').id('kubejs:milling/wither_rib')
    event.recipes.create.crushing(['4x minecraft:blaze_powder', CreateItem.of('4x minecraft:blaze_powder', 0.25)], 'kaleidoscope_nether:blaze_heart').id('kubejs:milling/blaze_heart')
    function millingRecipe(result, ingredient) {
        event.recipes.create.milling(result, Ingredient.of(ingredient)).id(`kubejs:milling/${ingredient.split(':')[1]}`)
        event.recipes.kaleidoscope_cookery.millstone(result, ingredient).id(`kubejs:millstone/${ingredient.split(':')[1]}`)
    }
    millingRecipe('5x minecraft:leather', 'kaleidoscope_nether:hoglin_hide')
    millingRecipe('2x kaleidoscope_nether:star_dust', 'minecraft:nether_star')
    millingRecipe('4x minecraft:leather', 'kaleidoscope_nether:ghast_hide')
    millingRecipe('kaleidoscope_nether:strider_rock_shell', 'mynethersdelight:strider_rock')
    millingRecipe('kaleidoscope_cookery:oil', '#c:seeds')
    millingRecipe('3x kaleidoscope_nether:wither_rib', 'minecraft:wither_skeleton_skull')
    millingRecipe('3x kaleidoscope_cookery:rice', 'kaleidoscope_cookery:rice_panicle')

    function stonetypeCrushing(result, ingredient) {
        event.recipes.create.crushing(result, Ingredient.of(ingredient)).id(`kubejs:crushing/${ingredient.split(':')[1]}`)
    }
    //Zinc
    stonetypeCrushing(['create:crushed_raw_zinc', CreateItem.of('create:crushed_raw_zinc', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:andesite', 0.125)], 'spelunkery:andesite_zinc_ore')
    stonetypeCrushing(['create:crushed_raw_zinc', CreateItem.of('create:crushed_raw_zinc', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:diorite', 0.125)], 'spelunkery:diorite_zinc_ore')
    stonetypeCrushing(['create:crushed_raw_zinc', CreateItem.of('create:crushed_raw_zinc', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:granite', 0.125)], 'spelunkery:granite_zinc_ore')
    stonetypeCrushing(['2x create:crushed_raw_zinc', CreateItem.of('create:crushed_raw_zinc', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:tuff', 0.125)], 'spelunkery:tuff_zinc_ore')
    //Zinc Nugget Removal
    event.remove([
        { id: 'create:crushing/asurine_recycling' },
        { id: 'create:crushing/asurine' },
        { id: 'spelunkery:crushing/asurine' }
    ])

    //Coal
    stonetypeCrushing(['minecraft:coal', CreateItem.of('minecraft:coal', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:andesite', 0.125)], 'spelunkery:andesite_coal_ore')
    stonetypeCrushing(['minecraft:coal', CreateItem.of('minecraft:coal', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:diorite', 0.125)], 'spelunkery:diorite_coal_ore')
    stonetypeCrushing(['minecraft:coal', CreateItem.of('minecraft:coal', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:granite', 0.125)], 'spelunkery:granite_coal_ore')
    stonetypeCrushing(['2x minecraft:coal', CreateItem.of('minecraft:coal', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:tuff', 0.125)], 'spelunkery:tuff_coal_ore')
    stonetypeCrushing(['2x minecraft:coal', CreateItem.of('2x minecraft:coal', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('alexscaves:coprolith', 0.125)], 'alexscaves:coprolith_coal_ore')

    //Iron
    stonetypeCrushing(['create:crushed_raw_iron', CreateItem.of('create:crushed_raw_iron', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:andesite', 0.125)], 'spelunkery:andesite_iron_ore')
    stonetypeCrushing(['create:crushed_raw_iron', CreateItem.of('create:crushed_raw_iron', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:diorite', 0.125)], 'spelunkery:diorite_iron_ore')
    stonetypeCrushing(['create:crushed_raw_iron', CreateItem.of('create:crushed_raw_iron', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:granite', 0.125)], 'spelunkery:granite_iron_ore')
    stonetypeCrushing(['2x create:crushed_raw_iron', CreateItem.of('create:crushed_raw_iron', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:tuff', 0.125)], 'spelunkery:tuff_iron_ore')
    stonetypeCrushing(['2x create:crushed_raw_iron', CreateItem.of('2x create:crushed_raw_iron', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('alexscaves:galena', 0.125)], 'alexscaves:galena_iron_ore')
    //Iron Nugget Removal
    event.remove([
        { id: 'create:crushing/crimsite_recycling' },
        { id: 'create:crushing/crimsite' },
        { id: 'spelunkery:crushing/crimsite' },
        { id: 'create:splashing/gravel' }
    ])


    //Copper
    stonetypeCrushing(['5x create:crushed_raw_copper', CreateItem.of('create:crushed_raw_copper', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:andesite', 0.125)], 'spelunkery:andesite_copper_ore')
    stonetypeCrushing(['5x create:crushed_raw_copper', CreateItem.of('create:crushed_raw_copper', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:diorite', 0.125)], 'spelunkery:diorite_copper_ore')
    stonetypeCrushing(['5x create:crushed_raw_copper', CreateItem.of('create:crushed_raw_copper', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:granite', 0.125)], 'spelunkery:granite_copper_ore')
    stonetypeCrushing(['7x create:crushed_raw_copper', CreateItem.of('create:crushed_raw_copper', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:tuff', 0.125)], 'spelunkery:tuff_copper_ore')

    //Gold
    stonetypeCrushing(['create:crushed_raw_gold', CreateItem.of('create:crushed_raw_gold', 0.75), CreateItem.of('2x create:experience_nugget', 0.75), CreateItem.of('minecraft:andesite', 0.125)], 'spelunkery:andesite_gold_ore')
    stonetypeCrushing(['create:crushed_raw_gold', CreateItem.of('create:crushed_raw_gold', 0.75), CreateItem.of('2x create:experience_nugget', 0.75), CreateItem.of('minecraft:diorite', 0.125)], 'spelunkery:diorite_gold_ore')
    stonetypeCrushing(['create:crushed_raw_gold', CreateItem.of('create:crushed_raw_gold', 0.75), CreateItem.of('2x create:experience_nugget', 0.75), CreateItem.of('minecraft:granite', 0.125)], 'spelunkery:granite_gold_ore')
    stonetypeCrushing(['2x create:crushed_raw_gold', CreateItem.of('create:crushed_raw_gold', 0.25), CreateItem.of('2x create:experience_nugget', 0.75), CreateItem.of('minecraft:tuff', 0.125)], 'spelunkery:tuff_gold_ore')
    //Gold nugget removal
    event.remove([
        { id: 'create:crushing/nether_gold_ore' },
        { id: 'create:crushing/ochrum_recycling' },
        { id: 'create:crushing/ochrum' },
        { id: 'spelunkery:crushing/ochrum' },
        { id: 'create:splashing/red_sand' },
        { id: 'create:splashing/soul_sand' }
    ])

    //Redstone
    stonetypeCrushing(['3x spelunkery:rough_cinnabar', CreateItem.of('minecraft:redstone', 0.5), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('alexscaves:guanostone', 0.125)], 'alexscaves:guanostone_redstone_ore')
    event.remove({ id: 'create:crushing/redstone_ore' })
    event.remove({ id: 'create:crushing/deepslate_redstone_ore' })

    //Emerald removal
    event.remove({ id: 'create:crushing/emerald_ore' })
    event.remove({ id: 'create:crushing/deepslate_emerald_ore' })


    //Lapis removal
    event.remove({ id: 'create:crushing/lapis_ore' })
    event.remove({ id: 'create:crushing/deepslate_lapis_ore' })

    //Diamond removal
    event.remove({ id: 'create:crushing/diamond_ore' })
    event.remove({ id: 'create:crushing/deepslate_diamond_ore' })

    //Lead
    event.remove({ id: 'create:crushing/lead_ore' })
    stonetypeCrushing(['create:crushed_raw_lead', CreateItem.of('create:crushed_raw_lead', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobblestone', 0.125)], 'oreganized:lead_ore')
    stonetypeCrushing(['2x create:crushed_raw_lead', CreateItem.of('create:crushed_raw_lead', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobbled_deepslate', 0.125)], 'oreganized:deepslate_lead_ore')
    stonetypeCrushing(['create:crushed_raw_lead', CreateItem.of('create:crushed_raw_lead', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:andesite', 0.125)], 'spelunkery:andesite_lead_ore')
    stonetypeCrushing(['2x create:crushed_raw_lead', CreateItem.of('create:crushed_raw_lead', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:diorite', 0.125)], 'spelunkery:diorite_lead_ore')
    stonetypeCrushing(['create:crushed_raw_lead', CreateItem.of('create:crushed_raw_lead', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:granite', 0.125)], 'spelunkery:granite_lead_ore')
    stonetypeCrushing(['2x create:crushed_raw_lead', CreateItem.of('create:crushed_raw_lead', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:tuff', 0.125)], 'spelunkery:tuff_lead_ore')

    //Tin 
    event.remove({ id: 'create:crushing/tin_ore' })
    stonetypeCrushing(['create:crushed_raw_tin', CreateItem.of('create:crushed_raw_tin', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobblestone', 0.125)], 'caverns_and_chasms:tin_ore')
    stonetypeCrushing(['2x create:crushed_raw_tin', CreateItem.of('create:crushed_raw_tin', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobbled_deepslate', 0.125)], 'caverns_and_chasms:deepslate_tin_ore')
    stonetypeCrushing(['2x create:crushed_raw_tin', CreateItem.of('2x create:crushed_raw_tin', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('caverns_and_chasms:cylindrite', 0.125)], 'caverns_and_chasms:cylindrite_tin_ore')
    stonetypeCrushing(['2x create:crushed_raw_tin', CreateItem.of('3x create:crushed_raw_tin', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('caverns_and_chasms:cassiterite', 0.125)], 'caverns_and_chasms:cassiterite_tin_ore')

    event.smelting('caverns_and_chasms:tin_ingot', 'create:crushed_raw_tin', 0.1).id('kubejs:smelting/tin_ingot')
    event.blasting('caverns_and_chasms:tin_ingot', 'create:crushed_raw_tin', 0.1).id('kubejs:blasting/tin_ingot')
    event.recipes.create.splashing('9x caverns_and_chasms:tin_nugget', 'create:crushed_raw_tin').id('kubejs:splashing/crushed_raw_tin')
    event.custom({
        type: 'dndesires:seething',
        ingredients: [
            {
                item: 'create:crushed_raw_tin'
            }
        ],
        results: [
            {
                id: 'caverns_and_chasms:tin_ingot'
            },
            {
                chance: 0.25,
                id: 'caverns_and_chasms:tin_ingot'
            }
        ]
    }).id('kubejs:seething/crushed_raw_tin')

    //Lithium
    event.recipes.create.splashing('9x tfmg:lithium_nugget', 'tfmg:crushed_raw_lithium').id('kubejs:splashing/crushed_raw_lithium')
    event.custom({
        type: 'dndesires:seething',
        ingredients: [
            {
                item: 'tfmg:crushed_raw_lithium'
            }
        ],
        results: [
            {
                id: 'tfmg:lithium_ingot'
            },
            {
                chance: 0.25,
                id: 'tfmg:lithium_ingot'
            }
        ]
    }).id('kubejs:seething/crushed_raw_lithium')

    //Silver
    event.remove({ id: 'create:crushing/silver_ore' })
    stonetypeCrushing(['create:crushed_raw_silver', CreateItem.of('create:crushed_raw_silver', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobblestone', 0.125)], 'oreganized:silver_ore')
    stonetypeCrushing(['2x create:crushed_raw_silver', CreateItem.of('create:crushed_raw_silver', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobbled_deepslate', 0.125)], 'oreganized:deepslate_silver_ore')
    stonetypeCrushing(['create:crushed_raw_silver', CreateItem.of('create:crushed_raw_silver', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:andesite', 0.125)], 'spelunkery:andesite_silver_ore')
    stonetypeCrushing(['2x create:crushed_raw_silver', CreateItem.of('create:crushed_raw_silver', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:diorite', 0.125)], 'spelunkery:diorite_silver_ore')
    stonetypeCrushing(['create:crushed_raw_silver', CreateItem.of('create:crushed_raw_silver', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:granite', 0.125)], 'spelunkery:granite_silver_ore')
    stonetypeCrushing(['2x create:crushed_raw_silver', CreateItem.of('create:crushed_raw_silver', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:tuff', 0.125)], 'spelunkery:tuff_silver_ore')

    stonetypeCrushing(['18x spelunkery:raw_silver_nugget', CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:soul_sand', 0.125)], 'caverns_and_chasms:soul_silver_ore')

    //Asbestos
    stonetypeCrushing(['oreganized:raw_asbestos', CreateItem.of('oreganized:raw_asbestos', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobblestone', 0.125)], 'oreganized:asbestos_ore')
    stonetypeCrushing(['2x oreganized:raw_asbestos', CreateItem.of('oreganized:raw_asbestos', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobbled_deepslate', 0.125)], 'oreganized:deepslate_asbestos_ore')

    //Turqoise
    stonetypeCrushing(['3x caverns_and_chasms:turquoise', CreateItem.of('2x caverns_and_chasms:turquoise', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('spelunkery:raw_copper_nugget', 0.8), CreateItem.of('minecraft:cobblestone', 0.125)], 'caverns_and_chasms:turquoise_ore')
    stonetypeCrushing(['4x caverns_and_chasms:turquoise', CreateItem.of('3x caverns_and_chasms:turquoise', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('spelunkery:raw_copper_nugget', 0.8), CreateItem.of('minecraft:cobbled_deepslate', 0.125)], 'caverns_and_chasms:deepslate_turquoise_ore')

    //Spinel
    stonetypeCrushing(['caverns_and_chasms:spinel', CreateItem.of('caverns_and_chasms:spinel', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobblestone', 0.125)], 'caverns_and_chasms:spinel_ore')
    stonetypeCrushing(['2x caverns_and_chasms:spinel', CreateItem.of('caverns_and_chasms:spinel', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobbled_deepslate', 0.125)], 'caverns_and_chasms:deepslate_spinel_ore')

    //Uranium
    event.remove({ id: 'create:crushing/uranium_ore' })
    stonetypeCrushing(['create:crushed_raw_uranium', CreateItem.of('create:crushed_raw_uranium', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobblestone', 0.125)], 'createnuclear:uranium_ore')
    stonetypeCrushing(['2x create:crushed_raw_uranium', CreateItem.of('create:crushed_raw_uranium', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobbled_deepslate', 0.125)], 'createnuclear:deepslate_uranium_ore')
    stonetypeCrushing(['2x create:crushed_raw_uranium', CreateItem.of('create:crushed_raw_uranium', 0.25), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('alexscaves:radrock', 0.125)], 'alexscaves:radrock_uranium_ore')
    stonetypeCrushing(CreateItem.of('2x alexscaves:uranium_shard', 0.25), '#kubejs:stone_types/radrock')

    //Nickel
    event.remove({ id: 'create:crushing/nickel_ore' })
    stonetypeCrushing(['create:crushed_raw_nickel', CreateItem.of('create:crushed_raw_nickel', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobblestone', 0.125)], 'tfmg:nickel_ore')
    stonetypeCrushing(['2x create:crushed_raw_nickel', CreateItem.of('create:crushed_raw_nickel', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:cobbled_deepslate', 0.125)], 'tfmg:deepslate_nickel_ore')
    event.recipes.create.splashing('9x tfmg:nickel_nugget', 'create:crushed_raw_nickel').id('kubejs:splashing/crushed_raw_nickel')
    event.custom({
        type: 'dndesires:seething',
        ingredients: [
            {
                item: 'create:crushed_raw_nickel'
            }
        ],
        results: [
            {
                id: 'tfmg:nickel_ingot'
            },
            {
                chance: 0.25,
                id: 'tfmg:nickel_ingot'
            }
        ]
    }).id('kubejs:seething/crushed_raw_nickel')

    //Seabrass
    stonetypeCrushing(['abyssal_decor:raw_seabrass', CreateItem.of('abyssal_decor:raw_seabrass', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:gravel', 0.125)], 'abyssal_decor:seabrass_ore')

    //Nebulite
    stonetypeCrushing(['2x enderscape:nebulite_shards', CreateItem.of('enderscape:nebulite_shards', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:end_stone', 0.125)], 'enderscape:nebulite_ore')
    stonetypeCrushing(['2x enderscape:nebulite_shards', CreateItem.of('2x enderscape:nebulite_shards', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('enderscape:mirestone', 0.125)], 'enderscape:mirestone_nebulite_ore')

    //Shadoline
    stonetypeCrushing(['enderscape:raw_shadoline', CreateItem.of('enderscape:raw_shadoline', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('minecraft:end_stone', 0.125)], 'enderscape:shadoline_ore')
    stonetypeCrushing(['2x enderscape:raw_shadoline', CreateItem.of('enderscape:raw_shadoline', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('enderscape:mirestone', 0.125)], 'enderscape:mirestone_shadoline_ore')

    //Skyjade
    stonetypeCrushing(['18x deep_aether:skyjade_nugget', CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('aether:holystone', 0.125)], 'deep_aether:skyjade_ore')

    //Arkenium
    event.recipes.create.crushing(['kubejs:crushed_raw_arkenium', CreateItem.of('kubejs:crushed_raw_arkenium', 0.75), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('aether:holystone', 0.125)], Ingredient.of('#c:ores/arkenium')).id('kubejs:crushing/arkenium_ore')
    event.recipes.create.crushing(['kubejs:crushed_raw_arkenium', CreateItem.of('create:experience_nugget', 0.75)], Ingredient.of('#c:raw_materials/arkenium'), 400).id('kubejs:crushing/raw_arkenium')
    event.recipes.create.crushing(['9x kubejs:crushed_raw_arkenium', CreateItem.of('9x create:experience_nugget', 0.75)], Ingredient.of('#c:storage_blocks/raw_arkenium'), 400).id('kubejs:crushing/raw_arkenium_block')

    event.smelting('aethersdelight:arkenium_ingot', 'kubejs:crushed_raw_arkenium', 0.1).id('kubejs:smelting/arkenium_ingot')
    event.blasting('aethersdelight:arkenium_ingot', 'kubejs:crushed_raw_arkenium', 0.1).id('kubejs:blasting/arkenium_ingot')
    event.recipes.create.splashing(['9x aethersdelight:arkenium_nugget', CreateItem.of('aether:ambrosium_shard', 0.75)], 'kubejs:crushed_raw_arkenium').id('kubejs:splashing/crushed_raw_arkenium')
    event.custom({
        type: 'dndesires:seething',
        ingredients: [
            {
                item: 'kubejs:crushed_raw_arkenium'
            }
        ],
        results: [
            {
                id: 'aethersdelight:arkenium_ingot'
            },
            {
                chance: 0.75,
                id: 'aethersdelight:arkenium_ingot'
            }
        ]
    }).id('kubejs:seething/crushed_raw_arkenium')

    //Bone Pile
    event.recipes.create.crushing(['27x minecraft:bone_meal', CreateItem.of(`9x ${dyeItem('white')}`, 0.25), CreateItem.of('27x minecraft:bone_meal', 0.25)],
        'doom_and_gloom:bone_pile'
    ).id('kubejs:crushing/bone_pile')

    //Hay Bale
    event.recipes.create.crushing(['9x bountifulfares:flour', CreateItem.of('18x bountifulfares:flour', 0.25), CreateItem.of('9x minecraft:wheat_seeds', 0.25)],
        'minecraft:hay_block'
    ).id('kubejs:crushing/hay_block')

    //Wood Chip recycling
    function chipper(amount, input) {
        event.recipes.create.crushing([`${amount - 1}x createdieselgenerators:wood_chip`, CreateItem.of('createdieselgenerators:wood_chip', 0.5)],
            [input]
        ).id(`kubejs:crushing/wood_chip/${amount}`)

    }
    chipper(8,
        ['create:large_cogwheel', 'gnkinetics:shaftless_large_cogwheel']
    )
    chipper(6,
        ['petrolsparts:large_coaxial_gear', 'gnkinetics:hollow_large_cogwheel']
    )
    chipper(4,
        ['create:cogwheel', 'gnkinetics:shaftless_cogwheel']
    )
    chipper(2,
        ['gnkinetics:shaftless_tiny_cogwheel', 'petrolsparts:coaxial_gear', 'gnkinetics:hollow_cogwheel']
    )
})