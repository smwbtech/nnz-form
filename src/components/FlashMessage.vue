<template lang="html">

    <div :class="{success: status === 'success', error: status === 'error', notification: status === 'notification'}">
        <p>{{message}}</p>
    </div>

</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        //Статус flashMessage
        status() {
            return this.$store.state.flashMessage.status;
        },
        //Сообщение
        message() {
            return this.$store.state.flashMessage.message;
        }
    }
}
</script>

<style lang="css" scoped>

    @import './../assets/css/variables.css';

    div {
        position: fixed;
        z-index: 300;
        bottom: 20px;
        right: 20px;
        padding: 20px;
        padding-left: 100px;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
        max-width: calc(var(--column) * 8);
        &:before {
            position: absolute;
            left: 20px;
            top: 0;
            display: block;
            content: "";
            width: 60px;
            height: 100%;
            background-position: center;
            background-size: 90%;
            background-repeat: no-repeat;
        }
        &.success {
            background-color: rgba(var(--dark-green-rgb), 0.68);
        }
        &.success:before {
            background-image: url('./../assets/img/success.svg');
        }
        &.error{
            background-color: rgba(var(--orange-rgb), 0.68);
        }
        &.error:before{
            background-image: url('./../assets/img/warning.svg');
        }
        &.notification {
            background-color: rgba(var(--dark-blue-rgb), 0.68);
        }
        &.notification:before {
            background-image: url('./../assets/img/light-bulb.svg');
        }
        & p {
            color: #fff;
            text-align: left;
        }
    }
</style>
