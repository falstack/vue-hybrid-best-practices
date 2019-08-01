<style lang="scss">
body {
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    cursor: default;
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
  }
  font-family: 'Helvetica Neue', Tahoma, Arial, PingFangSC-Regular, 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;

  .oneline {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
