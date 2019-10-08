<template>
  <section class='container'>
    <div>We've send a link on <span>{{ email }}!</span></div>
    <div>Please follow it to finish your registration!</div>
  </section>  
</template>
<script>
export default {
  props: {
    email: ''
  }
}
</script>
<style lang="stylus" scoped>
  section
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
  div
    color: secondary-color;
    font-size: 1.5rem;

  span
    gradient-text();
</style>
