<template>
  <div class="results">
    <transition name="slide-fade" mode="out-in">
      <div v-if="gameFinished">
        <div class="tokens">
          <div class="player">
            <h2>YOU PICKED</h2>
            <Token :name="playerToken" :src="playerSrc" />
          </div>
          <div class="player">
            <h2>HOUSE PICKED</h2>
            <Token :name="computerToken" :src="computerSrc" />
          </div>
        </div>
        <div class="flex justify-between tk_result">
          <h2 class="game-result">
            {{ gameResult }}
          </h2>
          <button class="reset" @click="$emit('reset')">
            PLAY AGAIN
          </button>
        </div>
      </div>
      <p v-else class="loading">
        Rock... Paper... Scissors... Lizard... Spock...
      </p>
    </transition>
  </div>
</template>

<script>
  /* eslint-disable global-require */
  /* eslint-disable import/no-dynamic-require */
  import VueTypes from 'vue-types';
  // import { mapMutations } from 'vuex';
  // import { SET_SCORE } from '@/store/modules/score/mutations';

  import { randomToken, getResult } from '@/assets';
  import Token from '@/components/Token/Token.vue';

  import scissorsIcon from '@/public/icon-scissors.svg';
  import paperIcon from '@/public/icon-paper.svg';
  import rockIcon from '@/public/icon-rock.svg';
  import lizardIcon from '@/public/icon-lizard.svg';
  import spockIcon from '@/public/icon-spock.svg';

  import { useScoreStore } from '@/store';

  export default {
    name: 'Result',
    components: {
      Token,
    },
    props: {
      playerToken: VueTypes.string.isRequired,
    },
    data() {
      return {
        gameFinished: false,
        computerToken: '',
        tokenIcons: {
          scissors: scissorsIcon,
          paper: paperIcon,
          rock: rockIcon,
          lizard: lizardIcon,
          spock: spockIcon,
        },
      };
    },
    computed: {
      playerSrc() {
        // console.log(`${this.playerToken}`);
        return this.tokenIcons[this.playerToken];
      },
      computerSrc() {
        // console.log(`${this.computerToken}`);
        return this.tokenIcons[this.computerToken];
      },
      gameResult() {
        const results = {
          0: 'DRAW',
          1: 'YOU WIN',
          '-1': 'YOU LOSE',
        };

        return results[this.results];
      },
    },
    created() {
      this.computerToken = randomToken();
      setTimeout(() => {
        this.gameFinished = true;
        this.results = getResult(this.playerToken, this.computerToken);
        this.updateScore(this.results);
      }, 1000);
    },
    methods: {
      updateScore(score) {
        const scoreStore = useScoreStore(); // agora está dentro do método!
        scoreStore.updateScore(score);
      },
      // ...mapMutations('Score', {
      //   updateScore: SET_SCORE,
      // }),
    },
  };
</script>

<style lang="scss" scoped>
  .results {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .slide-fade-enter-active {
      transition: all .3s ease;
    }

    .slide-fade-leave-active {
      transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
      transform: translateX(10px);
      opacity: 0;
    }
    .tk_result {
      max-height: 100px;
    }

    .tokens {
      display: flex;
      justify-content: space-between;
      width: 100%;
      @include rfs.padding(15px);

      .player {
        display: flex;
        flex-direction: column;
        align-items: center;
        @include rfs.margin(15px);

        h2 {
          @include rfs.font-size(1.25rem);
          @include rfs.margin-bottom(30px);
        }

        .token {
          width: 22vw; // 25% da largura da viewport
          height: 22vw;
          max-width: 280px;
          max-height: 280px;
          min-width: 100px;
          min-height: 100px;

          &:hover,
          &:focus {
            transform: unset;
            cursor: default;
          }

          &::after {
            width: 17vw; // 25% da largura da viewport
            height: 17vw;
            max-width: 200px;
            max-height: 230px;
            min-width: 100px;
            min-height: 130px;
          }

          &--image {
            width: 70vw; // 25% da largura da viewport
            height: 70vw;
            max-width: 90px;
            max-height: 95px;
            min-width: 45px;
            min-height: 50px;
          }
        }
        // /deep/ .token {
        // .token {
        //   width: 280px;
        //   height: 280px;

        //   &:hover,
        //   &:focus {
        //     transform: unset;
        //     cursor: default;
        //   }

        //   &::after {
        //     width: 230px;
        //     height: 230px;
        //   }

        //   &--image {
        //     width: 90px;
        //     height: 95px;
        //   }

        //   @media(max-width: 700px) {
        //     width: 200px;
        //     height: 200px;

        //     &::after {
        //       width: 160px;
        //       height: 160px;
        //     }

        //     &--image {
        //       width: 70px;
        //       height: 75px;
        //     }
        //   }

        //   @media(max-width: 460px) {
        //     width: 130px;
        //     height: 130px;

        //     &::after {
        //       width: 100px;
        //       height: 100px;
        //     }

        //     &--image {
        //       width: 40px;
        //       height: 45px;
        //     }
        //   }
        // }
      }
    }

    .game-result {
      @include rfs.font-size(5rem);
      @include rfs.padding(20px 40px);
      // @include rfs.margin-top(50px);
      color: green;
    }

    .reset {
      @include rfs.font-size(1.25rem);
      font-weight: 600;
      background-color: $white;
      color: $dark-text;
      @include rfs.padding(10px 25px);
      width: 180px;
      border: 2px solid green;
      border-radius: 10px;
      transition: background-color 0.3s linear, color 0.3 linear;

      &:hover,
      &:focus {
        outline: none;
        background-color: #26a92499;
        color: $white;
        border: $white;
      }
    }

    .loading {
      text-align: center;
      @include rfs.font-size(1.5rem);
      font-weight: bold;
    }
  }
</style>
