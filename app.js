let swiper = new Swiper(".mySwiper", {
  loop: true,  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  let menu = document.getElementById("menu");
  let navigation = document.querySelector(".links");
  let menuClose = document.querySelector(".menu-close");
  
  menu.addEventListener("click", () => {
    navigation.classList.add("menu-active");
    menu.style.display = "none";
    menuClose.style.display = "block";
  });
  
  menuClose.addEventListener("click", () => {
    navigation.classList.remove("menu-active");
    menu.style.display = "block";
    menuClose.style.display = "none";
  });
  let url = "http://localhost:3000/scriptsCarts";
  
  let caruSelCart = document.querySelector(".swiper-wrapper");
  
  async function CaruselMenu() {
    try {
      const res = await axios.get(url);
      const data = res.data;
      data.map((scripts) => {
        caruSelCart.innerHTML += `
  <div class="swiper-slide">
  <a href="">
      <img src="${scripts.img}" alt="">
      <div class="carousel-txt d-flex">
          <h2 class="carousel-title">${scripts.title}</h2>
          <p class="carousel-description">${scripts.description}</p>
          <p class="carousel-price">price:${scripts.price}</p>
      </div>
  </a>
  </div>
  `;
      });
    } catch (err) {
      console.error();
    }
  }
  CaruselMenu();
  
  let commentCart = document.querySelector(".comment-cards");
  async function ShowCarts() {
    try {
      const res = await axios.get(url);
      const data = res.data;
      data.slice(0, 3).map((scripts) => {
        console.log(scripts);
        commentCart.innerHTML += `
        <div class="comment-card">
            <a href="">
            <p class="comment-user-name">${scripts.title}</p>
            <p class="comment-course-name">${scripts.teachName}</p>
            <p class="comment-txt">${scripts.description}</p>
        </a>
        </div>
              `;
      });
      console.log(data);
    } catch (err) {
      console.error();
    }
  }
  ShowCarts();
  let header = document.querySelector("header")
  window.addEventListener('scroll', function() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if(scroll > 50 ){
      header.classList.add("fixed")
    }else{
      header.classList.remove("fixed")
    }
  });
  