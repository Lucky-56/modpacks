ServerEvents.recipes(event => {
    event.remove({
        output: [
            "gnkinetics:cog_crank", "gnkinetics:large_cog_crank"
        ]
    })
})
