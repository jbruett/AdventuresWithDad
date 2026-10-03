# Adventures with Dad

A Minecraft modpack for John to play with his ~10-year-old son on a dedicated server.

## Key facts
- NeoForge 1.21.1, published on CurseForge, played on a dedicated server (client-only mods stay out of the server pack).
- **docs/PLAN.md is where decisions are recorded**: mod list with statuses, design pillars, progression tiers,
  balancing backlog, decisions log. Update it whenever a decision is made.
- Audience: the son loves building and usually plays creative, and isn't into heavy combat. Building comes first,
  bosses are optional shortcuts and never required gates, frustration stays low.
- John has 15 years of modded Minecraft experience (automation packs: Direwolf20, ATM, skyblocks) but is new to
  pack development. Explain pack-dev mechanics (packwiz, configs, KubeJS); no need to explain how tech mods play.

## Planned tooling
- **packwiz**: mod metadata as `.pw.toml` files in git; export to CurseForge zip + server pack.
- **KubeJS**: recipe, tag and loot balancing. **Configs / datapacks**: worldgen, spawns, difficulty.
- **FTB Quests**: progression guide that replaces the per-mod starter books.
- Test locally in Prism Launcher.

## Environment notes
- Dev machine was Windows; Python wasn't installed. Modrinth's API (api.modrinth.com) works from PowerShell
  `Invoke-RestMethod`. CurseForge blocks scripted requests (403), so check CF-only mods with web search.

## Next session
1. Install packwiz and initialize the pack (NeoForge 1.21.1) in this repo.
2. Add mods in batches (foundation/performance → building → adventure → tech/magic), checking that each batch boots.
3. Start the balancing backlog in docs/PLAN.md.
