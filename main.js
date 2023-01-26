const hoverText = document.querySelector('.hover-text');
const hoverImg = document.querySelector('.hover-img');
const hoverAnimate = document.querySelector('.store-pick');

hoverAnimate.addEventListener('mouseover', function(){
    const item = hoverAnimate.classList;

    if(item.contains('hover-btn')){
        remove('hover-btn');
        
    }
    else{
        add('hover-btn');
        hoverText.textContent = 'Continue to Store';
        hoverImg.style.display = 'none';
    }
})