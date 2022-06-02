const submitBtn = document.querySelector('.interactive__signup__submit');
const inputs = document.querySelectorAll('input');
const fNameInput = document.getElementById('fName');
const fNameErrors = document.querySelectorAll('.fname-error');
const lNameInput = document.getElementById('lName');
const lNameErrors = document.querySelectorAll('.lname-error');
const emailInput = document.getElementById('email');
const emailErrors = document.querySelectorAll('.email-error');
const passwordInput = document.getElementById('password');
const passwordErrors = document.querySelectorAll('.pass-error');

submitBtn.addEventListener('click', () => {
	if (fNameInput.value === '') {
		fNameErrors.forEach(fnameError => {
			fnameError.style.display = 'block';
			fNameInput.style.border = '3px solid hsl(0, 100%, 74%)';
		});
	}

	if (lNameInput.value === '') {
		lNameErrors.forEach(lnameError => {
			lnameError.style.display = 'block';
			lNameInput.style.border = '3px solid hsl(0, 100%, 74%)';
		});
	}

	if (emailInput.value === '' || emailInput.validity.typeMismatch) {
		emailErrors.forEach(emailError => {
			emailError.style.display = 'block';
			emailInput.style.border = '3px solid hsl(0, 100%, 74%)';
		});
	}

	if (passwordInput.value === '') {
		passwordErrors.forEach(passwordError => {
			passwordError.style.display = 'block';
			passwordInput.style.border = '3px solid hsl(0, 100%, 74%)';
		});
	}
});
