const button = document.getElementById('box-button');

console.log(button);

let count = 0;

button.addEventListener('click', () => {
	console.log('you clicked!');
	count++;
	button.textContent = count;
});