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

// Function to close modal for buy cars
const closeBuys = document.querySelectorAll(".close-buy")
for(const closeBuy of closeBuys){
  console.log("del")
  if(closeBuy!= null){
  closeBuy.addEventListener('click', function(event){
    let modal = document.querySelector('.start-buy');
        modal.style.display = 'none';
        modal = ""
  })
}
}

// Function to close modal for report cars
const closeReports = document.querySelectorAll(".close-report")
for(const closeReport of closeReports){
  console.log("del")
  if(closeReport!= null){
  closeReport.addEventListener('click', function(event){
    let modal = document.querySelector('.start-report');
        modal.style.display = 'none';
        modalCar.style.display = "none";
  })
}
}

// 

const buttons = document.querySelectorAll('.start-btn');
const buyButtons = document.querySelectorAll('.buy-car');
const reportButtons = document.querySelectorAll('.flag')
// Modal for view car details
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
      var modalCar
      modal=modalCar
      return modalCar
    })
  }

}

//Modal for buy cars
for (const buyButton of buyButtons){
  if(buyButton != null){
    buyButton.addEventListener('click',function(event){
      var price = buyButton.parentElement.parentElement.querySelector('.price').innerHTML;

      let modal = document.getElementById('19');
      modal.querySelector("#price").innerHTML = price;
      modal.style.display = "block";
    })
  }
}

// Function for Flag modal
for (const reportButton of reportButtons){
  if(reportButton != null){
    reportButton.addEventListener('click',function(event){
      var price = reportButton.parentElement.parentElement.querySelector('.price').innerHTML;

      let modal = document.getElementById('20');
      modal.style.display = "block";
    })
  }
}
// Function to close form for sell details
var closeSellCarDetailsForm = document.getElementById('close-sellDetails')
closeSellCarDetailsForm.addEventListener('click',closeSellCarDetailsfnc)

function closeSellCarDetailsfnc (){
  var sellDetailsContainer = document.querySelector(".sellDetails-container")
  sellDetailsContainer.style.display = "none"
  sellDetailsContainer = ""
}


 
