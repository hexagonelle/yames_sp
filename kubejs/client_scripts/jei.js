JEIEvents.information(event => {
  event.addItem(
  	Item.of(
  		'minecraft:enchanted_book',
  		'{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'
	),
  	['Obtained by trading with', 'a Desert Librarian villager'])
})