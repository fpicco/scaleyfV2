const togglePassword = document.querySelector('#eye-icon-strategy');
const pinStrategy = document.querySelector('#pin-strategy');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = pinStrategy.getAttribute('type') === 'password' ? 'text' : 'password';
    pinStrategy.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
});