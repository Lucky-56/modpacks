ServerEvents.recipes(event => {
	//duplicates
	/* event.remove({ id: 'adorn:copper_nugget' }) */
	event.remove([
		{ id: 'minecraft:spectral_arrow' },
		{ id: 'terralith:cobblestone_from_stone_slab' },
		{ id: 'terralith:dispenser_alt' },
		{ id: 'terralith:dropper_alt' },
		{ id: 'terralith:lever_alt' },
		{ id: 'terralith:observer_alt' },
		{ id: 'terralith:piston_alt' }
	])

	// too many cakes'n'pies
	event.remove([
		{ id: 'farmersdelight:cake_from_milk_bottle' },
		{ id: 'aether:moa_egg_cake' },
		{ id: 'deep_aether:cake' },
		{ id: 'aether:skyroot_milk_bucket_cake' },
		{ id: 'aether:skyroot_milk_bucket_moa_egg_cake' },
		{ id: 'deep_aether:skyroot_milk_bucket_cake' },
		{ id: 'aether:moa_egg_pumpkin_pie' },
		{ id: 'deep_aether:pumpkin_pie' }
	])

	//UMH NOO
	event.remove({ output: 'apothic_enchanting:occult_ender_lead' })
})