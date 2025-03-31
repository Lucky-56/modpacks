const upgrades = [
	["sophisticatedbackpacks:upgrade_base", "c:storage_blocks/copper", "c:ingots/copper", "sophisticatedbackpacks:stack_upgrade_starter_tier"],
	["sophisticatedbackpacks:stack_upgrade_starter_tier", "c:storage_blocks/iron", "c:ingots/iron", "sophisticatedbackpacks:stack_upgrade_tier_1"],
	["sophisticatedbackpacks:stack_upgrade_tier_1", "c:storage_blocks/gold", "c:ingots/gold", "sophisticatedbackpacks:stack_upgrade_tier_2"],
	["sophisticatedbackpacks:stack_upgrade_tier_2", "c:storage_blocks/diamond", "c:gems/diamond", "sophisticatedbackpacks:stack_upgrade_tier_3"],
	["sophisticatedbackpacks:stack_upgrade_tier_3", "c:storage_blocks/netherite", "c:ingots/netherite", "sophisticatedbackpacks:stack_upgrade_tier_4"]
]
const downgrades = [
	["sophisticatedbackpacks:upgrade_base", "sophisticatedbackpacks:stack_downgrade_tier_1"],
	["sophisticatedbackpacks:stack_downgrade_tier_1", "sophisticatedbackpacks:stack_downgrade_tier_2"],
	["sophisticatedbackpacks:stack_downgrade_tier_2", "sophisticatedbackpacks:stack_downgrade_tier_3"]
]
const simplerMachines = [
	['chipped:watering_can', 'sophisticatedbackpacks:chipped/botanist_workbench_upgrade'],
	['chipped:glassblower', 'sophisticatedbackpacks:chipped/glassblower_upgrade'],
	['chipped:saw', 'sophisticatedbackpacks:chipped/carpenters_table_upgrade'],
	['chipped:needles', 'sophisticatedbackpacks:chipped/loom_table_upgrade'],
	['chipped:chisel', 'sophisticatedbackpacks:chipped/mason_table_upgrade'],
	['chipped:alchemy_book', 'sophisticatedbackpacks:chipped/alchemy_bench_upgrade'],
	['chipped:multimeter', 'sophisticatedbackpacks:chipped/tinkering_table_upgrade']
]
const simpleMachines = [
	["minecraft:furnace", "sophisticatedbackpacks:smelting_upgrade", "kubejs:incomplete_smelting_upgrade"],
	["minecraft:blast_furnace", "sophisticatedbackpacks:blasting_upgrade", "kubejs:incomplete_blasting_upgrade"],
	["minecraft:smoker", "sophisticatedbackpacks:smoking_upgrade", "kubejs:incomplete_smoking_upgrade"],
	["minecraft:crafter", "sophisticatedbackpacks:crafting_upgrade", "kubejs:incomplete_crafting_upgrade"],
	["minecraft:smithing_table", "sophisticatedbackpacks:smithing_upgrade", "kubejs:incomplete_smithing_upgrade"],
	["minecraft:jukebox", "sophisticatedbackpacks:jukebox_upgrade", "kubejs:incomplete_jukebox_upgrade"],
	["minecraft:stonecutter", "sophisticatedbackpacks:stonecutter_upgrade", "kubejs:incomplete_stonecutter_upgrade"],
	["sawmill:sawmill", "sophisticatedbackpacks:sawmill/sawmill_upgrade", "kubejs:incomplete_sawmill_upgrade"],
	["create:fluid_tank", "sophisticatedbackpacks:tank_upgrade", "kubejs:incomplete_tank_upgrade"],
	["create:mechanical_pump", "sophisticatedbackpacks:pump_upgrade", "kubejs:incomplete_pump_upgrade"],
	["create:mechanical_press", "sophisticatedbackpacks:compacting_upgrade", "kubejs:incomplete_compacting_upgrade"],
	["kubejs:netherite_anvil", "sophisticatedbackpacks:anvil_upgrade", "kubejs:incomplete_anvil_upgrade"]
]
const upgradeFilter = [
	["sophisticatedbackpacks:pickup_upgrade", "sophisticatedbackpacks:advanced_pickup_upgrade", "kubejs:incomplete_advanced_pickup_upgrade"],
	["sophisticatedbackpacks:magnet_upgrade", "sophisticatedbackpacks:advanced_magnet_upgrade", "kubejs:incomplete_advanced_magnet_upgrade"],
	["sophisticatedbackpacks:feeding_upgrade", "sophisticatedbackpacks:advanced_feeding_upgrade", "kubejs:incomplete_advanced_feeding_upgrade"],
	["sophisticatedbackpacks:void_upgrade", "sophisticatedbackpacks:advanced_void_upgrade", "kubejs:incomplete_advanced_void_upgrade"],
	["sophisticatedbackpacks:restock_upgrade", "sophisticatedbackpacks:advanced_restock_upgrade", "kubejs:incomplete_advanced_restock_upgrade"],
	["sophisticatedbackpacks:deposit_upgrade", "sophisticatedbackpacks:advanced_deposit_upgrade", "kubejs:incomplete_advanced_deposit_upgrade"],
	["sophisticatedbackpacks:refill_upgrade", "sophisticatedbackpacks:advanced_refill_upgrade", "kubejs:incomplete_advanced_refill_upgrade"],
	["sophisticatedbackpacks:jukebox_upgrade", "sophisticatedbackpacks:advanced_jukebox_upgrade", "kubejs:incomplete_advanced_jukebox_upgrade"],
	["sophisticatedbackpacks:tool_swapper_upgrade", "sophisticatedbackpacks:advanced_tool_swapper_upgrade", "kubejs:incomplete_advanced_tool_swapper_upgrade"],
	["sophisticatedbackpacks:pump_upgrade", "sophisticatedbackpacks:advanced_pump_upgrade", "kubejs:incomplete_advanced_pump_upgrade"]
]
const upgradeAuto = [
	["sophisticatedbackpacks:smelting_upgrade", "sophisticatedbackpacks:auto_smelting_upgrade", "kubejs:incomplete_auto_smelting_upgrade"],
	["sophisticatedbackpacks:smoking_upgrade", "sophisticatedbackpacks:auto_smoking_upgrade", "kubejs:incomplete_auto_smoking_upgrade"],
	["sophisticatedbackpacks:blasting_upgrade", "sophisticatedbackpacks:auto_blasting_upgrade", "kubejs:incomplete_auto_blasting_upgrade"]
]

