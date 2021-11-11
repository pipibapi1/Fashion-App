let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cart.classList.remove('active');
}
let cart = document.querySelector('.shopping-card');
document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  header__menu.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    header__menu.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.products .box-container .box');

filterBtn.forEach(button =>{

  button.onclick = () =>{
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let dataFilter = button.getAttribute('data-filter');
    
    filterItem.forEach(item =>{

      item.classList.remove('active');
      item.classList.add('hide');

      if(item.getAttribute('data-item').indexOf(dataFilter) > -1  || dataFilter == 'all'){
        item.classList.remove('hide');
        item.classList.add('active');
      }

    });

  };

});

let linkfilterBtn = document.querySelectorAll('.filterLink');
linkfilterBtn.forEach(button =>{

  button.onclick = () =>{
    filterBtn.forEach(btn => {
      if (btn.getAttribute('data-filter') === button.getAttribute('data-filter')) {
        btn.classList.add('active');
      }
      else btn.classList.remove('active');
    });
    button.classList.add('active');

    let dataFilter = button.getAttribute('data-filter');
    
    filterItem.forEach(item =>{

      item.classList.remove('active');
      item.classList.add('hide');

      if(item.getAttribute('data-item').indexOf(dataFilter) > -1  || dataFilter == 'all'){
        item.classList.remove('hide');
        item.classList.add('active');
      }

    });

  };

});

// const loader = document.querySelector('.loader');


// const submitBtn = document.querySelector('.submit-btn1');
// const name = document.querySelector('#name');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const number = document.querySelector('#number');


// submitBtn.onClick = ()=>{
//     if(name != null){
//         if(name.value.length < 3){
//             showAlert('name must be 3 letters long');
//         } else if(!email.value.length){
//             showAlert('enter your mail');
//         } else if(password.value.length < 6){
//             showAlert('password should be 8 letters long');
//         } else if(!number.value.length){
//             showAlert('enter your phone number');
//         } else if(!Number(number.value) || number.value.length < 10){
//             showAlert('invalid number, please enter valid one');
//         // } else {
//         //     loader.style.display = 'block';
//         //     sendData('/signup',{
//         //         name: name.value,
//         //         email: email.value,
//         //         password: password.value,
//         //         number: number.value,
//         //         seller: false
//         //     })
//         }
//     } else{
//         //login page
//         if(!email.value.length || !password.value.length){
//             showAlert('fill your account');
//         // } else{
//         //     loader.style.display = 'block';
//         //     sendData('/login',{
//         //         email: email.value,
//         //         password: password.value,
//         //     })
//         // }
//     }
// }}


var swiper = new Swiper(".home-slider", {
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".featured-slider", {
  centeredSlides: true,
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".review-slide", {
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  centeredSlides: true,
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// const showAlert = (msg) => {
//   let alertBox = document.querySelector('.alert-box');
//   let alertMsg = document.querySelector('.alert-msg');
//   alertMsg.innerHTML = msg;
//   alertBox.classList.add('show');
//   setTimeout(()=>{
//       alertBox.classList.remove('show');
//   },3000);
// }