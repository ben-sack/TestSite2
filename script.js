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

	setTimeout(function(){document.getElementById('li1').style.visibility = 'visible'},1000)
	setTimeout(function(){document.getElementById('li2').style.visibility = 'visible'},1500)
	setTimeout(function(){document.getElementById('li3').style.visibility = 'visible'},2000)

	//document.getElementById('menu-wrapper').style.visibility = 'hidden'
}

