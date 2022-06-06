const url = 'https://api.adviceslip.com/advice';
const diceBtn = document.querySelector('.dice-container');
const adviceId = document.querySelector('.advice-id');
const quote = document.querySelector('.quote');

diceBtn.addEventListener('click', () => {
	fetch(url, { method: 'GET' })
		.then(response => response.json())
		.then(data => {
			adviceId.innerHTML = data.slip.id;
			quote.innerHTML = data.slip.advice;
		})
		.catch(error => console.log(error));
});
