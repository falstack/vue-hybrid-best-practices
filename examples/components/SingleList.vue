<style lang="scss">
.single-list {
  padding-left: 10px;
  padding-right: 10px;

  .comp-item {
    position: relative;
    height: 240px;
    width: 100%;
  }
}
</style>

<template>
  <vue-flow-render
    ref="render"
    :total="total"
    :remain="20"
    :height="240"
    :item="itemComp"
    :getter="getProps"
    class="single-list"
  >
    <Item
      v-for="(item, index) in items"
      :key="item.id"
      :item="item"
      :index="index"
    />
  </vue-flow-render>
</template>

<script>
import Item from './Item'

export default {
  name: 'SingleList',
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
      itemComp: Item
    }
  },
  methods: {
    setWrap (data) {
      this.$refs.render.setWrap(data)
    },
    scroll ({ offsetTop, isUp }) {
      this.$refs.render.scroll(offsetTop, isUp)
    },
    getProps (index) {
      return {
        props: {
          item: this.items[index],
          index,
          showPoster: false
        }
      }
    }
  }
}
</script>
