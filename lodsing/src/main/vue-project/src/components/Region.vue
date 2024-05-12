<template>
 <div style="border: 1px solid blue; height: 300px; width: 500px; margin-top: auto 200px">
  
    <VaAccordion
    v-model="value"
    class="max-w-sm"
  >
    <VaCollapse
      v-for="(group, idx) in items"
      :key="idx"
      :header="group.title"
      body-color="background-element"
    >
      <template #body>
        <RouterLink
          v-for="(navItem, idx) in group.items"
          :key="idx"
          class="nav-item"
          :to="navItem.to"
        >
          {{ navItem.label }}
        </RouterLink>
      </template>
    </VaCollapse>
  </VaAccordion>
  
 </div>

</template>

<script>
export default {
    data() {
    return {
      value: [false, true, false, false],
      items: [
        {
          title: "UI Elements",
          items: [
            { label: "Button", to: "/ui-elements/button" },
            { label: "Data Table", to: "/ui-elements/table" },
            { label: "Radio", to: "/ui-elements/radio" },
          ],
        },
        {
          title: "Services",
          items: [
            { label: "Global Config", to: "/services/global-config" },
            { label: "Breakpoint Service", to: "/services/breakpoints" },
          ],
        },
        {
          title: "Styles",
          items: [
            { label: "Colors", to: "/styles/colors" },
            { label: "Typography", to: "/styles/typography" },
          ],
        },
      ],
        }
    },

    methods: {
        getTypes(){
            this.$axios.get('/acc', {
    
        }).then((res) => {
          this.accommodationTypes = res.data.list;
        });
    }

    },

    created(){
        this.getTypes();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-item {
  display: flex;
  flex-direction: column;
  padding: var(--va-collapse-padding);
  transition: all 0.2s ease-in;
}
</style>
