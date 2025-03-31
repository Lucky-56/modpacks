ServerEvents.tags('item', event => {
	const aether_planks = event.get('aether:planks_crafting').objectIds
	aether_planks.forEach(plank => {
		event.add('aether:planks_crafting/slabs', plank.toString().replace('planks', 'slab'))
	})
})

ServerEvents.recipes(event => {
	function repack(container, packing, packed_container, unpacking_recipe_id, packing_recipe_id) {
		if (packing_recipe_id == null || packing_recipe_id == 'clone') {
			if (packing_recipe_id == null && unpacking_recipe_id == 'deco') {
				packing_recipe_id = packed_container + '_recipe'
			} else {
				packing_recipe_id = packed_container
			}
		}
		if (unpacking_recipe_id == 'deco') {
			unpacking_recipe_id = packed_container + '_undo_recipe'
		} else
			if (unpacking_recipe_id == null) {
				unpacking_recipe_id = packing
			}
		event.shaped(packed_container, [
			'iii',
			'iCi',
			'iii'
		], {
			i: packing,
			C: container
		}
		).id(packing_recipe_id)
		event.shapeless('8x ' + packing,
			packed_container
		).id(unpacking_recipe_id).replaceIngredient(packed_container, container)
	}
	function adjustForRepack(uncompressed, compressed, uncompressed_recipe_id, compressing_recipe_id) {
		if (uncompressed_recipe_id == null) {
			uncompressed_recipe_id = uncompressed
		}
		if (compressing_recipe_id == null) {
			compressing_recipe_id = compressed
		}
		event.shaped(compressed, [
			'iii',
			'i i',
			'iii'
		], {
			i: uncompressed
		}
		).id(compressing_recipe_id)
		event.shapeless('8x ' + uncompressed,
			compressed
		).id(uncompressed_recipe_id)
	}
	function clack(container, eff, container_eff) {
		event.custom({
			type: "create:item_application",
			ingredients: [
				{
					item: container
				},
				{
					item: eff
				}
			],
			results: [
				{
					id: container_eff
				}
			]
		})
	}
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

	event.remove({ id: 'deco_storage:storage_crafter_recipe' })

	emptyCrate('kubejs:empty_crate', 'minecraft:stick', '#minecraft:wooden_slabs')
	emptyCrate('kubejs:skyroot_empty_crate', 'aether:skyroot_stick', '#aether:planks_crafting/slabs')
	event.shaped('kubejs:empty_bag', [
		' S ',
		'F F',
		' F '
	], {
		S: '#c:strings',
		F: 'supplementaries:flax'
	})

	adjustForRepack('create:pulp', 'create_compressed:pulp_block', 'create_compressed:pulp')


	//aethersdelight
	repack('kubejs:skyroot_empty_crate', 'aether:blue_berry', 'aethersdelight:blue_berry_crate')
	repack('kubejs:skyroot_empty_crate', 'aether:enchanted_berry', 'aethersdelight:enchanted_berry_crate')
	repack('kubejs:skyroot_empty_crate', 'aethersdelight:ginger', 'aethersdelight:ginger_crate')
	repack('kubejs:skyroot_empty_crate', 'aethersdelight:leek', 'aethersdelight:leek_crate')
	repack('kubejs:skyroot_empty_crate', 'aethersdelight:parsnip', 'aethersdelight:parsnip_crate')
	//deco_storage hangar
	repack('deco_storage:hanger', 'minecraft:beetroot', 'deco_storage:hanging_beetroots', 'deco')
	repack('deco_storage:hanger', 'minecraft:carrot', 'deco_storage:hanging_carrots', 'deco')
	repack('deco_storage:hanger', 'minecraft:cod', 'deco_storage:hanging_cod', 'deco')
	repack('deco_storage:hanger', 'minecraft:golden_carrot', 'deco_storage:hanging_golden_carrots', 'deco')
	repack('deco_storage:hanger', 'minecraft:leather', 'deco_storage:hanging_leather', 'deco')
	repack('deco_storage:hanger', 'minecraft:salmon', 'deco_storage:hanging_salmon', 'deco')
	repack('deco_storage:hanger', 'minecraft:tropical_fish', 'deco_storage:hanging_tropical_fish', 'deco')
	//empty bag
	repack('kubejs:empty_bag', 'aethersdelight:peppermint_leaf', 'aethersdelight:peppermint_leaf_bag')
	clack("kubejs:empty_bag", "create_compressed:cinder_flour_pile", "cratedelight:cinder_flour_bag")
	adjustForRepack('create:cinder_flour', 'create_compressed:cinder_flour_pile', 'create_compressed:cinder_flour')
	repack('kubejs:empty_bag', 'create:cinder_flour', 'cratedelight:cinder_flour_bag', 'create:cinder_dough', 'create:cinder_flour_bag')
	clack("kubejs:empty_bag", "create_compressed:powdered_obsidian_pile", "cratedelight:powdered_obsidian_bag")
	adjustForRepack('create:powdered_obsidian', 'create_compressed:powdered_obsidian_pile', 'create_compressed:powdered_obsidian')
	repack('kubejs:empty_bag', 'create:powdered_obsidian', 'cratedelight:powdered_obsidian_bag', 'create:powdered_obsidian', 'create:powdered_obsidian_bag')
	clack("kubejs:empty_bag", "create_compressed:wheat_flour_pile", "cratedelight:wheat_flour_bag")
	adjustForRepack('create:wheat_flour', 'create_compressed:wheat_flour_pile', 'create_compressed:wheat_flour')
	adjustForRepack('farmersdelight:wheat_dough', 'create_compressed:dough_block', 'create_compressed:dough')
	event.shaped('8x minecraft:slime_ball', [
		'lll',
		'lDl',
		'lll'
	], {
		l: '#c:dyes/lime',
		D: 'create_compressed:dough_block'
	}).id('create_compressed:slime_block_from_dough_block')
	repack('kubejs:empty_bag', 'create:wheat_flour', 'cratedelight:wheat_flour_bag', 'create:wheat_flour', 'create:wheat_flour_bag')
	repack('kubejs:empty_bag', 'farmersdelight:rice', 'farmersdelight:rice_bag', 'farmersdelight:rice_from_bag')
	repack('kubejs:empty_bag', 'minecraft:cocoa_beans', 'cratedelight:cocoabeans_bag', 'cratedelight:cocoabeans')
	repack('kubejs:empty_bag', 'minecraft:cookie', 'cratedelight:cookie_bag', 'cratedelight:cookie')
	repack('kubejs:empty_bag', 'minecraft:gunpowder', 'cratedelight:gunpowder_bag', 'cratedelight:gunpowder')
	clack("kubejs:empty_bag", "supplementaries:sugar_cube", "cratedelight:sugar_bag")
	adjustForRepack('minecraft:sugar', 'supplementaries:sugar_cube', 'supplementaries:sugar_cube_uncrafting')
	repack('kubejs:empty_bag', 'minecraft:sugar', 'cratedelight:sugar_bag', 'cratedelight:sugar')
	//deco_storage tray
	repack('deco_storage:empty_tray', 'minecraft:bricks', 'deco_storage:tray_with_bricks', 'deco')
	repack('deco_storage:empty_tray', 'minecraft:copper_ingot', 'deco_storage:tray_with_copper_ingots', 'deco', 'clone')
	repack('deco_storage:empty_tray', 'minecraft:deepslate_bricks', 'deco_storage:tray_with_deepslate_bricks', 'deco')
	repack('deco_storage:empty_tray', 'minecraft:end_stone_bricks', 'deco_storage:tray_with_end_stone_bricks', 'deco')
	repack('deco_storage:empty_tray', 'minecraft:gold_ingot', 'deco_storage:tray_with_gold_ingots', 'deco', 'clone')
	repack('deco_storage:empty_tray', 'minecraft:iron_ingot', 'deco_storage:tray_with_iron_ingots', 'deco', 'clone')
	repack('deco_storage:empty_tray', 'minecraft:mud_bricks', 'deco_storage:tray_with_mud_bricks', 'deco')
	repack('deco_storage:empty_tray', 'minecraft:nether_bricks', 'deco_storage:tray_with_nether_bricks', 'deco')
	repack('deco_storage:empty_tray', 'minecraft:polished_blackstone_bricks', 'deco_storage:tray_with_polished_blackstone_bricks', 'deco')
	repack('deco_storage:empty_tray', 'minecraft:raw_copper_block', 'deco_storage:tray_with_raw_copper', 'deco')
	repack('deco_storage:empty_tray', 'minecraft:raw_gold_block', 'deco_storage:tray_with_raw_gold', 'deco')
	repack('deco_storage:empty_tray', 'minecraft:raw_iron_block', 'deco_storage:tray_with_raw_iron', 'deco')
	repack('deco_storage:empty_tray', 'minecraft:red_nether_bricks', 'deco_storage:tray_with_red_nether_bricks', 'deco')
	repack('deco_storage:empty_tray', 'minecraft:stone_bricks', 'deco_storage:tray_with_stone_bricks', 'deco')
	//deco_storage basket
	repack('deco_storage:empty_basket', 'farmersdelight:onion', 'deco_storage:basket_with_onions', 'deco')
	repack('deco_storage:empty_basket', 'farmersdelight:tomato', 'deco_storage:basket_with_tomatoes', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:apple', 'deco_storage:basket_with_apples', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:beetroot', 'deco_storage:basket_with_beetroots', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:brown_mushroom', 'deco_storage:basket_with_brown_mushrooms', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:carrot', 'deco_storage:basket_with_carrots', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:cod', 'deco_storage:basket_with_cod', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:cookie', 'deco_storage:basket_with_cookies', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:golden_carrot', 'deco_storage:basket_with_golden_carrots', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:poisonous_potato', 'deco_storage:basket_with_poisonous_potatoes', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:potato', 'deco_storage:basket_with_potatoes', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:red_mushroom', 'deco_storage:basket_with_red_mushrooms', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:salmon', 'deco_storage:basket_with_salmon', 'deco')
	repack('deco_storage:empty_basket', 'minecraft:tropical_fish', 'deco_storage:basket_with_tropical_fish', 'deco')
	//deco_storage crate
	repack('deco_storage:empty_crate', 'farmersdelight:cabbage', 'deco_storage:crate_with_cabbage', 'deco')
	repack('deco_storage:empty_crate', 'farmersdelight:onion', 'deco_storage:crate_with_onions', 'deco')
	repack('deco_storage:empty_crate', 'farmersdelight:rice', 'deco_storage:crate_with_rice', 'deco')
	repack('deco_storage:empty_crate', 'farmersdelight:tomato', 'deco_storage:crate_with_tomatoes', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:amethyst_shard', 'deco_storage:crate_with_amethysts', 'deco', 'clone')
	repack('deco_storage:empty_crate', 'minecraft:apple', 'deco_storage:crate_with_apples', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:beetroot', 'deco_storage:crate_with_beetroots', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:carrot', 'deco_storage:crate_with_carrots', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:charcoal', 'deco_storage:crate_with_charcoal', 'deco', 'clone')
	repack('deco_storage:empty_crate', 'minecraft:coal', 'deco_storage:crate_with_coal', 'deco', 'clone')
	repack('deco_storage:empty_crate', 'minecraft:diamond', 'deco_storage:crate_with_diamonds', 'deco', 'clone')
	repack('deco_storage:empty_crate', 'minecraft:emerald', 'deco_storage:crate_with_emeralds', 'deco', 'clone')
	repack('deco_storage:empty_crate', 'minecraft:glow_berries', 'deco_storage:crate_with_glowberries', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:golden_apple', 'deco_storage:crate_with_golden_apples', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:golden_carrot', 'deco_storage:crate_with_golden_carrots', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:hay_block', 'deco_storage:crate_with_hay', 'deco', 'clone')
	repack('deco_storage:empty_crate', 'minecraft:melon', 'deco_storage:crate_with_melons', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:poisonous_potato', 'deco_storage:crate_with_poisonous_potatoes', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:potato', 'deco_storage:crate_with_potatoes', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:pumpkin', 'deco_storage:crate_with_pumpkins', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:quartz', 'deco_storage:crate_with_quartz', 'deco', 'clone')
	repack('deco_storage:empty_crate', 'minecraft:raw_copper_block', 'deco_storage:crate_with_raw_copper', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:raw_gold_block', 'deco_storage:crate_with_raw_gold', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:raw_iron_block', 'deco_storage:crate_with_raw_iron', 'deco')
	repack('deco_storage:empty_crate', 'minecraft:sweet_berries', 'deco_storage:crate_with_sweetberries', 'deco')
	//empty crate
	repack('kubejs:empty_crate', 'ars_nouveau:bastion_pod', 'arsdelight:bastion_crate', 'arsdelight:bastion_pod_from_bastion_crate')
	repack('kubejs:empty_crate', 'ars_nouveau:bombegranate_pod', 'arsdelight:bombegrante_crate', 'arsdelight:bombegranate_pod_from_bombegrante_crate')
	repack('kubejs:empty_crate', 'ars_nouveau:frostaya_pod', 'arsdelight:frostaya_crate', 'arsdelight:frostaya_pod_from_frostaya_crate')
	repack('kubejs:empty_crate', 'ars_nouveau:mendosteen_pod', 'arsdelight:mendosteen_crate', 'arsdelight:mendosteen_pod_from_mendosteen_crate')
	clack("kubejs:empty_crate", "ars_nouveau:sourceberry_sack", "arsdelight:source_berry_crate")
	adjustForRepack('ars_nouveau:sourceberry_bush', 'ars_nouveau:sourceberry_sack', 'ars_nouveau:sourceberry_sack_to_bush')
	repack('kubejs:empty_crate', 'ars_nouveau:sourceberry_bush', 'arsdelight:source_berry_crate', 'arsdelight:source_berry_unpack')
	repack('kubejs:empty_crate', 'farmersdelight:cabbage', 'farmersdelight:cabbage_crate')
	repack('kubejs:empty_crate', 'farmersdelight:onion', 'farmersdelight:onion_crate')
	repack('kubejs:empty_crate', 'farmersdelight:tomato', 'farmersdelight:tomato_crate')
	repack('kubejs:empty_crate', 'minecraft:apple', 'cratedelight:apple_crate', 'cratedelight:apples')
	repack('kubejs:empty_crate', 'minecraft:beetroot', 'farmersdelight:beetroot_crate', 'farmersdelight:beetroot_from_crate')
	repack('kubejs:empty_crate', 'minecraft:brown_mushroom', 'cratedelight:brown_mushroom_crate', 'cratedelight:brown_mushroom')
	repack('kubejs:empty_crate', 'minecraft:carrot', 'farmersdelight:carrot_crate', 'farmersdelight:carrot_from_crate')
	repack('kubejs:empty_crate', 'minecraft:chorus_fruit', 'ends_delight:chorus_fruit_crate', 'ends_delight:chorus_fruit_crate_to_chorus_fruit')
	repack('kubejs:empty_crate', 'minecraft:cod', 'cratedelight:cod_crate', 'cratedelight:cod')
	repack('kubejs:empty_crate', 'minecraft:egg', 'cratedelight:egg_crate', 'cratedelight:eggs')
	repack('kubejs:empty_crate', 'minecraft:glow_berries', 'cratedelight:glowberry_crate', 'cratedelight:glowberries')
	repack('kubejs:empty_crate', 'minecraft:golden_apple', 'cratedelight:golden_apple_crate', 'cratedelight:goldenapple')
	repack('kubejs:empty_crate', 'minecraft:golden_carrot', 'cratedelight:golden_carrot_crate', 'cratedelight:golden_carrot')
	repack('kubejs:empty_crate', 'minecraft:potato', 'farmersdelight:potato_crate', 'farmersdelight:potato_from_crate')
	repack('kubejs:empty_crate', 'minecraft:red_mushroom', 'cratedelight:red_mushroom_crate', 'cratedelight:red_mushroom')
	repack('kubejs:empty_crate', 'minecraft:salmon', 'cratedelight:salmon_crate', 'cratedelight:salmon')
	repack('kubejs:empty_crate', 'minecraft:sweet_berries', 'cratedelight:berry_crate', 'cratedelight:berries')
	repack('kubejs:empty_crate', 'snowyspirit:ginger', 'snowyspirit:ginger_crate', 'snowyspirit:ginger_crate_uncrafting')
	//deco_storage barrel
	repack('deco_storage:empty_barrel', 'farmersdelight:cabbage', 'deco_storage:barrel_with_cabbage', 'deco')
	repack('deco_storage:empty_barrel', 'farmersdelight:onion', 'deco_storage:barrel_with_onions', 'deco')
	repack('deco_storage:empty_barrel', 'farmersdelight:rice', 'deco_storage:barrel_with_rice', 'deco')
	repack('deco_storage:empty_barrel', 'farmersdelight:tomato', 'deco_storage:barrel_with_tomatoes', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:amethyst_shard', 'deco_storage:barrel_with_amethysts', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:apple', 'deco_storage:barrel_with_apples', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:beetroot', 'deco_storage:barrel_with_beetroots', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:bricks', 'deco_storage:barrel_with_bricks', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:cactus', 'deco_storage:barrel_with_cactuses', 'deco_storage:barrel_with_cactus_undo_recipe', 'deco_storage:barrel_with_cactus_recipe')
	repack('deco_storage:empty_barrel', 'minecraft:carrot', 'deco_storage:barrel_with_carrots', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:charcoal', 'deco_storage:barrel_with_charcoal', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:coal', 'deco_storage:barrel_with_coal', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:cod', 'deco_storage:barrel_with_cod', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:deepslate_bricks', 'deco_storage:barrel_with_deepslate_bricks', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:diamond', 'deco_storage:barrel_with_diamonds', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:emerald', 'deco_storage:barrel_with_emeralds', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:end_stone_bricks', 'deco_storage:barrel_with_end_bricks', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:glow_berries', 'deco_storage:barrel_with_glowberries', 'deco_storage:barrel_with_glow_berries_undo_recipe', 'deco_storage:barrel_with_glow_berries_recipe')
	repack('deco_storage:empty_barrel', 'minecraft:golden_apple', 'deco_storage:barrel_with_golden_apples', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:golden_carrot', 'deco_storage:barrel_with_golden_carrots', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:hay_block', 'deco_storage:barrel_with_hay', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:melon', 'deco_storage:barrel_with_melons', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:mud_bricks', 'deco_storage:barrel_with_mud_bricks', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:nether_bricks', 'deco_storage:barrel_with_nether_bricks', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:poisonous_potato', 'deco_storage:barrel_with_poisonous_potatoes', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:polished_blackstone_bricks', 'deco_storage:barrel_with_polished_blackstone_bricks', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:potato', 'deco_storage:barrel_with_potatoes', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:pumpkin', 'deco_storage:barrel_with_pumpkins', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:quartz', 'deco_storage:barrel_with_quartz', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:raw_copper_block', 'deco_storage:barrel_with_raw_copper', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:raw_gold_block', 'deco_storage:barrel_with_raw_gold', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:raw_iron_block', 'deco_storage:barrel_with_raw_iron', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:red_nether_bricks', 'deco_storage:barrel_with_red_nether_bricks', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:salmon', 'deco_storage:barrel_with_salmon', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:stone_bricks', 'deco_storage:barrel_with_stone_bricks', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:sugar_cane', 'deco_storage:barrel_with_sugarcane', 'deco_storage:barrel_with_sugar_cane_undo_recipe', 'deco_storage:barrel_with_sugar_cane_recipe')
	repack('deco_storage:empty_barrel', 'minecraft:sweet_berries', 'deco_storage:barrel_with_sweetberries', 'deco_storage:barrel_with_sweet_berries_undo_recipe', 'deco_storage:barrel_with_sweet_berries_recipe')
	repack('deco_storage:empty_barrel', 'minecraft:tropical_fish', 'deco_storage:barrel_with_tropical_fish', 'deco')
	repack('deco_storage:empty_barrel', 'minecraft:tuff_bricks', 'deco_storage:barrel_with_tuff_bricks', 'deco')
})