
let hamWrap = document.querySelector('.ham-wrapper')
hamWrap.addEventListener('click',()=>{
  navItem = document.querySelector('.nav-items')
  if(navItem.offsetWidth === 0 && navItem.offsetHeight === 0){
  let nav = document.querySelector('.nav-items').classList.add('display-nav')
  }
  else{
    document.querySelector('.nav-items').classList.add('rem-dropdown')
  setTimeout(()=>{
    document.querySelector('.nav-items').classList.remove('rem-dropdown')
    document.querySelector('.nav-items').classList.remove('display-nav')
  },1000)
}
})