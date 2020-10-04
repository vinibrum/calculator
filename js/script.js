var elements = document.querySelectorAll('.num-bttn');
elements.forEach(function(el){
    el.addEventListener('click', function(){
        let display = document.getElementById('display');
        if(display.innerText.length < 15)
            //if(display.innerText.length > 0 && display.innerText.length % 3 == 0)  
            display.innerText += el.innerText;
    });
});

var el = document.getElementById('backspace-bttn');
el.addEventListener('click', function(){
    let display = document.getElementById('display');
    display.innerText = display.innerText.substring(0, display.innerText.length - 1);
});

/*
el.addEventListener('click', function(){
    let display = document.getElementById('display');
    display.innerText += el.innerText;
});
*/