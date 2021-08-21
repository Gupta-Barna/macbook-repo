// handle price button

const id1 = document.getElementById('button-1');
const id2 = document.getElementById('button-2');
const id3 = document.getElementById('button-3');
const id4 = document.getElementById('button-4');
const id5 = document.getElementById('button-5');
const id6 = document.getElementById('button-6');
const id7 = document.getElementById('button-7');
const totalCost = document.getElementById('total')


// update total price 


id1.addEventListener('click', function(){
  memory.innerText = '0';
  updateTotal0();
 
})
id2.addEventListener('click', function(){
memory.innerText = '180';
updateTotal1();

})

id3.addEventListener('click', function(){
storage.innerText = '0'
updateTotal2();
})



function updateTotal(){
  total.innerText = '1799'
 const totalF = parseFloat(memory.innerText + storage.innerText + delivery.innerText + total.innerText);
 console.log(totalF);

}

function updateTotal0(){
  total.innerText = '1299'
 const totalRes0 = parseFloat(memory.innerText + total.innerText);
 console.log(totalRes0);

}
function updateTotal1(){
    total.innerText = '1479'
   const totalRes = parseFloat(memory.innerText + total.innerText);
   console.log(totalRes);
  
  }
function updateTotal2(){
    total.innerText = '1499'
   const totalRes2 = parseFloat(storage.innerText + total.innerText);
   console.log(totalRes2);
  
  }
function updateTotal3(){
  total.innerText = '1659'
 const totalRes3 = parseFloat(storage.innerText + total.innerText);
 console.log(totalRes3);

}
function updateTotal4(){
    total.innerText = '1759'
   const totalRes4 = parseFloat(storage.innerText + total.innerText);
   console.log(totalRes4);
  
  }

function updateTotal5(){
  total.innerText = '1299'
 const totalRes5 = parseFloat(delivery.innerText + total.innerText);
 console.log(totalRes5);

}

id4.addEventListener('click', function(){
    storage.innerText = '180'
    updateTotal3();
 

})
id5.addEventListener('click', function(){
    storage.innerText = '100'
    updateTotal4();
  
})
id6.addEventListener('click', function(){
    delivery.innerText = '0'
    updateTotal5();
  

})
id7.addEventListener('click', function(){
    delivery.innerText = '20'
    updateTotal();

})

// bonus part

// apply button setting

document.getElementById('apply-btn').addEventListener('click', function () {
   
    const buttonField = document.getElementById('amount');
    const applyButton = buttonField.value;
   
    
    if (applyButton == 'stevekaku' ) {
       
      
    }
    buttonField.value = '';
    updateAmount();


   
});

// percentage 20% less
function updateAmount(){
    
 const  amountPercentage  = parseFloat( amount-((amount * 20) / 100));

 amountPercentage.innerText
  }

