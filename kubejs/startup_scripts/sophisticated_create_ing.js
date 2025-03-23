Platform.mods.kubejs.name = 'karton creëren'

function grabProgress(str) {
	const match = str.match(/\d+\.\d+/)
	return match ? Number(match[0]) : null
}

StartupEvents.registry('item', event => {
	function createIncomplete(name, display) {
		if (display != null) {
			event.create(name)
				.unstackable()
				.displayName(display)
				.barWidth(itemstack => itemstack.components.has('create:sequenced_assembly') ? Math.round(grabProgress(itemstack.components.get('create:sequenced_assembly').toString()) * 13) : 0)
		} else {
			event.create(name)
				.unstackable()
				.barWidth(itemstack => itemstack.components.has('create:sequenced_assembly') ? Math.round(grabProgress(itemstack.components.get('create:sequenced_assembly').toString()) * 13) : 0)
			/* .barColor(itemstack => {
				let colors = [
					0xFFC175,
					0xF0C67E,
					0xE0CB87,
					0xD1D190,
					0xC2D699,
					0xB2DBA2,
					0xA3E0AB,
					0x94E5B3,
					0x84EABC,
					0x75F0C5,
					0x66F5CE,
					0x56FAD7,
					0x47FFE0
					]
					return colors[itemstack.components.has('create:sequenced_assembly') ? Math.round(grabProgress(itemstack.components.get('create:sequenced_assembly').toString()) * 13) : 0]
					}) */
		}
	}
	event.create('netherite_nugget')
		.fireResistant()
		.tag('c:nuggets')
		.tag('c:nuggets/netherite')
	//sophisticatedbackpacks
	event.create('andesite_zinc_frame').maxStackSize(16)
	event.create('pet').displayName('Eggo').texture('kubejs:item/eggo')
	event.create('needle')
	event.create('netherite_needle').fireResistant()
	event.create('backpack_thread').maxStackSize(8)
	event.create('copper_backpack_thread').unstackable()
	event.create('iron_backpack_thread').unstackable()
	event.create('gold_backpack_thread').unstackable()
	event.create('diamond_backpack_thread').unstackable()
	event.create('netherite_backpack_thread').unstackable().fireResistant()
	createIncomplete('incomplete_netherite_anvil')
	event.create('netherite_anvil').fireResistant()
	createIncomplete('incomplete_advanced_pickup_upgrade')
	createIncomplete('incomplete_filter_upgrade')
	createIncomplete('incomplete_advanced_filter_upgrade')
	createIncomplete('incomplete_advanced_magnet_upgrade')
	createIncomplete('incomplete_feeding_upgrade')
	createIncomplete('incomplete_advanced_feeding_upgrade')
	createIncomplete('incomplete_compacting_upgrade')
	createIncomplete('incomplete_advanced_void_upgrade')
	createIncomplete('incomplete_advanced_restock_upgrade')
	createIncomplete('incomplete_advanced_deposit_upgrade')
	createIncomplete('incomplete_advanced_refill_upgrade')
	createIncomplete('incomplete_everlasting_upgrade')
	createIncomplete('incomplete_smelting_upgrade')
	createIncomplete('incomplete_auto_smelting_upgrade', 'Incomplete Auto-Smelting Upgrade')
	createIncomplete('incomplete_smoking_upgrade')
	createIncomplete('incomplete_auto_smoking_upgrade', 'Incomplete Auto-Smoking Upgrade')
	createIncomplete('incomplete_blasting_upgrade')
	createIncomplete('incomplete_auto_blasting_upgrade', 'Incomplete Auto-Blasting Upgrade')
	createIncomplete('incomplete_crafting_upgrade')
	createIncomplete('incomplete_stonecutter_upgrade')
	createIncomplete('incomplete_jukebox_upgrade')
	createIncomplete('incomplete_advanced_jukebox_upgrade')
	createIncomplete('incomplete_tool_swapper_upgrade')
	createIncomplete('incomplete_advanced_tool_swapper_upgrade')
	createIncomplete('incomplete_tank_upgrade')
	createIncomplete('incomplete_pump_upgrade')
	createIncomplete('incomplete_advanced_pump_upgrade')
	createIncomplete('incomplete_anvil_upgrade')
	createIncomplete('incomplete_smithing_upgrade')
	createIncomplete('incomplete_upgrade_base')
	createIncomplete('incomplete_sawmill_upgrade')
})
StartupEvents.registry('block', event => {
	function createEmptyCrate(name) {
		event.create(name)
			.woodSoundType()
			.tagBlock('minecraft:mineable/axe')
			.fullBlock(false)
			.box(0, 2, 0, 2, 16, 2)
			.box(2, 14, 0, 14, 16, 2)
			.box(14, 2, 0, 16, 16, 2)
			.box(14, 14, 2, 16, 16, 14)
			.box(14, 2, 14, 16, 16, 16)
			.box(2, 14, 14, 14, 16, 16)
			.box(0, 2, 14, 2, 16, 16)
			.box(0, 14, 2, 2, 16, 14)
			.box(2, 10, 0, 14, 12, 2)
			.box(2, 6, 0, 14, 8, 2)
			.box(2, 2, 0, 14, 4, 2)
			.box(14, 10, 2, 16, 12, 14)
			.box(14, 6, 2, 16, 8, 14)
			.box(14, 2, 2, 16, 4, 14)
			.box(2, 10, 14, 14, 12, 16)
			.box(2, 6, 14, 14, 8, 16)
			.box(2, 2, 14, 14, 4, 16)
			.box(0, 10, 2, 2, 12, 14)
			.box(0, 6, 2, 2, 8, 14)
			.box(0, 2, 2, 2, 4, 14)
			.box(0, 0, 0, 16, 2, 16)
	}
	//farmers-deco
	createEmptyCrate('empty_crate')
	createEmptyCrate('skyroot_empty_crate')
	event.create('empty_bag')
		.soundType('wool')
		.tagBlock('farmersdelight:mineable/knife')
		.fullBlock(false)
		.box(2, 0, 2, 14, 12, 14)
		.box(3, 12, 3, 13, 14, 13)
	//vents
	/* event.create('vent_i')
		.tagBlock('mineable/pickaxe')
		.property(BlockProperties.AXIS)
		.placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
		.soundType('metal')
		.displayName('Vent |')
		.fullBlock(false)
		.box(0, 0, 0, 16, 16, 1)
		.box(0, 0, 1, 1, 16, 15)
		.box(15, 0, 1, 16, 16, 15)
		.box(0, 0, 15, 16, 16, 16) */
})

StartupEvents.registry('fluid', event => {
	event.create('molten_netherite', 'thick')
		.tint(0xFFFFFF)
		.stillTexture('kubejs:block/molten_netherite')
		.flowingTexture('kubejs:block/molten_netherite_flowing')
		.noBlock()
		.noBucket()
})