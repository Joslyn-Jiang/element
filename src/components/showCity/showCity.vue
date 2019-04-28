<template>
    <div>
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
