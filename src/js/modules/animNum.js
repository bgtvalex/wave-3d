function animNum() {
    const numberObserver = new IntersectionObserver( (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.getAttribute('data-val') 
                let count
                let start = 0
                let end = parseInt(entry.target.getAttribute('data-val'))
                end > 100 ? count = parseInt(end / 100) : count = 1
                let counter = setInterval(function() {
                    start += count
                    entry.target.textContent = start
                    if (start == end) {
                        clearInterval(counter)
                    }
                }, 20)
            }
        })
    })
    document.querySelectorAll('.i-card__count').forEach( (num) => numberObserver.observe(num))
}
		
export default animNum
// 	function anime() {

// 		const nums = document.querySelectorAll('.i-card__count')
		
// 		nums.forEach(num => {
// 			let count
// 			let start = 0
// 			let end = parseInt(num.getAttribute("data-val"))
			
// 			end > 100 ? count = parseInt(end / 100) : count = 1
			
// 			let counter = setInterval(function() {
// 				start += count
// 				num.textContent = start
// 				if (start == end) {
// 					clearInterval(counter)
// 				}
// 			}, 20)
// 		})
	// }
