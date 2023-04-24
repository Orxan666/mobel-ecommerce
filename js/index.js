console.log(products);
let productCard = document.querySelector("#pro");

products.map((item) => {
  productCard.innerHTML += `
  <div class="col-lg-4">
<img class="img-fluid" src="${item.imgUrl}"/>
      <h1>${item.price}</h1>
      <p>${item.description}</p>
      <h4>${item.category}</h4>
   
  </div>
  
  
  
  `;
});

$(".box").slick({
  dots: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});
// -----------------
$(".mebel-slider").slick({
  dots: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});

// let a=[1,2,3]

// a.push(4)
// push(7)

// console.log(a);

// function test() {
//   prompt("Bildirislerden xeberdar olmaq isteyirsinizmi?");
// }

// setTimeout(()=>{
//   test()
// },2000)

// setTimeout(()=>{
//   console.log("Salam Eli");
// },3000)

// setInterval(()=>{
//   console.log("Salam Xeqani");

// },2000)

// let number=Math.ceil(4.1)
// let number=Math.floor(4.6)
// let number=Math.round(4.5)
// let number=Math.min(2,3)
// console.log(number);

// let number=Math.round(Math.random()*(10-1))
// console.log(number);

// let dt = new Date();

// console.log(dt);
// console.log(dt.getDate());
// console.log(dt.getMonth()+1);
// console.log(dt.getMinutes());
// console.log(dt.getFullYear());

// function dtFunct(){
//   return dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()
// }
// setInterval(()=>{
//  console.log(dtFunct());
//   },1000)
setInterval(() => {
  let time = document.querySelector("#time");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "PM";
  if (hours > 12) {
    day_night = "PM";
    hours = hours - 12;
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  time.textContent = hours + ":" + minutes + ":" + seconds + day_night;
}, 1000);
