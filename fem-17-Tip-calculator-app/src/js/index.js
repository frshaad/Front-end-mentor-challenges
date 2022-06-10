const billInput = document.querySelector('.calc__bill__input');
const tips = document.querySelectorAll('.calc__tip__options p');
const customTips = document.querySelector('.custom-tip');
const peopleInput = document.querySelector('.calc__people__input');
const resetBtn = document.querySelector('.result__reset');
const personTipAmount = document.querySelector('.result__tip__number');
const personTotalAmount = document.querySelector('.result__total__number');
const errorMessage = document.querySelector('.error-message');

let selectedTip = 0;

tips.forEach(tip => {
	tip.addEventListener('click', () => {
		customTips.value = '';
		tips.forEach(tip => {
			if (tip.classList.contains('active-tip')) {
				tip.classList.remove('active-tip');
			}
		});

		selectedTip = parseInt(tip.firstChild.innerHTML);
		tip.classList.add('active-tip');
		console.log(selectedTip);
	});
});
console.log(customTips.value);

customTips.addEventListener('input', () => {
	tips.forEach(tip => {
		if (tip.classList.contains('active-tip')) {
			tip.classList.remove('active-tip');
		}
	});
	selectedTip = parseInt(customTips.value);
});

peopleInput.addEventListener('change', () => {
	let personTip = (parseFloat(billInput.value) * selectedTip) / 100 / parseInt(peopleInput.value);
	let personTotal = parseFloat(billInput.value) / parseInt(peopleInput.value) + personTip;

	personTipAmount.innerHTML = `$${parseFloat(personTip.toPrecision(3))}`;
	personTotalAmount.innerHTML = `$${parseFloat(personTotal.toPrecision(4))}`;
});

customTips.addEventListener('change', () => {
	if (peopleInput.value === '' && selectedTip === 0) {
		errorMessage.style.display = 'block';
		peopleInput.classList.add('error');
	} else {
		let personTip = (parseFloat(billInput.value) * selectedTip) / 100 / parseInt(peopleInput.value);
		let personTotal = parseFloat(billInput.value) / parseInt(peopleInput.value) + personTip;

		personTipAmount.innerHTML = `$${parseFloat(personTip.toPrecision(3))}`;
		personTotalAmount.innerHTML = `$${parseFloat(personTotal.toPrecision(4))}`;
	}
});

resetBtn.addEventListener('click', () => {
	billInput.value = '';
	peopleInput.value = '';
	customTips.value = '';
	personTipAmount.innerHTML = '$0.00';
	personTotalAmount.innerHTML = '$0.00';
	customTips.value = '';
});
