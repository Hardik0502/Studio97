let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener("click",function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener("click",function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});


let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animation');
        }else{
            sec.classList.remove('show-animation');
        }
    })
}























// #glide1 .glide__slides{
//     background-color: #e9d7d3;
//     position: relative;
//     /* height: calc(100vh - 6rem); */
//     height: 50vh;
//     margin: 0 4rem;
//     overflow: hidden;
// }
// .hero .center{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//     height: 100%;
//     padding-top: 3rem;
// }
// .hero .left{
//     position: absolute;
//     top: 0;
//     left: 0;
//     transition: all 1000ms ease-in-out;
// }
// .hero .left p{
//     font-size: 1.6rem;
//     margin: 0 0 1rem;
// }
// .hero .left button{
//     color: white;
//     background-color: green;
//     font-size: 1.6rem;
//     border: none;
//     padding: 1rem 3rem;
//     margin-top: 1rem;
// }
// .hero .right{
//     flex: 0 0 50%;
//     height: 100%;
//     position: relative;
//     text-align: center;
// }
// .hero .right img{
//     position: absolute;
//     width: 55rem;
//     transition: all 1000ms ease-in-out;
// }
// .hero .right img.img1{
//     width: 85%;
//     /* right: -25%; */
//     /* bottom: -50%; */
// }
// .hero .right img.img2{
//     width: 90%;
//     right: -40%;
//     bottom: -40%;
// }
// glide__slide--active .center .right img{
//     bottom: -3%;
//     opacity: 1;
// }
// glide__slide--active .center .left {
//     opacity: 1;
//     top: 35%;
// }



// <div class="glide" id="glide1">
// <div class="glide__track" data-glide-el="track">
//   <ul class="glide__slides">
//     <li class="glide__slide">
//     <div class="center">
//         <div class="left"> <span> New Inspiration of 2025 !!</span>
//             <h1> Make Your Evvent Memorable With Us.</h1>
//             <p>Advance Booking is already Started .</p>
//             <button class="book">Book Now</button>
//         </div>
//         <div class="right">
//             <img src="/Work/HARDIK 44/Javascript/Projects JS/E-commerce 2/code/images/swipe1.jpg" class="img1" alt="" >
//         </div>
//       </div>
//     </li>
//     <li class="glide__slide">
//         <div class="center">
//             <div class="left"> <span> New Inspiration of 2025 !!</span>
//                 <h1> Make Your Evvent Memorable With Us.</h1>
//                 <p>Advance Booking is already Started .</p>
//                 <button class="book">Book Now</button>
//             </div>
//             <div class="right">
//                 <img src="/Work/HARDIK 44/Javascript/Projects JS/E-commerce 2/code/images/swipe2.jpeg" class="img1" alt="" >
//             </div>
//           </div>
//         </li>

//     </div>
//   </ul>
// </div>

{/* <script>
    let slider1 = document.querySelector('#slider1');
    if(slider1){
        new Glide(slider1, {
                type : "carousel",
                StartAt : 0,
                autoplay : 2000,
                gap : 0,
                hoverpause : true,
                preview : 1,
                AnimationDuration : 800
        }).mount();
    }

    new Glide('.glide').mount()
  </script> */}