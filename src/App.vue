<template>
  <main id="app">
      <!-- Основной контент -->
      <transition name="fade" mode="out-in">
            <router-view></router-view>
      </transition>
      <!-- Flash Message -->
    <transition name="flash-message">
        <app-flash-message v-if="flashMessage"></app-flash-message>
    </transition>

  </main>
</template>

<script>
import Form from './components/Form.vue'
import FlashMessage from './components/FlashMessage.vue';

export default {
    name: 'app',

    components: {
        appForm: Form,
        appFlashMessage: FlashMessage
    },

    data() {
        return {

        }
    },

    computed: {
        flashMessage() {
            console.log(this.$store.state);
            return this.$store.state.flashMessage.message.length > 0;
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
        height: 100vh;
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

    /* Анимация FlashMessage */
    .flash-message-enter-active {
        animation: fromBottom .5s forwards;
    }
    .flash-message-leave-active {
        animation: toRight .5s forwards;
    }
    @keyframes fromBottom {
        0% {
            transform: translateY(240px);
            opacity: 0;
        }
        70% {
            transform: translateY(-50px);
            opacity: 0.8;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes toRight {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        30% {
            transform: translateX(-50px);
            opacity: 0.8;
        }
        100% {
            transform: translateX(240px);
            opacity: 0;
        }
    }


    /* Мобильная верстка */

    @media screen and (width <= 812px) {
        #app {
            padding: 20px;
        }
    }

</style>
