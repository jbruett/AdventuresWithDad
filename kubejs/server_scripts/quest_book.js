// Give every player the FTB Quests book on their first join to a world.

PlayerEvents.loggedIn(event => {
  const data = event.player.persistentData
  if (data.getBoolean('awd_quest_book_given')) return
  event.player.give('ftbquests:book')
  data.putBoolean('awd_quest_book_given', true)
})
