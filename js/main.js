$(document).ready(function () {
  $(".banner").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  });
});


document.addEventListener("DOMContentLoaded", () => {
  console.log("Website THPT Đôn Châu đã sẵn sàng!");

  const form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Gửi thành công!');
  });
});