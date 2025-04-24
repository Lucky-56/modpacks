ServerEvents.tags('item', event => {
	event.add('kubejs:default_cogwheel_ingredients', '#minecraft:planks')
	event.remove('kubejs:default_cogwheel_ingredients', ['#chipped:oak_planks', '#chipped:birch_planks', '#chipped:jungle_planks', '#chipped:acacia_planks', '#chipped:dark_oak_planks', '#chipped:mangrove_planks', '#chipped:cherry_planks', '#chipped:bamboo_planks', '#chipped:crimson_planks', '#chipped:warped_planks'])
	event.add('kubejs:cogwheels/createcasing', ['createcasing:oak_cogwheel', 'createcasing:birch_cogwheel', 'createcasing:jungle_cogwheel', 'createcasing:acacia_cogwheel', 'createcasing:dark_oak_cogwheel', 'createcasing:mangrove_cogwheel', 'createcasing:cherry_cogwheel', 'createcasing:bamboo_cogwheel', 'createcasing:crimson_cogwheel', 'createcasing:warped_cogwheel'])
	event.add('kubejs:large_cogwheels/createcasing', ['createcasing:oak_large_cogwheel', 'createcasing:birch_large_cogwheel', 'createcasing:jungle_large_cogwheel', 'createcasing:acacia_large_cogwheel', 'createcasing:dark_oak_large_cogwheel', 'createcasing:mangrove_large_cogwheel', 'createcasing:cherry_large_cogwheel', 'createcasing:bamboo_large_cogwheel', 'createcasing:crimson_large_cogwheel', 'createcasing:warped_large_cogwheel'])
	event.add('kubejs:cogwheels', ['create:cogwheel', '#kubejs:cogwheels/createcasing'])
	event.add('kubejs:large_cogwheels', ['create:large_cogwheel', '#kubejs:large_cogwheels/createcasing'])
})

