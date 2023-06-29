const registerBtn = document.querySelector('.header__navbar-register-btn')
const loginBtn = document.querySelector('.header__navbar-login-btn')

const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal__overlay')
const registerForm = document.querySelector('.auth-form__register-form')
const loginForm = document.querySelector('.auth-form__login-form')
const switchBtns = document.querySelectorAll('.auth-form__switch-btn')

registerBtn.onclick = () => {
  modal.style.display = 'flex'
  registerForm.style.display = 'block'
}

loginBtn.onclick = () => {
  modal.style.display = 'flex'
  loginForm.style.display = 'block'
}

modalOverlay.onclick = () => {
  modal.style.display = 'none'
  registerForm.style.display = 'none'
  loginForm.style.display = 'none'
}

switchBtns.forEach(function (switchBtn) {
  switchBtn.onclick = () => {
    if (registerForm.style.display == 'block') {
      registerForm.style.display = 'none'
      loginForm.style.display = 'block'
    } else {
      registerForm.style.display = 'block'
      loginForm.style.display = 'none'
    }
  }
})
