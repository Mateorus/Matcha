<template>
  <section class='container'>
     <p>welcome to matcha!</p>
     <p>Join us now and meet people from all over the world!</p>
     <div>
       <app-button>
         <router-link to="/auth/signin">
          sign in
         </router-link>
       </app-button><app-button>
         <router-link to="/auth/signup">
          sign up
         </router-link>
       </app-button>
     </div>
  </section>
</template>
<script>
import AppButton from '@/components/common/AppButton';
export default {
  components: { AppButton }
}
</script>
<style lang="stylus" scoped>
  section
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    & p:first-child
      font-family: accent-font;
      font-size: 2.5rem;
      line-height: 1.6;
      text-transform: uppercase;
      gradient-text();
      @media screen and (max-width: phoneWidth)
        font-size: 1.6rem;
    & p:nth-child(2)
      color: secondary-color;
      font-style: italic;
      @media screen and (max-width: phoneWidth)
        font-size: .8rem;

</style>