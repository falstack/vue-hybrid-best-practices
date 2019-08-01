<style lang="scss">
#index {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  transform: translateY(0);
  transition: transform 0.4s ease;

  &.active {
    transform: translateY(-127px);
  }

  .carousel {
    width: 100%;
    height: 127px;
    padding: 12px;

    .c-item {
      height: 103px;
      display: block;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .v-switcher {
      border-radius: 4px;
      overflow: hidden;

      &-header {
        &-wrap {
          box-sizing: border-box;
          position: absolute;
          right: 10px;
          bottom: 10px;
          height: 35px;
          z-index: 1;
          width: 150px;
          border-bottom: none;
        }

        &-item {
          margin-left: 8px;
          width: 6px;
          height: 6px;
          border-bottom-width: 0;
          cursor: default;
          padding: 0;
          border-radius: 50%;
          background-color: #fff;

          &.is-active {
            background-color: rgb(251, 114, 153);
          }
        }
      }
    }
  }

  .content {
    height: 100%;
    box-sizing: border-box;

    .v-switcher-header-wrap {
      border-bottom: 1px solid #f4f4f4;
    }

    .v-switcher-header-anchor {
      height: 2px;
      bottom: 1px;
      background-color: rgb(251, 114, 153);
    }

    .v-switcher-header-after {
      span {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAABQCAYAAAAtOZRrAAAAAXNSR0IArs4c6QAAAbFJREFUSA3lVdluxDAITNr+/y+nHuRBAzE+KvWltbQCwxyQjXbv67ru9tk+H9vIDvwLhK+Dpe1p7i7tj37l4EBOMnN4gUGqCENww98VgRNoNJHRDlk93LNDaKo885EDe5lsd3XIABIRvVc5OEDALwdVZK5Eq+lIGaRg5lvfg4OhmHcIzdbXu+WjkWajle8SSTn6DrBTewK19qOR3IGKy5iX1hGUjPpyJBAoQPLWSCRtOVDZY94BDVXU3HojgpKQ87xGohoBjKizt7U0iRbzSEGtK7NmMROoxhF4R5wSHNCBuNupHNhndMddAojLkage4omDEX+d8Jw4PJgp/y7pggaQgj3ayiGDwUPtyQ4EQo05wH4qBwf0xMlK8GIDjXLUlk9JiWamDt3d1RXMfOlAEUQjZQcqEYi71o4cTCR/D6qMPH8fx78aPpLOGmbult7PS3OkMs4IdGKEiI+UFRVkQICRfLaPvecSUWcNuZ7SQUEhr3bgSIiaH/+xh5GoxBH07jmWywtO7yMCHDLJa9XSAAxP5UDwy2nl4MtSYUUALpB2CBS3uNohgNvlPiUcvxr/k/ANymEy3LfMxmMAAAAASUVORK5CYII=);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        width: 6px;
        height: 50px;
        margin-right: 8px;
        vertical-align: middle;
      }

      button {
        color: #505050;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        vertical-align: middle;
      }

      i {
        vertical-align: middle;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAhhJREFUWAntU0lLQlEUdkARbVg0FxHRHEEtIyiisKJVQbRRNAf0N4lTiisX0S4iyl00R8MyomgZZQOJOPZ98YycUmsT9A6cd+59Z/rOd++VSEQRGRAZEBn47wxIcwlwOByrUqlUo1KpVgwGw1uu/yd7n89XF41G11D3zWazzX+tIfu6EdYj6XR6CQkbwWCwqoC/ol8YqB61tpE0Aa3NTc4DoFQqFxB0AxDj4XD4VyDYHLV2oMPQS7C6CJsleUdAr8vl6kilUiGA6ARtu3K5fM5isbxmZZbYeDyehng8zuZD0AuFQjFtNpvvc9PyGGCA1Wq9RfNJLK9hxxKJxGYgEKihrxzx+/2NyAkhdggDnMNOFWrOWgUZoIOCKdoxBQt1odCeWq2e1ev1Lx/OIh+n09kE9jj5IPQMtE8bjcaHIuGSggxkgoH6TiaTTaL5FZgYjUQiWzjXvIuUifd6vc2II2A2P8XRTX3XnHnfMsAACp5RG24yC/cAzCHOc8ZkMj19OIUPgLVgycn7oSdorsVRPgruoqYsAMx2u92tyWQyhAl7sT3Ca9FmQNCHM2fzPgA81mg0Wp1OF2ZeKSkbAAsJU5KJz0ZorM6wg/9ZwJhTSioCwGI851gsRhCk+hQTV4OVbtgD2Bm73f7MuHKlYgAszJuOZiHogNBoH3a20ubM/REAJgog1rF8xvNcLvU8mSOKyIDIgMjAn2TgHUDl1QIiwBh8AAAAAElFTkSuQmCC);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        margin-right: 14px;
        width: 16px;
        height: 16px;
      }
    }

    .v-switcher-header-item {
      padding: 0 16px;
      font-size: 14px;
      color: #505050;

      &.is-active {
        color: rgb(251, 114, 153);
      }
    }

    .flow-loader {
      padding-top: 10px;

      .flow-loader-state {
        text-align: center;
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>

<template>
  <div id="index" :class="{ 'active': isActive }">
    <div class="carousel">
      <v-switcher v-if="carousels.length" :headers="carousels" :swipe="true" :autoplay="2000" align="end" :header-height="6">
        <a
          v-for="(item, index) in carousels"
          :key="index"
          :slot="`${index}`"
          :style="{ backgroundColor: item.background, backgroundImage: `url(${item.poster})` }"
          class="c-item"
          href="javascript:;"
        >
          {{ item.title }}
        </a>
      </v-switcher>
    </div>
    <div class="content">
      <v-switcher
        :headers="headers"
        :swipe="true"
        :sticky="true"
        :anchor-padding="16"
        @change="handleTabSwitch"
      >
        <template slot="header-after">
          <span />
          <button @click="handleBtnClick">排序</button>
          <i />
        </template>
        <v-scroller
          v-for="(item, index) in headers"
          ref="scroll"
          :key="index"
          :event-step="30"
          :slot="`${index}`"
          @top="handlePullDown"
          @scroll="handleScroll"
          @scroll-down="handlePullUp"
          @bottom="handleLoadMore"
          @refresh="handleRefresh"
        >
          <ul class="ul-wrap">
            <li class="hoz-wrap">
              <recommended ref="rec" />
            </li>
            <flow-loader
              ref="loader"
              func="getListByPage"
              type="page"
              :auto="0"
              :query="{
                id: item,
                count: 10
              }"
              :callback="handleCallback"
            >
              <waterfall ref="render" slot-scope="{ flow, count }" :total="count" :items="flow" />
            </flow-loader>
          </ul>
        </v-scroller>
      </v-switcher>
    </div>
  </div>
</template>

<script>
import Waterfall from '../components/Waterfall'
import Recommended from '../components/Recommended'
import { getCarousel } from '../utils/api'

export default {
  name: 'Index',
  components: {
    Waterfall,
    Recommended
  },
  data () {
    return {
      isActive: false,
      carousels: [],
      headers: [
        '火狐',
        '大熊猫',
        '蜂鸟',
        '白鲸',
        '小熊猫',
        '企鹅',
        '树懒',
        '刺猬',
        '安哥拉兔'
      ],
      activeIndex: 0
    }
  },
  created () {
    this.getCarousels()
  },
  methods: {
    getCarousels () {
      getCarousel()
        .then(data => {
          this.carousels = data
        })
    },
    handlePullDown () {
      this.isActive = false
    },
    handlePullUp () {
      this.isActive = true
    },
    handleTabSwitch (index) {
      this.activeIndex = index
      this.$nextTick(() => {
        this.$refs.loader[index].initData()
        this.$refs.rec[index].getItems()
      })
    },
    handleCallback () {
      this.$nextTick(() => {
        const index = this.activeIndex
        this.$refs.render[index].setWrap(this.$refs.scroll[index].$el)
      })
    },
    handleLoadMore () {
      this.$refs.loader[this.activeIndex].loadMore()
    },
    handleScroll (data) {
      this.$refs.render[this.activeIndex].scroll(data)
    },
    handleBtnClick () {
      alert('排序')
    },
    handleRefresh () {
      this.isActive = false
    }
  }
}
</script>
