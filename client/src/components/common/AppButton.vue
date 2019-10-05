<template>
  <button>
    <slot></slot>
  </button>  
</template>
<style lang="stylus" scoped>
  button
    background: transparent;
    border: 1px outset accent-color;
    border-radius: 25px;
    gradient-text();
    font-size: 1.1rem;
    font-weight: bold;
    font-family: accent-font;
    padding: .5rem 1.2rem;
    margin: 1rem;
    text-transform: uppercase;
    transition: .5s ease-in-out;
    &:hover
      background: accent-gradient;
      color: white-color;
      cursor: pointer;
    &:active
      transform: scale(.95)

  a
    color: inherit;
</style>