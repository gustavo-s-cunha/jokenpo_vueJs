<template>
  <div class="score">
    <h3 class="score-label">
      <span class="score-label--text">SCORE</span>
      <span class="score-label--number"> {{ score }} </span>
    </h3>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { useScoreStore } from '@/store';

  const scoreStore = useScoreStore();
  const { score } = storeToRefs(scoreStore);
</script>

<!-- <script>
  import { mapState, mapMutations } from 'vuex';
  import { SET_SCORE } from '~/store/modules/score/mutations';

  export default {
    name: 'Score',
    computed: {
      // ...mapState('Score', {
      //   score: ({ score }) => score,
      // }),
      ...mapState('Score', ['score']),
    },
    methods: {
      ...mapMutations('Score', {
        setScore: SET_SCORE
      })
    }
  };
</script> -->

<style lang="scss">
  .score {
    background-color: $white;
    border-radius: 10px;
    @include rfs.padding(20px 50px);

    @media (max-width: 400px) {
      padding: 20px;
    }

    &-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1;

      &--text {
        @include rfs.font-size(1rem);
        letter-spacing: 2.5px;
        color: $score-text;
      }

      &--number {
        @include rfs.font-size(5rem);
        color: $dark-text;
      }
    }
  }
</style>
