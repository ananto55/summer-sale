let total=0;

purchase.disabled = true;
applyButton.disabled = true;
function cart(en){
    const name= en.childNodes[3].childNodes[1].innerText;
    // const post = document.querySelector("#past")
    
    const pp =document.querySelector("#past");
    const li = document.createElement('li')
     li.innerText = name;
     pp.appendChild(li);
    //  console.log(en.childNodes[3].childNodes[9].innerText.split(' ') [0]);
    const price = en.childNodes[3].childNodes[9].innerText.split(' ') [0];
    total = parseInt(total) + parseInt(price);
  
    const firstTotal =(document.getElementById('total').innerText = total);

    const purchase = document.getElementById('purchase');
    
     purchase.removeAttribute('disabled');
    //  purchase button fix
    
    
    
     const applyButton = document.getElementById('applyButton');
     if (total >=200){
        applyButton.removeAttribute('disabled');
     }

     
     const couponInput = document.getElementById('Inputcupon');
   
     applyButton.addEventListener('click',function(){
        applyCouponCode(couponInput.value);
    
     });




    //  apply coupon section done
     function applyCouponCode (value){
        const discount = document.getElementById('Discount');

        const subtotal = document.getElementById('subTotal');
        subtotal.innerText=total.toFixed(2);
        if (value=== 'SELL200'){
            const discountCal = total*0.2;
            const discountFinal =total-discountCal;
            subtotal.innerText=discountFinal.toFixed(2);
            discount.innerText=discountCal.toFixed(2);
            
        }
        else{
            discount.innerText='00.00';
            subtotal.innerText=total.toFixed(2);
        }
        
        
        const purchase = document.getElementById('purchase');
        purchase.addEventListener('click',function(){
                const modal = document.getElementById('my_modal_1');
                modal.showModal();

        });
        









     }



    
  
}
 document.getElementById('rrr').addEventListener('click',function(){
    window.location.reload();
    console.log("hellow");
 });