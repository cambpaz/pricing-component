let toggle = document.querySelector('#toggle');
let monthly = document.querySelectorAll('.price-monthly');
let anually = document.querySelectorAll('.price-anually');

toggle.addEventListener('change', function(){
    if (toggle.checked) {
        monthly.forEach(price => price.style.display = "flex");
        anually.forEach(price => price.style.display = "none");
    } else {
        monthly.forEach(price => price.style.display = "none");
        anually.forEach(price => price.style.display = "flex");
    }
})
