const inputValue = document.querySelector('#items');
const btn = document.querySelector('#submit');
const ulList = document.querySelector('.ul-list');
const searchInput = document.querySelector('#search-input');
btn.addEventListener('click', (e)=> {
    e.preventDefault();
    if(inputValue.value.length > 0){
        const li = document.createElement('li');
        li.classList.add('item-list');
        li.innerHTML= inputValue.value;
        ulList.appendChild(li);

        const button = document.createElement('button');
        button.classList.add('remove-btn');
        button.innerText= 'X';
        li.appendChild(button);

        inputValue.value = '';
    }
});
ulList.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('remove-btn')){
        e.target.parentElement.remove();
    }
});
searchInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    const text = e.target.value.toLowerCase();
    const li = ulList.getElementsByTagName('li');
    Array.from(li).forEach((item) => {
        const itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none';
        }
    })
})
 

