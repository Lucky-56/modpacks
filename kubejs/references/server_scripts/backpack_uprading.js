ServerEvents.recipes(event => {
	//zinc_backpack
	event.shaped('sophisticatedbackpacks:backpack', [
		'SZS',
		'LCL',
		'ZLZ'
	], {
		S: '#c:strings',
		Z: '#c:ingots/zinc',
		L: '#c:leathers',
		C: ['#c:chests/wooden', '#c:barrels/wooden']
	}).id('sophisticatedbackpacks:backpack')

	//copper_backpack
	event.custom({
		type: 'create:mechanical_crafting',
		accept_mirrored: true,
		category: 'misc',
		key: {
			c: {
				tag: 'c:ingots/copper'
			},
			s: {
				tag: 'c:strings'
			},
			l: {
				tag: 'c:leathers'
			},
			B: {
				item: 'kubejs:backpack_thread'
			},
			u: {
				item: 'sophisticatedbackpacks:stack_upgrade_starter_tier'
			}
		},
		pattern: [
			'csc',
			'lBl',
			'cuc'
		],
		result: {
			id: 'kubejs:copper_backpack_thread'
		}
	})
	//.modifyResult('backpack_copper_upgrade')

	//iron_backpack
	event.remove({ id: 'sophisticatedbackpacks:iron_backpack_from_copper' })
	event.custom({
		type: 'create:mechanical_crafting',
		accept_mirrored: true,
		category: 'misc',
		key: {
			s: {
				tag: 'c:strings'
			},
			i: {
				tag: 'c:ingots/iron'
			},
			l: {
				tag: 'c:leathers'
			},
			V: {
				tag: 'create_vibrant_vaults:vaults'
			},
			B: {
				item: 'kubejs:backpack_thread'
			},
			u: {
				item: 'sophisticatedbackpacks:stack_upgrade_tier_1'
			},
			I: {
				tag: 'c:storage_blocks/iron'
			}
		},
		pattern: [
			' sis ',
			' lVl ',
			'siBis',
			'iIuIi'
		],
		result: {
			id: 'kubejs:iron_backpack_thread'
		}
	})
	//.modifyResult('backpack_iron_upgrade')

	//gold_backpack
	event.custom({
		type: 'create:mechanical_crafting',
		accept_mirrored: true,
		category: 'misc',
		key: {
			s: {
				tag: 'c:strings'
			},
			l: {
				tag: 'c:leathers'
			},
			g: {
				tag: 'c:ingots/gold'
			},
			V: {
				tag: 'create_vibrant_vaults:vaults'
			},
			B: {
				item: 'kubejs:backpack_thread'
			},
			G: {
				tag: 'c:storage_blocks/gold'
			},
			u: {
				item: 'sophisticatedbackpacks:stack_upgrade_tier_2'
			}
		},
		pattern: [
			' sls ',
			' lgl ',
			'sglgs',
			'lVBVl',
			'GgugG',
			' GgG '
		],
		result: {
			id: 'kubejs:gold_backpack_thread'
		}
	})
	//.modifyResult('backpack_gold_upgrade')

	//diamond_backpack
	event.custom({
		type: 'create:mechanical_crafting',
		accept_mirrored: true,
		category: 'misc',
		key: {
			s: {
				tag: 'c:strings'
			},
			l: {
				tag: 'c:leathers'
			},
			d: {
				tag: 'c:gems/diamond'
			},
			V: {
				tag: 'create_vibrant_vaults:vaults'
			},
			D: {
				tag: 'c:storage_blocks/diamond'
			},
			B: {
				item: 'kubejs:backpack_thread'
			},
			u: {
				item: 'sophisticatedbackpacks:stack_upgrade_tier_3'
			}
		},
		pattern: [
			'  sls  ',
			' sldls ',
			'dldVdld',
			' DlBlD ',
			'slVuVls',
			'DdldldD',
			'  DlD  '
		],
		result: {
			id: 'kubejs:diamond_backpack_thread'
		}
	})
	//.modifyResult('backpack_diamond_upgrade')

	//netherite_backpack
	event.custom({
		type: 'create:mechanical_crafting',
		accept_mirrored: true,
		category: 'misc',
		key: {
			n: {
				tag: 'c:ingots/netherite'
			},
			s: {
				tag: 'c:strings'
			},
			l: {
				tag: 'c:leathers'
			},
			V: {
				tag: 'create_vibrant_vaults:vaults'
			},
			N: {
				tag: 'c:storage_blocks/netherite'
			},
			B: {
				item: 'kubejs:backpack_thread'
			},
			u: {
				item: 'sophisticatedbackpacks:stack_upgrade_tier_4'
			}
		},
		pattern: [
			'  nsn  ',
			' nlnln ',
			'sVNlNVs',
			' NlBlN ',
			'nlVuVln',
			'NnlVlnN',
			'  NnN  '
		],
		result: {
			id: 'kubejs:netherite_backpack_thread'
		}
	})
	//.modifyResult('backpack_netherite_upgrade')

	event.shaped('kubejs:backpack_thread', [
		' sS',
		'sls',
		'Ss '
	], {
		s: '#c:strings',
		S: '#c:rods/wooden',
		l: '#c:leathers'
	})
	event.shaped('kubejs:needle', [
		'  i',
		' n ',
		'n  '
	], {
		i: '#c:ingots/steel',
		n: '#c:nuggets/steel'
	})
	event.smithing('kubejs:netherite_needle', 'netherite_upgrade_smithing_template', 'kubejs:needle', 'netherite_ingot')
	//threaten the backpacks
	event.custom({
		type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
		addition: {
			item: 'kubejs:needle'
		},
		base: {
			item: 'sophisticatedbackpacks:backpack'
		},
		result: {
			id: 'sophisticatedbackpacks:copper_backpack'
		},
		template: {
			item: 'kubejs:copper_backpack_thread'
		}
	}).id('sophisticatedbackpacks:copper_backpack')
	event.custom({
		type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
		addition: {
			item: 'kubejs:needle'
		},
		base: {
			item: 'sophisticatedbackpacks:copper_backpack'
		},
		result: {
			id: 'sophisticatedbackpacks:iron_backpack'
		},
		template: {
			item: 'kubejs:iron_backpack_thread'
		}
	}).id('sophisticatedbackpacks:iron_backpack')
	event.custom({
		type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
		addition: {
			item: 'kubejs:needle'
		},
		base: {
			item: 'sophisticatedbackpacks:iron_backpack'
		},
		result: {
			id: 'sophisticatedbackpacks:gold_backpack'
		},
		template: {
			item: 'kubejs:gold_backpack_thread'
		}
	}).id('sophisticatedbackpacks:gold_backpack')
	event.custom({
		type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
		addition: {
			item: 'kubejs:needle'
		},
		base: {
			item: 'sophisticatedbackpacks:gold_backpack'
		},
		result: {
			id: 'sophisticatedbackpacks:diamond_backpack'
		},
		template: {
			item: 'kubejs:diamond_backpack_thread'
		}
	}).id('sophisticatedbackpacks:diamond_backpack')
	event.custom({
		type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
		addition: {
			item: 'kubejs:netherite_needle'
		},
		base: {
			item: 'sophisticatedbackpacks:diamond_backpack'
		},
		result: {
			id: 'sophisticatedbackpacks:netherite_backpack'
		},
		template: {
			item: 'kubejs:netherite_backpack_thread'
		}
	}).id('sophisticatedbackpacks:netherite_backpack')
})

