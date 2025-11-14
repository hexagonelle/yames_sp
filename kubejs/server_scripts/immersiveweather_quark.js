ServerEvents.recipes(event => {

	//////// IMMERSIVE WEATHERING x QUARK /////////

	// Allow crafting between different permafrosts:
	event.shapeless("immersive_weathering:limestone",["quark:limestone"])
	event.shapeless("quark:limestone",["immersive_weathering:limestone"])

})