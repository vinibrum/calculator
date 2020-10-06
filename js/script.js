var elements = document.querySelectorAll('.num-bttn');

elements.forEach(function(el){
    el.addEventListener('click', function(){
        let display = document.getElementById('display');
        if(display.innerText.length == 0 && el.innerText == '0')    return;
        if(display.innerText.length < 15){
            let strAux = display.innerText.replaceAll('.','');
            console.log('straux');
            console.log(strAux);
            let newDisplayInfo = strAux + el.innerText;
            let resp = '';
            let cont = 0;
            let aux = '';
            
            for(let i = newDisplayInfo.length - 1; i >= 0; i--){
                if(cont == 3){
                    aux = '.';
                    aux += resp;
                    resp = aux;
                    cont = 0;
                }
                aux = newDisplayInfo.charAt(i);
                aux += resp;
                resp = aux;
                cont++;
            }
            display.innerText = resp;
        }
    });
});

var el = document.getElementById('backspace-bttn');
el.addEventListener('click', function(){
    let display = document.getElementById('display');
    display.innerText = display.innerText.substring(0, display.innerText.length - 1);
});
