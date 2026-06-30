ServerEvents.recipes(event => {
	event.recipes.create.mechanical_crafting('waterframes:tv_box', [
		'CCCCC',
		'CiTiC',
		'CGdGC',
		'CipiC',
		'CCNCC'
	], {
		C: 'create:andesite_casing',
		i: 'exposure:interplanar_projector',
		T: '#c:glass_blocks/tinted',
		G: 'minecraft:glowstone',
		d: '#c:gems/diamond',
		p: 'create:precision_mechanism',
		N: 'minecraft:note_block'
	}).id('waterframes:tv_box')
	event.recipes.create.mechanical_crafting('waterframes:tv', [
		'CCCCC',
		'CTPTC',
		'CCCCC'
	], {
		C: 'create:copper_casing',
		T: '#c:glass_blocks/tinted',
		P: 'waterframes:tv_box'
	}).id('waterframes:tv')
	event.recipes.create.mechanical_crafting('waterframes:big_tv', [
		'CCCCC',
		'CTTTC',
		'CGPGC',
		'CCCCC'
	], {
		C: 'create:brass_casing',
		T: '#c:glass_blocks/tinted',
		G: 'minecraft:glowstone',
		P: 'waterframes:tv'
	}).id('waterframes:big_tv')
	event.recipes.create.mechanical_crafting('waterframes:frame', [
		'OOOOO',
		'OzozO',
		'OsPsO',
		'ItStI',
		'IIIII'
	], {
		O: 'dndesires:overburden_casing',
		z: '#c:gems/zirconia',
		o: 'upsizing:orb_of_scale',
		s: '#c:gems/spinel',
		P: 'waterframes:big_tv',
		I: 'dndesires:industrial_casing',
		t: '#c:gems/turquoise',
		S: '#c:storage_blocks/spinel'
	}).id('waterframes:frame')
	event.recipes.create.mechanical_crafting('waterframes:projector', [
		'AAAAA',
		'MHPHA',
		'MMMMM'
	], {
		A: 'tfmg:industrial_aluminum_casing',
		M: 'tfmg:heavy_machinery_casing',
		H: 'bellsandwhistles:headlight',
		P: 'waterframes:frame'
	}).id('waterframes:projector')
	event.recipes.create.mechanical_crafting('waterframes:remote', [
		'aTa',
		'ala',
		'aaa'
	], {
		a: '#c:plates/andesite_alloy',
		T: '#c:glass_blocks/tinted',
		l: 'create:linked_controller'
	}).id('waterframes:remote')
})