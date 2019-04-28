<template>
    <div>
        <Box :msg="logoMsg"></Box>
        <ShowCity></ShowCity>
    </div>
</template>
<script>
export default {
    name:'vuex',
    data (){
        return {
            logoMsg:'Wise'
        }
    },
    methods: {
    }
}
</script>

<style>

</style>
