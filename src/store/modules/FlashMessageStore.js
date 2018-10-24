export const flashMessage = {
    state: {
        message: '', //Сообщение
        status: '', //Статус: 'error', 'success', 'notification',
        timeoutId: 0
    },

    mutations: {
        //устанавливаем данные flashMessage
        showFlashMessage(state, payload) {
            if(state.message.length === 0) {
                state.message = payload.message;
                state.status = payload.status;
                let tiemouteId = setTimeout( () => {
                    state.message = '';
                    state.status = '';
                }, 8000);
                state.timeoutId = tiemouteId;
            }
            else {
                state.message = '';
                setTimeout( () => {
                    clearTimeout(state.timeoutId);
                    state.message = payload.message;
                    state.status = payload.status;
                    let timeoutId = setTimeout( () => {
                        state.message = '';
                        state.status = '';
                    }, 8000);
                    state.timeoutId = timeoutId;
                }, 1000);
            }
        }
    }
}
