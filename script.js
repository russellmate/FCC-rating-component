const ratingContainer = document.querySelector('.rating-container');
const thanksContainer = document.querySelector('.thanks-container');
const submit = document
	.querySelector('.submit')
	.addEventListener('click', () => {
		ratingContainer.style.cssText = 'display:none;';
		thanksContainer.style.cssText =
			'display:flex;flex-direction:column;justify-content:center;align-items:center;';
	});

const ratingBtns = document.querySelector('.rate-btns');
const rating = document.querySelectorAll('.rating');
for (const current of rating) {
	current.addEventListener('click', () => {
		current.classList.add('active');
		ratingBtns.style.cssText = 'pointer-events:none;';
	});
}

const chosenRating = document.querySelector('.chosen-rating');
const one = document.getElementById('btn1').addEventListener('click', () => {
	chosenRating.textContent += '1';
});
const two = document.getElementById('btn2').addEventListener('click', () => {
	chosenRating.textContent += '2';
});
const three = document.getElementById('btn3').addEventListener('click', () => {
	chosenRating.textContent += '3';
});
const four = document.getElementById('btn4').addEventListener('click', () => {
	chosenRating.textContent += '4';
});
const five = document.getElementById('btn5').addEventListener('click', () => {
	chosenRating.textContent += '5';
});
