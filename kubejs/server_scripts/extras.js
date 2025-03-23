var materials = [
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
var colors = [
	'black',
	'blue',
	'brown',
	'cyan',
	'gray',
	'green',
	'light_blue',
	'light_gray',
	'lime',
	'magenta',
	'orange',
	'pink',
	'purple',
	'red',
	'white',
	'yellow'
]

ServerEvents.tags('item', event => {
	//knifing
	materials.forEach((material) => {
		event.add('c:tools/knife', 'cosmeticweaponsmod:' + material + '_knife')
		event.add('c:tools/knife', 'cosmeticweaponsmod:' + material + '_knife_reclaimed')
	})
	event.add('c:tools/knife', 'cosmeticweaponsmod:sculked_knife')

	//remove uncrafting
	colors.forEach((color) => {
		event.add('twilightforest:banned_uncrafting_ingredients', 'chalk:' + color + '_chalk')
	})
	event.add('c:eggs', 'deep_aether:quail_egg')
})

ServerEvents.recipes(event => {
	//remove 
	// content overlap
	/* event.remove({ id: 'adorn:trading_station' })
	event.remove({ id: 'adorn:traders_manual' }) */
	event.stonecutting('create_compressed:sturdy_sheet_block', 'create_ironworks:sturdy_sheet_block').id('create_compressed:sturdy_sheet_block')
	event.stonecutting('create_ironworks:sturdy_sheet_block', 'create_compressed:sturdy_sheet_block').id('create_compressed:sturdy_sheet')

	//duplicates
	event.remove({ id: 'minecraft:spectral_arrow' })
	/* event.remove({ id: 'adorn:copper_nugget' }) */
	event.remove({ id: 'deep_aether:skyroot_crafting_table' })
	// too many cakes'n'pies
	event.remove({ id: 'minecraft:cake' })
	event.remove({ id: 'aether:moa_egg_cake' })
	event.remove({ id: 'deep_aether:cake' })
	event.remove({ id: 'aether:skyroot_milk_bucket_cake' })
	event.remove({ id: 'aether:skyroot_milk_bucket_moa_egg_cake' })
	event.remove({ id: 'deep_aether:skyroot_milk_bucket_cake' })
	event.remove({ id: 'aether:moa_egg_pumpkin_pie' })
	event.remove({ id: 'deep_aether:pumpkin_pie' })

	//parity
	event.shaped('lodestone', [
		'CCC',
		'CIC',
		'CCC'
	], {
		C: 'minecraft:chiseled_stone_bricks',
		I: '#c:ingots/iron'
	}).id('lodestone')

	//missing
	event.shaped('aethersdelight:arkenium_knife', [
		'A',
		'S'
	], {
		A: 'aethersdelight:arkenium_ingot',
		S: 'aether:skyroot_stick'
	})

	event.shapeless('twilightforest:magic_painting', 'twilightforest:magic_painting')
	event.custom({
		type: "apothic_enchanting:infusion",
		input: {
			item: "minecraft:painting"
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
			id: "twilightforest:magic_painting"
		}
	})

	//alloying
	event.custom({
		type: "create:mixing",
		heat_requirement: "superheated",
		ingredients: [
			{
				tag: "c:ingots/gold"
			},
			{
				tag: "c:ingots/gold"
			},
			{
				tag: "c:ingots/gold"
			},
			{
				tag: "c:ingots/gold"
			},
			{
				item: "minecraft:netherite_scrap"
			},
			{
				item: "minecraft:netherite_scrap"
			},
			{
				item: "minecraft:netherite_scrap"
			},
			{
				item: "minecraft:netherite_scrap"
			}
		],
		results: [
			{
				id: "minecraft:netherite_ingot"
			}
		]
	}).id('minecraft:netherite_ingot')
	event.custom({
		type: "create:mixing",
		heat_requirement: "heated",
		ingredients: [
			{
				tag: "c:ingots/gold"
			},
			{
				tag: "c:ingots/gold"
			},
			{
				tag: "c:ingots/gold"
			},
			{
				tag: "c:ingots/copper"
			}
		],
		results: [
			{
				count: 2,
				id: "cosmeticarmoursmod:rose_gold_ingot"
			}
		]
	}).id('cosmeticarmoursmod:rose_gold_crafting_rec')
	event.custom({
		type: "create:mixing",
		heat_requirement: "heated",
		ingredients: [
			{
				tag: "c:ingots/iron"
			},
			{
				tag: "twilightforest:fiery_vial"
			}
		],
		results: [
			{
				id: "twilightforest:fiery_ingot"
			}
		]
	}).id('twilightforest:equipment/fiery_ingot_crafting')
	event.custom({
		type: "create:mixing",
		heat_requirement: "heated",
		ingredients: [
			{
				item: "aether_treasure_reforging:pyral_shard"
			},
			{
				item: "aether_treasure_reforging:pyral_shard"
			},
			{
				item: "aether_treasure_reforging:pyral_shard"
			},
			{
				item: "aether_treasure_reforging:pyral_shard"
			},
			{
				tag: "c:obsidians"
			},
			{
				tag: "c:obsidians"
			}
		],
		results: [
			{
				id: "aether_treasure_reforging:pyral_ingot"
			}
		]
	}).id('aether_treasure_reforging:pyral_ingot')
	event.custom({
		type: "create:mixing",
		heat_requirement: "superheated",
		ingredients: [
			{
				item: "aether_treasure_reforging:pyral_ingot"
			},
			{
				item: "aether_treasure_reforging:valkyrum_ingot"
			},
			{
				item: "aether_treasure_reforging:neptune_mesh"
			},
			{
				tag: "aether:processed/gravitite"
			},
			{
				item: "deep_aether:skyjade"
			},
			{
				tag: "aether:gems/zanite"
			},
			{
				item: "aethersdelight:arkenium_ingot"
			},
			{
				item: "aether:ambrosium_shard"
			},
			{
				item: "deep_aether:chromatic_aercloud"
			},
			{
				item: "deep_aether:chromatic_aercloud"
			},
			{
				item: "deep_aether:chromatic_aercloud"
			},
			{
				item: "deep_aether:chromatic_aercloud"
			},
			{
				item: "deep_aether:chromatic_aercloud"
			},
			{
				item: "deep_aether:chromatic_aercloud"
			},
			{
				item: "deep_aether:chromatic_aercloud"
			},
			{
				item: "deep_aether:chromatic_aercloud"
			}
		],
		results: [
			{
				id: "deep_aether:stratus_ingot"
			}
		]
	}).id('deep_aether:stratus_ingot')

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
	// tin-tin-tin
	event.remove({ output: 'create_ironworks:crushed_raw_tin', type: 'create:crushing' })
	event.custom({
		type: "create:crushing",
		ingredients: [
			{
				item: "create_ironworks:deepslate_tin_ore"
			}
		],
		processing_time: 350,
		results: [
			{
				count: 7,
				id: "create:crushed_raw_tin"
			},
			{
				chance: 0.25,
				id: "create:crushed_raw_tin"
			},
			{
				chance: 0.75,
				id: "create:experience_nugget"
			},
			{
				chance: 0.125,
				id: "minecraft:cobbled_deepslate"
			}
		]
	}).id('create_ironworks:materials/tin/crushing/deepslate_tin_ore')
	event.custom({
		type: "create:crushing",
		ingredients: [
			{
				item: "create_ironworks:raw_tin"
			}
		],
		processing_time: 400,
		results: [
			{
				id: "create:crushed_raw_tin"
			},
			{
				chance: 0.75,
				id: "create:experience_nugget"
			}
		]
	}).id('create_ironworks:materials/tin/crushing/raw_tin')
	event.custom({
		type: "create:crushing",
		ingredients: [
			{
				item: "create_ironworks:raw_tin_block"
			}
		],
		processing_time: 400,
		results: [
			{
				count: 9,
				id: "create:crushed_raw_tin"
			},
			{
				chance: 0.75,
				count: 9,
				id: "create:experience_nugget"
			}
		]
	}).id('create_ironworks:materials/tin/crushing/raw_tin_block')
	event.custom({
		type: "create:crushing",
		ingredients: [
			{
				item: "create_ironworks:tin_ore"
			}
		],
		processing_time: 250,
		results: [
			{
				count: 5,
				id: "create:crushed_raw_tin"
			},
			{
				chance: 0.25,
				id: "create:crushed_raw_tin"
			},
			{
				chance: 0.75,
				id: "create:experience_nugget"
			},
			{
				chance: 0.125,
				id: "minecraft:cobblestone"
			}
		]
	}).id('create_ironworks:materials/tin/crushing/tin_ore')
	//  doughing around
	event.remove({ id: 'aethersdelight:wheat_dough_from_skyroot_bucket' })
	event.remove({ id: 'create:crafting/appliances/dough' })
	event.shapeless('farmersdelight:wheat_dough', ['potion[potion_contents={potion:"minecraft:water"}]', '#c:flours/wheat']).replaceIngredient('potion[potion_contents={potion:"minecraft:water"}]', 'glass_bottle').id('create:crafting/appliances/dough_manual_only')
	event.remove({ id: 'farmersdelight:wheat_dough_from_water' })
	event.shapeless(Item.of('farmersdelight:wheat_dough', 3), ['#c:buckets/water', '#c:flours/wheat', '#c:flours/wheat', '#c:flours/wheat']).replaceIngredient('water_bucket', 'bucket').replaceIngredient('aether:skyroot_water_bucket', 'aether:skyroot_bucket').id('farmersdelight:wheat_dough_from_water_manual_only')
	event.shapeless(Item.of('farmersdelight:wheat_dough', 3), ['#c:eggs', '#c:flours/wheat', '#c:flours/wheat', '#c:flours/wheat']).id('farmersdelight:wheat_dough_from_eggs')
	event.custom({
		type: "create:splashing",
		ingredients: [
			{
				tag: "c:flours/wheat"
			}
		],
		results: [
			{
				id: "farmersdelight:wheat_dough"
			}
		]
	}).id('create:splashing/wheat_flour')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				tag: "c:flours/wheat"
			},
			{
				type: "fluid_stack",
				amount: 250,
				fluid: "minecraft:water"
			}
		],
		results: [
			{
				id: "farmersdelight:wheat_dough"
			}
		]
	}).id('create:mixing/dough_by_mixing')
	//  doughing around 2: electric boogaloo
	event.remove({ input: 'create:dough' })
	event.shaped('cake', [
		' M ',
		'ses',
		' d '
	], {
		M: '#c:foods/milk',
		s: 'sugar',
		e: '#c:eggs',
		d: 'farmersdelight:wheat_dough'
	}).id('create:crafting/curiosities/cake')
	event.shapeless('slime_ball', ['farmersdelight:wheat_dough', '#c:dyes/lime']).id('create:crafting/appliances/slime_ball')
	event.shapeless(Item.of('creategarnished:peanut_butter_cookie', 4), ['farmersdelight:wheat_dough', '#c:bottles/peanut_butter', 'sugar', '#c:eggs']).replaceIngredient('creategarnished:peanut_butter_bottle', 'glass_bottle').id('creategarnished:crafting/peanut_butter_cookie')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "farmersdelight:wheat_dough"
			},
			{
				item: "minecraft:sugar"
			},
			{
				tag: "c:eggs"
			},
			{
				type: "fluid_stack",
				amount: 250,
				fluid: "creategarnished:peanut_butter"
			}
		],
		results: [
			{
				count: 4,
				id: "creategarnished:peanut_butter_cookie"
			}
		]
	}).id('creategarnished:mixing/peanut_butter_cookie_by_mixing')

	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				tag: "create:pulpifiable"
			},
			{
				type: "fluid_stack",
				amount: 2000,
				fluid: "minecraft:water"
			}
		],
		results: [
			{
				id: "create_compressed:pulp_block"
			}
		]
	}).id('create_compressed:mixing/pulp_block')

	event.shapeless('armourers_workshop:soap', 'supplementaries:soap').id('armourers_workshop:items/soap')
	event.shapeless('supplementaries:soap', 'armourers_workshop:soap').id('armourers_workshop:items/supplementaries_soap')

	event.shaped('fletching_table', [
		'CC',
		'PP',
		'PP'
	], {
		C: '#c:ingots/copper',
		P: '#aether:planks_crafting'
	}).id('aether:skyroot_fletching_table')

	//unbucketing the create's
	// water
	event.shapeless(Item.of('supplementaries:soap', 6), ['#c:buckets/water', 'supplementaries:ash', 'supplementaries:ash', 'supplementaries:ash', 'supplementaries:ash', '#c:foods/raw_pork']).id('supplementaries:soap_manual_only')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "supplementaries:ash"
			},
			{
				item: "supplementaries:ash"
			},
			{
				item: "supplementaries:ash"
			},
			{
				item: "supplementaries:ash"
			},
			{
				tag: "c:foods/raw_pork"
			},
			{
				type: "fluid_stack",
				amount: 1000,
				fluid: "minecraft:water"
			}
		],
		results: [
			{
				count: 6,
				id: "supplementaries:soap"
			}
		]
	}).id('supplementaries:soap')
	event.remove({ id: 'create_compressed:dough_block_from_flour' })
	event.shapeless('create_compressed:dough_block', ['#c:buckets/water', 'create_compressed:wheat_flour_pile']).id('create_compressed:dough_block_from_flour_manual_only')
	// milk
	event.remove({ id: 'farmersdelight:milk_bottle' })
	event.remove({ id: 'aethersdelight:milk_bottles_from_skyroot_bucket' })
	event.shapeless(Item.of('farmersdelight:milk_bottle', 4), ['#c:buckets/milk', 'glass_bottle', 'glass_bottle', 'glass_bottle', 'glass_bottle']).id('farmersdelight:milk_bottle_manual_only')
	event.shapeless('aethersdelight:aechor_ice_cream_base', ['aether:aechor_petal', 'sugar', 'sugar', '#c:eggs', '#c:foods/milk', 'aether:skyroot_bucket']).id('aethersdelight:aechor_ice_cream_base_manual_only')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "aether:aechor_petal"
			},
			{
				item: "minecraft:sugar"
			},
			{
				item: "minecraft:sugar"
			},
			{
				tag: "c:eggs"
			},
			{
				item: "aether:skyroot_bucket"
			},
			{
				type: "fluid_tag",
				amount: 250,
				fluid_tag: "c:milk"
			}
		],
		results: [
			{
				id: "aethersdelight:aechor_ice_cream_base"
			}
		]
	}).id('aethersdelight:aechor_ice_cream_base')
	event.shapeless(Item.of('creategarnished:bear_claw', 4), ['#c:flours', '#c:eggs', '#c:foods/milk', 'creategarnished:almond_paste', 'creategarnished:almond_paste', 'sugar', 'sugar']).id('creategarnished:crafting/bear_claw_manual_only')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				tag: "c:flours"
			},
			{
				tag: "c:eggs"
			},
			{
				item: "creategarnished:almond_paste"
			},
			{
				item: "creategarnished:almond_paste"
			},
			{
				item: "minecraft:sugar"
			},
			{
				item: "minecraft:sugar"
			},
			{
				type: "fluid_tag",
				amount: 250,
				fluid_tag: "c:milk"
			}
		],
		results: [
			{
				count: 4,
				id: "creategarnished:bear_claw"
			}
		]
	}).id('creategarnished:crafting/bear_claw')
	event.shapeless('snowyspirit:eggnog', ['#c:crops/ginger', '#c:foods/milk', '#c:eggs', 'glass_bottle']).id('snowyspirit:eggnog_manual_only')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				tag: "c:crops/ginger"
			},
			{
				tag: "c:eggs"
			},
			{
				item: "minecraft:glass_bottle"
			},
			{
				type: "fluid_tag",
				amount: 250,
				fluid_tag: "c:milk"
			}
		],
		results: [
			{
				id: "snowyspirit:eggnog"
			}
		]
	}).id('snowyspirit:eggnog')
	event.shapeless(Item.of('supplementaries:pancake', 3), ['sugar', '#c:foods/milk', 'farmersdelight:wheat_dough', '#c:eggs']).id('supplementaries:integration/pancake_fd_manual_only')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "minecraft:sugar"
			},
			{
				item: "farmersdelight:wheat_dough"
			},
			{
				tag: "c:eggs"
			},
			{
				type: "fluid_tag",
				amount: 250,
				fluid_tag: "c:milk"
			}
		],
		results: [
			{
				count: 3,
				id: "supplementaries:pancake"
			}
		]
	}).id('supplementaries:integration/pancake_fd')
	event.shapeless('farmersdelight:stuffed_potato', ['minecraft:baked_potato', '#c:foods/cooked_beef', '#c:foods/milk']).id('farmersdelight:stuffed_potato_manual_only')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "minecraft:baked_potato"
			},
			{
				tag: "c:foods/cooked_beef"
			},
			{
				type: "fluid_tag",
				amount: 250,
				fluid_tag: "c:milk"
			}
		],
		results: [
			{
				id: "farmersdelight:stuffed_potato"
			}
		]
	}).id('farmersdelight:stuffed_potato')
	event.shapeless('farmersdelight:shepherds_pie_block', ['minecraft:baked_potato', '#c:foods/milk', 'minecraft:baked_potato', '#c:foods/cooked_mutton', '#c:foods/cooked_mutton', '#c:foods/cooked_mutton', '#c:crops/onion', 'bowl', '#c:crops/onion']).id('farmersdelight:shepherds_pie_block_manual_only')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "minecraft:baked_potato"
			},
			{
				item: "minecraft:baked_potato"
			},
			{
				tag: "c:foods/cooked_mutton"
			},
			{
				tag: "c:foods/cooked_mutton"
			},
			{
				tag: "c:foods/cooked_mutton"
			},
			{
				tag: "c:crops/onion"
			},
			{
				tag: "c:crops/onion"
			},
			{
				item: "minecraft:bowl"
			},
			{
				type: "fluid_tag",
				amount: 250,
				fluid_tag: "c:milk"
			}
		],
		results: [
			{
				id: "farmersdelight:shepherds_pie_block"
			}
		]
	}).id('farmersdelight:shepherds_pie_block')

	// lava
	event.shapeless('obsidian', ['#c:buckets/lava', 'ars_nouveau:water_essence']).id('ars_nouveau:water_essence_to_obsidian_manual_only')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "ars_nouveau:water_essence"
			},
			{
				type: "fluid_stack",
				amount: 1000,
				fluid: "minecraft:lava"
			}
		],
		results: [
			{
				id: "minecraft:obsidian"
			}
		]
	}).id('ars_nouveau:water_essence_to_obsidian')

	//fixing what's broken
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "create_compressed:wheat_flour_pile"
			},
			{
				type: "fluid_stack",
				amount: 2000,
				fluid: "minecraft:water"
			}
		],
		results: [
			{
				id: "create_compressed:dough_block"
			}
		]
	}).id('create_compressed:mixing/dough_block')
	event.custom({
		type: "create:sandpaper_polishing",
		ingredients: [
			{
				item: "create_compressed:rose_quartz_crystal_block"
			}
		],
		results: [
			{
				id: "create_compressed:rose_quartz_polished_block"
			}
		]
	}).id('create_compressed:sandpaper_polishing/polished_rose_quartz_block')
	event.custom({
		type: "create:splashing",
		ingredients: [
			{
				item: "create_compressed:crushed_copper_pile"
			}
		],
		results: [
			{
				count: 81,
				id: "create:copper_nugget"
			},
			{
				chance: 0.5,
				count: 9,
				id: "minecraft:clay_ball"
			}
		]
	}).id('create_compressed:splashing/crushed_raw_copper_pile')
	event.custom({
		type: "create:splashing",
		ingredients: [
			{
				item: "create_compressed:crushed_gold_pile"
			}
		],
		results: [
			{
				count: 81,
				id: "minecraft:gold_nugget"
			},
			{
				chance: 0.5,
				count: 9,
				id: "minecraft:quartz"
			}
		]
	}).id('create_compressed:splashing/crushed_raw_gold_pile')
	event.custom({
		type: "create:splashing",
		ingredients: [
			{
				item: "create_compressed:crushed_iron_pile"
			}
		],
		results: [
			{
				count: 81,
				id: "minecraft:iron_nugget"
			},
			{
				chance: 0.75,
				count: 9,
				id: "minecraft:redstone"
			}
		]
	}).id('create_compressed:splashing/crushed_raw_iron_pile')
	event.custom({
		type: "create:splashing",
		ingredients: [
			{
				item: "create_compressed:crushed_zinc_pile"
			}
		],
		results: [
			{
				count: 81,
				id: "create:zinc_nugget"
			},
			{
				chance: 0.25,
				count: 9,
				id: "minecraft:gunpowder"
			}
		]
	}).id('create_compressed:splashing/crushed_raw_zinc_pile')
	event.custom({
		type: "create:splashing",
		ingredients: [
			{
				item: "create_compressed:wheat_flour_pile"
			}
		],
		results: [
			{
				id: "create_compressed:dough_block"
			}
		]
	}).id('create_compressed:splashing/wheat_flour_pile')

	//discovering something doesn't exist
	event.remove({ id: 'create_dd:crafting/steel_block_from_compacting' })
	event.remove({ id: 'create_dd:crafting/steel_ingot_from_compacting' })
	event.remove({ id: 'create_dd:crafting/steel_ingot_from_decompacting' })
	event.remove({ id: 'create_dd:crafting/steel_nugget_from_decompacting' })
	event.remove({ id: 'create_dd:crafting/tin_block_from_compacting' })
	event.remove({ id: 'create_dd:crafting/tin_ingot_from_compacting' })
	event.remove({ id: 'create_dd:crafting/tin_ingot_from_decompacting' })
	event.remove({ id: 'create_dd:crafting/tin_nugget_from_decompacting' })
	event.remove({ id: 'create_dd:ironworks_compat/raw_tin_exchange' })
	event.remove({ id: 'tconstruct:common/materials/steel_block_from_ingots' })
	event.remove({ id: 'tconstruct:common/materials/steel_ingot_from_block' })
	event.remove({ id: 'tconstruct:common/materials/steel_ingot_from_nuggets' })
	event.remove({ id: 'tconstruct:common/materials/steel_nugget_from_ingot' })
	event.custom({
		type: "create:splashing",
		ingredients: [
			{
				item: "create_compressed:crushed_tin_pile"
			}
		],
		results: [
			{
				count: 81,
				id: "create_ironworks:tin_nugget"
			},
			{
				chance: 0.5,
				count: 9,
				id: "minecraft:glowstone_dust"
			}
		]
	}).id('create_compressed:splashing/ironworks/crushed_raw_tin_pile')

	//sussing
	event.custom({
		type: "supplementaries:sus_crafting",
		ingredient: {
			item: "minecraft:red_sand"
		},
		result: {
			id: "betterarcheology:suspicious_red_sand"
		}
	})
	//event.shapeless('betterarcheology:suspicious_red_sand', ['red_sand', 'gold_ingot']).id('betterarcheology:/suspicious_red_sand')
	event.custom({
		type: "supplementaries:sus_crafting",
		ingredient: {
			item: "minecraft:dirt"
		},
		result: {
			id: "betterarcheology:suspicious_dirt"
		}
	}).id('betterarcheology:/suspicious_dirt')
	//event.shapeless('betterarcheology:suspicious_dirt', ['dirt', 'gold_ingot']).id('betterarcheology:/suspicious_dirt')
})