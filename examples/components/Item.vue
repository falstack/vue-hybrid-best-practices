<style lang="scss">
.comp-item {
  padding: 0 10px;
  height: 110px;

  .outer {
    padding-top: 10px;
  }

  .inner {
    border-radius: 5px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
}
</style>

<template>
  <div v-if="item" class="comp-item">
    <div class="outer">
      <div class="inner" :style="{ backgroundColor: item.background }" @click="handleClick">
        count：{{ index + 1 }}，id：{{ item.id }}，click：{{ click }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      click: 0
    }
  },
  methods: {
    handleClick () {
      this.click++
    }
  }
}
</script>
