<template>
  <div>
    <div class="header"><Header></Header></div>
    <div class="body">
      <!-- <div style="border: 1px solid blue; "> -->
      <router-view :key="this.$route.fullPath"></router-view>
    </div>
</div>
</template>


<script>
import Header from '@/components/Layout/Header.vue'


export default {
  components: { Header },
  data () {
    return {
     
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}

.header {
  background-color: #eef4fb;
  flex: 0 0 auto;
}
.header {
  height: 100px; /* 헤더의 높이 설정 */
}

.body {
  /* 바디의 높이 설정 */
  height: calc(100vh - 100px); /* 브라우저 높이에서 헤더의 높이를 뺀 만큼의 높이로 설정 */
  overflow-y: auto; /* 내용이 바디를 벗어날 경우 스크롤바 표시 */
}

</style>
