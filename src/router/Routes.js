import Form from './../components/Form.vue';
import Login from './../components/Login.vue';
import SendForm from './../components/SendForm.vue';

export const routes = {
    mode: 'history',
    routes: [
        //Форма опроса
        {
            path: '/',
            component: Form
        },
        //Форма логина
        {
            path: '/login',
            component: Login
        },
        //Форма отправки опроса
        {
            path: '/send_form',
            component: SendForm
        }
    ]
}
