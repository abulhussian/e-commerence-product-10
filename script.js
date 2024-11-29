"use strict";
// const thumbnailImage1 = document.querySelector(".thumbnail-image-1");
// // console.log(thumbnailImage1);
// const thumbnailImage2 = document.querySelector(".thumbnail-image-2");
// const thumbnailImage3 = document.querySelector(".thumbnail-image-3");
// const thumbnailImage4 = document.querySelector(".thumbnail-image-4");

// const displayImage1 = document.querySelector(".display-image-1");
// // console.log(displayImage1);
// const displayImage2 = document.querySelector(".display-image-1");
// const displayImage3 = document.querySelector(".display-image-1");
// const displayImage4 = document.querySelector(".display-image-1");

const menu = document.querySelector(".menu-box");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".close-mobile");
const lighthouse = document.querySelector(".lighthouse"); // Ensure the selector matches your HTML

// console.log(lighthouse);

const fillCart = document.querySelector(".cart-filling");

let incearse = 0;
let grandtotal = 0;
const cartImg = document.querySelector(".img-cart");
const emptyCart = document.querySelector(".empty-card");

const slideslg = document.querySelectorAll(".slidelg");
const sliderlg = document.querySelector(".sliderlg");

const leftBtn = document.querySelector(".left-slide-btn");
console.log(leftBtn);
const rightBtn = document.querySelector(".right-slide-btn");
console.log(rightBtn);

const leftBtnlg = document.querySelector(".left-slide-btnlg");
const rightBtnlg = document.querySelector(".right-slide-btnlg");

const slides = document.querySelectorAll(".slide");
// console.log(slides);
const slider = document.querySelector(".slider");

const minusIcon = document.querySelector(".minus-icon");
const plusIcon = document.querySelector(".plus-icon");
const number = document.querySelector(".text");
const cartNumber = document.querySelector(".cart-number");
const addToCart = document.querySelector(".add-to-cart-btn");
const noOfItem = document.querySelector(".qty-item");
const itemPrice = document.querySelector(".price");
// console.log(itemPrice);
const itemPriceValue = itemPrice.textContent;
// console.log(itemPriceValue);
const totalPrice = document.querySelector(".total-price");
const checkOut = document.querySelector(".checkout");

const closelg = document.querySelector(".close-lg");
const deleteIcon = document.querySelector(".delete-icon");
const ovelaylg = document.querySelector(".overlay-lg");

const maxslide = slides.length;
// const maxslidelg = sliderlg.length;
// slider.style.transform = "scale(0.4) translateX(800px)";
// slider.style.overflow = "visible";

const thumbnailConatiner = document.querySelector(".thumbnail-images");
const thumbnailConatinerlg = document.querySelector(".thumbnail-imageslg");

const createThumbnailImg = function () {
  slides.forEach(function (_, i) {
    thumbnailConatiner.insertAdjacentHTML(
      "beforeend",
      `<img src="./ecommerce-product-page-main/images/image-product-${
        i + 1
      }-thumbnail.jpg" alt="thumbnail-images"  class="w-16 h-16  rounded-lg thumbnail-image" data-slide="${i}"> `
    );
  });
};
createThumbnailImg();
const activeImg = function (slide) {
  document
    .querySelectorAll(".thumbnail-image")
    .forEach((img) => img.classList.remove("active"));
  document;
  document
    .querySelectorAll(".thumbnail-image")
    .forEach((img) => img.classList.remove("overlay"));
  document
    .querySelector(`.thumbnail-image[data-slide="${slide}"]`)
    .classList.add("active");
  document
    .querySelector(`.thumbnail-image[data-slide="${slide}"]`)
    .classList.add("overlay");
};
activeImg(0);

const createThumbnailImglg = function () {
  slideslg.forEach(function (_, i) {
    thumbnailConatinerlg.insertAdjacentHTML(
      "beforeend",
      `<img src="./ecommerce-product-page-main/images/image-product-${
        i + 1
      }-thumbnail.jpg" alt="thumbnail-images"  class="w-16 h-16 focus:opacity-70 focus:border focus:border-orange cursor-pointer rounded-lg thumbnail-imagelg" data-slidelg="${i}"> `
    );
  });
};
createThumbnailImglg();

