# Quest Design — Adventures with Dad

Draft outline for review. Once agreed, this becomes FTB Quests chapter files in `config/ftbquests/quests/`.

## Implementation

- **Badges:** `kubejs/startup_scripts/badges.js` (items), `kubejs/client_scripts/badge_tooltips.js`,
  `kubejs/client_scripts/badge_info.js` (JEI info page, since badges have no recipe),
  textures in `kubejs/assets/kubejs/textures/item/`.
- **Gates:** `kubejs/server_scripts/badge_gates.js`. Each gated recipe keeps its pattern with one ingredient
  swapped for the badge. All three Mining Gadget tiers are gated, since each has its own recipe.
- **Quest book on first join:** `kubejs/server_scripts/quest_book.js`.
- **Quests:** `config/ftbquests/quests/`. Structure in `chapters/*.snbt`, all text in `lang/en_us.snbt`
  (FTB Quests 2101.1.36 reads one file per language; the newer `lang/en_us/` folder layout loads 0 entries). Structure tasks
  use tags (`#towns_and_towers:town`, `#betterdungeons:better_dungeons`, `#nova_structures:taverns`,
  `#bettermineshafts:better_mineshafts`, and `#awd:fortress_or_stronghold` from `kubejs/data/awd/`).

## Decisions

- **Shared progress:** John and his son play as one FTB Team (party). A quest completed by either counts for both,
  and each player claims his own rewards.
- **Soft gates:** a few key machines per tier need a **badge** that Explorer quests award. Badges are *not*
  consumed by crafting (KubeJS keeps them in the grid), so a badge is a permanent unlock.
- **Rewards:** specific items only. No loot crates.
- **Writing style:** short, friendly quest text that a 10-year-old can read on his own. One idea per quest.

## Gate badges (soft gates)

Three custom items (KubeJS), named for the son's audience:

| Badge | Unlocks tier | Earned from (Explorer) | Optional boss shortcut |
|---|---|---|---|
| Bronze Explorer Badge | 2: Power & magic | Visit 3 different structure types | Naga |
| Silver Explorer Badge | 3: Big tech | Reach the Nether and explore a YUNG's fortress or stronghold | Lich (or Hydra) |
| Gold Explorer Badge | 4: Endgame | Reach the End | Twilight Forest finale |

Machines that need a badge in their recipe. Few on purpose; everything else crafts normally:

| Badge | Gated items (draft, to adjust during the playthrough) |
|---|---|
| Bronze | Ender IO Alloy Smelter · Laser IO Laser Node · Ars Nouveau Enchanting Apparatus |
| Silver | Mekanism Metallurgic Infuser · Refined Storage Controller · Mining Gadget MK1 |
| Gold | Mekanism Digital Miner · (more chosen during the playthrough) |

Tier 0–1 (building, Create, Botany Pots, magnets, Ender Storage) is never gated.

## Chapter 1 — Welcome (both)

1. **Welcome!** Checkmark. Explains the quest book and that quests are optional guides.

### Recipe Book (JEI) — for a first-time modded player

A short run of quests at the start of the book. Each one teaches one JEI skill, then has him use it. The text
refers to keys by their default binding. JEI only works while an inventory or other menu is open, so every quest
starts with "Open your inventory (E)".

R1. **The Magic Recipe List.** Checkmark.
   - The list of items on the right side of the screen shows every item in the game, including all the mods.
   - Scroll with the mouse wheel, or use the arrows at the top of the list to change pages.
   - Ctrl+O hides or shows the list.
R2. **How Do I Make That?** Task: craft a Crafting Table. That's an easy win to practise with.
   - Hover over any item and press **R** (or left-click it) to see how to **make** it.
   - Press **Backspace** to go back to the previous page and **Esc** to close.
   - In the recipe window, the **+** button fills your crafting grid for you if you have the items.
R3. **What Can I Do With This?** Checkmark.
   - Hover over an item and press **U** (or right-click it) to see everything you can **use** it for.
   - Try it on a piece of wood or an iron ingot. There are a lot of uses in this pack!
R4. **Search Like a Pro.** Task: get a Waystone (look up the recipe, then craft it).
   - Click the search box at the bottom (or press **Ctrl+F**) and type a name, like `waystone`.
   - Type **@** and a mod name to show only that mod's items: `@macaw`, `@create`, `@ars`.
   - You can combine them: `@macaw roof` shows only Macaw's roofs.
   - Double-click the search box to clear it.
R5. **Which Mod Is This?** Checkmark.
   - The **blue text at the bottom** of an item's tooltip tells you which mod it comes from.
   - Look at a block in the world: the box at the top of the screen (Jade) shows its name and mod.
   - Use the mod name with `@` in JEI to see everything else that mod adds.
