ServerEvents.tags('item', event => {

    event.add('dndecor:stone_types/stone', [
        'minecraft:stone_stairs', 'caverns_and_chasms:stone_wall',
        'minecraft:stone_bricks', 'minecraft:stone_brick_stairs', 'minecraft:stone_brick_wall',
        'minecraft:chiseled_stone_bricks',
        'cinchsmissingblocks:stone_brick_pillar',
        'supplementaries:stone_tile', 'supplementaries:stone_tile_stairs', 'supplementaries:stone_tile_wall',
    ])
    event.add('create:stone_types/granite', [
        'minecraft:granite_stairs', 'minecraft:granite_wall',
        'minecraft:polished_granite', 'minecraft:polished_granite_stairs', 'caverns_and_chasms:polished_granite_wall',

    ])
    event.add('create:stone_types/diorite', [
        'minecraft:diorite_stairs', 'minecraft:diorite_wall',
        'minecraft:polished_diorite', 'minecraft:polished_diorite_stairs', 'caverns_and_chasms:polished_diorite_wall',

    ])
    event.add('create:stone_types/andesite', [
        'minecraft:andesite_stairs', 'minecraft:andesite_wall',
        'minecraft:polished_andesite', 'minecraft:polished_andesite_stairs', 'caverns_and_chasms:polished_andesite_wall',

    ])
    event.add('create:stone_types/calcite', [
        'caverns_and_chasms:calcite_stairs', 'caverns_and_chasms:calcite_wall'
    ])
    event.add('create:stone_types/dripstone', [
        'caverns_and_chasms:dripstone_stairs', 'caverns_and_chasms:dripstone_wall'
    ])
    event.add('create:stone_types/tuff', [
        'minecraft:tuff_stairs', 'minecraft:tuff_wall',
        'caverns_and_chasms:polished_tuff', 'caverns_and_chasms:polished_tuff_stairs', 'caverns_and_chasms:polished_tuff_wall',
        'caverns_and_chasms:tuff_bricks', 'caverns_and_chasms:tuff_brick_stairs', 'caverns_and_chasms:tuff_brick_wall',
        'caverns_and_chasms:chiseled_tuff_bricks',
        'caverns_and_chasms:tuff_pillar',
        'caverns_and_chasms:tuff_tiles', 'caverns_and_chasms:tuff_tile_stairs', 'caverns_and_chasms:tuff_tile_wall'
    ])
    event.add('create:stone_types/deepslate', [
        'caverns_and_chasms:deepslate_stairs', 'caverns_and_chasms:deepslate_wall',
        'minecraft:polished_deepslate', 'minecraft:polished_deepslate_stairs', 'minecraft:polished_deepslate_wall',
        'minecraft:deepslate_bricks', 'minecraft:deepslate_brick_stairs', 'minecraft:deepslate_brick_wall',
        'cinchsmissingblocks:deepslate_brick_pillar',
        'minecraft:chiseled_deepslate',
        'minecraft:deepslate_tiles', 'minecraft:deepslate_tile_stairs', 'minecraft:deepslate_tile_wall',
        'dndecor:small_deepslate_tiles'
    ])
    event.add('dndecor:stone_types/netherrack', [
        'cinchsmissingblocks:netherrack_stairs', 'cinchsmissingblocks:netherrack_wall'
    ])
    event.add('dndecor:stone_types/basalt', [
        'minecraft:polished_basalt',
        'caverns_and_chasms:basalt_bricks', 'caverns_and_chasms:basalt_brick_stairs', 'caverns_and_chasms:basalt_brick_wall',
        'caverns_and_chasms:chiseled_basalt_bricks',
        'caverns_and_chasms:basalt_tiles', 'caverns_and_chasms:basalt_tile_stairs', 'caverns_and_chasms:basalt_tile_wall'
    ])
    event.add('dndecor:stone_types/blackstone', [
        'minecraft:blackstone_stairs', 'minecraft:blackstone_wall',
        'minecraft:polished_blackstone', 'minecraft:polished_blackstone_stairs', 'minecraft:polished_blackstone_wall',
        'minecraft:polished_blackstone_bricks', 'minecraft:polished_blackstone_brick_stairs', 'minecraft:polished_blackstone_brick_wall',
        'cinchsmissingblocks:blackstone_brick_pillar',
        'minecraft:chiseled_polished_blackstone'
    ])
    event.add('dndecor:stone_types/amethyst', [
        'caverns_and_chasms:cut_amethyst',
        'caverns_and_chasms:cut_amethyst_bricks', 'caverns_and_chasms:cut_amethyst_brick_stairs', 'caverns_and_chasms:cut_amethyst_brick_wall'
    ])
    event.add('dndecor:stone_types/packed_mud', [
        'cinchsmissingblocks:packed_mud_stairs', 'cinchsmissingblocks:packed_mud_wall',
        'minecraft:mud_bricks', 'minecraft:mud_brick_stairs', 'minecraft:mud_brick_wall',
        'cinchsmissingblocks:mud_brick_pillar', 'quark:mud_pillar',
        'environmental:chiseled_mud_bricks', 'cinchsmissingblocks:chiseled_mud_bricks',
        'quark:carved_mud_bricks',
        'quark:mud_brick_lattice'
    ])
    /*
        event.add('kubejs:stone_types/prismarine', [
            'minecraft:prismarine', 'minecraft:prismarine_stairs', 'minecraft:prismarine_wall',
            'minecraft:prismarine_bricks', 'minecraft:prismarine_brick_stairs',
            'stoneworks:cobbled_prismarine', 'stoneworks:cobbled_prismarine_stairs', 'stoneworks:cobbled_prismarine_wall',
            'stoneworks:polished_prismarine', 'stoneworks:polished_prismarine_stairs', 'stoneworks:polished_prismarine_wall',
            'stoneworks:chiseled_prismarine',
            'stoneworks:prismarine_tiles', 'stoneworks:prismarine_tile_stairs', 'stoneworks:prismarine_tile_wall',
            'stoneworks:prismarine_bricks', 'stoneworks:prismarine_brick_stairs', 'stoneworks:prismarine_brick_wall',
            'stoneworks:prismarine_pavers', 'stoneworks:prismarine_paver_stairs', 'stoneworks:prismarine_paver_wall',
            'stoneworks:prismarine_plates', 'stoneworks:prismarine_plate_stairs', 'stoneworks:prismarine_plate_wall',
            'stoneworks:prismarine_pillar'
        ])
    
        event.add('kubejs:stone_types/dark_prismarine', [
            'minecraft:dark_prismarine', 'minecraft:dark_prismarine_stairs',
            'stoneworks:cobbled_dark_prismarine', 'stoneworks:cobbled_dark_prismarine_stairs', 'stoneworks:cobbled_dark_prismarine_wall',
            'stoneworks:raw_dark_prismarine', 'stoneworks:raw_dark_prismarine_stairs', 'stoneworks:raw_dark_prismarine_wall',
            'stoneworks:polished_dark_prismarine', 'stoneworks:polished_dark_prismarine_stairs', 'stoneworks:polished_dark_prismarine_wall',
            'stoneworks:chiseled_dark_prismarine',
            'stoneworks:dark_prismarine_tiles', 'stoneworks:dark_prismarine_tile_stairs', 'stoneworks:dark_prismarine_tile_wall',
            'stoneworks:dark_prismarine_bricks', 'stoneworks:dark_prismarine_brick_stairs', 'stoneworks:dark_prismarine_brick_wall',
            'stoneworks:dark_prismarine_shingles', 'stoneworks:dark_prismarine_shingle_stairs', 'stoneworks:dark_prismarine_shingle_wall',
            'stoneworks:dark_prismarine_plates', 'stoneworks:dark_prismarine_plate_stairs', 'stoneworks:dark_prismarine_plate_wall',
            'stoneworks:dark_prismarine_pillar'
        ])
    */
    event.add('oreganized:stone_types/glance', [
        'oreganized:glance', 'oreganized:glance_stairs', 'oreganized:glance_wall',
        'oreganized:polished_glance_stairs'
    ])
    event.add('kubejs:stone_types/rough_limestone', [
        'quark:limestone', 'quark:limestone_stairs', 'quark:limestone_wall',
        'quark:polished_limestone', 'quark:polished_limestone_stairs',
        'quark:limestone_bricks', 'quark:limestone_bricks_stairs', 'quark:limestone_bricks_wall',
        'quark:limestone_pillar',
        'quark:chiseled_limestone_bricks'
    ])
    event.add('kubejs:stone_types/primordial_limestone', [
        'alexscaves:limestone', 'alexscaves:limestone_stairs', 'alexscaves:limestone_wall',
        'alexscaves:limestone_pillar',
        'alexscaves:limestone_chiseled'
    ])
    event.add('kubejs:stone_types/magnetic_galena', [
        'alexscaves:galena', 'alexscaves:galena_stairs', 'alexscaves:galena_wall',
        'alexscaves:galena_bricks', 'alexscaves:galena_brick_stairs', 'alexscaves:galena_brick_wall',
        'alexscaves:galena_pillar'
    ])
    event.add('kubejs:stone_types/cobblestone', [
        'minecraft:cobblestone', 'minecraft:cobblestone_stairs', 'minecraft:cobblestone_wall',
        'quark:cobblestone_bricks', 'quark:cobblestone_bricks_stairs', 'quark:cobblestone_bricks_wall',
        'caverns_and_chasms:cobblestone_bricks', 'caverns_and_chasms:cobblestone_brick_stairs', 'caverns_and_chasms:cobblestone_brick_wall',
        'caverns_and_chasms:cobblestone_tiles', 'caverns_and_chasms:cobblestone_tile_stairs', 'caverns_and_chasms:cobblestone_tile_wall'
    ])
    event.add('kubejs:stone_types/mossy_cobblestone', [
        'minecraft:mossy_cobblestone', 'minecraft:mossy_cobblestone_stairs', 'minecraft:mossy_cobblestone_wall',
        'quark:mossy_cobblestone_bricks', 'quark:mossy_cobblestone_bricks_stairs', 'quark:mossy_cobblestone_bricks_wall',
        'caverns_and_chasms:mossy_cobblestone_bricks', 'caverns_and_chasms:mossy_cobblestone_brick_stairs', 'caverns_and_chasms:mossy_cobblestone_brick_wall',
        'caverns_and_chasms:mossy_cobblestone_tiles', 'caverns_and_chasms:mossy_cobblestone_tile_stairs', 'caverns_and_chasms:mossy_cobblestone_tile_wall'
    ])
    event.add('kubejs:stone_types/kelpy_cobblestone', [
        'upgrade_aquatic:kelpy_cobblestone', 'upgrade_aquatic:kelpy_cobblestone_stairs', 'upgrade_aquatic:kelpy_cobblestone_wall',
        'upgrade_aquatic:kelpy_cobblestone_bricks', 'upgrade_aquatic:kelpy_cobblestone_brick_stairs', 'upgrade_aquatic:kelpy_cobblestone_brick_wall',
        'upgrade_aquatic:kelpy_cobblestone_tiles', 'upgrade_aquatic:kelpy_cobblestone_tile_stairs', 'upgrade_aquatic:kelpy_cobblestone_tile_wall'
    ])
    event.add('kubejs:stone_types/smooth_stone', [
        'minecraft:smooth_stone', 'cinchsmissingblocks:smooth_stone_stairs', 'cinchsmissingblocks:smooth_stone_wall'
    ])
    event.add('kubejs:stone_types/schist', [
        'caverns_and_chasms:schist', 'caverns_and_chasms:schist_stairs', 'caverns_and_chasms:schist_pillar',
        'minecraft:polished_tuff', 'minecraft:polished_tuff_stairs', 'minecraft:polished_tuff_wall',
        'minecraft:tuff_bricks', 'minecraft:tuff_brick_stairs', 'minecraft:tuff_brick_wall',
        'minecraft:chiseled_tuff_bricks', 'minecraft:chiseled_tuff', 'caverns_and_chasms:schist_pillar'
    ])
    event.add('kubejs:stone_types/sugilite', [
        'caverns_and_chasms:sugilite', 'caverns_and_chasms:sugilite_stairs', 'caverns_and_chasms:sugilite_wall',
        'caverns_and_chasms:polished_sugilite', 'caverns_and_chasms:polished_sugilite_stairs', 'caverns_and_chasms:polished_sugilite_wall',
        'caverns_and_chasms:sugilite_bricks', 'caverns_and_chasms:sugilite_brick_stairs', 'caverns_and_chasms:sugilite_brick_wall',
        'caverns_and_chasms:sugilite_pillar',
        'caverns_and_chasms:chiseled_sugilite_bricks'
    ])
    event.add('kubejs:stone_types/cylindrite', [
        'caverns_and_chasms:cylindrite', 'caverns_and_chasms:cylindrite_stairs', 'caverns_and_chasms:cylindrite_wall',
        'caverns_and_chasms:polished_cylindrite', 'caverns_and_chasms:polished_cylindrite_stairs', 'caverns_and_chasms:polished_cylindrite_wall',
        'caverns_and_chasms:cylindrite_bricks', 'caverns_and_chasms:cylindrite_brick_stairs', 'caverns_and_chasms:cylindrite_brick_wall',
        'caverns_and_chasms:cylindrite_pillar',
        'caverns_and_chasms:chiseled_cylindrite_bricks'
    ])
    event.add('kubejs:stone_types/cassiterite', [
        'caverns_and_chasms:cassiterite', 'caverns_and_chasms:cassiterite_stairs', 'caverns_and_chasms:cassiterite_wall',
        'caverns_and_chasms:polished_cassiterite', 'caverns_and_chasms:polished_cassiterite_stairs', 'caverns_and_chasms:polished_cassiterite_wall',
        'caverns_and_chasms:cassiterite_bricks', 'caverns_and_chasms:cassiterite_brick_stairs', 'caverns_and_chasms:cassiterite_brick_wall',
        'caverns_and_chasms:cassiterite_pillar',
        'caverns_and_chasms:chiseled_cassiterite_bricks'
    ])
    event.add('kubejs:stone_types/rhyolite', [
        'caverns_and_chasms:rhyolite', 'caverns_and_chasms:rhyolite_stairs', 'caverns_and_chasms:rhyolite_wall',
        'caverns_and_chasms:polished_rhyolite', 'caverns_and_chasms:polished_rhyolite_stairs', 'caverns_and_chasms:polished_rhyolite_wall',
        'caverns_and_chasms:rhyolite_bricks', 'caverns_and_chasms:rhyolite_brick_stairs', 'caverns_and_chasms:rhyolite_brick_wall',
        'caverns_and_chasms:chiseled_rhyolite_bricks'
    ])
    event.add('kubejs:stone_types/magmatic_rhyolite', [
        'caverns_and_chasms:magmatic_rhyolite', 'caverns_and_chasms:magmatic_rhyolite_stairs', 'caverns_and_chasms:magmatic_rhyolite_wall',
        'caverns_and_chasms:polished_magmatic_rhyolite', 'caverns_and_chasms:polished_magmatic_rhyolite_stairs', 'caverns_and_chasms:polished_magmatic_rhyolite_wall',
        'caverns_and_chasms:magmatic_rhyolite_bricks', 'caverns_and_chasms:magmatic_rhyolite_brick_stairs', 'caverns_and_chasms:magmatic_rhyolite_brick_wall',
        'caverns_and_chasms:chiseled_magmatic_rhyolite_bricks'
    ])
    event.add('kubejs:stone_types/jasper', [
        'quark:jasper', 'quark:jasper_stairs', 'quark:jasper_wall',
        'quark:polished_jasper', 'quark:polished_jasper_stairs',
        'quark:jasper_bricks', 'quark:jasper_bricks_stairs', 'quark:jasper_bricks_wall',
        'quark:jasper_pillar',
        'quark:chiseled_jasper_bricks'
    ])
    event.add('kubejs:stone_types/shale', [
        'quark:shale', 'quark:shale_stairs', 'quark:shale_wall',
        'quark:polished_shale', 'quark:polished_shale_stairs',
        'quark:shale_bricks', 'quark:shale_bricks_stairs', 'quark:shale_bricks_wall',
        'quark:shale_pillar',
        'quark:chiseled_shale_bricks'
    ])
    event.add('kubejs:stone_types/myalite', [
        'quark:myalite', 'quark:myalite_stairs', 'quark:myalite_wall',
        'quark:polished_myalite', 'quark:polished_myalite_stairs',
        'quark:myalite_bricks', 'quark:myalite_bricks_stairs', 'quark:myalite_bricks_wall',
        'quark:myalite_pillar',
        'quark:chiseled_myalite_bricks'
    ])
    event.add('kubejs:stone_types/permafrost', [
        'quark:permafrost', 'quark:permafrost_stairs', 'quark:permafrost_wall',
        'quark:permafrost_bricks', 'quark:permafrost_bricks_stairs', 'quark:permafrost_bricks_wall'
    ])
    event.add('kubejs:stone_types/ivory_travertine', [
        'atmospheric:ivory_travertine',
        'atmospheric:cut_ivory_travertine', 'atmospheric:ivory_travertine_stairs', 'atmospheric:ivory_travertine_wall',
        'atmospheric:chiseled_ivory_travertine'
    ])
    event.add('kubejs:stone_types/peach_travertine', [
        'atmospheric:peach_travertine',
        'atmospheric:cut_peach_travertine', 'atmospheric:peach_travertine_stairs', 'atmospheric:peach_travertine_wall',
        'atmospheric:chiseled_peach_travertine'
    ])
    event.add('kubejs:stone_types/persimmon_travertine', [
        'atmospheric:persimmon_travertine',
        'atmospheric:cut_persimmon_travertine', 'atmospheric:persimmon_travertine_stairs', 'atmospheric:persimmon_travertine_wall',
        'atmospheric:chiseled_persimmon_travertine'
    ])
    event.add('kubejs:stone_types/saffron_travertine', [
        'atmospheric:saffron_travertine',
        'atmospheric:cut_saffron_travertine', 'atmospheric:saffron_travertine_stairs', 'atmospheric:saffron_travertine_wall',
        'atmospheric:chiseled_saffron_travertine'
    ])
    event.add('kubejs:stone_types/holystone', [
        'aether:holystone', 'aether:holystone_stairs', 'aether:holystone_wall',
        'aether_beyond_parity:polished_holystone', 'aether_beyond_parity:polished_holystone_stairs', 'aether_beyond_parity:polished_holystone_wall',
        'aether:holystone_bricks', 'aether:holystone_brick_stairs', 'aether:holystone_brick_wall',
        'deep_aether:holystone_pillar_up', 'deep_aether:holystone_pillar', 'deep_aether:holystone_pillar_down',
        'deep_aether:chiseled_holystone',
        'deep_aether:holystone_tiles', 'deep_aether:holystone_tile_stairs', 'deep_aether:holystone_tile_wall',
        'deep_aether:big_holystone_bricks', 'deep_aether:big_holystone_bricks_stairs', 'deep_aether:big_holystone_bricks_wall',
        'aether_beyond_parity:holystone_headstone', 'aether_beyond_parity:holystone_highlight', 'aether_beyond_parity:holystone_keystone'
    ])
    event.add('kubejs:stone_types/mossy_holystone', [
        'aether:mossy_holystone', 'aether:mossy_holystone_stairs', 'aether:mossy_holystone_wall',
        'deep_aether:mossy_holystone_bricks', 'deep_aether:mossy_holystone_brick_stairs', 'deep_aether:mossy_holystone_brick_wall',
        'deep_aether:mossy_holystone_tiles', 'deep_aether:mossy_holystone_tile_stairs', 'deep_aether:mossy_holystone_tile_wall'
    ])
    event.add('kubejs:stone_types/chalk', [
        'regions_unexplored:chalk', 'regions_unexplored:chalk_stairs',
        'regions_unexplored:polished_chalk', 'regions_unexplored:polished_chalk_stairs',
        'regions_unexplored:chalk_bricks', 'regions_unexplored:chalk_brick_stairs',
        'regions_unexplored:chalk_pillar',
        'regions_unexplored:chalk_grass_block'
    ])
    event.add('kubejs:stone_types/radrock', [
        'alexscaves:radrock', 'alexscaves:radrock_stairs', 'alexscaves:radrock_wall',
        'alexscaves:radrock_bricks', 'alexscaves:radrock_brick_stairs', 'alexscaves:radrock_brick_wall',
        'alexscaves:radrock_chiseled'
    ])
    event.add('kubejs:stone_types/dirt', [
        'minecraft:dirt',
        'environmental:dirt_bricks', 'environmental:dirt_brick_stairs', 'environmental:dirt_brick_wall',
        'environmental:dirt_tiles', 'environmental:dirt_tile_stairs', 'environmental:dirt_tile_wall'
    ])
    event.add('kubejs:stone_types/honeycomb', [
        'minecraft:honeycomb_block',
        'buzzier_bees:honeycomb_bricks', 'buzzier_bees:honeycomb_brick_stairs', 'buzzier_bees:honeycomb_brick_wall',
        'buzzier_bees:chiseled_honeycomb_bricks',
        'buzzier_bees:honeycomb_tiles', 'buzzier_bees:honeycomb_tile_stairs', 'buzzier_bees:honeycomb_tile_wall'
    ])
    event.add('kubejs:stone_types/rock_salt', [
        'spelunkery:rock_salt_block', 'spelunkery:rock_salt_stairs', 'spelunkery:rock_salt_wall',
        'spelunkery:polished_rock_salt', 'spelunkery:rock_salt_brick_stairs', 'spelunkery:polished_rock_salt_wall',
        'spelunkery:rock_salt_bricks', 'spelunkery:polished_rock_salt_stairs', 'spelunkery:rock_salt_brick_wall'
    ])
    event.add('kubejs:stone_types/grimestone', [
        'darkerdepths:grimestone', 'darkerdepths:grimestone_stairs', 'darkerdepths:grimestone_wall',
        'darkerdepths:polished_grimestone', 'darkerdepths:polished_grimestone_stairs',
        'darkerdepths:grimestone_bricks', 'darkerdepths:grimestone_bricks_stairs', 'darkerdepths:grimestone_bricks_wall',
        'darkerdepths:grimestone_pillar',
        'darkerdepths:chiseled_grimestone_bricks'
    ])
    event.add('kubejs:stone_types/aridrock', [
        'darkerdepths:aridrock', 'darkerdepths:aridrock_stairs', 'darkerdepths:aridrock_wall',
        'darkerdepths:polished_aridrock', 'darkerdepths:polished_aridrock_stairs',
        'darkerdepths:aridrock_bricks', 'darkerdepths:aridrock_bricks_stairs', 'darkerdepths:aridrock_bricks_wall',
        'darkerdepths:aridrock_pillar',
        'darkerdepths:chiseled_aridrock_bricks'
    ])
    event.add('kubejs:stone_types/duskrock', [
        'darkerdepths:duskrock', 'darkerdepths:duskrock_stairs', 'darkerdepths:duskrock_wall',
        'darkerdepths:polished_duskrock', 'darkerdepths:polished_duskrock_stairs',
        'darkerdepths:duskrock_bricks', 'darkerdepths:duskrock_bricks_stairs', 'darkerdepths:duskrock_bricks_wall',
        'darkerdepths:duskrock_pillar',
        'darkerdepths:chiseled_duskrock_bricks'
    ])
    event.add('kubejs:stone_types/darkslate', [
        'darkerdepths:darkslate', 'darkerdepths:darkslate_stairs', 'darkerdepths:darkslate_wall',
        'darkerdepths:polished_darkslate', 'darkerdepths:polished_darkslate_stairs',
        'darkerdepths:darkslate_bricks', 'darkerdepths:darkslate_bricks_stairs', 'darkerdepths:darkslate_bricks_wall',
        'darkerdepths:darkslate_pillar',
        'darkerdepths:chiseled_darkslate_bricks'
    ])
    event.add('kubejs:stone_types/brimstone', [
        'biomesoplenty:brimstone',
        'biomesoplenty:brimstone_bricks', 'biomesoplenty:brimstone_brick_stairs', 'biomesoplenty:brimstone_brick_wall',
        'biomesoplenty:chiseled_brimstone_bricks'
    ])
    event.add('kubejs:stone_types/blood_coral', [
        'abyssal_decor:rough_blood_coral',
        'abyssal_decor:polished_blood_coral', 'abyssal_decor:polished_blood_coral_stairs', 'abyssal_decor:polished_blood_coral_wall',
        'abyssal_decor:blood_coral_bricks',
        'abyssal_decor:blood_coral_pillar'
    ])
    event.add('kubejs:stone_types/jade', [
        'abyssal_decor:rough_jade',
        'abyssal_decor:polished_jade',
        'abyssal_decor:jade_bricks', 'abyssal_decor:jade_brick_stairs', 'abyssal_decor:jade_brick_wall',
        'abyssal_decor:jade_pillar'
    ])
    event.add('kubejs:stone_types/abyssmarine', [
        'alexscaves:abyssmarine',
        'alexscaves:abyssmarine_stairs', 'alexscaves:abyssmarine_wall', 'alexscaves:abyssmarine_bricks',
        'alexscaves:abyssmarine_brick_stairs', 'alexscaves:abyssmarine_brick_wall', 'alexscaves:abyssmarine_pillar',
        'alexscaves:abyssmarine_tiles'
    ])
    event.add('kubejs:stone_types/guanostone', [
        'alexscaves:guanostone', 'alexscaves:guanostone_stairs',
        'alexscaves:guanostone_bricks', 'alexscaves:guanostone_brick_stairs', 'alexscaves:guanostone_brick_wall',
        'alexscaves:guanostone_chiseled',
        'alexscaves:guanostone_tiles'
    ])
    event.add('kubejs:stone_types/bricks', [
        'minecraft:bricks',
        'minecraft:brick_stairs', 'minecraft:brick_wall', 'cinchsmissingblocks:chiseled_bricks',
        'clayworks:chiseled_bricks', 'createdeco:short_red_bricks', 'createdeco:short_red_brick_stairs',
        'createdeco:short_red_brick_wall', 'createdeco:tiled_red_bricks', 'createdeco:tiled_red_brick_stairs',
        'createdeco:tiled_red_brick_wall', 'createdeco:long_red_bricks', 'createdeco:long_red_brick_stairs',
        'createdeco:long_red_brick_wall', 'createdeco:corner_red_bricks', 'createdeco:corner_red_brick_stairs',
        'createdeco:corner_red_brick_wall'
    ])
    event.add('kubejs:stone_types/blue_bricks', [
        'createdeco:blue_bricks',
        'createdeco:blue_brick_stairs', 'createdeco:blue_brick_wall',
        'createdeco:short_blue_bricks', 'createdeco:short_blue_brick_stairs', 'createdeco:corner_blue_brick_wall',
        'createdeco:short_blue_brick_wall', 'createdeco:tiled_blue_bricks', 'createdeco:tiled_blue_brick_stairs',
        'createdeco:tiled_blue_brick_wall', 'createdeco:long_blue_bricks', 'createdeco:long_blue_brick_stairs',
        'createdeco:long_blue_brick_wall', 'createdeco:corner_blue_bricks', 'createdeco:corner_blue_brick_stairs',
    ])
    event.add('kubejs:stone_types/pearl_bricks', [
        'createdeco:pearl_bricks',
        'createdeco:pearl_brick_stairs', 'createdeco:pearl_brick_wall',
        'createdeco:short_pearl_bricks', 'createdeco:short_pearl_brick_stairs', 'createdeco:corner_pearl_brick_wall',
        'createdeco:short_pearl_brick_wall', 'createdeco:tiled_pearl_bricks', 'createdeco:tiled_pearl_brick_stairs',
        'createdeco:tiled_pearl_brick_wall', 'createdeco:long_pearl_bricks', 'createdeco:long_pearl_brick_stairs',
        'createdeco:long_pearl_brick_wall', 'createdeco:corner_pearl_bricks', 'createdeco:corner_pearl_brick_stairs',
    ])
    event.add('kubejs:stone_types/dean_bricks', [
        'createdeco:dean_bricks',
        'createdeco:dean_brick_stairs', 'createdeco:dean_brick_wall',
        'createdeco:short_dean_bricks', 'createdeco:short_dean_brick_stairs', 'createdeco:corner_dean_brick_wall',
        'createdeco:short_dean_brick_wall', 'createdeco:tiled_dean_bricks', 'createdeco:tiled_dean_brick_stairs',
        'createdeco:tiled_dean_brick_wall', 'createdeco:long_dean_bricks', 'createdeco:long_dean_brick_stairs',
        'createdeco:long_dean_brick_wall', 'createdeco:corner_dean_bricks', 'createdeco:corner_dean_brick_stairs',
    ])
    event.add('kubejs:stone_types/scarlet_bricks', [
        'createdeco:scarlet_bricks',
        'createdeco:scarlet_brick_stairs', 'createdeco:scarlet_brick_wall',
        'createdeco:short_scarlet_bricks', 'createdeco:short_scarlet_brick_stairs', 'createdeco:corner_scarlet_brick_wall',
        'createdeco:short_scarlet_brick_wall', 'createdeco:tiled_scarlet_bricks', 'createdeco:tiled_scarlet_brick_stairs',
        'createdeco:tiled_scarlet_brick_wall', 'createdeco:long_scarlet_bricks', 'createdeco:long_scarlet_brick_stairs',
        'createdeco:long_scarlet_brick_wall', 'createdeco:corner_scarlet_bricks', 'createdeco:corner_scarlet_brick_stairs',
    ])
    event.add('kubejs:stone_types/verdant_bricks', [
        'createdeco:verdant_bricks',
        'createdeco:verdant_brick_stairs', 'createdeco:verdant_brick_wall',
        'createdeco:short_verdant_bricks', 'createdeco:short_verdant_brick_stairs', 'createdeco:corner_verdant_brick_wall',
        'createdeco:short_verdant_brick_wall', 'createdeco:tiled_verdant_bricks', 'createdeco:tiled_verdant_brick_stairs',
        'createdeco:tiled_verdant_brick_wall', 'createdeco:long_verdant_bricks', 'createdeco:long_verdant_brick_stairs',
        'createdeco:long_verdant_brick_wall', 'createdeco:corner_verdant_bricks', 'createdeco:corner_verdant_brick_stairs',
    ])
    event.add('kubejs:stone_types/umber_bricks', [
        'createdeco:umber_bricks',
        'createdeco:umber_brick_stairs', 'createdeco:umber_brick_wall',
        'createdeco:short_umber_bricks', 'createdeco:short_umber_brick_stairs', 'createdeco:corner_umber_brick_wall',
        'createdeco:short_umber_brick_wall', 'createdeco:tiled_umber_bricks', 'createdeco:tiled_umber_brick_stairs',
        'createdeco:tiled_umber_brick_wall', 'createdeco:long_umber_bricks', 'createdeco:long_umber_brick_stairs',
        'createdeco:long_umber_brick_wall', 'createdeco:corner_umber_bricks', 'createdeco:corner_umber_brick_stairs',
    ])
    event.add('kubejs:stone_types/dusk_bricks', [
        'createdeco:dusk_bricks',
        'createdeco:dusk_brick_stairs', 'createdeco:dusk_brick_wall',
        'createdeco:short_dusk_bricks', 'createdeco:short_dusk_brick_stairs', 'createdeco:corner_dusk_brick_wall',
        'createdeco:short_dusk_brick_wall', 'createdeco:tiled_dusk_bricks', 'createdeco:tiled_dusk_brick_stairs',
        'createdeco:tiled_dusk_brick_wall', 'createdeco:long_dusk_bricks', 'createdeco:long_dusk_brick_stairs',
        'createdeco:long_dusk_brick_wall', 'createdeco:corner_dusk_bricks', 'createdeco:corner_dusk_brick_stairs',
    ])
    event.add('kubejs:stone_types/tan_bricks', [
        'brick_and_mortar:tan_bricks',
        'brick_and_mortar:tan_brick_stairs', 'brick_and_mortar:tan_brick_wall', 'brick_and_mortar:tan_tiles',
        'brick_and_mortar:tan_tile_stairs', 'brick_and_mortar:tan_tile_wall'
    ])
    event.add('kubejs:stone_types/orange_bricks', [
        'brick_and_mortar:orange_bricks',
        'brick_and_mortar:orange_brick_stairs', 'brick_and_mortar:orange_brick_wall', 'brick_and_mortar:orange_tiles',
        'brick_and_mortar:orange_tile_stairs', 'brick_and_mortar:orange_tile_wall'
    ])
    event.add('kubejs:stone_types/brown_bricks', [
        'brick_and_mortar:brown_bricks',
        'brick_and_mortar:brown_brick_stairs', 'brick_and_mortar:brown_brick_wall', 'brick_and_mortar:brown_tiles',
        'brick_and_mortar:brown_tile_stairs', 'brick_and_mortar:brown_tile_wall'
    ])
    event.add('kubejs:stone_types/cream_bricks', [
        'brick_and_mortar:cream_bricks',
        'brick_and_mortar:cream_brick_stairs', 'brick_and_mortar:cream_brick_wall', 'brick_and_mortar:cream_tiles',
        'brick_and_mortar:cream_tile_stairs', 'brick_and_mortar:cream_tile_wall'
    ])
    event.add('kubejs:stone_types/gray_bricks', [
        'brick_and_mortar:gray_bricks',
        'brick_and_mortar:gray_brick_stairs', 'brick_and_mortar:gray_brick_wall', 'brick_and_mortar:gray_tiles',
        'brick_and_mortar:gray_tile_stairs', 'brick_and_mortar:gray_tile_wall'
    ])
    event.add('kubejs:stone_types/blue_bricks2', [
        'brick_and_mortar:blue_bricks',
        'brick_and_mortar:blue_brick_stairs', 'brick_and_mortar:blue_brick_wall', 'brick_and_mortar:blue_tiles',
        'brick_and_mortar:blue_tile_stairs', 'brick_and_mortar:blue_tile_wall'
    ])
    event.add('kubejs:stone_types/black_bricks', [
        'brick_and_mortar:black_bricks',
        'brick_and_mortar:black_brick_stairs', 'brick_and_mortar:black_brick_wall', 'brick_and_mortar:black_tiles',
        'brick_and_mortar:black_tile_stairs', 'brick_and_mortar:black_tile_wall'
    ])
})








