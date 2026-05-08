
const openBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const closeBtn = document.querySelector('.close-modal');

function handleOpenModal(){
  if(modal){
modal.setAttribute('aria-hidden','false');
document.documentElement.classList.add('scroll-lock');
document.body.classList.add('scroll-lock');
}
}

function handleCloseModal(){
  if(modal){
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('scroll-lock');
  document.documentElement.classList.remove('scroll-lock');
}
}

if(document.activeElement){
  document.activeElement.blur();
}


if(openBtn){
  openBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('click open');
    handleOpenModal(); 
  });
}
if(closeBtn){
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleCloseModal();
  });
}
if(modalOverlay){
  modalOverlay.addEventListener('click', (e) => {
    if(e.target === modalOverlay){
      handleCloseModal();
    }
  });
}

document.addEventListener('keydown', (e) => {

  if(e.key === 'Escape'){
const modalElement = document.querySelector('.modal');
if(modalElement && modalElement.getAttribute('aria-hidden') === 'false'){
  handleCloseModal();
  if(document.activeElement){
    document.activeElement.blur();
  }
}
}
});




 const openPopupBtn = document.querySelector('.catalog-popup');
 const popup = document.querySelector('.popup');
 const popupOverlay = document.querySelector('.popup__overlay');
const closePopupBtn = document.querySelector('.close-popup');

 function openPopup(){
   if(modal){
 popup.setAttribute('aria-hidden','false');
 document.documentElement.classList.add('scroll-lock');
 document.body.classList.add('scroll-lock');
}
 }

function closePopup(){
   if(modal){
  popup.setAttribute('aria-hidden','true');
   document.body.classList.remove('scroll-lock');
  document.documentElement.classList.remove('scroll-lock');
}
 }


 if(openPopupBtn){
   openPopupBtn.addEventListener('click',(e)=>{
     e.preventDefault();
     console.log('click open');
    openPopup(); 
  });
 }
 if(closePopupBtn){
   closePopupBtn.addEventListener('click', (e) => {
     e.preventDefault();
     e.stopPropagation();
     closePopup();
  });
 }
 if(popupOverlay){
  popupOverlay.addEventListener('click', (e) => {
     if(e.target === popupOverlay){
      closePopup();
     }
  });
 }

 document.addEventListener('keydown', (e) => {

   if(e.key = 'Escape' && popup.getAttribute ('aria-hidden') === 'false'){
    closePopup()

   }

 });



const breakpoint = window.matchMedia('(min-width: 600px)');
let sliderMobile = null;

function initSwiper() {
 sliderMobile = new Swiper('.slider-mobile', { 
 loop: true,
  slidesPerView: 1,
  
  navigation: {
    nextEl: '.product__arrow-next',
    prevEl: '.product__arrow-prev',
  },
});
}


function destroySwiper(){
if(sliderMobile){
sliderMobile.destroy(true,true);
sliderMobile = null;
}
}

function handleBreakpointChange(e){
if(e.matches){
destroySwiper();
}else{
if(!sliderMobile) initSwiper() ;
}
}

handleBreakpointChange(breakpoint);

breakpoint.addEventListener('change', handleBreakpointChange);


const swiper = new Swiper('.accessories__slider', {

  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
 
  navigation: {
    nextEl: '.accessories__arrow-next',
    prevEl: '.accessories__arrow-prev',
  },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
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