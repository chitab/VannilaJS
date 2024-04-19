const starValue = document.querySelector('.empty-star');
const arr = ['😢', '😔', '😐', '😄', '😎']
for(let i = 0; i < 5; i++){
    let div = document.createElement('div');
    div.className = 'star';
    starValue.appendChild(div)
}

const stars = document.querySelectorAll('.star');
const smileContainer = document.querySelector('#smile');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        const selectedSmiley = arr[index];

        // Update smiley container
        let divSmiley = document.createElement('div');
        divSmiley.className = 'smily';
        divSmiley.textContent = selectedSmiley;

        smileContainer.innerHTML = '';
        smileContainer.appendChild(divSmiley);

        // Update stars to show filled stars up to the clicked one
        stars.forEach((star, starIndex) => {
        if (starIndex <= index) {
            star.classList.add('filled-star');
        } else {
            star.classList.remove('filled-star');
        }
    });

    });
});