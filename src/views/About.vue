<template>
  <div class="about">
    <h1>This is an about page {{id}} {{slug}}</h1>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
  data(){
    return {
      id: this.$route.params.id,
      slug: this.$route.params.slug
    }
  }
}
</script>
