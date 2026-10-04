// JEI info pages: badges have no crafting recipe (they're quest rewards), so pressing R shows how to earn one.

RecipeViewerEvents.addInformation('item', event => {
  const note = 'Badges cannot be crafted. They are rewards from the quest book.'
  event.add('kubejs:bronze_explorer_badge', [
    Text.of(note),
    Text.of(''),
    Text.of('Explorer chapter: visit any 3 of a village, a dungeon, a tavern and a mineshaft.'),
    Text.of('Or: defeat the Naga in the Twilight Forest.'),
  ])
  event.add('kubejs:silver_explorer_badge', [
    Text.of(note),
    Text.of(''),
    Text.of('Explorer chapter: enter the Nether and visit a Nether Fortress or a Stronghold.'),
    Text.of('Or: defeat the Lich in the Twilight Forest.'),
  ])
  event.add('kubejs:gold_explorer_badge', [
    Text.of(note),
    Text.of(''),
    Text.of('Explorer chapter: enter The End.'),
  ])
})
