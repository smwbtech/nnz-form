export function sendFormValidation(dataObj) {

    let check = {
        status: true,
        message: ''
    };

    for(const prop in dataObj) {
        switch (prop) {
            case 'name':
                check.status = nameValidation(dataObj.name);
                if(!check.status) {
                    check.message = 'Поле ФИО должно быть заполнено и содержать Фамилию Имя / Фамилию Имя Отчество пользователя, указнанные через пробел';
                    return check;
                }
                break;
            case 'email':
                check.status = emailValidation(dataObj.email);
                if(!check.status) {
                    check.message = 'Поле email должно быть заполнено и должно содержать email формата email@adress.ru';
                    return check;
                }
                break;
        }
    }

    return check;
}

/**
 * Валидация ФИО
 * @param  {String} name    - ФИО пользователя, которому отправится ссылка на опрос
 * @return {Boolean}
 */
function nameValidation(name) {
    const pattern = /^([а-я]+\s[а-я]|(([а-я]+\s){2}[а-я]+))$/ig;
    return pattern.test(name.trim());
}

/**
 * Валидация email
 * @param  {String} email   - email пользователя, которому отправится ссылка на опрос
 * @return {Boolean}
 */
function emailValidation(email) {
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}
