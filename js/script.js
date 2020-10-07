var elements = document.querySelectorAll('.num-bttn');

elements.forEach(function(el){
    el.addEventListener('click', function(){
        let display = document.getElementById('display');
        if(display.innerText.length == 0 && el.innerText == '0')    return;
        if(display.innerText == '0')    display.innerText = '';
        if(display.innerText.length < 15){
            let strAux = display.innerText.replaceAll('.','');
            let newDisplayInfo = strAux + el.innerText;
            display.innerText = addSeparator(newDisplayInfo);
        }
    });
});

var el = document.getElementById('backspace-bttn');
el.addEventListener('click', function(){
    let display = document.getElementById('display');
    let strAux = display.innerText.replaceAll('.', '');
    let newDisplayInfo = strAux.substring(0, strAux.length - 1);
    let resp = addSeparator(newDisplayInfo);
    
    if(resp.length == 0)    display.innerText = '0';
    else                    display.innerText = resp;
    
});

function addSeparator(str){
    let resp = '';
    let cont = 0;
    let aux = '';
    for(let i = str.length - 1; i >= 0; i--){
        if(cont == 3){
            aux = '.';
            aux += resp;
            resp = aux;
            cont = 0;
        }
        aux = str.charAt(i);
        aux += resp;
        resp = aux;
        cont++;
    }
    return resp;
}