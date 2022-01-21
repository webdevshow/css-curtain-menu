window.addEventListener('DOMContentLoaded', () => {
	const closeBtn = document.querySelector('#close-btn');

	const curtain = document.querySelector('#curtain');

	const showMenuButton = document.querySelector('#button');

	showMenuButton.addEventListener('click', () => {
		curtain.classList.add('show');
	});

	closeBtn.addEventListener('click', () => {
		curtain.classList.remove('show');
	});
});
