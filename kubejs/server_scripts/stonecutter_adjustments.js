ServerEvents.tags('item', event => {
	/*
	done
	"#create:stone_types/granite"
	"#create:stone_types/tuff"
	"#create:stone_types/andesite"
	"#create:stone_types/diorite"
	"#create_d2d:stone_types/packed_mud"
	"#create_d2d:stone_types/blackstone"
	"#create_d2d:stone_types/basalt"
	"#create_d2d:stone_types/stone"
	"#create:stone_types/deepslate"
	"#create:stone_types/calcite"
	"#create_d2d:stone_types/netherrack"

	probably stone zone
	"#create:stone_types/dripstone"
	"#create:stone_types/limestone"
	"#create:stone_types/scoria"
	"#create:stone_types/scorchia"
	"#create:stone_types/asurine"
	"#create:stone_types/crimsite"
	"#create:stone_types/ochrum"
	"#create:stone_types/veridium"
	"#create_d2d:stone_types/amethyst_block"
	"#create_d2d:stone_types/gabbro"
	"#create_d2d:stone_types/breccia"
	"#create_d2d:stone_types/dolomite"
	"#create_d2d:stone_types/weathered_limestone"

	never
	"#create:stone_types/galosphere/allurite"
	"#create:stone_types/galosphere/lumiere"
	"#create:stone_types/galosphere/amethyst"
	*/
	event.add('create_d2d:stone_types/stone', [
		'minecraft:stone_stairs',
		'minecraft:stone_bricks', 'minecraft:stone_brick_stairs', 'minecraft:stone_brick_wall',
		'minecraft:chiseled_stone_bricks',
		'supplementaries:stone_tile', 'supplementaries:stone_tile_stairs', 'supplementaries:stone_tile_wall',
		'stoneworks:stone_tiles', 'stoneworks:stone_tile_stairs', 'stoneworks:stone_tile_wall',
		'stoneworks:stone_shingles', 'stoneworks:stone_shingle_stairs', 'stoneworks:stone_shingle_wall',
		'stoneworks:stone_pavers', 'stoneworks:stone_paver_stairs', 'stoneworks:stone_paver_wall',
		'stoneworks:stone_plates', 'stoneworks:stone_plate_stairs', 'stoneworks:stone_plate_wall',
		'stoneworks:stone_pillar',
		'twilightforest:spiral_bricks',
		'twilightforest:bold_stone_pillar',
		'twilightforest:terrorcotta_arcs',
		'twilightforest:terrorcotta_curves',
		'twilightforest:terrorcotta_lines',
		'twilightforest:twisted_stone',
		'twilightforest:twisted_stone_pillar'
	])
	event.add('create:stone_types/andesite', [
		'minecraft:andesite_stairs', 'minecraft:andesite_wall',
		'minecraft:polished_andesite', 'minecraft:polished_andesite_stairs',
		'stoneworks:cobbled_andesite', 'stoneworks:cobbled_andesite_stairs', 'stoneworks:cobbled_andesite_wall',
		'stoneworks:chiseled_andesite',
		'stoneworks:andesite_bricks', 'stoneworks:andesite_brick_stairs', 'stoneworks:andesite_brick_wall',
		'stoneworks:andesite_tiles', 'stoneworks:andesite_tile_stairs', 'stoneworks:andesite_tile_wall',
		'stoneworks:andesite_shingles', 'stoneworks:andesite_shingle_stairs', 'stoneworks:andesite_shingle_wall',
		'stoneworks:andesite_pavers', 'stoneworks:andesite_paver_stairs', 'stoneworks:andesite_paver_wall',
		'stoneworks:andesite_plates', 'stoneworks:andesite_plate_stairs', 'stoneworks:andesite_plate_wall',
		'stoneworks:andesite_pillar'
	])
	event.add('create:stone_types/diorite', [
		'minecraft:diorite_stairs', 'minecraft:diorite_wall',
		'minecraft:polished_diorite', 'minecraft:polished_diorite_stairs',
		'stoneworks:cobbled_diorite', 'stoneworks:cobbled_diorite_stairs', 'stoneworks:cobbled_diorite_wall',
		'stoneworks:chiseled_diorite',
		'stoneworks:diorite_bricks', 'stoneworks:diorite_brick_stairs', 'stoneworks:diorite_brick_wall',
		'stoneworks:diorite_tiles', 'stoneworks:diorite_tile_stairs', 'stoneworks:diorite_tile_wall',
		'stoneworks:diorite_shingles', 'stoneworks:diorite_shingle_stairs', 'stoneworks:diorite_shingle_wall',
		'stoneworks:diorite_pavers', 'stoneworks:diorite_paver_stairs', 'stoneworks:diorite_paver_wall',
		'stoneworks:diorite_plates', 'stoneworks:diorite_plate_stairs', 'stoneworks:diorite_plate_wall',
		'stoneworks:diorite_pillar'
	])
	event.add('create:stone_types/granite', [
		'minecraft:granite_stairs', 'minecraft:granite_wall',
		'minecraft:polished_granite', 'minecraft:polished_granite_stairs',
		'stoneworks:cobbled_granite', 'stoneworks:cobbled_granite_stairs', 'stoneworks:cobbled_granite_wall',
		'stoneworks:chiseled_granite',
		'stoneworks:granite_bricks', 'stoneworks:granite_brick_stairs', 'stoneworks:granite_brick_wall',
		'stoneworks:granite_tiles', 'stoneworks:granite_tile_stairs', 'stoneworks:granite_tile_wall',
		'stoneworks:granite_shingles', 'stoneworks:granite_shingle_stairs', 'stoneworks:granite_shingle_wall',
		'stoneworks:granite_pavers', 'stoneworks:granite_paver_stairs', 'stoneworks:granite_paver_wall',
		'stoneworks:granite_plates', 'stoneworks:granite_plate_stairs', 'stoneworks:granite_plate_wall',
		'stoneworks:granite_pillar'
	])
	event.add('create:stone_types/calcite', [
		'stoneworks:cobbled_calcite', 'stoneworks:cobbled_calcite_stairs', 'stoneworks:cobbled_calcite_wall',
		'stoneworks:polished_calcite', 'stoneworks:polished_calcite_stairs', 'stoneworks:polished_calcite_wall',
		'stoneworks:chiseled_calcite',
		'stoneworks:calcite_tiles', 'stoneworks:calcite_tile_stairs', 'stoneworks:calcite_tile_wall',
		'stoneworks:calcite_bricks', 'stoneworks:calcite_brick_stairs', 'stoneworks:calcite_brick_wall',
		'stoneworks:calcite_shingles', 'stoneworks:calcite_shingle_stairs', 'stoneworks:calcite_shingle_wall',
		'stoneworks:calcite_pavers', 'stoneworks:calcite_paver_stairs', 'stoneworks:calcite_paver_wall',
		'stoneworks:calcite_plates', 'stoneworks:calcite_plate_stairs', 'stoneworks:calcite_plate_wall',
		'stoneworks:calcite_pillar'
	])
	event.add('create:stone_types/tuff', [
		'minecraft:tuff_stairs', 'minecraft:tuff_wall',
		'minecraft:polished_tuff', 'minecraft:polished_tuff_stairs', 'minecraft:polished_tuff_wall',
		'minecraft:chiseled_tuff',
		'minecraft:tuff_bricks', 'minecraft:tuff_brick_stairs', 'minecraft:tuff_brick_wall',
		'minecraft:chiseled_tuff_bricks',
		'stoneworks:cobbled_tuff', 'stoneworks:cobbled_tuff_stairs', 'stoneworks:cobbled_tuff_wall',
		'stoneworks:tuff_tiles', 'stoneworks:tuff_tile_stairs', 'stoneworks:tuff_tile_wall',
		'stoneworks:tuff_shingles', 'stoneworks:tuff_shingle_stairs', 'stoneworks:tuff_shingle_wall',
		'stoneworks:tuff_pavers', 'stoneworks:tuff_paver_stairs', 'stoneworks:tuff_paver_wall',
		'stoneworks:tuff_plates', 'stoneworks:tuff_plate_stairs', 'stoneworks:tuff_plate_wall',
		'stoneworks:tuff_pillar'
	])
	event.add('create:stone_types/deepslate', [
		'stoneworks:deepslate_shingles', 'stoneworks:deepslate_shingle_stairs', 'stoneworks:deepslate_shingle_wall',
		'stoneworks:deepslate_pavers', 'stoneworks:deepslate_paver_stairs', 'stoneworks:deepslate_paver_wall',
		'stoneworks:deepslate_plates', 'stoneworks:deepslate_plate_stairs', 'stoneworks:deepslate_plate_wall',
		'stoneworks:deepslate_pillar',
		'stoneworks:deepslate_shingles', 'stoneworks:deepslate_shingle_stairs', 'stoneworks:deepslate_shingle_wall',
		'stoneworks:deepslate_pavers', 'stoneworks:deepslate_paver_stairs', 'stoneworks:deepslate_paver_wall',
		'stoneworks:deepslate_plates', 'stoneworks:deepslate_plate_stairs', 'stoneworks:deepslate_plate_wall',
		'stoneworks:deepslate_pillar'
	])
	event.add('create_d2d:stone_types/netherrack', [
		'stoneworks:cobbled_netherrack', 'stoneworks:cobbled_netherrack_stairs', 'stoneworks:cobbled_netherrack_wall',
		'stoneworks:polished_netherrack', 'stoneworks:polished_netherrack_stairs', 'stoneworks:polished_netherrack_wall',
		'stoneworks:netherrack_bricks', 'stoneworks:netherrack_brick_stairs', 'stoneworks:netherrack_brick_wall'
	])
	event.add('create_d2d:stone_types/basalt', [
		'minecraft:polished_basalt',
		'stoneworks:cobbled_basalt', 'stoneworks:cobbled_basalt_stairs', 'stoneworks:cobbled_basalt_wall',
		'stoneworks:chiseled_basalt', 'stoneworks:chiseled_basalt_stairs', 'stoneworks:chiseled_basalt_wall',
		'stoneworks:basalt_tiles', 'stoneworks:basalt_tile_stairs', 'stoneworks:basalt_tile_wall',
		'stoneworks:basalt_bricks', 'stoneworks:basalt_brick_stairs', 'stoneworks:basalt_brick_wall',
		'stoneworks:basalt_shingles', 'stoneworks:basalt_shingle_stairs', 'stoneworks:basalt_shingle_wall',
		'stoneworks:basalt_pavers', 'stoneworks:basalt_paver_stairs', 'stoneworks:basalt_paver_wall',
		'stoneworks:basalt_plates', 'stoneworks:basalt_plate_stairs', 'stoneworks:basalt_plate_wall'
	])
	event.add('create_d2d:stone_types/blackstone', [
		'minecraft:blackstone_stairs', 'minecraft:blackstone_wall',
		'minecraft:polished_blackstone', 'minecraft:polished_blackstone_stairs', 'minecraft:polished_blackstone_wall',
		'minecraft:chiseled_polished_blackstone',
		'minecraft:polished_blackstone_bricks', 'minecraft:polished_blackstone_brick_stairs', 'minecraft:polished_blackstone_brick_wall',
		'stoneworks:cobbled_blackstone', 'stoneworks:cobbled_blackstone_stairs', 'stoneworks:cobbled_blackstone_wall',
		'stoneworks:blackstone_tiles', 'stoneworks:blackstone_tile_stairs', 'stoneworks:blackstone_tile_wall',
		'stoneworks:blackstone_shingles', 'stoneworks:blackstone_shingle_stairs', 'stoneworks:blackstone_shingle_wall',
		'stoneworks:blackstone_pavers', 'stoneworks:blackstone_paver_stairs', 'stoneworks:blackstone_paver_wall',
		'stoneworks:blackstone_plates', 'stoneworks:blackstone_plate_stairs', 'stoneworks:blackstone_plate_wall',
		'stoneworks:blackstone_pillar'
	])
	event.add('create_d2d:stone_types/packed_mud', [
		'minecraft:mud_bricks', 'minecraft:mud_brick_stairs', 'minecraft:mud_brick_wall'
	])
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
})

