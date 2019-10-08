<template>
  <div id="auth-view" class='container'>
    <section id="auth-section">
      <div id="auth-header">
        <router-link to="/auth">
          <span>matcha </span>
        </router-link>
        <span>| the dating service</span>
      </div>
      <vue-page-transition name="fade-in-left" class="container">
        <router-view></router-view>
      </vue-page-transition>
    </section>
  </div>
</template>
<script>
import Logo from '@/components/common/Logo';
export default {
  name: 'Auth',
  components: { Logo }
}
</script>
<style lang="stylus" scoped>
  
  #auth-view
    background: 80% / cover no-repeat url('../assets/img/face.jpg')

  #auth-section
    height: 100%;
    width: 80%;
    @media screen and (max-width: phoneWidth)
      background: rgba(255, 255, 255, .8);
      width: 100%;

  #auth-header
    height: 50px;
    width: 100%;
    padding: 1rem;
    & span
      gradient-text();
      text-transform: uppercase;
      &:first-child
        font-weight: bold;

</style>