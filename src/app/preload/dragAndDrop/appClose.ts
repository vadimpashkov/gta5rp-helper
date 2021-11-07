export const appClose = () => {
	const closeButton = document.querySelector('.drag-panel__close');

	closeButton.addEventListener('click', () => {
		window.close();
	});
};
