function headerShow () {

	window.onscroll = function (e) {
		if ( window.scrollY > 100) {
			document.querySelector('.header-fixed').classList.add('active')
		} else {
			document.querySelector('.header-fixed').classList.remove('active')
		}
	}
}

export default headerShow