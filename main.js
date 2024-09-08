import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import Swiper from "swiper/bundle";

const bannerSwiper = new Swiper(".banner-swiper", {
  initialSlide: 1,
  navigation: {
    nextEl: ".banner-btn-next",
    prevEl: ".banner-btn-prev",
  },
  pagination: {
    el: '.banner-pagination',
    type: 'bullets',
    clickable:true,
  },
  breakpoints: {
    992:{
      centeredSlides: true,
      slidesPerView: 1.2,
      spaceBetween: 40,
    }
  }
});

const courseSwiper = new Swiper(".course-swiper", {
  spaceBetween: 24,
  pagination: {
    el: '.course-pagination',
    type: 'bullets',
    clickable:true,
  },
  breakpoints: {
    992:{
      slidesPerView: 2,
      spaceBetween: 0,
      grid:{
        fill:"row",
        rows:2,
      }
    }
  }
});

const recommendSwiper = new Swiper(".recommend-swiper", {
  spaceBetween: 24,
  slidesPerView: 1.15,
  initialSlide: 1,
  navigation: {
    nextEl: ".recommend-btn-next",
    prevEl: ".recommend-btn-prev",
  },
  breakpoints: {
    992:{
      initialSlide: 0,
      slidesPerView: 4,
    }
  }
});

const topicsSwiper = new Swiper(".topics-swiper", {
  spaceBetween: 24,
  slidesPerView: 1.2,
  grid:{
    fill:"row",
    rows:2
  },
  breakpoints: {
    992:{
      slidesPerView: 2,
      grid:{
        rows:4,
      },
    }
  }
});

const teacherSwiper = new Swiper(".teacher-swiper", {
  spaceBetween: 48,
  slidesPerView: 1.08,
  pagination: {
    el: '.teacher-pagination',
    type: 'bullets',
    clickable:true,
  },
  breakpoints: {
    992:{
      spaceBetween: 56,
      slidesPerView: 3.08,
    }
  }
});

//teacher-course
const teacherCourseSwiper = new Swiper(".teacher-course-swiper", {
  spaceBetween: 16,
  slidesPerView: 1,
  breakpoints: {
    992:{
      spaceBetween: 24,
      slidesPerView: 4,
    }
  }
});