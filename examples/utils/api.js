import ItemFactory from './item-factory'

export const getListByPage = ({ page, count }) => {
  return new Promise(resolve => {
    const total = 1024
    const hasFetch = (page - 1) * count
    const getLength = total - hasFetch >= count ? count : total - hasFetch
    setTimeout(() => {
      const result = ItemFactory.get(getLength)
      resolve({
        result,
        no_more: getLength + hasFetch >= total,
        total
      })
    }, 500)
  })
}

export const getCarousel = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = ItemFactory.get(5)
      resolve(result)
    }, 500)
  })
}

export const getRecommended = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = ItemFactory.get(10)
      resolve(result)
    }, 500)
  })
}
