<template>
  <form @submit.prevent="$emit('submit')">
    <slot></slot>
  </form>  
</template>
<script>
export default {
 
}
</script>
<style lang="stylus" scoped>
  
  
      

  
</style>