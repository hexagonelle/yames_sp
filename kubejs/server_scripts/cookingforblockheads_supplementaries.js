ServerEvents.recipes(event => {

	//compat between supplementaries jar & cooking for blockheads

	event.shapeless("supplementaries:jar",["cookingforblockheads:jar"])
	event.shapeless("cookingforblockheads:jar",["supplementaries:jar"])
	
});