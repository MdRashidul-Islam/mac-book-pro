// set a value in a button by function
function price(name, price){
    const product= document.getElementById(name+'-total');
    const productPrice = price;
    product.innerText = parseInt(productPrice);

    //call update total function
    updateTotal();
}

//sum total price 
function updateTotal(name){
              const memoryInput = document.getElementById('memory-total').innerText;
              const ssdInput = document.getElementById('ssd-total').innerText;
              const deliInput = document.getElementById('deli-total').innerText;
              
              const ssdPrice = parseInt(ssdInput);
              const memoryPrice = parseInt(memoryInput);
              const deliCost = parseInt(deliInput);
      
    const total = ssdPrice + memoryPrice +deliCost+1299
      
    document.getElementById('total-price').innerText = total
    document.getElementById('total').innerText = total
}

//promo code 

document.getElementById('promo-btn').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input')
    const promoInputText = promoInput.value
    const promoAmount = parseInt(promoInputText)
    

    if(promoInput.value == 'stevekaku'){
        const previousTotalInput = document.getElementById('total');
       
        const previousTotalText = previousTotalInput.innerText
       
        const previousTotalCost = parseInt(previousTotalText)
       
        const discountAmount = previousTotalCost * 0.2
        const currentTotalText = previousTotalCost - discountAmount
        const currentTotalCost = parseInt(currentTotalText)
        
 
        previousTotalInput.innerText = currentTotalCost

        //clean promoInput

       promoInput.value = ' ';
    }
    
})

// event handler 
document.getElementById('memory-btn1').addEventListener('click', function(){
price('memory', 0)
})

document.getElementById('memory-btn2').addEventListener('click', function(){
price('memory', 180);
})

document.getElementById('ssd-btn1').addEventListener('click', function(){
price('ssd', 0)
})

document.getElementById('ssd-btn2').addEventListener('click', function(){
price('ssd', 100)
})

document.getElementById('ssd-btn3').addEventListener('click', function(){
 price('ssd', 180)
})

document.getElementById('deli-btn1').addEventListener('click', function(){
 price('deli', 0)
})

document.getElementById('deli-btn2').addEventListener('click', function(){
 price('deli', 20)
})

