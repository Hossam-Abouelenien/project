
const form = document.querySelector('.form form');
const userName = document.querySelector("[name='username']");
const phone = document.querySelector("[name='Phone']");
const email = document.querySelector("[name='email']");
const subject = document.querySelector("[name='Subject']");
const msg = document.querySelector("[name='message']");


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});



/**error */
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

/**success */
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

/**email validation */
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const userNameValue = userName.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = msg.value.trim();
    if (userNameValue === '') {
        setError(userName, 'Name is required');
    } else {
        setSuccess(userName);
    }/**name */

    if (emailValue === '') {
        setError(email, 'Email is required')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'provide a valid email address');
    } else {
        setSuccess(email);
    }/**email */

    if (phoneValue === '') {
        setError(phone, 'phone is required');
    } else {
        setSuccess(phone);
    }/**phone */

    if (subjectValue === '') {
        setError(subject, 'subject is required');
    } else {
        setSuccess(subject);
    }/**subject */


    if (messageValue === '') {
        setError(msg, 'message is required');
    } else {
        setSuccess(msg);
    }/**message */
};
