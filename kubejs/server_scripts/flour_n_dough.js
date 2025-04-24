ServerEvents.recipes(event => {
	//wheat flouring
	event.remove([
		{ id: 'minecraft:bread' },
		{ id: 'minecraft:cake' }
	])
	event.shapeless('2x snowyspirit:gingerbread', [
		'snowyspirit:ginger', '#c:flours', '#c:flours'
	]).id('snowyspirit:gingerbread')
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
		type: 'farmersdelight:cooking',
		container: {
			id: 'minecraft:paper'
		},
		experience: 0.1,
		ingredients: [
			{
				item: 'arsdelight:arch_sauce'
			},
			{
				item: 'ars_nouveau:sourceberry_bush'
			},
			{
				tag: 'c:eggs'
			},
			{
				tag: 'c:flours'
			},
			{
				tag: 'c:foods/milk'
			}
		],
		recipe_book_tab: 'meals',
		result: {
			count: 2,
			id: 'arsdelight:source_berry_cupcake'
		}
	}).id('arsdelight:cooking/cooking/source_berry_cupcake')
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

	//doughing around
	event.remove([
		{ id: 'aethersdelight:wheat_dough_from_skyroot_bucket' },
		{ id: 'create:crafting/appliances/dough' },
		{ id: 'farmersdelight:wheat_dough_from_water' }
	])
	event.shapeless('farmersdelight:wheat_dough', [
		"potion[potion_contents={potion:'minecraft:water'}]", '#c:flours/wheat'
	]).replaceIngredient("potion[potion_contents={potion:'minecraft:water'}]", 'glass_bottle').id('create:crafting/appliances/dough_manual_only')
	event.shapeless('3x farmersdelight:wheat_dough', [
		'#c:buckets/water', '#c:flours/wheat', '#c:flours/wheat', '#c:flours/wheat'
	]).id('farmersdelight:wheat_dough_from_water_manual_only')
	event.shapeless('3x farmersdelight:wheat_dough', [
		'#c:eggs', '#c:flours/wheat', '#c:flours/wheat', '#c:flours/wheat'
	]).id('farmersdelight:wheat_dough_from_eggs')
	event.custom({
		type: 'create:splashing',
		ingredients: [
			{
				tag: 'c:flours/wheat'
			}
		],
		results: [
			{
				id: 'farmersdelight:wheat_dough'
			}
		]
	}).id('create:splashing/wheat_flour')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				tag: 'c:flours/wheat'
			},
			{
				type: 'fluid_stack',
				amount: 250,
				fluid: 'minecraft:water'
			}
		],
		results: [
			{
				id: 'farmersdelight:wheat_dough'
			}
		]
	}).id('create:mixing/dough_by_mixing')

	// doughing around 2: electric boogaloo
	event.remove([
		{ id: 'create:smelting/bread' },
		{ id: 'create:smoking/bread' },
		{ id: 'create:campfire_cooking/bread' },
		{ id: 'create:crafting/curiosities/cake' }
	])
	event.shapeless('slime_ball', [
		'farmersdelight:wheat_dough', '#c:dyes/lime'
	]).id('create:crafting/appliances/slime_ball')
	event.shapeless('4x creategarnished:peanut_butter_cookie', [
		'farmersdelight:wheat_dough', '#c:eggs', 'sugar', '#c:bottles/peanut_butter'
	]).replaceIngredient('creategarnished:peanut_butter_bottle', 'glass_bottle').id('creategarnished:crafting/peanut_butter_cookie_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'farmersdelight:wheat_dough'
			},
			{
				item: 'minecraft:sugar'
			},
			{
				tag: 'c:eggs'
			},
			{
				type: 'fluid_stack',
				amount: 250,
				fluid: 'creategarnished:peanut_butter'
			}
		],
		results: [
			{
				count: 4,
				id: 'creategarnished:peanut_butter_cookie'
			}
		]
	}).id('creategarnished:crafting/peanut_butter_cookie')
	event.custom({
		type: 'create:compacting',
		ingredients: [
			{
				tag: 'c:eggs'
			},
			{
				item: 'minecraft:sugar'
			},
			{
				item: 'minecraft:sugar'
			},
			{
				item: 'farmersdelight:wheat_dough'
			}
		],
		results: [
			{
				id: 'createaddition:cake_base'
			}
		]
	}).id('createaddition:compacting/cake_base')
})