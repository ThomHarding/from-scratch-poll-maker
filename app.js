import { signIn, signUp } from './fetch-utils.js';

const signUpForm = document.getElementById('signup-form');
const signInForm = document.getElementById('signin-form');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const password = data.get('password');
    await signUp(email, password);
    window.location.href = './polls';
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const password = data.get('password');
    await signIn(email, password);
    window.location.href = './polls';
});