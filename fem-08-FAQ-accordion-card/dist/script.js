const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
	box.addEventListener('click', () => {
		if (box.classList.contains('active')) {
			box.classList.remove('active');
		} else {
			boxes.forEach(box => {
				if (box.classList.contains('active')) {
					box.classList.remove('active');
				}
			});
			box.classList.add('active');
		}
	});
});