ServerEvents.recipes(event => {
	const cog_materials = [
		'oak',
		'birch',
		'jungle',
		'acacia',
		'dark_oak',
		'mangrove',
		'cherry',
		'bamboo',
		'crimson',
		'warped'
	]
	//crafting material cogs
	cog_materials.forEach((material) => {
		event.shapeless('createcasing:' + material + '_cogwheel', ['create:shaft', '#chipped:' + material + '_planks']).id('kubejs:crafting/' + material + '_cogwheel_manual_only')
		event.custom({
			type: 'create:deploying',
			ingredients: [
				{
					item: 'create:shaft'
				},
				{
					tag: 'chipped:' + material + '_planks'
				}
			],
			results: [
				{
					id: 'createcasing:' + material + '_cogwheel'
				}
			]
		}).id('kubejs:deploying/' + material + '_cogwheel')
		event.shapeless('createcasing:' + material + '_large_cogwheel', ['create:shaft', '#chipped:' + material + '_planks', '#chipped:' + material + '_planks']).id('kubejs:crafting/' + material + '_large_cogwheel_manual_only')
		event.shapeless('createcasing:' + material + '_large_cogwheel', ['create:cogwheel', '#chipped:' + material + '_planks']).id('kubejs:crafting/' + material + '_large_cogwheel_from_little_manual_only')
		event.custom({
			type: 'create:deploying',
			ingredients: [
				{
					item: 'createcasing:' + material + '_cogwheel'
				},
				{
					tag: 'chipped:' + material + '_planks'
				}
			],
			results: [
				{
					id: 'createcasing:' + material + '_large_cogwheel'
				}
			]
		}).id('kubejs:deploying/' + material + '_large_cogwheel')
	})
	//crafting normal cogs
	event.remove({ id: 'create:crafting/kinetics/cogwheel' })
	event.shapeless('create:cogwheel', ['create:shaft', '#kubejs:default_cogwheel_ingredients']).id('create:crafting/kinetics/cogwheel_manual_only')
	event.custom({
		type: 'create:deploying',
		ingredients: [
			{
				item: 'create:shaft'
			},
			{
				tag: 'kubejs:default_cogwheel_ingredients'
			}
		],
		results: [
			{
				id: 'create:cogwheel'
			}
		]
	}).id('create:deploying/cogwheel')
	event.remove([
		{ id: 'create:crafting/kinetics/large_cogwheel' },
		{ id: 'create:crafting/kinetics/large_cogwheel_from_little' }
	])
	event.shapeless('create:large_cogwheel', ['create:shaft', '#kubejs:default_cogwheel_ingredients', '#kubejs:default_cogwheel_ingredients']).id('create:crafting/kinetics/large_cogwheel_manual_only')
	event.shapeless('create:large_cogwheel', ['create:cogwheel', '#kubejs:default_cogwheel_ingredients']).id('create:crafting/kinetics/large_cogwheel_from_little_manual_only')
	event.custom({
		type: 'create:deploying',
		ingredients: [
			{
				item: 'create:cogwheel'
			},
			{
				tag: 'kubejs:default_cogwheel_ingredients'
			}
		],
		results: [
			{
				id: 'create:large_cogwheel'
			}
		]
	}).id('create:deploying/large_cogwheel')

	//reset to normal cogs
	event.shapeless('create:cogwheel', '#kubejs:cogwheels/createcasing').id('kubejs:cogwheel_resetting')
	event.shapeless('create:large_cogwheel', '#kubejs:large_cogwheels/createcasing').id('kubejs:large_cogwheel_resetting')

	//sandpapers
	function pandsaper(output, input, namespace, override_id) {
		event.shapeless(output, ['paper', namespace + ':' + input]).id(override_id ? override_id + '_manual_only' : 'kubejs:crafting/' + input + '_paper_manual_only')
		event.custom({
			type: 'create:deploying',
			ingredients: [
				{
					item: 'minecraft:paper'
				},
				{
					item: namespace + ':' + input
				}
			],
			results: [
				{
					id: output
				}
			]
		}).id(override_id ? override_id : 'kubejs:deploying/' + input + '_paper')
	}
	pandsaper('create:sand_paper', 'sand', 'minecraft', 'create:crafting/materials/sand_paper')
	pandsaper('create:red_sand_paper', 'red_sand', 'minecraft', 'create:crafting/materials/red_sand_paper')
	pandsaper('kubejs:white_sand_paper', 'white_sand', 'biomesoplenty')
	pandsaper('kubejs:orange_sand_paper', 'orange_sand', 'biomesoplenty')
	pandsaper('kubejs:black_sand_paper', 'black_sand', 'biomesoplenty')

	//compress
	function compress_decompress(type, override_namespace, override_compress, override_decompress, override_blocktype) {
		var namespace = override_namespace != undefined ? override_namespace : 'create'
		var blocktype = override_blocktype ? override_blocktype : 'block'
		var small = namespace + ':' + type
		var compress = override_compress != undefined ? override_compress : small
		var big = 'kubejs:' + type + '_' + blocktype
		event.shaped(big, [
			'ccc',
			'ccc',
			'ccc'
		], {
			c: compress
		}).id('kubejs:crafting/' + type + '_' + blocktype)
		event.shapeless('9x ' + (override_decompress != undefined ? override_decompress : small), big).id('kubejs:crafting/' + (type.endsWith('s') ? type : type + 's') + '_from_' + blocktype)
	}
	//createcompressed
	compress_decompress('cogwheel', undefined, '#kubejs:cogwheels')
	compress_decompress('large_cogwheel', undefined, '#kubejs:large_cogwheels')
	compress_decompress('belt', undefined, 'create:belt_connector', 'create:belt_connector')
	compress_decompress('shaft')
	compress_decompress('precision_mechanism')
	compress_decompress('cinder_flour')
	compress_decompress('powdered_obsidian')
	compress_decompress('wheat_flour')
	compress_decompress('copper_sheet')
	compress_decompress('iron_sheet')
	compress_decompress('golden_sheet')
	compress_decompress('brass_sheet')
	compress_decompress('crushed_raw_copper')
	compress_decompress('crushed_raw_iron')
	compress_decompress('crushed_raw_gold')
	compress_decompress('crushed_raw_zinc')
	compress_decompress('crushed_raw_tin')
	compress_decompress('wheat_dough', 'farmersdelight')
	compress_decompress('pulp')

	//hi jack! welcome to the function
	compress_decompress('apple', 'minecraft', undefined, undefined, 'crate')
	compress_decompress('golden_apple', 'minecraft', undefined, undefined, 'crate')
	compress_decompress('sweet_berry', 'minecraft', 'minecraft:sweet_berries', 'minecraft:sweet_berries', 'crate')
	compress_decompress('glow_berry', 'minecraft', 'minecraft:glow_berries', 'minecraft:glow_berries', 'crate')
	compress_decompress('golden_carrot', 'minecraft', undefined, undefined, 'crate')
	compress_decompress('cod', 'minecraft', undefined, undefined, 'crate')
	compress_decompress('salmon', 'minecraft', undefined, undefined, 'crate')
	compress_decompress('egg', 'minecraft', undefined, undefined, 'crate')
	compress_decompress('brown_mushroom', 'minecraft', undefined, undefined, 'crate')
	compress_decompress('red_mushroom', 'minecraft', undefined, undefined, 'crate')
	compress_decompress('cookie', 'minecraft', undefined, undefined, 'bag')
	compress_decompress('cocoa_beans', 'minecraft', undefined, undefined, 'bag')
	compress_decompress('gunpowder', 'minecraft', undefined, undefined, 'bag')

	//me :3
	/* compress_decompress('crushed_ancient_debris', 'kubejs') */
	compress_decompress('crushed_raw_arkenium', 'kubejs')



	//rite of passage
	event.remove([{ mod: 'create_compressed' }, { mod: 'cratedelight' }])
	function transfer(type, namespace, override_input, override_kubejs) {
		event.shapeless((override_kubejs ? override_kubejs : 'kubejs') + ':' + type, namespace + ':' + (override_input != undefined ? override_input : type))
	}
	transfer('cogwheel_block', 'create_compressed')
	transfer('large_cogwheel_block', 'create_compressed')
	transfer('belt_block', 'create_compressed')
	transfer('shaft_block', 'create_compressed', 'shaft_bundle')
	transfer('precision_mechanism_block', 'create_compressed', 'mechanism_block')
	event.shapeless('9x create:rose_quartz', 'create_compressed:rose_quartz_crystal_block')
	event.shapeless('9x create:polished_rose_quartz', 'create_compressed:rose_quartz_polished_block')
	transfer('cinder_flour_block', 'create_compressed', 'cinder_flour_pile')
	transfer('powdered_obsidian_block', 'create_compressed', 'powdered_obsidian_pile')
	transfer('wheat_flour_block', 'create_compressed', 'wheat_flour_pile')
	transfer('copper_sheet_block', 'create_compressed')
	transfer('iron_sheet_block', 'create_compressed')
	transfer('golden_sheet_block', 'create_compressed', 'gold_sheet_block')
	transfer('brass_sheet_block', 'create_compressed')
	transfer('sturdy_sheet_block', 'create_compressed', undefined, 'create_ironworks')
	transfer('crushed_raw_copper_block', 'create_compressed', 'crushed_copper_pile')
	transfer('crushed_raw_iron_block', 'create_compressed', 'crushed_iron_pile')
	transfer('crushed_raw_gold_block', 'create_compressed', 'crushed_gold_pile')
	transfer('crushed_raw_zinc_block', 'create_compressed', 'crushed_zinc_pile')
	transfer('crushed_raw_tin_block', 'create_compressed', 'crushed_tin_pile')
	transfer('wheat_dough_block', 'create_compressed', 'dough_block')
	transfer('pulp_block', 'create_compressed')
	transfer('apple_crate', 'cratedelight')
	transfer('golden_apple_crate', 'cratedelight')
	transfer('sweet_berry_crate', 'cratedelight', 'berry_crate')
	transfer('glow_berry_crate', 'cratedelight', 'glowberry_crate')
	transfer('golden_carrot_crate', 'cratedelight')
	transfer('cod_crate', 'cratedelight')
	transfer('salmon_crate', 'cratedelight')
	transfer('egg_crate', 'cratedelight')
	transfer('brown_mushroom_crate', 'cratedelight')
	transfer('red_mushroom_crate', 'cratedelight')
	transfer('cookie_bag', 'cratedelight')
	transfer('cocoa_beans_bag', 'cratedelight', 'cocoabeans_bag')
	transfer('sugar_bag', 'cratedelight')
	transfer('gunpowder_bag', 'cratedelight')
	transfer('wheat_flour_bag', 'cratedelight')
	transfer('cinder_flour_bag', 'cratedelight')
	transfer('powdered_obsidian_bag', 'cratedelight')
})