<template lang="html">
    <div class="form">
        <transition name="fade" mode="out-in">
            <img v-if="loading" :class="[loading ? 'loading-animated': '', 'loading']" src="./../assets/img/nnz_letter_logo.svg" alt="">
            <form v-else-if="!loading && authorized" action="">
                <input type="text" class="name" placeholder="ФИО получателя" v-model="sendData.name">
                <input type="text" name="email" class="email" placeholder="Email получателя" v-model="sendData.email">
                <button type="submit" @click.prevent="sendForm">Отправить</button>
            </form>
        </transition>
    </div>
</template>

<script>
export default {

    data() {
        return {
            loading: false,
            user: null,
            authorized: false,
            sendData: {
                name: '',
                email: ''
            }
        }
    },

    methods: {
        sendForm() {

        }
    },

    beforeCreate() {
        let token = localStorage.getItem('tkn');
        if(token) {
            this.loading = true;
            this.$http.post(`/auth/check/${token}`)
                .then( res => {
                    console.log(res);
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

    & > * {
        display: block;
        width: 80%;
        margin-bottom: 40px;
        text-align: center;
    }

    & > input {
        border: none;
        border-bottom: 2px solid var(--grey);
        font-size: 1rem;
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
