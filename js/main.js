let dots = document.getElementById("dots");
let buttons = document.getElementsByClassName("show");

console.log(buttons)

function ShowMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("btnShow");

  if (moreText.style.display === "none") {
    dots.style.display = "none";
    btnText.innerHTML = "Show less..."; 
    moreText.style.display = "inline";
  } else {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more..."; 
    moreText.style.display = "none";
  }
}

ShowMore()

let test = buttons.className =+ 'hidden' 
console.log(test)

// for (button of buttons) {
//   console.log(button)
// }
// if(dots) {
//   buttons.classList.add("test")
// }