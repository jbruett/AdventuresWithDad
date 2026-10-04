// Soft gates (docs/QUESTS.md): each gated recipe keeps its original pattern, with one single-use ingredient
// swapped for an Explorer Badge. The badge comes back after crafting (see startup_scripts/badges.js).

const BRONZE = 'kubejs:bronze_explorer_badge'
const SILVER = 'kubejs:silver_explorer_badge'
const GOLD = 'kubejs:gold_explorer_badge'

ServerEvents.recipes(event => {
  const gate = (originalId, output, pattern, key) => {
    event.remove({ id: originalId })
    event.shaped(output, pattern, key).id(`kubejs:gated/${originalId.replace(':', '/')}`)
  }

  // Bronze: tier 2, power & magic
  gate('enderio:alloy_smelter', 'enderio:alloy_smelter', ['GFG', 'FVF', 'IBI'], {
    G: '#c:gears/iron', F: 'minecraft:furnace', V: 'enderio:void_chassis', I: '#c:ingots/iron', B: BRONZE, // was obsidian
  })
  gate('laserio:laser_node', 'laserio:laser_node', ['igi', 'gbg', 'iBi'], {
    i: '#c:ingots/iron', g: '#c:glass_panes', b: 'laserio:laser_connector', B: BRONZE, // was a glass pane
  })
  gate('ars_nouveau:enchanting_apparatus', 'ars_nouveau:enchanting_apparatus', ['nsn', 'gdg', 'nBn'], {
    n: '#c:nuggets/gold', s: 'ars_nouveau:sourcestone', g: '#c:ingots/gold', d: '#c:gems/diamond', B: BRONZE, // was sourcestone
  })

  // Silver: tier 3, big tech
  gate('mekanism:metallurgic_infuser', 'mekanism:metallurgic_infuser', ['IFI', 'ROR', 'IBI'], {
    I: '#c:ingots/iron', F: 'minecraft:furnace', R: '#c:dusts/redstone', O: '#c:ingots/osmium', B: SILVER, // was a furnace
  })
  gate('refinedstorage:controller', 'refinedstorage:controller', ['EPE', 'SBS', 'ESE'], {
    E: 'refinedstorage:quartz_enriched_iron', P: 'refinedstorage:advanced_processor', S: '#c:silicon', B: SILVER, // was machine casing
  })
  // All three gadget tiers have independent recipes, so all three are gated
  const gadgetKey = { d: '#c:gems/diamond', i: '#c:ingots/iron', r: '#c:dusts/redstone', u: 'mininggadgets:upgrade_empty', B: SILVER }
  gate('mininggadgets:mininggadget_simple', 'mininggadgets:mininggadget_simple', ['diB', 'dur', 'dii'], gadgetKey) // was gold
  gate('mininggadgets:mininggadget', 'mininggadgets:mininggadget', ['diB', 'dur', 'dig'], Object.assign({ g: '#c:ingots/gold' }, gadgetKey)) // was one of two gold
  gate('mininggadgets:mininggadget_fancy', 'mininggadgets:mininggadget_fancy', ['dii', 'dur', 'diB'], gadgetKey) // was gold

  // Gold: tier 4, endgame. Mekanism's mek_data recipe type keeps machine data, so it stays a custom recipe
  event.remove({ id: 'mekanism:digital_miner' })
  event.custom({
    type: 'mekanism:mek_data',
    category: 'misc',
    key: {
      A: { tag: 'mekanism:alloys/atomic' },
      B: { item: GOLD }, // was a basic circuit
      R: { item: 'mekanism:robit' },
      S: { item: 'mekanism:logistical_sorter' },
      T: { item: 'mekanism:teleportation_core' },
      X: { item: 'mekanism:steel_casing' },
    },
    pattern: ['ABA', 'SRS', 'TXT'],
    result: { count: 1, id: 'mekanism:digital_miner' },
  }).id('kubejs:gated/mekanism/digital_miner')
})