/* ServerEvents.modifyRecipeResult('backpack_copper_upgrade', (event) => {
	let grid = event.grid
	let nextTier = Item.of('sophisticatedbackpacks:copper_backpack')
	let backpackToUpgrade = grid.getItem(4).copy()
	let result = nextTier.copy()

	let upgradePatch = backpackToUpgrade.getComponentsPatch()
	if (typeof upgradePatch === 'function') {
		upgradePatch = upgradePatch()
	}

	for (let entry of upgradePatch.entrySet()) {
		let id = entry.getKey()
		let value = entry.getValue()
		if (id == null) continue
		if (!value.isPresent()) continue
		if (id == 'sophisticatedcore:storage_uuid' || id == 'sophisticatedcore:render_info_tag' || id == 'sophisticatedbackpacks:columns_taken') {
			result.set(id, value.get())
		}
	}
	event.success(result)
})

ServerEvents.modifyRecipeResult('backpack_iron_upgrade', (event) => {
	let grid = event.grid
	let nextTier = Item.of('sophisticatedbackpacks:iron_backpack')
	let backpackToUpgrade = grid.getItem(11).copy()
	let result = nextTier.copy()

	let upgradePatch = backpackToUpgrade.getComponentsPatch()
	if (typeof upgradePatch === 'function') {
		upgradePatch = upgradePatch()
	}

	for (let entry of upgradePatch.entrySet()) {
		let id = entry.getKey()
		let value = entry.getValue()
		if (id == null) continue
		if (!value.isPresent()) continue
		if (id == 'sophisticatedcore:storage_uuid' || id == 'sophisticatedcore:render_info_tag' || id == 'sophisticatedbackpacks:columns_taken') {
			result.set(id, value.get())
		}
	}
	event.success(result)
})

ServerEvents.modifyRecipeResult('backpack_gold_upgrade', (event) => {
	let grid = event.grid
	let nextTier = Item.of('sophisticatedbackpacks:gold_backpack')
	let backpackToUpgrade = grid.getItem(17).copy()
	let result = nextTier.copy()

	let upgradePatch = backpackToUpgrade.getComponentsPatch()
	if (typeof upgradePatch === 'function') {
		upgradePatch = upgradePatch()
	}

	for (let entry of upgradePatch.entrySet()) {
		let id = entry.getKey()
		let value = entry.getValue()
		if (id == null) continue
		if (!value.isPresent()) continue
		if (id == 'sophisticatedcore:storage_uuid' || id == 'sophisticatedcore:render_info_tag' || id == 'sophisticatedbackpacks:columns_taken') {
			result.set(id, value.get())
		}
	}
	event.success(result)
})

ServerEvents.modifyRecipeResult('backpack_diamond_upgrade', (event) => {
	let grid = event.grid
	let nextTier = Item.of('sophisticatedbackpacks:diamond_backpack')
	let backpackToUpgrade = grid.getItem(24).copy()
	let result = nextTier.copy()

	let upgradePatch = backpackToUpgrade.getComponentsPatch()
	if (typeof upgradePatch === 'function') {
		upgradePatch = upgradePatch()
	}

	for (let entry of upgradePatch.entrySet()) {
		let id = entry.getKey()
		let value = entry.getValue()
		if (id == null) continue
		if (!value.isPresent()) continue
		if (id == 'sophisticatedcore:storage_uuid' || id == 'sophisticatedcore:render_info_tag' || id == 'sophisticatedbackpacks:columns_taken') {
			result.set(id, value.get())
		}
	}
	event.success(result)
})

ServerEvents.modifyRecipeResult('backpack_netherite_upgrade', (event) => {
	let grid = event.grid
	let nextTier = Item.of('sophisticatedbackpacks:netherite_backpack')
	let backpackToUpgrade = grid.getItem(24).copy()
	let result = nextTier.copy()

	let upgradePatch = backpackToUpgrade.getComponentsPatch()
	if (typeof upgradePatch === 'function') {
		upgradePatch = upgradePatch()
	}

	for (let entry of upgradePatch.entrySet()) {
		let id = entry.getKey()
		let value = entry.getValue()
		if (id == null) continue
		if (!value.isPresent()) continue
		if (id == 'sophisticatedcore:storage_uuid' || id == 'sophisticatedcore:render_info_tag' || id == 'sophisticatedbackpacks:columns_taken') {
			result.set(id, value.get())
		}
	}
	event.success(result)
}) */
