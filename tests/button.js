
	const State = { clicked: false };
	const domContainer = document.querySelector('#container');

	Button().to(domContainer, 'innerHTML');

	function Button() {
		return s`
			<button click=${() => State.clicked = true}>
				Click
			</button>
		`;
	}
