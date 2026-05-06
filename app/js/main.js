const swiper = new Swiper('.accessories__slider', {

  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  // Navigation arrows
  navigation: {
    nextEl: '.accessories__arrow-next',
    prevEl: '.accessories__arrow-prev',
  },
});

const swiperReviews = new Swiper('.reviews__slider', {

  loop: true,
  slidesPerView: 10,
  spaceBetween: 16,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__arrow-next',
    prevEl: '.reviews__arrow-prev',
  },
  pagination: {
    el: ".reviews__pagination",
    type: "fraction",
  },

   breakpoints: {
        0: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 8,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 12,
          spaceBetween: 16,
        },
      },

});

const rangeSlider = document.querySelector('.range__slider');
if (rangeSlider) {
  const inputMin = document.querySelector('.range__min');
  const inputMax = document.querySelector('.range__max');
  const inputs = [inputMin, inputMax];

  noUiSlider.create(rangeSlider, {
    start: [300, 3000],
    step: 100,
    range: {
      'min': 300,
      'max': 3000
    },
    format: {
      to: value => Math.round(value),
      from: value => Number(value)
    }
  });
  rangeSlider.noUiSlider.on('update',
    (values, handle) => {
      inputs[handle].value = values[handle];
    });
  inputs.forEach((input, index) => {
    input.addEventListener('change', () => {
      rangeSlider.noUiSlider.setHandle(index, input.value);
    });
  });

}

const headerBtn = document.querySelector('.header__btn');
const menu = document.querySelector('.menu');

headerBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active')
});

const modeContainer = document.querySelectorAll('.view-mode__container');
const modeBtnGrid = document.querySelectorAll('.view-mode__btn--grid');
const modeBtnLine = document.querySelectorAll('.view-mode__btn--line');




if (modeBtnGrid.length > 0) {
  modeBtnGrid.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('контейнеров не найдено:',
        modeContainer.length);

      modeContainer.forEach(container => {
        container.classList.add('view-mode__container--grid');
        container.classList.remove('view-mode__container--line');
      });
    });
  });
}

if (modeBtnLine.length > 0) {
  modeBtnLine.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('click line');
      modeContainer.forEach(container => {
        container.classList.add('view-mode__container--line');
        container.classList.remove('view-mode__container--grid');
      });
    });
  });
}