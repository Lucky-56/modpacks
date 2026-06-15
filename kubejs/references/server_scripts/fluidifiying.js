ServerEvents.recipes(event => {
	//water
	event.shapeless('6x supplementaries:soap', [
		'#c:buckets/water', 'supplementaries:ash', 'supplementaries:ash', 'supplementaries:ash', 'supplementaries:ash', '#c:foods/raw_pork'
	]).id('supplementaries:soap_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'supplementaries:ash'
			},
			{
				item: 'supplementaries:ash'
			},
			{
				item: 'supplementaries:ash'
			},
			{
				item: 'supplementaries:ash'
			},
			{
				tag: 'c:foods/raw_pork'
			},
			{
				type: 'fluid_stack',
				amount: 1000,
				fluid: 'minecraft:water'
			}
		],
		results: [
			{
				count: 6,
				id: 'supplementaries:soap'
			}
		]
	}).id('supplementaries:soap')

	//milk
	event.remove([
		{ id: 'farmersdelight:milk_bottle' },
		{ id: 'aethersdelight:milk_bottles_from_skyroot_bucket' }
	])
	event.shapeless('4x farmersdelight:milk_bottle', [
		'#c:buckets/milk', 'glass_bottle', 'glass_bottle', 'glass_bottle', 'glass_bottle'
	]).id('farmersdelight:milk_bottle_manual_only')
	event.shaped('cookingforblockheads:milk_jar', [
		'GPG',
		'GmG',
		'GGG'
	], {
		G: 'glass',
		P: ['#planks', '#aether:planks_crafting'],
		m: '#c:buckets/milk'
	}).id('cookingforblockheads:milk_jar')
	event.shapeless('aethersdelight:aechor_ice_cream_base', [
		'aether:aechor_petal', 'sugar', 'sugar', '#c:eggs', '#c:foods/milk', 'aether:skyroot_bucket'
	]).id('aethersdelight:aechor_ice_cream_base_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'aether:aechor_petal'
			},
			{
				item: 'minecraft:sugar'
			},
			{
				item: 'minecraft:sugar'
			},
			{
				tag: 'c:eggs'
			},
			{
				item: 'aether:skyroot_bucket'
			},
			{
				type: 'fluid_tag',
				amount: 250,
				fluid_tag: 'c:milk'
			}
		],
		results: [
			{
				id: 'aethersdelight:aechor_ice_cream_base'
			}
		]
	}).id('aethersdelight:aechor_ice_cream_base')
	event.shapeless('4x creategarnished:bear_claw', [
		'#c:flours', '#c:eggs', '#c:foods/milk', 'creategarnished:almond_paste', 'creategarnished:almond_paste', 'sugar', 'sugar'
	]).id('creategarnished:crafting/bear_claw_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				tag: 'c:flours'
			},
			{
				tag: 'c:eggs'
			},
			{
				item: 'creategarnished:almond_paste'
			},
			{
				item: 'creategarnished:almond_paste'
			},
			{
				item: 'minecraft:sugar'
			},
			{
				item: 'minecraft:sugar'
			},
			{
				type: 'fluid_tag',
				amount: 250,
				fluid_tag: 'c:milk'
			}
		],
		results: [
			{
				count: 4,
				id: 'creategarnished:bear_claw'
			}
		]
	}).id('creategarnished:crafting/bear_claw')
	event.shapeless('snowyspirit:eggnog', [
		'#c:crops/ginger', '#c:foods/milk', '#c:eggs', 'glass_bottle'
	]).id('snowyspirit:eggnog_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				tag: 'c:crops/ginger'
			},
			{
				tag: 'c:eggs'
			},
			{
				item: 'minecraft:glass_bottle'
			},
			{
				type: 'fluid_tag',
				amount: 250,
				fluid_tag: 'c:milk'
			}
		],
		results: [
			{
				id: 'snowyspirit:eggnog'
			}
		]
	}).id('snowyspirit:eggnog')
	event.shapeless('3x supplementaries:pancake', [
		'sugar', '#c:foods/milk', 'farmersdelight:wheat_dough', '#c:eggs'
	]).id('supplementaries:integration/pancake_fd_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'minecraft:sugar'
			},
			{
				item: 'farmersdelight:wheat_dough'
			},
			{
				tag: 'c:eggs'
			},
			{
				type: 'fluid_tag',
				amount: 250,
				fluid_tag: 'c:milk'
			}
		],
		results: [
			{
				count: 3,
				id: 'supplementaries:pancake'
			}
		]
	}).id('supplementaries:integration/pancake_fd')
	event.shapeless('farmersdelight:stuffed_potato', [
		'minecraft:baked_potato', '#c:foods/cooked_beef', '#c:foods/milk'
	]).id('farmersdelight:stuffed_potato_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'minecraft:baked_potato'
			},
			{
				tag: 'c:foods/cooked_beef'
			},
			{
				type: 'fluid_tag',
				amount: 250,
				fluid_tag: 'c:milk'
			}
		],
		results: [
			{
				id: 'farmersdelight:stuffed_potato'
			}
		]
	}).id('farmersdelight:stuffed_potato')
	event.shapeless('farmersdelight:shepherds_pie_block', [
		'minecraft:baked_potato', '#c:foods/milk', 'minecraft:baked_potato', '#c:foods/cooked_mutton', '#c:foods/cooked_mutton', '#c:foods/cooked_mutton', '#c:crops/onion', 'bowl', '#c:crops/onion'
	]).id('farmersdelight:shepherds_pie_block_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'minecraft:baked_potato'
			},
			{
				item: 'minecraft:baked_potato'
			},
			{
				tag: 'c:foods/cooked_mutton'
			},
			{
				tag: 'c:foods/cooked_mutton'
			},
			{
				tag: 'c:foods/cooked_mutton'
			},
			{
				tag: 'c:crops/onion'
			},
			{
				tag: 'c:crops/onion'
			},
			{
				item: 'minecraft:bowl'
			},
			{
				type: 'fluid_tag',
				amount: 250,
				fluid_tag: 'c:milk'
			}
		],
		results: [
			{
				id: 'farmersdelight:shepherds_pie_block'
			}
		]
	}).id('farmersdelight:shepherds_pie_block')

	//honey
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				type: 'fluid_stack',
				amount: 250,
				fluid: 'create:honey'
			},
			{
				tag: 'c:flours'
			},
			{
				tag: 'c:flours'
			}
		],
		results: [
			{
				count: 8,
				id: 'farmersdelight:honey_cookie'
			}
		]
	}).id('farmersdelight:honey_cookie')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'minecraft:sugar'
			},
			{
				tag: 'c:paper'
			},
			{
				type: 'fluid_stack',
				amount: 250,
				fluid: 'create:honey'
			}
		],
		results: [
			{
				count: 8,
				id: 'supplementaries:candy'
			}
		]
	}).id('supplementaries:candy')
	event.shapeless('8x supplementaries:candy', [
		'sugar', '#c:paper', 'honey_bottle'
	]).id('supplementaries:candy_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				tag: 'c:dyes/orange'
			},
			{
				tag: 'c:dyes/yellow'
			},
			{
				type: 'fluid_stack',
				amount: 250,
				fluid: 'create:honey'
			}
		],
		results: [
			{
				count: 2,
				id: 'dyenamics:honey_dye'
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

	//lava
	event.shapeless('obsidian', [
		'#c:buckets/lava', 'ars_nouveau:water_essence'
	]).id('ars_nouveau:water_essence_to_obsidian_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'ars_nouveau:water_essence'
			},
			{
				type: 'fluid_stack',
				amount: 1000,
				fluid: 'minecraft:lava'
			}
		],
		results: [
			{
				id: 'minecraft:obsidian'
			}
		]
	}).id('ars_nouveau:water_essence_to_obsidian')

	//garnishts
	event.shapeless('creategarnished:praline', [
		'create:bar_of_chocolate', '#c:hazelnuts', '#c:hazelnuts', '#c:hazelnuts', 'sugar', 'sugar', '#c:bottles/birch_syrup'
	]).replaceIngredient('creategarnished:birch_syrup_bottle', 'glass_bottle').id('creategarnished:crafting/praline_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'create:bar_of_chocolate'
			},
			{
				tag: 'c:hazelnuts'
			},
			{
				tag: 'c:hazelnuts'
			},
			{
				tag: 'c:hazelnuts'
			},
			{
				item: 'minecraft:sugar'
			},
			{
				item: 'minecraft:sugar'
			},
			{
				type: 'fluid_stack',
				amount: 250,
				fluid: 'creategarnished:birch_syrup'
			}
		],
		results: [
			{
				id: 'creategarnished:praline'
			}
		]
	}).id('creategarnished:crafting/praline')

	event.shapeless('4x creategarnished:churchkhela', [
		'string', '#c:flours', '#c:almonds', '#c:almonds', 'creategarnished:beetroot_juice_bottle'
	]).replaceIngredient('creategarnished:beetroot_juice_bottle', 'glass_bottle').id('creategarnished:crafting/churchkhela_manual_only')
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'minecraft:string'
			},
			{
				tag: 'c:flours'
			},
			{
				tag: 'c:almonds'
			},
			{
				tag: 'c:almonds'
			},
			{
				type: 'fluid_stack',
				amount: 100,
				fluid: 'creategarnished:beetroot_juice'
			}
		],
		results: [
			{
				count: 4,
				id: 'creategarnished:churchkhela'
			}
		]
	}).id('creategarnished:crafting/churchkhela')

	event.remove({ id: 'minecraft:beetroot_soup' })
	event.custom({
		type: 'create:emptying',
		ingredients: [
			{
				item: 'minecraft:beetroot_soup'
			}
		],
		results: [
			{
				id: 'minecraft:bowl'
			},
			{
				amount: 250,
				id: 'creategarnished:beetroot_juice'
			}
		]
	}).id('kubejs:emptying/beetroot_soup')
	event.custom({
		type: 'farmersdelight:cooking',
		container: {
			count: 1,
			id: 'minecraft:bowl'
		},
		experience: 1.0,
		ingredients: [
			{
				item: 'minecraft:beetroot'
			},
			{
				item: 'minecraft:beetroot'
			},
			{
				item: 'minecraft:beetroot'
			},
			{
				item: 'minecraft:beetroot'
			}
		],
		recipe_book_tab: 'meals',
		result: {
			count: 1,
			id: 'minecraft:beetroot_soup'
		}
	})

	//lumisene
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'heated',
		ingredients: [
			{
				item: 'minecraft:glow_berries'
			},
			{
				item: 'minecraft:glow_berries'
			}
		],
		results: [
			{
				amount: 250,
				id: 'supplementaries:lumisene'
			}
		]
	}).id('kubejs:mixing/lumisene')
	event.custom({
		type: 'create:emptying',
		ingredients: [
			{
				item: 'supplementaries:lumisene_bucket'
			}
		],
		results: [
			{
				id: 'minecraft:bucket'
			},
			{
				amount: 1000,
				id: 'supplementaries:lumisene'
			}
		]
	}).id('kubejs:emptying/lumisene_from_bucket')
	event.custom({
		type: 'create:emptying',
		ingredients: [
			{
				item: 'supplementaries:lumisene_bottle'
			}
		],
		results: [
			{
				id: 'minecraft:glass_bottle'
			},
			{
				amount: 250,
				id: 'supplementaries:lumisene'
			}
		]
	}).id('kubejs:emptying/lumisene_from_bottle')
	event.remove({ id: 'supplementaries:lumisene_bucket' })
	event.custom({
		type: 'create:filling',
		ingredients: [
			{
				item: 'minecraft:glass_bottle'
			},
			{
				type: 'fluid_stack',
				amount: 250,
				fluid: 'supplementaries:lumisene'
			}
		],
		results: [
			{
				id: 'supplementaries:lumisene_bottle'
			}
		]
	}).id('supplementaries:lumisene_bottle')

	//poison
	event.custom({
		type: 'create:emptying',
		ingredients: [
			{
				item: 'deep_aether:poison_bucket'
			}
		],
		results: [
			{
				id: 'minecraft:bucket'
			},
			{
				amount: 1000,
				id: 'deep_aether:poison_fluid'
			}
		]
	}).id('kubejs:emptying/poison_from_bucket')
	event.custom({
		type: 'create:emptying',
		ingredients: [
			{
				item: 'aether:skyroot_poison_bucket'
			}
		],
		results: [
			{
				id: 'aether:skyroot_bucket'
			},
			{
				amount: 1000,
				id: 'deep_aether:poison_fluid'
			}
		]
	}).id('kubejs:emptying/poison_from_skyroot_bucket')
	event.custom({
		type: 'create:filling',
		ingredients: [
			{
				item: 'aether:skyroot_bucket'
			},
			{
				type: 'fluid_stack',
				amount: 1000,
				fluid: 'deep_aether:poison_fluid'
			}
		],
		results: [
			{
				id: 'aether:skyroot_poison_bucket'
			}
		]
	}).id('kubejs:filling/skyroot_poison_bucket')
	event.shapeless('8x aether:poison_dart', [
		'aether:golden_dart', 'aether:golden_dart', 'aether:golden_dart', 'aether:golden_dart', ['aether:skyroot_poison_bucket', 'deep_aether:poison_bucket'], 'aether:golden_dart', 'aether:golden_dart', 'aether:golden_dart', 'aether:golden_dart'
	]).replaceIngredient('deep_aether:poison_bucket', 'bucket').id('aether:poison_dart_manual_only')
	event.custom({
		type: 'create:filling',
		heat_requirement: 'heated',
		ingredients: [
			{
				item: 'aether:golden_dart'
			},
			{
				type: 'fluid_stack',
				amount: 125,
				fluid: 'deep_aether:poison_fluid'
			}
		],
		results: [
			{
				id: 'aether:poison_dart'
			}
		]
	}).id('aether:poison_dart')

	//liquid_null
	event.shaped('4x biomesoplenty:unmapped_end_stone', [
		' E ',
		'ENE',
		' E '
	], {
		E: 'end_stone',
		N: 'biomesoplenty:liquid_null_bucket'
	}).id('biomesoplenty:unmapped_end_stone_manual_only')
	event.custom({
		type: 'create:filling',
		ingredients: [
			{
				item: 'minecraft:end_stone'
			},
			{
				type: 'fluid_stack',
				amount: 250,
				fluid: 'biomesoplenty:liquid_null'
			}
		],
		results: [
			{
				id: 'biomesoplenty:unmapped_end_stone'
			}
		]
	}).id('biomesoplenty:unmapped_end_stone')
})