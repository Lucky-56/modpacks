ServerEvents.tags('item', event => {
	//knifing
	const materials = [
		'wooden',
		'stone',
		'iron',
		'golden',
		'diamond',
		'netherite',
		'gilded_netherite',
		'prismarine',
		'rose_gold'
	]
	materials.forEach((material) => {
		event.add('c:tools/knife', 'cosmeticweaponsmod:' + material + '_knife')
		event.add('c:tools/knife', 'cosmeticweaponsmod:' + material + '_knife_reclaimed')
	})
	event.add('c:tools/knife', 'cosmeticweaponsmod:sculked_knife')

	//remove chalk from uncrafting
	Color.DYE.forEach((color) => {
		event.add('twilightforest:banned_uncrafting_ingredients', 'chalk:' + color + '_chalk')
	})

	//aether slabs_crafting
	const aether_planks = event.get('aether:planks_crafting').objectIds
	aether_planks.forEach(plank => {
		event.add('aether:slabs_crafting', plank.toString().replace('planks', 'slab'))
	})

	//tag you're it
	event.add('c:eggs', 'deep_aether:quail_egg')

	event.remove('curios:head', 'create:goggles')
	event.add('accessories:face', 'create:goggles')
})

ServerEvents.recipes(event => {
	//parity
	event.shaped('lodestone', [
		'CCC',
		'CIC',
		'CCC'
	], {
		C: 'minecraft:chiseled_stone_bricks',
		I: '#c:ingots/iron'
	}).id('minecraft:lodestone')
	event.shaped('bundle', [
		's',
		'l'
	], {
		s: 'string',
		l: '#c:leathers'
	}).id('diversity:bundle')

	//missing
	event.shaped('aethersdelight:arkenium_knife', [
		'A',
		'S'
	], {
		A: 'aethersdelight:arkenium_ingot',
		S: 'aether:skyroot_stick'
	})
	event.shaped('aethersdelight:raw_arkenium_block', [
		'rrr',
		'rrr',
		'rrr'
	], {
		r: '#c:raw_materials/arkenium'
	}).id('kubejs:crafting/raw_arkenium_block')
	event.shapeless('9x aethersdelight:raw_arkenium', '#c:storage_blocks/raw_arkenium').id('kubejs:crafting/raw_arkenium_from_block')

	event.custom({
		type: 'apothic_enchanting:infusion',
		input: {
			item: 'minecraft:painting'
		},
		requirements: {
			eterna: 20,
			quanta: 15,
			arcana: 15
		},
		max_requirements: {
			eterna: -1,
			quanta: -1,
			arcana: -1
		},
		display_level: 3,
		result: {
			id: 'twilightforest:magic_painting'
		}
	}).id('kubejs:infusion/magic_painting')
	event.shapeless('twilightforest:magic_painting', 'twilightforest:magic_painting')

	//integration
	event.shaped('create:steam_whistle', [
		'S',
		'I',
		'P'
	], {
		S: '#c:plates/gold',
		I: '#c:ingots/gold',
		P: 'pipeorgans:base'
	}).id('create:crafting/kinetics/steam_whistle')
	event.shaped('chalk:chalk_box', [
		'csc',
		' c '
	], {
		c: 'create:cardboard',
		s: '#c:slime_balls'
	}).id('chalk:chalk_box')

	// rosee
	event.custom({
		type: 'create:sandpaper_polishing',
		ingredients: [
			[
				{
					item: 'create:rose_quartz'
				},
				{
					item: 'biomesoplenty:rose_quartz_chunk'
				}
			]
		],
		results: [
			{
				id: 'create:polished_rose_quartz'
			}
		]
	}).id('create:sandpaper_polishing/rose_quartz')
	event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [
			{
				item: 'biomesoplenty:rose_quartz_block'
			}
		],
		result: [
			{
				item: {
					count: 4,
					id: 'biomesoplenty:rose_quartz_chunk'
				}
			}
		],
		tool: {
			type: 'farmersdelight:item_ability',
			action: 'pickaxe_dig'
		}
	}).id('kubejs:farmersdelight_cutting/rose_quartz_from_block')
	event.shapeless('4x create:polished_rose_quartz', 'create_ironworks:rose_quartz_block').id('create_ironworks:materials/rose_quartz/item_from_block')
	event.shaped('create_ironworks:rose_quartz_block', ['rr', 'rr'], { r: 'create:polished_rose_quartz' }).id('create_ironworks:materials/rose_quartz/block_from_item')
	event.custom({
		type: 'create:sandpaper_polishing',
		ingredients: [
			{
				item: 'biomesoplenty:rose_quartz_block'
			}
		],
		results: [
			{
				id: 'create_ironworks:rose_quartz_block'
			}
		]
	}).id('kubejs:sandpaper_polishing/ironworks_rose_quartz_block')

	//brush grading
	event.smithing('betterarcheology:iron_brush', 'feather', 'brush', '#c:ingots/iron').id('betterarcheology:iron_brush')
	event.smithing('betterarcheology:diamond_brush', 'feather', 'betterarcheology:iron_brush', '#c:gems/diamond').id('betterarcheology:diamond_brush')

	//emptiness
	function emptyCrate(output, stick_type, slab_type) {
		event.shaped(output, [
			's s',
			's s',
			'sSs'
		], {
			s: stick_type,
			S: slab_type
		})
	}
	emptyCrate('kubejs:empty_crate', 'minecraft:stick', '#minecraft:wooden_slabs')
	emptyCrate('kubejs:skyroot_empty_crate', 'aether:skyroot_stick', '#aether:slabs_crafting')
	event.shaped('kubejs:empty_bag', [
		' S ',
		'F F',
		' F '
	], {
		S: '#c:strings',
		F: 'supplementaries:flax'
	})
	function clack(container, content, content_container, namespace, override_content_namespace) {
		var container_id = 'kubejs:' + container
		var content_id = (override_content_namespace ? override_content_namespace : namespace) + ':' + content
		var content_container_id = namespace + ':' + content_container
		event.custom({
			type: 'create:item_application',
			ingredients: [
				{
					item: container_id
				},
				{
					item: content_id
				}
			],
			results: [
				{
					id: content_container_id
				}
			]
		}).id('kubejs:item_application/' + content_container)
		event.shapeless(content_id, content_container_id).replaceIngredient(content_container_id, container_id).id('kubejs:crafting/' + content + '_from_' + content_container + '_manual_only')
	}
	clack('empty_bag', 'cinder_flour_block', 'cinder_flour_bag', 'kubejs')
	clack('empty_bag', 'powdered_obsidian_block', 'powdered_obsidian_bag', 'kubejs')
	clack('empty_bag', 'wheat_flour_block', 'wheat_flour_bag', 'kubejs')
	clack('empty_bag', 'sugar_cube', 'sugar_bag', 'kubejs', 'supplementaries')
	clack('empty_crate', 'sourceberry_sack', 'source_berry_crate', 'arsdelight', 'ars_nouveau')
	event.remove({ id: 'arsdelight:source_berry_crate' })

	//crushed arkenium
	event.custom({
		type: 'create:crushing',
		ingredients: [
			{
				tag: 'c:raw_materials/arkenium'
			}
		],
		processing_time: 400,
		results: [
			{
				id: 'kubejs:crushed_raw_arkenium'
			},
			{
				chance: 0.75,
				id: 'create:experience_nugget'
			}
		]
	}).id('kubejs:crushing/raw_arkenium')
	event.custom({
		type: 'create:crushing',
		ingredients: [
			{
				tag: 'c:storage_blocks/raw_arkenium'
			}
		],
		processing_time: 400,
		results: [
			{
				count: 9,
				id: 'kubejs:crushed_raw_arkenium'
			},
			{
				chance: 0.75,
				count: 9,
				id: 'create:experience_nugget'
			}
		]
	}).id('kubejs:crushing/raw_arkenium_block')
	event.custom({
		type: 'create:crushing',
		ingredients: [
			{
				tag: 'c:ores/arkenium'
			}
		],
		processing_time: 400,
		results: [
			{
				id: 'kubejs:crushed_raw_arkenium'
			},
			{
				chance: 0.75,
				id: 'kubejs:crushed_raw_arkenium'
			},
			{
				chance: 0.75,
				id: 'create:experience_nugget'
			},
			{
				chance: 0.125,
				id: 'aether:holystone'
			}
		]
	}).id('kubejs:crushing/arkenium_ore')

	event.smelting('aethersdelight:arkenium_ingot', 'kubejs:crushed_raw_arkenium', 0.1).id('kubejs:smelting/arkenium_ingot')
	event.blasting('aethersdelight:arkenium_ingot', 'kubejs:crushed_raw_arkenium', 0.1).id('kubejs:blasting/arkenium_ingot')
	event.custom({
		type: 'create:splashing',
		ingredients: [
			{ item: 'kubejs:crushed_raw_arkenium' }
		],
		results: [
			{
				count: 9,
				id: 'aethersdelight:arkenium_nugget'
			},
			{
				chance: 0.75,
				id: 'aether:ambrosium_shard'
			}
		]
	}).id('kubejs:splashing/arkenium_nugget')

	//ancient duping
	//TODO

	//netherite nugget ^^
	event.shapeless('supplementaries:netherite_door', ['supplementaries:gold_door', 'kubejs:netherite_nugget']).id('supplementaries:netherite_door')
	event.shapeless('supplementaries:netherite_trapdoor', ['supplementaries:gold_trapdoor', 'kubejs:netherite_nugget']).id('supplementaries:netherite_trapdoor')
	event.shapeless('suppsquared:heavy_key', ['supplementaries:key', 'kubejs:netherite_nugget']).id('suppsquared:heavy_key')

	//chromaticness
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'superheated',
		ingredients: [
			{ tag: 'c:dusts/glowstone' },
			{ tag: 'c:dusts/glowstone' },
			{ tag: 'c:dusts/glowstone' },
			{ item: 'create:powdered_obsidian' },
			{ item: 'create:powdered_obsidian' },
			{ item: 'create:powdered_obsidian' },
			{ item: 'create:polished_rose_quartz' }
		],
		results: [
			{ id: 'create:chromatic_compound' }
		]
	})
	event.custom({
		type: 'create:item_application',
		ingredients: [
			{ tag: 'c:stripped_logs' },
			{ item: 'create:refined_radiance' }
		],
		results: [
			{ id: 'create:refined_radiance_casing' }
		]
	})
	event.custom({
		type: 'create:item_application',
		ingredients: [
			{ tag: 'c:stripped_woods' },
			{ item: 'create:refined_radiance' }
		],
		results: [
			{ id: 'create:refined_radiance_casing' }
		]
	})
	event.custom({
		type: 'create:item_application',
		ingredients: [
			{ tag: 'c:stripped_logs' },
			{ item: 'create:shadow_steel' }
		],
		results: [
			{ id: 'create:shadow_steel_casing' }
		]
	})
	event.custom({
		type: 'create:item_application',
		ingredients: [
			{ tag: 'c:stripped_woods' },
			{ item: 'create:shadow_steel' }
		],
		results: [
			{ id: 'create:shadow_steel_casing' }
		]
	})



	//content overlap
	// not really
	event.shapeless('armourers_workshop:soap', 'supplementaries:soap').id('armourers_workshop:items/soap')
	event.shapeless('supplementaries:soap', 'armourers_workshop:soap').id('armourers_workshop:items/supplementaries_soap')

	//anvil repair from Fixed
	event.custom({
		type: 'create:item_application',
		ingredients: [
			{
				item: 'minecraft:damaged_anvil'
			},
			{
				tag: 'c:storage_blocks/iron'
			}
		],
		results: [
			{
				id: 'minecraft:chipped_anvil'
			}
		]
	}).id('kubejs:item_application/anvil_repair')
	event.custom({
		type: 'create:item_application',
		ingredients: [
			{
				item: 'minecraft:chipped_anvil'
			},
			{
				tag: 'c:storage_blocks/iron'
			}
		],
		results: [
			{
				id: 'minecraft:anvil'
			}
		]
	}).id('kubejs:item_application/anvil_repair_full')

	//fixing what's broken
	event.shaped('saddle', [
		'lll',
		'lsl',
		'n n'
	], {
		l: '#c:leathers',
		s: 'string',
		n: '#c:nuggets/iron'
	}).id('aether:aether_saddle')

	//sussing
	event.custom({
		type: 'supplementaries:sus_crafting',
		ingredient: {
			item: 'minecraft:red_sand'
		},
		result: {
			id: 'betterarcheology:suspicious_red_sand'
		}
	}).id('betterarcheology:/suspicious_red_sand')
	//event.shapeless('betterarcheology:suspicious_red_sand', ['red_sand', 'gold_ingot']).id('betterarcheology:/suspicious_red_sand')
	event.custom({
		type: 'supplementaries:sus_crafting',
		ingredient: {
			item: 'minecraft:dirt'
		},
		result: {
			id: 'betterarcheology:suspicious_dirt'
		}
	}).id('betterarcheology:/suspicious_dirt')
	//event.shapeless('betterarcheology:suspicious_dirt', ['dirt', 'gold_ingot']).id('betterarcheology:/suspicious_dirt')
})