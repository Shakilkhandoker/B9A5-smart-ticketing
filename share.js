// const allButton = document.getElementsByClassName('btn-seat');
// for (const Btn of allButton) {
//    Btn.addEventListener("click", function () {
//       Btn.style.backgroundColor = 'green';
//    })
// }


// button selection
document.addEventListener('DOMContentLoaded', function () {
   const selectableButtons = document.querySelectorAll('.btn-seat');
   const maxSelections = 40;
   let selectedButtons = 0;

   selectableButtons.forEach(button => {
      button.addEventListener('click', function () {
         if (selectedButtons >= maxSelections) {
            alert('You can choose more then four set at a time.');
         } else if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            button.style.backgroundColor='rgba(128, 128, 128, 0.264)'
            selectedButtons--;
         } else {
            button.classList.add('selected');
            button.style.backgroundColor = 'green';
            selectedButtons++;
            if (selectedButtons >= maxSelections) {
               selectableButtons.forEach(disableButton);
            }
         }
      });
   });

   function disableButton(button) {
      button.disabled = true;
   }
});


// input field
document.getElementById('input-field').addEventListener('input', function () {
   const inputValue = this.value.trim();

   const isNumber = !isNaN(inputValue) && inputValue !== '';
   document.getElementById('myButton').disabled = !isNumber;
});

// reload function
document.addEventListener('DOMContentLoaded', function () {

   const refreshButton = document.getElementById('refreshButton');
   refreshButton.addEventListener('click', function () {
      location.reload();
   });
});



// ------------------------------------
// scroll the button to go set selection section ------

document.getElementById('scroll-bar').addEventListener('click', function () {
   document.getElementById('set-container').scrollIntoView({ behavior: 'smooth' });
});


const allBtn = document.getElementsByClassName('btn-seat');
let count = 0;
let sum = 0;
let sub = 1;
for (const btn of allBtn) {
   btn.addEventListener("click", function (e) {
      count = count + 1;
      const calcu = document.getElementById('calculate-seat-count').innerText = count;

      const ticketName = e.target.innerText;

      const travel = document.getElementById('ticket-price');
      const li = document.createElement('li');
      const p = document.createElement('span')
      const p2 = document.createElement('span')
      const p3 = document.createElement('span')
      p.innerText = ticketName;
      p2.innerText = "Economy"
      p3.innerText = "550"
      li.appendChild(p);
      li.appendChild(p2);
      li.appendChild(p3);
      travel.appendChild(li);


      const addPrice = document.getElementById('total-price').innerText;
      const converted = parseInt(addPrice);
      const sum = converted + parseInt(p3.innerText);

      document.getElementById('total-price').innerText = sum;


      const grandTotal = document.getElementById('grand-total');
      grandTotal.innerText = sum;



      const currentSeat = document.getElementById('available-seat').innerText;
      const convert = parseInt(currentSeat)
      const sub = convert - 1;
      const finalResult = document.getElementById('available-seat').innerText = sub;
      console.log(finalResult);



   })
}


const applyButton = document.getElementById('apply-button');
applyButton.addEventListener("click", function () {
   const couponElement = document.getElementById("input-field").value;
   console.log(couponElement);

   const discountAmountElement = document.getElementById("dis-total");
   const grandTotalElement = document.getElementById('grand-total');

   if (couponElement === "NEW15") {
      const grandTotal = parseInt(grandTotalElement.innerText);
      const result = grandTotal * 0.15;
      console.log(result);

      discountAmountElement.innerText = result;

      document.getElementById("grand-total").innerText = grandTotal - result;

      const playGround = document.getElementById('hidden-part');
      playGround.classList.add('hidden');


   } else if (couponElement === "Couple 20") {
      const grandTotal = parseInt(grandTotalElement.innerText);
      const result = grandTotal * 0.2;
      discountAmountElement.innerText = result;
      document.getElementById("grand-total").innerText = grandTotal - result;

      const playGround = document.getElementById('hidden-part');
      playGround.classList.add('hidden');

   } else {
      alert("Invalid Coupon");
   }
});