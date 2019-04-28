<template>
    <div id="translate-form">
    <form>
        <input type="text" v-model="textToTranslate" placeholder="输入内容">
        <button class="submit" type="submit" @click="formSubmit">啦啦</button>
    </form>
    </div>
</template>

<script>
export default {
    name:'translateForm',
    data(){
        return{
            textToTranslate:''
        }
    },
    methods:{
        formSubmit(e){
            //父组件监听的名字必须是formSubmit
            this.$emit('formSubmit',this.textToTranslate)
            e.preventDefault()
        }
    }
}
</script>
<style>
.submit{
    width: 100px;
    height: 20px;
    line-height: 20px
}
</style>
