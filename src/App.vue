<template>
 <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$font-family: 'Avenir', Helvetica, Arial, sans-serif;
$text-align: center;
$color: #2c3e50;
$background:#fff;
body{
  background:$background;
  font-family: $font-family;
  text-align: $text-align;
  color: $color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
