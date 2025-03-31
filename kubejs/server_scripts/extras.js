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
	//tag you're it
	event.add('c:eggs', 'deep_aether:quail_egg')

	event.remove('curios:head', 'create:goggles')
	event.add('accessories:face', 'create:goggles')
})

ServerEvents.recipes(event => {
	//remove 
	// content overlap
	/* event.remove({ id: 'adorn:trading_station' })
	event.remove({ id: 'adorn:traders_manual' }) */
	event.remove({ id: 'netherdepthsupgrade:lava_fishing_rod' })
	event.stonecutting('create_compressed:sturdy_sheet_block', 'create_ironworks:sturdy_sheet_block').id('create_compressed:sturdy_sheet_block')
	event.stonecutting('create_ironworks:sturdy_sheet_block', 'create_compressed:sturdy_sheet_block').id('create_compressed:sturdy_sheet')

	event.remove({ mod: 'waterframes' })

	// duplicates
	event.remove({ id: 'minecraft:spectral_arrow' })
	/* event.remove({ id: 'adorn:copper_nugget' }) */
	event.remove({ id: 'terralith:cobblestone_from_stone_slab' })
	event.remove({ id: 'terralith:dispenser_alt' })
	event.remove({ id: 'terralith:dropper_alt' })
	event.remove({ id: 'terralith:lever_alt' })
	event.remove({ id: 'terralith:observer_alt' })
	event.remove({ id: 'terralith:piston_alt' })
	//  too many cakes'n'pies
	event.remove({ id: 'farmersdelight:cake_from_milk_bottle' })
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
	event.remove({ id: 'create_ironworks:materials/alloys/brass_from_ingots' })
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
			},
			{
				chance: 0.15,
				id: "kubejs:netherite_chunk"
			},
			{
				chance: 0.8,
				id: "minecraft:gold_nugget"
			},
			{
				chance: 0.90,
				id: "create:experience_nugget"
			}
		]
	}).id('minecraft:netherite_ingot')
	event.custom({
		type: "create:crushing",
		ingredients: [
			{
				item: "kubejs:netherite_chunk"
			}
		],
		processing_time: 600,
		results: [
			{
				count: 3,
				chance: 0.1,
				id: "kubejs:netherite_nugget"
			},
			{
				count: 3,
				chance: 0.25,
				id: "minecraft:gold_nugget"
			},
			{
				chance: 0.50,
				id: "create:experience_nugget"
			}
		]
	}).id('kubejs:netherite_chunk')
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
			},
			{
				chance: 0.6,
				id: "minecraft:gold_nugget"
			},
			{
				chance: 0.2,
				id: "create:copper_nugget"
			},
			{
				chance: 0.75,
				id: "create:experience_nugget"
			}
		]
	}).id('cosmeticarmoursmod:rose_gold_crafting_rec')
	event.custom({
		type: "create:mixing",
		heat_requirement: "heated",
		ingredients: [
			{
				item: "create:crushed_raw_gold"
			},
			{
				item: "create:crushed_raw_gold"
			},
			{
				item: "create:crushed_raw_gold"
			},
			{
				item: "create:crushed_raw_copper"
			}
		],
		results: [
			{
				count: 2,
				id: "cosmeticarmoursmod:rose_gold_ingot"
			},
			{
				chance: 0.6,
				id: "minecraft:gold_nugget"
			},
			{
				chance: 0.2,
				id: "create:copper_nugget"
			},
			{
				chance: 0.75,
				id: "create:experience_nugget"
			}
		]
	}).id('cosmeticarmoursmod:rose_gold_from_crushed')
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
	}).id('create:crushing/deepslate_tin_ore')
	event.custom({
		type: "create:crushing",
		ingredients: [
			{
				tag: "c:raw_materials/tin"
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
	}).id('create:crushing/raw_tin')
	event.custom({
		type: "create:crushing",
		ingredients: [
			{
				tag: "c:storage_blocks/raw_tin"
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
	}).id('create:crushing/raw_tin_block')
	event.custom({
		type: "create:crushing",
		ingredients: [
			{
				item: "create_ironworks:tin_ore"
			}
		],
		processing_time: 400,
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
	}).id('create:crushing/tin_ore')
	//  tin two
	event.smelting('create_ironworks:tin_ingot', 'create:crushed_raw_tin', 0.1).id('create_ironworks:materials/tin/smelting/tin_ingot_from_crushed_raw_tin')
	event.blasting('create_ironworks:tin_ingot', 'create:crushed_raw_tin', 0.1).id('create_ironworks:materials/tin/blasting/tin_ingot_from_crushed_raw_tin')
	event.custom({
		type: "create:splashing",
		ingredients: [
			{
				item: "create:crushed_raw_tin"
			}
		],
		results: [
			{
				count: 9,
				id: "create_ironworks:tin_nugget"
			},
			{
				chance: 0.5,
				id: "minecraft:glowstone_dust"
			}
		]
	}).id('create_ironworks:materials/tin/splashing/tin_nuggets_from_raw_tin')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "create:crushed_raw_copper"
			},
			{
				item: "create:crushed_raw_tin"
			}
		],
		results: [
			{
				id: "create_ironworks:bronze_ingot"
			},
			{
				chance: 0.5,
				id: "create:copper_nugget"
			},
			{
				chance: 0.5,
				id: "create_ironworks:tin_nugget"
			},
			{
				chance: 0.75,
				id: "create:experience_nugget"
			}
		]
	}).id('create_ironworks:materials/alloys/bronze_from_crushed')
	// wheat flouring
	event.remove({ id: 'minecraft:bread' })
	event.shapeless('2x snowyspirit:gingerbread', [
		'snowyspirit:ginger', '#c:flours', '#c:flours'
	]).id('snowyspirit:gingerbread')
	event.shapeless('8x snowyspirit:gingerbread', [
		'create_compressed:wheat_flour_pile', 'snowyspirit:ginger', 'snowyspirit:ginger', 'snowyspirit:ginger', 'snowyspirit:ginger'
	]).id('snowyspirit:gingerbread_compressed')
	event.shapeless('8x cookie', [
		'#c:crops/cocoa_bean', '#c:flours', '#c:flours'
	]).id('minecraft:cookie')
	event.shaped('cake', [
		'mmm',
		'ses',
		'fff'
	], {
		m: '#c:foods/milk',
		s: 'sugar',
		e: '#c:eggs',
		f: '#c:flours'
	}).id('minecraft:cake')
	event.shaped('aethersdelight:white_apple_pie', [
		'fff',
		'www',
		'sps'
	], {
		f: '#c:flours',
		w: 'aether:white_apple',
		s: 'sugar',
		p: 'farmersdelight:pie_crust'
	}).id('aethersdelight:white_apple_pie')
	event.shapeless('3x aethersdelight:gingerbread_dough', [
		'#c:eggs', 'aethersdelight:ginger_spice', '#c:flours', 'sugar'
	]).id('aethersdelight:gingerbread_dough')
	event.shaped('2x aethersdelight:blue_berry_muffin', [
		'bsb',
		'fmf'
	], {
		b: 'aether:blue_berry',
		s: 'sugar',
		f: '#c:flours',
		m: '#c:foods/milk'
	}).id('aethersdelight:blue_berry_muffin')
	event.shaped('2x aethersdelight:enchanted_berry_muffin', [
		'bsb',
		'fmf'
	], {
		b: 'aether:enchanted_berry',
		s: 'sugar',
		f: '#c:flours',
		m: '#c:foods/milk'
	}).id('aethersdelight:enchanted_berry_muffin')
	event.shapeless('8x ends_delight:chorus_cookie', [
		'#c:flours', '#c:flours', 'ends_delight:chorus_fruit_grain'
	]).id('ends_delight:food/chorus_cookie')
	event.shaped('ends_delight:chorus_fruit_pie', [
		'fff',
		'Pcd',
		'sps'
	], {
		f: '#c:flours',
		P: 'poppy',
		c: ['chorus_fruit', 'ends_delight:chorus_fruit_grain'],
		d: 'ends_delight:dried_chorus_flower',
		s: 'sugar',
		p: 'farmersdelight:pie_crust'
	}).id('ends_delight:food/chorus_fruit_pie')
	event.shapeless('ars_nouveau:source_berry_roll', [
		'ars_nouveau:sourceberry_bush', '#c:flours', '#c:flours', '#c:flours'
	]).id('ars_nouveau:source_berry_roll')
	event.shaped('farmersdelight:pie_crust', [
		'fmf',
		' f '
	], {
		f: '#c:flours',
		m: '#c:foods/milk'
	}).id('farmersdelight:pie_crust')
	event.shaped('farmersdelight:apple_pie', [
		'fff',
		'aaa',
		'sps'
	], {
		f: '#c:flours',
		a: 'apple',
		s: 'sugar',
		p: 'farmersdelight:pie_crust'
	}).id('farmersdelight:apple_pie')
	event.shapeless('8x farmersdelight:sweet_berry_cookie', [
		'sweet_berries', '#c:flours', '#c:flours'
	]).id('farmersdelight:sweet_berry_cookie')
	event.shapeless('8x farmersdelight:honey_cookie', [
		'honey_bottle', '#c:flours', '#c:flours'
	]).id('farmersdelight:honey_cookie_manual_only')
	event.shaped('arsdelight:mendosteen_pie', [
		'fPf',
		'SjS',
		'sps'
	], {
		f: '#c:flours',
		P: 'ars_nouveau:mendosteen_pod',
		S: 'ars_nouveau:sourceberry_bush',
		j: 'arsdelight:activated_mendosteen_jam',
		s: 'sugar',
		p: 'farmersdelight:pie_crust'
	}).id('arsdelight:mendosteen_pie')
	event.shaped('arsdelight:bastion_pie', [
		'fPf',
		'SjS',
		'sps'
	], {
		f: '#c:flours',
		P: 'ars_nouveau:bastion_pod',
		S: 'ars_nouveau:sourceberry_bush',
		j: 'arsdelight:activated_bastion_jam',
		s: 'sugar',
		p: 'farmersdelight:pie_crust'
	}).id('arsdelight:bastion_pie')
	event.shaped('arsdelight:bombegrante_pie', [
		'fPf',
		'SjS',
		'sps'
	], {
		f: '#c:flours',
		P: 'ars_nouveau:bombegranate_pod',
		S: 'ars_nouveau:sourceberry_bush',
		j: 'arsdelight:neutralized_bombegrante_jam',
		s: 'sugar',
		p: 'farmersdelight:pie_crust'
	}).id('arsdelight:bombegrante_pie')
	event.shaped('arsdelight:frostaya_pie', [
		'fPf',
		'SjS',
		'sps'
	], {
		f: '#c:flours',
		P: 'ars_nouveau:frostaya_pod',
		S: 'ars_nouveau:sourceberry_bush',
		j: 'arsdelight:neutralized_frostaya_jam',
		s: 'sugar',
		p: 'farmersdelight:pie_crust'
	}).id('arsdelight:frostaya_pie')
	event.shapeless('8x arsdelight:source_berry_cookie', [
		'ars_nouveau:sourceberry_bush', '#c:flours', '#c:flours'
	]).id('arsdelight:source_berry_cookie')
	event.shaped('cosmeticarmoursmod:christmas_pudding_beanie_helmet', [
		'sSs',
		'ses',
		'fff'
	], {
		s: 'sugar',
		S: 'sweet_berries',
		e: '#c:eggs',
		f: '#c:flours'
	}).id('cosmeticarmoursmod:christmas_pudding_food_rec')
	event.custom({
		type: "farmersdelight:cooking",
		container: {
			id: "minecraft:paper"
		},
		experience: 0.1,
		ingredients: [
			{
				item: "arsdelight:arch_sauce"
			},
			{
				item: "ars_nouveau:sourceberry_bush"
			},
			{
				tag: "c:eggs"
			},
			{
				tag: "c:flours"
			},
			{
				tag: "c:foods/milk"
			}
		],
		recipe_book_tab: "meals",
		result: {
			count: 2,
			id: "arsdelight:source_berry_cupcake"
		}
	}).id('arsdelight:cooking/cooking/source_berry_cupcake')
	event.custom({
		type: "farmersdelight:cooking",
		container: {
			id: "minecraft:bowl"
		},
		experience: 0.35,
		ingredients: [
			{
				item: "aethersdelight:ginger"
			},
			{
				item: "aethersdelight:wing"
			},
			{
				item: "aethersdelight:wing"
			},
			{
				item: "minecraft:beef"
			},
			{
				tag: "c:flours"
			}
		],
		recipe_book_tab: "meals",
		result: {
			id: "aethersdelight:flying_beef_stew"
		}
	}).id('farmersdelight:cooking/flying_beef_stew')
	//  doughing around
	event.remove({ id: 'aethersdelight:wheat_dough_from_skyroot_bucket' })
	event.remove({ id: 'create:crafting/appliances/dough' })
	event.shapeless('farmersdelight:wheat_dough', [
		'potion[potion_contents={potion:"minecraft:water"}]', '#c:flours/wheat'
	]).replaceIngredient('potion[potion_contents={potion:"minecraft:water"}]', 'glass_bottle').id('create:crafting/appliances/dough_manual_only')
	event.remove({ id: 'farmersdelight:wheat_dough_from_water' })
	event.shapeless('3x farmersdelight:wheat_dough', [
		'#c:buckets/water', '#c:flours/wheat', '#c:flours/wheat', '#c:flours/wheat'
	]).id('farmersdelight:wheat_dough_from_water_manual_only')
	event.shapeless('3x farmersdelight:wheat_dough', [
		'#c:eggs', '#c:flours/wheat', '#c:flours/wheat', '#c:flours/wheat'
	]).id('farmersdelight:wheat_dough_from_eggs')
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
	event.shapeless('slime_ball', [
		'farmersdelight:wheat_dough', '#c:dyes/lime'
	]).id('create:crafting/appliances/slime_ball')
	event.shapeless('4x creategarnished:peanut_butter_cookie', [
		'farmersdelight:wheat_dough', '#c:eggs', 'sugar', '#c:bottles/peanut_butter'
	]).replaceIngredient('creategarnished:peanut_butter_bottle', 'glass_bottle').id('creategarnished:crafting/peanut_butter_cookie_manual_only')
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
	}).id('creategarnished:crafting/peanut_butter_cookie')
	//  garnishts
	event.shapeless('creategarnished:praline', [
		'create:bar_of_chocolate', '#c:hazelnuts', '#c:hazelnuts', '#c:hazelnuts', 'sugar', 'sugar', '#c:bottles/birch_syrup'
	]).replaceIngredient('creategarnished:birch_syrup_bottle', 'glass_bottle').id('creategarnished:crafting/praline_manual_only')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "create:bar_of_chocolate"
			},
			{
				tag: "c:hazelnuts"
			},
			{
				tag: "c:hazelnuts"
			},
			{
				tag: "c:hazelnuts"
			},
			{
				item: "minecraft:sugar"
			},
			{
				item: "minecraft:sugar"
			},
			{
				type: "fluid_stack",
				amount: 250,
				fluid: "creategarnished:birch_syrup"
			}
		],
		results: [
			{
				id: "creategarnished:praline"
			}
		]
	}).id('creategarnished:crafting/praline')
	event.shapeless('4x creategarnished:churchkhela', [
		'string', '#c:flours', '#c:almonds', '#c:almonds', 'creategarnished:beetroot_juice_bottle'
	]).replaceIngredient('creategarnished:beetroot_juice_bottle', 'glass_bottle').id('creategarnished:crafting/churchkhela_manual_only')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "minecraft:string"
			},
			{
				tag: "c:flours"
			},
			{
				tag: "c:almonds"
			},
			{
				tag: "c:almonds"
			},
			{
				type: "fluid_stack",
				amount: 100,
				fluid: "creategarnished:beetroot_juice"
			}
		],
		results: [
			{
				count: 4,
				id: "creategarnished:churchkhela"
			}
		]
	}).id('creategarnished:crafting/churchkhela')
	// bulking
	event.custom({
		type: "create:crushing",
		ingredients: [
			{
				item: "farmersdelight:rice_bale"
			}
		],
		processing_time: 100,
		results: [
			{
				count: 9,
				id: "farmersdelight:rice"
			},
			{
				count: 9,
				id: "farmersdelight:straw"
			}
		]
	}).id('create:crushing/compat/farmersdelight/rice_bale')
	event.custom({
		type: "create:crushing",
		ingredients: [
			{
				item: "minecraft:hay_block"
			}
		],
		processing_time: 150,
		results: [
			{
				count: 9,
				id: "create:wheat_flour"
			},
			{
				chance: 0.25,
				count: 18,
				id: "create:wheat_flour"
			},
			{
				chance: 0.25,
				count: 9,
				id: "minecraft:wheat_seeds"
			}
		]
	}).id('create:crushing/hay_bale')

	// rosee
	event.custom({
		type: "create:sandpaper_polishing",
		ingredients: [
			[
				{
					item: "create:rose_quartz"
				},
				{
					item: "biomesoplenty:rose_quartz_chunk"
				}
			]
		],
		results: [
			{
				id: "create:polished_rose_quartz"
			}
		]
	}).id('create:sandpaper_polishing/rose_quartz')
	event.custom({
		type: "farmersdelight:cutting",
		ingredients: [
			{
				item: "biomesoplenty:rose_quartz_block"
			}
		],
		result: [
			{
				item: {
					count: 4,
					id: "biomesoplenty:rose_quartz_chunk"
				}
			}
		],
		tool: {
			type: "farmersdelight:item_ability",
			action: "pickaxe_dig"
		}
	}).id('farmersdelight:integration/biomesoplenty/cutting/rose_quartz_block')
	event.shapeless('4x create:polished_rose_quartz', 'create_ironworks:rose_quartz_block').id('create_ironworks:materials/rose_quartz/item_from_block')
	event.shaped('create_ironworks:rose_quartz_block', ['rr', 'rr'], { r: 'create:polished_rose_quartz' }).id('create_ironworks:materials/rose_quartz/block_from_item')
	event.custom({
		type: "create:sandpaper_polishing",
		ingredients: [
			{
				item: "biomesoplenty:rose_quartz_block"
			}
		],
		results: [
			{
				id: "create_ironworks:rose_quartz_block"
			}
		]
	}).id('kubejs:sandpaper_polishing/ironworks_rose_quartz_block')

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
				amount: 1000,
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

	//unbucketing the create's
	// water
	event.shapeless('6x supplementaries:soap', [
		'#c:buckets/water', 'supplementaries:ash', 'supplementaries:ash', 'supplementaries:ash', 'supplementaries:ash', '#c:foods/raw_pork'
	]).id('supplementaries:soap_manual_only')
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
	event.shapeless('create_compressed:dough_block', [
		'#c:buckets/water', 'create_compressed:wheat_flour_pile'
	]).id('create_compressed:dough_block_from_flour_manual_only')
	// milk
	event.remove({ id: 'farmersdelight:milk_bottle' })
	event.remove({ id: 'aethersdelight:milk_bottles_from_skyroot_bucket' })
	event.shapeless('4x farmersdelight:milk_bottle', [
		'#c:buckets/milk', 'glass_bottle', 'glass_bottle', 'glass_bottle', 'glass_bottle'
	]).id('farmersdelight:milk_bottle_manual_only')
	event.shapeless('aethersdelight:aechor_ice_cream_base', [
		'aether:aechor_petal', 'sugar', 'sugar', '#c:eggs', '#c:foods/milk', 'aether:skyroot_bucket'
	]).id('aethersdelight:aechor_ice_cream_base_manual_only')
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
	event.shapeless('4x creategarnished:bear_claw', [
		'#c:flours', '#c:eggs', '#c:foods/milk', 'creategarnished:almond_paste', 'creategarnished:almond_paste', 'sugar', 'sugar'
	]).id('creategarnished:crafting/bear_claw_manual_only')
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
	event.shapeless('snowyspirit:eggnog', [
		'#c:crops/ginger', '#c:foods/milk', '#c:eggs', 'glass_bottle'
	]).id('snowyspirit:eggnog_manual_only')
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
	event.shapeless('3x supplementaries:pancake', [
		'sugar', '#c:foods/milk', 'farmersdelight:wheat_dough', '#c:eggs'
	]).id('supplementaries:integration/pancake_fd_manual_only')
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
	event.shapeless('farmersdelight:stuffed_potato', [
		'minecraft:baked_potato', '#c:foods/cooked_beef', '#c:foods/milk'
	]).id('farmersdelight:stuffed_potato_manual_only')
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
	event.shapeless('farmersdelight:shepherds_pie_block', [
		'minecraft:baked_potato', '#c:foods/milk', 'minecraft:baked_potato', '#c:foods/cooked_mutton', '#c:foods/cooked_mutton', '#c:foods/cooked_mutton', '#c:crops/onion', 'bowl', '#c:crops/onion'
	]).id('farmersdelight:shepherds_pie_block_manual_only')
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
	// honey
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				type: "fluid_stack",
				amount: 250,
				fluid: "create:honey"
			},
			{
				tag: "c:flours"
			},
			{
				tag: "c:flours"
			}
		],
		results: [
			{
				count: 8,
				id: "farmersdelight:honey_cookie"
			}
		]
	}).id('farmersdelight:honey_cookie')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "minecraft:sugar"
			},
			{
				tag: "c:paper"
			},
			{
				type: "fluid_stack",
				amount: 250,
				fluid: "create:honey"
			}
		],
		results: [
			{
				count: 8,
				id: "supplementaries:candy"
			}
		]
	}).id('supplementaries:candy')
	event.shapeless('8x supplementaries:candy', [
		'sugar', '#c:paper', 'honey_bottle'
	]).id('supplementaries:candy_manual_only')
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				tag: "c:dyes/orange"
			},
			{
				tag: "c:dyes/yellow"
			},
			{
				type: "fluid_stack",
				amount: 250,
				fluid: "create:honey"
			}
		],
		results: [
			{
				count: 2,
				id: "dyenamics:honey_dye"
			}
		]
	}).id('dyenamics:honey_dye')
	event.shapeless('2x dyenamics:honey_dye', [
		'#c:dyes/orange', '#c:dyes/yellow', 'honey_bottle'
	]).id('dyenamics:honey_dye_manual_only')
	event.remove({ id: 'farmersdelight:honey_glazed_ham_block' })
	event.shapeless('farmersdelight:honey_glazed_ham_block', [
		'sweet_berries', 'honey_bottle', 'sweet_berries', 'sweet_berries', 'farmersdelight:smoked_ham', 'sweet_berries', 'farmersdelight:cooked_rice', 'bowl', 'farmersdelight:cooked_rice'
	]).id('farmersdelight:honey_glazed_ham_block_manual_only')
	// lava
	event.shapeless('obsidian', [
		'#c:buckets/lava', 'ars_nouveau:water_essence'
	]).id('ars_nouveau:water_essence_to_obsidian_manual_only')
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
	event.shaped('saddle', [
		'lll',
		'lsl',
		'n n'
	], {
		l: '#c:leathers',
		s: 'string',
		n: '#c:nuggets/iron'
	}).id('aether:aether_saddle')

	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "create_compressed:wheat_flour_pile"
			},
			{
				type: "fluid_stack",
				amount: 1000,
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