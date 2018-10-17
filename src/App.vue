<template>
  <main id="app">
      <transition name="fade" mode="out-in">
            <router-view></router-view>
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

        }
    },

    methods: {

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

    /* Анимация появления формы */

    .fade-enter-active {
        transition: opacity .2s ease-in, transform .3s ease-in;
    }

    .fade-leave-active {
        transition: opacity .2s ease-out, transform .3s ease-in;
    }

    .fade-enter {
        opacity: 0;
        transform-origin: center center;
        transform: scale(1.3);
    }

    .fade-leave-to {
        opacity: 0;
        transform: scale(0);
        transform-origin: center center;
    }


    /* Мобильная верстка */

    @media screen and (width <= 812px) {
        #app {
            padding: 20px;
        }
    }

</style>