ServerEvents.recipes(event => {
    /*
    //consistency
    // cracked
    function cracking(material, type, override_input, override_recipe_id) {
        var input = `${material}_${type}`
        event.smelting(`stoneworks:cracked_${input}`, override_input != undefined ? override_input : `stoneworks:${input}`, 0.1).id(override_recipe_id ? override_recipe_id : `stoneworks:cracked_${input}_from_${material}_stonecutting`)
    }
    cracking('andesite', 'bricks')
    cracking('andesite', 'tiles')
    cracking('basalt', 'bricks')
    cracking('basalt', 'tiles')
    cracking('blackstone', 'tiles')
    cracking('calcite', 'bricks')
    cracking('calcite', 'tiles')
    cracking('dark_prismarine', 'bricks')
    cracking('dark_prismarine', 'tiles')
    cracking('diorite', 'bricks')
    cracking('diorite', 'tiles')
    cracking('end_stone', 'bricks', 'minecraft:end_stone_bricks')
    cracking('end_stone', 'tiles')
    cracking('granite', 'bricks')
    cracking('granite', 'tiles')
    cracking('netherrack', 'bricks')
    cracking('prismarine', 'bricks')
    cracking('prismarine', 'tiles')
    cracking('purpur', 'bricks', undefined, 'stoneworks:cracked_purpur_bricks_from_purpur_block_stonecutting')
    cracking('purpur', 'tiles', undefined, 'stoneworks:cracked_purpur_bricks_from_purpur_block_stonecutting')
    cracking('quartz', 'bricks', 'minecraft:quartz_bricks', 'stoneworks:cracked_quartz_bricks_from_quartz_block_stonecutting')
    cracking('quartz', 'tiles', undefined, 'stoneworks:cracked_quartz_tiles_from_quartz_block_stonecutting')
    cracking('red_sandstone', 'bricks')
    cracking('red_sandstone', 'tiles')
    cracking('sandstone', 'bricks')
    cracking('sandstone', 'tiles')
    cracking('stone', 'tiles')
    cracking('tuff', 'bricks', 'minecraft:tuff_bricks')
    cracking('tuff', 'tiles')

    // mossy
    event.remove([
        { id: 'minecraft:mossy_cobblestone_from_vine' },
        { id: 'biomesoplenty:mossy_cobblestone_from_willow_vine' },
        { id: 'minecraft:mossy_stone_bricks_from_vine' },
        { id: 'biomesoplenty:mossy_stone_bricks_from_willow_vine' },
        { id: 'aether:mossy_holystone_with_vine' },
        { id: 'deep_aether:mossy_holystone_from_aether_moss' },
        { id: 'deep_aether:mossy_holystone_bricks_from_vines' },
        { id: 'deep_aether:mossy_holystone_bricks_from_aether_moss' },
        { id: 'deep_aether:mossy_holystone_tiles_from_vines' },
        { id: 'deep_aether:mossy_holystone_tiles_from_aether_moss' }
    ])
    function mossy(output, input, recipe_id, aether) {
        switch (recipe_id) {
            case ('minecraft'): {
                recipe_id = `${output}_from_moss_block`
                break
            }
            case ('aether'): {
                recipe_id = `${output}_with_moss`
                break
            }
            case ('deep_aether'): {
                recipe_id = `${output}_from_moss`
                break
            }
        }
        event.shapeless(output, [input, aether ? ['moss_block', 'deep_aether:aether_moss_block', 'vine', 'biomesoplenty:willow_vine'] : ['moss_block', 'vine', 'biomesoplenty:willow_vine']]).id(recipe_id)
    }
    mossy('minecraft:mossy_cobblestone', 'minecraft:cobblestone', 'minecraft')
    mossy('minecraft:mossy_stone_bricks', 'minecraft:stone_bricks', 'minecraft')
    mossy('aether:mossy_holystone', 'aether:holystone', 'aether', true)
    mossy('deep_aether:mossy_holystone_bricks', 'aether:holystone_bricks', 'deep_aether', true)
    mossy('deep_aether:mossy_holystone_tiles', 'deep_aether:holystone_tiles', 'deep_aether', true)
    mossy('twilightforest:mossy_etched_nagastone', 'twilightforest:etched_nagastone', 'twilightforest:nagastone/mossy_etched_nagastone')
    mossy('twilightforest:mossy_nagastone_pillar', 'twilightforest:nagastone_pillar', 'twilightforest:nagastone/mossy_nagastone_pillar')
    mossy('twilightforest:mossy_mazestone', 'twilightforest:mazestone_brick', 'twilightforest:maze_stone/mossy_mazestone')
    mossy('twilightforest:mossy_underbrick', 'twilightforest:underbrick', 'twilightforest:mossy_underbrick')
    mossy('twilightforest:mossy_towerwood', 'twilightforest:towerwood', 'twilightforest:wood/mossy_towerwood')
    mossy('twilightforest:mossy_castle_brick', 'twilightforest:castle_brick', 'twilightforest:castleblock/mossy_castle_brick')
    //TODO (stoneworks moss, mossy stone_types)
*/
    function replaceStonecutterInput(match, type, override_prefix) {
        event.replaceInput({ type: 'minecraft:stonecutting', input: match }, match, `#${override_prefix ? override_prefix : 'kubejs'}:stone_types/${type}`)

    }


    //stone
    replaceStonecutterInput(['minecraft:stone', 'minecraft:stone_bricks', 'supplementaries:stone_tile'], 'stone', 'dndecor')
    event.remove([
        { id: 'minecraft:stone_brick_stairs_from_stone_bricks_stonecutting' },
        { id: 'minecraft:stone_brick_slab_from_stone_bricks_stonecutting' },
        { id: 'minecraft:stone_brick_wall_from_stone_bricks_stonecutting' },
        { id: 'minecraft:chiseled_stone_bricks_from_stone_bricks_stonecutting' },
        { id: 'cinchsmissingblocks:stone_brick_pillar_from_stone_bricks_stonecutting' },

        { output: 'cinchsmissingblocks:stone_wall' }
    ])


    //granite
    replaceStonecutterInput('minecraft:granite', 'granite', 'create')
    event.remove([
        { id: 'minecraft:polished_granite_stairs_from_polished_granite_stonecutting' },
        { id: 'minecraft:polished_granite_slab_from_polished_granite_stonecutting' },
        { id: 'caverns_and_chasms:polished_granite_wall_from_polished_granite_stonecutting' },

        { output: 'cinchsmissingblocks:polished_granite_wall' }
    ])


    //diorite
    replaceStonecutterInput('minecraft:diorite', 'diorite', 'create')
    event.remove([
        { id: 'minecraft:polished_diorite_stairs_from_polished_diorite_stonecutting' },
        { id: 'minecraft:polished_diorite_slab_from_polished_diorite_stonecutting' },
        { id: 'caverns_and_chasms:polished_diorite_wall_from_polished_diorite_stonecutting' },

        { output: 'cinchsmissingblocks:polished_diorite_wall' }
    ])


    //andesite
    replaceStonecutterInput('minecraft:andesite', 'andesite', 'create')
    event.remove([
        { id: 'minecraft:polished_andesite_stairs_from_polished_andesite_stonecutting' },
        { id: 'minecraft:polished_andesite_slab_from_polished_andesite_stonecutting' },
        { id: 'caverns_and_chasms:polished_andesite_wall_from_polished_andesite_stonecutting' },

        { output: 'cinchsmissingblocks:polished_andesite_wall' }
    ])


    //calcite
    replaceStonecutterInput('minecraft:calcite', 'calcite', 'create')
    event.remove([


        { output: 'quark:calcite_stairs' },
        { output: 'quark:calcite_slab' },
        { output: 'quark:calcite_wall' },
        { output: 'cinchsmissingblocks:calcite_stairs' },
        { output: 'cinchsmissingblocks:calcite_slab' },
        { output: 'cinchsmissingblocks:calcite_wall' },
    ])


    //dripstone
    replaceStonecutterInput('minecraft:dripstone_block', 'dripstone', 'create')
    event.remove([


        { output: 'quark:dripstone_block_stairs' },
        { output: 'quark:dripstone_block_slab' },
        { output: 'quark:dripstone_block_wall' },
        { output: 'cinchsmissingblocks:dripstone_stairs' },
        { output: 'cinchsmissingblocks:dripstone_slab' },
        { output: 'cinchsmissingblocks:dripstone_wall' },
    ])


    //tuff
    replaceStonecutterInput('minecraft:tuff', 'tuff', 'create')
    event.remove([
        { id: 'bits_n_bobs:tuff_from_stone_types_tuff_stonecutting' },
        { id: 'caverns_and_chasms:polished_tuff_stairs_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:polished_tuff_slab_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:polished_tuff_wall_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:tuff_bricks_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:tuff_brick_stairs_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:tuff_brick_slab_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:tuff_brick_wall_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_tuff_bricks_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:tuff_pillar_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:tuff_tiles_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:tuff_tile_stairs_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:tuff_tile_slab_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:tuff_tile_wall_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:tuff_brick_stairs_from_tuff_bricks_stonecutting' },
        { id: 'caverns_and_chasms:tuff_brick_slab_from_tuff_bricks_stonecutting' },
        { id: 'caverns_and_chasms:tuff_brick_wall_from_tuff_bricks_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_tuff_bricks_from_tuff_bricks_stonecutting' },
        { id: 'caverns_and_chasms:tuff_pillar_from_tuff_bricks_stonecutting' },
        { id: 'caverns_and_chasms:tuff_tiles_from_tuff_bricks_stonecutting' },
        { id: 'caverns_and_chasms:tuff_tile_stairs_from_tuff_bricks_stonecutting' },
        { id: 'caverns_and_chasms:tuff_tile_slab_from_tuff_bricks_stonecutting' },
        { id: 'caverns_and_chasms:tuff_tile_wall_from_tuff_bricks_stonecutting' },
        { id: 'caverns_and_chasms:tuff_tile_stairs_from_tuff_tiles_stonecutting' },
        { id: 'caverns_and_chasms:tuff_tile_slab_from_tuff_tiles_stonecutting' },
        { id: 'caverns_and_chasms:tuff_tile_wall_from_tuff_tiles_stonecutting' }
    ])


    //deepslate
    replaceStonecutterInput('minecraft:deepslate', 'deepslate', 'create')
    event.remove([
        { id: 'minecraft:polished_deepslate_stairs_from_polished_deepslate_stonecutting' },
        { id: 'minecraft:polished_deepslate_slab_from_polished_deepslate_stonecutting' },
        { id: 'minecraft:polished_deepslate_wall_from_polished_deepslate_stonecutting' },
        { id: 'minecraft:deepslate_bricks_from_polished_deepslate_stonecutting' },
        { id: 'minecraft:deepslate_brick_stairs_from_polished_deepslate_stonecutting' },
        { id: 'minecraft:deepslate_brick_slab_from_polished_deepslate_stonecutting' },
        { id: 'minecraft:deepslate_brick_wall_from_polished_deepslate_stonecutting' },
        { id: 'cinchsmissingblocks:chiseled_deepslate_from_polished_deepslate_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_deepslate_from_polished_deepslate_stonecutting' },
        { id: 'minecraft:deepslate_tiles_from_polished_deepslate_stonecutting' },
        { id: 'minecraft:deepslate_tile_stairs_from_polished_deepslate_stonecutting' },
        { id: 'minecraft:deepslate_tile_slab_from_polished_deepslate_stonecutting' },
        { id: 'minecraft:deepslate_tile_wall_from_polished_deepslate_stonecutting' },
        { id: 'cinchsmissingblocks:deepslate_brick_pillar_from_polished_deepslate_stonecutting' },
        { id: 'minecraft:deepslate_brick_stairs_from_deepslate_bricks_stonecutting' },
        { id: 'minecraft:deepslate_brick_slab_from_deepslate_bricks_stonecutting' },
        { id: 'minecraft:deepslate_brick_wall_from_deepslate_bricks_stonecutting' },
        { id: 'cinchsmissingblocks:chiseled_deepslate_from_deepslate_bricks_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_deepslate_from_deepslate_bricks_stonecutting' },
        { id: 'minecraft:deepslate_tiles_from_deepslate_bricks_stonecutting' },
        { id: 'minecraft:deepslate_tile_stairs_from_deepslate_bricks_stonecutting' },
        { id: 'minecraft:deepslate_tile_slab_from_deepslate_bricks_stonecutting' },
        { id: 'minecraft:deepslate_tile_wall_from_deepslate_bricks_stonecutting' },
        { id: 'cinchsmissingblocks:deepslate_brick_pillar_from_deepslate_bricks_stonecutting' },
        { id: 'minecraft:deepslate_tile_stairs_from_deepslate_tiles_stonecutting' },
        { id: 'minecraft:deepslate_tile_slab_from_deepslate_tiles_stonecutting' },
        { id: 'minecraft:deepslate_tile_wall_from_deepslate_tiles_stonecutting' },

        { output: 'cinchsmissingblocks:deepslate_stairs' },
        { output: 'cinchsmissingblocks:deepslate_slab' },
        { output: 'cinchsmissingblocks:deepslate_wall' },
    ])


    //netherrack
    replaceStonecutterInput('minecraft:netherrack', 'netherrack', 'dndecor')


    //basalt
    replaceStonecutterInput('minecraft:basalt', 'basalt', 'dndecor')
    event.remove([
        { id: 'caverns_and_chasms:basalt_bricks_from_polished_basalt_stonecutting' },
        { id: 'caverns_and_chasms:basalt_brick_stairs_from_polished_basalt_stonecutting' },
        { id: 'caverns_and_chasms:basalt_brick_slab_from_polished_basalt_stonecutting' },
        { id: 'caverns_and_chasms:basalt_brick_wall_from_polished_basalt_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_basalt_bricks_from_polished_basalt_stonecutting' },
        { id: 'caverns_and_chasms:basalt_tiles_from_polished_basalt_stonecutting' },
        { id: 'caverns_and_chasms:basalt_tile_stairs_from_polished_basalt_stonecutting' },
        { id: 'caverns_and_chasms:basalt_tile_slab_from_polished_basalt_stonecutting' },
        { id: 'caverns_and_chasms:basalt_tile_wall_from_polished_basalt_stonecutting' },
        { id: 'caverns_and_chasms:basalt_brick_stairs_from_basalt_bricks_stonecutting' },
        { id: 'caverns_and_chasms:basalt_brick_slab_from_basalt_bricks_stonecutting' },
        { id: 'caverns_and_chasms:basalt_brick_wall_from_basalt_bricks_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_basalt_bricks_from_basalt_bricks_stonecutting' },
        { id: 'caverns_and_chasms:basalt_tiles_from_basalt_bricks_stonecutting' },
        { id: 'caverns_and_chasms:basalt_tile_stairs_from_basalt_bricks_stonecutting' },
        { id: 'caverns_and_chasms:basalt_tile_slab_from_basalt_bricks_stonecutting' },
        { id: 'caverns_and_chasms:basalt_tile_wall_from_basalt_bricks_stonecutting' },
        { id: 'caverns_and_chasms:basalt_tile_stairs_from_basalt_tiles_stonecutting' },
        { id: 'caverns_and_chasms:basalt_tile_slab_from_basalt_tiles_stonecutting' },
        { id: 'caverns_and_chasms:basalt_tile_wall_from_basalt_tiles_stonecutting' }
    ])


    //blackstone
    replaceStonecutterInput(['minecraft:blackstone', 'minecraft:polished_blackstone_bricks', 'supplementaries:blackstone_tile'], 'blackstone', 'dndecor')
    event.remove([
        { id: 'minecraft:chiseled_polished_blackstone_from_polished_blackstone_stonecutting' },
        { id: 'minecraft:polished_blackstone_stairs_from_polished_blackstone_stonecutting' },
        { id: 'minecraft:polished_blackstone_slab_from_polished_blackstone_stonecutting' },
        { id: 'minecraft:polished_blackstone_wall_from_polished_blackstone_stonecutting' },
        { id: 'minecraft:polished_blackstone_bricks_from_polished_blackstone_stonecutting' },
        { id: 'minecraft:polished_blackstone_brick_stairs_from_polished_blackstone_stonecutting' },
        { id: 'minecraft:polished_blackstone_brick_slab_from_polished_blackstone_stonecutting' },
        { id: 'minecraft:polished_blackstone_brick_wall_from_polished_blackstone_stonecutting' },
        { id: 'cinchsmissingblocks:blackstone_brick_pillar_from_polished_blackstone_stonecutting' },
        { id: 'minecraft:polished_blackstone_brick_stairs_from_polished_blackstone_bricks_stonecutting' },
        { id: 'minecraft:polished_blackstone_brick_slab_from_polished_blackstone_bricks_stonecutting' },
        { id: 'minecraft:polished_blackstone_brick_wall_from_polished_blackstone_bricks_stonecutting' },
        { id: 'cinchsmissingblocks:blackstone_brick_pillar_from_polished_blackstone_bricks_stonecutting' }
    ])


    //amethyst
    replaceStonecutterInput('minecraft:amethyst_block', 'amethyst', 'dndecor')
    event.remove([
        { id: 'caverns_and_chasms:cut_amethyst_bricks_from_cut_amethyst_stonecutting' },
        { id: 'caverns_and_chasms:cut_amethyst_brick_stairs_from_cut_amethyst_stonecutting' },
        { id: 'caverns_and_chasms:cut_amethyst_brick_slab_from_cut_amethyst_stonecutting' },
        { id: 'caverns_and_chasms:cut_amethyst_brick_wall_from_cut_amethyst_stonecutting' },
        { id: 'caverns_and_chasms:cut_amethyst_brick_stairs_from_cut_amethyst_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cut_amethyst_brick_slab_from_cut_amethyst_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cut_amethyst_brick_wall_from_cut_amethyst_bricks_stonecutting' }
    ])


    //packed_mud
    event.stonecutting('minecraft:mud_bricks', '#dndecor:stone_types/packed_mud').id('kubejs:stonecutting/mud_bricks')
    replaceStonecutterInput(['minecraft:mud_bricks', 'minecraft:packed_mud'], 'packed_mud', 'dndecor')

    /*
        //prismarine
        event.stonecutting('prismarine', '#kubejs:stone_types/prismarine').id('kubejs:stonecutting/prismarine')
        event.stonecutting('prismarine_bricks', '#kubejs:stone_types/prismarine').id('kubejs:stonecutting/prismarine_bricks_from_stone_types_prismarine')
        event.replaceInput({ type: 'minecraft:stonecutting' }, 'prismarine', '#kubejs:stone_types/prismarine')
        event.replaceInput({ type: 'minecraft:stonecutting' }, 'prismarine_bricks', '#kubejs:stone_types/prismarine')
    
        // adjusting prices
        event.shaped('4x prismarine_bricks', [
            'ii',
            'ii'
        ], {
            i: 'prismarine'
        }).id('minecraft:prismarine_bricks')
        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
                {
                    item: 'minecraft:prismarine'
                }
            ],
            result: [
                {
                    item: {
                        count: 4,
                        id: 'minecraft:prismarine_shard'
                    }
                }
            ],
            tool: {
                type: 'farmersdelight:item_ability',
                action: 'pickaxe_dig'
            }
        }).id('kubejs:farmersdelight_cutting/prismarine_shard_from_block')
    
    
        //dark_prismarine
        event.stonecutting('dark_prismarine', '#kubejs:stone_types/dark_prismarine').id('kubejs:stonecutting/dark_prismarine')
        event.replaceInput({ type: 'minecraft:stonecutting' }, 'dark_prismarine', '#kubejs:stone_types/dark_prismarine')
    
        // adjusting prices
        event.shaped('8x dark_prismarine', [
            'PPP',
            'PbP',
            'PPP'
        ], {
            P: 'prismarine',
            b: '#c:dyes/black'
        }).id('minecraft:dark_prismarine')
        */

    //glance
    event.stonecutting('oreganized:glance', '#oreganized:stone_types/glance').id('kubejs:stonecutting/glance')
    replaceStonecutterInput('oreganized:glance', 'glance', 'oreganized')
    event.remove([
        { id: 'oreganized:stonecutting/polished_glance_stairs' },
        { id: 'oreganized:stonecutting/polished_glance_slab' },
        { id: 'oreganized:stonecutting/glance_bricks_from_polished' },
        { id: 'oreganized:stonecutting/glance_brick_stairs_from_polished' },
        { id: 'oreganized:stonecutting/glance_brick_slab_from_polished' },
        { id: 'oreganized:stonecutting/glance_brick_wall_from_polished' },
        { id: 'oreganized:stonecutting/glance_brick_stairs' },
        { id: 'oreganized:stonecutting/glance_brick_slab' },
        { id: 'oreganized:stonecutting/glance_brick_wall' }
    ])


    //rough limestone
    event.stonecutting('quark:limestone', '#kubejs:stone_types/rough_limestone').id('kubejs:stonecutting/rough_limestone')
    replaceStonecutterInput('quark:limestone', 'rough_limestone')
    event.remove([
        { id: 'quark:building/stonecutting/stonevariants/limestone_bricks_stairs_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/limestone_bricks_slab_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/limestone_bricks_wall_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/limestone_bricks_polished_stonecutting' },
        { id: 'quark:world/stonecutting/stairs/polished_limestone_stairs_stonecutter' },
        { id: 'quark:world/stonecutting/slabs/polished_limestone_slab_stonecutter' },
        { id: 'quark:world/stonecutting/stairs/limestone_bricks_stairs_stonecutter' },
        { id: 'quark:world/stonecutting/slabs/limestone_bricks_slab_stonecutter' },
        { id: 'quark:world/stonecutting/walls/limestone_bricks_wall_stonecutter' }
    ])


    //primordial limestone
    event.stonecutting('alexscaves:limestone', '#kubejs:stone_types/primordial_limestone').id('kubejs:stonecutting/primordial_limestone')
    replaceStonecutterInput('alexscaves:limestone', 'primordial_limestone')


    //magnetic galena
    event.stonecutting('alexscaves:galena', '#kubejs:stone_types/magnetic_galena').id('kubejs:stonecutting/magnetic_galena')
    replaceStonecutterInput('alexscaves:galena', 'magnetic_galena')
    event.remove([
        { id: 'alexscaves:stonecutter/galena_brick_stairs_stonecutting' },
        { id: 'alexscaves:stonecutter/galena_brick_slab_stonecutting' },
        { id: 'alexscaves:stonecutter/galena_brick_wall_stonecutting' }
    ])


    //cobblestone
    event.stonecutting('minecraft:cobblestone', '#kubejs:stone_types/cobblestone').id('kubejs:stonecutting/cobblestone')
    replaceStonecutterInput(['minecraft:cobblestone', 'quark:cobblestone_bricks'], 'cobblestone')
    event.remove([
        { id: 'caverns_and_chasms:cobblestone_brick_stairs_from_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cobblestone_brick_slab_from_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cobblestone_brick_wall_from_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cobblestone_tiles_from_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cobblestone_tile_stairs_from_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cobblestone_tile_slab_from_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cobblestone_tile_wall_from_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cobblestone_tile_stairs_from_cobblestone_tiles_stonecutting' },
        { id: 'caverns_and_chasms:cobblestone_tile_slab_from_cobblestone_tiles_stonecutting' },
        { id: 'caverns_and_chasms:cobblestone_tile_wall_from_cobblestone_tiles_stonecutting' }
    ])


    //mossy cobblestone
    event.stonecutting('minecraft:mossy_cobblestone', '#kubejs:stone_types/mossy_cobblestone').id('kubejs:stonecutting/mossy_cobblestone')
    replaceStonecutterInput(['minecraft:mossy_cobblestone', 'quark:mossy_cobblestone_bricks'], 'mossy_cobblestone')
    event.remove([
        { id: 'caverns_and_chasms:mossy_cobblestone_brick_stairs_from_mossy_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:mossy_cobblestone_brick_slab_from_mossy_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:mossy_cobblestone_brick_wall_from_mossy_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:mossy_cobblestone_tiles_from_mossy_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:mossy_cobblestone_tile_stairs_from_mossy_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:mossy_cobblestone_tile_slab_from_mossy_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:mossy_cobblestone_tile_wall_from_mossy_cobblestone_bricks_stonecutting' },
        { id: 'caverns_and_chasms:mossy_cobblestone_tile_stairs_from_mossy_cobblestone_tiles_stonecutting' },
        { id: 'caverns_and_chasms:mossy_cobblestone_tile_slab_from_mossy_cobblestone_tiles_stonecutting' },
        { id: 'caverns_and_chasms:mossy_cobblestone_tile_wall_from_mossy_cobblestone_tiles_stonecutting' }
    ])


    //mossy cobblestone
    event.stonecutting('upgrade_aquatic:kelpy_cobblestone', '#kubejs:stone_types/kelpy_cobblestone').id('kubejs:stonecutting/kelpy_cobblestone')
    replaceStonecutterInput('upgrade_aquatic:kelpy_cobblestone', 'kelpy_cobblestone')
    event.remove([
        { id: 'upgrade_aquatic:kelpy_cobblestone_brick_stairs_from_kelpy_cobblestone_bricks_stonecutting' },
        { id: 'upgrade_aquatic:kelpy_cobblestone_brick_slab_from_kelpy_cobblestone_bricks_stonecutting' },
        { id: 'upgrade_aquatic:kelpy_cobblestone_brick_wall_from_kelpy_cobblestone_bricks_stonecutting' },
        { id: 'upgrade_aquatic:kelpy_cobblestone_tiles_from_kelpy_cobblestone_bricks_stonecutting' },
        { id: 'upgrade_aquatic:kelpy_cobblestone_tile_stairs_from_kelpy_cobblestone_bricks_stonecutting' },
        { id: 'upgrade_aquatic:kelpy_cobblestone_tile_slab_from_kelpy_cobblestone_bricks_stonecutting' },
        { id: 'upgrade_aquatic:kelpy_cobblestone_tile_wall_from_kelpy_cobblestone_bricks_stonecutting' },
        { id: 'upgrade_aquatic:kelpy_cobblestone_tile_stairs_from_kelpy_cobblestone_tiles_stonecutting' },
        { id: 'upgrade_aquatic:kelpy_cobblestone_tile_slab_from_kelpy_cobblestone_tiles_stonecutting' },
        { id: 'upgrade_aquatic:kelpy_cobblestone_tile_wall_from_kelpy_cobblestone_tiles_stonecutting' }
    ])


    //smooth stone
    event.stonecutting('minecraft:smooth_stone', '#kubejs:stone_types/smooth_stone').id('kubejs:stonecutting/smooth_stone')
    replaceStonecutterInput('minecraft:smooth_stone', 'smooth_stone')


    //schist
    event.stonecutting('caverns_and_chasms:schist', '#kubejs:stone_types/schist').id('kubejs:stonecutting/schist')
    replaceStonecutterInput('caverns_and_chasms:schist', 'schist')
    event.remove([
        { id: 'minecraft:polished_tuff_stairs_from_polished_tuff_stonecutting' },
        { id: 'minecraft:polished_tuff_slab_from_polished_tuff_stonecutting' },
        { id: 'minecraft:polished_tuff_wall_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_tuff_from_polished_tuff_stonecutting' },
        { id: 'cinchsmissingblocks:chiseled_tuff_from_polished_tuff_stonecutting' },
        { id: 'minecraft:tuff_bricks_from_polished_tuff_stonecutting' },
        { id: 'minecraft:tuff_brick_stairs_from_polished_tuff_stonecutting' },
        { id: 'minecraft:tuff_brick_slab_from_polished_tuff_stonecutting' },
        { id: 'minecraft:tuff_brick_wall_from_polished_tuff_stonecutting' },
        { id: 'minecraft:chiseled_tuff_bricks_from_polished_tuff_stonecutting' },
        { id: 'caverns_and_chasms:schist_pillar_from_polished_tuff_stonecutting' },
        { id: 'cinchsmissingblocks:chiseled_tuff_from_tuff_bricks_stonecutting' },
        { id: 'minecraft:tuff_brick_stairs_from_tuff_bricks_stonecutting' },
        { id: 'minecraft:tuff_brick_slab_from_tuff_bricks_stonecutting' },
        { id: 'minecraft:tuff_brick_wall_from_tuff_bricks_stonecutting' },
        { id: 'minecraft:chiseled_tuff_bricks_from_tuff_bricks_stonecutting' },
        { id: 'caverns_and_chasms:schist_pillar_from_tuff_bricks_stonecutting' }
    ])


    //sugilite
    event.stonecutting('caverns_and_chasms:sugilite', '#kubejs:stone_types/sugilite').id('kubejs:stonecutting/sugilite')
    replaceStonecutterInput('caverns_and_chasms:sugilite', 'sugilite')
    event.remove([
        { id: 'caverns_and_chasms:polished_sugilite_stairs_from_polished_sugilite_stonecutting' },
        { id: 'caverns_and_chasms:polished_sugilite_slab_from_polished_sugilite_stonecutting' },
        { id: 'caverns_and_chasms:polished_sugilite_wall_from_polished_sugilite_stonecutting' },
        { id: 'caverns_and_chasms:sugilite_bricks_from_polished_sugilite_stonecutting' },
        { id: 'caverns_and_chasms:sugilite_brick_stairs_from_polished_sugilite_stonecutting' },
        { id: 'caverns_and_chasms:sugilite_brick_slab_from_polished_sugilite_stonecutting' },
        { id: 'caverns_and_chasms:sugilite_brick_wall_from_polished_sugilite_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_sugilite_bricks_from_polished_sugilite_stonecutting' },
        { id: 'caverns_and_chasms:sugilite_pillar_from_polished_sugilite_stonecutting' },
        { id: 'caverns_and_chasms:sugilite_brick_stairs_from_sugilite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:sugilite_brick_slab_from_sugilite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:sugilite_brick_wall_from_sugilite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_sugilite_bricks_from_sugilite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:sugilite_pillar_from_sugilite_bricks_stonecutting' }
    ])


    //cylindrite
    event.stonecutting('caverns_and_chasms:cylindrite', '#kubejs:stone_types/cylindrite').id('kubejs:stonecutting/cylindrite')
    replaceStonecutterInput('caverns_and_chasms:cylindrite', 'cylindrite')
    event.remove([
        { id: 'caverns_and_chasms:polished_cylindrite_stairs_from_polished_cylindrite_stonecutting' },
        { id: 'caverns_and_chasms:polished_cylindrite_slab_from_polished_cylindrite_stonecutting' },
        { id: 'caverns_and_chasms:polished_cylindrite_wall_from_polished_cylindrite_stonecutting' },
        { id: 'caverns_and_chasms:cylindrite_bricks_from_polished_cylindrite_stonecutting' },
        { id: 'caverns_and_chasms:cylindrite_brick_stairs_from_polished_cylindrite_stonecutting' },
        { id: 'caverns_and_chasms:cylindrite_brick_slab_from_polished_cylindrite_stonecutting' },
        { id: 'caverns_and_chasms:cylindrite_brick_wall_from_polished_cylindrite_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_cylindrite_bricks_from_polished_cylindrite_stonecutting' },
        { id: 'caverns_and_chasms:cylindrite_pillar_from_polished_cylindrite_stonecutting' },
        { id: 'caverns_and_chasms:cylindrite_brick_stairs_from_cylindrite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cylindrite_brick_slab_from_cylindrite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cylindrite_brick_wall_from_cylindrite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_cylindrite_bricks_from_cylindrite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cylindrite_pillar_from_cylindrite_bricks_stonecutting' }
    ])


    //cassiterite
    event.stonecutting('caverns_and_chasms:cassiterite', '#kubejs:stone_types/cassiterite').id('kubejs:stonecutting/cassiterite')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'caverns_and_chasms:cassiterite', '#kubejs:stone_types/cassiterite')
    event.remove([
        { id: 'caverns_and_chasms:polished_cassiterite_stairs_from_polished_cassiterite_stonecutting' },
        { id: 'caverns_and_chasms:polished_cassiterite_slab_from_polished_cassiterite_stonecutting' },
        { id: 'caverns_and_chasms:polished_cassiterite_wall_from_polished_cassiterite_stonecutting' },
        { id: 'caverns_and_chasms:cassiterite_bricks_from_polished_cassiterite_stonecutting' },
        { id: 'caverns_and_chasms:cassiterite_brick_stairs_from_polished_cassiterite_stonecutting' },
        { id: 'caverns_and_chasms:cassiterite_brick_slab_from_polished_cassiterite_stonecutting' },
        { id: 'caverns_and_chasms:cassiterite_brick_wall_from_polished_cassiterite_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_cassiterite_bricks_from_polished_cassiterite_stonecutting' },
        { id: 'caverns_and_chasms:cassiterite_pillar_from_polished_cassiterite_stonecutting' },
        { id: 'caverns_and_chasms:cassiterite_brick_stairs_from_cassiterite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cassiterite_brick_slab_from_cassiterite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cassiterite_brick_wall_from_cassiterite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_cassiterite_bricks_from_cassiterite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:cassiterite_pillar_from_cassiterite_bricks_stonecutting' }
    ])


    //rhyolite
    event.stonecutting('caverns_and_chasms:rhyolite', '#kubejs:stone_types/rhyolite').id('kubejs:stonecutting/rhyolite')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'caverns_and_chasms:rhyolite', '#kubejs:stone_types/rhyolite')
    event.remove([
        { id: 'caverns_and_chasms:polished_rhyolite_stairs_from_polished_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:polished_rhyolite_slab_from_polished_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:polished_rhyolite_wall_from_polished_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:rhyolite_bricks_from_polished_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:rhyolite_brick_stairs_from_polished_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:rhyolite_brick_slab_from_polished_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:rhyolite_brick_wall_from_polished_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_rhyolite_bricks_from_polished_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:rhyolite_brick_stairs_from_rhyolite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:rhyolite_brick_slab_from_rhyolite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:rhyolite_brick_wall_from_rhyolite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_rhyolite_bricks_from_rhyolite_bricks_stonecutting' }
    ])


    //magmatic rhyolite
    event.stonecutting('caverns_and_chasms:magmatic_rhyolite', '#kubejs:stone_types/magmatic_rhyolite').id('kubejs:stonecutting/magmatic_rhyolite')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'caverns_and_chasms:magmatic_rhyolite', '#kubejs:stone_types/magmatic_rhyolite')
    event.remove([
        { id: 'caverns_and_chasms:polished_magmatic_rhyolite_stairs_from_polished_magmatic_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:polished_magmatic_rhyolite_slab_from_polished_magmatic_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:polished_magmatic_rhyolite_wall_from_polished_magmatic_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:magmatic_rhyolite_bricks_from_polished_magmatic_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:magmatic_rhyolite_brick_stairs_from_polished_magmatic_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:magmatic_rhyolite_brick_slab_from_polished_magmatic_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:magmatic_rhyolite_brick_wall_from_polished_magmatic_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_magmatic_rhyolite_bricks_from_polished_magmatic_rhyolite_stonecutting' },
        { id: 'caverns_and_chasms:magmatic_rhyolite_brick_stairs_from_magmatic_rhyolite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:magmatic_rhyolite_brick_slab_from_magmatic_rhyolite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:magmatic_rhyolite_brick_wall_from_magmatic_rhyolite_bricks_stonecutting' },
        { id: 'caverns_and_chasms:chiseled_magmatic_rhyolite_bricks_from_magmatic_rhyolite_bricks_stonecutting' }
    ])


    //jasper
    event.stonecutting('quark:jasper', '#kubejs:stone_types/jasper').id('kubejs:stonecutting/jasper')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'quark:jasper', '#kubejs:stone_types/jasper')
    event.remove([
        { id: 'quark:world/stonecutting/stairs/polished_jasper_stairs_stonecutter' },
        { id: 'quark:world/stonecutting/slabs/polished_jasper_slab_stonecutter' },
        { id: 'quark:building/stonecutting/stonevariants/jasper_bricks_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/jasper_bricks_stairs_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/jasper_bricks_slab_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/jasper_bricks_wall_polished_stonecutting' },
        { id: 'quark:world/stonecutting/stairs/jasper_bricks_stairs_stonecutter' },
        { id: 'quark:world/stonecutting/slabs/jasper_bricks_slab_stonecutter' },
        { id: 'quark:world/stonecutting/walls/jasper_bricks_wall_stonecutter' }
    ])


    //shale
    event.stonecutting('quark:shale', '#kubejs:stone_types/shale').id('kubejs:stonecutting/shale')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'quark:shale', '#kubejs:stone_types/shale')
    event.remove([
        { id: 'quark:world/stonecutting/stairs/polished_shale_stairs_stonecutter' },
        { id: 'quark:world/stonecutting/slabs/polished_shale_slab_stonecutter' },
        { id: 'quark:building/stonecutting/stonevariants/shale_bricks_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/shale_bricks_stairs_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/shale_bricks_slab_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/shale_bricks_wall_polished_stonecutting' },
        { id: 'quark:world/stonecutting/stairs/shale_bricks_stairs_stonecutter' },
        { id: 'quark:world/stonecutting/slabs/shale_bricks_slab_stonecutter' },
        { id: 'quark:world/stonecutting/walls/shale_bricks_wall_stonecutter' }
    ])


    //myalite
    event.stonecutting('quark:myalite', '#kubejs:stone_types/myalite').id('kubejs:stonecutting/myalite')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'quark:myalite', '#kubejs:stone_types/myalite')
    event.remove([
        { id: 'quark:world/stonecutting/stairs/polished_myalite_stairs_stonecutter' },
        { id: 'quark:world/stonecutting/slabs/polished_myalite_slab_stonecutter' },
        { id: 'quark:building/stonecutting/stonevariants/myalite_bricks_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/myalite_bricks_stairs_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/myalite_bricks_slab_polished_stonecutting' },
        { id: 'quark:building/stonecutting/stonevariants/myalite_bricks_wall_polished_stonecutting' },
        { id: 'quark:world/stonecutting/stairs/myalite_bricks_stairs_stonecutter' },
        { id: 'quark:world/stonecutting/slabs/myalite_bricks_slab_stonecutter' },
        { id: 'quark:world/stonecutting/walls/myalite_bricks_wall_stonecutter' }
    ])


    //permafrost
    event.stonecutting('quark:permafrost', '#kubejs:stone_types/permafrost').id('kubejs:stonecutting/permafrost')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'quark:permafrost', '#kubejs:stone_types/permafrost')
    event.remove([
        { id: 'quark:world/stonecutting/stairs/permafrost_bricks_stairs_stonecutter' },
        { id: 'quark:world/stonecutting/slabs/permafrost_bricks_slab_stonecutter' },
        { id: 'quark:world/stonecutting/walls/permafrost_bricks_wall_stonecutter' }
    ])


    //ivory travertine
    event.stonecutting('atmospheric:ivory_travertine', '#kubejs:stone_types/ivory_travertine').id('kubejs:stonecutting/ivory_travertine')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'atmospheric:ivory_travertine', '#kubejs:stone_types/ivory_travertine')
    event.remove([
        { id: 'atmospheric:chiseled_ivory_travertine_from_cut_ivory_travertine_stonecutting' },
        { id: 'atmospheric:ivory_travertine_stairs_from_cut_ivory_travertine_stonecutting' },
        { id: 'atmospheric:ivory_travertine_slab_from_cut_ivory_travertine_stonecutting' },
        { id: 'atmospheric:ivory_travertine_wall_from_cut_ivory_travertine_stonecutting' }
    ])


    //peach travertine
    event.stonecutting('atmospheric:peach_travertine', '#kubejs:stone_types/peach_travertine').id('kubejs:stonecutting/peach_travertine')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'atmospheric:peach_travertine', '#kubejs:stone_types/peach_travertine')
    event.remove([
        { id: 'atmospheric:chiseled_peach_travertine_from_cut_peach_travertine_stonecutting' },
        { id: 'atmospheric:peach_travertine_stairs_from_cut_peach_travertine_stonecutting' },
        { id: 'atmospheric:peach_travertine_slab_from_cut_peach_travertine_stonecutting' },
        { id: 'atmospheric:peach_travertine_wall_from_cut_peach_travertine_stonecutting' }
    ])


    //persimmon travertine
    event.stonecutting('atmospheric:persimmon_travertine', '#kubejs:stone_types/persimmon_travertine').id('kubejs:stonecutting/persimmon_travertine')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'atmospheric:persimmon_travertine', '#kubejs:stone_types/persimmon_travertine')
    event.remove([
        { id: 'atmospheric:chiseled_persimmon_travertine_from_cut_persimmon_travertine_stonecutting' },
        { id: 'atmospheric:persimmon_travertine_stairs_from_cut_persimmon_travertine_stonecutting' },
        { id: 'atmospheric:persimmon_travertine_slab_from_cut_persimmon_travertine_stonecutting' },
        { id: 'atmospheric:persimmon_travertine_wall_from_cut_persimmon_travertine_stonecutting' }
    ])


    //saffron travertine
    event.stonecutting('atmospheric:saffron_travertine', '#kubejs:stone_types/saffron_travertine').id('kubejs:stonecutting/saffron_travertine')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'atmospheric:saffron_travertine', '#kubejs:stone_types/saffron_travertine')
    event.remove([
        { id: 'atmospheric:chiseled_saffron_travertine_from_cut_saffron_travertine_stonecutting' },
        { id: 'atmospheric:saffron_travertine_stairs_from_cut_saffron_travertine_stonecutting' },
        { id: 'atmospheric:saffron_travertine_slab_from_cut_saffron_travertine_stonecutting' },
        { id: 'atmospheric:saffron_travertine_wall_from_cut_saffron_travertine_stonecutting' }
    ])


    //holystone
    event.stonecutting('aether:holystone', '#kubejs:stone_types/holystone').id('kubejs:stonecutting/holystone')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'aether:holystone', '#kubejs:stone_types/holystone')
    event.remove([
        { id: 'aether_beyond_parity:polished_holystone_stairs_from_polished_holystone_stonecutting' },
        { id: 'aether_beyond_parity:polished_holystone_slab_from_polished_holystone_stonecutting' },
        { id: 'aether_beyond_parity:polished_holystone_wall_from_polished_holystone_stonecutting' },
        { id: 'aether_beyond_parity:holystone_bricks_from_polished_holystone_stonecutting' },
        { id: 'aether_beyond_parity:holystone_brick_stairs_from_polished_holystone_stonecutting' },
        { id: 'aether_beyond_parity:holystone_brick_slab_from_polished_holystone_stonecutting' },
        { id: 'aether_beyond_parity:holystone_brick_wall_from_polished_holystone_stonecutting' },
        { id: 'aether_beyond_parity:chiseled_holystone_bricks_from_polished_holystone_stonecutting' },
        { id: 'aether_beyond_parity:holystone_headstone_from_polished_holystone_stonecutting' },
        { id: 'aether_beyond_parity:holystone_highlight_from_polished_holystone_stonecutting' },
        { id: 'aether_beyond_parity:holystone_keystone_from_polished_holystone_stonecutting' },
        { id: 'aether:holystone_brick_stairs_from_holystone_bricks_stonecutting' },
        { id: 'aether:holystone_brick_slab_from_holystone_bricks_stonecutting' },
        { id: 'aether:holystone_brick_wall_from_holystone_bricks_stonecutting' },
        { id: 'deep_aether:holystone_tiles_from_holystone_bricks_stonecutting' },
        { id: 'deep_aether:holystone_tile_stairs_from_holystone_bricks_stonecutting' },
        { id: 'deep_aether:holystone_tile_slab_from_holystone_bricks_stonecutting' },
        { id: 'deep_aether:holystone_tile_wall_from_holystone_bricks_stonecutting' },
        { id: 'deep_aether:big_holystone_bricks_from_holystone_bricks_stonecutting' },
        { id: 'deep_aether:big_holystone_bricks_stairs_from_holystone_bricks_stonecutting' },
        { id: 'deep_aether:big_holystone_bricks_slab_from_holystone_bricks_stonecutting' },
        { id: 'deep_aether:big_holystone_bricks_wall_from_holystone_bricks_stonecutting' },
        { id: 'aether_beyond_parity:chiseled_holystone_bricks_from_holystone_bricks_stonecutting' },
        { id: 'aether_beyond_parity:holystone_headstone_from_holystone_bricks_stonecutting' },
        { id: 'aether_beyond_parity:holystone_highlight_from_holystone_bricks_stonecutting' },
        { id: 'aether_beyond_parity:holystone_keystone_from_holystone_bricks_stonecutting' },
        { id: 'deep_aether:holystone_tile_stairs_from_holystone_tiles_stonecutting' },
        { id: 'deep_aether:holystone_tile_slab_from_holystone_tiles_stonecutting' },
        { id: 'deep_aether:holystone_tile_wall_from_holystone_tiles_stonecutting' },
        { id: 'deep_aether:big_holystone_bricks_from_holystone_tiles_stonecutting' },
        { id: 'deep_aether:big_holystone_bricks_stairs_from_holystone_tiles_stonecutting' },
        { id: 'deep_aether:big_holystone_bricks_slab_from_holystone_tiles_stonecutting' },
        { id: 'deep_aether:big_holystone_bricks_wall_from_holystone_tiles_stonecutting' },
        { id: 'deep_aether:big_holystone_bricks_stairs_from_big_holystone_bricks_stonecutting' },
        { id: 'deep_aether:big_holystone_bricks_slab_from_big_holystone_bricks_stonecutting' },
        { id: 'deep_aether:big_holystone_bricks_wall_from_big_holystone_bricks_stonecutting' }
    ])


    //mossy holystone
    event.stonecutting('aether:mossy_holystone', '#kubejs:stone_types/mossy_holystone').id('kubejs:stonecutting/mossy_holystone')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'aether:mossy_holystone', '#kubejs:stone_types/mossy_holystone')
    event.remove([
        { id: 'deep_aether:mossy_holystone_brick_stairs_from_mossy_holystone_bricks_stonecutting' },
        { id: 'deep_aether:mossy_holystone_brick_slab_from_mossy_holystone_bricks_stonecutting' },
        { id: 'deep_aether:mossy_holystone_brick_wall_from_mossy_holystone_bricks_stonecutting' },
        { id: 'deep_aether:mossy_holystone_tiles_from_mossy_holystone_bricks_stonecutting' },
        { id: 'deep_aether:mossy_holystone_tile_stairs_from_mossy_holystone_bricks_stonecutting' },
        { id: 'deep_aether:mossy_holystone_tile_slab_from_mossy_holystone_bricks_stonecutting' },
        { id: 'deep_aether:mossy_holystone_tile_wall_from_mossy_holystone_bricks_stonecutting' },
        { id: 'deep_aether:mossy_holystone_tile_stairs_from_mossy_holystone_tiles_stonecutting' },
        { id: 'deep_aether:mossy_holystone_tile_slab_from_mossy_holystone_tiles_stonecutting' },
        { id: 'deep_aether:mossy_holystone_tile_wall_from_mossy_holystone_tiles_stonecutting' }
    ])


    //chalk
    event.stonecutting('regions_unexplored:chalk', '#kubejs:stone_types/chalk').id('kubejs:stonecutting/chalk')
    event.replaceInput({ type: 'minecraft:stonecutting' }, ['regions_unexplored:chalk', 'regions_unexplored:polished_chalk', 'regions_unexplored:chalk_bricks'], '#kubejs:stone_types/chalk')
    event.remove([
        { id: 'regions_unexplored:chalk_bricks_from_polished_chalk_stonecutting' },
        { id: 'regions_unexplored:chalk_pillar_from_polished_chalk_stonecutting' },
        { id: 'regions_unexplored:chalk_pillar_from_chalk_bricks_stonecutting' },
        { id: 'regions_unexplored:polished_chalk_from_chalk_bricks_stonecutting' },
        { id: 'regions_unexplored:chalk_bricks_from_chalk_pillar_stonecutting' },
        { id: 'regions_unexplored:polished_chalk_from_chalk_pillar_stonecutting' },
        { id: 'regions_unexplored:chalk_bricks_from_chalk_grass_block_stonecutting' },
        { id: 'regions_unexplored:chalk_pillar_from_chalk_grass_block_stonecutting' },
        { id: 'regions_unexplored:polished_chalk_from_chalk_grass_block_stonecutting' }
    ])


    //radrock
    event.stonecutting('alexscaves:radrock', '#kubejs:stone_types/radrock').id('kubejs:stonecutting/radrock')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'alexscaves:radrock', '#kubejs:stone_types/radrock')
    event.remove([
        { id: 'alexscaves:stonecutter/radrock_brick_stairs_stonecutting' },
        { id: 'alexscaves:stonecutter/radrock_brick_slab_stonecutting' },
        { id: 'alexscaves:stonecutter/radrock_brick_wall_stonecutting' },
        { id: 'alexscaves:stonecutter/radrock_chiseled_from_radrock_bricks_stonecutting' }
    ])


    //dirt
    event.stonecutting('minecraft:dirt', '#kubejs:stone_types/dirt').id('kubejs:stonecutting/dirt')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'minecraft:dirt', '#kubejs:stone_types/dirt')
    event.remove([
        { id: 'environmental:dirt_brick_stairs_from_dirt_bricks_stonecutting' },
        { id: 'environmental:dirt_brick_slab_from_dirt_bricks_stonecutting' },
        { id: 'environmental:dirt_brick_wall_from_dirt_bricks_stonecutting' },
        { id: 'environmental:dirt_tile_stairs_from_dirt_bricks_stonecutting' },
        { id: 'environmental:dirt_tiles_from_dirt_bricks_stonecutting' },
        { id: 'environmental:dirt_tile_slab_from_dirt_bricks_stonecutting' },
        { id: 'environmental:dirt_tile_wall_from_dirt_bricks_stonecutting' },
        { id: 'environmental:dirt_tile_stairs_from_dirt_tiles_stonecutting' },
        { id: 'environmental:dirt_tile_slab_from_dirt_tiles_stonecutting' },
        { id: 'environmental:dirt_tile_wall_from_dirt_tiles_stonecutting' }
    ])


    //honeycomb
    event.stonecutting('minecraft:honeycomb_block', '#kubejs:stone_types/honeycomb').id('kubejs:stonecutting/honeycomb')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'minecraft:honeycomb_block', '#kubejs:stone_types/honeycomb')


    //rock salt
    event.stonecutting('spelunkery:rock_salt_block', '#kubejs:stone_types/rock_salt').id('kubejs:stonecutting/rock_salt')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'spelunkery:rock_salt_block', '#kubejs:stone_types/rock_salt')
    event.remove([
        { id: 'spelunkery:polished_rock_salt_stairs_from_polished_stonecutting' },
        { id: 'spelunkery:polished_rock_salt_slab_from_polished_stonecutting' },
        { id: 'spelunkery:polished_rock_salt_wall_from_polished_stonecutting' },
        { id: 'spelunkery:rock_salt_bricks_from_polished_stonecutting' },
        { id: 'spelunkery:rock_salt_brick_slab_from_polished_stonecutting' },
        { id: 'spelunkery:rock_salt_brick_stairs_from_polished_stonecutting' },
        { id: 'spelunkery:rock_salt_brick_wall_from_polished_stonecutting' },
        { id: 'spelunkery:rock_salt_brick_slab_from_brick_stonecutting' },
        { id: 'spelunkery:rock_salt_brick_stairs_from_brick_stonecutting' },
        { id: 'spelunkery:rock_salt_brick_wall_from_brick_stonecutting' },
    ])


    //grimestone
    event.stonecutting('darkerdepths:grimestone', '#kubejs:stone_types/grimestone').id('kubejs:stonecutting/grimestone')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'darkerdepths:grimestone', '#kubejs:stone_types/grimestone')
    event.remove([
        { id: 'darkerdepths:polished_grimestone_stairs_from_polished_grimestone_stonecutting' },
        { id: 'darkerdepths:polished_grimestone_slab_from_polished_grimestone_stonecutting' },
        { id: 'darkerdepths:grimestone_bricks_from_polished_grimestone_stonecutting' },
        { id: 'darkerdepths:grimestone_bricks_stairs_from_polished_grimestone_stonecutting' },
        { id: 'darkerdepths:grimestone_bricks_slab_from_polished_grimestone_stonecutting' },
        { id: 'darkerdepths:grimestone_bricks_wall_from_polished_grimestone_stonecutting' },
        { id: 'darkerdepths:chiseled_grimestone_bricks_from_polished_grimestone_stonecutting' },
        { id: 'darkerdepths:grimestone_pillar_from_polished_grimestone_stonecutting' },
        { id: 'darkerdepths:grimestone_bricks_stairs_from_grimestone_bricks_stonecutting' },
        { id: 'darkerdepths:grimestone_bricks_slab_from_grimestone_bricks_stonecutting' },
        { id: 'darkerdepths:grimestone_bricks_wall_from_grimestone_bricks_stonecutting' },
        { id: 'darkerdepths:chiseled_grimestone_bricks_from_grimestone_bricks_stonecutting' },
    ])


    //aridrock
    event.stonecutting('darkerdepths:aridrock', '#kubejs:stone_types/aridrock').id('kubejs:stonecutting/aridrock')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'darkerdepths:aridrock', '#kubejs:stone_types/aridrock')
    event.remove([
        { id: 'darkerdepths:polished_aridrock_stairs_from_polished_aridrock_stonecutting' },
        { id: 'darkerdepths:polished_aridrock_slab_from_polished_aridrock_stonecutting' },
        { id: 'darkerdepths:aridrock_bricks_from_polished_aridrock_stonecutting' },
        { id: 'darkerdepths:aridrock_bricks_stairs_from_polished_aridrock_stonecutting' },
        { id: 'darkerdepths:aridrock_bricks_slab_from_polished_aridrock_stonecutting' },
        { id: 'darkerdepths:aridrock_bricks_wall_from_polished_aridrock_stonecutting' },
        { id: 'darkerdepths:chiseled_aridrock_bricks_from_polished_aridrock_stonecutting' },
        { id: 'darkerdepths:aridrock_pillar_from_polished_aridrock_stonecutting' },
        { id: 'darkerdepths:aridrock_bricks_stairs_from_aridrock_bricks_stonecutting' },
        { id: 'darkerdepths:aridrock_bricks_slab_from_aridrock_bricks_stonecutting' },
        { id: 'darkerdepths:aridrock_bricks_wall_from_aridrock_bricks_stonecutting' },
        { id: 'darkerdepths:chiseled_aridrock_bricks_from_aridrock_bricks_stonecutting' },
    ])


    //duskrock
    event.stonecutting('darkerdepths:duskrock', '#kubejs:stone_types/duskrock').id('kubejs:stonecutting/duskrock')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'darkerdepths:duskrock', '#kubejs:stone_types/duskrock')
    event.remove([
        { id: 'darkerdepths:polished_duskrock_stairs_from_polished_duskrock_stonecutting' },
        { id: 'darkerdepths:polished_duskrock_slab_from_polished_duskrock_stonecutting' },
        { id: 'darkerdepths:duskrock_bricks_from_polished_duskrock_stonecutting' },
        { id: 'darkerdepths:duskrock_bricks_stairs_from_polished_duskrock_stonecutting' },
        { id: 'darkerdepths:duskrock_bricks_slab_from_polished_duskrock_stonecutting' },
        { id: 'darkerdepths:duskrock_bricks_wall_from_polished_duskrock_stonecutting' },
        { id: 'darkerdepths:chiseled_duskrock_bricks_from_polished_duskrock_stonecutting' },
        { id: 'darkerdepths:duskrock_pillar_from_polished_duskrock_stonecutting' },
        { id: 'darkerdepths:duskrock_bricks_stairs_from_duskrock_bricks_stonecutting' },
        { id: 'darkerdepths:duskrock_bricks_slab_from_duskrock_bricks_stonecutting' },
        { id: 'darkerdepths:duskrock_bricks_wall_from_duskrock_bricks_stonecutting' },
        { id: 'darkerdepths:chiseled_duskrock_bricks_from_duskrock_bricks_stonecutting' },
    ])


    //darkslate
    event.stonecutting('darkerdepths:darkslate', '#kubejs:stone_types/darkslate').id('kubejs:stonecutting/darkslate')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'darkerdepths:darkslate', '#kubejs:stone_types/darkslate')
    event.remove([
        { id: 'darkerdepths:polished_darkslate_stairs_from_polished_darkslate_stonecutting' },
        { id: 'darkerdepths:polished_darkslate_slab_from_polished_darkslate_stonecutting' },
        { id: 'darkerdepths:darkslate_bricks_from_polished_darkslate_stonecutting' },
        { id: 'darkerdepths:darkslate_bricks_stairs_from_polished_darkslate_stonecutting' },
        { id: 'darkerdepths:darkslate_bricks_slab_from_polished_darkslate_stonecutting' },
        { id: 'darkerdepths:darkslate_bricks_wall_from_polished_darkslate_stonecutting' },
        { id: 'darkerdepths:chiseled_darkslate_bricks_from_polished_darkslate_stonecutting' },
        { id: 'darkerdepths:darkslate_pillar_from_polished_darkslate_stonecutting' },
        { id: 'darkerdepths:darkslate_bricks_stairs_from_darkslate_bricks_stonecutting' },
        { id: 'darkerdepths:darkslate_bricks_slab_from_darkslate_bricks_stonecutting' },
        { id: 'darkerdepths:darkslate_bricks_wall_from_darkslate_bricks_stonecutting' },
        { id: 'darkerdepths:chiseled_darkslate_bricks_from_darkslate_bricks_stonecutting' },
    ])


    //brimmy with the stimmy
    event.stonecutting('biomesoplenty:brimstone', '#kubejs:stone_types/brimstone').id('kubejs:stonecutting/brimstone')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'biomesoplenty:brimstone', '#kubejs:stone_types/brimstone')
    event.remove([
        { id: 'biomesoplenty:brimstone_brick_stairs_from_brimstone_bricks_stonecutting' },
        { id: 'biomesoplenty:brimstone_brick_slab_from_brimstone_bricks_stonecutting' },
        { id: 'biomesoplenty:brimstone_brick_wall_from_brimstone_bricks_stonecutting' },
        { id: 'biomesoplenty:chiseled_brimstone_bricks_from_brimstone_bricks_stonecutting' }
    ])


    //blood coral
    event.stonecutting('abyssal_decor:rough_blood_coral', '#kubejs:stone_types/blood_coral').id('kubejs:stonecutting/blood_coral')
    event.replaceInput({ type: 'minecraft:stonecutting' }, ['abyssal_decor:rough_blood_coral', 'abyssal_decor:polished_blood_coral', 'abyssal_decor:blood_coral_bricks'], '#kubejs:stone_types/blood_coral')
    event.remove([
        { id: 'abyssal_decor:smooth_blood_coral_sc' },
    ])


    //jade
    event.stonecutting('abyssal_decor:rough_jade', '#kubejs:stone_types/jade').id('kubejs:stonecutting/jade')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'abyssal_decor:rough_jade', '#kubejs:stone_types/jade')


    //abyssmarine
    event.stonecutting('alexscaves:abyssmarine', '#kubejs:stone_types/abyssmarine').id('kubejs:stonecutting/abyssmarine')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'alexscaves:abyssmarine', '#kubejs:stone_types/abyssmarine')
    event.remove([
        { id: 'alexscaves:stonecutter/abyssmarine_brick_stairs_stonecutting' },
        { id: 'alexscaves:stonecutter/abyssmarine_brick_slab_stonecutting' },
        { id: 'alexscaves:stonecutter/abyssmarine_brick_wall_stonecutting' },
        { id: 'alexscaves:stonecutter/abyssmarine_tiles_from_abyssmarine_bricks_stonecutting' },
    ])


    //guanostone
    event.stonecutting('alexscaves:guanostone', '#kubejs:stone_types/guanostone').id('kubeks:stonecutting/guanostone')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'alexscaves:guanostone', '#kubejs:stone_types/guanostone')
    event.remove([
        { id: 'alexscaves:stonecutter/guanostone_brick_stairs_stonecutting' },
        { id: 'alexscaves:stonecutter/guanostone_brick_slab_stonecutting' },
        { id: 'alexscaves:stonecutter/guanostone_brick_wall_stonecutting' },
        { id: 'alexscaves:stonecutter/guanostone_chiseled_from_guanostone_bricks_stonecutting' },
        { id: 'alexscaves:stonecutter/guanostone_tiles_from_guanostone_bricks_stonecutting' },
    ])


    //BRICK
    event.stonecutting('minecraft:bricks', '#kubejs:stone_types/bricks').id('kubejs:stonecutting/bricks')
    event.stonecutting('brick_and_mortar:brick_tiles', '#kubejs:stone_types/bricks').id('kubejs:stonecutting/brick_tiles')
    replaceStonecutterInput(['minecraft:bricks', 'brick_and_mortar:brick_tiles'], 'bricks')
    event.remove([
        { id: 'createdeco:tiled_red_brick_wall_from_short_red_brick_wall_stonecutting' },
        { id: 'createdeco:long_red_brick_wall_from_short_red_brick_wall_stonecutting' },
        { id: 'createdeco:corner_red_brick_wall_from_short_red_brick_wall_stonecutting' },
        { id: 'createdeco:short_red_brick_wall_from_tiled_red_brick_wall_stonecutting' },
        { id: 'createdeco:long_red_brick_wall_from_tiled_red_brick_wall_stonecutting' },
        { id: 'createdeco:corner_red_brick_wall_from_tiled_red_brick_wall_stonecutting' },
        { id: 'createdeco:short_red_brick_wall_from_long_red_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_red_brick_wall_from_long_red_brick_wall_stonecutting' },
        { id: 'createdeco:corner_red_brick_wall_from_long_red_brick_wall_stonecutting' },
        { id: 'createdeco:short_red_brick_wall_from_corner_red_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_red_brick_wall_from_corner_red_brick_wall_stonecutting' },
        { id: 'createdeco:long_red_brick_wall_from_corner_red_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_red_brick_stairs_from_short_red_brick_stairs_stonecutting' },
        { id: 'createdeco:long_red_brick_stairs_from_short_red_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_red_brick_stairs_from_short_red_brick_stairs_stonecutting' },
        { id: 'createdeco:short_red_brick_stairs_from_tiled_red_brick_stairs_stonecutting' },
        { id: 'createdeco:long_red_brick_stairs_from_tiled_red_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_red_brick_stairs_from_tiled_red_brick_stairs_stonecutting' },
        { id: 'createdeco:short_red_brick_stairs_from_long_red_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_red_brick_stairs_from_long_red_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_red_brick_stairs_from_long_red_brick_stairs_stonecutting' },
        { id: 'createdeco:short_red_brick_stairs_from_corner_red_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_red_brick_stairs_from_corner_red_brick_stairs_stonecutting' },
        { id: 'createdeco:long_red_brick_stairs_from_corner_red_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_red_bricks_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_bricks_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_bricks_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_stairs_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_stairs_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_stairs_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_stairs_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_slab_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_slab_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_slab_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_slab_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_wall_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_wall_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_wall_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_wall_from_short_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_bricks_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_bricks_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_bricks_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_stairs_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_stairs_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_stairs_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_stairs_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_slab_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_slab_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_slab_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_slab_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_wall_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_wall_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_wall_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_wall_from_tiled_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_bricks_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_bricks_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_bricks_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_stairs_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_stairs_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_stairs_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_stairs_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_slab_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_slab_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_slab_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_slab_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_wall_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_wall_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_wall_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_wall_from_long_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_bricks_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_bricks_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_bricks_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_stairs_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_stairs_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_stairs_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_stairs_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_slab_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_slab_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_slab_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_slab_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:short_red_brick_wall_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:tiled_red_brick_wall_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:long_red_brick_wall_from_corner_red_bricks_stonecutting' },
        { id: 'createdeco:corner_red_brick_wall_from_corner_red_bricks_stonecutting' },
    ])


    //BLUE BRICK
    event.stonecutting('createdeco:blue_bricks', '#kubejs:stone_types/blue_bricks').id('kubejs:stonecutting/blue_bricks')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'createdeco:blue_bricks', '#kubejs:stone_types/blue_bricks')
    event.remove([
        { id: 'createdeco:tiled_blue_brick_wall_from_short_blue_brick_wall_stonecutting' },
        { id: 'createdeco:long_blue_brick_wall_from_short_blue_brick_wall_stonecutting' },
        { id: 'createdeco:corner_blue_brick_wall_from_short_blue_brick_wall_stonecutting' },
        { id: 'createdeco:short_blue_brick_wall_from_tiled_blue_brick_wall_stonecutting' },
        { id: 'createdeco:long_blue_brick_wall_from_tiled_blue_brick_wall_stonecutting' },
        { id: 'createdeco:corner_blue_brick_wall_from_tiled_blue_brick_wall_stonecutting' },
        { id: 'createdeco:short_blue_brick_wall_from_long_blue_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_wall_from_long_blue_brick_wall_stonecutting' },
        { id: 'createdeco:corner_blue_brick_wall_from_long_blue_brick_wall_stonecutting' },
        { id: 'createdeco:short_blue_brick_wall_from_corner_blue_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_wall_from_corner_blue_brick_wall_stonecutting' },
        { id: 'createdeco:long_blue_brick_wall_from_corner_blue_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_stairs_from_short_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:long_blue_brick_stairs_from_short_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_blue_brick_stairs_from_short_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:short_blue_brick_stairs_from_tiled_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:long_blue_brick_stairs_from_tiled_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_blue_brick_stairs_from_tiled_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:short_blue_brick_stairs_from_long_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_stairs_from_long_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_blue_brick_stairs_from_long_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:short_blue_brick_stairs_from_corner_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_stairs_from_corner_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:long_blue_brick_stairs_from_corner_blue_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_blue_bricks_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_bricks_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_bricks_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_stairs_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_stairs_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_stairs_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_stairs_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_slab_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_slab_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_slab_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_slab_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_wall_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_wall_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_wall_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_wall_from_short_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_bricks_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_bricks_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_bricks_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_stairs_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_stairs_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_stairs_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_stairs_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_slab_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_slab_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_slab_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_slab_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_wall_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_wall_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_wall_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_wall_from_tiled_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_bricks_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_bricks_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_bricks_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_stairs_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_stairs_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_stairs_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_stairs_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_slab_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_slab_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_slab_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_slab_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_wall_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_wall_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_wall_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_wall_from_long_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_bricks_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_bricks_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_bricks_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_stairs_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_stairs_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_stairs_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_stairs_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_slab_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_slab_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_slab_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_slab_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:short_blue_brick_wall_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:tiled_blue_brick_wall_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:long_blue_brick_wall_from_corner_blue_bricks_stonecutting' },
        { id: 'createdeco:corner_blue_brick_wall_from_corner_blue_bricks_stonecutting' },
    ])


    //pearl BRICK
    event.stonecutting('createdeco:pearl_bricks', '#kubejs:stone_types/pearl_bricks').id('kubejs:stonecutting/pearl_bricks')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'createdeco:pearl_bricks', '#kubejs:stone_types/pearl_bricks')
    event.remove([
        { id: 'createdeco:tiled_pearl_brick_wall_from_short_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:long_pearl_brick_wall_from_short_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_wall_from_short_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:short_pearl_brick_wall_from_tiled_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:long_pearl_brick_wall_from_tiled_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_wall_from_tiled_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:short_pearl_brick_wall_from_long_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_wall_from_long_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_wall_from_long_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:short_pearl_brick_wall_from_corner_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_wall_from_corner_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:long_pearl_brick_wall_from_corner_pearl_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_stairs_from_short_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:long_pearl_brick_stairs_from_short_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_stairs_from_short_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:short_pearl_brick_stairs_from_tiled_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:long_pearl_brick_stairs_from_tiled_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_stairs_from_tiled_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:short_pearl_brick_stairs_from_long_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_stairs_from_long_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_stairs_from_long_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:short_pearl_brick_stairs_from_corner_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_stairs_from_corner_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:long_pearl_brick_stairs_from_corner_pearl_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_pearl_bricks_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_bricks_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_bricks_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_stairs_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_stairs_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_stairs_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_stairs_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_slab_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_slab_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_slab_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_slab_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_wall_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_wall_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_wall_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_wall_from_short_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_bricks_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_bricks_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_bricks_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_stairs_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_stairs_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_stairs_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_stairs_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_slab_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_slab_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_slab_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_slab_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_wall_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_wall_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_wall_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_wall_from_tiled_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_bricks_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_bricks_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_bricks_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_stairs_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_stairs_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_stairs_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_stairs_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_slab_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_slab_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_slab_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_slab_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_wall_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_wall_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_wall_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_wall_from_long_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_bricks_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_bricks_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_bricks_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_stairs_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_stairs_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_stairs_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_stairs_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_slab_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_slab_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_slab_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_slab_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:short_pearl_brick_wall_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:tiled_pearl_brick_wall_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:long_pearl_brick_wall_from_corner_pearl_bricks_stonecutting' },
        { id: 'createdeco:corner_pearl_brick_wall_from_corner_pearl_bricks_stonecutting' },
    ])


    //dean BRICK
    event.stonecutting('createdeco:dean_bricks', '#kubejs:stone_types/dean_bricks').id('kubejs:stonecutting/dean_bricks')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'createdeco:dean_bricks', '#kubejs:stone_types/dean_bricks')
    event.remove([
        { id: 'createdeco:tiled_dean_brick_wall_from_short_dean_brick_wall_stonecutting' },
        { id: 'createdeco:long_dean_brick_wall_from_short_dean_brick_wall_stonecutting' },
        { id: 'createdeco:corner_dean_brick_wall_from_short_dean_brick_wall_stonecutting' },
        { id: 'createdeco:short_dean_brick_wall_from_tiled_dean_brick_wall_stonecutting' },
        { id: 'createdeco:long_dean_brick_wall_from_tiled_dean_brick_wall_stonecutting' },
        { id: 'createdeco:corner_dean_brick_wall_from_tiled_dean_brick_wall_stonecutting' },
        { id: 'createdeco:short_dean_brick_wall_from_long_dean_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_wall_from_long_dean_brick_wall_stonecutting' },
        { id: 'createdeco:corner_dean_brick_wall_from_long_dean_brick_wall_stonecutting' },
        { id: 'createdeco:short_dean_brick_wall_from_corner_dean_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_wall_from_corner_dean_brick_wall_stonecutting' },
        { id: 'createdeco:long_dean_brick_wall_from_corner_dean_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_stairs_from_short_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:long_dean_brick_stairs_from_short_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_dean_brick_stairs_from_short_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:short_dean_brick_stairs_from_tiled_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:long_dean_brick_stairs_from_tiled_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_dean_brick_stairs_from_tiled_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:short_dean_brick_stairs_from_long_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_stairs_from_long_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_dean_brick_stairs_from_long_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:short_dean_brick_stairs_from_corner_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_stairs_from_corner_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:long_dean_brick_stairs_from_corner_dean_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_dean_bricks_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_bricks_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_bricks_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_stairs_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_stairs_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_stairs_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_stairs_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_slab_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_slab_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_slab_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_slab_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_wall_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_wall_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_wall_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_wall_from_short_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_bricks_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_bricks_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_bricks_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_stairs_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_stairs_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_stairs_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_stairs_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_slab_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_slab_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_slab_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_slab_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_wall_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_wall_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_wall_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_wall_from_tiled_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_bricks_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_bricks_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_bricks_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_stairs_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_stairs_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_stairs_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_stairs_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_slab_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_slab_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_slab_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_slab_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_wall_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_wall_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_wall_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_wall_from_long_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_bricks_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_bricks_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_bricks_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_stairs_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_stairs_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_stairs_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_stairs_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_slab_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_slab_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_slab_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_slab_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:short_dean_brick_wall_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:tiled_dean_brick_wall_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:long_dean_brick_wall_from_corner_dean_bricks_stonecutting' },
        { id: 'createdeco:corner_dean_brick_wall_from_corner_dean_bricks_stonecutting' },
    ])


    //scarlet BRICK
    event.stonecutting('createdeco:scarlet_bricks', '#kubejs:stone_types/scarlet_bricks').id('kubejs:stonecutting/scarlet_bricks')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'createdeco:scarlet_bricks', '#kubejs:stone_types/scarlet_bricks')
    event.remove([
        { id: 'createdeco:tiled_scarlet_brick_wall_from_short_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_wall_from_short_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_wall_from_short_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_wall_from_tiled_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_wall_from_tiled_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_wall_from_tiled_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_wall_from_long_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_wall_from_long_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_wall_from_long_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_wall_from_corner_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_wall_from_corner_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_wall_from_corner_scarlet_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_stairs_from_short_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_stairs_from_short_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_stairs_from_short_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_stairs_from_tiled_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_stairs_from_tiled_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_stairs_from_tiled_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_stairs_from_long_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_stairs_from_long_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_stairs_from_long_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_stairs_from_corner_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_stairs_from_corner_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_stairs_from_corner_scarlet_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_scarlet_bricks_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_bricks_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_bricks_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_stairs_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_stairs_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_stairs_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_stairs_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_slab_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_slab_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_slab_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_slab_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_wall_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_wall_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_wall_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_wall_from_short_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_bricks_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_bricks_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_bricks_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_stairs_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_stairs_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_stairs_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_stairs_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_slab_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_slab_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_slab_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_slab_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_wall_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_wall_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_wall_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_wall_from_tiled_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_bricks_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_bricks_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_bricks_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_stairs_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_stairs_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_stairs_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_stairs_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_slab_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_slab_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_slab_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_slab_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_wall_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_wall_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_wall_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_wall_from_long_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_bricks_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_bricks_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_bricks_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_stairs_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_stairs_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_stairs_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_stairs_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_slab_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_slab_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_slab_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_slab_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:short_scarlet_brick_wall_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:tiled_scarlet_brick_wall_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:long_scarlet_brick_wall_from_corner_scarlet_bricks_stonecutting' },
        { id: 'createdeco:corner_scarlet_brick_wall_from_corner_scarlet_bricks_stonecutting' },
    ])


    //verdant BRICK
    event.stonecutting('createdeco:verdant_bricks', '#kubejs:stone_types/verdant_bricks').id('kubejs:stonecutting/verdant_bricks')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'createdeco:verdant_bricks', '#kubejs:stone_types/verdant_bricks')
    event.remove([
        { id: 'createdeco:tiled_verdant_brick_wall_from_short_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:long_verdant_brick_wall_from_short_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_wall_from_short_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:short_verdant_brick_wall_from_tiled_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:long_verdant_brick_wall_from_tiled_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_wall_from_tiled_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:short_verdant_brick_wall_from_long_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_wall_from_long_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_wall_from_long_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:short_verdant_brick_wall_from_corner_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_wall_from_corner_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:long_verdant_brick_wall_from_corner_verdant_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_stairs_from_short_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:long_verdant_brick_stairs_from_short_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_stairs_from_short_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:short_verdant_brick_stairs_from_tiled_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:long_verdant_brick_stairs_from_tiled_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_stairs_from_tiled_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:short_verdant_brick_stairs_from_long_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_stairs_from_long_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_stairs_from_long_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:short_verdant_brick_stairs_from_corner_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_stairs_from_corner_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:long_verdant_brick_stairs_from_corner_verdant_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_verdant_bricks_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_bricks_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_bricks_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_stairs_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_stairs_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_stairs_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_stairs_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_slab_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_slab_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_slab_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_slab_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_wall_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_wall_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_wall_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_wall_from_short_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_bricks_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_bricks_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_bricks_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_stairs_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_stairs_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_stairs_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_stairs_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_slab_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_slab_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_slab_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_slab_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_wall_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_wall_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_wall_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_wall_from_tiled_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_bricks_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_bricks_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_bricks_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_stairs_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_stairs_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_stairs_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_stairs_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_slab_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_slab_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_slab_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_slab_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_wall_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_wall_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_wall_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_wall_from_long_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_bricks_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_bricks_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_bricks_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_stairs_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_stairs_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_stairs_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_stairs_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_slab_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_slab_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_slab_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_slab_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:short_verdant_brick_wall_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:tiled_verdant_brick_wall_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:long_verdant_brick_wall_from_corner_verdant_bricks_stonecutting' },
        { id: 'createdeco:corner_verdant_brick_wall_from_corner_verdant_bricks_stonecutting' },
    ])


    //umber BRICK
    event.stonecutting('createdeco:umber_bricks', '#kubejs:stone_types/umber_bricks').id('kubejs:stonecutting/umber_bricks')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'createdeco:umber_bricks', '#kubejs:stone_types/umber_bricks')
    event.remove([
        { id: 'createdeco:tiled_umber_brick_wall_from_short_umber_brick_wall_stonecutting' },
        { id: 'createdeco:long_umber_brick_wall_from_short_umber_brick_wall_stonecutting' },
        { id: 'createdeco:corner_umber_brick_wall_from_short_umber_brick_wall_stonecutting' },
        { id: 'createdeco:short_umber_brick_wall_from_tiled_umber_brick_wall_stonecutting' },
        { id: 'createdeco:long_umber_brick_wall_from_tiled_umber_brick_wall_stonecutting' },
        { id: 'createdeco:corner_umber_brick_wall_from_tiled_umber_brick_wall_stonecutting' },
        { id: 'createdeco:short_umber_brick_wall_from_long_umber_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_wall_from_long_umber_brick_wall_stonecutting' },
        { id: 'createdeco:corner_umber_brick_wall_from_long_umber_brick_wall_stonecutting' },
        { id: 'createdeco:short_umber_brick_wall_from_corner_umber_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_wall_from_corner_umber_brick_wall_stonecutting' },
        { id: 'createdeco:long_umber_brick_wall_from_corner_umber_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_stairs_from_short_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:long_umber_brick_stairs_from_short_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_umber_brick_stairs_from_short_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:short_umber_brick_stairs_from_tiled_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:long_umber_brick_stairs_from_tiled_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_umber_brick_stairs_from_tiled_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:short_umber_brick_stairs_from_long_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_stairs_from_long_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_umber_brick_stairs_from_long_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:short_umber_brick_stairs_from_corner_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_stairs_from_corner_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:long_umber_brick_stairs_from_corner_umber_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_umber_bricks_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_bricks_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_bricks_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_stairs_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_stairs_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_stairs_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_stairs_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_slab_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_slab_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_slab_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_slab_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_wall_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_wall_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_wall_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_wall_from_short_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_bricks_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_bricks_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_bricks_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_stairs_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_stairs_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_stairs_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_stairs_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_slab_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_slab_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_slab_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_slab_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_wall_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_wall_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_wall_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_wall_from_tiled_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_bricks_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_bricks_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_bricks_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_stairs_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_stairs_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_stairs_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_stairs_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_slab_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_slab_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_slab_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_slab_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_wall_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_wall_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_wall_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_wall_from_long_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_bricks_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_bricks_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_bricks_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_stairs_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_stairs_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_stairs_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_stairs_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_slab_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_slab_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_slab_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_slab_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:short_umber_brick_wall_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:tiled_umber_brick_wall_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:long_umber_brick_wall_from_corner_umber_bricks_stonecutting' },
        { id: 'createdeco:corner_umber_brick_wall_from_corner_umber_bricks_stonecutting' },
    ])


    //dusk BRICK
    event.stonecutting('createdeco:dusk_bricks', '#kubejs:stone_types/dusk_bricks').id('kubejs:stonecutting/dusk_bricks')
    event.replaceInput({ type: 'minecraft:stonecutting' }, 'createdeco:dusk_bricks', '#kubejs:stone_types/dusk_bricks')
    event.remove([
        { id: 'createdeco:tiled_dusk_brick_wall_from_short_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:long_dusk_brick_wall_from_short_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_wall_from_short_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:short_dusk_brick_wall_from_tiled_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:long_dusk_brick_wall_from_tiled_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_wall_from_tiled_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:short_dusk_brick_wall_from_long_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_wall_from_long_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_wall_from_long_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:short_dusk_brick_wall_from_corner_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_wall_from_corner_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:long_dusk_brick_wall_from_corner_dusk_brick_wall_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_stairs_from_short_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:long_dusk_brick_stairs_from_short_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_stairs_from_short_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:short_dusk_brick_stairs_from_tiled_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:long_dusk_brick_stairs_from_tiled_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_stairs_from_tiled_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:short_dusk_brick_stairs_from_long_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_stairs_from_long_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_stairs_from_long_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:short_dusk_brick_stairs_from_corner_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_stairs_from_corner_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:long_dusk_brick_stairs_from_corner_dusk_brick_stairs_stonecutting' },
        { id: 'createdeco:tiled_dusk_bricks_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_bricks_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_bricks_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_stairs_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_stairs_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_stairs_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_stairs_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_slab_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_slab_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_slab_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_slab_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_wall_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_wall_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_wall_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_wall_from_short_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_bricks_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_bricks_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_bricks_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_stairs_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_stairs_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_stairs_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_stairs_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_slab_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_slab_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_slab_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_slab_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_wall_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_wall_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_wall_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_wall_from_tiled_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_bricks_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_bricks_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_bricks_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_stairs_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_stairs_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_stairs_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_stairs_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_slab_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_slab_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_slab_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_slab_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_wall_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_wall_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_wall_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_wall_from_long_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_bricks_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_bricks_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_bricks_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_stairs_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_stairs_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_stairs_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_stairs_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_slab_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_slab_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_slab_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_slab_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:short_dusk_brick_wall_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:tiled_dusk_brick_wall_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:long_dusk_brick_wall_from_corner_dusk_bricks_stonecutting' },
        { id: 'createdeco:corner_dusk_brick_wall_from_corner_dusk_bricks_stonecutting' },
    ])


    //TAN BRICK
    event.stonecutting('brick_and_mortar:tan_bricks', '#kubejs:stone_types/tan_bricks').id('kubejs:stonecutting/tan_bricks')
    event.stonecutting('brick_and_mortar:tan_tiles', '#kubejs:stone_types/tan_bricks').id('kubejs:stonecutting/tan_tiles')
    replaceStonecutterInput(['brick_and_mortar:tan_bricks', 'brick_and_mortar:tan_tiles'], 'tan_bricks')


    //orange BRICK
    event.stonecutting('brick_and_mortar:orange_bricks', '#kubejs:stone_types/orange_bricks').id('kubejs:stonecutting/orange_bricks')
    event.stonecutting('brick_and_mortar:orange_tiles', '#kubejs:stone_types/orange_bricks').id('kubejs:stonecutting/orange_tiles')
    replaceStonecutterInput(['brick_and_mortar:orange_bricks', 'brick_and_mortar:orange_tiles'], 'orange_bricks')


    //brown BRICK
    event.stonecutting('brick_and_mortar:brown_bricks', '#kubejs:stone_types/brown_bricks').id('kubejs:stonecutting/brown_bricks')
    event.stonecutting('brick_and_mortar:brown_tiles', '#kubejs:stone_types/brown_bricks').id('kubejs:stonecutting/brown_tiles')
    replaceStonecutterInput(['brick_and_mortar:brown_bricks', 'brick_and_mortar:brown_tiles'], 'brown_bricks')


    //cream BRICK
    event.stonecutting('brick_and_mortar:cream_bricks', '#kubejs:stone_types/cream_bricks').id('kubejs:stonecutting/cream_bricks')
    event.stonecutting('brick_and_mortar:cream_tiles', '#kubejs:stone_types/cream_bricks').id('kubejs:stonecutting/cream_tiles')
    replaceStonecutterInput(['brick_and_mortar:cream_bricks', 'brick_and_mortar:cream_tiles'], 'cream_bricks')


    //gray BRICK
    event.stonecutting('brick_and_mortar:gray_bricks', '#kubejs:stone_types/gray_bricks').id('kubejs:stonecutting/gray_bricks')
    event.stonecutting('brick_and_mortar:gray_tiles', '#kubejs:stone_types/gray_bricks').id('kubejs:stonecutting/gray_tiles')
    replaceStonecutterInput(['brick_and_mortar:gray_bricks', 'brick_and_mortar:gray_tiles'], 'gray_bricks')


    //blue BRICK
    event.stonecutting('brick_and_mortar:blue_bricks', '#kubejs:stone_types/blue_bricks2').id('kubejs:stonecutting/blue_bricks2')
    event.stonecutting('brick_and_mortar:blue_tiles', '#kubejs:stone_types/blue_bricks2').id('kubejs:stonecutting/blue_tiles')
    replaceStonecutterInput(['brick_and_mortar:blue_bricks', 'brick_and_mortar:blue_tiles'], 'blue_bricks2')


    //black BRICK
    event.stonecutting('brick_and_mortar:black_bricks', '#kubejs:stone_types/black_bricks').id('kubejs:stonecutting/black_bricks')
    event.stonecutting('brick_and_mortar:black_tiles', '#kubejs:stone_types/black_bricks').id('kubejs:stonecutting/black_tiles')
    replaceStonecutterInput(['brick_and_mortar:black_bricks', 'brick_and_mortar:black_tiles'], 'black_bricks')
})