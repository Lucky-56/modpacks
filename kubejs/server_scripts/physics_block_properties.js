ServerEvents.tags('block', event => {

    // -#sable:super_light -#sable:light -#sable:heavy -#sable:super_heavy
    const ladders = [
        '#chipped:ladder',

        'aether_beyond_parity:skyroot_ladder', 'burnt:burnt_ladder', 'copycats:copycat_ladder',
        'tfmg:aluminum_ladder',
        'tfmg:cast_iron_ladder', 'tfmg:constantan_ladder', 'tfmg:lead_ladder', 'tfmg:nickel_ladder', 'tfmg:steel_ladder',
    ]
    const handcraftedStoneTypes = [
        'andesite', 'blackstone', 'bricks', 'calcite', 'deepslate', 'diorite', 'dripstone', 'granite', 'quartz', 'stone', 'sandstone', 'red_sandstone'
    ]
    const dndecorMetalTypes = [
        'andesite', 'brass', 'copper', 'gold', 'industrial', 'iron', 'netherite', 'zinc'
    ]


    // abyssal is shit
    const abyssalWeightless = [
        'abyssal_decor:blackwood_button',
        'abyssal_decor:blackwood_pressure_plate', 'abyssal_decor:deepbronze_pressure_plate', 'abyssal_decor:deepbronze_button',
        'abyssal_decor:seabrass_button', 'abyssal_decor:white_wood_button', 'abyssal_decor:white_wood_pressure_plate',
    ]
    const abyssalLight = [
        'abyssal_decor:ancient_birch_log', 'abyssal_decor:foxy_pillar', 'abyssal_decor:stripped_ancient_birch_log', 'abyssal_decor:bare_timber', 'abyssal_decor:wooden_frame', 'abyssal_decor:gray_timber',
        'abyssal_decor:gray_wooden_frame', 'abyssal_decor:red_timber', 'abyssal_decor:red_wooden_frame', 'abyssal_decor:yellow_timber',
        'abyssal_decor:yellow_wooden_frame', 'abyssal_decor:green_timber', 'abyssal_decor:green_wooden_frame', 'abyssal_decor:blue_timber',
        'abyssal_decor:blue_wooden_frame', 'abyssal_decor:white_wood_log', 'abyssal_decor:white_wood_wood', 'abyssal_decor:white_wood_planks',
        'abyssal_decor:white_wood_planter', 'abyssal_decor:white_wood_trim', 'burnt:burnt_bamboo_mosaic_planks', 'abyssal_decor:candle_stand',
        'abyssal_decor:cinnamon_paneling', 'abyssal_decor:cinnamon_trim', 'abyssal_decor:cinnamon_planks', 'abyssal_decor:stripped_cinnamon_wood',
        'abyssal_decor:stripped_cinnamon_log', 'abyssal_decor:cinnamon_wood', 'abyssal_decor:cinnamon_log', 'abyssal_decor:blackwood_trim',
        'abyssal_decor:blackwood_log', 'abyssal_decor:blackwood_wood', 'abyssal_decor:stripped_blackwood_log', 'abyssal_decor:blackwood_planks',
        'abyssal_decor:blackwood_shingles', 'abyssal_decor:cut_cinnamon_log', 'abyssal_decor:cut_cinnamon_wood', 'abyssal_decor:healing_cinnamon_log',
        'abyssal_decor:healing_cinnamon_wood', 'abyssal_decor:pearl_stairs', 'abyssal_decor:smooth_pearl_stairs', 'abyssal_decor:pearl_brick_stairs',
        'abyssal_decor:polished_blood_coral_stairs', 'abyssal_decor:smooth_blood_coral_stairs', 'abyssal_decor:blood_coral_brick_stairs',
        'abyssal_decor:seabrass_stairs', 'abyssal_decor:deepbronze_stairs', 'abyssal_decor:riveted_deepbronze_stairs', 'abyssal_decor:polished_starstone_stairs',
        'abyssal_decor:black_pearl_stairs', 'abyssal_decor:smooth_black_pearl_stairs', 'abyssal_decor:black_pearl_brick_stairs',
        'abyssal_decor:iron_panel_stairs', 'abyssal_decor:dull_iron_panel_stairs', 'abyssal_decor:cinnamon_shingles', 'abyssal_decor:mossy_cinnamon_shingles',
        'abyssal_decor:mixed_brick_stairs', 'abyssal_decor:mixed_brick_stairs_2', 'abyssal_decor:mixed_brick_stairs_3', 'abyssal_decor:mixed_brick_stairs_4',
        'abyssal_decor:mossy_mixed_brick_stairs', 'abyssal_decor:mossy_mixed_brick_stairs_2', 'abyssal_decor:mossy_mixed_brick_stairs_3', 'abyssal_decor:mossy_mixed_brick_stairs_4',
        'abyssal_decor:filthcrete_stairs', 'abyssal_decor:filthcrete_stairs', 'abyssal_decor:polished_talcrock_stairs', 'abyssal_decor:cobbled_talcrock_stairs',
        'abyssal_decor:bellmetal_shingle_stairs', 'abyssal_decor:bellmetal_stairs', 'abyssal_decor:effervescent_tile_stairs', 'abyssal_decor:jade_brick_stairs',
        'abyssal_decor:moonsilver_stairs', 'abyssal_decor:effervescent_tile_slab', 'abyssal_decor:serpent_scale_slab', 'abyssal_decor:damaged_serpent_scale_slab',
        'abyssal_decor:pearl_slab', 'abyssal_decor:smooth_pearl_slab', 'abyssal_decor:pearl_brick_slab', 'abyssal_decor:polished_blood_coral_slab', 'abyssal_decor:smooth_blood_coral_slab',
        'abyssal_decor:blood_coral_brick_slab', 'abyssal_decor:serpent_flesh_slab', 'abyssal_decor:seabrass_slab', 'abyssal_decor:deepbronze_slab', 'abyssal_decor:riveted_deepbronze_slab',
        'abyssal_decor:polished_starstone_slab', 'abyssal_decor:rivited_seabrass_slab', 'abyssal_decor:black_pearl_slab', 'abyssal_decor:smooth_black_pearl_slab',
        'abyssal_decor:black_pearl_brick_slab', 'abyssal_decor:iron_panel_slab', 'abyssal_decor:polished_marble_stairs', 'abyssal_decor:brick_shingle_stairs',
        'abyssal_decor:brick_shingle_slab', 'abyssal_decor:dull_iron_panel_slab', 'abyssal_decor:mixed_brick_slab', 'abyssal_decor:mixed_brick_slab_2',
        'abyssal_decor:mixed_brick_slab_3', 'abyssal_decor:mixed_brick_slab_4', 'abyssal_decor:mossy_mixed_brick_slab', 'abyssal_decor:mossy_mixed_brick_slab_2',
        'abyssal_decor:mossy_mixed_brick_slab_3', 'abyssal_decor:mossy_mixed_brick_slab_4', 'abyssal_decor:filthcrete_slab', 'abyssal_decor:polished_marble_slab', 'abyssal_decor:moonsilver_slab',
        'abyssal_decor:polished_talcrock_slab', 'abyssal_decor:cobbled_talcrock_slab', 'abyssal_decor:bellmetal_shingle_slab', 'abyssal_decor:bellmetal_slab', 'abyssal_decor:jade_brick_slab',
    ]
    const abyssalUnmodified = [
        'abyssal_decor:cave_taco', 'abyssal_decor:muckroot_soup', 'abyssal_decor:clam_and_cheese_sandwich', 'abyssal_decor:bog_apple_pie',
        'abyssal_decor:popped_spidercorn', 'abyssal_decor:cooked_muckroot', 'abyssal_decor:bog_roll', 'abyssal_decor:candy_bog_apple',
        'abyssal_decor:spidercorn_tortilla', 'abyssal_decor:toasted_seeds', 'abyssal_decor:muckroot_item', 'abyssal_decor:bog_apple',
        'abyssal_decor:shucked_clam', 'abyssal_decor:hanging_web_item', 'abyssal_decor:dangling_web_item', 'abyssal_decor:iron_ball_item',
        'abyssal_decor:jade_lamp_item', 'abyssal_decor:quartz_lamp_item', 'abyssal_decor:iron_lamp_item', 'abyssal_decor:seabrass_ingot',
        'abyssal_decor:seabrass_nugget', 'abyssal_decor:deepbronze_nugget', 'abyssal_decor:deepbronze_ingot', 'abyssal_decor:hanging_moss_item',
        'abyssal_decor:amaranth_pinnacle', 'abyssal_decor:bellmetal_ingot', 'abyssal_decor:bellmetal_nugget', 'abyssal_decor:moonsilver_ingot',
        'abyssal_decor:moonsilver_nugget', 'abyssal_decor:laser_assisted_electrical_rifle', 'abyssal_decor:dusty_cd', 'abyssal_decor:processed_kelp_fibers',
        'abyssal_decor:rockwater_tear', 'abyssal_decor:strange_metal_rod', 'abyssal_decor:rockwater_tear', 'abyssal_decor:le_fishe_au_chocolat',
        'abyssal_decor:cinnamon_tea', 'abyssal_decor:fever_blossom_tea', 'abyssal_decor:cinnamon_apple', 'abyssal_decor:filthcrete_blend',
        'abyssal_decor:cave_taco_with_stones', 'abyssal_decor:raw_seabrass', 'abyssal_decor:fever_blossom', 'abyssal_decor:bottomless_bag_of_dirt',
        'abyssal_decor:bottomless_bag_of_cobblestone', 'abyssal_decor:bottomless_bag_of_snow', 'abyssal_decor:bottomless_bag_of_netherrack',
        'abyssal_decor:cinnamon_stick', 'abyssal_decor:cinnamon_roll',

        'abyssal_decor:block_of_prismarine_crystal', 'abyssal_decor:fresnel_block', 'abyssal_decor:fresnel_lamp', 'abyssal_decor:crystalized_glowstone',
        'abyssal_decor:framed_crystalized_glowstone', 'abyssal_decor:blaze_glass', 'abyssal_decor:vermillion_block', 'abyssal_decor:framed_vermillion_block',
        'abyssal_decor:pearly_glass_block', 'abyssal_decor:pearly_glass_block_azure', 'abyssal_decor:pearly_glass_block_verdant', 'abyssal_decor:serpent_scales',
        'abyssal_decor:pearly_glass_block_whitewood', 'abyssal_decor:pearly_glass_block_blackwood', 'abyssal_decor:pearly_glass_block_iron',
        'abyssal_decor:pearly_glass_block_sunny', 'abyssal_decor:amaranth_crate', 'abyssal_decor:netted_eye', 'abyssal_decor:serpent_scales',
        'abyssal_decor:block_of_pearl', 'abyssal_decor:chiseled_pearl', 'abyssal_decor:smooth_pearl_block', 'abyssal_decor:pearl_bricks',
        'abyssal_decor:white_wood_slab', 'abyssal_decor:blackwood_slab', 'abyssal_decor:cinnamon_slab', 'abyssal_decor:cinnamon_shingle_slab', 'abyssal_decor:mossy_cinnamon_shingle_slab',
        'abyssal_decor:blackwood_shingle_slab',
        'abyssal_decor:polished_blood_coral', 'abyssal_decor:smooth_blood_coral', 'abyssal_decor:rough_blood_coral', 'abyssal_decor:blood_coral_bricks',
        'abyssal_decor:rough_jade', 'abyssal_decor:polished_jade', 'abyssal_decor:jade_bricks', 'abyssal_decor:serpent_skin', 'abyssal_decor:damaged_serpent_skin',
        'abyssal_decor:serpent_flesh', 'abyssal_decor:serpent_eye', 'abyssal_decor:serpent_small_eyes', 'abyssal_decor:ribbed_veins', 'abyssal_decor:velvet',
        'abyssal_decor:gilded_velvet', 'abyssal_decor:seabrass_block', 'abyssal_decor:riveted_seabrass', 'abyssal_decor:seabrass_trim', 'abyssal_decor:seabrass_pillar',
        'abyssal_decor:large_seabrass_pipe', 'abyssal_decor:small_seabrass_pipes', 'abyssal_decor:seabrass_tiles', 'abyssal_decor:seabrass_lamp_off',
        'abyssal_decor:deepbronze_block', 'abyssal_decor:riveted_deepbronze', 'abyssal_decor:deepbronze_trim', 'abyssal_decor:deepbronze_pillar', 'abyssal_decor:large_deepbronze_pipe',
        'abyssal_decor:deepbronze_plating', 'abyssal_decor:deepbronze_beam', 'abyssal_decor:white_pearl_tiles', 'abyssal_decor:mixed_pearl_tiles', 'abyssal_decor:starry_pearl_tiles',
        'abyssal_decor:starstone', 'abyssal_decor:polished_starstone', 'abyssal_decor:smooth_starstone', 'abyssal_decor:gilded_starstone', 'abyssal_decor:starstone_pillar',
        'abyssal_decor:starstone_tiles', 'abyssal_decor:cracked_pearly_tiles', 'abyssal_decor:cracked_pearly_tiles_2', 'abyssal_decor:cracked_pearly_tiles_3',
        'abyssal_decor:cracked_pearly_tiles_5', 'abyssal_decor:cracked_pearly_tiles_6', 'abyssal_decor:black_mold', 'abyssal_decor:inactive_mold', 'abyssal_decor:moldy_starstone',
        'abyssal_decor:moldier_starstone', 'abyssal_decor:porous_mold', 'abyssal_decor:white_pearl_pillar', 'abyssal_decor:cut_pearl_block', 'abyssal_decor:abyssal_lantern_off',
        'abyssal_decor:abyssal_lantern_on', 'abyssal_decor:chiseled_starstone', 'abyssal_decor:block_of_black_pearl', 'abyssal_decor:chiseled_black_pearl',
        'abyssal_decor:black_pearl_bricks', 'abyssal_decor:black_pearl_pillar', 'abyssal_decor:cut_black_pearl_block', 'abyssal_decor:seabrass_ore', 'abyssal_decor:blood_coral_pillar',
        'abyssal_decor:gilded_blood_coral_pillar', 'abyssal_decor:jade_pillar', 'abyssal_decor:jade_lantern_off', 'abyssal_decor:jade_lantern_on', 'abyssal_decor:gilded_black_pearl',
        'abyssal_decor:blood_lantern_on', 'abyssal_decor:blood_lantern', 'abyssal_decor:blood_lamp_lit_top', 'abyssal_decor:blood_lamp_lit_mid', 'abyssal_decor:blood_lamp_lit_bottom',
        'abyssal_decor:blood_lamp_off_top', 'abyssal_decor:blood_lamp_off_mid', 'abyssal_decor:blood_lamp_off_bottom', 'abyssal_decor:blackwood_shingle_stairs',
        'abyssal_decor:corrugated_iron', 'abyssal_decor:brick_cap', 'abyssal_decor:brick_cap_flipped', 'abyssal_decor:brick_cornerstone', 'abyssal_decor:lapis_pillar',
        'abyssal_decor:chiseled_brick', 'abyssal_decor:blackened_sand', 'abyssal_decor:brittle_tuff', 'abyssal_decor:iron_duct', 'abyssal_decor:echo_shard_block',
        'abyssal_decor:iron_panel', 'abyssal_decor:brick_pillar', 'abyssal_decor:brick_mosaic', 'abyssal_decor:pitchglass', 'abyssal_decor:framed_pitchglass_top',
        'abyssal_decor:cracked_bricks_6', 'abyssal_decor:effervescent_tiles', 'abyssal_decor:effervescent_pillar', 'abyssal_decor:polished_effervescence', 'abyssal_decor:cracked_bricks',
        'abyssal_decor:cracked_bricks_2', 'abyssal_decor:cracked_bricks_3', 'abyssal_decor:cracked_bricks_4', 'abyssal_decor:cracked_bricks_5', 'abyssal_decor:gilded_jade_pillar',
        'abyssal_decor:effervescence', 'abyssal_decor:mixed_bricks', 'abyssal_decor:mixed_bricks_2', 'abyssal_decor:mixed_bricks_3', 'abyssal_decor:mixed_bricks_4',
        'abyssal_decor:mossy_mixed_bricks_2', 'abyssal_decor:mossy_mixed_bricks_3', 'abyssal_decor:mossy_mixed_bricks_4', 'abyssal_decor:iron_pillar', 'abyssal_decor:starglass_block',
        'abyssal_decor:mold_weave', 'abyssal_decor:moldy_frond_block', 'abyssal_decor:laventine', 'abyssal_decor:laventine_glass', 'abyssal_decor:laventine_glass_bottom',
        'abyssal_decor:frosted_glass', 'abyssal_decor:frosted_glass_mid', 'abyssal_decor:frosted_glass_bottom', 'abyssal_decor:trashbag', 'abyssal_decor:iron_lantern_on',
        'abyssal_decor:small_deepbronze_pipes', 'abyssal_decor:seabrass_plating', 'abyssal_decor:deepbronze_tiles', 'abyssal_decor:deepbronze_lamp_off', 'abyssal_decor:deepbronze_lamp_on',
        'abyssal_decor:blaze_glass_top', 'abyssal_decor:blaze_glass_mid', 'abyssal_decor:blaze_glass_bottom', 'abyssal_decor:brick_shingles', 'abyssal_decor:raw_marble',
        'abyssal_decor:gilded_laventine_pillar', 'abyssal_decor:marble_flooring', 'abyssal_decor:rockwater_block', 'abyssal_decor:polished_rockwater', 'abyssal_decor:rockwater_glass',
        'abyssal_decor:rockwater_glass_top', 'abyssal_decor:rockwater_glass_mid', 'abyssal_decor:rockwater_glass_bottom', 'abyssal_decor:rotting_filth', 'abyssal_decor:rotting_filth_2',
        'abyssal_decor:rotting_filth_3', 'abyssal_decor:rotting_filth_4', 'abyssal_decor:rotting_filth_5', 'abyssal_decor:marble_pillar', 'abyssal_decor:marble_pillar_top',
        'abyssal_decor:marble_pillar_bottom', 'abyssal_decor:dull_iron_panel', 'abyssal_decor:burlap', 'abyssal_decor:filthcrete', 'abyssal_decor:filthcrete_2',
        'abyssal_decor:reinforced_filthcrete_2', 'abyssal_decor:cobbled_talcrock', 'abyssal_decor:cobbled_talcrock_bottom', 'abyssal_decor:polished_talcrock', 'abyssal_decor:talcrock_pillar',
        'abyssal_decor:bellmetal_block', 'abyssal_decor:bellmetal_pillar', 'abyssal_decor:bellmetal_pillar_top', 'abyssal_decor:bellmetal_pillar_mid', 'abyssal_decor:bellmetal_pillar_bottom',
        'abyssal_decor:seabrass_lamp_on', 'abyssal_decor:cracked_pearly_tiles_4', 'abyssal_decor:smooth_black_pearl_block', 'abyssal_decor:gilded_lapis_pillar', 'abyssal_decor:bellmetal_trim',
        'abyssal_decor:polished_echo_shard_block', 'abyssal_decor:framed_pitchglass_bottom', 'abyssal_decor:mossy_mixed_bricks', 'abyssal_decor:iron_lantern_off',
        'abyssal_decor:frosted_glass_solo', 'abyssal_decor:polished_marble', 'abyssal_decor:marble_pillar_mid', 'abyssal_decor:reinforced_filthcrete', 'abyssal_decor:chiselled_bellmetal',
        'abyssal_decor:polished_sodalite', 'abyssal_decor:polished_clouded_sodalite', 'abyssal_decor:abyssal_lantern_lit_top', 'abyssal_decor:abyssal_lantern_lit_mid',
        'abyssal_decor:abyssal_lantern_lit_bottom', 'abyssal_decor:abyssal_lantern_off_top', 'abyssal_decor:abyssal_lantern_off_mid', 'abyssal_decor:abyssal_lantern_off_bottom',
        'abyssal_decor:bellmetal_shingles', 'abyssal_decor:red_cracked_stucco', 'abyssal_decor:white_cracked_stucco', 'abyssal_decor:fanned_talcrock', 'abyssal_decor:bellmetal_plating',
        'abyssal_decor:bellmetal_lantern_lit_solo', 'abyssal_decor:bellmetal_lantern', 'abyssal_decor:bellmetal_lantern_lit_top', 'abyssal_decor:bellmetal_lantern_lit_mid',
        'abyssal_decor:bellmetal_lantern_lit_bottom', 'abyssal_decor:bellmetal_lantern_top', 'abyssal_decor:bellmetal_lantern_mid', 'abyssal_decor:bellmetal_lantern_bottom',
        'abyssal_decor:moonsilver_block', 'abyssal_decor:carved_moonsilver', 'abyssal_decor:moonsilver_pillar', 'abyssal_decor:coil_lantern', 'abyssal_decor:coil_lantern_top',
        'abyssal_decor:coil_lantern_mid', 'abyssal_decor:coil_lantern_bottom', 'abyssal_decor:serpent_artery', 'abyssal_decor:red_stucco', 'abyssal_decor:white_stucco',
        'abyssal_decor:yellow_stucco', 'abyssal_decor:cracked_yellow_stucco', 'abyssal_decor:filthcrete_pillar', 'abyssal_decor:giant_clam_pearl_closed', 'abyssal_decor:deepbronze_wall',
        'abyssal_decor:giant_clam_pearl_open', 'abyssal_decor:giant_clam_empty_closed', 'abyssal_decor:giant_clam_empty_open', 'abyssal_decor:pearl_wall', 'abyssal_decor:dull_iron_panel_wall',
        'abyssal_decor:smooth_pearl_wall', 'abyssal_decor:pearl_brick_wall', 'abyssal_decor:polished_blood_coral_wall', 'abyssal_decor:smooth_blood_coral_wall',
        'abyssal_decor:blood_coral_brick_wall', 'abyssal_decor:seabrass_wall', 'abyssal_decor:riveted_deepbronze_wall', 'abyssal_decor:polished_starstone_wall',
        'abyssal_decor:black_pearl_wall', 'abyssal_decor:smooth_black_pearl_wall', 'abyssal_decor:black_pearl_brick_wall', 'abyssal_decor:iron_panel_wall', 'abyssal_decor:filthcrete_wall',
        'abyssal_decor:polished_marble_wall', 'abyssal_decor:talcrock_wall', 'abyssal_decor:cobbled_talcrock_wall', 'abyssal_decor:bellmetal_wall', 'abyssal_decor:effervescent_tile_wall',
        'abyssal_decor:jade_brick_wall', 'abyssal_decor:moonsilver_wall', 'abyssal_decor:quartz_bone', 'abyssal_decor:quartz_bone', 'abyssal_decor:damaged_serpent_scales',
        'abyssal_decor:grime_glass', 'abyssal_decor:dull_iron_beam',
    ]
    const abyssalHeavy = [
        'abyssal_decor:lion_statue_bottom', 'abyssal_decor:lion_statue_top', 'abyssal_decor:gargoyle_base', 'abyssal_decor:gargoyle_top',
        'abyssal_decor:door_knocker', 'abyssal_decor:ammonite',
    ]
    const abyssalSuperHeavy = [
        'abyssal_decor:raw_seabrass_block',
    ]

    //sable:
    const fragileBlocks = [
        /burnt:.*charred.*/, /burnt:.*burnt.*/, /burnt:.*blazing.*/, /burnt:.*smoldering.*/, /burnt:.*cracked.*/, /burnt:.*ember.*/, /burnt:.*cooked.*/,

        'autumnity:large_pumpkin_slice', 'biomesoplenty:huge_lily_pad', 'ribbits:giant_lilypad',
        'burnt:fragile_magma', 'burnt:cracket_magenta_terracotta',
        'deep_aether:blue_squash', 'deep_aether:green_squash', 'deep_aether:purple_squash'
    ]

    const mudBlocks = [
        '#chipped:mud', 'deep_aether:aether_mud',
    ]

    const stickyBlocks = [
        '#chipped:soul_sand', 'atmospheric:barrel_cactus', 'quark:cactus_block', 'yungscavebiomes:prickly_peach_cactus',
        'creeperoverhaul:tiny_cactus', 'regions_unexplored:saguaro_cactus', 'burnt:smoldering_cactus', 'burnt:burnt_cactus',
        'autumnity:snail_goo_block',
    ]

    const endStoneSlabs = [
        'enderscape:end_stone_slab', 'enderscape:polished_end_stone_slab', 'minecraft:end_stone_brick_slab',
        'enderscape:veradite_slab', 'enderscape:polished_veradite_slab', 'enderscape:veradite_brick_slab',
        'enderscape:mirestone_slab', 'enderscape:polished_mirestone_slab', 'enderscape:mirestone_brick_slab',
        'enderscape:kurodite_slab', 'enderscape:polished_kurodite_slab', 'enderscape:kurodite_brick_slab',
    ]
    const endStones = [
        '#chipped:end_stone', '#enderscape:end_ore_blocks', '#enderscape:kurodite_blocks', '#enderscape:mirestone_blocks',
        '#enderscape:new_end_stone_blocks', '#enderscape:veradite_blocks',

        'biomesoplenty:algal_end_stone', 'biomesoplenty:null_end_stone', 'biomesoplenty:unmapped_end_stone',
        'ends_delight:end_stove', 'kaleidoscope_end:end_stove', 'enderscape:drift_jelly_block',
    ]

    const weightlessBlocks = [
        '#burnt:flags', '#kaleidoscope_tavern:painting',

        'alexscaves:metal_scaffolding', 'alexscaves:rusty_scaffolding',
        'biomesoplenty:anomaly', 'biomesoplenty:null_block', 'burnt:burnt_bamboo_button', 'burnt:burnt_bamboo_pressure_plate',
        'burnt:burnt_button', 'burnt:burnt_pressure_plate', 'create:rope_pulley', 'create:rope', 'darkerdepths:petrified_button',
        'darkerdepths:petrified_pressure_plate', 'supplementaries:rope',
    ]
    const extraLightBlocks = [
        '#aether:aerclouds',

        'deep_aether:aercloud_grass_block', 'aether:aerogel_stairs', 'aether:aerogel_slab'
    ]
    const superLightBlocks = [
        '#bountifulfares:pickets', '#c:chains', '#c:ladders', '#chipped:glass_pane', '#chipped:iron_bars', '#chipped:lantern',
        '#chipped:lily_pad', '#chipped:soul_lantern', '#dramaticdoors:short_doors', '#dramaticdoors:tall_doors', '#handcrafted:crockery',
        '#handcrafted:cushions', '#handcrafted:pots', '#handcrafted:trophies', '#incubation:bird_nests', '#kaleidoscope_cookery:cook_stool',
        '#kubejs:copper_bars', '#kubejs:trellis', '#kubejs:wooden_trims', '#minecraft:bars', '#minecraft:lanterns', '#enderscape:magnia_sprouts',
        '#minecraft:wooden_shelves', '#minecraft:lightning_rods', '#minecraft:flower_pots', '#kubejs:copper_floodlights',
        '#kubejs:copper_toobloxes', '#kubejs:lightning_rods', '#kubejs:copper_lanterns', '#quark:hollow_logs',

        'aether_beyond_parity:ambrosium_lantern', 'aether_beyond_parity:zanite_bars', 'aethersdelight:arkenium_lantern', 'alexscaves:baleen_bone',
        'alexscaves:bone_nodule', 'alexscaves:bone_ribs', 'alexscaves:fern_thatch', 'alexscaves:hologram_projector', 'alexscaves:magnetic_light',
        'alexscaves:metal_rebar', 'alexscaves:rusty_rebar', 'alexscaves:thin_bone', 'amendments:wall_lantern', 'atmospheric:currant_stalk',
        'autumnity:pancake', 'bellsandwhistles:andesite_bogie_steps', 'bellsandwhistles:andesite_door_step', 'bellsandwhistles:andesite_grab_rails',
        'bellsandwhistles:brass_bogie_steps', 'bellsandwhistles:brass_door_step', 'bellsandwhistles:brass_grab_rails', 'bellsandwhistles:copper_bogie_steps',
        'bellsandwhistles:copper_door_step', 'bellsandwhistles:copper_grab_rails', 'bellsandwhistles:corrugated_metro_panel', 'bellsandwhistles:headlight',
        'bellsandwhistles:metro_panel', 'bellsandwhistles:metro_trapdoor', 'bellsandwhistles:metro_window', 'bellsandwhistles:ornate_iron_trapdoor',
        'betterarcheology:chicken_fossil_body', 'betterarcheology:chicken_fossil_head', 'betterarcheology:chicken_fossil', 'betterarcheology:creeper_fossil_body',
        'betterarcheology:creeper_fossil_head', 'betterarcheology:creeper_fossil', 'betterarcheology:guardian_fossil_body', 'betterarcheology:guardian_fossil_head',
        'betterarcheology:guardian_fossil', 'betterarcheology:ocelot_fossil_body', 'betterarcheology:ocelot_fossil_head', 'betterarcheology:ocelot_fossil',
        'betterarcheology:sheep_fossil_body', 'betterarcheology:sheep_fossil_head', 'betterarcheology:sheep_fossil', 'betterarcheology:vase_creeper',
        'betterarcheology:vase_green', 'betterarcheology:vase', 'betterarcheology:villager_fossil_body', 'betterarcheology:villager_fossil_head',
        'betterarcheology:villager_fossil', 'betterarcheology:wolf_fossil_body', 'betterarcheology:wolf_fossil_head', 'betterarcheology:wolf_fossil',
        'biomesoplenty:huge_lily_pad', 'bountifulfares:feldspar_lantern', 'bountifulfares:trellis', 'brewinandchewin:coaster', 'burnt:burnt_bamboo_stalk',
        'burnt:burnt_wool', 'buzzier_bees:honey_lamp', 'cookingforblockheads:cow_jar', 'cookingforblockheads:cutting_board', 'cookingforblockheads:fruit_basket',
        'cookingforblockheads:milk_jar', 'cookingforblockheads:spice_rack', 'cookingforblockheads:toaster', 'copycats:copycat_beam', 'copycats:copycat_board',
        'copycats:copycat_byte_panel', 'copycats:copycat_door', 'copycats:copycat_flat_pane', 'copycats:copycat_half_panel', 'copycats:copycat_iron_door',
        'copycats:copycat_pane', 'copycats:copycat_vertical_step', 'copycats:copycat_wooden_button', 'copycats:copycat_wooden_button',
        'create_connected:sequenced_pulse_generator', 'create_connected:shear_pin', 'create_hypertube:hypertube', 'createdieselgenerators:sheet_metal_panel',
        'darkerdepths:glowshroom_lantern', 'darkerdepths:petrified_post', 'darkerdepths:stripped_petrified_post', 'deep_aether:skyjade_lantern',
        'dramaticdoors:short_locked_industrial_iron_door', 'dramaticdoors:short_plum_door', 'dramaticdoors:short_rue_baobab_door',
        'dramaticdoors:short_rue_blue_bioshroom_door', 'dramaticdoors:short_rue_green_bioshroom_door', 'dramaticdoors:short_rue_pink_bioshroom_door',
        'dramaticdoors:short_rue_yellow_bioshroom_door', 'dramaticdoors:tall_plum_door', 'dramaticdoors:tall_rue_baobab_door',
        'dramaticdoors:tall_rue_blue_bioshroom_door', 'dramaticdoors:tall_rue_green_bioshroom_door', 'dramaticdoors:tall_rue_pink_bioshroom_door',
        'dramaticdoors:tall_rue_yellow_bioshroom_door', 'enderscape:bulb_lantern', 'environmental:grass_thatch', 'caverns_and_chasms:golden_bars',
        'environmental:yak_hair_block', 'environmental:yak_hair_rug', 'escalated:metal_walkway_terminal', 'caverns_and_chasms:storage_duct_hatch',
        'escalated:wooden_walkway_terminal', 'extra_gauges:linked_button', 'extra_gauges:linked_lever', 'caverns_and_chasms:hoop',
        'gnkinetics:hollow_cogwheel', 'gnkinetics:hollow_large_cogwheel', 'gnkinetics:shaftless_cogwheel', 'caverns_and_chasms:winch',
        'gnkinetics:shaftless_large_cogwheel', 'gnkinetics:shaftless_tiny_cogwheel', 'handcrafted:berry_jam_jar', 'handcrafted:stackable_book',
        'interiors:wall_mounted_table', 'kaleidoscope_cookery:chopping_board', 'kaleidoscope_cookery:enamel_basin', 'kaleidoscope_cookery:fruit_basket',
        'kaleidoscope_cookery:kitchenware_racks', 'kaleidoscope_cookery:oil_pot', 'kaleidoscope_cookery:oil_pot', 'kaleidoscope_cookery:pot',
        'kaleidoscope_cookery:steamer', 'kaleidoscope_cookery:stockpot', 'kaleidoscope_cookery:teapot', 'kaleidoscope_cookery:trash_can',
        'kaleidoscope_tavern:pressing_tub', 'kaleidoscope_tavern:stepladder', 'kaleidoscope_tavern:tap', 'kaleidoscope_tavern:trellis',
        'neapolitan:frond_thatch', 'netherdepthsupgrade:warped_kelp_carpet_block', 'nirvana:hemp_burlap', 'nirvana:woven_burlap',
        'oreganized:lead_bars', 'petrolsparts:coaxial_gear', 'petrolsparts:large_coaxial_gear', 'powergrid:alarm_bell', 'powergrid:electric_fan',
        'quark:bamboo_mat_carpet', 'quark:iron_pillar', 'quark:iron_plate', 'quark:redstone_randomizer', 'quark:rusty_iron_plate',
        'railways:smokestack_coalburner', 'railways:smokestack_diesel', 'railways:smokestack_long', 'railways:smokestack_oilburner',
        'railways:smokestack_streamlined', 'railways:smokestack_woodburner', 'refurbished_furniture:andesite_stepping_stones',
        'refurbished_furniture:azalea_hedge', 'refurbished_furniture:dark_ceiling_light', 'refurbished_furniture:dark_lightswitch',
        'refurbished_furniture:dark_microwave', 'refurbished_furniture:dark_range_hood', 'refurbished_furniture:dark_toaster',
        'refurbished_furniture:deepslate_stepping_stones', 'refurbished_furniture:diorite_stepping_stones', 'refurbished_furniture:door_mat',
        'refurbished_furniture:doorbell', 'refurbished_furniture:frying_pan', 'refurbished_furniture:granite_stepping_stones',
        'refurbished_furniture:light_ceiling_light', 'refurbished_furniture:light_lightswitch', 'refurbished_furniture:light_microwave',
        'refurbished_furniture:light_range_hood', 'refurbished_furniture:light_toaster', 'refurbished_furniture:plate',
        'refurbished_furniture:recycle_bin', 'refurbished_furniture:stone_stepping_stones', 'ribbits:giant_lilypad', 'ribbits:swamp_lantern',
        'starcatcher:tackle_box', 'starcatcher:tournament_stand', 'caverns_and_chasms:winch', 'caverns_and_chasms:silver_bars',
        'suppsquared:brass_lantern', 'suppsquared:copper_lantern', 'suppsquared:crimson_lantern', 'tfmg:aluminum_bars', 'tfmg:aluminum_lamp',
        'tfmg:aluminum_truss', 'tfmg:brass_truss', 'tfmg:cable_connector', 'tfmg:cable_tube', 'tfmg:cast_iron_bars', 'tfmg:cast_iron_truss',
        'tfmg:circular_light', 'tfmg:constantan_truss', 'tfmg:copper_truss', 'tfmg:diagonal_cable_block', 'tfmg:electric_post',
        'tfmg:glass_cable_insulator', 'tfmg:lead_bars', 'tfmg:lead_truss', 'tfmg:light_bulb', 'tfmg:modern_light', 'tfmg:neon_tube',
        'tfmg:nickel_bars', 'tfmg:nickel_truss', 'tfmg:rebar_block', 'tfmg:rebar_floor', 'tfmg:rebar_pillar', 'tfmg:rebar_stairs',
        'tfmg:rebar_wall', 'tfmg:resistor', 'tfmg:steel_bars', 'tfmg:steel_truss', 'tfmg:zinc_truss', 'thick_air:safety_lantern',
        'upgrade_aquatic:bedroll', 'upgrade_aquatic:tooth_lantern', 'waterframes:frame', 'waterframes:projector', 'createdieselgenerators:basin_lid',
        'bountifulfares:ceramic_dish', 'creeperoverhaul:tiny_cactus', 'yungscavebiomes:prickly_peach_cactus', 'minecraft:dried_ghast',
        'snuffles:frosty_fluff', 'snuffles:snuffle_fluff', 'burnt:fallen_burnt_slab', 'minecraft:book', 'minopp:mino_table',
        'exposuredetective:board', 'selling_bin:selling_bin', 'mowziesmobs:thatch_block', 'upgrade_aquatic:elder_eye',
        'bountifulfares:artisan_cookie', 'bountifulfares:lapisberry_tart', 'bountifulfares:sweet_berry_tart', 'bountifulfares:glow_berry_tart',
        'bountifulfares:elderberry_tart', 'bountifulfares:passion_fruit_tart', 'bountifulfares:hoary_pie', 'bountifulfares:plum_pie',
        'bountifulfares:lemon_pie', 'bountifulfares:orange_pie', 'bountifulfares:apple_pie', 'bountifulfares:melon_pie', 'minecraft:pumpkin_pie',
        'farmersdelight:rice_roll_medley_block', 'brewinandchewin:pizza', 'farmersdelight:apple_pie', 'farmersdelight:shepherds_pie_block',
        'farmersdelight:honey_glazed_ham_block', 'farmersdelight:stuffed_pumpkin_block', 'farmersdelight:roast_chicken_block',
        'farmersdelight:chocolate_pie', 'farmersdelight:sweet_berry_cheesecake', 'enderscape:chorus_cake_roll', 'autumnity:cooked_turkey',
        'autumnity:turkey', 'atmospheric:yucca_gateau', 'brewinandchewin:scarlet_cheese_wheel', 'brewinandchewin:flaxen_cheese_wheel',
        'aethersdelight:aechor_ice_cream_bucket_block', 'aethersdelight:roast_moa_block', 'aethersdelight:white_apple_pie', 'brewinandchewin:quiche',
        'alexsmobs:bison_carpet', 'alexsmobs:bison_fur_block', 'burnt:smoldering_azalea', 'caverns_and_chasms:cupric_lantern',
        'burnt:smoldering_moss_carpet', 'burnt:smoldering_bamboo_stalk', 'burnt:smoldering_bamboo_stalk', 'burnt:smoldering_bamboo_fencegate',
        'burnt:burnt_bamboo_stalk', 'burnt:smoldering_wool', 'caverns_and_chasms:tin_bars', 'caverns_and_chasms:dimmer',
        'kaleidoscope_end:end_salad', 'kaleidoscope_end:dark_dragon_steak', 'kaleidoscope_end:optic_nerve_sweet_and_sour_pork',
        'kaleidoscope_end:void_mutton_steak', 'kaleidoscope_end:end_caterpillar_sashimi', 'kaleidoscope_end:void_tea', 'kaleidoscope_end:ender_dragon_tea',
        'kaleidoscope_end:chorus_flower_tea', 'kaleidoscope_end:ender_mint_tea', 'kaleidoscope_nether:soul_lamb_chop', 'kaleidoscope_nether:braised_pork_rice',
        'kaleidoscope_nether:braised_lion_head', 'kaleidoscope_nether:corn_carrot_pork_rib_soup', 'kaleidoscope_cookery:cold_cut_ham_slices',
        'kaleidoscope_cookery:dark_cuisine', 'kaleidoscope_cookery:suspicious_stir_fry', 'kaleidoscope_cookery:slime_ball_meal',
        'kaleidoscope_cookery:fondant_pie', 'kaleidoscope_cookery:dongpo_pork', 'kaleidoscope_cookery:fondant_spider_eye',
        'kaleidoscope_cookery:chorus_fried_egg', 'kaleidoscope_cookery:golden_salad',
        'kaleidoscope_cookery:spicy_chicken', 'kaleidoscope_cookery:pan_seared_knight_steak',
        'kaleidoscope_cookery:stargazy_pie', 'kaleidoscope_cookery:sweet_and_sour_ender_pearls', 'kaleidoscope_cookery:crystal_lamb_chop',
        'kaleidoscope_cookery:blaze_lamb_chop', 'kaleidoscope_cookery:frost_lamb_chop', 'kaleidoscope_cookery:nether_style_sashimi',
        'kaleidoscope_cookery:end_style_sashimi', 'kaleidoscope_cookery:desert_style_sashimi', 'kaleidoscope_cookery:tundra_style_sashimi',
        'kaleidoscope_cookery:cold_style_sashimi', 'kaleidoscope_cookery:candied_potato',
        'kaleidoscope_cookery:dough_drop_soup', 'kaleidoscope_cookery:stuffed_tiger_skin_pepper', 'kaleidoscope_cookery:spicy_rabbit_head',
        'kaleidoscope_cookery:four_joy_meatball_soup', 'kaleidoscope_cookery:numbing_spicy_chicken', 'kaleidoscope_cookery:fried_caterpillar',
        'kaleidoscope_cookery:fried_spring_roll', 'kaleidoscope_cookery:spicy_blood_stew',
        'kaleidoscope_cookery:shengjian_mantou_plate', 'kaleidoscope_cookery:baozi_plate', 'kaleidoscope_cookery:qingtuan_plate',
        'kaleidoscope_cookery:sticky_candy_plate', 'kaleidoscope_cookery:sticky_rice_cake_plate', 'kaleidoscope_cookery:zongzi_plate',
        'kaleidoscope_cookery:berry_platter', 'kaleidoscope_cookery:apple_platter', 'kaleidoscope_cookery:tomato_platter',
        'kaleidoscope_cookery:watermelon_platter', 'kaleidoscope_cookery:chorus_fruit_platter',
        'kaleidoscope_cookery:braised_pork_ribs', 'kaleidoscope_cookery:cold_roasted_meat', 'kaleidoscope_cookery:brown_mushroom_pot_soup',
        'kaleidoscope_cookery:red_mushroom_pot_soup', 'kaleidoscope_cookery:oil_splashed_fish', 'kaleidoscope_cookery:warped_fungus_pot_soup',
        'kaleidoscope_cookery:crimson_fungus_pot_soup', 'kaleidoscope_cookery:buddha_jumps_over_the_wall', 'kaleidoscope_cookery:barley_tea',
        'kaleidoscope_cookery:tieguanyin', 'kaleidoscope_cookery:biluochun', 'kaleidoscope_cookery:oolong', 'kaleidoscope_cookery:sakura_fubuki',
        'kaleidoscope_cookery:flower_tea', 'kaleidoscope_tavern:empty_bottle', 'kaleidoscope_tavern:molotov', 'kaleidoscope_tavern:wine',
        'kaleidoscope_tavern:champagne', 'kaleidoscope_tavern:vodka', 'kaleidoscope_tavern:brandy', 'kaleidoscope_tavern:carignan',
        'kaleidoscope_tavern:sakura_wine', 'kaleidoscope_tavern:plum_wine', 'kaleidoscope_tavern:whiskey', 'kaleidoscope_tavern:ice_wine',
        'kaleidoscope_tavern:polaris_sweet_white', 'kaleidoscope_tavern:honey_wine', 'kaleidoscope_tavern:red_queen', 'caverns_and_chasms:lava_lamp',
        'kaleidoscope_tavern:miners_star', 'kaleidoscope_tavern:rum', 'kaleidoscope_tavern:riesling_dry_white', 'kaleidoscope_tavern:sunset_glow',
        'kaleidoscope_tavern:madame_shexiang', 'kaleidoscope_tavern:sweet_berry_wine', 'kaleidoscope_tavern:sherry', 'kaleidoscope_tavern:mother_snow',
        'kaleidoscope_tavern:luminous_bride', 'kaleidoscope_tavern:glowflower_brew', 'kaleidoscope_tavern:sauvignon_blanc_dry_white',
        'kaleidoscope_tavern:vinegar', 'kaleidoscope_tavern:watermelon_juice', 'ends_delight:chorus_fruit_pie', 'ends_delight:grilled_shulker_block',
        'mynethersdelight:cold_striderloaf_block', 'mynethersdelight:ghasta_with_cream_block', 'mynethersdelight:bread_loaf_block',
        'mynethersdelight:bread_loaf_block', 'mynethersdelight:stuffed_hoglin', 'ends_delight:dragon_leg_with_sauce_block', 'caverns_and_chasms:resistor',
        'mynethersdelight:striderloaf_block', 'caverns_and_chasms:coal', 'caverns_and_chasms:charcoal', 'caverns_and_chasms:refractor',
        'spelunkery:mineomite', 'aether:berry_bush', 'aethersdelight:peppermint_bush', 'deep_aether:rotten_roseroot_log', 'aether:aerogel',
        'aether:aerogel', 'deep_aether:aether_moss_carpet', 'deep_aether:aercloud_root_carpet', 'aether:aerogel_wall'

    ]
    const lightBlocks = [
        '#bountifulfares:jack_o_straws', '#burnt:burning_planks', '#burnt:burnt_logs', '#burnt:burnt_planks', '#burnt:smoldering_planks',
        '#c:buds', '#c:chimneys', '#chipped:acacia_log', '#chipped:barrel', '#chipped:birch_log', '#chipped:cherry_log',
        '#chipped:crimson_stem', '#chipped:dark_oak_log', '#chipped:jungle_log', '#chipped:mangrove_log', '#chipped:oak_log', '#chipped:spruce_log',
        '#chipped:stripped_acacia_log', '#chipped:stripped_birch_log', '#chipped:stripped_cherry_log', '#chipped:stripped_crimson_stem',
        '#chipped:stripped_dark_oak_log', '#chipped:stripped_jungle_log', '#chipped:stripped_mangrove_log', '#chipped:stripped_oak_log',
        '#chipped:stripped_spruce_log', '#chipped:stripped_warped_stem', '#chipped:warped_stem', '#create_vibrant_vaults:stock_links',
        '#handcrafted:benches', '#handcrafted:chairs', '#handcrafted:couches', '#handcrafted:counters', '#handcrafted:cupboards', '#deep_aether:totems',
        '#handcrafted:dining_benches', '#handcrafted:dining_benches', '#handcrafted:drawers', '#handcrafted:shelves', '#handcrafted:side_tables',
        '#handcrafted:table_connectable', '#interiors:chairs', '#interiors:floor_chairs', '#kaleidoscope_cookery:chair', '#kaleidoscope_cookery:table',
        '#kaleidoscope_tavern:sandwich_board', '#kaleidoscope_tavern:sittable', '#kubejs:pots', '#kubejs:stoney_trims', '#quark:stools', '#tide:crates',

        'supplementaries:faucet',
        'alexscaves:hollow_bone', 'alexscaves:metal_barrel', 'alexscaves:nuclear_siren', 'alexscaves:rusty_barrel', 'alexscaves:siren_light',
        'atmospheric:currant_stalk_bundle', 'bits_n_bobs:large_flanged_cogwheel',
        'bits_n_bobs:small_flanged_cogwheel', 'bountifulfares:fermentation_vessel', 'burnt:burnt_bamboo_block',
        'burnt:burnt_bamboo_planks', 'burnt:burnt_barrel', 'copycats:copycat_cogwheel', 'copycats:copycat_large_cogwheel',
        'copycats:copycat_large_cogwheel', 'copycats:copycat_shaft', 'copycats:copycat_slope', 'copycats:copycat_step', 'copycats:copycat_vertical_slope',
        'create_connected:copycat_wall', 'create_connected:crank_wheel', 'create_connected:cross_connector', 'create_connected:encased_chain_cogwheel',
        'create_connected:large_crank_wheel', 'create_hypertube:hypertube_accelerator', 'create_hypertube:hypertube_entrance',
        'createdieselgenerators:chip_wood_beam', 'darkerdepths:vertical_petrified_planks', 'dndecor:dark_metal_cogwheel',
        'dndecor:large_dark_metal_cogwheel', 'environmental:cattail_thatch', 'extra_gauges:integer_selector', 'farmersdelight:hoary_cabinet',
        'farmersdelight:walnut_cabinet', 'gardens_of_the_dead:whistlecane_block', 'gardens_of_the_dead:whistlecane_mosaic',
        'gnkinetics:andesite_cogwheel', 'gnkinetics:large_andesite_cogwheel', 'gnkinetics:shaftless_brass_gear', 'gnkinetics:shaftless_tiny_brass_gear',
        'gnkinetics:tiny_brass_gear', 'gnkinetics:tiny_cogwheel', 'interiors:kelp_seat', 'kaleidoscope_cookery:shawarma_spit',
        'kaleidoscope_tavern:table', 'minecraft:bamboo_mosaic', 'petrolsparts:differential', 'petrolsparts:planetary_gearset',
        'powergrid:crt', 'powergrid:rheostat', 'quark:bamboo_mat', 'quark:crate', 'refurbished_furniture:computer', 'refurbished_furniture:post_box',
        'refurbished_furniture:television', 'starcatcher:display', 'starcatcher:telescope', 'alexscaves:copper_valve',
        'tfmg:aluminum_cogwheel', 'tfmg:aluminum_frame', 'tfmg:brass_frame', 'tfmg:cast_iron_frame', 'tfmg:constantan_frame', 'tfmg:copper_frame',
        'tfmg:factory_floor', 'tfmg:hardened_planks', 'tfmg:heavy_casing_encased_aluminum_cogwheel', 'tfmg:heavy_casing_encased_large_aluminum_cogwheel',
        'tfmg:heavy_casing_encased_large_steel_cogwheel', 'tfmg:heavy_casing_encased_steel_cogwheel', 'tfmg:large_aluminum_cogwheel',
        'tfmg:large_steel_cogwheel', 'tfmg:lead_frame', 'tfmg:nickel_frame', 'tfmg:rebar_pile', 'tfmg:steel_cogwheel', 'tfmg:steel_encased_aluminum_cogwheel',
        'tfmg:steel_encased_large_aluminum_cogwheel', 'tfmg:steel_encased_large_steel_cogwheel', 'tfmg:steel_encased_steel_cogwheel', 'tfmg:steel_frame',
        'tfmg:zinc_frame', 'upgrade_aquatic:beachgrass_thatch', 'waterframes:tv', 'bellsandwhistles:station_platform', 'tfmg:steel_encased_shaft',
        'tfmg:heavy_casing_encased_shaft', 'gnkinetics:large_magnet_gear', 'gnkinetics:magnet_gear', 'gnkinetics:large_brass_gear',
        'gnkinetics:brass_gear', 'gnkinetics:shaftless_large_brass_gear', 'gnkinetics:hollow_large_brass_gear', 'gnkinetics:hollow_brass_gear',
        'gnkinetics:shaftless_large_industrial_gear', 'gnkinetics:shaftless_industrial_gear', 'kaleidoscope_tavern:bar_cabinet',
        'dndecor:forest_large_industrial_cogwheel', 'dndecor:forest_industrial_cogwheel', 'kaleidoscope_tavern:glass_bar_cabinet',
        'gnkinetics:industrial_gear', 'gnkinetics:shaftless_cogstone', 'gnkinetics:cogstone', 'gnkinetics:shaftless_andesite_cogwheel',
        'gnkinetics:large_industrial_gear', 'quark:pipe', 'quark:chute', 'burnt:blazing_wood', 'burnt:smoldering_dark_oak_wood',
        'burnt:smoldering_dark_oak_log', 'burnt:smoldering_bamboo_block', 'burnt:smoldering_stripped_wood', 'burnt:small_smoldering_log',
        'burnt:smoldering_wood', 'burnt:smoldering_bamboo_planks', 'burnt:smoldering_bamboo_mosaic_planks', 'burnt:small_burnt_log',
        'burnt:sooty_small_log', 'chipped:tinkering_table', 'chipped:alchemy_bench', 'chipped:mason_table', 'chipped:loom_table',
        'chipped:carpenters_table', 'chipped:glassblower', 'chipped:botanist_workbench', 'burnt:double_fallen_burnt_slab', 'environmental:slabfish_effigy',
        'spelunkery:salt_lamp', 'spelunkery:nephrite_fountain', 'spelunkery:nephrite_siphon', 'spelunkery:stone_channel', 'spelunkery:wooden_channel',
        'deep_aether:roseroot_planks', 'deep_aether:yagroot_planks', 'deep_aether:cruderoot_planks', 'deep_aether:conberry_planks',
        'deep_aether:sunroot_planks', 'aether_beyond_parity:skyroot_chest_mimic', 'aether:skyroot_planks',
    ]
    const normalSlabs = [
        'minecraft:stone_slab', 'minecraft:cobblestone_slab', 'minecraft:granite_slab', 'minecraft:diorite_slab', 'minecraft:andesite_slab',
        'minecraft:cobbled_deepslate_slab', 'minecraft:tuff_slab', 'minecraft:blackstone_slab', 'upgrade_aquatic:kelpy_cobblestone_slab',
        'caverns_and_chasms:schist_slab', 'caverns_and_chasms:sugilite_slab', 'caverns_and_chasms:cylindrite_slab', 'caverns_and_chasms:cassiterite_slab',
        'caverns_and_chasms:rhyolite_slab', 'oreganized:glance_slab', 'quark:limestone_slab', 'quark:jasper_slab', 'quark:shale_slab', 'quark:myalite_slab',
        'quark:permafrost_slab', 'caverns_and_chasms:deepslate_slab', 'atmospheric:dolerite_slab', 'caverns_and_chasms:smooth_basalt_slab',
        'darkerdepths:darkslate_slab', 'regions_unexplored:chalk_slab', 'burnt:sooty_cobblestone_slab', 'burnt:sooty_stone_slab', 'burnt:sooty_diorite_slab',
        'burnt:sooty_andesite_slab', 'burnt:sooty_granite_slab', 'darkerdepths:grimestone_slab', 'deep_aether:cobbled_aseterite_slab',
        'deep_aether:aseterite_slab', 'darkerdepths:duskrock_slab', 'darkerdepths:aridrock_slab', 'deep_aether:raw_clorite_slab',
        'aether:holystone_slab', 'aether:mossy_holystone_slab',
    ]
    const normalBlocks = [
        '#sable:normal_slabs',

        'darkerdepths:darkslate_stairs', 'darkerdepths:grimestone_stairs', 'deep_aether:cobbled_aseterite_stairs', 'deep_aether:aseterite_stairs',
        'darkerdepths:duskrock_stairs', 'darkerdepths:aridrock_stairs', 'deep_aether:raw_clorite_stairs', 'quark:permafrost_stairs',
        'caverns_and_chasms:deepslate_stairs', 'minecraft:cobbled_deepslate_stairs', 'oreganized:glance_stairs', 'atmospheric:dolerite_stairs',
        'caverns_and_chasms:smooth_basalt_stairs', 'minecraft:blackstone_stairs', 'darkerdepths:darkslate_stairs', 'regions_unexplored:chalk_stairs',
        'burnt:sooty_cobblestone_stairs', 'burnt:sooty_stone_stairs', 'burnt:sooty_diorite_stairs', 'burnt:sooty_andesite_stairs', 'burnt:sooty_granite_stairs',
        'minecraft:stone_stairs', 'minecraft:cobblestone_stairs', 'upgrade_aquatic:kelpy_cobblestone_stairs', 'minecraft:granite_stairs', 'quark:jasper_stairs',
        'quark:limestone_stairs', 'minecraft:diorite_stairs', 'minecraft:andesite_stairs', 'minecraft:tuff_stairs', 'caverns_and_chasms:schist_stairs',
        'caverns_and_chasms:sugilite_stairs', 'caverns_and_chasms:cylindrite_stairs', 'caverns_and_chasms:rhyolite_stairs', 'quark:shale_stairs',
        'quark:myalite_stairs', 'aether:holystone_stairs', 'aether:mossy_holystone_stairs',
    ]
    const heavyBlocks = [
        '#atmospheric:travertine', '#chipped:obsidian',

        'atmospheric:dolerite', 'burnt:sooty_andesite', 'burnt:sooty_cobblestone', 'burnt:sooty_diorite', 'burnt:sooty_granite',
        'burnt:sooty_mossy_cobblestone', 'burnt:sooty_stone', 'darkerdepths:arid_deepslate', 'darkerdepths:darkslate', 'doom_and_gloom:bone_pile',
        'oreganized:glance', 'oreganized:spotted_glance', 'oreganized:waxed_spotted_glance', 'tfmg:slag_block', 'minecraft:cinnabar', 'minecraft:sulfur',
        'darkerdepths:darkslate', 'darkerdepths:grimestone', 'deep_aether:cobbled_aseterite', 'deep_aether:aseterite', 'darkerdepths:duskrock',
        'darkerdepths:aridrock', 'deep_aether:raw_clorite',
    ]
    const superHeavyBlocks = [
        '#chipped:coal_block', '#chipped:crying_obsidian', '#chipped:diamond_block', '#chipped:dried_kelp_block', '#chipped:emerald_block',
        '#chipped:gold_block', '#chipped:hay_block', '#chipped:iron_block', '#chipped:lapis_block', '#chipped:netherite_block',
        '#chipped:raw_copper_block', '#chipped:raw_gold_block', '#chipped:raw_iron_block', '#chipped:redstone_block', '#kubejs:copper_golems',

        'moyai:moyai', 'oreganized:gargoyle', 'quark:sturdy_stone', 'quark:tiny_potato',
        'burnt:smoldering_coal', 'burnt:smoldering_hay', 'caverns_and_chasms:bejeweled_anvil',
    ]


    // colorful
    colorsVanilla.forEach(color => {

        superLightBlocks.push(
            `#chipped:${color}_stained_glass_pane`,
            `nirvana:${color}_hemp_burlap`, `nirvana:${color}_woven_burlap`,
            `refurbished_furniture:${color}_lamp`, `refurbished_furniture:${color}_trampoline`,
            `refurbished_furniture:${color}_cooler`, `refurbished_furniture:${color}_cooler`,
            `starcatcher:tackle_box_${color}`, `starcatcher:fisherman_hat_${color}`,
        )

        lightBlocks.push(
            `tfmg:${color}_caution_block`,
            `dndecor:${color}_cogwheel`, `dndecor:${color}_large_cogwheel`,
            `refurbished_furniture:${color}_sofa`, `refurbished_furniture:${color}_stool`, `refurbished_furniture:${color}_grill`,
            `refurbished_furniture:${color}_kitchen_cabinetry`, `refurbished_furniture:${color}_kitchen_drawer`,
            `refurbished_furniture:${color}_kitchen_drawer`, `refurbished_furniture:${color}_kitchen_storage_cabinet`,
            `refurbished_furniture:${color}_toilet`, `refurbished_furniture:${color}_basin`,
            `refurbished_furniture:${color}_bath`, `refurbished_furniture:${color}_kitchen_sink`,
            `dndecor:${color}_industrial_cogwheel`, `dndecor:${color}_large_industrial_cogwheel`,
        )

        if (color == 'magenta' || color == 'light_blue' || color == 'purple' || color == 'cyan' || color == 'blue') {
            abyssalLight.push(
                `abyssal_decor:wallpaper_${color}`
            )
        } else {
            abyssalLight.push(
                `abyssal_decor:${color}_wallpaper`,
            )
        }

        event.add('c:create/dyed_flywheels', `dndecor:${color}_flywheel`)
    })
    colorsDyeDepot.forEach(color => {

        lightBlocks.push(
            `dndecor:${color}_cogwheel`, `dndecor:${color}_large_cogwheel`,
            `dndecor:${color}_industrial_cogwheel`, `dndecor:${color}_large_industrial_cogwheel`,
        )

        event.add('c:create/dyed_flywheels', `dndecor:${color}_flywheel`)
    })
    corundumColors.forEach(color => {

        superLightBlocks.push(`quark:${color}_corundum_pane`)

        lightBlocks.push(`quark:${color}_corundum_cluster`)
    })

    //woody two shoes
    woodTypesVanilla.forEach(type => {
        superLightBlocks.push(
            `refurbished_furniture:${type}_light_ceiling_fan`,
            `refurbished_furniture:${type}_dark_ceiling_fan`, `refurbished_furniture:${type}_mail_box`,
            `refurbished_furniture:${type}_storage_jar`, `refurbished_furniture:${type}_cutting_board`,
            `refurbished_furniture:${type}_hedge`,
        )
        lightBlocks.push(
            `refurbished_furniture:${type}_chair`, `refurbished_furniture:${type}_table`,
            `refurbished_furniture:${type}_desk`, `refurbished_furniture:${type}_drawer`,
            `refurbished_furniture:${type}_kitchen_cabinetry`, `refurbished_furniture:${type}_kitchen_drawer`,
            `refurbished_furniture:${type}_kitchen_sink`, `refurbished_furniture:${type}_kitchen_storage_cabinet`,
            `refurbished_furniture:${type}_crate`, `refurbished_furniture:${type}_storage_cabinet`,
            `refurbished_furniture:${type}_toilet`, `refurbished_furniture:${type}_basin`,
            `refurbished_furniture:${type}_bath`,
        )
        event.add('minecraft:planks', `burnt:sooty_${type}_planks`)
        event.add('minecraft:wooden_stairs', `burnt:sooty_${type}_stairs`)
        event.add('minecraft:wooden_slabs', `burnt:sooty_${type}_slab`)
        event.add('kubejs:wooden_trims', `handcrafted:${type}_pillar_trim`, `handcrafted:${type}_corner_trim`)
        event.add('kubejs:trellis', `bountifulfares:${type}_trellis`)
    })
    woodTypesVanillaNether.forEach(type => {

        superLightBlocks.push(
            `refurbished_furniture:${type}_light_ceiling_fan`,
            `refurbished_furniture:${type}_dark_ceiling_fan`, `refurbished_furniture:${type}_mail_box`,
            `refurbished_furniture:${type}_storage_jar`, `refurbished_furniture:${type}_cutting_board`,
        )

        lightBlocks.push(
            `refurbished_furniture:${type}_chair`, `refurbished_furniture:${type}_table`,
            `refurbished_furniture:${type}_desk`, `refurbished_furniture:${type}_drawer`,
            `refurbished_furniture:${type}_kitchen_cabinetry`, `refurbished_furniture:${type}_kitchen_drawer`,
            `refurbished_furniture:${type}_kitchen_sink`, `refurbished_furniture:${type}_kitchen_storage_cabinet`,
            `refurbished_furniture:${type}_crate`, `_crate`, `refurbished_furniture:${type}_storage_cabinet`,
            `refurbished_furniture:${type}_toilet`, `refurbished_furniture:${type}_basin`,
            `refurbished_furniture:${type}_bath`,
        )

        event.add('kubejs:wooden_trims', `handcrafted:${type}_pillar_trim`, `handcrafted:${type}_corner_trim`)
        event.add('kubejs:trellis', `bountifulfares:${type}_trellis`)
    })
    event.add('minecraft:logs', '#burnt:sooty_logs')
    event.add('kubejs:wooden_trims', 'handcrafted:bamboo_pillar_trim', 'handcrafted:bamboo_corner_trim')
    event.add('kubejs:trellis', ['bountifulfares:bamboo_trellis', 'bountifulfares:hoary_trellis', 'bountifulfares:walnut_trellis'])

    //mayonaise on an escalator
    const seeYouLater = [
        'wooden', 'metal'
    ]
    const typer = [
        'walkway', 'escalator'
    ]
    seeYouLater.forEach(material => {
        typer.forEach(type => {
            superLightBlocks.push(
                `escalated:${material}_${type}_handrail`,
                `escalated:${material}_narrow_${type}`,
                `escalated:${material}_wide_${type}_side`,
                `escalated:${material}_wide_${type}_center`
            )
        })
    })
    superLightBlocks.push('escalated:glass_escalator_handrail', 'escalated:glass_walkway_handrail')

    //other
    ladders.forEach(block => {
        event.add('c:ladders', block)
    })
    handcraftedStoneTypes.forEach(type => {
        event.add('kubejs:stoney_trims', `handcrafted:${type}_pillar_trim`, `handcrafted:${type}_corner_trim`)
    })
    dndecorMetalTypes.forEach(type => {
        superLightBlocks.push(
            `dndecor:${type}_frontlight`,
            `dndecor:${type}_catwalk`,
            `dndecor:${type}_cross_bolt`,
            `dndecor:${type}_dash_bolt`,
            `dndecor:${type}_dot_bolt`,
            `dndecor:${type}_flat_bolt`
        )
    })
    copperVariants.forEach(variant => {
        event.add('kubejs:copper_bars', `minecraft:${variant}copper_bars`)
        event.add('kubejs:copper_bars', `caverns_and_chasms:${variant}copper_bars`)
        event.add('kubejs:copper_chains', `minecraft:${variant}copper_chain`)
        event.add('kubejs:copper_golems', `minecraft:${variant}copper_golem_statue`)
        event.add('kubejs:copper_floodlights', `caverns_and_chasms:${variant}floodlight`)
        event.add('kubejs:copper_toobloxes', `caverns_and_chasms:${variant}toolbox`)
        event.add('kubejs:lightning_rods', `caverns_and_chasms:${variant}lightning_rod`)
        event.add('kubejs:copper_lanterns', `caverns_and_chasms:${variant}copper_lantern`)
    })

    event.add('c:chains', '#kubejs:copper_chains')
    event.add('c:clusters', [
        'alexscaves:sulfur_cluster', 'alexscaves:sulfur_bud_large', 'alexscaves:sulfur_bud_medium', 'alexscaves:sulfur_bud_small',
        'biomesoplenty:rose_quartz_cluster', 'biomesoplenty:large_rose_quartz_bud', 'biomesoplenty:medium_rose_quartz_bud', 'biomesoplenty:small_rose_quartz_bud',
    ])

    event.remove('c:storage_blocks/blaze_rod', 'quark:blaze_lantern')
    event.remove('c:storage_blocks', 'enderscape:drift_jelly_block')


    // abyssal
    for (const item of Ingredient.of('@abyssal_decor').itemIds) {
        let shouldBreak = false

        abyssalLight.forEach(block => {
            if (block == item) {
                lightBlocks.push(item)
                shouldBreak = true
            }
        })
        abyssalWeightless.forEach(block => {
            if (block == item) {
                weightlessBlocks.push(item)
                shouldBreak = true
            }
        })
        abyssalUnmodified.forEach(block => {
            if (block == item) {
                shouldBreak = true
            }
        })
        abyssalHeavy.forEach(block => {
            if (block == item) {
                heavyBlocks.push(item)
                shouldBreak = true
            }
        })
        abyssalSuperHeavy.forEach(block => {
            if (block == item) {
                superHeavyBlocks.push(item)
                shouldBreak = true
            }
        })

        if (shouldBreak)
            continue

        superLightBlocks.push(item)
    }


    // cakes
    const cakeTypeGroups = [
        {
            modid: 'neapolitan',
            type: ['vanilla', 'chocolate', 'strawberry', 'banana', 'adzuki', 'mint']
        },
        {
            modid: 'bountifulfares',
            type: ['cocoa', 'coconut', 'sponge']
        }
    ]
    function doubleCakes(modid, type) {
        superLightBlocks.push(`amendments:${modid}/double_${type}_cake`)
    }
    cakeTypeGroups.forEach(group => {
        switch (group.modid) {
            case 'neapolitan': {
                group.type.forEach(type => {
                    doubleCakes(group.modid, type)
                    superLightBlocks.push(`${group.modid}:${type}_cake`, `${group.modid}:${type}_candle_cake`)
                    colorsVanilla.forEach(color => {
                        superLightBlocks.push(`neapolitan:${color}_${type}_candle_cake`)
                    })
                })
            }
            case 'bountifulfares': {
                group.type.forEach(type => {
                    doubleCakes(group.modid, type)
                    superLightBlocks.push(`${group.modid}:${type}_cake`)
                })
            }
        }
    })
    colorsVanilla.forEach(color => {
        superLightBlocks.push(`minecraft:${color}_candle_cake`, `soulcandles:${color}_soul_candle_cake`)
    })
    colorsDyeDepot.forEach(color => {
        superLightBlocks.push(`dye_depot:${color}_candle_cake`)
    })
    colorsDyenamics.forEach(color => {
        superLightBlocks.push(`dyenamics:${color}_candle_cake`)
    })
    superLightBlocks.push(
        'minecraft:cake', 'minecraft:candle_cake', 'soulcandles:soul_candle_cake',
        'amendments:directional_cake', 'amendments:double_cake', 'buzzier_bees:soul_candle_cake'
    )


    // layereds
    const blockFruits = ['apple', 'golden_apple', 'hoary_apple', 'lemon', 'orange', 'plum']
    blockFruits.forEach(type => {
        event.add('kubejs:sliced', `bountifulfares:${type}_block`)
    })
    const stackedIngotVariants = [
        'iron', 'gold', 'tin', 'silver', 'necromium', 'netherite'
    ]
    copperVariants.forEach(variant => {
        stackedIngotVariants.push(`${variant}copper`)
    })
    event.remove('sable:super_light', 'minecraft:snow')
    event.add('kubejs:snow_based_layered', [
        'minecraft:snow', 'snowrealmagic:snow', 'alexscaves:guano_layer'
    ])
    stackedIngotVariants.forEach(type => {
        event.add('kubejs:stacked_ingots', `caverns_and_chasms:${type}_ingot`)
    })
    event.add('kubejs:stacked_ingots', ['caverns_and_chasms:brick', 'caverns_and_chasms:nether_brick'])
    event.add('kubejs:bytes', 'copycats:copycat_byte')
    event.add('kubejs:layered', [
        'copycats:copycat_layer', 'copycats:copycat_slope_layer', 'copycats:copycat_slice', 'copycats:copycat_vertical_slice', 'copycats:copycat_corner_slice',
        'supplementaries:ash', 'spelunkery:saltpeter'
    ])
    event.add('kubejs:half_layered', [
        'copycats:copycat_half_layer', 'copycats:copycat_stacked_half_layer', 'copycats:copycat_vertical_half_layer'
    ])



    // sabling
    event.remove('sable:light', '#quark:hollow_logs')

    event.add('sable:fragile', fragileBlocks)
    event.add('kubejs:mud', mudBlocks)
    event.add('sable:frictive', stickyBlocks)

    event.add('kubejs:end_stone_slabs', endStoneSlabs)
    event.add('sable:end_stones', endStones)

    event.add('kubejs:aether', [/aether:.*/,
        //'#aether:treated_as_aether_block'
    ])

    event.add('sable:weightless', weightlessBlocks)
    event.add('kubejs:extra_light', extraLightBlocks)
    event.add('sable:super_light', superLightBlocks)
    event.add('sable:light', lightBlocks)
    event.add('sable:normal_slabs', normalSlabs)
    event.add('sable:normal', normalBlocks)
    event.add('sable:heavy', heavyBlocks)
    event.add('sable:super_heavy', superHeavyBlocks)

    event.add('sable:quarter_volume', '#c:ladders')

    event.add('c:create/flywheels', [
        '#c:create/dyed_flywheels',

        'create:flywheel', 'tfmg:aluminum_flywheel', 'tfmg:cast_iron_flywheel', 'tfmg:lead_flywheel', 'tfmg:nickel_flywheel', 'tfmg:steel_flywheel'
    ])
    event.add('kubejs:grindstones', [
        'minecraft:grindstone', 'spelunkery:diamond_grindstone'
    ])

})

ServerEvents.tags('item', event => {


    event.remove('c:storage_blocks/blaze_rod', 'quark:blaze_lantern')
    event.remove('c:storage_blocks', 'enderscape:drift_jelly_block')

})
