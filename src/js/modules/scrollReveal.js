import ScrollReveal from 'scrollreveal'

// Базовые настройки
ScrollReveal({
  distance: '100px',
  duration: 2000,
})

ScrollReveal().reveal(`.start__title, .start__subtitle, .start__img, .btn, .steps__accent-title, .steps__cards, .board__content, .title-2, .acc__item, .about__desc, .diff__card-title, .diff__item, .i-card, .contacts__item, .form__input--wrapper, .footer__logo` , {
  origin: 'bottom',
})

export default ScrollReveal