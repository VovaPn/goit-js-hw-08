import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea'); 
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
    'input', throttle(e => {
        const savedObject = { email: email.value, message: message.value };
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedObject));
    }, 500)
);

form.addEventListener(
    'submit', e => {
        e.preventDefault();
        console.log({ email: email.value, message: message.value });
        form.reset();
        localStorage.removeItem(LOCALSTORAGE_KEY);
    }
);

const load = key => {
    try {
        const serState = localStorage.getItem(key);
        return serState === null ? undefined : JSON.parse(serState);
    } catch (error) {
        console.error('Get state error: ', error.message)
    }
};


const savedDate = load(LOCALSTORAGE_KEY);
if (savedDate) {
    email.value = savedDate.email;
    message.value = savedDate.message;
}




