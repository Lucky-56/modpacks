BlockEvents.rightClicked(['gnkinetics:shaftless_cogwheel', 'gnkinetics:shaftless_large_cogwheel'], event => {
    let { target, player, hand, item, level } = event
    if (hand == 'off_hand') return
    if (!event.player.crouching) {
        if (event.player.isHoldingInAnyHand('create:shaft')) {
            event.cancel()
        }
    }
})