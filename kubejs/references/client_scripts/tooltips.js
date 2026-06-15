ItemEvents.modifyTooltips(event => {
	event.add('kubejs:netherite_anvil', Text.gray('Crafting Ingredient'))
	event.add('kubejs:pet', Text.gray('your bestest of friends'))

	event.modify(['kubejs:white_sand_paper', 'kubejs:orange_sand_paper', 'kubejs:black_sand_paper'], { shift: false }, tooltip => {
		tooltip.insert(1,
			Text.darkGray(`Hold [`).append(
				Text.gray(`Shift`).append(
					Text.darkGray(`] for Summary`)
				))
		)
	})
	event.modify(['kubejs:white_sand_paper', 'kubejs:orange_sand_paper', 'kubejs:black_sand_paper'], { shift: true }, tooltip => {
		tooltip.insert(1,
			Text.darkGray('Hold [').append(
				Text.white('Shift').append(
					Text.darkGray('] for Summary')
				))
		)
		tooltip.insert(2, '')
		tooltip.insert(3,
			Text.of('Can be used to ').color(0xC7954B).append(
				Text.of('refine materials').color(0xEEDA78).append(
					Text.of('. The ').color(0xC7954B)
				)))
		tooltip.insert(4, Text.of('process can be automated with a ').color(0xC7954B)
		)
		tooltip.insert(5, Text.of('Deployer.').color(0xC7954B)
		)
		tooltip.insert(6, '')
		tooltip.insert(7, Text.gray('When Used'))
		tooltip.insert(8,
			Text.of(' Applies polish to items held in the ').color(0xC7954B)
		)
		tooltip.insert(9, Text.of(' offhand').color(0xEEDA78).append(
					Text.of(' or lying on the ').color(0xC7954B).append(
						Text.of('floor').color(0xEEDA78).append(
							Text.of(' when ').color(0xC7954B))
		)))
		tooltip.insert(10, Text.of(' looking at them').color(0xEEDA78))
	})

	//TODO: ironworks nuking
	/* event.modify('minecraft:pink_concrete_powder', tooltip => {

		tooltip.removeLine(1)

		tooltip.insert(1, Text.of('text here').color(0xFFA5F7))
	}) */
})