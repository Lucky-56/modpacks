ServerEvents.recipes(event => {
	//cheers to joe_the_magi on discord
	const woodTypes = [
		{
			namespace: 'minecraft',
			species: ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry'],
			blocks: ['log', 'wood']
		},
		{
			namespace: 'minecraft',
			species: ['bamboo'],
			blocks: ['block'],
			override_bark: ['farmersdelight:straw']
		},
		{
			namespace: 'minecraft',
			species: ['crimson', 'warped'],
			blocks: ['hyphae', 'stem']
		},
		{
			namespace: 'vanillabackport',
			species: ['pale_oak'],
			blocks: ['log', 'wood']
		},
		{
			namespace: 'biomesoplenty',
			species: ['fir', 'pine', 'maple', 'redwood', 'mahogany', 'jacaranda', 'palm', 'willow', 'dead', 'magic', 'umbran', 'hellbark', 'empyreal'],
			blocks: ['log', 'wood']
		},
		{
			namespace: 'ars_nouveau',
			species: ['blue_archwood', 'green_archwood', 'red_archwood', 'purple_archwood'],
			override_bark: ['arsdelight:cascading_bark', 'arsdelight:flourishing_bark', 'arsdelight:blazing_bark', 'arsdelight:vexing_bark'],
			blocks: ['log', 'wood']
		},
		{
			namespace: 'aether',
			species: ['skyroot', 'golden_oak'],
			blocks: ['log', 'wood'],
			override_output: [undefined, 'skyroot']
		},
		{
			namespace: 'deep_aether',
			species: ['roseroot', 'yagroot', 'cruderoot', 'conberry', 'sunroot'],
			blocks: ['log', 'wood']
		},
		{
			namespace: 'twilightforest',
			species: ['twilight_oak', 'canopy', 'mangrove', 'dark', 'time', 'transformation', 'mining', 'sorting'],
			blocks: ['log', 'wood']
		},
		{
			namespace: 'gardens_of_the_dead',
			species: ['soulblight'],
			blocks: ['hyphae', 'stem']
		}
	]

	woodTypes.forEach((woodType) => {

		woodType.species.forEach((species, index) => {
			woodType.blocks.forEach((block) => {
				var input = woodType.namespace + ':' + species + '_' + block
				var output = woodType.namespace + ':stripped_' + (Array.isArray(woodType.override_output) && woodType.override_output[index] != undefined ? woodType.override_output[index] : species) + '_' + block
				var bark = (Array.isArray(woodType.override_bark) && woodType.override_bark[index] != undefined ? woodType.override_bark[index] : 'farmersdelight:tree_bark')

				event.remove({ output: output, type: 'create:cutting' })

				event.custom({
					type: 'create:cutting',
					ingredients: [{ item: input }],
					processing_time: 20,
					results: [
						{ id: output },
						{ id: bark }
					]
				}).id('kubejs:create_cutting/stripping/' + woodType.namespace + '_' + species + '_' + block)
			})
		})
	})

	var blocks = ['_log', '']
	blocks.forEach((block) => {
		var input = 'ars_elemental:yellow_archwood' + block
		var output = 'ars_elemental:stripped_yellow_archwood' + block

		event.remove({ output: output, type: 'create:cutting' })

		event.custom({
			type: 'create:cutting',
			ingredients: [{ item: input }],
			processing_time: 20,
			results: [
				{ id: output },
				{ id: 'kubejs:flashing_bark' }
			]
		}).id('kubejs:create_cutting/stripping/ars_elemental_yellow_archwood' + block)

		event.custom({
			type: 'farmersdelight:cutting',
			ingredients: [
				{ item: input }
			],
			result: [
				{
					item: {
						count: 1,
						id: output
					}
				},
				{
					item: {
						count: 1,
						id: 'kubejs:flashing_bark'
					}
				}
			],
			sound: {
				sound_id: 'minecraft:item.axe.strip'
			},
			tool: {
				type: 'farmersdelight:item_ability',
				action: 'axe_strip'
			}
		}).id('kubejs:farmersdelight_cutting/yellow_archwood' + block)
	})

	//cutting board
	event.remove([
		{ id: 'everycomp:fd/cutting/ars_nouveau/archwood_log' },
		{ id: 'everycomp:fd/cutting/ars_nouveau/archwood_wood' },
		{ id: 'everycomp:fd/cutting/aether/skyroot_log' },
		{ id: 'everycomp:fd/cutting/aether/skyroot_wood' }
	])
})