<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'

export default {
  name: 'Main',
  components: {
    Main
  }
}
</script>
