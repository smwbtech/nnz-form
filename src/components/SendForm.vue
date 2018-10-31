<template lang="html">
    <div class="form">
        <transition name="fade" mode="out-in">
            <img v-if="loading" :class="[loading ? 'loading-animated': '', 'loading']" src="./../assets/img/nnz_letter_logo.svg" alt="">
            <form v-else-if="!loading && authorized" action="">
                <p class="warning">Внимание! Для правильного обращения в письме к клиенту соблюдайте строгий порядок заполнения данного поля:<br>Фамилия Имя или Фамилия Имя Отчество</p>
                <input type="text" class="name" placeholder="ФИО / ФИ получателя" v-model="sendData.name" :disabled="sendData.anonym === 'true'">
                <div :class="['options', sendData.anonym === 'true' ? 'disabled' : '']">
                    <p>Пол</p>
                    <input type="radio" value="male" id="gender_male" v-model="sendData.gender" :disabled="sendData.anonym === 'true'">
                    <label for="gender_male">Мужской</label>
                    <input type="radio" value="female" id="gender_female" v-model="sendData.gender" :disabled="sendData.anonym === 'true'">
                    <label for="gender_female">Женский</label>
                </div>
                <div class="options">
                    <p>Отправить без личного обращения</p>
                    <input type="radio" value="false" id="anonym_true" v-model="sendData.anonym">
                    <label for="anonym_true">Нет</label>
                    <input type="radio" value="true" id="anonym_false" v-model="sendData.anonym">
                    <label for="anonym_false">Да</label>
                </div>
                <input type="text" name="phone" class="phone" placeholder="Телефон получателя" v-model="sendData.phone">
                <input type="text" name="email" class="email" placeholder="Email получателя" v-model="sendData.email">
                <button type="submit" @click.prevent="sendForm">Отправить</button>
            </form>
        </transition>
    </div>
</template>

<script>

import { sendFormValidation } from './../assets/js/SendFormValidation.js';

export default {

    data() {
        return {
            loading: false,
            user: null,
            authorized: false,
            sendData: {
                name: '',
                anonym: 'false',
                gender: 'male',
                email: '',
                phone: ''
            }
        }
    },

    methods: {
        sendForm() {
            let sendData = this.sendData.anonym === 'false' ? {name: this.sendData.name, gender: this.sendData.gender, email: this.sendData.email, phone: this.sendData.phone, anonym: false} : {email: this.sendData.email, phone: this.sendData.phone, anonym: true};
            let check = sendFormValidation(sendData);
            if(check.status) {
                this.$http.post('/api/recepient/add', sendData)
                .then( res => {
                    console.log(res);
                    let {data, status, error} = res.data;
                    if(status) {
                        this.$store.commit('showFlashMessage', {status: 'success', message: 'Пользователь успешно добавлен в БД. Ссылка на опрос отправлена на указанный email'});
                        this.sendData = {
                            name: '',
                            anonym: 'false',
                            gender: 'male',
                            email: '',
                            phone: ''
                        };
                    }
                    else {
                        this.$store.commit('showFlashMessage', {status: 'error', message: error.message});
                    }
                })
                .catch(e => {
                    console.log(e);
                });
            }
            else {
                this.$store.commit('showFlashMessage', {status: 'error', message: check.message});
            }
        }
    },

    beforeCreate() {
        let token = localStorage.getItem('tkn');
        if(token) {
            this.loading = true;
            this.$http.post(`/auth/check/${token}`)
                .then( res => {
                    let {data, status, error} = res.data;
                    if(status) {
                        this.user = data;
                        this.authorized = true;
                        this.loading = false;
                    }
                    else{
                        this.$router.push('/login');
                    }
                })
                .catch( e => {
                    this.loading = false;
                    console.log(e);
                });
        }
        else {
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="css" scoped>

@import './../assets/css/variables.css';

form {
    display: flex;
    align-items: center;
    flex-flow: column;
    padding: 40px;
    position: relative;
    width: calc(var(--column) * 12);
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);

    & .warning {
        font-weight: bold;
        color: red;
    }

    & > * {
        display: block;
        width: 80%;
        margin-bottom: 40px;
        text-align: center;
    }

    & .options {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        transition: opacity .2s ease-in;

        &.disabled {
            opacity: .1;

            & label {
                cursor: auto;
            }
        }

        & p {
            width: 100%;
            font-weight: bold;
            text-align: center;
        }

        & input {
            display: none;
        }

        & label {
            margin: 0 20px;
            opacity: .5;
            transition: opacity .2s ease-in;
            cursor: pointer;
        }

        & input:checked + label {
            opacity: 1;
        }
    }

    & > input {
        border: none;
        border-bottom: 2px solid var(--grey);
        font-size: 1rem;
        transition: opacity .2s ease-in;
        background-color: #fff;
    }

    & input:disabled {
        opacity: .1;
        background-color: #fff;
    }

    & button {
        display: block;
        max-width: 40%;
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

/* Анимация окна подтверждения */
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}

.loading {
    opacity: .1;
}

.loading-animated {
    animation: load 1s ease-in infinite;
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

/* Анимация логотипа */

@-webkit-keyframes load {
    0% { opacity: .1;}
    50% { opacity: .5;}
    100% { opacity: .1;}
}
@-o-keyframes load {
    0% { opacity: .1;}
    50% { opacity: .5;}
    100% { opacity: .1;}
}
@-moz-keyframes load {
    0% { opacity: .1;}
    50% { opacity: .5;}
    100% { opacity: .1;}
}
@keyframes load {
    0% { opacity: .1;}
    50% { opacity: .5;}
    100% { opacity: .1;}
}

</style>
