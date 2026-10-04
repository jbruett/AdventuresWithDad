// Explorer Badges: soft-gate items earned from Explorer quests (see docs/QUESTS.md).
// containerItem returns the badge to the crafting grid, so a badge is a permanent unlock, not a consumable.

StartupEvents.registry('item', event => {
  const badges = [
    ['bronze_explorer_badge', 'uncommon'],
    ['silver_explorer_badge', 'rare'],
    ['gold_explorer_badge', 'epic'],
  ]
  for (const [id, rarity] of badges) {
    event.create(id)
      .unstackable()
      .fireResistant()
      .rarity(rarity)
      .containerItem(`kubejs:${id}`)
  }
})