R6. **Bookmarks.** Checkmark.
   - Hover over an item and press **A** to bookmark it. Bookmarks appear on the left side of the screen.
   - Handy for things you're collecting materials for. Press A again to remove a bookmark.

R7. **Find Any Key.** Checkmark.
   - Options > Controls > Key Binds has a search box (Controlling mod). Type an action like `ultimine`.
   - Keys in red are used by two things at once; click to change.

The rest of the chapter depends on R4, so the JEI quests come first without blocking anything for long.

2. **Team Up.** Checkmark. How to make a party (`/ftbteams party create`, then invite) so progress is shared.
3. **Pack Your Bags.** Craft a Sophisticated Backpack. Reward: a few backpack upgrades' materials.
4. **Never Get Lost.** Checkmark. Open the world map (**M**), add a waypoint (**B**), and place the Waystone from R4
   at home. Explains that waystones let you teleport between each other's bases. Reward: Warp Scrolls.
5. **Safe Home.** Craft a TorchMaster Mega Torch. Reward: none (the torch is the reward).
6. **Oops, I Died.** Checkmark. Explains gravestones (where your items go).

## Chapter 2 — Builder's Corner (son-focused, never gates anything)

Checkmark "build" quests are on the honor system; item quests check inventory.

1. **Builder's Toolkit.** Craft the Building Gadgets "Building Gadget". Reward: Charging Gadgets charger.
2. **Super Mining Hands.** Checkmark. Explains FTB Ultimine (hold the key and break a whole vein).
3. **A Roof Over Your Head.** Get 16 Macaw's roof blocks. Reward: a stack of a nice building block.
4. **Home Sweet Home.** Checkmark: furnish a room with a bed, table and chairs (Macaw's or Handcrafted). Reward:
   Macaw's lights. (A checkmark because FTB Quests can't match "any furniture" without the FTB Filter System mod.)
5. **Window Shopping.** Get 16 Connected Glass. Reward: more glass.
6. **Chisel Time.** Craft a Rechiseled Chisel. Reward: a stack of stone bricks to chisel.
7. **Shape Shifter.** Craft a FramedBlocks Framing Saw. Reward: framed block materials.
8. **Bridge Builder.** Place a Macaw's bridge (item task). Reward: rope or lanterns.
9. **Copy That.** Use the Building Gadgets Copy-Paste gadget (craft it). Reward: Template Manager.
10. **Master Builder.** Checkmark: "Build something you're proud of and show Dad!" Reward: a fun cosmetic item.

## Chapter 3 — Explorer (both; awards badges)

1. **Into the Wild.** Visit 3 different biomes (biome tasks). Reward: Nature's Compass.
2. **Village People.** Visit a Towns and Towers village (structure task). Reward: emeralds.
3. **Dungeon Delver.** Visit a YUNG's Better Dungeon. Reward: Explorer's Compass.
4. **Tavern Time.** Visit a Dungeons and Taverns tavern. Reward: food.
5. **Deep Down.** Visit a YUNG's Better Mineshaft. Reward: torches + rails.
6. → **Bronze Explorer Badge**: complete any 3 of quests 2–5. Reward: Bronze Explorer Badge.
7. **Hot Stuff.** Enter the Nether. Reward: fire resistance potions.
8. **Fortress Raider.** Visit a YUNG's Nether Fortress *or* Stronghold. Reward: blaze rods.
9. → **Silver Explorer Badge**: complete 7 and 8. Reward: Silver Explorer Badge.
10. **The End?** Enter the End. Reward: Gold Explorer Badge.

## Chapter 4 — Twilight Forest (optional, Dad-led)

1. **A Magic Portal.** Enter the Twilight Forest. Reward: food.
2. **Naga.** Kill the Naga. Reward: Bronze Explorer Badge (shortcut).
3. **Lich.** Kill the Twilight Lich. Reward: Silver Explorer Badge (shortcut).
4. More bosses → rewards chosen during the playthrough; the finale gives the Gold badge.

## Later chapters (outline during the playthrough)

- **Farm & Kitchen:** Farmer's Delight, Botany Pots, Botany Trees.
- **Create** (tier 1) → **Ender IO / Laser IO / Ars Nouveau** (tier 2) → **Mekanism / Refined Storage / JDT /
  Mining Gadgets** (tier 3) → endgame (tier 4).

## Open questions

- Badge names and look: OK for a 10-year-old, or something more fun (e.g. "Adventure Stars")?
- Are the Bronze/Silver/Gold gated machines the right ones?
- Should the first-join quest book be given automatically? (Planned: yes.)
