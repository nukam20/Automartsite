// Modal
var btnModal = document.querySelector(".start-btn")
var close = document.querySelector(".close")
btnModal.addEventListener('click', modalFnc)
close.addEventListener('click',closeFnc)
// function to display modal
function modalFnc(){
  var modal = document.getElementById('start-modal')
  modal.style.display='block'
}
function closeFnc(){
  var modal = document.getElementById('start-modal')
  modal.style.display = "none"
}