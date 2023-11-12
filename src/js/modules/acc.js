function acc () {
	const items = document.querySelectorAll('.acc__item')
	
	items.forEach(item => {
		item.addEventListener('click', (e) => {
			e.currentTarget.querySelector('.acc__body').classList.toggle('active')
			e.currentTarget.querySelector('.acc__img').classList.toggle('active')
		})
	})
}

export default acc