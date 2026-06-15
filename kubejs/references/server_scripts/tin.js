ServerEvents.tags('item', event => {
	event.remove('create_ironworks:crushed_raw_tin', 'create:crushed_raw_materials')
})

ServerEvents.recipes(event => {
	//tin-tin-tin
	event.custom({
		type: 'create:crushing',
		ingredients: [
			{
				item: 'create_ironworks:deepslate_tin_ore'
			}
		],
		processing_time: 350,
		results: [
			{
				count: 7,
				id: 'create:crushed_raw_tin'
			},
			{
				chance: 0.25,
				id: 'create:crushed_raw_tin'
			},
			{
				chance: 0.75,
				id: 'create:experience_nugget'
			},
			{
				chance: 0.125,
				id: 'minecraft:cobbled_deepslate'
			}
		]
	}).id('create_ironworks:materials/tin/crushing/deepslate_tin_ore')
	event.custom({
		type: 'create:crushing',
		ingredients: [
			{
				tag: 'c:raw_materials/tin'
			}
		],
		processing_time: 400,
		results: [
			{
				id: 'create:crushed_raw_tin'
			},
			{
				chance: 0.75,
				id: 'create:experience_nugget'
			}
		]
	}).id('create_ironworks:materials/tin/crushing/raw_tin')
	event.custom({
		type: 'create:crushing',
		ingredients: [
			{
				tag: 'c:storage_blocks/raw_tin'
			}
		],
		processing_time: 400,
		results: [
			{
				count: 9,
				id: 'create:crushed_raw_tin'
			},
			{
				chance: 0.75,
				count: 9,
				id: 'create:experience_nugget'
			}
		]
	}).id('create_ironworks:materials/tin/crushing/raw_tin_block')
	event.custom({
		type: 'create:crushing',
		ingredients: [
			{
				item: 'create_ironworks:tin_ore'
			}
		],
		processing_time: 400,
		results: [
			{
				count: 5,
				id: 'create:crushed_raw_tin'
			},
			{
				chance: 0.25,
				id: 'create:crushed_raw_tin'
			},
			{
				chance: 0.75,
				id: 'create:experience_nugget'
			},
			{
				chance: 0.125,
				id: 'minecraft:cobblestone'
			}
		]
	}).id('create_ironworks:materials/tin/crushing/tin_ore')

	//tin two
	event.smelting('create_ironworks:tin_ingot', 'create:crushed_raw_tin', 0.1).id('create_ironworks:materials/tin/smelting/tin_ingot_from_crushed_raw_tin')
	event.blasting('create_ironworks:tin_ingot', 'create:crushed_raw_tin', 0.1).id('create_ironworks:materials/tin/blasting/tin_ingot_from_crushed_raw_tin')
	event.custom({
		type: 'create:splashing',
		ingredients: [
			{
				item: 'create:crushed_raw_tin'
			}
		],
		results: [
			{
				count: 9,
				id: 'create_ironworks:tin_nugget'
			},
			{
				chance: 0.5,
				id: 'minecraft:glowstone_dust'
			}
		]
	}).id('create_ironworks:materials/tin/splashing/tin_nuggets_from_raw_tin')
})