<template>
  <div>
    <button @click="submit()">{{$store.state.count}}</button>
    <button @click="$store.commit('add',10)">+</button>
    <button @click="$store.commit('reduce')">-</button>
    <p>{{count}}</p>
    <p>
      <button @click="addplus">+</button>
      <button @click="subplus">-</button>
    </p>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'vuex',
  data() {
    return {
    }
  },
  // computed:mapState({
  //       //理解为传入state对象，修改state.count属性
  //       count:state=>state.count
  // }),
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])  },
  // computed:{count(){
  //     return this.$store.getters.count;
  // }},
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(["addplus", "subplus"]),
    addplus(value) {
      this.addplus({ title: value })
    },
    subplus(item) {
      this.subplus(item)
    },
    submit() {
      console.log(this.$store.state.count)
      console.log(this.count)
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  width: 40px;
  height: 20px;
  text-align: center;
}
</style>
