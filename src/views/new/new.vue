<template>
<div>
    <div id="main">哈哈哈哈</div>
    <div id="slidebar">啦啦啦啦</div>
     <ul>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
     </ul>
<div class="btn-dribble">哈哈哈</div>
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
$list-bg:red,orange,blue,skyblue;
ul{
    list-style: none;
    >li{
        height: 30px;
        @each $c in $list-bg{
            $i:index($list-bg,$c);
            &:nth-child(#{$i+1}){
                background: nth($list-bg,$i);
            }
        }
    }
}
// 默认主题
$default-theme : (
  base-color: #ddd,
  border-color: #000
);
//红色主题
$red-theme : (
  base-color: red,
  border-color: red
);
//定义映射集合
$themes: (
  default-theme: $default-theme,
  red-theme: $red-theme
);
@mixin base-background(){
    @each $themename , $theme in $themes {
        [data-theme = '#{$themename}'] & {
            background: map-get($map: $theme, $key: base-color )
        }
    }
}
</style>
