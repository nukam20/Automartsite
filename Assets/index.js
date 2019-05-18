// Modal

const closes = document.querySelectorAll(".close-view")
for(const close of closes){
  console.log("del")
  if(close != null){
  close.addEventListener('click', function(event){
    let modal = document.querySelector('.start-modal');
        modal.style.display = 'none';
  })
}
}

const buttons = document.querySelectorAll('.start-btn');
for (const button of buttons){
  console.log('hs')

  if(button != null ){
    button.addEventListener('click', function(event){
      var manufacturer = ((button.parentElement.parentElement).querySelector('.manufacturer')).innerHTML;
      var model = ((button.parentElement.parentElement).querySelector('.model')).innerHTML;
      var price = ((button.parentElement.parentElement).querySelector('.price')).innerHTML;
      console.log(((button.parentElement.parentElement).querySelector('.price')).innerHTML)
      var state = ((button.parentElement.parentElement).querySelector('.state')).innerHTML;
      var transmission = ((button.parentElement.parentElement).querySelector('.transmission')).innerHTML;
      // console.log(x);

      let modal = document.getElementById('199');
      modal.querySelector("#manufacturer").innerHTML = manufacturer;
      modal.querySelector("#model").innerHTML = model;
      modal.querySelector("#price").innerHTML = price;
      modal.querySelector("#state").innerHTML = state;
      modal.querySelector("#transmission").innerHTML = transmission;
      // modal.
      modal.style.display = 'block';
    })
  }

}

var closeSellCarDetailsForm = document.getElementById('close-sellDetails')
closeSellCarDetailsForm.addEventListener('click',closeSellCarDetailsfnc)

function closeSellCarDetailsfnc (){
  var sellDetailsContainer = document.querySelector(".sellDetails-container")
  sellDetailsContainer.style.display = "none"
  sellDetailsContainer = ""
}


  // function viewDetail(e){
  //   let tgt = e.target
  //   let parentDiv = tgt.parentNode.parentNode.parentNode.id
  //   let price = document.querySelector('#' + parentDiv + ' ' + '.price').innerHTML;
  //   let model = document.querySelector('#' + parentDiv + ' ' + '.model').innerHTML;
    
  //   let src = document.querySelector('#' + parentDiv + ' ' + '.img').src;
  //   let form = document.querySelector('.viewDform').classList.add('viewForm')
  //   let formPrice = document.querySelector('.price').innerHTML = price;
  //   let formModel = document.querySelector('.model').innerHTML = model;
  //   let formBody = document.querySelector('.b-type').innerHTML = model;
  //   let formManufacturer = document.querySelector('.manufacturer').innerHTML = model;
  //   let formImg = document.querySelector('.img').src = src;
  //   // alert(price)
    
  //   }

function closeOrder(){
  
  document.querySelector('.viewOform').classList.add('close-modal');

  setTimeout(()=>{
      document.querySelector('.viewOform').classList.remove('viewForm');
      document.querySelector('.viewOform').classList.remove('close-modal');
  },1500)

  (function remInterval(){
  clearTimeout()
})();
  
}
