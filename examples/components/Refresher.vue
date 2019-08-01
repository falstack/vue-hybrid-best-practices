<style lang="scss">
.refresher {
  line-height: 50px;
  text-align: center;
  overflow: hidden;
  transition: height .4s ease-in-out;

  img {
    height: 50px;
    width: auto;
    margin: 0 auto;
  }
}
</style>

<template>
  <div class="refresher" :style="style">
    <img src="../assets/refresh.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'Refresher',
  data () {
    return {
      offset: 0
    }
  },
  computed: {
    style () {
      return {
        height: `${Math.min(this.offset, 50)}px`
      }
    }
  },
  methods: {
    setOffset (value) {
      this.offset = value
    },
    close () {
      if (this.offset < 50) {
        this.offset = 0
        return
      }
      this.$emit('refresh')
    },
    finish () {
      this.offset = 0
    }
  }
}
</script>
