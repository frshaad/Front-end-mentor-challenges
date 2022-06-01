const shareBtn = document.querySelector('.content__author__btn');
const desktopToolTip = document.querySelector('.content__author__shared--desktop');
const mobileToolTip = document.querySelector('.content__author__shared--mobile');

shareBtn.addEventListener('click', () => {
	desktopToolTip.style.display = 'flex';
	mobileToolTip.style.display = 'flex';
});
