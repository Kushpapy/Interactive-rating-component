const btnEl = document.querySelectorAll('.btn-rating');
const submitEl = document.querySelector('.submit-btn');
const ratingEl = document.querySelector('.component-container');
const thankYouEl = document.querySelector('.thank-you-container');
const numEl = document.querySelector('.thank-you-paragraph span')

btnEl.forEach(el => {
    el.addEventListener('click', function(e){
        const clicked = e.target;
        const clickedNum = clicked.dataset.clicked;

        btnEl.forEach(otherButton => {
            if (otherButton !== clicked && otherButton.classList.contains('clicked')) {
              otherButton.classList.remove('clicked');
            }
          });
      
        
       clicked.classList.add('clicked');
        numEl.textContent = clickedNum;
    })
})

submitEl.addEventListener('click', function(){
    ratingEl.classList.add('hidden');
    thankYouEl.classList.remove('hidden');
})