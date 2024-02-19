const allButton = document.getElementsByClassName('btn-change');
for (const allBtn of allButton) {
   allBtn.addEventListener("click", function () {
      allBtn.style.backgroundColor = 'green';
   })
}


// button selection
document.addEventListener('DOMContentLoaded', function () {
   const selectableButtons = document.querySelectorAll('.btn-change');
   const maxSelections = 4;
   let selectedButtons = 0;

   selectableButtons.forEach(button => {
      button.addEventListener('click', function () {
         if (selectedButtons >= maxSelections) {
            alert('You can choose more then four set at a time.');
         } else if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            selectedButtons--;
         } else {
            button.classList.add('selected');
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