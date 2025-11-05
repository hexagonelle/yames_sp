JEIEvents.information(event => {

	const desertEnchants = [
		"Fire Protection",
		"Thorns",
		"Infinity",
		"Efficiency"
	];
	const plainsEnchants = [
		"Bane of Arthropods",
		"Smite",
		"Punch",
		"Protection"
	];
	const savannaEnchants = [
		"Knockback",
		"Curse of Binding",
		"Sweeping Edge",
		"Sharpness"
	];
	const snowEnchants = [
		"Looting",
		"Aqua Affinity",
		"Frost Walker",
		"Silk Touch"
	]
	const taigaEnchants = [
		"Blast protection",
		"Fire aspect",
		"Flame",
		"Fortune"
	]
	const jungleEnchants = [
		"Projectile Protection",
		"Power",
		"Feather Falling",
		"Unbreaking"
	]
	const swampEnchants = [
		"Respiration",
		"Depth Strider",
		"Curse of Vanishing",
		"Mending"
	]

	const enchantsList = [
		["Desert", desertEnchants],
		["Plains", plainsEnchants],
		["Savanna", savannaEnchants],
		["Snow", snowEnchants],
		["Taiga", taigaEnchants],
		["Jungle", jungleEnchants],
		["Swamp", swampEnchants]
	]


	

	event.addItem(
		Item.of('minecraft:enchanted_book'),
		['Obtained by trading with a' + ' Librarian villager:'],
		['']
	)



})