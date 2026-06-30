ServerEvents.recipes(event => {


	//wheat flouring
	// getting
	event.recipes.kaleidoscope_cookery.millstone('bountifulfares:flour',
		'#c:crops/wheat'
	).id('kubejs:millstone/wheat')
	event.recipes.create.milling(['bountifulfares:flour', CreateItem.of('2x bountifulfares:flour', 0.25), CreateItem.of('minecraft:wheat_seeds', 0.25)],
		Ingredient.of('#c:crops/wheat')
	).id('create:milling/wheat')
	event.recipes.create.milling(['2x bountifulfares:flour', CreateItem.of('2x bountifulfares:flour', 0.5)],
		'ratatouille:wheat_kernels'
	).id('ratatouille:milling/wheat_flour')

	// using
	event.remove([
		{ id: 'minecraft:bread' },
		{ id: 'deep_aether:cake' },
		{ id: 'neapolitan:cake' },
		{ id: 'farmersdelight:cake_from_milk_bottle' },
		{ id: 'aether:moa_egg_cake' },
		{ id: 'aether:skyroot_milk_bucket_cake' },
		{ id: 'aether:skyroot_milk_bucket_moa_egg_cake' },
		{ id: 'create:crafting/curiosities/cake' }

	])
	event.shapeless('8x cookie', [
		'#c:crops/cocoa_bean', '#c:flours', '#c:flours'
	]).id('minecraft:cookie')
	event.shaped('aethersdelight:white_apple_pie', [
		'fff',
		'www',
		'sps'
	], {
		f: '#c:flours',
		w: 'aether:white_apple',
		s: 'minecraft:sugar',
		p: 'farmersdelight:pie_crust'
	}).id('aethersdelight:white_apple_pie')
	event.shapeless('3x aethersdelight:gingerbread_dough', [
		'#c:eggs', 'aethersdelight:ginger_spice', '#c:flours', 'minecraft:sugar'
	]).id('aethersdelight:gingerbread_dough')
	event.shaped('2x aethersdelight:blue_berry_muffin', [
		'bsb',
		'fmf'
	], {
		b: 'aether:blue_berry',
		s: 'minecraft:sugar',
		f: '#c:flours',
		m: '#c:foods/milk'
	}).id('aethersdelight:blue_berry_muffin')
	event.shaped('2x aethersdelight:enchanted_berry_muffin', [
		'bsb',
		'fmf'
	], {
		b: 'aether:enchanted_berry',
		s: 'minecraft:sugar',
		f: '#c:flours',
		m: '#c:foods/milk'
	}).id('aethersdelight:enchanted_berry_muffin')
	event.shapeless('8x ends_delight:chorus_cookie', [
		'ends_delight:chorus_fruit_grain', '#c:flours', '#c:flours'
	]).id('ends_delight:food/chorus_cookie')
	event.shaped('ends_delight:chorus_fruit_pie', [
		'fff',
		'Pcd',
		'sps'
	], {
		f: '#c:flours',
		P: 'minecraft:poppy',
		c: ['minecraft:chorus_fruit', 'ends_delight:chorus_fruit_grain'],
		d: 'ends_delight:dried_chorus_flower',
		s: 'minecraft:sugar',
		p: 'farmersdelight:pie_crust'
	}).id('ends_delight:food/chorus_fruit_pie')
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
		a: '#c:foods/apple',
		s: 'minecraft:sugar',
		p: 'farmersdelight:pie_crust'
	}).id('farmersdelight:apple_pie')
	event.shapeless('8x farmersdelight:sweet_berry_cookie', [
		'minecraft:sweet_berries', '#c:flours', '#c:flours'
	]).id('farmersdelight:sweet_berry_cookie')
	event.shapeless('8x farmersdelight:honey_cookie', [
		'minecraft:honey_bottle', '#c:flours', '#c:flours'
	]).id('farmersdelight:honey_cookie_manual_only')
	event.custom({
		type: 'farmersdelight:cooking',
		container: {
			id: 'minecraft:bowl'
		},
		experience: 0.35,
		ingredients: [
			{
				item: 'aethersdelight:ginger'
			},
			{
				item: 'aethersdelight:wing'
			},
			{
				item: 'aethersdelight:wing'
			},
			{
				item: 'minecraft:beef'
			},
			{
				tag: 'c:flours'
			}
		],
		recipe_book_tab: 'meals',
		result: {
			id: 'aethersdelight:flying_beef_stew'
		}
	}).id('farmersdelight:cooking/flying_beef_stew')

	//  new
	event.shapeless('neapolitan:banana_bread', [
		'#c:foods/banana', '#c:flours', 'minecraft:sugar'
	]).id('neapolitan:banana_bread')
	event.shapeless('neapolitan:adzuki_bun', [
		'neapolitan:roasted_adzuki_beans', '#c:flours', '#c:foods/milk'
	]).id('neapolitan:adzuki_bun_manual_only')
	event.remove({ id: 'abnormals_delight:pumpkin_bread' })
	event.shapeless('2x autumnity:pumpkin_bread', [
		'autumnity:syrup_bottle', 'farmersdelight:pumpkin_slice', '#c:flours', '#c:flours'
	]).id('abnormals_delight:pumpkin_bread_manual_only')
	event.shapeless('2x neapolitan:strawberry_scones', [
		'#c:flours', '#c:flours', 'neapolitan:strawberries', 'minecraft:sugar'
	]).id('neapolitan:strawberry_scones')
	event.remove({ id: 'autumnity:pancake' })
	event.shapeless('autumnity:pancake', [
		'autumnity:syrup_bottle', '#c:foods/milk', '#c:eggs', '#c:flours', '#c:flours'
	]).id('autumnity:pancake_manual_only')
	event.shaped('atmospheric:yucca_gateau', [
		'yay',
		'fYf'
	], {
		y: 'atmospheric:roasted_yucca_fruit',
		a: 'atmospheric:aloe_gel_bottle',
		f: '#c:flours',
		Y: 'atmospheric:yucca_flower'
	}).id('atmospheric:yucca_gateau')
	event.shapeless('2x nirvana:weed_brownie', [
		'nirvana:hemp_seeds', '#c:flours', 'minecraft:cocoa_beans'
	]).id('nirvana:weed_brownie')
	event.shaped('brewinandchewin:pizza', [
		' c ',
		'ptp',
		' d '
	], {
		c: '#brewinandchewin:foods/cheese_wedge',
		p: '#brewinandchewin:foods/pizza_topping',
		t: 'farmersdelight:tomato_sauce',
		d: '#c:foods/dough'
	}).id('brewinandchewin:pizza')
	event.shapeless('8x kaleidoscope_end:chorus_seed_cookie', [
		'kaleidoscope_end:chorus_seed', '#c:flours', '#c:flours'
	]).id('kaleidoscope_end:chorus_seed_cookie')
	event.shapeless('8x abnormals_delight:cherry_cookie', [
		'environmental:cherries', '#c:flours', '#c:flours'
	]).id('abnormals_delight:cherry_cookie')
	event.shapeless('8x abnormals_delight:mulberry_cookie', [
		'upgrade_aquatic:mulberry', '#c:flours', '#c:flours'
	]).id('abnormals_delight:mulberry_cookie')
	event.remove({ id: 'abnormals_delight:maple_cookie' })
	event.shapeless('8x abnormals_delight:maple_cookie', [
		'autumnity:syrup_bottle', '#c:flours', '#c:flours'
	]).id('abnormals_delight:maple_cookie_manual_only')
	event.shaped('abyssal_decor:bog_apple_pie', [
		'fbf',
		'fsf'
	], {
		f: '#c:flours',
		b: 'abyssal_decor:bog_apple',
		s: 'minecraft:sugar'
	}).id('abyssal_decor:bog_apple_pie_recipe')
	event.shaped('abyssal_decor:cinnamon_roll', [
		'fcf',
		'fsf'
	], {
		f: '#c:flours',
		c: 'abyssal_decor:cinnamon_stick',
		s: 'minecraft:sugar'
	}).id('abyssal_decor:cinnamon_roll_recipe')
	// flour -> flours
	event.shapeless('bountifulfares:artisan_bread', [
		'#c:flours', '#c:flours', '#c:flours', '#c:eggs'
	]).id('bountifulfares:artisan_bread')
	event.shapeless('4x bountifulfares:walnut_cookie', [
		'bountifulfares:walnut', '#c:flours', '#c:flours'
	]).id('bountifulfares:walnut_cookie')
	event.shapeless('4x bountifulfares:artisan_cookie', [
		'bountifulfares:elderberries', 'minecraft:sugar', '#c:flours'
	]).id('bountifulfares:artisan_cookie')
	function pietart(output, input) {
		event.shapeless(output, [
			input, '#c:flours', '#c:eggs', 'minecraft:sugar'
		]).id(output)
	}
	pietart('bountifulfares:passion_fruit_tart', '#c:foods/passion_fruit')
	pietart('bountifulfares:elderberry_tart', 'bountifulfares:elderberries')
	pietart('bountifulfares:glow_berry_tart', 'minecraft:glow_berries')
	pietart('bountifulfares:sweet_berry_tart', 'minecraft:sweet_berries')
	pietart('bountifulfares:lapisberry_tart', 'bountifulfares:lapisberries')
	pietart('bountifulfares:melon_pie', 'minecraft:melon_slice')
	pietart('bountifulfares:apple_pie', '#c:foods/apple')
	pietart('bountifulfares:orange_pie', '#c:foods/oranges')
	pietart('bountifulfares:lemon_pie', '#c:foods/lemons')
	pietart('bountifulfares:plum_pie', '#c:foods/plums')
	pietart('bountifulfares:hoary_pie', 'bountifulfares:hoary_apple')

	event.shaped('kaleidoscope_end:mint_chorus_mousse', [
		'Mm',
		'cc',
		'ff'
	], {
		M: 'kaleidoscope_end:ender_mint',
		m: '#c:foods/milk',
		c: ['minecraft:chorus_fruit', 'kaleidoscope_end:chorus_seed'],
		f: '#c:flours'
	}).id('kaleidoscope_end:mint_chorus_mousse')
	event.shaped('kaleidoscope_end:chorus_flower_cake', [
		'mpm',
		'ccc',
		'fff'
	], {
		m: '#c:foods/milk',
		p: 'kaleidoscope_end:chorus_petal',
		c: 'minecraft:chorus_fruit',
		f: '#c:flours'
	}).id('kaleidoscope_end:chorus_flower_cake')
	event.shaped('kaleidoscope_nether:warped_cake', [
		'mcm',
		'www',
		'fff'
	], {
		m: '#c:foods/milk',
		c: 'kaleidoscope_nether:crimson_fruit',
		w: 'kaleidoscope_nether:warped_fruit',
		f: '#c:flours'

	}).id('kaleidoscope_nether:warped_cake')

	event.recipes.kaleidoscope_cookery.pot('kaleidoscope_nether:ham_yogurt', [
		'#c:flours', '#c:flours', '#c:flours',
		['kaleidoscope_nether:ham', 'kaleidoscope_nether:ham_slice'], ['kaleidoscope_nether:ham', 'kaleidoscope_nether:ham_slice'], ['kaleidoscope_nether:ham', 'kaleidoscope_nether:ham_slice'],
	], 'minecraft:bowl'
	).id('kaleidoscope_nether:pot/ham_yogurt')
	event.recipes.kaleidoscope_cookery.pot('kaleidoscope_end:dragon_souffle', [
		'#c:flours', 'kaleidoscope_end:dream_berry', 'kaleidoscope_end:dragon_egg_liquid',
		'kaleidoscope_end:dragon_dust', 'kaleidoscope_end:dragon_dust', 'kaleidoscope_end:dragon_dust'
	], 'minecraft:bowl'
	).id('kaleidoscope_end:pot/dragon_souffle')
	event.remove({ id: 'kaleidoscope_cookery:stockpot/dough_drop_soup1' })
	event.recipes.kaleidoscope_cookery.stockpot('kaleidoscope_cookery:dough_drop_soup', [
		'#c:foods/tomato', '#c:foods/tomato', '#c:flours', '#c:flours', '#c:crops/lettuce', '#c:crops/lettuce'
	], 'minecraft:water',
		300,
		'minecraft:bowl',
		'kaleidoscope_cookery:stockpot/default_cooking',
		'kaleidoscope_cookery:stockpot/default_finished_flesh',
		0xFFFFECC3,
		0xFFF3DFB4
	).id('kaleidoscope_cookery:stockpot/dough_drop_soup')

	// farmersdelight
	event.recipes.create.mixing('farmersdelight:pie_crust', [
		SizedIngredient.of('#c:flours', 3), '250x minecraft:milk'
	]).id('farmersdelight:integration/create/mixing/pie_crust_from_mixing')

	// ratatat
	event.recipes.create.mixing('ratatouille:salty_dough', [
		Ingredient.of('#c:flours'), Ingredient.of('#c:salts'), '100x ratatouille:egg_yolk'
	]).id('ratatouille:mixing/salty_dough')
	event.recipes.create.mixing('1000x ratatouille:cake_batter', [
		SizedIngredient.of('#c:flours', 2), 'minecraft:sugar', '250x ratatouille:egg_yolk', '250x minecraft:milk'
	]).id('ratatouille:mixing/cake_batter')

	// natuurlijk
	event.remove([
		{ id: 'create_bic_bit:compat/farmersdelight/bitterballen' },
		{ id: 'create_bic_bit:compat/farmersdelight/frikandel' },
		{ id: 'create_bic_bit:compat/farmersdelight/kroket' },
	])
	event.recipes.create.mixing('create_bic_bit:raw_bitterballen', [
		Ingredient.of('#c:foods/raw_meat'), Ingredient.of('#c:flours'), '250x minecraft:milk'
	]).id('create_bic_bit:mixing/bitterballen')
	event.recipes.create.mixing('create_bic_bit:raw_eggball', [
		Ingredient.of('#c:eggs'), Ingredient.of('#c:flours')
	]).id('create_bic_bit:mixing/raw_eggball')
	event.recipes.create.mixing('create_bic_bit:raw_frikandel', [
		Ingredient.of('#c:foods/raw_meat'), Ingredient.of('#c:flours'), Ingredient.of('#c:eggs')
	]).id('create_bic_bit:mixing/raw_frikandel')
	event.recipes.create.mixing('create_bic_bit:raw_kroket', [
		Ingredient.of('#c:foods/raw_meat'), SizedIngredient.of('#c:flours', 2), '250x minecraft:milk'
	]).id('create_bic_bit:mixing/raw_kroket')
	event.recipes.create.mixing('create_bic_bit:raw_cheese_souffle', [
		Ingredient.of('#c:cheese'), Ingredient.of('#c:flours')
	]).id('create_bic_bit:mixing/raw_cheese_souffle')


	//doughing around
	// getting
	event.remove([
		{ id: 'farmersdelight:/crafting/wheat_dough_from_water' },
		{ id: 'create:crafting/appliances/dough' },
		{ id: 'farmersdelight:wheat_dough_from_water' }
	])
	for (let i = 1; i <= 8; i++) {
		event.remove({ id: `minecraft:flour_from_${i}_wheat` })
	}
	event.shapeless('farmersdelight:wheat_dough', [
		'potion[potion_contents={potion:"minecraft:water"}]', '#c:flours/wheat'
	]).replaceIngredient('potion[potion_contents={potion:"minecraft:water"}]', 'minecraft:glass_bottle')
		.id('kubejs:crafting/dough_from_water_bottle_manual_only')
	// event.shapeless('3x farmersdelight:wheat_dough', [
	// 	'#c:buckets/water', '#c:flours/wheat', '#c:flours/wheat', '#c:flours/wheat'
	// ]).id('kubejs:crafting/dough_from_water_bucket_manual_only')
	event.shapeless('3x farmersdelight:wheat_dough', [
		'#c:buckets/water', '#c:flours/wheat', '#c:flours/wheat', '#c:flours/wheat'
	]).id('kubejs:wheat_dough')
	event.shapeless('3x farmersdelight:wheat_dough', [
		'#c:eggs', '#c:flours/wheat', '#c:flours/wheat', '#c:flours/wheat'
	]).id('farmersdelight:wheat_dough_from_egg')
	event.recipes.create.splashing('farmersdelight:wheat_dough',
		SizedIngredient.of('#c:flours/wheat', 1)
	).id('create:splashing/wheat_flour')
	event.recipes.create.mixing('farmersdelight:wheat_dough',
		[SizedIngredient.of('#c:flours/wheat', 1), '250x minecraft:water']
	).id('create:mixing/dough_by_mixing')
	event.recipes.createdieselgenerators.basin_fermenting(['farmersdelight:wheat_dough', CreateItem.of('bountifulfares:flour', 0.1)],
		[SizedIngredient.of('#c:flours/wheat', 1), '100x minecraft:water']
	).id('createdieselgenerators:basin_fermenting/dough')
	event.custom({
		type: 'ratatouille:composting',
		ingredients: [
			{
				item: 'farmersdelight:wheat_dough'
			},
			{
				tag: 'c:flours'
			},
			{
				type: 'neoforge:single',
				amount: 100,
				fluid: 'minecraft:water'
			}
		],
		processing_time: 200,
		results: [
			{
				count: 3,
				id: 'farmersdelight:wheat_dough'
			}
		]
	}).id('ratatouille:composting/more_dough')

	//doughing around 2: electric boogaloo
	// using
	event.shapeless('kaleidoscope_cookery:raw_dough', '#c:foods/dough').id('kubejs:crafting/kaleidough')
	event.shapeless('farmersdelight:wheat_dough', 'kaleidoscope_cookery:raw_dough').id('kubejs:crafting/dough_from_klaidough')
	event.shapeless('kaleidoscope_cookery:steamer[block_entity_data={CookingTime:[1200s,1200s,1200s,1200s],Items:[{Count:1b,Slot:0b,id:"farmersdelight:wheat_dough"},{Count:1b,Slot:1b,id:"farmersdelight:wheat_dough"},{Count:1b,Slot:2b,id:"farmersdelight:wheat_dough"},{Count:1b,Slot:3b,id:"farmersdelight:wheat_dough"}],id:"kaleidoscope_cookery:steamer"}]', [
		'kaleidoscope_cookery:steamer', 'farmersdelight:wheat_dough', 'farmersdelight:wheat_dough', 'farmersdelight:wheat_dough', 'farmersdelight:wheat_dough'
	]).id('kaleidoscope_cookery:raw_dough_steamer')

	event.remove([
		{ id: 'create:smelting/bread' },
		{ id: 'create:smoking/bread' },
		{ id: 'create:campfire_cooking/bread' }
	])
	event.custom({
		type: 'create_bic_bit:deep_frying',
		heat_requirement: 'heated',
		ingredients: [
			{
				tag: 'c:foods/dough'
			},
			{
				type: 'fluid_stack',
				amount: 125,
				fluid: 'create_bic_bit:frying_oil'
			}
		],
		results: [
			{
				id: 'create_bic_bit:oliebollen'
			}
		]
	}
	).id('create_bic_bit:deep_frying/oliebollen')
	event.recipes.create.mixing('create_bic_bit:raw_churros', [
		Ingredient.of('#c:foods/dough'), 'minecraft:sugar'
	]).id('create_bic_bit:mixing/raw_churros')
	event.recipes.create.filling('create_bic_bit:sweet_dough', [
		Ingredient.of('#c:foods/dough'), '125x #c:honey'
	]).id('create_bic_bit:filling/sweet_dough')
	event.recipes.create.sequenced_assembly('powergrid:unetched_circuit',
		'powergrid:circuit_schematic', [
		event.recipes.create.deploying('powergrid:incomplete_unetched_circuit', ['powergrid:incomplete_unetched_circuit', 'powergrid:empty_circuit']),
		event.recipes.create.deploying('powergrid:incomplete_unetched_circuit', ['powergrid:incomplete_unetched_circuit', Ingredient.of('#c:foods/dough')]),
		event.recipes.create.deploying('powergrid:incomplete_unetched_circuit', ['powergrid:incomplete_unetched_circuit', Ingredient.of('#c:plates/copper')]),
		event.recipes.create.pressing('powergrid:incomplete_unetched_circuit', 'powergrid:incomplete_unetched_circuit')
	]).transitionalItem('powergrid:incomplete_unetched_circuit').loops(2).id('powergrid:sequenced_assembly/unetched_circuit_board')

	function caked(output, input) {
		if (input != null) {
			event.shaped(output, [
				'imi',
				'ses',
				'idi'
			], {
				i: input,
				m: '#c:foods/milk',
				s: 'minecraft:sugar',
				e: '#c:eggs',
				d: '#c:foods/dough'
			}).id(output)
		} else {
			event.shaped(output, [
				' m ',
				'ses',
				' d '
			], {
				m: '#c:foods/milk',
				s: 'minecraft:sugar',
				e: '#c:eggs',
				d: '#c:foods/dough'
			}).id(output)
		}
	}
	caked('minecraft:cake')
	caked('neapolitan:vanilla_cake', 'neapolitan:dried_vanilla_pods')
	caked('neapolitan:chocolate_cake', 'neapolitan:chocolate_bar')
	caked('neapolitan:strawberry_cake', '#c:foods/strawberry')
	caked('neapolitan:banana_cake', '#c:foods/banana')
	caked('neapolitan:mint_cake', 'neapolitan:mint_leaves')
	caked('neapolitan:adzuki_cake', 'neapolitan:roasted_adzuki_beans')

	event.remove([
		{ id: 'aethersdelight:milk_bottles_from_skyroot_bucket' },
		{ id: 'neapolitan:milk_bottle' },
		{ id: 'neapolitan:milk_bucket' },
		{ id: 'create:filling/compat/neapolitan/milk_bottle' },
	])

	event.recipes.create.mixing(Fluid.of('500x dndesires:strawberry_milkshake'), [
		'2x minecraft:sugar', '4x minecraft:snowball', SizedIngredient.of('#c:foods/strawberry', 2), '250x #c:milk'
	]).id('dndesires:mixing/strawberry')
})

ServerEvents.tags('item', event => {
	event.add('c:flours/wheat', ['bountifulfares:flour', 'kaleidoscope_cookery:flour'])
	event.add('c:flours', '#c:flours/wheat')
	event.add('c:flour', '#c:flours')

	event.remove('c:dough', 'kaleidoscope_cookery:raw_dough')
	event.remove('c:foods/dough', ['kaleidoscope_cookery:raw_dough', 'create:dough'])
	event.remove('c:foods/dough/wheat', 'create:dough')
	event.remove('cookingforblockheads:ingredients', 'create:dough')

	event.remove('c:drinks/milk', 'neapolitan:milk_bottle')
	event.add('c:drinks/milk', '#c:foods/milk')

})
