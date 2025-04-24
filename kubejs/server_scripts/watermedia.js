ServerEvents.recipes(event => {
	event.custom({
		type: 'create:mechanical_crafting',
		accept_mirrored: true,
		category: 'misc',
		key: {
			C: {
				item: 'create:andesite_casing'
			},
			i: {
				item: 'exposure:interplanar_projector'
			},
			T: {
				tag: 'c:glass_blocks/tinted'
			},
			G: {
				item: 'minecraft:glowstone'
			},
			d: {
				tag: 'c:gems/diamond'
			},
			p: {
				item: 'create:precision_mechanism'
			},
			N: {
				item: 'minecraft:note_block'
			}
		},
		pattern: [
			'CCCCC',
			'CiTiC',
			'CGdGC',
			'CipiC',
			'CCNCC'
		],
		result: {
			id: 'waterframes:tv_box'
		}
	}).id('waterframes:tv_box')
	event.custom({
		type: 'create:mechanical_crafting',
		accept_mirrored: true,
		category: 'misc',
		key: {
			C: {
				item: 'create:copper_casing'
			},
			T: {
				tag: 'c:glass_blocks/tinted'
			},
			P: {
				item: 'waterframes:tv_box'
			}
		},
		pattern: [
			'CCCCC',
			'CTPTC',
			'CCCCC'
		],
		result: {
			id: 'waterframes:tv'
		}
	}).id('waterframes:tv')
	event.custom({
		type: 'create:mechanical_crafting',
		accept_mirrored: true,
		category: 'misc',
		key: {
			C: {
				item: 'create:brass_casing'
			},
			T: {
				tag: 'c:glass_blocks/tinted'
			},
			G: {
				item: 'minecraft:glowstone'
			},
			P: {
				item: 'waterframes:tv'
			}
		},
		pattern: [
			'CCCCC',
			'CTTTC',
			'CGPGC',
			'CCCCC'
		],
		result: {
			id: 'waterframes:big_tv'
		}
	}).id('waterframes:big_tv')
	event.custom({
		type: 'create:mechanical_crafting',
		accept_mirrored: true,
		category: 'misc',
		key: {
			C: {
				item: 'createcasing:creative_casing'
			},
			f: {
				item: 'arsdelight:flourishing_bark'
			},
			F: {
				item: 'kubejs:flashing_bark'
			},
			v: {
				item: 'arsdelight:vexing_bark'
			},
			m: {
				item: 'ars_nouveau:manipulation_essence'
			},
			P: {
				item: 'waterframes:big_tv'
			},
			j: {
				item: 'ars_nouveau:conjuration_essence'
			},
			T: {
				item: 'create:railway_casing'
			},
			c: {
				item: 'arsdelight:cascading_bark'
			},
			p: {
				item: 'ars_technica:calibrated_precision_mechanism'
			},
			b: {
				item: 'arsdelight:blazing_bark'
			}
		},
		pattern: [
			'CCCCC',
			'CfFvC',
			'CmPjC',
			'TcpbT',
			'TTTTT'
		],
		result: {
			id: 'waterframes:frame'
		}
	}).id('waterframes:frame')
	event.custom({
		type: 'create:mechanical_crafting',
		accept_mirrored: true,
		category: 'misc',
		key: {
			R: {
				item: 'create:refined_radiance_casing'
			},
			S: {
				item: 'create:shadow_steel_casing'
			},
			H: {
				item: 'bellsandwhistles:headlight'
			},
			P: {
				item: 'waterframes:frame'
			}
		},
		pattern: [
			'RRRRR',
			'SHPHR',
			'SSSSS'
		],
		result: {
			id: 'waterframes:projector'
		}
	}).id('waterframes:projector')
	event.custom({
		type: 'create:mechanical_crafting',
		accept_mirrored: true,
		category: 'misc',
		key: {
			C: {
				item: 'createcasing:creative_casing'
			},
			T: {
				tag: 'c:glass_blocks/tinted'
			},
			l: {
				item: 'create:linked_controller'
			}
		},
		pattern: [
			'CTC',
			'ClC',
			'CCC'
		],
		result: {
			id: 'waterframes:remote'
		}
	}).id('waterframes:remote')
})