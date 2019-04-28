<template>
    <div>
    <h1>在线翻译</h1>
    <TranslateForm @formSubmit='translateText'></TranslateForm>
    </div>
</template>
<script>
export default {
    name:'showCity',
    methods:{
        translateText(text){
            alert(text)
        }
    }
}
</script>
