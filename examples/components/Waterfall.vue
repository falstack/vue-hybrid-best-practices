<style lang="scss">
.waterfall {
  position: relative;
  margin: 0 10px;
}
</style>

<template>
  <vue-flow-render
    ref="render"
    :total="total"
    :remain="16"
    :column="2"
    class="waterfall"
  >
    <Item
      v-for="(item, index) in items"
      :key="item.id"
      :style="getItemStyle(item, index)"
      :item="item"
      :index="index"
    />
  </vue-flow-render>
</template>

<script>
import Item from './Item'

export default {
  name: 'Waterfall',
  components: {
    Item
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      width: (window.screen.width - 20) / 2 - 5,
      column: [0, 0],
      cache: {}
    }
  },
  methods: {
    getItemStyle (item, index) {
      if (this.cache[index]) {
        return this.cache[index]
      }
      const { width, column } = this
      const height = item.height * (width / item.width) + 70
      const columnIndex = index < column.length ? index % 2 : column.indexOf(Math.min(...column))
      const top = column[columnIndex]
      this.column[columnIndex] += height
      const result = {
        height: `${height}px`,
        width: `${width}px`,
        top: `${top}px`,
        left: columnIndex ? `${width + 10}px` : 0
      }
      this.cache[index] = result
      return result
    },
    refresh () {
      this.cache = {}
      this.column = [0, 0]
    },
    setWrap (data) {
      this.$refs.render.setWrap(data)
    },
    scroll ({ offsetTop, isUp }) {
      this.$refs.render.scroll(offsetTop, isUp)
    }
  }
}
</script>
