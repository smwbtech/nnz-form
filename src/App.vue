<template>
  <main id="app">
      <transition name="fade" mode="out-in">
          <img v-if="loading" class="loading" src="./assets/img/nnz_letter_logo.svg" alt="">
          <app-form v-else></app-form>
      </transition>

  </main>
</template>

<script>
import Form from './components/Form.vue'

export default {
    name: 'app',

    components: {
        appForm: Form
    },

    data() {
        return {
            loading: false
        }
    },

    beforeMount() {
        this.loading = true;
        setTimeout( () => {
            this.loading = false;
        }, 2000);
    }
}
</script>

<style scoped>

@import './assets/css/common.css';

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
        min-width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('./assets/img/background.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

    }

    .loading {
        opacity: .1;
        animation: load 2s ease-in infinite;
    }

    /* Анимация появления формы */

    .fade-enter-active {
        transition: opacity .2s ease-in, transform .3s ease-in;
    }

    .fade-leave-active {
        transition: opacity .2s ease-out;
    }

    .fade-enter {
        opacity: 0;
        transform-origin: center center;
        transform: scale(1.3);
    }

    .fade-leave-to {
        opacity: 0;
        transform-origin: center center;
    }

    /* Анимация логотипа */

    @-webkit-keyframes load {
        from { transform: rotateY(0turn);}
        to { transform: rotateY(1turn) }
    }
    @-o-keyframes load {
        from { transform: rotateY(0turn);}
        to { transform: rotateY(1turn) }
    }
    @-moz-keyframes load {
        from { transform: rotateY(0turn);}
        to { transform: rotateY(1turn) }
    }
    @keyframes load {
        from { transform: rotateY(0turn);}
        to { transform: rotateY(1turn) }
    }

    /* Мобильная верстка */

    @media screen and (width <= 812px) {
        #app {
            padding: 20px;
        }
    }

</style>
