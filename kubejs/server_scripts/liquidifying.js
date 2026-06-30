ServerEvents.recipes(event => {
    //water
    // Soap
    event.shapeless('6x supplementaries:soap', [
        '#c:buckets/water', 'supplementaries:ash', 'supplementaries:ash', 'supplementaries:ash', 'supplementaries:ash', '#c:foods/raw_pork'
    ]).id('supplementaries:soap_manual_only')
    event.recipes.create.mixing('6x supplementaries:soap', ['4x supplementaries:ash', Ingredient.of('#c:foods/raw_pork'), '1000x minecraft:water']).id('supplementaries:soap')

    // Dough
    event.shapeless('2x refurbished_furniture:dough', [
        'refurbished_furniture:wheat_flour', '#c:buckets/water'
    ]).id('refurbished_furniture:dough_manual_only')
    event.recipes.create.mixing('2x refurbished_furniture:dough', [
        'refurbished_furniture:wheat_flour', '1000x minecraft:water'
    ]).id('refurbished_furniture:dough')

    // Rusted Blast Furnace Reinforcement
    event.shapeless('8x tfmg:rusted_blast_furnace_reinforcement', [
        '#c:buckets/water', 'tfmg:blast_furnace_reinforcement', 'tfmg:blast_furnace_reinforcement', 'tfmg:blast_furnace_reinforcement', 'tfmg:blast_furnace_reinforcement', 'tfmg:blast_furnace_reinforcement', 'tfmg:blast_furnace_reinforcement', 'tfmg:blast_furnace_reinforcement', 'tfmg:blast_furnace_reinforcement'
    ]).id('tfmg:crafting/materials/rusted_blast_furnace_reinforcement_manual_only')
    event.recipes.create.mixing('8x tfmg:rusted_blast_furnace_reinforcement', [
        '1000x minecraft:water', '8x tfmg:blast_furnace_reinforcement'
    ]).id('tfmg:crafting/materials/rusted_blast_furnace_reinforcement')

    // Mud Ball
    event.shapeless('16x environmental:mud_ball', [
        '#c:buckets/water', '#environmental:convertable_to_mud', '#environmental:convertable_to_mud', '#environmental:convertable_to_mud', '#environmental:convertable_to_mud'
    ]).id('environmental:mud_ball_from_dirt_manual_only')
    event.recipes.create.mixing('16x environmental:mud_ball', [
        '1000x minecraft:water', SizedIngredient.of('#environmental:convertable_to_mud', 4)
    ]).id('environmental:mud_ball_from_dirt')

    // Flooded Dripstone Shingle
    event.shapeless('8x caverns_and_chasms:flooded_dripstone_shingles', [
        '#c:buckets/water', 'caverns_and_chasms:flooded_dripstone_shingles', 'caverns_and_chasms:flooded_dripstone_shingles', 'caverns_and_chasms:flooded_dripstone_shingles', 'caverns_and_chasms:flooded_dripstone_shingles', 'caverns_and_chasms:flooded_dripstone_shingles', 'caverns_and_chasms:flooded_dripstone_shingles', 'caverns_and_chasms:flooded_dripstone_shingles', 'caverns_and_chasms:flooded_dripstone_shingles'
    ]).id('caverns_and_chasms:flooded_dripstone_shingles_manual_only')
    event.recipes.create.mixing('8x caverns_and_chasms:flooded_dripstone_shingles', [
        '1000x minecraft:water', '8x caverns_and_chasms:flooded_dripstone_shingles'
    ]).id('caverns_and_chasms:flooded_dripstone_shingles')




    //milk
    event.shaped('cookingforblockheads:milk_jar', [
        'GPG',
        'GmG',
        'GGG'
    ], {
        G: 'glass',
        P: ['#planks', '#aether:planks_crafting'],
        m: '#c:buckets/milk'
    }).id('cookingforblockheads:milk_jar')

    event.shapeless('aethersdelight:aechor_ice_cream_base', [
        'aether:aechor_petal', 'sugar', 'sugar', '#c:eggs', '#c:foods/milk', 'aether:skyroot_bucket'
    ]).id('aethersdelight:aechor_ice_cream_base_manual_only')
    event.recipes.create.mixing('aethersdelight:aechor_ice_cream_base', [
        'aether:aechor_petal', '2x minecraft:sugar', Ingredient.of('#c:eggs'), 'aether:skyroot_bucket', '250x #c:milk'
    ]).id('aethersdelight:aechor_ice_cream_base')

    event.shapeless('3x supplementaries:pancake', [
        'sugar', '#c:foods/milk', 'farmersdelight:wheat_dough', '#c:eggs'
    ]).id('supplementaries:integration/pancake_fd_manual_only')
    event.recipes.create.mixing('3x supplementaries:pancake', [
        'minecraft:sugar', Ingredient.of('#c:foods/dough/wheat'), Ingredient.of('#c:eggs'), '250x #c:milk'
    ]).id('supplementaries:integration/pancake_fd')

    event.shapeless('farmersdelight:stuffed_potato', [
        'minecraft:baked_potato', '#c:foods/cooked_beef', '#c:foods/milk'
    ]).id('farmersdelight:stuffed_potato_manual_only')
    event.recipes.create.mixing('farmersdelight:stuffed_potato', [
        'minecraft:baked_potato', Ingredient.of('#c:foods/cooked_beef'), '250x #c:milk'
    ]).id('farmersdelight:stuffed_potato')

    event.shapeless('farmersdelight:shepherds_pie_block', [
        'minecraft:baked_potato', '#c:foods/milk', 'minecraft:baked_potato', '#c:foods/cooked_mutton', '#c:foods/cooked_mutton', '#c:foods/cooked_mutton', '#c:crops/onion', 'bowl', '#c:crops/onion'
    ]).id('farmersdelight:shepherds_pie_block_manual_only')
    event.recipes.create.mixing('farmersdelight:shepherds_pie_block', [
        '2x minecraft:baked_potato', SizedIngredient.of('#c:foods/cooked_mutton', 3), SizedIngredient.of('#c:crops/onion', 2), 'minecraft:bowl', '250x #c:milk'
    ]).id('farmersdelight:shepherds_pie_block')

    event.shapeless('2x refurbished_furniture:cheese', [
        'refurbished_furniture:sea_salt', '#c:foods/milk'
    ]).id('refurbished_furniture:cheese_manual_only')
    event.recipes.create.mixing('2x refurbished_furniture:cheese', [
        'refurbished_furniture:sea_salt', '250x #c:milk'
    ]).id('refurbished_furniture:cheese')

    event.shapeless('abyssal_decor:clam_and_cheese_sandwich', [
        'abyssal_decor:shucked_clam', '#c:foods/milk', 'abyssal_decor:shucked_clam'
    ]).id('abyssal_decor:clam_and_cheese_sandwich_recipe_manual_only')
    event.recipes.create.mixing('abyssal_decor:clam_and_cheese_sandwich', [
        '2x abyssal_decor:shucked_clam', '250x #c:milk'
    ]).id('abyssal_decor:clam_and_cheese_sandwich_recipe')

    event.shapeless('neapolitan:adzuki_ice_cream', [
        'neapolitan:roasted_adzuki_beans', '#c:ice_cubes', 'minecraft:sugar', '#c:foods/milk', 'minecraft:bowl'
    ]).id('neapolitan:adzuki_ice_cream_manual_only')
    event.recipes.create.mixing('neapolitan:adzuki_ice_cream', [
        'neapolitan:roasted_adzuki_beans', Ingredient.of('#c:ice_cubes'), 'minecraft:sugar', 'minecraft:bowl', '250x #c:milk'
    ]).id('neapolitan:adzuki_ice_cream')

    event.shapeless('3x neapolitan:adzuki_milkshake', [
        'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'neapolitan:adzuki_ice_cream', '#c:foods/milk'
    ]).id('neapolitan:adzuki_milkshake_manual_only')
    event.recipes.create.mixing('3x neapolitan:adzuki_milkshake', [
        '3x minecraft:glass_bottle', 'neapolitan:adzuki_ice_cream', '250x #c:milk'
    ]).id('neapolitan:adzuki_milkshake')

    event.shapeless('neapolitan:strawberry_ice_cream', [
        '#c:foods/strawberry', '#c:ice_cubes', 'minecraft:sugar', '#c:foods/milk', 'minecraft:bowl'
    ]).id('neapolitan:stawberry_ice_cream_manual_only')
    event.recipes.create.mixing('neapolitan:strawberry_ice_cream', [
        Ingredient.of('#c:foods/strawberry'), Ingredient.of('#c:ice_cubes'), 'minecraft:sugar', 'minecraft:bowl', '250x #c:milk'
    ]).id('neapolitan:strawberry_ice_cream')

    event.shapeless('3x neapolitan:strawberry_milkshake', [
        'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'neapolitan:strawberry_ice_cream', '#c:foods/milk'
    ]).id('neapolitan:strawberry_milkshake_manual_only')
    event.recipes.create.mixing('3x neapolitan:strawberry_milkshake', [
        '3x minecraft:glass_bottle', 'neapolitan:strawberry_ice_cream', '250x #c:milk'
    ]).id('neapolitan:strawberry_milkshake')

    event.shapeless('neapolitan:banana_ice_cream', [
        '#c:foods/banana', '#c:ice_cubes', 'minecraft:sugar', '#c:foods/milk', 'minecraft:bowl'
    ]).id('neapolitan:banana_ice_cream_manual_only')
    event.recipes.create.mixing('neapolitan:banana_ice_cream', [
        Ingredient.of('#c:foods/banana'), Ingredient.of('#c:ice_cubes'), 'minecraft:sugar', 'minecraft:bowl', '250x #c:milk'
    ]).id('neapolitan:banana_ice_cream')

    event.shapeless('3x neapolitan:banana_milkshake', [
        'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'neapolitan:banana_ice_cream', '#c:foods/milk'
    ]).id('neapolitan:banana_milkshake_manual_only')
    event.recipes.create.mixing('3x neapolitan:banana_milkshake', [
        '3x minecraft:glass_bottle', 'neapolitan:banana_ice_cream', '250x #c:milk'
    ]).id('neapolitan:banana_milkshake')

    event.shapeless('neapolitan:vanilla_ice_cream', [
        'neapolitan:dried_vanilla_pods', '#c:ice_cubes', 'minecraft:sugar', '#c:foods/milk', 'minecraft:bowl'
    ]).id('neapolitan:vanilla_ice_cream_manual_only')
    event.recipes.create.mixing('neapolitan:vanilla_ice_cream', [
        'neapolitan:dried_vanilla_pods', Ingredient.of('#c:ice_cubes'), 'minecraft:sugar', 'minecraft:bowl', '250x #c:milk'
    ]).id('neapolitan:vanilla_ice_cream')

    event.shapeless('3x neapolitan:vanilla_milkshake', [
        'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'neapolitan:vanilla_ice_cream', '#c:foods/milk'
    ]).id('neapolitan:vanilla_milkshake_manual_only')
    event.recipes.create.mixing('3x neapolitan:vanilla_milkshake', [
        '3x minecraft:glass_bottle', 'neapolitan:vanilla_ice_cream', '250x #c:milk'
    ]).id('neapolitan:vanilla_milkshake')

    event.shapeless('neapolitan:chocolate_ice_cream', [
        '#c:foods/chocolate_bar', '#c:ice_cubes', 'minecraft:sugar', '#c:foods/milk', 'minecraft:bowl'
    ]).id('neapolitan:chocolate_ice_cream_manual_only')
    event.recipes.create.mixing('neapolitan:chocolate_ice_cream', [
        Ingredient.of('#c:foods/chocolate_bar'), Ingredient.of('#c:ice_cubes'), 'minecraft:sugar', 'minecraft:bowl', '250x #c:milk'
    ]).id('neapolitan:chocolate_ice_cream')

    event.shapeless('3x neapolitan:chocolate_milkshake', [
        'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'neapolitan:chocolate_ice_cream', '#c:foods/milk'
    ]).id('neapolitan:chocolate_milkshake_manual_only')
    event.recipes.create.mixing('3x neapolitan:chocolate_milkshake', [
        '3x minecraft:glass_bottle', 'neapolitan:chocolate_ice_cream', '250x #c:milk'
    ]).id('neapolitan:chocolate_milkshake')

    event.shapeless('neapolitan:mint_ice_cream', [
        'neapolitan:mint_leaves', '#c:ice_cubes', 'minecraft:sugar', '#c:foods/milk', 'minecraft:bowl'
    ]).id('neapolitan:mint_ice_cream_manual_only')
    event.recipes.create.mixing('neapolitan:mint_ice_cream', [
        'neapolitan:mint_leaves', Ingredient.of('#c:ice_cubes'), 'minecraft:sugar', 'minecraft:bowl', '250x #c:milk'
    ]).id('neapolitan:mint_ice_cream')

    event.shapeless('3x neapolitan:mint_milkshake', [
        'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'neapolitan:mint_ice_cream', '#c:foods/milk'
    ]).id('neapolitan:mint_milkshake_manual_only')
    event.recipes.create.mixing('3x neapolitan:mint_milkshake', [
        '3x minecraft:glass_bottle', 'neapolitan:mint_ice_cream', '250x #c:milk'
    ]).id('neapolitan:mint_milkshake')

    event.shapeless('neapolitan:neapolitan_ice_cream', [
        '#c:foods/chocolate_bar', 'neapolitan:dried_vanilla_pods', '#c:foods/strawberry', '#c:ice_cubes', 'minecraft:sugar', '#c:foods/milk', 'minecraft:bowl'
    ]).id('neapolitan:neapolitan_ice_cream_manual_only')
    event.recipes.create.mixing('neapolitan:neapolitan_ice_cream', [
        Ingredient.of('#c:foods/chocolate_bar'), 'neapolitan:dried_vanilla_pods', Ingredient.of('#c:foods/strawberry'), Ingredient.of('#c:ice_cubes'), 'minecraft:sugar', 'minecraft:bowl', '250x #c:milk'
    ]).id('neapolitan:neapolitan_ice_cream')

    event.shapeless('mynethersdelight:sizzling_pudding', [
        'mynethersdelight:ghasmati', '#c:foods/milk', '#c:eggs', ['minecraft:blaze_powder', 'mynethersdelight:pepper_powder'], 'minecraft:bowl'
    ]).id('mynethersdelight:crafting/sizzling_pudding_manual_only')
    event.remove({ id: 'mynethersdelight:crafting/sizzling_pudding' })
    //TODO: create mixing

    event.remove({ id: 'incubation:scrambled_eggs' })
    event.shapeless('incubation:scrambled_eggs', [
        '#c:eggs', '#c:eggs', '#c:foods/milk', 'minecraft:bowl'
    ]).id('incubation:scrambled_eggs_manual_only')

    event.recipes.create.mixing('neapolitan:adzuki_bun', [
        'neapolitan:roasted_adzuki_beans', Ingredient.of('#c:flours'), '250x #c:milk'
    ]).id('neapolitan:adzuki_bun')

    event.shapeless('atmospheric:orange_pudding', [
        '#c:foods/oranges', 'minecraft:sweet_berries', 'minecraft:cocoa_beans', '#c:eggs', '#c:foods/milk'
    ]).id('atmospheric:orange_pudding_manual_only')
    event.recipes.create.mixing('atmospheric:orange_pudding', [
        Ingredient.of('#c:foods/oranges'), 'minecraft:sweet_berries', 'minecraft:cocoa_beans', Ingredient.of('#c:eggs'), '250x #c:milk'
    ]).id('atmospheric:orange_pudding')

    event.shapeless('4x neapolitan:chocolate_bar', [
        'minecraft:cocoa_beans', 'minecraft:cocoa_beans', 'minecraft:sugar', '#c:foods/milk'
    ]).id('neapolitan:chocolate_bar_manual_only')
    event.recipes.create.mixing('4x neapolitan:chocolate_bar', [
        '2x minecraft:cocoa_beans', 'minecraft:sugar', '250x #c:milk'
    ]).id('neapolitan:chocolate_bar')

    event.shapeless('berry_good:glowgurt', [
        'minecraft:bowl', 'minecraft:glow_berries', 'minecraft:glow_berries', 'minecraft:sugar', '#c:foods/milk'
    ]).id('berry_good:glowgurt_manual_only')
    event.recipes.create.mixing('berry_good:glowgurt', [
        'minecraft:bowl', '2x minecraft:glow_berries', 'minecraft:sugar', '250x #c:milk'
    ]).id('berry_good:glowgurt')

    event.shapeless('mynethersdelight:dried_ghast_with_milk', [
        'mynethersdelight:ghasmati', '#c:foods/milk', 'minecraft:bowl'
    ]).id('mynethersdelight:crafting/dried_ghast_with_milk_manual_only')
    event.recipes.create.mixing('mynethersdelight:dried_ghast_with_milk', [
        'mynethersdelight:ghasmati', 'minecraft:bowl', '250x #c:milk'
    ]).id('mynethersdelight:crafting/dried_ghast_with_milk')

    event.shapeless('4x neapolitan:vanilla_fudge', [
        'neapolitan:dried_vanilla_pods', 'neapolitan:dried_vanilla_pods', 'minecraft:sugar', '#c:foods/milk',
    ]).id('neapolitan:vanilla_fudge_manual_only')
    event.recipes.create.mixing('4x neapolitan:vanilla_fudge', [
        '2x neapolitan:dried_vanilla_pods', 'minecraft:sugar', '250x #c:milk'
    ]).id('neapolitan:vanilla_fudge')

    event.shapeless('mynethersdelight:stuffed_pepper', [
        'mynethersdelight:bullet_pepper', '#c:foods/cooked_pork', '#c:foods/milk',
    ]).id('mynethersdelight:crafting/stuffed_pepper_manual_only')
    event.recipes.create.mixing('mynethersdelight:stuffed_pepper', [
        'mynethersdelight:bullet_pepper', Ingredient.of('#c:foods/cooked_pork'), '250x #c:milk'
    ]).id('mynethersdelight:crafting/stuffed_pepper')

    //honey
    event.recipes.create.mixing('8x farmersdelight:honey_cookie', [
        SizedIngredient.of('#c:flours', 2), '250x #c:honey'
    ]).id('farmersdelight:honey_cookie')

    event.shapeless('8x supplementaries:candy', [
        'sugar', 'minecraft:paper', 'honey_bottle'
    ]).id('supplementaries:candy_manual_only')
    event.recipes.create.mixing('8x supplementaries:candy', [
        'minecraft:sugar', 'minecraft:paper', '250x #c:honey'
    ]).id('supplementaries:candy')

    event.shapeless('2x dyenamics:honey_dye', [
        '#c:dyes/orange', '#c:dyes/yellow', 'honey_bottle'
    ]).id('dyenamics:honey_dye_manual_only')
    event.recipes.create.mixing('2x dyenamics:honey_dye', [
        Ingredient.of('#c:dyes/orange'), Ingredient.of('#c:dyes/yellow'), '250x #c:honey'
    ]).id('dyenamics:honey_dye')

    event.remove({ id: 'farmersdelight:honey_glazed_ham_block_from_kaleidoscope' })
    event.shapeless('farmersdelight:honey_glazed_ham_block', [
        'minecraft:sweet_berries', 'minecraft:honey_bottle', 'minecraft:sweet_berries', 'minecraft:sweet_berries', 'farmersdelight:smoked_ham', 'minecraft:sweet_berries', '#c:foods/cooked_rice', 'minecraft:bowl', 'farmersdelight:cooked_rice'
    ]).id('farmersdelight:honey_glazed_ham_block_manual_only')
    event.recipes.create.mixing('farmersdelight:honey_glazed_ham_block', [
        '4x minecraft:sweet_berries', SizedIngredient.of('#c:foods/cooked_rice', 2), 'farmersdelight:smoked_ham', 'minecraft:bowl', '250x #c:honey'
    ]).id('farmersdelight:honey_glazed_ham_block')

    event.shapeless('buzzier_bees:honey_bread', [
        'minecraft:bread', 'minecraft:honey_bottle'
    ]).id('buzzier_bees:honey_bread_manual_only')
    event.recipes.create.filling('buzzier_bees:honey_bread', [
        'minecraft:bread', '250x #c:honey'
    ]).id('buzzier_bees:honey_bread')

    event.shapeless('buzzier_bees:honey_lamp', [
        'minecraft:end_rod', 'minecraft:honey_bottle', 'minecraft:gold_nugget'
    ]).id('buzzier_bees:honey_lamp_manual_only')
    event.remove({ id: 'buzzier_bees:honey_lamp' })

    event.shapeless('alexscaves:alex_meal', [
        'alexscaves:gingerbread_crumbs', 'alexscaves:gingerbread_crumbs', 'minecraft:baked_potato', 'minecraft:carrot', 'minecraft:cooked_beef', 'minecraft:honey_bottle'
    ]).id('alexscaves:alex_meal_manual_only')
    event.recipes.create.mixing('alexscaves:alex_meal', [
        '2x alexscaves:gingerbread_crumbs', 'minecraft:baked_potato', 'minecraft:carrot', 'minecraft:cooked_beef', '250x #c:honey'
    ]).id('alexscaves:alex_meal')

    event.shapeless('buzzier_bees:glazed_porkchop', [
        'minecraft:cooked_porkchop', 'minecraft:honey_bottle'
    ]).id('buzzier_bees:glazed_porkchop_manual_only')
    event.recipes.create.filling('buzzier_bees:glazed_porkchop', [
        'minecraft:cooked_porkchop', '250x #c:honey'
    ]).id('buzzier_bees:glazed_porkchop')

    event.shapeless('bountifulfares:candy', [
        'minecraft:sugar', 'minecraft:honey_bottle'
    ]).id('bountifulfares:candy_manual_only')
    event.recipes.create.filling('bountifulfares:candy', [
        'minecraft:sugar', '250x #c:honey'
    ]).id('bountifulfares:candy')

    event.shapeless('farmersdelight:gleaming_salad_block', [
        'minecraft:glow_berries', 'minecraft:glow_berries', '#c:crops/beetroot', '#c:foods/golden_carrot', '#c:crops/tomato', 'farmersdelight:cabbage', 'farmersdelight:cabbage', 'minecraft:honey_bottle'
    ]).id('farmersdelight:gleaming_salad_block_manual_only')
    event.recipes.create.mixing('farmersdelight:gleaming_salad_block', [
        '2x minecraft:glow_berries', Ingredient.of('#c:crops/beetroot'), Ingredient.of('#c:foods/golden_carrot'), Ingredient.of('#c:crops/tomato'), '2x farmersdelight:cabbage', '250x #c:honey'
    ]).id('farmersdelight:gleaming_salad_block')

    event.shapeless('buzzier_bees:honey_apple', [
        'minecraft:apple', 'minecraft:honey_bottle'
    ]).id('buzzier_bees:honey_apple_manual_only')
    event.recipes.create.filling('buzzier_bees:honey_apple', [
        'minecraft:apple', '250x #c:honey'
    ]).id('buzzier_bees:honey_apple')

    event.shapeless('4x bountifulfares:candied_lemon', [
        '#c:foods/lemons', ['minecraft:sugar', 'minecraft:honey_bottle']
    ]).id('bountifulfares:candied_lemon_manual_only')
    event.recipes.create.mixing('4x bountifulfares:candied_lemon', [
        Ingredient.of('#c:foods/lemons'), 'minecraft:sugar'
    ]).id('bountifulfares:candied_lemon')
    event.recipes.create.mixing('4x bountifulfares:candied_lemon', [
        Ingredient.of('#c:foods/lemons'), '250x #c:honey'
    ]).id('kubejs:mixing/candied_lemon')

    event.shapeless('4x bountifulfares:candied_orange', [
        '#c:foods/oranges', ['minecraft:sugar', 'minecraft:honey_bottle']
    ]).id('bountifulfares:candied_orange_manual_only')
    event.recipes.create.mixing('4x bountifulfares:candied_orange', [
        Ingredient.of('#c:foods/oranges'), 'minecraft:sugar'
    ]).id('bountifulfares:candied_orange')
    event.recipes.create.mixing('4x bountifulfares:candied_orange', [
        Ingredient.of('#c:foods/oranges'), '250x #c:honey'
    ]).id('kubejs:mixing/candied_orange')

    event.shapeless('bountifulfares:candied_apple', [
        'minecraft:apple', ['minecraft:sugar', 'minecraft:honey_bottle']
    ]).id('bountifulfares:candied_apple_manual_only')
    event.recipes.create.mixing('bountifulfares:candied_apple', [
        'minecraft:apple', 'minecraft:sugar'
    ]).id('bountifulfares:candied_apple')
    event.recipes.create.mixing('bountifulfares:candied_apple', [
        'minecraft:apple', '250x #c:honey'
    ]).id('kubejs:mixing/candied_apple')

    event.shapeless('bountifulfares:candied_plum', [
        '#c:foods/plums', ['minecraft:sugar', 'minecraft:honey_bottle']
    ]).id('bountifulfares:candied_plum_manual_only')
    event.recipes.create.mixing('bountifulfares:candied_plum', [
        Ingredient.of('#c:foods/plums'), 'minecraft:sugar'
    ]).id('bountifulfares:candied_plum')
    event.recipes.create.mixing('bountifulfares:candied_plum', [
        Ingredient.of('#c:foods/plums'), '250x #c:honey'
    ]).id('kubejs:mixing/candied_plum')

    event.shapeless('mynethersdelight:breakfast_sampler', [
        'mynethersdelight:roasted_sausage', '#c:foods/cooked_egg', 'mynethersdelight:roasted_sausage', '#c:foods/cooked_egg', '#c:foods/bread',
        ['minecraft:honey_bottle', 'mynethersdelight:strider_egg'], 'minecraft:bowl'
    ]).id('mynethersdelight:breakfast_sampler_manual_only')
    event.recipes.create.mixing('mynethersdelight:breakfast_sampler', [
        '2x mynethersdelight:roasted_sausage', SizedIngredient.of('#c:foods/cooked_egg', 2), Ingredient.of('#c:foods/bread'),
        'mynethersdelight:strider_egg', 'minecraft:bowl'
    ]).id('mynethersdelight:breakfast_sampler')
    event.recipes.create.mixing('mynethersdelight:breakfast_sampler', [
        '2x mynethersdelight:roasted_sausage', SizedIngredient.of('#c:foods/cooked_egg', 2), Ingredient.of('#c:foods/bread'),
        '250x #c:honey', 'minecraft:bowl'
    ]).id('kubejs:mixing/breakfast_sampler')







    //lava


    //lumisene
    event.remove({ id: 'supplementaries:lumisene_bucket' })

    event.recipes.create.mixing(
        '250x supplementaries:lumisene',
        '2x minecraft:glow_berries'
    ).heated().id('supplementaries:integration/lumisene_mixing')

    event.recipes.create.emptying([
        '250x supplementaries:lumisene', 'minecraft:glass_bottle'],
        'supplementaries:lumisene_bottle'
    ).id('kubejs:emptying/lumisene_from_bottle')

    event.recipes.create.filling(
        'supplementaries:lumisene_bottle', [
        'minecraft:glass_bottle',
        '250x supplementaries:lumisene'
    ]).id('supplementaries:lumisene_bottle')

    //poison
    event.shapeless('8x aether:poison_dart', [
        'aether:golden_dart', 'aether:golden_dart', 'aether:golden_dart', 'aether:golden_dart', ['aether:skyroot_poison_bucket', 'deep_aether:poison_bucket'], 'aether:golden_dart', 'aether:golden_dart', 'aether:golden_dart', 'aether:golden_dart'
    ]).replaceIngredient('deep_aether:poison_bucket', 'bucket').id('aether:poison_dart_manual_only')
    event.recipes.create.filling(
        'aether:poison_dart', [
        'aether:golden_dart',
        '125x deep_aether:poison_fluid'
    ]).id('aether:poison_dart')

    //liquid_null
    event.shaped('4x biomesoplenty:unmapped_end_stone', [
        ' E ',
        'ENE',
        ' E '
    ], {
        E: 'minecraft:end_stone',
        N: 'biomesoplenty:liquid_null_bucket'
    }).id('biomesoplenty:unmapped_end_stone_manual_only')
    event.recipes.create.filling(
        'biomesoplenty:unmapped_end_stone', [
        'minecraft:end_stone', '250x biomesoplenty:liquid_null'
    ]).id('biomesoplenty:unmapped_end_stone')
})