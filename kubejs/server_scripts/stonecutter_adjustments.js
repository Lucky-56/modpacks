ServerEvents.tags('item', event => {
	event.add('create_d2d:stone_types/stone', [
		'minecraft:stone_stairs',
		'minecraft:stone_bricks',
		'minecraft:stone_brick_stairs',
		'minecraft:stone_brick_wall',
		'minecraft:chiseled_stone_bricks',
		'supplementaries:stone_tile',
		'supplementaries:stone_tile_stairs',
		'supplementaries:stone_tile_wall',
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


	//packed_mud
	event.stonecutting('mud_bricks', '#create_d2d:stone_types/packed_mud').id('kubejs:stonecuting/mud_bricks_from_stone_types_mud_bricks')
	event.replaceInput({ type: 'minecraft:stonecutting' }, 'mud_bricks', '#create_d2d:stone_types/packed_mud')
})