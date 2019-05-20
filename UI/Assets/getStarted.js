    
var btnModal = document.querySelector(".start-button")
var close = document.getElementById("close-modal")
btnModal.addEventListener('click', modalFnc)
close.addEventListener('click',closeFnc)
// function to display modal
function modalFnc(event){
  var modal = document.getElementById('start-modal')
  // var modal = document.querySelector('.start-modal#'+event.)
  modal.style.display='block'
}
function closeFnc(){
  var modal = document.getElementById('start-modal')
  modal.style.display = "none"
}