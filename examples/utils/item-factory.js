const faker = require('faker')

let GLOBAL_ID = 0

export default new class {
  get (count) {
    let items = []; let i
    for (i = 0; i < count; i++) {
      items[i] = {
        id: ++GLOBAL_ID,
        background: this.getRandomColor(),
        poster: `${faker.image.animals()}?id=${faker.random.number()}`,
        width: 100 + ~~(Math.random() * 50),
        height: 100,
        words: faker.lorem.sentence(),
        user: {
          id: faker.random.number(),
          avatar: `${faker.image.animals()}?id=${faker.random.number()}`,
          nickname: faker.name.findName()
        },
        meta: {
          play: faker.random.number(),
          mark: faker.random.number(),
          like: faker.random.number()
        }
      }
    }
    return count === 1 ? items[0] : items
  }

  getRandomColor () {
    var colors = [
      'rgba(21,174,103,.5)',
      'rgba(245,163,59,.5)',
      'rgba(255,230,135,.5)',
      'rgba(194,217,78,.5)',
      'rgba(195,123,177,.5)',
      'rgba(125,205,244,.5)'
    ]
    return colors[~~(Math.random() * colors.length)]
  }
}()
