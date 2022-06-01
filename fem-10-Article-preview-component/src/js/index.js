const shareBtn = document.querySelector('.content__author__btn');
const shareBtnSvg = document.querySelector('.content__author__btn--svg');
const desktopToolTip = document.querySelector('.content__author__shared--desktop');
const mobileToolTip = document.querySelector('.content__author__shared--mobile');

// shareBtn.addEventListener('click', () => {
// 	desktopToolTip.style.display = 'flex';
// 	mobileToolTip.style.display = 'flex';
// });

document.body.addEventListener('click', e => {
	if (
		e.target.classList.contains('content__author__btn') ||
		e.target.classList.contains('content__author__btn--svg')
	) {
		desktopToolTip.style.display = 'flex';
		mobileToolTip.style.display = 'flex';
	} else {
		desktopToolTip.style.display = 'none';
		mobileToolTip.style.display = 'none';
	}
});
