window.onload = function () {
	$('.carousel').carousel()	
}

let mobmenu = document.querySelector('.mobnav')
let ham = document.querySelector('.ham')
let s1 = document.querySelector('.s1')
let s2 = document.querySelector('.s2')
let s3 = document.querySelector('.s3')
let ccn = document.querySelector('.carousel-control-next')
ham.addEventListener('click',()=>{
	mobmenu.classList.toggle('active')
	s1.classList.toggle('active')
	s2.classList.toggle('active')
	s3.classList.toggle('active')
	if (ccn.style.zIndex==="100000") {
		ccn.style.zIndex="10000000"
	}
	else
	{
		ccn.style.zIndex="100000"
	}
	

});
ScrollReveal().reveal('.reveal');
