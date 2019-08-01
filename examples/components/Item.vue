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
      height: 100%;
      padding-bottom: 70px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .panel {
      position: absolute;
      height: 70px;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: #fff;
      padding: 10px;

      .title {
        font-size: 14px;
        line-height: 20px;
        color: #505050;
        margin-bottom: 10px;
      }

      .meta {
        height: 20px;

        img {
          display: block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #f2f3f5;
          object-fit: cover;
          float: left;
          margin-right: 5px;
        }

        p {
          overflow: hidden;
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>

<template>
  <div v-if="item" class="comp-item">
    <div class="outer" :style="{ backgroundColor: item.background }">
      <div class="poster">
        <img :src="item.poster">
      </div>
      <div class="panel">
        <p class="oneline title" v-text="item.words" />
        <div class="meta">
          <img :src="item.user.avatar">
          <p class="oneline" v-text="item.user.nickname" />
        </div>
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
