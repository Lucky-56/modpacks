ServerEvents.recipes(event => {
  event.remove({ id: 'powergrid:cutting/empty_circuit_slabs' })
  event.recipes.create.deploying('powergrid:empty_circuit',
    [Ingredient.of('#minecraft:wooden_slabs'), 'tfmg:plastic_sheet']
  ).id('kubejs:deploying/empty_circuit')

  //remove all stupid recipes lol
  event.remove({
    output: [
      'create:cogwheel', 'create:large_cogwheel',
      'gnkinetics:shaftless_cogwheel', 'gnkinetics:shaftless_large_cogwheel',
      'petrolsparts:coaxial_gear', 'petrolsparts:large_coaxial_gear'
    ]
  })

  //slab to shaftless gear
  event.recipes.create.cutting('gnkinetics:shaftless_cogwheel',
    SizedIngredient.of('#minecraft:wooden_slabs', 1)
  ).id('kubejs:sawing/shaftless_cogwheel')
  event.recipes.createdieselgenerators.wire_cutting('gnkinetics:shaftless_cogwheel',
    Ingredient.of('#minecraft:wooden_slabs')
  ).id('kubejs:wire_cutting/shaftless_cogwheel')

  //plank to shaftless large gear
  event.recipes.create.cutting('gnkinetics:shaftless_large_cogwheel',
    SizedIngredient.of('#minecraft:planks', 1)
  ).id('kubejs:sawing/shaftless_large_cogwheel')


  //press small
  event.recipes.create.pressing(['petrolsparts:coaxial_gear', 'gnkinetics:shaftless_tiny_cogwheel'],
    'gnkinetics:shaftless_cogwheel'
  ).id('kubejs:pressing/coaxial_gear')
  event.recipes.createdieselgenerators.wire_cutting('petrolsparts:coaxial_gear',
    'gnkinetics:shaftless_cogwheel'
  ).id('kubejs:wire_cutting/coaxial_gear')

  //press large
  event.recipes.create.pressing(['petrolsparts:large_coaxial_gear', 'gnkinetics:shaftless_tiny_cogwheel'],
    'gnkinetics:shaftless_large_cogwheel'
  ).id('kubejs:pressing/large_coaxial_gear')
  event.recipes.createdieselgenerators.wire_cutting('petrolsparts:large_coaxial_gear',
    'gnkinetics:shaftless_large_cogwheel'
  ).id('kubejs:wire_cutting/large_coaxial_gear')

  event.recipes.create.deploying('kubejs:loose_cogwheel',
    ['petrolsparts:coaxial_gear', 'create:shaft']
  ).id('kubejs:deploying/loose_cogwheel')
  event.recipes.create.deploying('kubejs:loose_large_cogwheel',
    ['petrolsparts:large_coaxial_gear', 'create:shaft']
  ).id('kubejs:deploying/loose_large_cogwheel')


  //grass seeds
  event.recipes.create.milling([CreateItem.of('bountifulfares:grass_seeds', 0.5), CreateItem.of('minecraft:wheat_seeds', 0.25)],
    'minecraft:short_grass'
  ).id('create:milling/short_grass')

  //walnut
  event.recipes.create.milling('bountifulfares:walnut_mulch',
    'bountifulfares:walnut'
  ).id('kubejs:milling/walnut')

  //palm frond
  event.recipes.create.milling('bountifulfares:palm_mulch',
    'bountifulfares:palm_frond'
  ).id('kubejs:milling/palm_frond')

  //coconut
  event.recipes.create.milling('2x bountifulfares:coconut_coir',
    'bountifulfares:coconut'
  ).id('kubejs:milling/coconut')

  //granite
  event.recipes.create.milling(['minecraft:red_sand', '2x bountifulfares:feldspar'],
    Ingredient.of('#create:stone_types/granite')
  ).id('create:milling/granite')

  event.recipes.create.crushing(['minecraft:red_sand', '3x bountifulfares:feldspar', CreateItem.of('2x bountifulfares:feldspar', 0.5), CreateItem.of('createnuclear:uranium_powder', 0.5)],
    Ingredient.of('#create:stone_types/granite')
  ).id('create:crushing/granite')

  //diorite 'n' tuff
  event.remove([
    { id: 'create:crushing/diorite' },
    { id: 'create:crushing/tuff' },
    { id: 'spelunkery:crushing/tuff' }
  ])

  //andesite
  event.recipes.kaleidoscope_cookery.millstone('kubejs:andesite_powder',
    '#create:stone_types/andesite'
  ).id('kubejs:millstone/andesite_powder')

  event.recipes.create.milling('kubejs:andesite_powder',
    Ingredient.of('#create:stone_types/andesite')
  ).id('create:milling/andesite')

  event.recipes.create.crushing('2x kubejs:andesite_powder',
    Ingredient.of('#create:stone_types/andesite')
  ).id('kubejs:crushing/andesite_powder')



  //nomaba 12, cog

  //pound together
  event.shapeless('kubejs:loose_cogwheel', [
    'petrolsparts:coaxial_gear', 'create:shaft'
  ]).id('kubejs:crafting/loose_cogwheel_manual_only')
  event.recipes.createdieselgenerators.hammering('create:cogwheel',
    'kubejs:loose_cogwheel'
  ).id('kubejs:hammering/cogwheel')
  event.recipes.create.pressing('create:cogwheel',
    'kubejs:loose_cogwheel')
    .id('kubejs:pressing/cogwheel')

  event.shapeless('kubejs:loose_large_cogwheel', [
    'petrolsparts:large_coaxial_gear', 'create:shaft'
  ]).id('kubejs:crafting/loose_large_cogwheel_manual_only')

  event.recipes.createdieselgenerators.hammering('create:large_cogwheel',
    'kubejs:loose_large_cogwheel'
  ).id('kubejs:hammering/large_cogwheel')
  event.recipes.create.pressing('create:large_cogwheel', 'kubejs:loose_large_cogwheel')
    .id('kubejs:pressing/large_cogwheel')


  //coaxial to hollow, vice versa
  event.shapeless('gnkinetics:hollow_cogwheel', 'petrolsparts:coaxial_gear').id('gnkinetics:crafting/hollow_cogwheel_from_conversion')
  event.shapeless('petrolsparts:coaxial_gear', 'gnkinetics:hollow_cogwheel').id('kubejs:crafting/coaxial_gear_fromhollow')

  event.shapeless('gnkinetics:hollow_large_cogwheel', 'petrolsparts:large_coaxial_gear').id('gnkinetics:crafting/hollow_large_cogwheel_from_conversion')
  event.shapeless('petrolsparts:large_coaxial_gear', 'gnkinetics:hollow_large_cogwheel').id('kubejs:crafting/large_coaxial_gear_from_hollow')


  //haipah toob
  event.shaped('create_hypertube:hypertube_entrance', [
    'k',
    's',
    'c'
  ], {
    k: 'minecraft:dried_kelp',
    s: 'create:smart_chute',
    c: 'petrolsparts:coaxial_gear'
  }).id('create_hypertube:hypertube_entrance')

  //mixah
  event.shaped('create:mechanical_mixer', [
    'g',
    'c',
    'w'
  ], {
    g: 'gnkinetics:shaftless_cogwheel',
    c: 'create:andesite_casing',
    w: 'create:whisk'
  }).id('create:crafting/kinetics/mechanical_mixer')

  //spreaderfan
  event.shaped('ratatouille:spreader', [
    ' s ',
    'fcf',
    ' p '
  ], {
    s: 'create:shaft',
    f: 'create:tree_fertilizer',
    c: 'create:andesite_casing',
    p: 'create:propeller'
  }).id('ratatouille:crafting/spreader')

  //harder crafter
  event.shaped('minecraft:crafter', [
    'iei',
    'ici',
    'rdr'
  ], {
    i: '#c:ingots/iron',
    e: 'create:electron_tube',
    c: 'minecraft:crafting_table',
    r: '#c:dusts/redstone',
    d: 'minecraft:dropper'
  }).id('minecraft:crafter')

  //gears
  const crankwheel = ['', 'large_']
  crankwheel.forEach(large => {
    event.remove([
      { id: `create_connected:crafting/kinetics/${large}crank_wheel` }
    ])
    event.shapeless(`create_connected:${large}crank_wheel`, [
      `create:${large}cogwheel`, 'create:hand_crank'
    ]).id(`kubejs:crafting/${large}_crank_wheel_manual_only`)
    event.recipes.create.deploying(`create_connected:${large}crank_wheel`, [
      `create:${large}cogwheel`, 'create:hand_crank'
    ]).id(`kubejs:deploying/${large}crank_wheel`)
    event.recipes.create.cutting([`create:${large}cogwheel`, 'create:hand_crank'],
      `create_connected:${large}crank_wheel`
    ).id(`kubejs:sawing/${large}crank_wheel`)
  })

  //andesite shenanigans
  //  tier 1
  event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })
  event.shaped('kubejs:andesite_alloy_blend', [
    'np',
    'pn'
  ], {
    n: ['#c:nuggets/iron', '#c:nuggets/zinc'],
    p: 'kubejs:andesite_powder'
  }).id('create:crafting/materials/andesite_alloy')
  event.blasting('create:andesite_alloy', 'kubejs:andesite_alloy_blend').id('kubejs:blasting/andesite_alloy')

  //  tier 2
  event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' })
  event.recipes.create.mixing('create:andesite_alloy', [
    [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')], 'kubejs:andesite_powder'
  ]).heated().id('create:mixing/andesite_alloy')

  //  tier 3
  event.recipes.create.mixing('288x kubejs:molten_andesite_alloy', [
    [Ingredient.of('#c:nuggets/iron'), Ingredient.of('#c:nuggets/zinc')], 'kubejs:andesite_powder'
  ]).superheated().id('kubejs:mixing/molten_andesite_alloy')
  event.recipes.create.mixing('144x kubejs:molten_andesite_alloy', [
    ['create:andesite_alloy', 'kubejs:andesite_alloy_blend']
  ]).superheated().id('kubejs:mixing/molten_andesite_alloy_from_recycle')

  event.custom({
    'type': 'tfmg:casting',
    'ingredients': [
      {
        'type': 'neoforge:single',
        'amount': 144,
        'fluid': 'kubejs:molten_andesite_alloy'
      }
    ],
    'processing_time': 200,
    'results': [
      {
        'id': 'create:andesite_alloy'
      }
    ]
  }).id('kubejs:casting/tfmg/andesite_alloy')

  event.recipes.createdieselgenerators.casting('4x create:shaft',
    'createdieselgenerators:lines',
    '72x kubejs:molten_andesite_alloy'
  ).id('kubejs:casting/createdieselgenerators/shaft')
  event.custom({
    'type': 'ratatouille:squeezing',
    'ingredients': [
      {
        'item': 'minecraft:stick'
      },
      {
        'type': 'neoforge:single',
        'amount': 1000,
        'fluid': 'kubejs:molten_andesite_alloy'
      }
      //actual recipe if ratatouille would be cool
      /*
        {
          'type': 'neoforge:single',
          'amount': 18,
          'fluid': 'kubejs:molten_andesite_alloy'
        }
      */
    ],
    'results': [
      {
        'id': 'create:shaft',
        'count': 56
      }
    ]
  }).id('kubejs:squeezing/shaft')

  event.remove({ type: 'bountifulfares:milling' })


  event.shaped('dndesires:omni_gearbox', [
    'ls ',
    'scs',
    ' sl'
  ], {
    l: 'gnkinetics:large_brass_gear',
    s: 'gnkinetics:brass_gear',
    c: 'create:brass_casing'
  }).id('dndesires:crafting/omni_gearbox')

  event.remove({ id: 'createdieselgenerators:crafting/chemical_turret_lighter' })
  event.shaped('createdieselgenerators:chemical_turret', [
    'pcS',
    ' g ',
    'cCc'
  ], {
    p: 'create:precision_mechanism',
    c: '#c:plates/copper',
    S: ['createdieselgenerators:chemical_sprayer', 'createdieselgenerators:chemical_sprayer_lighter'],
    g: 'gnkinetics:shaftless_andesite_cogwheel',
    C: 'create:copper_casing'
  }).id('createdieselgenerators:crafting/chemical_turret')

  event.shaped('simulated:swivel_bearing', [
    's',
    'g',
    'i'
  ], {
    s: '#minecraft:wooden_slabs',
    g: 'gnkinetics:shaftless_andesite_cogwheel',
    i: '#c:storage_blocks/industrial_iron'
  }).id('simulated:swivel_bearing')

  event.recipes.create.mechanical_crafting('aeronautics:mounted_potato_cannon', [
    'cr  ',
    'Kgpp',
    'cr  '
  ], {
    c: '#c:plates/copper',
    r: '#c:dusts/redstone',
    K: '#c:storage_blocks/dried_kelp',
    g: 'gnkinetics:shaftless_andesite_cogwheel',
    p: 'create:fluid_pipe'
  }).id('aeronautics:mechanical_crafting/mounted_potato_cannon')

  event.shaped('create:millstone', [
    's',
    'g',
    'S'
  ], {
    s: '#minecraft:wooden_slabs',
    g: 'gnkinetics:andesite_cogwheel',
    S: '#c:stones'
  }).id('create:crafting/kinetics/millstone')

  function pump(material) {
    event.recipes.create.deploying(`tfmg:${material}_mechanical_pump`, [
      `tfmg:${material}_pipe`, 'gnkinetics:shaftless_cogstone'
    ]).id(`tfmg:crafting/materials/${material}_mechanical_pump`)
  }
  event.recipes.create.deploying('create:mechanical_pump', [
    'create:fluid_pipe', 'gnkinetics:shaftless_cogstone'
  ]).id('create:crafting/kinetics/mechanical_pump')
  pump('brass')
  pump('steel')
  pump('aluminum')
  pump('plastic')
  pump('cast_iron')

  event.remove([
    { id: 'gnkinetics:crafting/tiny_cogwheel_from_conversion' },
    { id: 'gnkinetics:crafting/shaftless_tiny_cogwheel_from_conversion' }

  ])
  event.shapeless('gnkinetics:tiny_cogwheel', [
    ['gnkinetics:shaftless_tiny_cogwheel', 'create:shaft']
  ]).id('gnkinetics:crafting/tiny_cogwheel')

})

