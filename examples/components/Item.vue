<style lang="scss">
.comp-item {
  position: absolute;
  padding-bottom: 10px;

  .outer {
    position: relative;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 rgba(80,80,80,.11);
    overflow: hidden;

    .poster {
      display: block;
      width: 100%;
      height: auto;
    }

    .panel {
      position: absolute;
      height: 50px;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: #fff;
    }
  }
}
</style>

<template>
  <div v-if="item" class="comp-item">
    <div class="outer" :style="{ backgroundColor: item.background }">
      <img :src="item.poster" class="poster">
      <div class="panel">
        panel
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
  }
}
</script>
