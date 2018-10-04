<template lang="html">

    <div class="form-block">

        <transition name="fade">
            <div class="success" v-if="isAnswered">
                <svg id="successAnimation" :class="{animated: isAnswered}" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                      <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"/>
                      <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" stroke-width="2" stroke-linecap="round" fill="transparent"/>
                      <polyline id="successAnimationCheck" stroke="#979797" stroke-width="2" points="23 34 34 43 47 27" fill="transparent"/>
                </svg>
                <p>Ваш ответ принят! От лица компании "Ниеншанц-Автоматика" благодарим, что уделили время!</p>
            </div>
        </transition>

        <!-- Левый блок -->
        <section class="form-block-left">
            <img src="./../assets/img/nnz_logo.svg" alt="Логотип Ниеншанц-Автоматики" class="logo">
            <p class="text">
                <span>Добрый день, {{ name }}</span><br>
                Мы проводим опрос среди наших постоянных клиентов с целью улучшить наше взаимодействие и коммуникацию. Просим Вас ответить на три вопроса, которые дадут нам более полное представление о том, как наша компания воспринимается со стороны. Заранее благодарим за ответы, вы помогаете нам становиться лучше.
            </p>
            <p class="link">
                <a href="https://www.nnz-ipc.ru/">www.nnz-ipc.ru</a>
            </p>
        </section>

        <!-- Правый блок -->
        <section class="form-block-right">

            <div class="questions" :style="{opacity: !isAnswered ? '1' : '0'}">
                <img src="./../assets/img/questions_logo.svg" alt="Лого вопросов">
            </div>

            <form action="">
                <label for="star-rating">Как вы оцениваете работу нашей компании по пятибальной шкале? </label>
                <star-rating class="star-rating" id="star-rating"
                    v-model="rating"
                    :increment="0.5"
                    :star-size="40"
                    :inactive-color="'#e8f7ff'"
                    :active-color="'#22b1fc'"
                    :padding="10"
                    @rating-selected="isSelected = !isSelected"></star-rating>
                <label for="comment">Что именно вас устраивает или не устраивает в работе нашей компании? Напишите свой комментарий.</label>
                <textarea name="comment" id="comment" v-model="comment"></textarea>
                <button @click.prevent="send">отправить отзыв</button>
            </form>

        </section>

    </div>

</template>

<script>

import StarRating from 'vue-star-rating';

export default {

    components: {
            StarRating
    },

    data() {
        return {
            isAnswered: false,
            isSelected: false,
            name: 'Олег Анатольевич',
            email: '',
            rating: 0,
            comment: 'Напишите свой комментарий'
        }
    },

    methods: {
        send() {
            console.log(this.isSelected);
            let dataObj = {
                email: this.email,
                rating: this.rating,
                comment: this.comment
            };
            this.isAnswered = !this.isAnswered;
        }
    }
}
</script>

<style lang="css" scoped>

    @import './../assets/css/variables.css';

    .form-block {
        display: flex;
        position: relative;
        width: calc(var(--column) * 12);
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);

        & .success {
            background-color: #15ce9c;
            position: absolute;
            z-index: 100;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            border-radius: 5px;

            & p {
                color: #fff;
                text-align: center;
            }
        }

        & .form-block-left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 55%;
            height: 100%;
            padding: var(--side-padding);
            background-color: #e8f7ff;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;

            & .logo {
                display: block;
                width: calc(var(--column) * 2);
                margin-bottom: var(--row);
            }

            & .text {
                margin-bottom: var(--row);
            }

            & .text > span {
                font-size: 1.8em;
                display: inline-block;
                padding-bottom: 20px;
            }

            & .link {
                text-align: center;

                & a {
                    text-decoration: none;
                    color: #0073b5;
                }
            }
        }

        & .form-block-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 45%;
            min-height: 100%;
            height: 100%;
            padding: var(--side-padding);
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;

            & .questions {
                position: relative;
                min-height: 50px;
                transition: opacity .2s ease-in;

                & img {
                    width: 100px;
                    position: absolute;
                    top: -60px;
                    right: -40px;
                }
            }

            & label {
                display: inline-block;
                font-weight: bold;
                font-size: .9em;
                margin-bottom: 20px;
            }

            & .star-rating {
                margin-bottom: 20px;
            }

            & textarea {
                border: none;
                width: 100%;
                min-width: 100%;
                max-width: 100%;
                min-height: 150px;
                max-height: 150px;
                background-color: #fafafa;
                margin-bottom: 20px;
                padding: 10px;
                font-family: inherit;
                font-size: inherit;
                color: inherit;
                resize: none;
            }

            & button {
                display: block;
                font-size: 1rem;
                margin: 0 auto;
                border: none;
                border-radius: 5px;
                padding: 10px;
                background-color: #22b1fc77;
                color: #fff;
                transition: background-color .2s ease-in;
                cursor: pointer;

                &:hover {
                    background-color: #22b1fc;
                }
            }
        }
    }

    /* Анимация окна подтверждения */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

    /* Cтили анимиолванной svg иконки подтверждения отправки  */

    @-webkit-keyframes scaleAnimation {
  0% {
    opacity: 0;
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@keyframes scaleAnimation {
  0% {
    opacity: 0;
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@-webkit-keyframes drawCircle {
  0% {
    stroke-dashoffset: 151px;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes drawCircle {
  0% {
    stroke-dashoffset: 151px;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@-webkit-keyframes drawCheck {
  0% {
    stroke-dashoffset: 36px;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes drawCheck {
  0% {
    stroke-dashoffset: 36px;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#successAnimationCircle {
  stroke-dasharray: 151px 151px;
  stroke: #fff;
}

#successAnimationCheck {
  stroke-dasharray: 36px 36px;
  stroke: #fff;
}

#successAnimationResult {
  fill: #fff;
  opacity: 0;
}

#successAnimation.animated {
  -webkit-animation: 1s ease-out 0s 1 both scaleAnimation;
          animation: 1s ease-out 0s 1 both scaleAnimation;
}
#successAnimation.animated #successAnimationCircle {
  -webkit-animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCircle, 0.3s linear 0.9s 1 both fadeOut;
          animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCircle, 0.3s linear 0.9s 1 both fadeOut;
}
#successAnimation.animated #successAnimationCheck {
  -webkit-animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCheck, 0.3s linear 0.9s 1 both fadeOut;
          animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCheck, 0.3s linear 0.9s 1 both fadeOut;
}
#successAnimation.animated #successAnimationResult {
  -webkit-animation: 0.3s linear 0.9s both fadeIn;
          animation: 0.3s linear 0.9s both fadeIn;
}

/* Мобильная верстка */

@media screen and (width <= 812px) {
    .form-block {
        width: calc(var(--mob-column) * 11);
        flex-direction: column;

        & .form-block-left {
            width: 100%;

            & .logo {
                width: 40%;
                display: block;
                margin: 0 auto;
                margin-bottom: 20px;
            }

            & .text {
                text-align: center;
                font-size: .8em;
                margin-bottom: 20px;
            }
        }

        & .form-block-right {
            width: 100%;

            & label {
                text-align: center;
                font-size: .8em;
            }

            & textarea {
                font-size: .8em;
            }
        }
    }
}


</style>
