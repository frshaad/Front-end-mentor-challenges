const submit = document.querySelector('button');
const ratingCard = document.querySelector('.rating-card');
const thankCard = document.querySelector('.thank-card');
const labels = document.querySelectorAll('label');
const userRatingText = document.querySelector('.user-rating');
let userRating;

labels.forEach(label => {
	label.addEventListener('click', () => {
		labels.forEach(label => {
			if (label.classList.contains('active-rating')) {
				label.classList.remove('active-rating');
			}
		});
		label.classList.add('active-rating');
		userRating = label.innerText;
	});
});

submit.addEventListener('click', () => {
	userRatingText.innerText = `You selected ${userRating} out of 5`;
	ratingCard.style.display = 'none';
	thankCard.style.display = 'flex';
});
