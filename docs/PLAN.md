# Adventures with Dad — Pack Plan

Living design doc. Update as decisions are made.

## Target

| | |
|---|---|
| Minecraft | 1.21.1 |
| Loader | NeoForge |
| Multiplayer | Dedicated server (needs a server pack; client-only mods must be excluded) |
| Publish | CurseForge |
| Tooling | packwiz (mod metadata in git), KubeJS (recipes/loot), configs, FTB Quests |

## Design pillars

1. **Building is a first-class activity.** The kid usually plays creative and loves building, so survival should
   feel close to it: lots of decorative blocks, and building tools (Building Gadgets, Ultimine) available early.
2. **Exploration unlocks automation.** Finding structures, looting and trading with villages gates the bigger
   tech/magic tiers. Bosses (Twilight Forest) are optional co-op adventures that give shortcuts or bonuses,
   never the only path, so heavy combat is never required.
3. **Low frustration.** No hunger/temperature overhauls. Gravestones on death. Server on Easy difficulty;
   no hard-mode dungeon/boss mods.
4. **Guided, not gated.** FTB Quests gives goals and rewards; replaces all the individual starter guide books.
5. **Server-friendly.** Performance mods, chunk-loading limits, and a tracked client-only list.

## Mod list

Status: ✅ confirmed NeoForge 1.21.1 build · 🔄 replaced · ❓ undecided · ❌ dropped

### Tech / automation (John's picks)

| Mod | Status | Notes |
|---|---|---|
| Create | ✅ | Create 6 — vet any add-on for Create 6 compatibility |
| Create Crafts & Additions | ✅ | Suggested: bridges Create rotation ↔ FE |
| Mekanism (+ Generators, Tools, Additions) | ✅ | Top of ore-processing ladder |
| Ender IO | ✅ | |
| Refined Storage | ✅ | 2.x rewrite — playtest before committing |
| Laser IO | ✅ | CF-only |
| Just Dire Things | ✅ | CF-only |
| Building Gadgets 2 | ✅ | CF-only |
| Mining Gadgets | ✅ | CF-only |
| Charging Gadgets | ✅ | CF-only |
| Ender Storage | ✅ | |
| Iron Furnaces | ✅ | |
| Botany Pots, Botany Trees | ✅ | |
| Item Collectors | ✅ | |
| Simple Magnets | ✅ | |
| Sophisticated Backpacks | ✅ | |
| TorchMaster | ✅ | |
| Connected Glass | ✅ | |
| OpenBlocks Elevator | ✅ | |
| Sawmill (Universal Sawmill) | ✅ | |
| FTB Ultimine | ✅ | CF-only |
| Inventory Tweaks | 🔄 | → Inventory Profiles Next (client-only) |
| Pedestals | ❌ | No 1.21.1 port; automation covered by JDT/Mekanism/Item Collectors |

### Magic

| Mod | Status | Notes |
|---|---|---|
| Ars Nouveau | ✅ | Only magic mod — tie into progression via KubeJS |

### Adventure / structures (suggested)

| Mod | Status | Notes |
|---|---|---|
| Towns and Towers | ✅ | Anchor mod. Don't add another village overhaul (e.g. CTOV) alongside it |
| YUNG's suite (Dungeons, Mineshafts, Strongholds, Ocean Monuments, Desert/Jungle Temples, Witch Huts, Nether Fortresses, End Island, Bridges, Extras) | ✅ | Makes vanilla structures worth exploring. Server-side only |
| Repurposed Structures | ✅ | Biome variants of vanilla structures. CF-only |
| Dungeons and Taverns | ✅ | Small, frequent points of interest |
| The Twilight Forest | ✅ | Optional co-op boss adventure; its biomes/structures are great to explore and build in. CF-only |
| The Aether | ❌ | Decided against |
| When Dungeons Arise | ❌ | Too combat-heavy for this pack |
| L_Ender's Cataclysm | ❌ | Too combat-heavy for this pack |
| Terralith | ✅ | Biome overhaul using vanilla blocks; pick this **or** Biomes O' Plenty, not both |
| Waystones | ✅ | Teleport network — essential for a shared server |
| Explorer's Compass, Nature's Compass | ✅ | Kids can actually find structures/biomes |
| Artifacts | ✅ | Fun trinket loot in chests |
| Farmer's Delight | ✅ | Cooking/farming, kid-friendly |
| Supplementaries | ✅ | Decor + fun utility blocks |
| Friends & Foes | ❌ | No NeoForge 1.21.1 build |

### Building / decoration

