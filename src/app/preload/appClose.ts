export const appClose = () => {
	const closeButton = document.querySelector('.close-button');

	if (closeButton !== null) {
		closeButton.addEventListener('click', () => {
			window.close();
		});
	}
};
