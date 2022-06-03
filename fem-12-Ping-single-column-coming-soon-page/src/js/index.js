const submitBtn = document.querySelector('.btn');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error');

console.log(emailInput.validity);

submitBtn.addEventListener('click', event => {
	if (emailInput.value === '' || emailInput.validity.typeMismatch) {
		emailInput.style.border = '2px solid hsl(354, 100%, 66%)';
		errorMessage.style.display = 'block';
		event.preventDefault();
	}
});