| Mod | Status | Notes |
|---|---|---|
| Macaw's suite (Furniture, Roofs, Windows, Doors, Trapdoors, Bridges, Fences & Walls, Stairs, Paths & Pavings, Lights & Lamps, Paintings) | ✅ | The building staple; take all or trim later |
| Rechiseled (+ Rechiseled: Create) | ✅ | Chisel variants with connected textures; same author as Connected Glass. Chosen over Chipped (Chipped's last 1.21.1 build is from 2024) |
| Handcrafted | ✅ | Furniture with a different look than Macaw's |
| FramedBlocks | ✅ | Shapes that take any block's texture |
| Create Deco, Create: Copycats+ | ✅ | Industrial building blocks for Create builds |
| Supplementaries | ✅ | (listed above) |
| Effortless Building | ❌ | Removed. Building Gadgets (John's pick) covers this |
| Chipped, Another Furniture, Dramatic Doors | ❌ | Not needed; the picks above cover them |
| Blueprint / Abnormals mods | ❌ | Decided against |

### Foundation / QoL

| Mod | Status | Notes |
|---|---|---|
| Sodium | ✅ | Client-only |
| ModernFix, FerriteCore | ✅ | |
| JEI | ✅ | Chosen over EMI |
| Controlling (+ Searchables) | ✅ | Searchable key binds + conflict highlighting. Client-only |
| Leaves Be Gone (+ Puzzles Lib) | ✅ | Fast leaf decay (John's request) |
| Jade | ✅ | |
| Xaero's Minimap + World Map | ✅ | Client-only-ish; waypoint sharing |
| FTB Quests, FTB Chunks, FTB Teams | ✅ | CF-only. Chunks = claims + chunk loading |
| KubeJS | ✅ | |
| Gravestone Mod | ✅ | Chosen over Corpse |
| In Control! | ❓ | Server-side spawn tuning, if Easy difficulty plus TorchMaster isn't calm enough |
| Sophisticated Storage | ✅ | Pairs with Backpacks |

## Progression sketch (draft)

Gates are things you **find or trade for** (structure loot, T&T village trades, quest rewards). Twilight Forest
boss drops give an optional **cheaper recipe or shortcut** for a tier, never the only route.

| Tier | Theme | Unlocks | Gated by | Optional boss shortcut |
|---|---|---|---|---|
| 0 | Settle in & build | All decorative/building mods, Building Gadgets, FTB Ultimine, Iron Furnaces, Sawmill, Farmer's Delight, Waystones, backpacks | — | — |
| 1 | Early automation | Create, Botany Pots, Simple Magnets, Ender Storage | Village/YUNG's loot, basic quests | — |
| 2 | Power & magic | Ender IO, Create Additions, Ars Nouveau, Laser IO | Exploration loot (Repurposed Structures, D&T), Nether access | Naga / Lich drops |
| 3 | Big tech | Mekanism, Refined Storage, Mining Gadgets, Just Dire Things | Deeper exploration (YUNG's strongholds/fortresses), trades | Mid Twilight Forest bosses |
| 4 | Endgame | Mekanism top tiers, JDT endgame, Botany Trees | End access, rare loot | Twilight Forest finale |

## Balancing backlog

**Approach:** John does a full playthrough before the pack goes to his son. Balance issues found in that
playthrough get added here. Items below are things to watch for, not changes to make blind.

- [ ] Remove starter books → single FTB Quests book on first join
  - [x] Ars Nouveau Tattered Tome: `spawnBook = false` in config/ars_nouveau-common.toml (the only mod that gave one at batch 4)
  - [x] Give the FTB Quests book on first join (kubejs/server_scripts/quest_book.js)
- [ ] Ore-processing ladder: Create (~1.75x) → Ender IO (~2x) → Mekanism (3–5x); keep each tier worthwhile
- [ ] Building Gadgets cheap and early (building is a core activity); gate Mining Gadgets to tier 3
- [ ] Set server difficulty to Easy; review hostile spawn rates after first playtest
- [ ] Botany Pots/Trees recipe cost (infinite resources)
- [ ] Structure density: T&T + YUNG's + Repurposed Structures + D&T can over-saturate. First look (batch 3) seemed fine;
      revisit during the playthrough
- [ ] Villages: T&T and Repurposed Structures both add village variants. Consider turning off RS villages so T&T's are the ones you see
- [ ] Mob difficulty / dungeon loot so day-one loot isn't late-game gear
- [ ] Recipe conflicts (multiple mods' sawmills, crushers, furnaces) — unify via KubeJS + tags
- [ ] Create Deco's `createdeco:placard` recipe fails to parse against Create 6.0.10. Fix with KubeJS or wait for an update
- [ ] Ender IO's 1.21.1 builds are tagged beta (8.2.12-beta). Watch for bugs during the playthrough
- [ ] Playthrough check: R4 (craft a Waystone) unlocks five Welcome quests, and the Waystone recipe has some
      advanced ingredients. See whether this blocks a new survival player too early
- [ ] Track client-only mods for the server pack (Sodium, IPN, Xaero's, etc.)
- [ ] FTB Chunks: per-player claim/forceload limits sized for a home server

## Open questions

- Target pack size. The current list is roughly 100–120 mods including libraries; that's fine for a home server
- How pick-up-and-play should Twilight Forest be (spawn rates, boss difficulty config)?

## Decisions log

- 2026-10-03: NeoForge 1.21.1, dedicated server, CurseForge
- 2026-10-03: Pedestals dropped (no 1.21.1 port); Inventory Tweaks → Inventory Profiles Next
- 2026-10-03: Son likes building and usually plays creative, so building is a core pillar and heavy combat is optional
- 2026-10-03: JEI, Gravestone Mod; no Aether; no Blueprint/Abnormals
- 2026-10-04: packwiz initialized (NeoForge 21.1.255). All mods sourced from CurseForge. Batch 1 (foundation) boots
- 2026-10-04: Batch 2 (building) added. Effortless Building removed (Building Gadgets stays). Create-dependent building add-ons wait for batch 4
- 2026-10-04: Batch 3 (adventure) added. YUNG's taken from its NeoForge-specific CF listings. Boots; structure spacing looks OK
- 2026-10-04: Dedicated server test passes (scripts/test-server.ps1). All CF mods allow automated downloads
- 2026-10-04: Batch 4 (tech/magic) added; Curios + GeckoLib added for Ars Nouveau. Server boots with 97 mods
- 2026-10-04: Batch 4 client boots. Athena added (Ender IO capacitor bank models need it)
- 2026-10-04: Quests: shared team progress, soft gates (badges from Explorer quests), Claude drafts and John tweaks,
  specific-item rewards only. Design in docs/QUESTS.md
- 2026-10-04: Balancing happens through John's own playthrough before release, not up-front tuning
