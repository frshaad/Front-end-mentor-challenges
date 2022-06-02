const submitBtn = document.querySelector('.interactive__signup__submit');
const inputs = document.querySelectorAll('input');

submitBtn.addEventListener('click', () => {
	inputs.forEach(input => {
		console.log(input.value);
		if (input.value === '' && input.hasAttribute('required')) {
			console.log('ok');
		}
	});
});
