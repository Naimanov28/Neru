// var car=document.getElementsByClassName('carousel-item');
// var body=document.getElementsByTagName('body')
// function cheking  ()
//     {
//         bdclass=body[0].classList
//         if (car[1].className=="carousel-item active"){
             
//                 body[0].setAttribute('style','background-color: #4CCF4C')
             

//         // console.log('GREEN = CAROUSEL #2 Active');
//     } else if  (car[0].className=="carousel-item active"){
//         body[0].setAttribute('style','background-color: #056805')
//         // console.log(' RED = CAROUSEL #1 Active ');
//     } else if  (car[2].className=="carousel-item active"){
//         body[0].setAttribute('style','background-color: #F79F0D')
//         // console.log(' YELLOW = CAROUSEL #3 Active ');
//     }else if  (car[4].className=="carousel-item active"){
//         body[0].setAttribute('style','background-color: #FA4B4B')
//         // console.log(' YELLOW = CAROUSEL #3 Active ');
//     }else if  (car[3].className=="carousel-item active"){
//         body[0].setAttribute('style','background-color: #FFBD97')
//         // console.log(' YELLOW = CAROUSEL #3 Active ');
//     }
// }
// setInterval(cheking, 200);

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})