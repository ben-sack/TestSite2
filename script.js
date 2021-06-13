const spans = document.querySelectorAll('.main-container span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});

function showMenu(){
	document.getElementById('nav-wrapper').style.visibility = 'visible'
	console.log('it works')
}
