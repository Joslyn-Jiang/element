<template>
<div>
    <div id="main">哈哈哈哈</div>
    <div id="slidebar">啦啦啦啦</div>
    </div>    
</template>
<script>
export default {
    name:'new'
}
</script>
<style lang="scss" scoped>
#main {
    $width: 5 em !global;
    $border:1px solid !global;
    $height:15px !global;
    width: $width;
    height: $height;
    border: $border;
}
#slidebar {
    width: $width;
    height: $height;
    border: $border; 
}
</style>
