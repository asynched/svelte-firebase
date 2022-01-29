import Chance from 'chance'

const chance = new Chance()

export const makeTask = (emoji) => () => ({
  id: chance.guid(),
  title: chance.sentence({ words: 2 }),
  completed: chance.bool(),
  createdAt: chance.date(),
  updatedAt: chance.date(),
  emoji,
})
