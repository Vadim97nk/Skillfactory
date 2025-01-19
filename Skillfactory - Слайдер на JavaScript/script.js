const hotels = [{
    url: "image.png",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request"
}, {
    url: "image2.png",
    title: "Sochi Thieves",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
}, {
    url: "image3.png",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request"
}];

function initSlider() {
    if (!hotels || !hotels.length) return;

    const sliderImages = document.querySelector(".twosection__image");
    const sliderArrows = document.querySelector(".onesection__icon");
    const sliderDots = document.querySelector(".icon__circles");
    const sliderLinks = document.querySelector(".twosection__links");

    initImages();
    initArrows();
    initDots();
    initTitles();
    initLinks();

    function initImages() {
        hotels.forEach((image, index) => {
          imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${hotels[index].url});" data-index="${index}"></div>`;
          sliderImages.innerHTML += imageDiv;
        });
      }

      function initArrows() {
        sliderArrows.querySelectorAll(".icon__arrow").forEach(arrow => {
          arrow.addEventListener("click", function() {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
              nextNumber = curNumber === 0? hotels.length - 1 : curNumber - 1;
            } else {
              nextNumber = curNumber === hotels.length - 1? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
          });
        });
      }

      function initDots() {
        hotels.forEach((image, index) => {
          dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
          sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
          dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          })
        })
      }

      function initLinks() {
        hotels.forEach((image, index) => {
          link = `<div class="slider__link-item n${index} ${index === 0? "activelink" : ""}" data-index="${index}">${hotels[index].title}</div>`;
          sliderLinks.innerHTML += link;
        });
        sliderLinks.querySelectorAll(".slider__link-item").forEach(link => {
          link.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          })
        })
      }

      function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        sliderLinks.querySelector(".activelink").classList.remove("activelink");
        sliderLinks.querySelector(".n" + num).classList.add("activelink");
        changeText(num);
      }

      function initTitles() {
        cityDiv = `<p class="info__main_text-city">${hotels[0].city}</p>`;
        document.querySelector(".city").innerHTML += cityDiv;
        areaDiv = `<p class="info__main_text-area">${hotels[0].area}</p>`;
        document.querySelector(".area").innerHTML += areaDiv;
        timeDiv = `<p class="info__main_text-time">${hotels[0].time}</p>`;
        document.querySelector(".time").innerHTML += timeDiv;
        costDiv = `<p class="info__main_text-cost">${hotels[0].cost}</p>`;
        document.querySelector(".cost").innerHTML += costDiv;
      }

      function changeText(num) {
        document.querySelector(".info__main_text-city").innerText = hotels[num].city;
        document.querySelector(".info__main_text-area").innerText = hotels[num].area;
        document.querySelector(".info__main_text-time").innerText = hotels[num].time;
        document.querySelector(".info__main_text-cost").innerText = hotels[num].cost;
      }
}

document.addEventListener("DOMContentLoaded", initSlider);