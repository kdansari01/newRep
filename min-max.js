const display = document.getElementById("display");
// const max = document.getElementById("max");
// const min = document.getElementById("min");
// const one = document.getElementById("1");
// const two = document.getElementById("2");
// const three = document.getElementById("3");
// const four = document.getElementById("4");
// const five = document.getElementById("5");
// const six = document.getElementById("6");
// const seven = document.getElementById("7");
// const eight = document.getElementById("8");
// const nine = document.getElementById("9");
// const zero = document.getElementById("0");
const enter = document.getElementById("enter");

const buttons = document.querySelectorAll(".btn");
for (item of buttons) {
  item.addEventListener("click", function (e) {
    display.value += e.target.innerText;
  });
}

//
// input => [ ] = input.value
//

// one.addEventListener("click", function (e) {
//   display.value = display.value + e.target.innerText;
// });

// two.addEventListener("click", function (e) {
//   display.value = display.value + e.target.innerText;
// });
// three.addEventListener("click", function (e) {
//   display.value = display.value + e.target.innerText;
// });
// four.addEventListener("click", function (e) {
//   display.value = display.value + e.target.innerText;
// });
// five.addEventListener("click", function (e) {
//   display.value = display.value + e.target.innerText;
// });
// six.addEventListener("click", function (e) {
//   display.value = display.value + e.target.innerText;
// });
// seven.addEventListener("click", function (e) {
//   display.value = display.value + e.target.innerText;
// });
// eight.addEventListener("click", function (e) {
//   display.value = display.value + e.target.innerText;
// });
// nine.addEventListener("click", function (e) {
//   display.value = display.value + e.target.innerText;
// });
// zero.addEventListener("click", function (e) {
//   display.value = display.value + e.target.innerText;
// });

enter.addEventListener("click", function (e) {
  if (!Number(min.value) && !Number(max.value)) {
    min.value = display.value;
    max.value = display.value;
  }

  if (+min.value > +display.value) {
    min.value = display.value;
  }

  if (+min.value < display.value) {
    max.value = display.value;
  }
  display.value = "";
});

// //  one.addEventListener("click", function(e){
// display.value = e.target.innerText
// //  })

// if(+min.value > display  ){

//  }
//
