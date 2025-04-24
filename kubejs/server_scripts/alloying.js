ServerEvents.tags('item', event => {
	event.add('c:dusts', ['#c:dusts/coal', '#c:dusts/charcoal'])
	event.add('c:dusts/coal', 'create_ironworks:coal_dust')
	event.add('c:dusts/charcoal', 'create_ironworks:charcoal_dust')
})

ServerEvents.recipes(event => {
	event.remove([
		{ output: 'create:brass_ingot', type: 'create:mixing' },
		{ output: 'create_ironworks:bronze_ingot', type: 'create:mixing' },
		{ output: 'create_ironworks:steel_ingot', type: 'create:mixing' }
	])
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'heated',
		ingredients: [
			[
				{ tag: 'c:ingots/copper' },
				{ item: 'create:crushed_raw_copper' }
			],
			[
				{ tag: 'c:ingots/zinc' },
				{ item: 'create:crushed_raw_zinc' }
			]

		],
		results: [
			{
				id: 'create:brass_ingot'
			},
			{
				chance: 0.5,
				id: 'create:copper_nugget'
			},
			{
				chance: 0.5,
				id: 'create:zinc_nugget'
			},
			{
				chance: 0.85,
				id: 'create:experience_nugget'
			}
		]
	}).id('kubejs:mixing/alloying/brass')
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'heated',
		ingredients: [
			[
				{ tag: 'c:ingots/copper' },
				{ item: 'create:crushed_raw_copper' }
			],
			[
				{ tag: 'c:ingots/tin' },
				{ item: 'create:crushed_raw_tin' }
			]

		],
		results: [
			{
				id: 'create_ironworks:bronze_ingot'
			},
			{
				chance: 0.5,
				id: 'create:copper_nugget'
			},
			{
				chance: 0.5,
				id: 'create_ironworks:tin_nugget'
			},
			{
				chance: 0.75,
				id: 'create:experience_nugget'
			}
		]
	}).id('kubejs:mixing/alloying/bronze')
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'heated',
		ingredients: [
			{ item: 'create:copper_nugget' },
			{ item: 'create_ironworks:tin_nugget' }

		],
		results: [
			{
				id: 'create_ironworks:bronze_nugget'
			},
			{
				chance: 0.1,
				id: 'create:copper_nugget'
			},
			{
				chance: 0.1,
				id: 'create_ironworks:tin_nugget'
			},
			{
				chance: 0.15,
				id: 'create:experience_nugget'
			}
		]
	}).id('create_ironworks:materials/alloys/bronze_from_nuggets')
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'superheated',
		ingredients: [
			[
				{ tag: 'c:ingots/iron' },
				{ item: 'create:crushed_raw_iron' }
			],
			[
				{ tag: 'c:ingots/iron' },
				{ item: 'create:crushed_raw_iron' }
			],
			{ tag: 'c:dusts/coal' },
			{ tag: 'c:dusts/coal' },
			{ tag: 'c:dusts/coal' },
			{ tag: 'c:dusts/coal' },
			{ tag: 'c:dusts/coal' },
			{ tag: 'c:dusts/coal' },
			{ tag: 'c:dusts/coal' }

		],
		results: [
			{
				id: 'create_ironworks:steel_ingot'
			},
			{
				count: 5,
				id: 'create_ironworks:steel_nugget'
			},
			{
				chance: 0.2,
				id: 'minecraft:iron_nugget'
			},
			{
				chance: 0.95,
				id: 'create:experience_nugget'
			}
		]
	}).id('kubejs:mixing/alloying/steel')
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'superheated',
		ingredients: [
			[
				{ tag: 'c:ingots/iron' },
				{ item: 'create:crushed_raw_iron' }
			],
			[
				{ tag: 'c:ingots/iron' },
				{ item: 'create:crushed_raw_iron' }
			],
			{ tag: 'c:dusts/charcoal' },
			{ tag: 'c:dusts/charcoal' },
			{ tag: 'c:dusts/charcoal' },
			{ tag: 'c:dusts/charcoal' },
			{ tag: 'c:dusts/charcoal' },
			{ tag: 'c:dusts/charcoal' },
			{ tag: 'c:dusts/charcoal' }

		],
		results: [
			{
				id: 'create_ironworks:steel_ingot'
			},
			{
				count: 2,
				id: 'create_ironworks:steel_nugget'
			},
			{
				chance: 0.8,
				id: 'minecraft:iron_nugget'
			},
			{
				chance: 0.95,
				id: 'create:experience_nugget'
			}
		]
	}).id('kubejs:mixing/alloying/steel_from_charcoal')
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'heated',
		ingredients: [
			[
				{ tag: 'c:ingots/gold' },
				{ item: 'create:crushed_raw_gold' }
			],
			[
				{ tag: 'c:ingots/gold' },
				{ item: 'create:crushed_raw_gold' }
			],
			[
				{ tag: 'c:ingots/gold' },
				{ item: 'create:crushed_raw_gold' }
			],
			[
				{ tag: 'c:ingots/copper' },
				{ item: 'create:crushed_raw_copper' }
			]

		],
		results: [
			{
				count: 2,
				id: 'cosmeticarmoursmod:rose_gold_ingot'
			},
			{
				chance: 0.8,
				id: 'minecraft:gold_nugget'
			},
			{
				chance: 0.5,
				id: 'create:copper_nugget'
			},
			{
				chance: 0.9,
				id: 'create:experience_nugget'
			}
		]
	}).id('cosmeticarmoursmod:rose_gold_crafting_rec')
	/* event.custom({
		type: 'create:mixing',
		heat_requirement: 'superheated',
		ingredients: [
			[
				{ tag: 'c:ingots/gold' },
				{ item: 'create:crushed_raw_gold' }
			],
			[
				{ tag: 'c:ingots/gold' },
				{ item: 'create:crushed_raw_gold' }
			],
			[
				{ tag: 'c:ingots/gold' },
				{ item: 'create:crushed_raw_gold' }
			],
			[
				{ tag: 'c:ingots/gold' },
				{ item: 'create:crushed_raw_gold' }
			],
			[
				{ item: 'minecraft:netherite_scrap' },
				{ item: 'kubejs:crushed_ancient_debris' }
			],
			[
				{ item: 'minecraft:netherite_scrap' },
				{ item: 'kubejs:crushed_ancient_debris' }
			],
			[
				{ item: 'minecraft:netherite_scrap' },
				{ item: 'kubejs:crushed_ancient_debris' }
			],
			[
				{ item: 'minecraft:netherite_scrap' },
				{ item: 'kubejs:crushed_ancient_debris' }
			]
		],
		results: [
			{
				id: 'minecraft:netherite_ingot'
			},
			{
				chance: 0.2,
				id: 'kubejs:netherite_chunk'
			},
			{
				chance: 0.85,
				id: 'minecraft:gold_nugget'
			},
			{
				id: 'create:experience_nugget'
			}
		]
	}).id('minecraft:netherite_ingot') */
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'superheated',
		ingredients: [
			[
				{ tag: 'c:ingots/gold' },
				{ item: 'create:crushed_raw_gold' }
			],
			[
				{ tag: 'c:ingots/gold' },
				{ item: 'create:crushed_raw_gold' }
			],
			[
				{ tag: 'c:ingots/gold' },
				{ item: 'create:crushed_raw_gold' }
			],
			[
				{ tag: 'c:ingots/gold' },
				{ item: 'create:crushed_raw_gold' }
			],
			{ item: 'minecraft:netherite_scrap' },
			{ item: 'minecraft:netherite_scrap' },
			{ item: 'minecraft:netherite_scrap' },
			{ item: 'minecraft:netherite_scrap' }
		],
		results: [
			{
				id: 'minecraft:netherite_ingot'
			},
			{
				chance: 0.2,
				id: 'kubejs:netherite_chunk'
			},
			{
				chance: 0.85,
				id: 'minecraft:gold_nugget'
			},
			{
				id: 'create:experience_nugget'
			}
		]
	}).id('minecraft:netherite_ingot')
	event.custom({
		type: 'create:crushing',
		ingredients: [
			{
				item: 'kubejs:netherite_chunk'
			}
		],
		processing_time: 600,
		results: [
			{
				count: 3,
				chance: 0.2,
				id: 'kubejs:netherite_nugget'
			},
			{
				count: 3,
				chance: 0.35,
				id: 'minecraft:gold_nugget'
			},
			{
				id: 'create:experience_nugget'
			}
		]
	}).id('kubejs:crushing/netherite_chunk')
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'heated',
		ingredients: [
			{ tag: 'c:ingots/iron' },
			{ tag: 'twilightforest:fiery_vial' }
		],
		results: [
			{ id: 'twilightforest:fiery_ingot' }
		]
	}).id('twilightforest:equipment/fiery_ingot_crafting')
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'heated',
		ingredients: [
			{ item: 'aether_treasure_reforging:pyral_shard' },
			{ item: 'aether_treasure_reforging:pyral_shard' },
			{ item: 'aether_treasure_reforging:pyral_shard' },
			{ item: 'aether_treasure_reforging:pyral_shard' },
			{ tag: 'c:obsidians' },
			{ tag: 'c:obsidians' }
		],
		results: [
			{ id: 'aether_treasure_reforging:pyral_ingot' }
		]
	}).id('aether_treasure_reforging:pyral_ingot')
	event.custom({
		type: 'create:mixing',
		heat_requirement: 'superheated',
		ingredients: [
			{ item: 'aether_treasure_reforging:pyral_ingot' },
			{ item: 'aether_treasure_reforging:valkyrum_ingot' },
			{ item: 'aether_treasure_reforging:neptune_mesh' },
			{ tag: 'aether:processed/gravitite' },
			{ item: 'deep_aether:skyjade' },
			{ tag: 'aether:gems/zanite' },
			[{ item: 'aethersdelight:arkenium_ingot' }, { item: 'kubejs:crushed_raw_arkenium' }],
			{ item: 'aether:ambrosium_shard' },
			{ item: 'deep_aether:chromatic_aercloud' },
			{ item: 'deep_aether:chromatic_aercloud' },
			{ item: 'deep_aether:chromatic_aercloud' },
			{ item: 'deep_aether:chromatic_aercloud' },
			{ item: 'deep_aether:chromatic_aercloud' },
			{ item: 'deep_aether:chromatic_aercloud' },
			{ item: 'deep_aether:chromatic_aercloud' },
			{ item: 'deep_aether:chromatic_aercloud' }
		],
		results: [
			{ id: 'deep_aether:stratus_ingot' }
		]
	}).id('deep_aether:stratus_ingot')
})