BlockEvents.rightClicked(['gnkinetics:shaftless_cogwheel', 'gnkinetics:shaftless_large_cogwheel'], event => {
  let { target, player, hand, item, level } = event
  if (hand == 'off_hand') return
  if (!event.player.crouching) {
    if (event.player.isHoldingInAnyHand('create:shaft')) {
      event.cancel()
    }
  }
})

ServerEvents.tags('block', event => {
  event.add('thick_air:green_air_providers', [
    'aether_beyond_parity:ambrosium_campfire', 'aether_beyond_parity:ambrosium_lantern', 'aether:aether_portal',
    'aether:ambrosium_torch', 'createnuclear:enriching_campfire', 'deep_aether:ambrosium_tiki_torch'
  ])
  event.add('thick_air:blue_air_providers', [
    '#chipped:soul_lantern',

    /^soulcandles:.*soul_candle/,

    'caverns_and_chasms:soul_brazier', 'buzzier_bees:soul_candle', 'supplementaries:candle_holder_soul',
    'soulcandles:soul_jack_o_lantern', 'autumnity:soul_jack_o_lantern', 'autumnity:large_soul_jack_o_lantern_slice',
    'supplementaries:sconce_soul',
  ])
  event.add('thick_air:yellow_air_providers', [
    '@sootychimneys', 'aeronautics:adjustable_burner', 'aeronautics:steam_vent', 'brewinandchewin:heating_cask', 'caverns_and_chasms:cupric_campfire',
    'caverns_and_chasms:ender_brazier', 'create_enchantment_industry:blaze_enchanter', 'create_enchantment_industry:blaze_forger', 'create:blaze_burner',
    'create:steam_engine', 'ends_delight:end_stove', 'farmersdelight:stove', 'kaleidoscope_cookery:stove', 'kaleidoscope_end:end_stove',
    'kaleidoscope_nether:nether_stove', 'minecraft:campfire', 'mynethersdelight:blazier_block', 'mynethersdelight:nether_stove', 'supplementaries:fire_pit',
    'caverns_and_chasms:brazier', 'caverns_and_chasms:cupric_brazier'
  ])
  event.add('thick_air:red_air_providers', [
    /^burnt:.*blazing.*/, /^burnt:.*smoldering.*/, /^railways:smokestack_[clsow].*/, 'oreganized:asbestos_block'
  ])
})