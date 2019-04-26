<template>
    <div class="header_content">
        <h1>{{msg}}</h1>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    name:'header',
    props: {msg: String}
    // data(){
    //     return{
    //         msg: 'header!'
    //     }
    // }
}
</script>
