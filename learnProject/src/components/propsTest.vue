<template>
  <div class="app-wrap">
    <header>header</header>
    <section>
      <aside>aside</aside>
      <div class="content">content</div>
    </section>
   

  </div>
</template>

<script>
  export default {
    data () {
      return {

        
      };
    }
  }
</script>


<style lang="scss">
@import "../assets/css/reset.css";
  .app-wrap{
    display:flex;
    flex-direction: column;
    height: 100%;
   
   
    header{
      height: 50px;
      background: yellow;
    }
    section{
      flex: 1;
      display: flex;
      aside{
        width: 200px;
        background: #ddd;
      }
      .content{
        width: 100%;
        background: #eee;
      }
    }
  }
</style>