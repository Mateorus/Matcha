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
  
  .form-title
    font-family: accent-font;
    font-size: 2rem;
    gradient-text;
    margin-bottom: 1rem;
    text-transform: uppercase;
    gradient-text();
    @media screen and (max-width: phoneWidth)
      font-size: 1.4rem;


  form
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 350px;
    height: 100%;
    @media screen and (max-width: phoneWidth)
      width: 250px;

  .input
    margin-bottom: .5rem;
    width: 100%;
  
  input
    background: transparent;
    border: none;
    border-bottom: 1px solid accent1-color;
    color: accent1-color;
    font-size: 1.1rem;
    padding: .5rem 1rem;
    width: 100%;
   
  .input-error
    color: accent-color;
    font-size: .8rem;
    margin: .3rem;

  .form-footer
    color: secondary-color;
    margin-bottom: 1.5rem;
    & a
      gradient-text();
      font-weight: bold;

      

  
</style>