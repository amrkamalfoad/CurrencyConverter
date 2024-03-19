let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});
let swiper2 = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        delay: 3000, // Interval between slides in milliseconds (5 seconds in this example)
        disableOnInteraction: false, // Prevents autoplay from being stopped when the user interacts with the swiper
    },
    speed: 1000,
  });