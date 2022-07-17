const DAY = 24 * 60 * 60 * 1000;

/**
 * Запись параметра в куки
 * 
 * @param {String} name - Имя параметра
 * @param {String} value - Значение параметра
 * @param {Number} days - Время жизни в днях
 */
export function writeCookie(name, value, days) {
    let date, expires;

    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * DAY));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }

    document.cookie = name + "=" + value + expires + "; path=/";
}

/**
 * Вычитываем параметр куки
 * 
 * @param {String} name - Имя параметра
 * @returns 
 */
export function readCookie(name) {
    let i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for(i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return '';
}
