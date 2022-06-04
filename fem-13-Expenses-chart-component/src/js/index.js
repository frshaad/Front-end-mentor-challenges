const dataBars = document.querySelectorAll('.chart__bar__datas__data');
const spends = document.querySelectorAll('.spend');

fetch('../data.json')
	.then(data => data.json())
	.then(arr => {
		let sortArr = [];
		for (let j = 0; j < arr.length; j++) {
			sortArr.push(arr[j].amount);
		}
		let max = Math.max.apply(null, sortArr);
		let maxIndex = sortArr.indexOf(max);

		for (let i = 0; i < arr.length; i++) {
			let height = Math.round((arr[i].amount / max) * 140);
			dataBars[i].style.height = `${height}px`;
			spends[i].innerHTML = `$${arr[i].amount}`;
		}
		dataBars[maxIndex].classList.add('max-spend');
		spends.forEach(spend => {
			if (spend.innerHTML === '') {
				spend.style.display = 'block';
			}
		});
	});
