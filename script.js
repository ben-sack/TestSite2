//Swup (page transitions)
const swup = new Swup();

// Hide initial welcome animation
var welcome = document.getElementById('hide-me')

function hideWelcome(){
	if (welcome.style.visibility == 'visible'){
		setTimeout(function(){welcome.style.opacity = 0.8},100)
		setTimeout(function(){welcome.style.opacity = 0.6},200)
		setTimeout(function(){welcome.style.opacity = 0.4},300)
		setTimeout(function(){welcome.style.opacity = 0.2},400)
		setTimeout(function(){welcome.style.opacity = 0},500)
		setTimeout(function(){welcome.style.visibility = 'hidden'},500)
	}
}
setTimeout(hideWelcome,7000)

//Welcome Animation
const spans = document.querySelectorAll('.welcome-container span')
function animateLetter() {
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
		}, 750 * (idx + 1))
	});
}
//Show menu items function
var l1 = document.getElementById('li1')
var l2 = document.getElementById('li2')
var l3 = document.getElementById('li3')
var menu = document.getElementById('menu-wrapper')




// Shows main content after welcome message
var content1 = document.getElementById('content1')
var content2 = document.getElementById('content2')
var main_content = document.getElementById('main-content')
var delay_text = document.getElementById('delay-text')
var delay_text2 = document.getElementById('delay-text2')

//hide content function with delay + opacity to cause blur effect
function hide() {
	if (content1 !== null) {
		if (content1.style.visibility == 'visible') {
			setTimeout(function () { content1.style.opacity = 0.8 }, 100)
			setTimeout(function () { content1.style.opacity = 0.6 }, 200)
			setTimeout(function () { content1.style.opacity = 0.4 }, 300)
			setTimeout(function () { content1.style.opacity = 0.2 }, 400)
			setTimeout(function () { content1.style.opacity = 0 }, 500)
		}
	}
}
function hide2(){
	if (content1 !== null) {
		if (content2.style.visibility == 'visible') {
			setTimeout(function () { content2.style.opacity = 0.8 }, 100)
			setTimeout(function () { content2.style.opacity = 0.6 }, 200)
			setTimeout(function () { content2.style.opacity = 0.4 }, 300)
			setTimeout(function () { content2.style.opacity = 0.2 }, 400)
			setTimeout(function () { content2.style.opacity = 0 }, 500)
		}
	}
}
// function hide3(){
// 	if (main_content.style.visibility == 'visible'){
// 		setTimeout(function(){main_content.style.opacity = 0.8},100)
// 		setTimeout(function(){main_content.style.opacity = 0.6},200)
// 		setTimeout(function(){main_content.style.opacity = 0.4},300)
// 		setTimeout(function(){main_content.style.opacity = 0.2},400)
// 		setTimeout(function(){main_content.style.opacity = 0},500)
// 	}
// }

//show content1 after 7 seconds
setTimeout(function(){content1.style.visibility = 'visible'}, 7700) 
//hide content1 after 13 seconds
setTimeout(hide, 9700)
//show content2 after 13.5
setTimeout(function(){content2.style.visibility = 'visible'}, 10200) 
//hide content after 11.5
setTimeout(hide2, 12300)
//show main_content
setTimeout(function(){main_content.style.visibility = 'visible'}, 13000)

//Gallery
var option = document.querySelector(".option")

//wrapped in javascript funtion
function gallery() {
	$(".option").click(function () {
		$(".option").removeClass("active");
		$(this).addClass("active");
	});
}
setTimeout(gallery,1)



function init() {

	//theme options
	let theme = localStorage.getItem('theme')
	if(theme == null){
		setTheme('light')
	}else{
		setTheme(theme)
	}

	let themeDots = document.getElementsByClassName('theme-dot')
	for (var i=0; themeDots.length > i; i++){
		themeDots[i].addEventListener('click', function(){
			let mode = this.dataset.mode
			console.log('Option clicked:', mode)
			setTheme(mode)
		})
	}

	function setTheme(mode){
		if(mode == 'light'){
			document.getElementById('theme-style').href = 'default.css'
		}

		if(mode == 'blue'){
			document.getElementById('theme-style').href = 'blue.css'
		}

		if(mode == 'green'){
			document.getElementById('theme-style').href = 'green.css'
		}

		if(mode == 'purple'){
			document.getElementById('theme-style').href = 'purple.css'
		}

		localStorage.setItem('theme', mode)
	}

	setTimeout(gallery,1)
};

init();
document.addEventListener('swup:contentReplaced', init);

// toggles menu item visibility by cheacking length of class list (0 or >0)
function toggleMenu(){
	const lis = document.querySelectorAll('#nav-wrapper li')

	function showMenu(){
		lis.forEach((li, idx) => {
			li.classList.add('appear')
		});
	};

	function hideMenu(){
		lis.forEach((li, idx) => {
			li.classList.remove('appear')	
		});
	};

	var a = document.getElementsByClassName('appear')
	if (a.length == 0){
		showMenu()
	} else{
		hideMenu()
	};
}
