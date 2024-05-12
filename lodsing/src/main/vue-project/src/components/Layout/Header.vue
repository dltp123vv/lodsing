<template>
    <VaNavbar color="#ffffff"
    class="mb-3" style="height: 96px;"
  >
    <template #left>
      <VaNavbarItem class="logo">
        <router-link to="/"><img style="width: 150px; height: 50px;" src="../../assets/images/logo.png"/></router-link>
      </VaNavbarItem>
    </template>
    <template #right>
      <VaNavbarItem class="hidden sm:block">
        예약 내역
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block">
        내정보
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block">
        로그인
      </VaNavbarItem>
     
     
    </template>
  </VaNavbar>
   
   </template>
   
   <script>
   export default {
    
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   </style>
   