ServerEvents.recipes(event => {
	//consistency
	// cracked
	function cracking(material, type, override_input, override_recipe_id) {
		var input = material + '_' + type
		event.smelting('stoneworks:cracked_' + input, override_input != undefined ? override_input : 'stoneworks:' + input, 0.1).id(override_recipe_id ? override_recipe_id : 'stoneworks:cracked_' + input + '_from_' + material + '_stonecutting')
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
				recipe_id = output + '_from_moss_block'
				break
			}
			case ('aether'): {
				recipe_id = output + '_with_moss'
				break
			}
			case ('deep_aether'): {
				recipe_id = output + '_from_moss'
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

	//stone
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'stone', '#create_d2d:stone_types/stone')
	event.remove([
		{ id: 'minecraft:stone_brick_stairs_from_stone_bricks_stonecutting' },
		{ id: 'minecraft:stone_brick_slab_from_stone_bricks_stonecutting' },
		{ id: 'minecraft:stone_brick_wall_from_stone_bricks_stonecutting' },
		{ id: 'minecraft:chiseled_stone_bricks_from_stone_bricks_stonecutting' }
	])
	event.replaceInput({ id: 'supplementaries:stonecutting/stone_tile' }, 'stone_bricks', '#create_d2d:stone_types/stone')
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'supplementaries:stone_tile', '#create_d2d:stone_types/stone')
	event.remove([
		{ id: 'twilightforest:stonecutting/terrorcotta_lines/terrorcotta_arcs' },
		{ id: 'twilightforest:stonecutting/terrorcotta_curves/terrorcotta_arcs' },
		{ id: 'twilightforest:stonecutting/terrorcotta_lines/terrorcotta_curves' },
		{ id: 'twilightforest:stonecutting/terrorcotta_arcs/terrorcotta_curves' },
		{ id: 'twilightforest:stonecutting/terrorcotta_curves/terrorcotta_lines' },
		{ id: 'twilightforest:stonecutting/terrorcotta_arcs/terrorcotta_lines' },
		{ id: 'twilightforest:stonecutting/twisted_stone/twisted_stone_pillar' }
	])

	// adjusting prices
	event.shaped('4x twilightforest:spiral_bricks', [
		'BSS',
		'BSS',
		'BBB'
	], {
		B: '#minecraft:stone_bricks',
		S: ['stone_slab', 'stone_brick_slab']
	}).id('twilightforest:nagastone/nagastone_spiral')


	//andesite
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'andesite', '#create:stone_types/andesite')
	event.remove([
		{ id: 'minecraft:polished_andesite_stairs_from_polished_andesite_stonecutting' },
		{ id: 'minecraft:polished_andesite_slab_from_polished_andesite_stonecutting' }
	])


	//diorite
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'diorite', '#create:stone_types/diorite')
	event.remove([
		{ id: 'minecraft:polished_diorite_stairs_from_polished_diorite_stonecutting' },
		{ id: 'minecraft:polished_diorite_slab_from_polished_diorite_stonecutting' }
	])


	//granite
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'granite', '#create:stone_types/granite')
	event.remove([
		{ id: 'minecraft:polished_granite_stairs_from_polished_granite_stonecutting' },
		{ id: 'minecraft:polished_granite_slab_from_polished_granite_stonecutting' }
	])


	//calcite
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'calcite', '#create:stone_types/calcite')


	//tuff
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'tuff', '#create:stone_types/tuff')
	event.remove([
		{ id: 'minecraft:polished_tuff_stairs_from_polished_tuff_stonecutting' },
		{ id: 'minecraft:polished_tuff_slab_from_polished_tuff_stonecutting' },
		{ id: 'minecraft:polished_tuff_wall_from_polished_tuff_stonecutting' },
		{ id: 'minecraft:tuff_bricks_from_polished_tuff_stonecutting' },
		{ id: 'minecraft:tuff_brick_stairs_from_polished_tuff_stonecutting' },
		{ id: 'minecraft:tuff_brick_stairs_from_tuff_bricks_stonecutting' },
		{ id: 'minecraft:tuff_brick_slab_from_polished_tuff_stonecutting' },
		{ id: 'minecraft:tuff_brick_slab_from_tuff_bricks_stonecutting' },
		{ id: 'minecraft:tuff_brick_wall_from_polished_tuff_stonecutting' },
		{ id: 'minecraft:tuff_brick_wall_from_tuff_bricks_stonecutting' },
		{ id: 'minecraft:chiseled_tuff_bricks_from_polished_tuff_stonecutting' },
		{ id: 'minecraft:chiseled_tuff_bricks_from_tuff_bricks_stonecutting' }
	])


	//deepslate
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'deepslate', '#create:stone_types/deepslate')


	//netherrack
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'netherrack', '#create_d2d:stone_types/netherrack')


	//basalt
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'basalt', '#create_d2d:stone_types/basalt')


	//blackstone
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'blackstone', '#create_d2d:stone_types/blackstone')
	event.remove([
		{ id: 'minecraft:polished_blackstone_stairs_from_polished_blackstone_stonecutting' },
		{ id: 'minecraft:polished_blackstone_slab_from_polished_blackstone_stonecutting' },
		{ id: 'minecraft:polished_blackstone_wall_from_polished_blackstone_stonecutting' },
		{ id: 'minecraft:chiseled_polished_blackstone_from_polished_blackstone_stonecutting' },
		{ id: 'minecraft:polished_blackstone_bricks_from_polished_blackstone_stonecutting' },
		{ id: 'minecraft:polished_blackstone_brick_stairs_from_polished_blackstone_stonecutting' },
		{ id: 'minecraft:polished_blackstone_brick_stairs_from_polished_blackstone_bricks_stonecutting' },
		{ id: 'minecraft:polished_blackstone_brick_slab_from_polished_blackstone_stonecutting' },
		{ id: 'minecraft:polished_blackstone_brick_slab_from_polished_blackstone_bricks_stonecutting' },
		{ id: 'minecraft:polished_blackstone_brick_wall_from_polished_blackstone_stonecutting' },
		{ id: 'minecraft:polished_blackstone_brick_wall_from_polished_blackstone_bricks_stonecutting' }
	])


	//packed_mud
	event.stonecutting('mud_bricks', '#create_d2d:stone_types/packed_mud').id('kubejs:stonecuting/mud_bricks_from_stone_types_mud_bricks')
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'mud_bricks', '#create_d2d:stone_types/packed_mud')


	//prismarine
	event.stonecutting('prismarine', '#kubejs:stone_types/prismarine').id('kubejs:stonecutting/reset/prismarine')
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
	event.stonecutting('dark_prismarine', '#kubejs:stone_types/dark_prismarine').id('kubejs:stonecutting/reset/dark_prismarine')
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
})