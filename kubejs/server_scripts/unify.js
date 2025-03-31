ServerEvents.recipes(event => {
	//iron substitutes
	// tin
	event.remove({ id: 'create_ironworks:misc/crafting/cauldron_tin' })
	event.shaped('cauldron', [
		'i i',
		'i i',
		'iii'
	], {
		i: ['#c:ingots/iron', '#c:ingots/tin']
	}).id('minecraft:cauldron')

	event.remove({ id: 'aethersdelight:hopper_from_arkenium' })
	event.remove({ id: 'create_ironworks:misc/crafting/hopper_tin' })
	event.shaped('hopper', [
		'i i',
		'iCi',
		' i '
	], {
		i: ['#c:ingots/iron', '#c:ingots/tin', 'aethersdelight:arkenium_ingot'],
		C: '#c:chests/wooden'
	}).id('minecraft:hopper')

	event.remove({ id: 'create_ironworks:misc/crafting/bucket_tin' })
	event.shaped('bucket', [
		'i i',
		' i '
	], {
		i: ['#c:ingots/iron', '#c:ingots/tin']
	}).id('minecraft:bucket')

	event.remove({ id: 'create_ironworks:misc/crafting/lantern' })
	event.shaped('lantern', [
		'nnn',
		'ntn',
		'nnn'
	], {
		n: ['#c:nuggets/iron', '#c:nuggets/tin'],
		t: 'torch'
	}).id('minecraft:lantern')

	event.remove({ id: 'create_ironworks:misc/crafting/soul_lantern' })
	event.shaped('soul_lantern', [
		'nnn',
		'ntn',
		'nnn'
	], {
		n: ['#c:nuggets/iron', '#c:nuggets/tin'],
		t: 'soul_torch'
	}).id('minecraft:soul_lantern')

	// zinc
	event.remove({ id: 'create:crafting/appliances/chain_from_zinc' })
	event.shaped('chain', [
		'n',
		'i',
		'n'
	], {
		n: ['#c:nuggets/iron', '#c:nuggets/zinc'],
		i: ['#c:ingots/iron', '#c:ingots/zinc']
	}).id('minecraft:chain')

	event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })
	event.shaped('create:andesite_alloy', [
		'nA',
		'An'
	], {
		n: ['#c:nuggets/iron', '#c:nuggets/zinc'],
		A: 'andesite'
	}).id('create:crafting/materials/andesite_alloy')
	event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' })
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: "minecraft:andesite"
			},
			[
				{
					tag: "c:nuggets/iron"
				},
				{
					tag: "c:nuggets/zinc"
				}
			]
		],
		results: [
			{
				id: "create:andesite_alloy"
			}
		]
	}).id('create:mixing/andesite_alloy')

	event.remove({ id: 'create:crafting/kinetics/encased_chain_drive_from_zinc' })
	event.shapeless('create:encased_chain_drive', [
		'create:andesite_casing', ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc']
	]).id('create:crafting/kinetics/encased_chain_drive')

	event.remove({ id: 'createcasing:crafting/chain_drive/brass_from_zinc' })
	event.shapeless('createcasing:brass_encased_chain_drive', [
		'create:brass_casing', ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc']
	]).id('createcasing:crafting/chain_drive/brass')

	event.remove({ id: 'createcasing:crafting/chain_drive/copper_from_zinc' })
	event.shapeless('createcasing:copper_encased_chain_drive', [
		'create:copper_casing', ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc']
	]).id('createcasing:crafting/chain_drive/copper')

	event.remove({ id: 'createcasing:crafting/chain_drive/railway_from_zinc' })
	event.shapeless('createcasing:railway_encased_chain_drive', [
		'create:railway_casing', ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc']
	]).id('createcasing:crafting/chain_drive/railway')

	event.remove({ id: 'createcasing:crafting/chain_drive/creative_zinc' })
	event.shapeless('createcasing:creative_encased_chain_drive', [
		'createcasing:creative_casing', ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc']
	]).id('createcasing:crafting/chain_drive/creative')

	event.remove({ id: 'createcasing:crafting/chain_drive/industrial_iron_from_zinc' })
	event.shapeless('createcasing:industrial_iron_encased_chain_drive', [
		'create:industrial_iron_block', ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc'], ['#c:nuggets/iron', '#c:nuggets/zinc']
	]).id('createcasing:crafting/chain_drive/industrial_iron')

	// arkenium
	event.remove({ id: 'aethersdelight:anvil_from_arkenium' })
	event.shaped('anvil', [
		'BBB',
		' i ',
		'iii'
	], {
		B: ['#c:storage_blocks/iron', 'aethersdelight:arkenium_block'],
		i: ['#c:ingots/iron', 'aethersdelight:arkenium_ingot']
	}).id('minecraft:anvil')

	event.remove({ id: 'aethersdelight:shears_from_arkenium' })
	event.shaped('shears', [
		' i',
		'i '
	], {
		i: ['#c:ingots/iron', 'aethersdelight:arkenium_ingot']
	}).id('minecraft:shears')

	event.remove({ id: 'aethersdelight:crossbow_from_arkenium' })
	event.remove({ id: 'aethersdelight:skyroot_crossbow_from_arkenium' })
	event.shaped('crossbow', [
		'rir',
		'sTs',
		' r '
	], {
		r: '#c:rods/wooden',
		i: ['#c:ingots/iron', 'aethersdelight:arkenium_ingot'],
		s: 'string',
		T: 'tripwire_hook'
	}).id('minecraft:crossbow')


	//farmers doubles
	event.remove({ id: 'farmersdelight:paper_from_tree_bark' })
	event.remove({ id: 'farmersdelight:organic_compost_from_tree_bark' })
	event.remove({ id: 'aethersdelight:aether_compost_from_rotten_flesh' })
	event.shapeless('farmersdelight:organic_compost', [
		['minecraft:dirt', 'aether:aether_dirt'], 'farmersdelight:straw', 'farmersdelight:straw', 'bone_meal', 'bone_meal', 'bone_meal', 'bone_meal', 'rotten_flesh', 'rotten_flesh'
	]).id('farmersdelight:organic_compost_from_rotten_flesh')
	event.shapeless('farmersdelight:organic_compost', [
		'aether:aether_dirt', 'farmersdelight:straw', 'farmersdelight:straw', 'farmersdelight:straw', 'farmersdelight:straw', 'bone_meal', 'bone_meal', '#farmersdelight:barks', '#farmersdelight:barks'
	]).id('aethersdelight:aether_compost_from_bone_meal')


	//aether
	// planks_crafting
	event.remove({ id: 'aether:skyroot_crafting_table' })
	event.remove({ id: 'deep_aether:skyroot_crafting_table' })
	event.shaped('crafting_table', [
		'PP',
		'PP'
	], {
		P: ['#planks', '#aether:planks_crafting']
	}).id('minecraft:crafting_table')

	event.remove({ id: 'aether:skyroot_cartography_table' })
	event.shaped('cartography_table', [
		'pp',
		'PP',
		'PP'
	], {
		p: 'paper',
		P: ['#planks', '#aether:planks_crafting']
	}).id('minecraft:cartography_table')

	event.remove({ id: 'aether:skyroot_fletching_table' })
	event.shaped('fletching_table', [
		'cc',
		'PP',
		'PP'
	], {
		c: '#c:ingots/copper',
		P: ['#planks', '#aether:planks_crafting']
	}).id('minecraft:fletching_table')

	event.remove({ id: 'aether:skyroot_smithing_table' })
	event.remove({ id: 'aethersdelight:smithing_table_from_arkenium' })
	event.remove({ id: 'aethersdelight:skyroot_smithing_table_from_arkenium' })
	event.shaped('smithing_table', [
		'ii',
		'PP',
		'PP'
	], {
		i: ['#c:ingots/iron', 'aethersdelight:arkenium_ingot'],
		P: ['#planks', '#aether:planks_crafting']
	}).id('minecraft:smithing_table')

	event.remove({ id: 'aether:skyroot_grindstone' })
	event.remove({ id: 'aether:skyroot_grindstone_holystone_slab' })
	event.shaped('grindstone', [
		'sSs',
		'P P'
	], {
		s: '#c:rods/wooden',
		S: ['stone_slab', 'aether:holystone_slab'],
		P: ['#planks', '#aether:planks_crafting']
	}).id('minecraft:grindstone')

	event.remove({ id: 'aether:skyroot_loom' })
	event.shaped('loom', [
		'ss',
		'PP'
	], {
		s: 'string',
		P: ['#planks', '#aether:planks_crafting']
	}).id('minecraft:loom')

	event.remove({ id: 'aether:skyroot_note_block' })
	event.shaped('note_block', [
		'PPP',
		'PrP',
		'PPP'
	], {
		P: ['#planks', '#aether:planks_crafting'],
		r: '#c:dusts/redstone'
	}).id('minecraft:note_block')

	event.remove({ id: 'aether:gravitite_jukebox' })
	event.remove({ id: 'aether:skyroot_jukebox' })
	event.remove({ id: 'aether:skyroot_gravitite_jukebox' })
	event.shaped('jukebox', [
		'PPP',
		'PdP',
		'PPP'
	], {
		P: ['#planks', '#aether:planks_crafting'],
		d: ['#c:gems/diamond', '#aether:processed/gravitite']
	}).id('minecraft:jukebox')

	event.remove({ id: 'aether:skyroot_beehive' })

	event.remove({ id: 'aether:skyroot_chest' })
	//TODO chesting

	event.remove({ id: 'aether:skyroot_barrel' })
	event.shaped('barrel', [
		'PSP',
		'P P',
		'PSP'
	], {
		P: ['#planks', '#aether:planks_crafting'],
		S: '#wooden_slabs'
	}).id('minecraft:barrel')

	event.remove({ id: 'aether:skyroot_tripwire_hook' })
	event.remove({ id: 'aethersdelight:tripwire_hook_from_arkenium' })
	event.remove({ id: 'aethersdelight:skyroot_tripwire_hook_from_arkenium' })
	event.shaped('2x tripwire_hook', [
		'i',
		's',
		'P'
	], {
		i: ['#c:ingots/iron', 'aethersdelight:arkenium_ingot'],
		s: '#c:rods/wooden',
		P: ['#planks', '#aether:planks_crafting']
	}).id('minecraft:tripwire_hook')

	event.remove({ id: 'aether:skyroot_piston' })
	event.shaped('piston', [
		'PPP',
		'CiC',
		'CrC'
	], {
		P: ['#planks', '#aether:planks_crafting'],
		C: '#stone_crafting_materials',
		i: '#c:ingots/iron',
		r: '#c:dusts/redstone'
	}).id('minecraft:piston')

	event.remove({ id: 'aether:wood_zanite_vanilla_shield' })
	event.remove({ id: 'aethersdelight:arkenium_vanilla_shield' })
	event.remove({ id: 'aether:skyroot_iron_vanilla_shield' })
	event.remove({ id: 'aether:skyroot_zanite_vanilla_shield' })
	event.remove({ id: 'aethersdelight:arkenium_skyroot_vanilla_shield' })
	event.shaped('shield', [
		'PiP',
		'PPP',
		' P '
	], {
		P: ['#planks', '#aether:planks_crafting'],
		i: ['#c:ingots/iron', 'aethersdelight:arkenium_ingot', '#aether:gems/zanite']
	}).id('minecraft:shield')

	event.remove({ id: 'aethersdelight:cutting_board_from_skyroot' })
	event.shaped('farmersdelight:cutting_board', [
		'sPP',
		'sPP'
	], {
		s: '#c:rods/wooden',
		P: ['#planks', '#aether:planks_crafting']
	}).id('farmersdelight:cutting_board')

	event.remove({ id: 'aethersdelight:canvas_sign_from_skyroot' })
	event.shaped('3x farmersdelight:canvas_sign', [
		'PcP',
		'PcP',
		' s '
	], {
		P: ['#planks', '#aether:planks_crafting'],
		c: 'farmersdelight:canvas',
		s: '#c:rods/wooden'
	}).id('farmersdelight:canvas_sign')

	// holystone
	event.remove({ id: 'aether:holystone_stonecutter' })
	event.remove({ id: 'aethersdelight:stonecutter_from_arkenium' })
	event.shaped('stonecutter', [
		' i ',
		'SSS'
	], {
		i: ['#c:ingots/iron', 'aethersdelight:arkenium_ingot'],
		S: ['stone', 'aether:holystone']
	}).id('minecraft:stonecutter')

	event.remove({ id: 'deep_aether:crystal_brewing_stand' })
	event.shaped('brewing_stand', [
		' r ',
		'SSS'
	], {
		r: ['#c:rods/blaze', 'deep_aether:bio_crystal'],
		S: '#stone_crafting_materials'
	}).id('minecraft:brewing_stand')


	//TODO uni-recycle
	event.smelting('iron_nugget', ['create_ironworks:iron_hammer', 'create_ironworks:iron_paxel'], 0.1).id('create_ironworks:iron_nugget_from_smelting')
	event.blasting('iron_nugget', ['create_ironworks:iron_hammer', 'create_ironworks:iron_paxel'], 0.1).id('create_ironworks:iron_nugget_from_blasting')
	event.smelting('gold_nugget', ['create_ironworks:gold_hammer', 'create_ironworks:gold_paxel'], 0.1).id('create_ironworks:gold_nugget_from_smelting')
	event.blasting('gold_nugget', ['create_ironworks:gold_hammer', 'create_ironworks:gold_paxel'], 0.1).id('create_ironworks:gold_nugget_from_blasting')
	event.smelting('create:copper_nugget', ['create_ironworks:copper_armor_helmet', 'create_ironworks:copper_armor_chestplate', 'create_ironworks:copper_armor_leggings', 'create_ironworks:copper_armor_boots', 'create_ironworks:copper_sword', 'create_ironworks:copper_hammer', 'create_ironworks:copper_paxel', 'create_ironworks:copper_pickaxe', 'create_ironworks:copper_axe', 'create_ironworks:copper_shovel', 'create_ironworks:copper_hoe'], 0.1).id('create_ironworks:copper_nugget_from_smelting')
	event.blasting('create:copper_nugget', ['create_ironworks:copper_armor_helmet', 'create_ironworks:copper_armor_chestplate', 'create_ironworks:copper_armor_leggings', 'create_ironworks:copper_armor_boots', 'create_ironworks:copper_sword', 'create_ironworks:copper_hammer', 'create_ironworks:copper_paxel', 'create_ironworks:copper_pickaxe', 'create_ironworks:copper_axe', 'create_ironworks:copper_shovel', 'create_ironworks:copper_hoe'], 0.1).id('create_ironworks:copper_nugget_from_blasting')
	event.smelting('create:brass_nugget', ['create_ironworks:brass_armor_helmet', 'create_ironworks:brass_armor_chestplate', 'create_ironworks:brass_armor_leggings', 'create_ironworks:brass_armor_boots', 'create_ironworks:brass_sword', 'create_ironworks:brass_hammer', 'create_ironworks:brass_paxel', 'create_ironworks:brass_pickaxe', 'create_ironworks:brass_axe', 'create_ironworks:brass_shovel', 'create_ironworks:brass_hoe'], 0.1).id('create_ironworks:brass_nugget_from_smelting')
	event.blasting('create:brass_nugget', ['create_ironworks:brass_armor_helmet', 'create_ironworks:brass_armor_chestplate', 'create_ironworks:brass_armor_leggings', 'create_ironworks:brass_armor_boots', 'create_ironworks:brass_sword', 'create_ironworks:brass_hammer', 'create_ironworks:brass_paxel', 'create_ironworks:brass_pickaxe', 'create_ironworks:brass_axe', 'create_ironworks:brass_shovel', 'create_ironworks:brass_hoe'], 0.1).id('create_ironworks:brass_nugget_from_blasting')
	event.smelting('create_ironworks:bronze_nugget', ['create_ironworks:bronze_armor_helmet', 'create_ironworks:bronze_armor_chestplate', 'create_ironworks:bronze_armor_leggings', 'create_ironworks:bronze_armor_boots', 'create_ironworks:bronze_sword', 'create_ironworks:bronze_hammer', 'create_ironworks:bronze_paxel', 'create_ironworks:bronze_pickaxe', 'create_ironworks:bronze_axe', 'create_ironworks:bronze_shovel', 'create_ironworks:bronze_hoe'], 0.1).id('create_ironworks:bronze_nugget_from_smelting')
	event.blasting('create_ironworks:bronze_nugget', ['create_ironworks:bronze_armor_helmet', 'create_ironworks:bronze_armor_chestplate', 'create_ironworks:bronze_armor_leggings', 'create_ironworks:bronze_armor_boots', 'create_ironworks:bronze_sword', 'create_ironworks:bronze_hammer', 'create_ironworks:bronze_paxel', 'create_ironworks:bronze_pickaxe', 'create_ironworks:bronze_axe', 'create_ironworks:bronze_shovel', 'create_ironworks:bronze_hoe'], 0.1).id('create_ironworks:bronze_nugget_from_blasting')
	event.smelting('create_ironworks:steel_nugget', ['create_ironworks:steel_armor_helmet', 'create_ironworks:steel_armor_chestplate', 'create_ironworks:steel_armor_leggings', 'create_ironworks:steel_armor_boots', 'create_ironworks:steel_sword', 'create_ironworks:steel_hammer', 'create_ironworks:steel_paxel', 'create_ironworks:steel_pickaxe', 'create_ironworks:steel_axe', 'create_ironworks:steel_shovel', 'create_ironworks:steel_hoe'], 0.1).id('create_ironworks:steel_nugget_from_smelting')
	event.blasting('create_ironworks:steel_nugget', ['create_ironworks:steel_armor_helmet', 'create_ironworks:steel_armor_chestplate', 'create_ironworks:steel_armor_leggings', 'create_ironworks:steel_armor_boots', 'create_ironworks:steel_sword', 'create_ironworks:steel_hammer', 'create_ironworks:steel_paxel', 'create_ironworks:steel_pickaxe', 'create_ironworks:steel_axe', 'create_ironworks:steel_shovel', 'create_ironworks:steel_hoe'], 0.1).id('create_ironworks:steel_nugget_from_blasting')

	//common
	event.remove({ id: 'farmersdelight:book_from_canvas' })
	event.remove({ id: 'create:crafting/appliances/book' })
	event.shapeless('book', [
		'paper', 'paper', 'paper', ['#c:leathers', 'farmersdelight:canvas', 'create:cardboard']
	]).id('minecraft:book')
})