const activeImglg = function (slidelg) {
  document
    .querySelectorAll(".thumbnail-imagelg")
    .forEach((img) => img.classList.remove("active"));
  document;
  document
    .querySelectorAll(".thumbnail-imagelg")
    .forEach((img) => img.classList.remove("overlay"));
  document
    .querySelector(`.thumbnail-imagelg[data-slidelg="${slidelg}"]`)
    .classList.add("active");
  document
    .querySelector(`.thumbnail-imagelg[data-slidelg="${slidelg}"]`)
    .classList.add("overlay");
};
activeImglg(0);

const gotoSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
gotoSlide(0);
const gotoSlidelg = function (slide) {
  slideslg.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
gotoSlidelg(0);

let curSlide = 0;
const nextSlide = function () {
  if (curSlide === maxslide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  gotoSlide(curSlide);
  activeImg(curSlide);
  activeImglg(curSlide);
};
const nextSlidelg = function () {
  if (curSlide === maxslide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  gotoSlidelg(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxslide - 1;
  } else {
    curSlide--;
  }
  gotoSlide(curSlide);
  activeImg(curSlide);
  activeImglg(curSlide);
};
const prevSlidelg = function () {
  if (curSlide === 0) {
    curSlide = maxslide - 1;
  } else {
    curSlide--;
  }
  // gotoSlide(curSlide);
  gotoSlidelg(curSlide);
};

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

rightBtnlg.addEventListener("click", nextSlidelg);
leftBtnlg.addEventListener("click", prevSlidelg);

//thumbnail function
thumbnailConatiner.addEventListener("click", function (e) {
  if (e.target.classList.contains("thumbnail-image")) {
    const { slide } = e.target.dataset;
    // e.target.classList.add("overlay");
    // e.target.classList.add("active");
    gotoSlide(slide);
    activeImg(slide);
  } else {
    e.target.classList.remove("overlay");
  }
});

thumbnailConatinerlg.addEventListener("click", function (e) {
  if (e.target.classList.contains("thumbnail-imagelg")) {
    const { slidelg } = e.target.dataset;
    // e.target.classList.add("overlay");
    // e.target.classList.add("active");
    gotoSlidelg(slidelg);
    activeImglg(slidelg);
  } else {
    e.target.classList.remove("overlay");
  }
});

// // empty cart function
cartImg.addEventListener("click", function (e) {
  emptyCart.classList.toggle("hidden");
});

closelg.addEventListener("click", function (e) {
  lighthouse.classList.add("hidden");
});

slides.forEach((sl) => {
  if (window.innerWidth > 765) {
    sl.addEventListener("click", function (e) {
      lighthouse.classList.remove("hidden");
    });
  }
});

function updateTotal(value) {
  number.textContent = value;
  cartNumber.textContent = value;
  noOfItem.textContent = `x${value}`;
  grandtotal = value * itemPriceValue;
  totalPrice.textContent = `$${grandtotal.toFixed(2)}`;
  if (value === 0) {
    cartNumber.classList.add("hidden");
    fillCart.classList.add("hidden");
    emptyCart.classList.remove("hidden");
  }
}

minusIcon.addEventListener("click", (e) => {
  if (incearse > 0) {
    incearse--;
  }
  updateTotal(incearse);
});
plusIcon.addEventListener("click", (e) => {
  incearse++;
  updateTotal(incearse);
});

addToCart.addEventListener("click", (e) => {
  if (incearse === 0) {
    incearse = 1;
  }
  emptyCart.classList.add("hidden");
  cartNumber.classList.remove("hidden");
  fillCart.classList.remove("hidden");
  updateTotal(incearse);
});

deleteIcon.addEventListener("click", (e) => {
  incearse = 0;
  grandtotal = 0;
  updateTotal(incearse);
});

checkOut.addEventListener("click", (e) => {
  window.location.reload();
});
// menu click
menu.addEventListener("click", (e) => mobileMenu.classList.remove("hidden"));
// close mobile
mobileClose.addEventListener("click", (e) =>
  mobileMenu.classList.add("hidden")
);
// ovelaylg.addEventListener("click", (e) =>
//   lighthouse.classList.remove("hidden")
// );