ServerEvents.recipes(event => {
	event.shaped('kubejs:andesite_zinc_frame', [
		'nIn',
		'I I',
		'nIn'
	], {
		n: 'create:zinc_nugget',
		I: 'create:andesite_alloy'
	})

	//upgrade_base from andesite_zinc_frame
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "kubejs:andesite_zinc_frame"
		},
		loops: 3,
		results: [
			{
				chance: 100.0,
				id: "sophisticatedbackpacks:upgrade_base"
			},
			{
				chance: 3.0,
				id: "create:andesite_alloy"
			},
			{
				id: "create:zinc_nugget"
			}
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_upgrade_base"
					},
					{
						item: "minecraft:leather"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_upgrade_base"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_upgrade_base"
					},
					{
						item: "minecraft:string"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_upgrade_base"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:incomplete_upgrade_base"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_upgrade_base"
					}
				]
			}
		],
		transitional_item: {
			id: "kubejs:incomplete_upgrade_base"
		}
	}).id('sophisticatedbackpacks:upgrade_base')

	//tool_swapper from base
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "sophisticatedbackpacks:upgrade_base"
		},
		loops: 1,
		results: [
			{
				id: "sophisticatedbackpacks:tool_swapper_upgrade"
			}
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_tool_swapper_upgrade"
					},
					{
						item: "cosmeticarmoursmod:sword_sheath_empty_chestplate"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_tool_swapper_upgrade"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_tool_swapper_upgrade"
					},
					{
						item: "create:mechanical_arm"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_tool_swapper_upgrade"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:incomplete_tool_swapper_upgrade"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_tool_swapper_upgrade"
					}
				]
			}
		],
		transitional_item: {
			id: "kubejs:incomplete_tool_swapper_upgrade"
		}
	}).id('sophisticatedbackpacks:tool_swapper_upgrade')

	//feeding from base
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "sophisticatedbackpacks:upgrade_base"
		},
		loops: 1,
		results: [
			{
				id: "sophisticatedbackpacks:feeding_upgrade"
			}
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_feeding_upgrade"
					},
					{
						item: "minecraft:enchanted_golden_apple"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_feeding_upgrade"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_feeding_upgrade"
					},
					{
						item: "create:mechanical_arm"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_feeding_upgrade"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:incomplete_feeding_upgrade"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_feeding_upgrade"
					}
				]
			}
		],
		transitional_item: {
			id: "kubejs:incomplete_feeding_upgrade"
		}
	}).id('sophisticatedbackpacks:feeding_upgrade')

	//anvil from base
	event.shapeless('9x kubejs:netherite_nugget', '#c:ingots/netherite').id('kubejs:netherite_nugget')
	event.shaped('netherite_ingot', ['nnn', 'nnn', 'nnn'], { n: '#c:nuggets/netherite' }).id('kubejs:netherite_ingot')
	event.custom({
		type: "create:mixing",
		heat_requirement: "superheated",
		ingredients: [
			{
				tag: "c:nuggets/netherite"
			}
		],
		results: [
			{
				amount: 100,
				id: "kubejs:molten_netherite"
			}
		]
	}).id('kubejs:molten_netherite')
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "minecraft:damaged_anvil"
		},
		loops: 1,
		results: [
			{
				id: "kubejs:netherite_anvil"
			}
		],
		sequence: [
			{
				type: "create:filling",
				ingredients: [
					{
						item: "kubejs:incomplete_netherite_anvil"
					},
					{
						type: "fluid_stack",
						amount: 900,
						fluid: "kubejs:molten_netherite"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_netherite_anvil"
					}
				]
			},
			{
				type: "create:filling",
				ingredients: [
					{
						item: "kubejs:incomplete_netherite_anvil"
					},
					{
						type: "fluid_stack",
						amount: 1000,
						fluid: "minecraft:water"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_netherite_anvil"
					}
				]
			}
		],
		transitional_item: {
			id: "kubejs:incomplete_netherite_anvil"
		}
	}).id('kubejs:netherite_anvil')
	event.custom({
		type: "create:compacting",
		ingredients: [
			{
				type: "fluid_stack",
				amount: 100,
				fluid: "kubejs:molten_netherite"
			}
		],
		results: [
		  {
			id: "kubejs:netherite_nugget"
		  }
		]
	  }).id('kubejs:netherite_nugget_from_molten')

	//everlasting from base
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "sophisticatedbackpacks:upgrade_base"
		},
		loops: 4,
		results: [
			{
				id: "sophisticatedbackpacks:everlasting_upgrade"
			}
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_everlasting_upgrade"
					},
					{
						item: "minecraft:nether_star"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_everlasting_upgrade"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_everlasting_upgrade"
					},
					{
						item: "minecraft:end_crystal"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_everlasting_upgrade"
					}
				]
			}
		],
		transitional_item: {
			id: "kubejs:incomplete_everlasting_upgrade"
		}
	}).id('sophisticatedbackpacks:everlasting_upgrade')

	//void from base
	event.custom({
		type: "create:mechanical_crafting",
		accept_mirrored: true,
		category: "misc",
		key: {
			e: {
				item: "minecraft:ender_pearl"
			},
			c: {
				item: "minecraft:cactus"
			},
			u: {
				item: "sophisticatedbackpacks:upgrade_base"
			},
			o: {
				tag: "c:obsidians"
			}
		},
		pattern: [
			" e ",
			"cuc",
			" o "
		],
		result: {
			id: "sophisticatedbackpacks:void_upgrade"
		}
	}).id('sophisticatedbackpacks:void_upgrade')

	//pickup from base
	event.custom({
		type: "create:mechanical_crafting",
		accept_mirrored: true,
		category: "misc",
		key: {
			c: {
				item: "create:cogwheel"
			},
			u: {
				item: "sophisticatedbackpacks:upgrade_base"
			},
			S: {
				item: "create:sticker"
			}
		},
		pattern: [
			"cuc",
			"S S"
		],
		result: {
			id: "sophisticatedbackpacks:pickup_upgrade"
		}
	}).id('sophisticatedbackpacks:pickup_upgrade')

	//refill from base
	event.custom({
		type: "create:mechanical_crafting",
		accept_mirrored: true,
		category: "misc",
		key: {
			S: {
				item: "create:smart_chute"
			},
			D: {
				item: "create:deployer"
			},
			u: {
				item: "sophisticatedbackpacks:upgrade_base"
			}
		},
		pattern: [
			"S S",
			"DuD"
		],
		result: {
			id: "sophisticatedbackpacks:refill_upgrade"
		}
	}).id('sophisticatedbackpacks:refill_upgrade')

	//restock from base
	event.custom({
		type: "create:mechanical_crafting",
		accept_mirrored: true,
		category: "misc",
		key: {
			F: {
				item: "create:package_frogport"
			},
			C: {
				item: "create:chute"
			},
			u: {
				item: "sophisticatedbackpacks:upgrade_base"
			}
		},
		pattern: [
			" F ",
			"CuC",
			"C C"
		],
		result: {
			id: "sophisticatedbackpacks:restock_upgrade"
		}
	}).id('sophisticatedbackpacks:restock_upgrade')

	//deposit from base
	event.custom({
		type: "create:mechanical_crafting",
		accept_mirrored: true,
		category: "misc",
		key: {
			E: {
				item: "create:weighted_ejector"
			},
			H: {
				item: "create:item_hatch"
			},
			u: {
				item: "sophisticatedbackpacks:upgrade_base"
			}
		},
		pattern: [
			"E E",
			"HuH"
		],
		result: {
			id: "sophisticatedbackpacks:deposit_upgrade"
		}
	}).id('sophisticatedbackpacks:deposit_upgrade')

	//magnet from pickup
	event.custom({
		type: "create:mechanical_crafting",
		accept_mirrored: true,
		category: "misc",
		key: {
			e: {
				item: "minecraft:ender_pearl"
			},
			F: {
				item: "create:encased_fan"
			},
			u: {
				item: "sophisticatedbackpacks:pickup_upgrade"
			},
			N: {
				item: "create:nozzle"
			}
		},
		pattern: [
			" e ",
			"FuF",
			"N N"
		],
		result: {
			id: "sophisticatedbackpacks:magnet_upgrade"
		}
	}).id('sophisticatedbackpacks:magnet_upgrade')
	//adv_magnet from adv_pickup
	event.custom({
		type: "create:mechanical_crafting",
		accept_mirrored: true,
		category: "misc",
		key: {
			e: {
				item: "minecraft:ender_pearl"
			},
			F: {
				item: "create:encased_fan"
			},
			u: {
				item: "sophisticatedbackpacks:advanced_pickup_upgrade"
			},
			N: {
				item: "create:nozzle"
			}
		},
		pattern: [
			" e ",
			"FuF",
			"N N"
		],
		result: {
			id: "sophisticatedbackpacks:advanced_magnet_upgrade"
		}
	}).id('sophisticatedbackpacks:advanced_magnet_upgrade_from_basic')

	//filter_upgrade from base
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "sophisticatedbackpacks:upgrade_base"
		},
		loops: 1,
		results: [
			{
				id: "sophisticatedbackpacks:filter_upgrade"
			}
		],
		sequence: [
			{
				type: "create:cutting",
				ingredients: [
					{
						item: "kubejs:incomplete_filter_upgrade"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_filter_upgrade"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_filter_upgrade"
					},
					{
						item: "create:filter"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_filter_upgrade"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_filter_upgrade"
					},
					{
						tag: "c:strings"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_filter_upgrade"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:incomplete_filter_upgrade"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_filter_upgrade"
					}
				]
			}
		],
		transitional_item: {
			id: "kubejs:incomplete_filter_upgrade"
		}
	}).id('sophisticatedbackpacks:filter_upgrade')

	//exp_pump from adv_pump
	event.custom({
		type: "create:mechanical_crafting",
		accept_mirrored: true,
		category: "misc",
		key: {
			E: {
				item: "create:experience_block"
			},
			b: {
				item: "minecraft:experience_bottle"
			},
			e: {
				item: "create:experience_nugget"
			},
			u: {
				item: "sophisticatedbackpacks:advanced_pump_upgrade"
			}
		},
		pattern: [
			"EbE",
			"eue",
			"EbE"
		],
		result: {
			id: "sophisticatedbackpacks:xp_pump_upgrade"
		}
	}).id('sophisticatedbackpacks:xp_pump_upgrade')

	//advanced filter
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "sophisticatedbackpacks:filter_upgrade"
		},
		loops: 1,
		results: [
			{
				id: "sophisticatedbackpacks:advanced_filter_upgrade"
			}
		],
		sequence: [
			{
				type: "create:cutting",
				ingredients: [
					{
						item: "kubejs:incomplete_advanced_filter_upgrade"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_advanced_filter_upgrade"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_advanced_filter_upgrade"
					},
					{
						item: "create:attribute_filter"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_advanced_filter_upgrade"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_advanced_filter_upgrade"
					},
					{
						tag: "c:strings"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_advanced_filter_upgrade"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:incomplete_advanced_filter_upgrade"
					}
				],
				results: [
					{
						id: "kubejs:incomplete_advanced_filter_upgrade"
					}
				]
			}
		],
		transitional_item: {
			id: "kubejs:incomplete_advanced_filter_upgrade"
		}
	}).id('sophisticatedbackpacks:advanced_filter_upgrade')

	//advanced compacting_upgrade
	event.custom({
		type: "create:mechanical_crafting",
		accept_mirrored: true,
		category: "misc",
		key: {
			S: {
				item: "create:shaft"
			},
			H: {
				item: "create_d2d:hydraulic_press"
			},
			I: {
				item: "create:filter"
			},
			A: {
				item: "create:attribute_filter"
			},
			C: {
				item: "create:andesite_casing"
			},
			U: {
				item: "sophisticatedbackpacks:compacting_upgrade"
			},
			B: {
				tag: "c:storage_blocks/iron"
			}
		},
		pattern: [
			" S ",
			"IHA",
			"CUC",
			"BBB"
		],
		result: {
			id: "sophisticatedbackpacks:advanced_compacting_upgrade"
		}
	}).id('sophisticatedbackpacks:advanced_compacting_upgrade')

	//stack_upgrades
	upgrades.forEach((upgrade) => {
		event.custom({
			type: "create:mechanical_crafting",
			accept_mirrored: true,
			category: "misc",
			key: {
				I: {
					tag: upgrade[2]
				},
				B: {
					tag: upgrade[1]
				},
				S: {
					item: upgrade[0]
				}
			},
			pattern: [
				"IIBII",
				"I B I",
				"BBSBB",
				"I B I",
				"IIBII"
			],
			result: {
				id: upgrade[3]
			}
		}).id(upgrade[3])
	})
	event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_1_from_starter' })

	//stack_downgrades
	downgrades.forEach((downgrade) => {
		event.custom({
			type: "create:mechanical_crafting",
			accept_mirrored: true,
			category: "misc",
			key: {
				I: {
					tag: "c:rods/wooden"
				},
				B: {
					item: "minecraft:flint"
				},
				S: {
					item: downgrade[0]
				}
			},
			pattern: [
				"IIIII",
				"I   I",
				"BBSBB",
				"I   I",
				"IIIII"
			],
			result: {
				id: downgrade[1]
			}
		}).id(downgrade[1])
	})

	//simple_upgrades from base
	simpleMachines.forEach((input) => {
		event.custom({
			type: "create:sequenced_assembly",
			ingredient: {
				item: "sophisticatedbackpacks:upgrade_base"
			},
			loops: 1,
			results: [
				{
					id: input[1]
				}
			],
			sequence: [
				{
					type: "create:deploying",
					ingredients: [
						{
							item: input[2]
						},
						{
							item: input[0]
						}
					],
					results: [
						{
							id: input[2]
						}
					]
				},
				{
					type: "create:pressing",
					ingredients: [
						{
							item: input[2]
						}
					],
					results: [
						{
							id: input[2]
						}
					]
				}
			],
			transitional_item: {
				id: input[2]
			}
		}).id(input[1])
	})

	//simpler_upgrades from base
	simplerMachines.forEach((input) => {
		event.custom({
			type: "create:deploying",
			ingredients: [
				{
					item: "sophisticatedbackpacks:upgrade_base"
				},
				{
					item: input[0]
				}
			],
			results: [
				{
					id: input[1]
				}
			]
		}).id(input[1])
	})

	//advanced upgrades
	upgradeFilter.forEach((input) => {
		event.custom({
			type: "create:sequenced_assembly",
			ingredient: {
				item: input[0]
			},
			loops: 3,
			results: [
				{
					id: input[1]
				}
			],
			sequence: [
				{
					type: "create:deploying",
					ingredients: [
						{
							item: input[2]
						},
						{
							item: "create:filter"
						}
					],
					results: [
						{
							id: input[2]
						}
					]
				},
				{
					type: "create:deploying",
					ingredients: [
						{
							item: input[2]
						},
						{
							item: "create:attribute_filter"
						}
					],
					results: [
						{
							id: input[2]
						}
					]
				}
			],
			transitional_item: {
				id: input[2]
			}
		}).id(input[1])
	})

	//auto upgrades
	upgradeAuto.forEach((input) => {
		event.custom({
			type: "create:sequenced_assembly",
			ingredient: {
				item: input[0]
			},
			loops: 3,
			results: [
				{
					id: input[1]
				}
			],
			sequence: [
				{
					type: "create:deploying",
					ingredients: [
						{
							item: input[2]
						},
						{
							item: "create:andesite_funnel"
						}
					],
					results: [
						{
							id: input[2]
						}
					]
				},
				{
					type: "create:deploying",
					ingredients: [
						{
							item: input[2]
						},
						{
							item: "create:brass_funnel"
						}
					],
					results: [
						{
							id: input[2]
						}
					]
				}
			],
			transitional_item: {
				id: input[2]
			}
		}).id(input[1])
	})

	//remove unwanted
	event.remove({ id: 'sophisticatedbackpacks:inception_upgrade' })
	event.remove({ id: 'sophisticatedbackpacks:battery_upgrade' })
	event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_omega_tier' })
})

/* ServerEvents.modifyRecipeResult('components_transfer', (event) => {
	let grid = event.grid;
	let baseTool = grid.getItem(0).copy();
	let upgradeTool = grid.getItem(1).copy();
	let result = baseTool.copy();

	// Retrieve the patch objects.
	let upgradePatch = upgradeTool.getComponentsPatch();
	if (typeof upgradePatch === "function") {
		upgradePatch = upgradePatch();
	}
	let basePatch = result.getComponentsPatch();
	if (typeof basePatch === "function") {
		basePatch = basePatch();
	}

	// For every entry in the upgrading tool's patch, directly copy it onto the result.
	for (let entry of upgradePatch.entrySet()) {
		let compType = entry.getKey();
		let upgradeOptional = entry.getValue();
		if (compType == null) continue;
		if (!upgradeOptional.isPresent()) continue;
		let upgradeValue = upgradeOptional.get();
		// Simply set (swap) the upgrading tool's patch value on the result.
		result.set(compType, upgradeValue);

	}
	event.success(result);
}); */
