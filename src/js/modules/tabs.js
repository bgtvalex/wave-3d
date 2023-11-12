function tabs () {

	const btn1 = document.getElementById('btn-1')
	const btn2 = document.getElementById('btn-2')
	const tab1 = document.getElementById('tab-1')
	const tab2 = document.getElementById('tab-2')

	btn1.addEventListener('click', () => {
		if(!btn1.classList.contains('board__btn--active')) {
			btn1.classList.add('board__btn--active')
			tab1.classList.add('board__content--active')
			
			btn2.classList.remove('board__btn--active')
			tab2.classList.remove('board__content--active')
		}
	})

	btn2.addEventListener('click', () => {
		if(!btn2.classList.contains('board__btn--active')) {
			btn2.classList.add('board__btn--active')
			tab2.classList.add('board__content--active')
			
			btn1.classList.remove('board__btn--active')
			tab1.classList.remove('board__content--active')
		}
	})


}

export default tabs