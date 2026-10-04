// Tooltips so a new player knows what each Explorer Badge is for.

ItemEvents.modifyTooltips(event => {
  const keep = Text.gray('Keep this! It stays in the crafting grid when you use it.')
  event.add('kubejs:bronze_explorer_badge', [
    Text.gold('Unlocks: Alloy Smelter, Laser Node, Enchanting Apparatus'),
    keep,
  ])
  event.add('kubejs:silver_explorer_badge', [
    Text.gold('Unlocks: Metallurgic Infuser, Storage Controller, Mining Gadgets'),
    keep,
  ])
  event.add('kubejs:gold_explorer_badge', [
    Text.gold('Unlocks: Digital Miner'),
    keep,
  ])
})
