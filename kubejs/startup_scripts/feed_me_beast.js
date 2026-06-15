ItemEvents.modification(event => {
	event.modify('ftblibrary:icon_item', item => {
		item.setFood({
			nutrition: 0,
			saturation: 0.5,
			isMeat: false,
			canAlwaysEat: true,
			eatSeconds: 1,
		})
	})
})
