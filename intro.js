'use strict'

var ishiddenclass = 'hide',
	b = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);

var ms = 0;

document.onscroll = function(){
	var t = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0),
		a = t;

	var elements = document.querySelectorAll('.menu');

	elements.forEach(function(el) {
		if(a < b) {
			if (el.classList)
			  el.classList.remove(ishiddenclass);
			else
			  el.className = el.className.replace(new RegExp('(^|\\b)' + ishiddenclass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
		if(a > b) {
			if (el.classList)
			  el.classList.add(ishiddenclass);
			else
			  el.className += ' ' + ishiddenclass;
		}
	});

	b = a;
};