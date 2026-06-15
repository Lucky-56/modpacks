//cheers to kragnoth on discord
ServerEvents.generateData('after_mods', event => {
    let brokenrecipes = [
        'create_compressed:recipe/splashing/oreganized/crushed_raw_lead_pile',
        'create_ironworks:recipe/misc/compat/create_dd/recipe/crafting/steel_block_from_compacting',
        'create_ironworks:recipe/misc/compat/create_dd/recipe/crafting/steel_ingot_from_compacting',
        'create_ironworks:recipe/misc/compat/create_dd/recipe/crafting/steel_ingot_from_decompacting',
        'create_ironworks:recipe/misc/compat/create_dd/recipe/crafting/steel_nugget_from_decompacting',
        'create_ironworks:recipe/misc/compat/create_dd/recipe/crafting/tin_block_from_compacting',
        'create_ironworks:recipe/misc/compat/create_dd/recipe/crafting/tin_ingot_from_compacting',
        'create_ironworks:recipe/misc/compat/create_dd/recipe/ironworks_compat/raw_tin_exchange',
        'createaddition:recipe/compat/mekanism/rose_quartz_metallurgic_infusing',
        'dramaticdoors:recipe/tall_chipped_modern_acacia_door',
        'dramaticdoors:recipe/tall_chipped_modern_birch_door',
        'dramaticdoors:recipe/tall_chipped_modern_crimson_door',
        'dramaticdoors:recipe/tall_chipped_modern_dark_oak_door',
        'dramaticdoors:recipe/tall_chipped_modern_jungle_door',
        'dramaticdoors:recipe/tall_chipped_modern_mangrove_door',
        'dramaticdoors:recipe/tall_chipped_modern_spruce_door',
        'dramaticdoors:recipe/tall_chipped_modern_warped_door',
        'dramaticdoors:recipe/tall_chipped_screen_mangrove_door',
        'dramaticdoors:recipe/tall_chipped_shack_mangrove_door',
        'dramaticdoors:recipe/tall_chipped_sliding_warped_door',
        'dramaticdoors:recipe/tall_chipped_tiled_mangrove_door',
        'dyenamics:recipe/ma/concrete/amber_concrete',
        'dyenamics:recipe/ma/concrete/aquamarine_concrete',
        'dyenamics:recipe/ma/concrete/bubblegum_concrete',
        'dyenamics:recipe/ma/concrete/cherenkov_concrete',
        'dyenamics:recipe/ma/concrete/conifer_concrete',
        'dyenamics:recipe/ma/concrete/fluorescent_concrete',
        'dyenamics:recipe/ma/concrete/honey_concrete',
        'dyenamics:recipe/ma/concrete/icy_blue_concrete',
        'dyenamics:recipe/ma/concrete/lavender_concrete',
        'dyenamics:recipe/ma/concrete/maroon_concrete',
        'dyenamics:recipe/ma/concrete/mint_concrete',
        'dyenamics:recipe/ma/concrete/navy_concrete',
        'dyenamics:recipe/ma/concrete/peach_concrete',
        'dyenamics:recipe/ma/concrete/persimmon_concrete',
        'dyenamics:recipe/ma/concrete/rose_concrete',
        'dyenamics:recipe/ma/concrete/spring_green',
        'dyenamics:recipe/ma/concrete/ultramarine',
        'dyenamics:recipe/ma/concrete/wine_concrete',
        'dyenamics:recipe/ma/dye/amber_dye',
        'dyenamics:recipe/ma/dye/aquamarine_dye',
        'dyenamics:recipe/ma/dye/bubblegum_dye',
        'dyenamics:recipe/ma/dye/cherenkov_dye',
        'dyenamics:recipe/ma/dye/conifer_dye',
        'dyenamics:recipe/ma/dye/fluorescent_dye',
        'dyenamics:recipe/ma/dye/honey_dye',
        'dyenamics:recipe/ma/dye/icy_blue_dye',
        'dyenamics:recipe/ma/dye/lavender_dye',
        'dyenamics:recipe/ma/dye/maroon_dye',
        'dyenamics:recipe/ma/dye/mint_dye',
        'dyenamics:recipe/ma/dye/navy_dye',
        'dyenamics:recipe/ma/dye/peach_dye',
        'dyenamics:recipe/ma/dye/persimmon_dye',
        'dyenamics:recipe/ma/dye/rose_dye',
        'dyenamics:recipe/ma/dye/spring_green_dye',
        'dyenamics:recipe/ma/dye/ultramarine_dye',
        'dyenamics:recipe/ma/dye/wine_dye'
    ]

    for (let id of brokenrecipes) {
        event.json(`${id}.json`,
            {
                'neoforge:conditions': [
                    {
                        'type': 'neoforge:false'
                    }
                ],
                'type': 'minecraft:crafting_shapeless',
                'ingredients': [
                    {
                        'item': 'minecraft:barrier'
                    }
                ],
                'result': {
                    'id': 'minecraft:barrier',
                    'count': 1
                }
            }
        )
    }
})