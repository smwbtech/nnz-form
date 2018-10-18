<template lang="html">
    <div class="form">
        <p v-if="authorized">SendForm</p>
    </div>
</template>

<script>
export default {

    data() {
        return {
            user: null,
            authorized: false
        }
    },

    beforeCreate() {
        let token = localStorage.getItem('tkn');
        if(token) {
            this.$http.post(`/auth/check/${token}`)
                .then( res => {
                    console.log(res);
                    let {data, status, error} = res.data;
                    if(status) {
                        this.user = data;
                        this.authorized = true;
                    }
                    else{
                        this.$router.push('/login');
                    }
                })
                .catch( e => {

                });
        }
        else {
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="css" scoped>
</style>
