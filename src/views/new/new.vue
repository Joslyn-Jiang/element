<template>
<div>
    <div id="main">哈哈哈哈</div>
    <div id="slidebar">啦啦啦啦</div>
     <ul>
         <li><p></p></li>
         <li><p class="foo"></p></li>
         <li><button class="lala"></button></li>
         <li></li>
     </ul>
     <div id="undefine"></div>
<div class="btn-dribble">哈哈哈</div>
<div class="seriousError"></div>
<div> <a href="hoverlink">yiiyiiyi</a></div>
<div class="criticalError"></div>
<div id="fake-links">
    <div class="link">
        <a href="">qqq</a>
        <a href="" class="important">ppppp</a>
        </div>
</div>
<div class="item-2">2</div>
<div class="item-4">4</div>
<div class="item-6">6</div>
<div class="color"></div>
<div id="sildebar"></div>
<div id="est"></div>
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
//   border-color: #000
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
// p:before {
//   content: "I ate #{5 + 10} pies!";
// }
$value: 1;
p:before {
    content: "I ate #{$value} pies"
}

$name:foo;
$attr:border;
p.#{$name} {
    width:$width;
    height:$height;
    #{$attr}-color:#fff;
    border:1px solid;
}
@mixin button {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    background-color: black;  
    height:$width;
    width: $width;
}
.lala {
    @include button; 
}
$content:"First content";
$content: "Second content?" !default;
$new_content:"First time reference" !default;
#undefine {
    width: 100px;
    height: $height;
    // #{$attr}-color:red;
    #{$attr}: 1px red solid;
    color:black;
    content: $content;
}
.error {
    #{$attr}: 1px #f00;
    background-color: #fdd;
}
.seriousError {
    width:$width;
    height: $height;
    @extend .error;
    border-width: 3px;
}
.hoverlink {
    @extend a:hover;
}
a:hover {
    text-decoration: underline;
}
a{
    text-decoration: none;
}
.criticalError {
    @extend .seriousError;
    border:1px solid red;
}
#fake-links .link {
    @extend a;
}
a {
    color: blue;
    &:hover {
        text-decoration: underlinde;
    }
}
a.important {
    @extend .notice !optional;
}
$i:6;
@while $i>0 {
    .item-#{$i} {width:2em*$i;}
    $i: $i - 2;
}
@mixin sexy-border($color, $width){
    border: {
        color: $color;
        width: $width;
        style: dashed;
    }
}
p {@include sexy-border(yellow,2px)}
$color: white;
@mixin colors($color: blue) {
    background-color: $color;
    @content;
    border-color: $color;
}
.color {
    @include colors { color: $color; }
    width: 100px;
    height: 20px;
}
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n){
    @return $n * $grid-width + ($n - 1) * $gutter-width;
}
#sildebar { 
    width: grid-width(5);
    height: grid-width(5);
    border: 1px solid red;
    }
#est {
    color:#fff;
    background-color:#000;
}    
    #est p {
    width: 10em;}

</style>