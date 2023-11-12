import IMask from 'imask'

function maskForm() {
 
  const inpText = document.getElementById('inpText')
  const inpTel = document.getElementById('inpTel')

  inpText.addEventListener('focus', () => {
    document.querySelector('.form__label--name').classList.add('active')
  })

  inpText.addEventListener('blur', () => {
    if (!inpText.value.length > 0) {
      document.querySelector('.form__label--name').classList.remove('active')
    }
  })

  inpTel.addEventListener('focus', () => {
    document.querySelector('.form__label--tel').classList.add('active')

    mask.updateOptions({
      mask: '+7(000)000-00-00',
      lazy: false, // make placeholder always visible
      placeholderChar: '_',
    })
  })

  inpTel.addEventListener('blur', () => {
    if (inpTel.value !== '+7(___)___-__-__') {
      inpTel.value = mask.value
    } else {
      document.querySelector('.form__label--tel').classList.remove('active')
      mask.updateOptions({
        mask: '',
        lazy: false, // make placeholder always visible
        placeholderChar: '_',
      })
    }
  })

  let mask = IMask(inpTel, {
    mask: '',
    lazy: false, // make placeholder always visible
    placeholderChar: '_',
  })
}

export default maskForm
