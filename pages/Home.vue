<template>
  <div class="home">
    <RouterLink to="/play" class="start">
      INICIAR JOGO
    </RouterLink>
    <RulesButton />
  </div>
</template>

<script>
  import RulesButton from '@/components/Buttons/Rules.vue';

  export default {
    name: 'Home',
    components: {
      RulesButton,
    },
  };
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include rfs.margin-top(-50px);

    .start {
      @include rfs.font-size(4rem);
      font-weight: bold;
      text-decoration: none;
      transition: transform .3s linear, letter-spacing .3s linear;

      &:visited {
        color: $white;
      }

      &:hover,
      &:focus {
        outline: none;
        transform: scale(1.25);
        letter-spacing: 5px;
        text-decoration: underline;
      }
    }
  }
</style>
