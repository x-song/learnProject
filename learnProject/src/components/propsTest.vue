<template>
    <div>
      <ul>
        <li v-for="item in Arr">{{item}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "propsTest",
      props:{
        Arr: {
          type: Array,
          default: function () {
            return [1,2,3]
          }
        }
      }
    }
</script>

<style scoped>

</style>
