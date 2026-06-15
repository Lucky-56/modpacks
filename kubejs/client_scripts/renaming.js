//priority: 0
//thanks to @matryoshika on discord

const formatIdToName = str =>
    (str.includes('/') ? str.split('/').pop() : str.split(':')[1] || '')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, character => character.toUpperCase())

const realNames = [
    //Light Blue to Sky :p
    {
        id: 'nirvana:light_blue_hemp_burlap',
        name: 'Sky Burlap'
    },
    {
        id: 'quark:light_blue_shingles',
        name: 'Sky Terracotta Shingles'
    },
    {
        id: 'suppsquared:sack_light_blue',
        name: 'Sky Sack'
    },
    {
        id: 'supplementaries:present_light_blue',
        name: 'Sky Present'
    },
    {
        id: 'supplementaries:trapped_present_light_blue',
        name: 'Trapped Sky Present'
    },
    {
        id: 'supplementaries:candle_holder_light_blue',
        name: 'Sky Candle Holder'
    },
    {
        id: 'suppsquared:gold_candle_holder_light_blue',
        name: 'Gold Sky Candle Holder'
    },
    {
        id: 'supplementaries:flag_light_blue',
        name: 'Sky Flag'
    },
    {
        id: 'supplementaries:bunting_light_blue',
        name: 'Sky Bunting'
    },
    {
        id: 'supplementaries:awning_light_blue',
        name: 'Sky Awning'
    },
    {
        id: 'bountifulfares:light_blue_jack_o_straw',
        name: "Sky Jack o' Straw"
    },
    {
        id: 'quark:light_blue_shard',
        name: 'Sky Glass Shard'
    },
    {
        id: 'kaleidoscope_tavern:string_lights_light_blue',
        name: 'String Lights (Sky)'
    },
    {
        id: 'cookingforblockheads:light_blue_connector',
        name: 'Sky Kitchen Connector'
    },
    {
        id: 'cookingforblockheads:light_blue_counter',
        name: 'Sky Kitchen Counter'
    },
    {
        id: 'cookingforblockheads:light_blue_cabinet',
        name: 'Sky Kitchen Cabinet'
    },
    {
        id: 'aeronautics:light_blue_envelope',
        name: 'Sky Hot Air Envelope'
    },
    {
        id: 'railways:light_blue_conductor_cap',
        name: "Sky Conductor's Cap"
    },
    {
        id: 'railways:light_blue_plated_locometal',
        name: 'Plated Sky Locometal'
    },
    {
        id: 'railways:light_blue_flat_slashed_locometal',
        name: 'Flat Sky Slashed Locometal'
    },
    {
        id: 'railways:light_blue_flat_riveted_locometal',
        name: 'Flat Sky Riveted Locometal'
    },
    {
        id: 'starcatcher:tackle_box_light_blue',
        name: 'Sky Tackle Box'
    },
    {
        id: 'starcatcher:fisherman_hat_light_blue',
        name: "Sky Fisherman's Hat"
    },
    {
        id: 'abyssal_decor:wallpaper_light_blue',
        name: 'Sky Wallpaper'
    },
    {
        id: 'alexscaves:radon_lamp_light_blue',
        name: 'Sky Radon Lamp'
    },
    {
        id: 'alexscaves:rock_candy_light_blue',
        name: 'Sky Rock Candy'
    },


    //Light Gray to Ash :3
    {
        id: 'nirvana:light_gray_hemp_burlap',
        name: 'Ash Burlap'
    },
    {
        id: 'quark:light_gray_shingles',
        name: 'Ash Terracotta Shingles'
    },
    {
        id: 'suppsquared:sack_light_gray',
        name: 'Ash Sack'
    },
    {
        id: 'supplementaries:present_light_gray',
        name: 'Ash Present'
    },
    {
        id: 'supplementaries:trapped_present_light_gray',
        name: 'Trapped Ash Present'
    },
    {
        id: 'supplementaries:candle_holder_light_gray',
        name: 'Ash Candle Holder'
    },
    {
        id: 'suppsquared:gold_candle_holder_light_gray',
        name: 'Gold Ash Candle Holder'
    },
    {
        id: 'supplementaries:flag_light_gray',
        name: 'Ash Flag'
    },
    {
        id: 'supplementaries:bunting_light_gray',
        name: 'Ash Bunting'
    },
    {
        id: 'supplementaries:awning_light_gray',
        name: 'Ash Awning'
    },
    {
        id: 'bountifulfares:light_gray_jack_o_straw',
        name: "Ash Jack o' Straw"
    },
    {
        id: 'quark:light_gray_shard',
        name: 'Ash Glass Shard'
    },
    {
        id: 'kaleidoscope_tavern:string_lights_light_gray',
        name: 'String Lights (Ash)'
    },
    {
        id: 'cookingforblockheads:light_gray_connector',
        name: 'Ash Kitchen Connector'
    },
    {
        id: 'cookingforblockheads:light_gray_counter',
        name: 'Ash Kitchen Counter'
    },
    {
        id: 'cookingforblockheads:light_gray_cabinet',
        name: 'Ash Kitchen Cabinet'
    },
    {
        id: 'aeronautics:light_gray_envelope',
        name: 'Ash Hot Air Envelope'
    },
    {
        id: 'railways:light_gray_conductor_cap',
        name: "Ash Conductor's Cap"
    },
    {
        id: 'railways:light_gray_plated_locometal',
        name: 'Plated Ash Locometal'
    },
    {
        id: 'railways:light_gray_flat_slashed_locometal',
        name: 'Flat Ash Slashed Locometal'
    },
    {
        id: 'railways:light_gray_flat_riveted_locometal',
        name: 'Flat Ash Riveted Locometal'
    },
    {
        id: 'starcatcher:tackle_box_light_gray',
        name: 'Ash Tackle Box'
    },
    {
        id: 'starcatcher:fisherman_hat_light_gray',
        name: "Ash Fisherman's Hat"
    },
    {
        id: 'alexscaves:radon_lamp_light_gray',
        name: 'Ash Radon Lamp'
    },
    {
        id: 'alexscaves:rock_candy_light_gray',
        name: 'Ash Rock Candy'
    },
    {
        id: 'burnt:light_grey_flag',
        name: 'Ash Flag'
    },
    {
        id: 'burnt:cracked_light_grey_terracotta',
        name: 'Cracked Ash Terracotta'
    },

    //Limestone Bricks to Rough Limestone Bricks
    {
        id: 'quark:limestone_bricks',
        name: 'Rough Limestone Bricks'
    },
]

ClientEvents.lang('en_us', event => {

    Ingredient.all.itemIds.forEach(id => {

        if (id.includes('light_blue') || id.includes('light_gray')) {

            let originalName = formatIdToName(id)
            let newName = originalName.replace('Light Blue', 'Sky').replace('Light Gray', 'Ash').replace('Shingles', 'Terracotta Shingle')
            realNames.forEach(entry => {

                if (id == entry.id) {
                    newName = entry.name
                }
            })
            console.log(`renaming ${id} from ${originalName} to ${newName}`)
            event.renameItem(id, newName)
        }
        if (id.includes('quark') && id.includes('limestone')) {
            let originalName = formatIdToName(id)
            let newName = originalName.replace('Limestone', 'Rough Limestone').replace('Bricks', 'Brick')
            realNames.forEach(entry => {

                if (id == entry.id) {
                    newName = entry.name
                }
            })
            console.log(`renaming ${id} from ${originalName} to ${newName}`)
            event.renameItem(id, newName)
        }
        if (id == 'refurbished_furniture:wheat_flour') {
            event.renameItem(id, 'Pizza Flour')
        }
        if (id == 'refurbished_furniture:dough') {
            event.renameItem(id, 'Pizza Dough')
        }
    })
})
