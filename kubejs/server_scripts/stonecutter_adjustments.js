ServerEvents.tags('item', event => {
	event.add('create_d2d:stone_types/stone', [
		'minecraft:stone_stairs',
		'minecraft:stone_bricks',
		'minecraft:stone_brick_stairs',
		'minecraft:stone_brick_wall',
		'supplementaries:stone_tile',
		'supplementaries:stone_tile_stairs',
		'supplementaries:stone_tile_wall',
		'minecraft:chiseled_stone_bricks',
		'twilightforest:spiral_bricks',
		'twilightforest:bold_stone_pillar',
		'twilightforest:terrorcotta_arcs',
		'twilightforest:terrorcotta_curves',
		'twilightforest:terrorcotta_lines',
		'twilightforest:twisted_stone',
		'twilightforest:twisted_stone_pillar'
	])
	event.add('create:stone_types/andesite', [
		'minecraft:andesite_stairs',
		'minecraft:andesite_wall',
		'minecraft:polished_andesite',
		'minecraft:polished_andesite_stairs'
	])
	event.add('create:stone_types/diorite', [
		'minecraft:diorite_stairs',
		'minecraft:diorite_wall',
		'minecraft:polished_diorite',
		'minecraft:polished_diorite_stairs'
	])
	event.add('create:stone_types/granite', [
		'minecraft:granite_stairs',
		'minecraft:granite_wall',
		'minecraft:polished_granite',
		'minecraft:polished_granite_stairs'
	])
	event.add('create_d2d:stone_types/basalt', [
		'minecraft:polished_basalt'
	])
	event.add('create_d2d:stone_types/blackstone', [
		'minecraft:blackstone_stairs',
		'minecraft:blackstone_wall',
		'minecraft:polished_blackstone',
		'minecraft:polished_blackstone_stairs',
		'minecraft:polished_blackstone_wall',
		'minecraft:chiseled_polished_blackstone',
		'minecraft:polished_blackstone_bricks',
		'minecraft:polished_blackstone_brick_stairs',
		'minecraft:polished_blackstone_brick_wall'
	])
	event.add('create:stone_types/tuff', [
		'minecraft:tuff_stairs',
		'minecraft:tuff_wall',
		'minecraft:polished_tuff',
		'minecraft:polished_tuff_stairs',
		'minecraft:polished_tuff_wall',
		'minecraft:chiseled_tuff',
		'minecraft:tuff_bricks',
		'minecraft:tuff_brick_stairs',
		'minecraft:tuff_brick_wall',
		'minecraft:chiseled_tuff_bricks'
	])
	event.add('create_d2d:stone_types/packed_mud', [
		'minecraft:mud_bricks',
		'minecraft:mud_brick_stairs',
		'minecraft:mud_brick_wall'
	])
})

