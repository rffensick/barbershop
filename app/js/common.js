$(function() {

	// var hf = function() {
	// 	var h_header = $('header').height();
	// 	var h_footer = $('footer').height();
	// 	$('.content').css({
	// 		'paddingTop': h_header,
	// 		'paddingBottom': h_footer
	// 	});
	// }

	// $(window).bind('load resize', hf)

});

// MENU

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var openMenu = document.querySelector('.main-nav__user-login');
var popupLogin = document.querySelector('.popup-login');
var closeBtn = document.querySelector('.popup-login__close-btn');
var login = document.querySelector('[name=login]');
var password = document.querySelector('[name=password]');
var form = document.querySelector('.popup-login__form');

navMain.classList.remove('main-nav--nojs');

// ESC
window.addEventListener('keydown', function(e) {
	if (e.keyCode === 27) {
		if (popupLogin.classList.contains('popup-login--opened')) {
			popupLogin.classList.remove('popup-login--opened')
			popupLogin.classList.add('popup-login--closed')
		}
	}
});

// SUBMIT
form.addEventListener('submit', function(e) {
	if (!login.value || !password.value) {
		e.preventDefault();
		popupLogin.classList.add('popup-login--error')
		setTimeout(function() {
			popupLogin.classList.remove('popup-login--error');
		}, 500);
	}
});

navToggle.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	}
})

navToggle.addEventListener('click', function() {
	if (popupLogin.classList.contains('popup-login--opened')) {
		popupLogin.classList.remove('popup-login--opened');
		popupLogin.classList.add('popup-login--closed');
	} else {
		popupLogin.classList.add('popup-login--closed');
		popupLogin.classList.remove('popup-login--opened');
	}
})

// END MENU

// POPUP!



openMenu.addEventListener('click', function(e) {
	e.preventDefault();
	if (popupLogin.classList.contains('popup-login--closed')) {
		popupLogin.classList.remove('popup-login--closed');
		popupLogin.classList.add('popup-login--opened');
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}	else {
		popupLogin.classList.add('popup-login--closed');
		popupLogin.classList.remove('popup-login--opened');
		navMain.classList.add('main-nav--opened');
		navMain.classList.remove('main-nav--closed');
	}
	login.focus();
});

closeBtn.addEventListener('click', function() {
	if (popupLogin.classList.contains('popup-login--opened')) {
		popupLogin.classList.remove('popup-login--opened');
		popupLogin.classList.add('popup-login--closed');
	} else {
		popupLogin.classList.add('popup-login--opened');
		popupLogin.classList.remove('popup-login--closed');
	}
});

// END POPUP
