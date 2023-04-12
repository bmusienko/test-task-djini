let btn_show_more = document.getElementsByClassName('show-more')
let btn_show_less = document.getElementsByClassName('show-less')

Array.from(btn_show_more).forEach(function(element) {
  let text = element.parentElement.parentElement.firstElementChild.getAttribute('data-full-text')
  element.parentElement.parentElement.firstElementChild.innerHTML = text.slice(0, 85)
  element.addEventListener("click", function()
    {
      this.parentElement.parentElement.firstElementChild.innerHTML = this.parentElement.parentElement.firstElementChild.getAttribute('data-full-text')
      this.parentElement.lastElementChild.classList.remove('hide')
      this.classList.add('hide')
    }, false);
  if(text.length <= 85) {
    element.classList.add('hide')
  }

});

Array.from(btn_show_less).forEach(function(element) {
  let text = element.parentElement.parentElement.firstElementChild.getAttribute('data-full-text')
  element.addEventListener("click", function()
    {
      this.parentElement.parentElement.firstElementChild.innerHTML = text.slice(0, 85)
      this.parentElement.firstElementChild.classList.remove('hide')
      this.classList.add('hide')
    }, false);
  if(text.length <= 85) {
    element.classList.add('hide')
  }
  
});