ServerEvents.recipes(event => {
	//stone
	event.shaped('7x twilightforest:spiral_bricks', [
		'BSS',
		'BSS',
		'BBB'
	], {
		B: '#minecraft:stone_bricks',
		S: ['stone_slab', 'stone_brick_slab']
	}).id('twilightforest:nagastone/nagastone_spiral')
	event.stonecutting('stone_stairs', '#create_d2d:stone_types/stone').id('minecraft:stone_stairs_from_stone_stonecutting')
	event.stonecutting('2x stone_slab', '#create_d2d:stone_types/stone').id('minecraft:stone_slab_from_stone_stonecutting')
	event.stonecutting('stone_bricks', '#create_d2d:stone_types/stone').id('minecraft:stone_bricks_from_stone_stonecutting')
	event.stonecutting('stone_brick_stairs', '#create_d2d:stone_types/stone').id('minecraft:stone_brick_stairs_from_stone_stonecutting')
	event.remove({ id: 'minecraft:stone_brick_stairs_from_stone_bricks_stonecutting' })
	event.stonecutting('2x stone_brick_slab', '#create_d2d:stone_types/stone').id('minecraft:stone_brick_slab_from_stone_stonecutting')
	event.remove({ id: 'minecraft:stone_brick_slab_from_stone_bricks_stonecutting' })
	event.stonecutting('stone_brick_wall', '#create_d2d:stone_types/stone').id('minecraft:stone_brick_walls_from_stone_stonecutting')
	event.remove({ id: 'minecraft:stone_brick_wall_from_stone_bricks_stonecutting' })
	event.stonecutting('supplementaries:stone_tile', '#create_d2d:stone_types/stone').id('supplementaries:stonecutting/stone_tile')
	event.stonecutting('supplementaries:stone_tile_stairs', '#create_d2d:stone_types/stone').id('supplementaries:stonecutting/stone_tile_stairs_from_bricks')
	event.stonecutting('2x supplementaries:stone_tile_slab', '#create_d2d:stone_types/stone').id('supplementaries:stonecutting/stone_tile_slab')
	event.stonecutting('supplementaries:stone_tile_wall', '#create_d2d:stone_types/stone').id('supplementaries:stonecutting/stone_tile_wall_from_bricks')
	event.stonecutting('chiseled_stone_bricks', '#create_d2d:stone_types/stone').id('minecraft:chiseled_stone_bricks_stone_from_stonecutting')
	event.remove({ id: 'minecraft:chiseled_stone_bricks_from_stone_bricks_stonecutting' })
	event.stonecutting('twilightforest:spiral_bricks', '#create_d2d:stone_types/stone').id('twilightforest:stonecutting/stone/spiral_bricks')
	event.stonecutting('twilightforest:bold_stone_pillar', '#create_d2d:stone_types/stone').id('twilightforest:stonecutting/stone/bold_stone_pillar')
	event.stonecutting('twilightforest:terrorcotta_arcs', '#create_d2d:stone_types/stone').id('twilightforest:stonecutting/stone/terrorcotta_arcs')
	event.remove({ id: 'twilightforest:stonecutting/terrorcotta_lines/terrorcotta_arcs' })
	event.remove({ id: 'twilightforest:stonecutting/terrorcotta_curves/terrorcotta_arcs' })
	event.stonecutting('twilightforest:terrorcotta_curves', '#create_d2d:stone_types/stone').id('twilightforest:stonecutting/stone/terrorcotta_curves')
	event.remove({ id: 'twilightforest:stonecutting/terrorcotta_lines/terrorcotta_curves' })
	event.remove({ id: 'twilightforest:stonecutting/terrorcotta_arcs/terrorcotta_curves' })
	event.stonecutting('twilightforest:terrorcotta_lines', '#create_d2d:stone_types/stone').id('twilightforest:stonecutting/stone/terrorcotta_lines')
	event.remove({ id: 'twilightforest:stonecutting/terrorcotta_curves/terrorcotta_lines' })
	event.remove({ id: 'twilightforest:stonecutting/terrorcotta_arcs/terrorcotta_lines' })
	event.stonecutting('twilightforest:twisted_stone', '#create_d2d:stone_types/stone').id('twilightforest:stonecutting/stone/twisted_stone')
	event.stonecutting('twilightforest:twisted_stone_pillar', '#create_d2d:stone_types/stone').id('twilightforest:stonecutting/stone/twisted_stone_pillar')
	event.remove({ id: 'twilightforest:stonecutting/twisted_stone/twisted_stone_pillar' })

	//andesite
	event.stonecutting('andesite_stairs', '#create:stone_types/andesite').id('minecraft:andesite_stairs_from_andesite_stonecutting')
	event.stonecutting('2x andesite_slab', '#create:stone_types/andesite').id('minecraft:andesite_slab_from_andesite_stonecutting')
	event.stonecutting('andesite_wall', '#create:stone_types/andesite').id('minecraft:andesite_wall_from_andesite_stonecutting')
	event.stonecutting('polished_andesite', '#create:stone_types/andesite').id('minecraft:polished_andesite_from_andesite_stonecutting')
	event.stonecutting('polished_andesite_stairs', '#create:stone_types/andesite').id('minecraft:polished_andesite_stairs_from_andesite_stonecutting')
	event.remove({ id: 'minecraft:polished_andesite_stairs_from_polished_andesite_stonecutting' })
	event.stonecutting('2x polished_andesite_slab', '#create:stone_types/andesite').id('minecraft:polished_andesite_slab_from_andesite_stonecutting')
	event.remove({ id: 'minecraft:polished_andesite_slab_from_polished_andesite_stonecutting' })

	//diorite
	event.stonecutting('diorite_stairs', '#create:stone_types/diorite').id('minecraft:diorite_stairs_from_diorite_stonecutting')
	event.stonecutting('2x diorite_slab', '#create:stone_types/diorite').id('minecraft:diorite_slab_from_diorite_stonecutting')
	event.stonecutting('diorite_wall', '#create:stone_types/diorite').id('minecraft:diorite_wall_from_diorite_stonecutting')
	event.stonecutting('polished_diorite', '#create:stone_types/diorite').id('minecraft:polished_diorite_from_diorite_stonecutting')
	event.stonecutting('polished_diorite_stairs', '#create:stone_types/diorite').id('minecraft:polished_diorite_stairs_from_diorite_stonecutting')
	event.remove({ id: 'minecraft:polished_diorite_stairs_from_polished_diorite_stonecutting' })
	event.stonecutting('2x polished_diorite_slab', '#create:stone_types/diorite').id('minecraft:polished_diorite_slab_from_diorite_stonecutting')
	event.remove({ id: 'minecraft:polished_diorite_slab_from_polished_diorite_stonecutting' })

	//granite
	event.stonecutting('granite_stairs', '#create:stone_types/granite').id('minecraft:granite_stairs_from_granite_stonecutting')
	event.stonecutting('2x granite_slab', '#create:stone_types/granite').id('minecraft:granite_slab_from_granite_stonecutting')
	event.stonecutting('granite_wall', '#create:stone_types/granite').id('minecraft:granite_wall_from_granite_stonecutting')
	event.stonecutting('polished_granite', '#create:stone_types/granite').id('minecraft:polished_granite_from_granite_stonecutting')
	event.stonecutting('polished_granite_stairs', '#create:stone_types/granite').id('minecraft:polished_granite_stairs_from_granite_stonecutting')
	event.remove({ id: 'minecraft:polished_granite_stairs_from_polished_granite_stonecutting' })
	event.stonecutting('2x polished_granite_slab', '#create:stone_types/granite').id('minecraft:polished_granite_slab_from_granite_stonecutting')
	event.remove({ id: 'minecraft:polished_granite_slab_from_polished_granite_stonecutting' })

	//basalt
	event.stonecutting('polished_basalt', '#create_d2d:stone_types/basalt').id('minecraft:polished_basalt_from_basalt_stonecutting')

	//blackstone
	event.stonecutting('blackstone_stairs', '#create_d2d:stone_types/blackstone').id('minecraft:blackstone_stairs_from_blackstone_stonecutting')
	event.stonecutting('2x blackstone_slab', '#create_d2d:stone_types/blackstone').id('minecraft:blackstone_slab_from_blackstone_stonecutting')
	event.stonecutting('blackstone_wall', '#create_d2d:stone_types/blackstone').id('minecraft:blackstone_wall_from_blackstone_stonecutting')
	event.stonecutting('polished_blackstone', '#create_d2d:stone_types/blackstone').id('minecraft:polished_blackstone_from_blackstone_stonecutting')
	event.stonecutting('polished_blackstone_stairs', '#create_d2d:stone_types/blackstone').id('minecraft:polished_blackstone_stairs_from_blackstone_stonecutting')
	event.remove({ id: 'minecraft:polished_blackstone_stairs_from_polished_blackstone_stonecutting' })
	event.stonecutting('2x polished_blackstone_slab', '#create_d2d:stone_types/blackstone').id('minecraft:polished_blackstone_slab_from_blackstone_stonecutting')
	event.remove({ id: 'minecraft:polished_blackstone_slab_from_polished_blackstone_stonecutting' })
	event.stonecutting('polished_blackstone_wall', '#create_d2d:stone_types/blackstone').id('minecraft:polished_blackstone_wall_from_blackstone_stonecutting')
	event.remove({ id: 'minecraft:polished_blackstone_wall_from_polished_blackstone_stonecutting' })
	event.stonecutting('chiseled_polished_blackstone', '#create_d2d:stone_types/blackstone').id('minecraft:chiseled_polished_blackstone_from_blackstone_stonecutting')
	event.remove({ id: 'minecraft:chiseled_polished_blackstone_from_polished_blackstone_stonecutting' })
	event.stonecutting('polished_blackstone_bricks', '#create_d2d:stone_types/blackstone').id('minecraft:polished_blackstone_bricks_from_blackstone_stonecutting')
	event.remove({ id: 'minecraft:polished_blackstone_bricks_from_polished_blackstone_stonecutting' })
	event.stonecutting('polished_blackstone_brick_stairs', '#create_d2d:stone_types/blackstone').id('minecraft:polished_blackstone_brick_stairs_from_blackstone_stonecutting')
	event.remove({ id: 'minecraft:polished_blackstone_brick_stairs_from_polished_blackstone_stonecutting' })
	event.remove({ id: 'minecraft:polished_blackstone_brick_stairs_from_polished_blackstone_bricks_stonecutting' })
	event.stonecutting('2x polished_blackstone_brick_slab', '#create_d2d:stone_types/blackstone').id('minecraft:polished_blackstone_brick_slab_from_blackstone_stonecutting')
	event.remove({ id: 'minecraft:polished_blackstone_brick_slab_from_polished_blackstone_stonecutting' })
	event.remove({ id: 'minecraft:polished_blackstone_brick_slab_from_polished_blackstone_bricks_stonecutting' })
	event.stonecutting('polished_blackstone_brick_wall', '#create_d2d:stone_types/blackstone').id('minecraft:polished_blackstone_brick_wall_from_blackstone_stonecutting')
	event.remove({ id: 'minecraft:polished_blackstone_brick_wall_from_polished_blackstone_stonecutting' })
	event.remove({ id: 'minecraft:polished_blackstone_brick_wall_from_polished_blackstone_bricks_stonecutting' })
	event.stonecutting('4x biomesoplenty:blackstone_spines', '#create_d2d:stone_types/blackstone').id('biomesoplenty:blackstone_spines_from_blackstone_stonecutting')

	//tuff
	event.stonecutting('tuff_stairs', '#create:stone_types/tuff').id('minecraft:tuff_stairs_from_tuff_stonecutting')
	event.stonecutting('2x tuff_slab', '#create:stone_types/tuff').id('minecraft:tuff_slab_from_tuff_stonecutting')
	event.stonecutting('tuff_wall', '#create:stone_types/tuff').id('minecraft:tuff_wall_from_tuff_stonecutting')
	event.stonecutting('polished_tuff', '#create:stone_types/tuff').id('minecraft:polished_tuff_from_tuff_stonecutting')
	event.stonecutting('polished_tuff_stairs', '#create:stone_types/tuff').id('minecraft:polished_tuff_stairs_from_tuff_stonecutting')
	event.remove({ id: 'minecraft:polished_tuff_stairs_from_polished_tuff_stonecutting' })
	event.stonecutting('2x polished_tuff_slab', '#create:stone_types/tuff').id('minecraft:polished_tuff_slab_from_tuff_stonecutting')
	event.remove({ id: 'minecraft:polished_tuff_slab_from_polished_tuff_stonecutting' })
	event.stonecutting('polished_tuff_wall', '#create:stone_types/tuff').id('minecraft:polished_tuff_wall_from_tuff_stonecutting')
	event.remove({ id: 'minecraft:polished_tuff_wall_from_polished_tuff_stonecutting' })
	event.stonecutting('chiseled_tuff', '#create:stone_types/tuff').id('minecraft:chiseled_tuff_from_tuff_stonecutting')
	event.stonecutting('tuff_bricks', '#create:stone_types/tuff').id('minecraft:tuff_bricks_from_tuff_stonecutting')
	event.remove({ id: 'minecraft:tuff_bricks_from_polished_tuff_stonecutting' })
	event.stonecutting('tuff_brick_stairs', '#create:stone_types/tuff').id('minecraft:tuff_brick_stairs_from_tuff_stonecutting')
	event.remove({ id: 'minecraft:tuff_brick_stairs_from_polished_tuff_stonecutting' })
	event.remove({ id: 'minecraft:tuff_brick_stairs_from_tuff_bricks_stonecutting' })
	event.stonecutting('2x tuff_brick_slab', '#create:stone_types/tuff').id('minecraft:tuff_brick_slab_from_tuff_stonecutting')
	event.remove({ id: 'minecraft:tuff_brick_slab_from_polished_tuff_stonecutting' })
	event.remove({ id: 'minecraft:tuff_brick_slab_from_tuff_bricks_stonecutting' })
	event.stonecutting('tuff_brick_wall', '#create:stone_types/tuff').id('minecraft:tuff_brick_wall_from_tuff_stonecutting')
	event.remove({ id: 'minecraft:tuff_brick_wall_from_polished_tuff_stonecutting' })
	event.remove({ id: 'minecraft:tuff_brick_wall_from_tuff_bricks_stonecutting' })
	event.stonecutting('chiseled_tuff_bricks', '#create:stone_types/tuff').id('minecraft:chiseled_tuff_bricks_from_tuff_stonecutting')
	event.remove({ id: 'minecraft:chiseled_tuff_bricks_from_polished_tuff_stonecutting' })
	event.remove({ id: 'minecraft:chiseled_tuff_bricks_from_tuff_bricks_stonecutting' })

	//packed_mud
	event.stonecutting('mud_bricks', '#create_d2d:stone_types/packed_mud').id('kubejs:mud_bricks_from_stone_types_mud_bricks_stonecuting')
	event.stonecutting('mud_brick_stairs', '#create_d2d:stone_types/packed_mud').id('minecraft:mud_brick_stairs_from_mud_bricks_stonecutting')
	event.stonecutting('2x mud_brick_slab', '#create_d2d:stone_types/packed_mud').id('minecraft:mud_brick_slab_from_mud_bricks_stonecutting')
	event.stonecutting('mud_brick_wall', '#create_d2d:stone_types/packed_mud').id('minecraft:mud_brick_wall_from_mud_bricks_stonecutting')
})