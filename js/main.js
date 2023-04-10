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