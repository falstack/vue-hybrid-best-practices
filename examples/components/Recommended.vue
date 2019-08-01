<style lang="scss">
$item-size: 88px;
.recommended-list {
  width: 100%;
  height: $item-size;
  overflow: hidden;

  .item-wrap {
    display: inline-block;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    height: 110%;
    padding-bottom: 10%;
    box-sizing: content-box;
    width: 100%;
    -webkit-overflow-scrolling: touch;

    .item {
      width: $item-size;
      height: $item-size;
      font-size: 24px;
      display: inline-block;
      text-align: center;
      white-space: nowrap;
      margin: 0 10px;

      img {
        display: block;
        margin: 0 auto;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-bottom: 10px;
        margin-top: 12px;
        background-color: #fafafa;
      }

      p {
        font-size: 12px;
        text-align: center;
        color: gray;
      }
    }
  }
}
</style>

<template>
  <div class="recommended-list" @touchstart.stop @touchmove.stop>
    <ul class="item-wrap">
      <li
        v-for="item in items"
        :key="item.id"
        class="item"
      >
        <img :src="item.user.avatar" alt="">
        <p class="oneline" v-text="item.user.nickname" />
      </li>
    </ul>
  </div>
</template>

<script>
import { getRecommended } from '../utils/api'

export default {
  name: 'Recommended',
  data () {
    return {
      items: []
    }
  },
  methods: {
    getItems () {
      if (this.items.length) {
        return
      }
      getRecommended()
        .then(data => {
          this.items = data
        })
    }
  }
}
</script>
