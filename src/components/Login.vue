<template lang="html">

    <form action="">
        <input type="text" class="login" placeholder="Email" v-model="email">
        <input type="password" name="" id="" class="password" placeholder="Password" v-model="password">
        <button type="submit" @click.prevent="login">Войти</button>
    </form>

</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        login() {
            if(!this.email || !this.password) {
                let message = 'Поле email и password не должны быть пустыми';
                this.$store.commit('showFlashMessage', {message, status: 'error'});
            }
            else {
                this.$http.post('/auth/login', {email: this.email, password: this.password})
                .then( res => {
                    let {status, data, error} = res.data;
                    if(status) {
                        localStorage.setItem('tkn', data);
                        this.$router.push('/send_form');
                    }
                    else {
                        let message = error.message;
                        console.log(error);
                        this.$store.commit('showFlashMessage', {message, status: 'error'});
                    }
                })
                .catch( e => {
                    console.log(e);
                });
            }
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

</style>
